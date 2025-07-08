// Version check script for Agora Market
// This script safely checks version without using eval or other dangerous methods

(function() {
    'use strict';
    
    // Get version from URL parameter
    function getVersionFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('v') || 'unknown';
    }
    
    // Get version from version.json file
    async function getVersionFromFile() {
        try {
            const response = await fetch('version.json');
            if (!response.ok) {
                throw new Error('Failed to fetch version.json');
            }
            const data = await response.json();
            return data.version || 'unknown';
        } catch (error) {
            console.warn('Version check failed:', error);
            return 'unknown';
        }
    }
    
    // Check if version matches
    async function checkVersion() {
        const urlVersion = getVersionFromUrl();
        const fileVersion = await getVersionFromFile();
        
        if (urlVersion !== fileVersion && urlVersion !== 'unknown') {
            console.log('Version mismatch detected. Consider refreshing the page.');
            // Optionally show a notification to the user
            if (typeof showVersionMismatchNotification === 'function') {
                showVersionMismatchNotification();
            }
        }
    }
    
    // Run version check when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkVersion);
    } else {
        checkVersion();
    }
    
    // Expose function for manual version check
    window.checkAppVersion = checkVersion;
})(); 