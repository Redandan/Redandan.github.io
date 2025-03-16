// Constants
const CONFIG = {
    CHECK_INTERVAL: 5 * 60 * 1000, // 5 minutes
    REMOTE_URL: 'https://redandan.github.io/version.json',
    LOCAL_STORAGE_KEY: 'app_version'
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

async function clearBrowserCache() {
    try {
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
            console.log('Browser cache cleared successfully');
        }
        
        // Clear application storage
        localStorage.removeItem('app_cache_key');
        sessionStorage.clear();
        
        // Clear application specific caches
        try {
            await navigator.serviceWorker?.register?.().then(registration => {
                registration.unregister();
            });
        } catch (e) {
            console.log('No service worker to unregister');
        }
        
        console.log('All caches cleared successfully');
    } catch (error) {
        console.error('Error clearing caches:', error);
        throw error;
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
            
            // Update stored version first
            localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(remoteVersion));
            
            // Clear all caches
            await clearBrowserCache();
            
            // Reload page
            window.location.reload(true);
        } else {
            console.log('Already running the latest version');
        }
    } catch (error) {
        console.error('Version check failed:', error);
    }
}

// Start version checking
setInterval(checkVersion, CONFIG.CHECK_INTERVAL);
// Initial check
checkVersion(); 