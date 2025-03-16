// Constants
const CONFIG = {
    CHECK_INTERVAL: 5 * 60 * 1000, // 5 minutes
    REMOTE_URL: 'https://redandan.github.io/version.json',
    LOCAL_STORAGE_KEY: 'app_version',
    CACHE_KEY: 'app_cache_version'
};

// Validate version object structure
function isValidVersionObject(obj) {
    return obj &&
           typeof obj === 'object' &&
           typeof obj.version === 'string' &&
           typeof obj.build_number === 'string' &&
           /^\d+\.\d+\.\d+$/.test(obj.version) &&
           /^\d+$/.test(obj.build_number);
}

// Compare versions using semantic versioning logic
function compareVersions(v1, v2) {
    try {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);
        
        if (parts1.length !== 3 || parts2.length !== 3 || 
            parts1.some(isNaN) || parts2.some(isNaN)) {
            throw new Error('Invalid version format');
        }
        
        for (let i = 0; i < 3; i++) {
            if (parts1[i] > parts2[i]) return 1;
            if (parts1[i] < parts2[i]) return -1;
        }
        return 0;
    } catch (error) {
        console.error('Version comparison error:', error);
        return 0; // 返回相等，避免不必要的更新
    }
}

async function fetchVersionInfo(url) {
    try {
        const response = await fetch(`${url}?t=${new Date().getTime()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const versionInfo = await response.json();
        if (!isValidVersionObject(versionInfo)) {
            throw new Error('Invalid version format in response');
        }
        return versionInfo;
    } catch (error) {
        throw new Error(`Failed to fetch version info: ${error.message}`);
    }
}

// 新增：顯示更新提示 UI
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 9999;
        font-family: Arial, sans-serif;
    `;
    notification.textContent = '新版本已準備就緒，正在更新...';
    document.body.appendChild(notification);
    return notification;
}

// 新增：預加載新資源
async function preloadNewResources() {
    const resources = [
        'main.dart.js',
        'flutter.js',
        'version.json',
        // 添加其他需要預加載的關鍵資源
    ];

    const preloadPromises = resources.map(async (resource) => {
        try {
            const response = await fetch(`${resource}?v=${new Date().getTime()}`);
            if (!response.ok) throw new Error(`Failed to preload ${resource}`);
            await response.blob(); // 確保完整下載
            console.log(`Preloaded: ${resource}`);
        } catch (error) {
            console.error(`Preload failed for ${resource}:`, error);
            throw error;
        }
    });

    return Promise.all(preloadPromises);
}

// 新增：清理所有類型的緩存
async function clearAllCaches() {
    try {
        // 1. 清理 Cache API
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
        }

        // 2. 清理 Service Worker
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map(reg => reg.unregister()));
        }

        // 3. 清理 localStorage 中的緩存相關項
        const cacheKeys = [
            CONFIG.LOCAL_STORAGE_KEY,
            CONFIG.CACHE_KEY,
            'flutter-app-cache'
        ];
        cacheKeys.forEach(key => localStorage.removeItem(key));

        // 4. 清理 sessionStorage
        sessionStorage.clear();

        // 5. 清理 IndexedDB
        const databases = await window.indexedDB.databases();
        databases.forEach(db => {
            window.indexedDB.deleteDatabase(db.name);
        });

        console.log('All caches cleared successfully');
    } catch (error) {
        console.error('Error clearing caches:', error);
        throw error;
    }
}

// 改進：更新處理流程
async function handleUpdate(currentVersion, remoteVersion) {
    try {
        // 1. 顯示更新通知
        const notification = showUpdateNotification();

        // 2. 清理所有緩存
        console.log('Clearing all caches...');
        await clearAllCaches();

        // 3. 預加載新資源
        console.log('Preloading new resources...');
        await preloadNewResources();

        // 4. 更新版本信息
        localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(remoteVersion));
        localStorage.setItem(CONFIG.CACHE_KEY, new Date().getTime().toString());

        // 5. 重新加載頁面
        console.log('Reloading application...');
        window.location.reload(true);
    } catch (error) {
        console.error('Update process failed:', error);
        // 如果更新失敗，回滾版本信息
        localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(currentVersion));
        alert('更新過程中發生錯誤，請稍後再試');
    }
}

async function checkVersion() {
    // Skip check for development environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Development environment detected, skipping version check');
        return;
    }

    try {
        // Get current version info
        let currentVersion;
        try {
            const storedVersion = localStorage.getItem(CONFIG.LOCAL_STORAGE_KEY);
            if (storedVersion) {
                const parsed = JSON.parse(storedVersion);
                if (isValidVersionObject(parsed)) {
                    currentVersion = parsed;
                    console.log('Version loaded from localStorage:', currentVersion.version);
                }
            }
        } catch (error) {
            console.warn('Error reading from localStorage:', error);
        }

        // If no valid version in localStorage, fetch from local file
        if (!currentVersion) {
            try {
                currentVersion = await fetchVersionInfo('version.json');
                localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(currentVersion));
                console.log('Initial version stored:', currentVersion.version);
            } catch (error) {
                console.error('Error fetching local version:', error);
                return; // 如果無法獲取本地版本，停止檢查
            }
        }

        // Fetch remote version
        let remoteVersion;
        try {
            remoteVersion = await fetchVersionInfo(CONFIG.REMOTE_URL);
        } catch (error) {
            console.error('Error fetching remote version:', error);
            return; // 如果無法獲取遠程版本，停止檢查
        }

        // Log versions for debugging
        console.log('Current version:', currentVersion.version, 'Build:', currentVersion.build_number);
        console.log('Remote version:', remoteVersion.version, 'Build:', remoteVersion.build_number);

        // Check if update is needed
        const versionCompare = compareVersions(currentVersion.version, remoteVersion.version);
        const needsUpdate = versionCompare < 0 || (
            versionCompare === 0 && 
            parseInt(currentVersion.build_number) < parseInt(remoteVersion.build_number)
        );

        if (needsUpdate) {
            console.log('New version available:', remoteVersion.version, 'Build:', remoteVersion.build_number);
            await handleUpdate(currentVersion, remoteVersion);
        } else {
            console.log('Already running the latest version');
        }
    } catch (error) {
        console.error('Version check failed:', error);
    }
}

// 初始化
window.addEventListener('load', () => {
    // 檢查是否是更新後的首次加載
    const cacheVersion = localStorage.getItem(CONFIG.CACHE_KEY);
    if (cacheVersion) {
        console.log('Application updated successfully');
        localStorage.removeItem(CONFIG.CACHE_KEY);
    }
    
    // 開始版本檢查
    checkVersion();
    setInterval(checkVersion, CONFIG.CHECK_INTERVAL);
}); 