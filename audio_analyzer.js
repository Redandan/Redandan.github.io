// Web Audio API 音頻分析器
// 用於檢測遠端音頻流的音量水平

class AudioAnalyzer {
  constructor() {
    this.audioContext = null;
    this.analyser = null;
    this.mediaStreamSource = null;
    this.dataArray = null;
    this.isAnalyzing = false;
    this.speakingThreshold = 30; // 音量閾值
    this.silenceThreshold = 10;  // 靜音閾值
    this.speakingDuration = 0;   // 說話持續時間
    this.silenceDuration = 0;    // 靜音持續時間
    this.minSpeakingTime = 200;  // 最小說話時間 (ms)
    this.minSilenceTime = 300;   // 最小靜音時間 (ms)
    this.onSpeakingChange = null; // 說話狀態變化回調
  }

  // 初始化音頻分析器
  async init(remoteStream) {
    try {
      if (!remoteStream) {
        console.warn('AudioAnalyzer: No remote stream provided');
        return false;
      }

      if (remoteStream.getAudioTracks().length === 0) {
        console.warn('AudioAnalyzer: No audio tracks in remote stream');
        return false;
      }

      // 檢查瀏覽器支持
      if (!window.AudioContext && !window.webkitAudioContext) {
        console.warn('AudioAnalyzer: Web Audio API not supported');
        return false;
      }

      // 創建音頻上下文
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // 檢查音頻上下文狀態
      if (this.audioContext.state === 'suspended') {
        console.log('AudioAnalyzer: Audio context suspended, attempting to resume...');
        await this.audioContext.resume();
      }
      
      // 創建媒體流源
      this.mediaStreamSource = this.audioContext.createMediaStreamSource(remoteStream);
      
      // 創建分析器節點
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;
      
      // 連接音頻節點
      this.mediaStreamSource.connect(this.analyser);
      
      // 創建數據數組
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      
      console.log('AudioAnalyzer: Initialized successfully');
      return true;
    } catch (error) {
      console.error('AudioAnalyzer: Failed to initialize:', error);
      console.error('AudioAnalyzer: Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      return false;
    }
  }

  // 開始分析
  start() {
    if (!this.analyser || this.isAnalyzing) {
      return;
    }

    this.isAnalyzing = true;
    this._analyze();
    console.log('AudioAnalyzer: Started analysis');
  }

  // 停止分析
  stop() {
    this.isAnalyzing = false;
    console.log('AudioAnalyzer: Stopped analysis');
  }

  // 分析音頻數據
  _analyze() {
    if (!this.isAnalyzing || !this.analyser) {
      return;
    }

    // 獲取頻率數據
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // 計算平均音量
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      sum += this.dataArray[i];
    }
    const average = sum / this.dataArray.length;
    
    // 檢測說話狀態
    const isCurrentlySpeaking = average > this.speakingThreshold;
    this._updateSpeakingState(isCurrentlySpeaking, average);
    
    // 繼續分析
    requestAnimationFrame(() => this._analyze());
  }

  // 更新說話狀態
  _updateSpeakingState(isCurrentlySpeaking, volume) {
    const now = Date.now();
    
    if (isCurrentlySpeaking) {
      this.speakingDuration += 16; // 約 60fps
      this.silenceDuration = 0;
      
      // 如果說話時間達到最小閾值，且之前是靜音狀態
      if (this.speakingDuration >= this.minSpeakingTime && !this.currentlySpeaking) {
        this.currentlySpeaking = true;
        this._notifySpeakingChange(true, volume);
      }
    } else {
      this.silenceDuration += 16;
      this.speakingDuration = 0;
      
      // 如果靜音時間達到最小閾值，且之前是說話狀態
      if (this.silenceDuration >= this.minSilenceTime && this.currentlySpeaking) {
        this.currentlySpeaking = false;
        this._notifySpeakingChange(false, volume);
      }
    }
  }

  // 通知說話狀態變化
  _notifySpeakingChange(isSpeaking, volume) {
    if (this.onSpeakingChange) {
      this.onSpeakingChange(isSpeaking, volume);
    }
    console.log(`AudioAnalyzer: Speaking ${isSpeaking ? 'started' : 'stopped'}, volume: ${volume.toFixed(2)}`);
  }

  // 設置說話狀態變化回調
  setOnSpeakingChange(callback) {
    this.onSpeakingChange = callback;
  }

  // 設置音量閾值
  setThresholds(speakingThreshold, silenceThreshold) {
    this.speakingThreshold = speakingThreshold;
    this.silenceThreshold = silenceThreshold;
  }

  // 清理資源
  dispose() {
    this.stop();
    
    if (this.mediaStreamSource) {
      this.mediaStreamSource.disconnect();
      this.mediaStreamSource = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    this.analyser = null;
    this.dataArray = null;
    this.onSpeakingChange = null;
    
    console.log('AudioAnalyzer: Disposed');
  }
}

// 全局音頻分析器實例
window.audioAnalyzer = new AudioAnalyzer();

// 導出給 Dart 使用的函數
window.initAudioAnalyzer = function(remoteStream) {
  return window.audioAnalyzer.init(remoteStream);
};

window.startAudioAnalysis = function() {
  window.audioAnalyzer.start();
};

window.stopAudioAnalysis = function() {
  window.audioAnalyzer.stop();
};

window.setAudioAnalyzerCallback = function(callback) {
  window.audioAnalyzer.setOnSpeakingChange(callback);
};

window.disposeAudioAnalyzer = function() {
  window.audioAnalyzer.dispose();
};
