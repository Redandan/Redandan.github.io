
    // Web Push ?????????????API
    (function() {
      'use strict';

      console.log('[WEB_PUSH_API] Web Push API initializing...');

      // ??? Web Push API ?????
      window.WebPushAPI = {

        /**
         * ??????????????
         * @param {string} vapidKey - VAPID ?????????(????????????????????????????????????????????
         * @param {string} token - ???? token (????????????????????????????????????????????
         * @returns {Promise<Object>} ???????? (??JSON ????????)
         */
        async requestNotificationPermission(vapidKey) {
          console.log('[WEB_PUSH_API] Starting permission request process...');
          console.log('[WEB_PUSH_API] VAPID Key:', vapidKey ? 'provided' : 'not provided');


          try {
            // 1. ???????????????????
            if (!this.checkBrowserSupport()) {
              throw new Error('Browser does not support Web Push');
            }

            // 2. ??????????????
            // Permission was requested synchronously by the Flutter tap handler.
            // Never open a prompt here after the VAPID network await.
            const permissionResult = Notification.permission;
            console.log('[WEB_PUSH_API] Permission request result:', permissionResult);

            if (permissionResult !== 'granted') {
              return JSON.stringify({
                success: false,
                status: permissionResult,
                error: 'Permission denied: ' + permissionResult
              });
            }

            // 3. ????????????????????????????????
            const subscriptionData = await this.createPushSubscription(vapidKey);
            console.log('[WEB_PUSH_API] Push subscription created successfully');

            // ????? JSON ???????????????????????????????????????
            const result = {
              success: true,
              status: 'permission_granted',
              subscriptionData: subscriptionData
            };
            console.log('[WEB_PUSH_API] Returning result:', {
              success: result.success,
              status: result.status,
              subscriptionPresent: !!subscriptionData
            });
            return JSON.stringify(result);

          } catch (error) {
            console.error('[WEB_PUSH_API] Permission request failed:', error?.name || 'Error');
            const errorResult = {
              success: false,
              status: 'permission_error',
              error: error.message
            };
            console.log('[WEB_PUSH_API] Returning error result:', {
              success: errorResult.success,
              status: errorResult.status,
              errorPresent: !!errorResult.error
            });
            return JSON.stringify(errorResult);
          }
        },

        /**
         * ???????????????????
         * @returns {boolean} ?????????
         */
        checkBrowserSupport() {
          const hasServiceWorker = 'serviceWorker' in navigator;
          const hasPushManager = 'PushManager' in window;
          const hasNotification = 'Notification' in window;

          console.log('[WEB_PUSH_API] Browser support check:');
          console.log('  - Service Worker:', hasServiceWorker);
          console.log('  - Push Manager:', hasPushManager);
          console.log('  - Notification:', hasNotification);

          return window.isSecureContext === true && hasServiceWorker && hasPushManager && hasNotification;
        },

        /**
         * ??????????????
         * @returns {Promise<string>} ????????
         */
        permissionState() {
          if (!this.checkBrowserSupport()) {
            const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
            const installed = navigator.standalone === true ||
              window.matchMedia?.('(display-mode: standalone)').matches === true;
            return window.isSecureContext === true && ios && !installed
              ? 'installation-required' : 'unsupported';
          }
          return ['default', 'denied', 'granted'].includes(Notification.permission)
            ? Notification.permission : 'unsupported';
        },

        async requestPermission() {
          if (!this.checkBrowserSupport()) return 'unsupported';
          console.log('[WEB_PUSH_API] Requesting notification permission...');

          if (Notification.permission === 'granted') {
            console.log('[WEB_PUSH_API] Permission already granted');
            return 'granted';
          }

          if (Notification.permission === 'denied') {
            console.log('[WEB_PUSH_API] Permission already denied');
            return 'denied';
          }

          // ????????
          const permission = await Notification.requestPermission();
          console.log('[WEB_PUSH_API] Permission request result:', permission);

          return permission;
        },

        /**
         * ??????????????????????????
         * @param {string} vapidKey - VAPID ?????????
         * @returns {Promise<Object>} ???????
         */
        async boundedPushLookup(operation) {
          let timeout;
          try {
            return await Promise.race([
              operation,
              new Promise((_, reject) => {
                timeout = setTimeout(() => reject(new Error('Notification service timed out')), 3000);
              })
            ]);
          } finally { clearTimeout(timeout); }
        },

        pushWorkerURL() { return new URL('/push/worker.js', window.location.href).href; },
        pushScopeURL() { return new URL('/push/', window.location.href).href; },

        isPushRegistration(registration) {
          return registration.scope === this.pushScopeURL() &&
            [registration.active, registration.waiting, registration.installing]
              .filter(Boolean).length > 0 &&
            [registration.active, registration.waiting, registration.installing]
              .filter(Boolean).every(worker => worker.scriptURL === this.pushWorkerURL());
        },

        async currentPushRegistration() {
          const registrations = await this.boundedPushLookup(navigator.serviceWorker.getRegistrations());
          // This worker intentionally does not control the Flutter document.
          // Never borrow a legacy caching worker or another app's push endpoint.
          return registrations.find(item => this.isPushRegistration(item));
        },

        async ensurePushRegistration() {
          const registration = await this.boundedPushLookup(navigator.serviceWorker.register(
            this.pushWorkerURL(), {scope: this.pushScopeURL(), updateViaCache: 'none'}));
          if (!this.isPushRegistration(registration)) throw new Error('Unexpected notification worker');
          const worker = registration.installing || registration.waiting || registration.active;
          if (worker?.state !== 'activated') {
            let changed;
            try {
              await this.boundedPushLookup(new Promise((resolve, reject) => {
                changed = () => {
                  if (worker.state === 'activated') resolve();
                  else if (worker.state === 'redundant') reject(new Error('Notification worker failed'));
                };
                worker.addEventListener('statechange', changed);
                changed();
              }));
            } finally { if (changed) worker.removeEventListener('statechange', changed); }
          }
          return registration;
        },

        async getCurrentPushSubscription() {
          try {
            if (!this.checkBrowserSupport() || Notification.permission !== 'granted') {
              return JSON.stringify({success: true, subscriptionData: null});
            }
            const registration = await this.currentPushRegistration();
            const subscription = registration
              ? await this.boundedPushLookup(registration.pushManager.getSubscription()) : null;
            return JSON.stringify({success: true, subscriptionData: subscription ? {endpoint: subscription.endpoint} : null});
          } catch (_) {
            return JSON.stringify({success: false});
          }
        },

        async createPushSubscription(vapidKey) {
          const registration = await this.ensurePushRegistration();
          const existing = await this.boundedPushLookup(registration.pushManager.getSubscription());
          const subscription = existing || await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(vapidKey)
          });
          const deviceInfo = this.generateDeviceInfo();
          return {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
              auth: this.arrayBufferToBase64(subscription.getKey('auth'))
            },
            userAgent: deviceInfo.userAgent,
            deviceType: deviceInfo.deviceType,
            deviceName: deviceInfo.deviceName
          };
        },

        generateDeviceInfo() {
          const userAgent = navigator.userAgent;
          const deviceName = navigator.platform + ' - ' + (navigator.userAgentData?.brands?.[0]?.brand || 'Unknown Browser');
          const deviceId = this.generateDeviceId();
          const browserInfo = {
            name: navigator.userAgentData?.brands?.[0]?.brand || 'Unknown',
            version: navigator.userAgentData?.brands?.[0]?.version || 'Unknown',
            platform: navigator.platform,
            userAgent: userAgent
          };
          const screenInfo = {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth
          };

          return {
            userAgent,
            deviceType: 'web',
            deviceName,
            deviceId,
            browserInfo,
            screenInfo
          };
        },

        /**
         * ??????????????? ID
         * @returns {string} ???????????? ID
         */
        generateDeviceId() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          ctx.textBaseline = 'top';
          ctx.font = '14px Arial';
          ctx.fillText('Device fingerprint', 2, 2);

          const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            canvas.toDataURL()
          ].join('|');

          // ???????hash ?????
          let hash = 0;
          for (let i = 0; i < fingerprint.length; i++) {
            const char = fingerprint.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // ???????32 ??????
          }

          return Math.abs(hash).toString(36);
        },

        /**
         * ??VAPID ???????????????Uint8Array
         * @param {string} base64String - Base64 ????????
         * @returns {Uint8Array} Uint8Array
         */
        urlBase64ToUint8Array(base64String) {
          const padding = '='.repeat((4 - base64String.length % 4) % 4);
          const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

          const rawData = window.atob(base64);
          const outputArray = new Uint8Array(rawData.length);

          for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
          }

          return outputArray;
        },

        /**
         * ??ArrayBuffer ???????Base64
         * @param {ArrayBuffer} buffer - ArrayBuffer
         * @returns {string} Base64 ????????
         */
        arrayBufferToBase64(buffer) {
          const bytes = new Uint8Array(buffer);
          let binary = '';
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        }
      };

      console.log('[WEB_PUSH_API] Web Push API initialization completed');

      // ??????????????Flutter ??????
      window.requestPushPermission = window.WebPushAPI.requestPermission.bind(window.WebPushAPI);
      window.checkPushBrowserSupport = window.WebPushAPI.checkBrowserSupport.bind(window.WebPushAPI);
      window.requestNotificationPermission = window.WebPushAPI.requestNotificationPermission.bind(window.WebPushAPI);
      window.getPushPermissionState = window.WebPushAPI.permissionState.bind(window.WebPushAPI);
      window.getCurrentPushSubscription = window.WebPushAPI.getCurrentPushSubscription.bind(window.WebPushAPI);

    })();
  