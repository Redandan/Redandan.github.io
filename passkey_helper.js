(function () {
  if (window.agoraPasskey) return;

  function base64UrlToBuffer(value) {
    if (!value) return new ArrayBuffer(0);
    var base64 = String(value).replace(/-/g, '+').replace(/_/g, '/');
    var padding = base64.length % 4;
    if (padding) base64 += '='.repeat(4 - padding);
    var binary = atob(base64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  function bufferToBase64Url(buffer) {
    if (!buffer) return null;
    var bytes = new Uint8Array(buffer);
    var binary = '';
    for (var i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  function decodeCredentialDescriptors(list) {
    if (!Array.isArray(list)) return list;
    return list.map(function (item) {
      var copy = Object.assign({}, item);
      if (copy.id && typeof copy.id === 'string') copy.id = base64UrlToBuffer(copy.id);
      return copy;
    });
  }

  function normalizePublicKeyOptions(options) {
    if (options && options.publicKey && !options.challenge) {
      return options.publicKey;
    }
    return options;
  }

  function decodeCreateOptions(publicKey) {
    publicKey = normalizePublicKeyOptions(publicKey);
    if (window.PublicKeyCredential &&
        typeof window.PublicKeyCredential.parseCreationOptionsFromJSON === 'function') {
      return window.PublicKeyCredential.parseCreationOptionsFromJSON(publicKey);
    }
    var copy = Object.assign({}, publicKey);
    copy.challenge = base64UrlToBuffer(copy.challenge);
    if (copy.user && typeof copy.user.id === 'string') {
      copy.user = Object.assign({}, copy.user, { id: base64UrlToBuffer(copy.user.id) });
    }
    copy.excludeCredentials = decodeCredentialDescriptors(copy.excludeCredentials);
    return copy;
  }

  function decodeGetOptions(publicKey) {
    publicKey = normalizePublicKeyOptions(publicKey);
    if (window.PublicKeyCredential &&
        typeof window.PublicKeyCredential.parseRequestOptionsFromJSON === 'function') {
      return window.PublicKeyCredential.parseRequestOptionsFromJSON(publicKey);
    }
    var copy = Object.assign({}, publicKey);
    copy.challenge = base64UrlToBuffer(copy.challenge);
    copy.allowCredentials = decodeCredentialDescriptors(copy.allowCredentials);
    return copy;
  }

  function credentialToJson(credential) {
    var response = credential.response || {};
    var json = {
      id: credential.id,
      rawId: bufferToBase64Url(credential.rawId),
      type: credential.type,
      clientExtensionResults:
          typeof credential.getClientExtensionResults === 'function'
              ? credential.getClientExtensionResults()
              : {}
    };

    if (response.attestationObject) {
      json.response = {
        clientDataJSON: bufferToBase64Url(response.clientDataJSON),
        attestationObject: bufferToBase64Url(response.attestationObject)
      };
      if (typeof response.getTransports === 'function') {
        json.response.transports = response.getTransports();
      }
    } else {
      json.response = {
        clientDataJSON: bufferToBase64Url(response.clientDataJSON),
        authenticatorData: bufferToBase64Url(response.authenticatorData),
        signature: bufferToBase64Url(response.signature),
        userHandle: bufferToBase64Url(response.userHandle)
      };
    }

    return json;
  }

  window.agoraPasskey = {
    isSupported: function () {
      return !!(window.PublicKeyCredential && navigator.credentials);
    },
    isPlatformAuthenticatorAvailable: async function () {
      if (!window.PublicKeyCredential ||
          typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable !== 'function') {
        return false;
      }
      return await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    },
    createCredential: async function (optionsJson) {
      var publicKey = JSON.parse(optionsJson);
      var credential = await navigator.credentials.create({
        publicKey: decodeCreateOptions(publicKey)
      });
      return JSON.stringify(credentialToJson(credential));
    },
    getCredential: async function (optionsJson) {
      var publicKey = JSON.parse(optionsJson);
      var credential = await navigator.credentials.get({
        publicKey: decodeGetOptions(publicKey)
      });
      return JSON.stringify(credentialToJson(credential));
    }
  };
})();
