// Log collection system for PWA debugging on physical devices
(function() {
  'use strict';
  
  // Log buffer (max 1000 entries)
  const MAX_LOG_ENTRIES = 1000;
  const logBuffer = [];
  
  // Save original console methods
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalInfo = console.info;
  const originalDebug = console.debug;
  
  // Add log to buffer
  function addToBuffer(level, args) {
    try {
      const timestamp = new Date().toISOString();
      const message = args.map(arg => {
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg, null, 2);
          } catch (e) {
            return String(arg);
          }
        }
        return String(arg);
      }).join(' ');
      
      logBuffer.push({
        timestamp: timestamp,
        level: level,
        message: message
      });
      
      // Limit buffer size
      if (logBuffer.length > MAX_LOG_ENTRIES) {
        logBuffer.shift();
      }
    } catch (e) {
      // Silently fail if buffer operations fail
    }
  }
  
  // Intercept console methods
  try {
    console.log = function(...args) {
      addToBuffer('LOG', args);
      originalLog.apply(console, args);
    };
    
    console.error = function(...args) {
      addToBuffer('ERROR', args);
      originalError.apply(console, args);
    };
    
    console.warn = function(...args) {
      addToBuffer('WARN', args);
      originalWarn.apply(console, args);
    };
    
    console.info = function(...args) {
      addToBuffer('INFO', args);
      originalInfo.apply(console, args);
    };
    
    if (originalDebug) {
      console.debug = function(...args) {
        addToBuffer('DEBUG', args);
        originalDebug.apply(console, args);
      };
    }
  } catch (e) {
    originalError.call(console, '[LOG_COLLECTOR] Failed to intercept console methods:', e);
  }
  
  // Export function to get collected logs
  window.getCollectedLogs = function() {
    try {
      if (!logBuffer || logBuffer.length === 0) {
        return 'No logs collected yet';
      }
      return logBuffer.map(entry => 
        `[${entry.timestamp}] [${entry.level}] ${entry.message}`
      ).join('\n');
    } catch (e) {
      return 'Error getting logs: ' + String(e);
    }
  };
  
  // Export function to clear collected logs
  window.clearCollectedLogs = function() {
    try {
      logBuffer.length = 0;
      return true;
    } catch (e) {
      return false;
    }
  };
  
  // Export function to get log count
  window.getLogCount = function() {
    return logBuffer ? logBuffer.length : 0;
  };
  
  // Verify installation
  try {
    originalLog.call(console, '[LOG_COLLECTOR] Log collection system initialized');
    originalLog.call(console, '[LOG_COLLECTOR] Functions exported:', {
      getCollectedLogs: typeof window.getCollectedLogs,
      clearCollectedLogs: typeof window.clearCollectedLogs,
      getLogCount: typeof window.getLogCount
    });
  } catch (e) {
    // Ignore verification errors
  }
})();
