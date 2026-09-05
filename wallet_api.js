/**
 * Wallet API 模块
 * 处理所有与后端 API 的交互
 */

// API 配置
const WALLET_API_CONFIG = {
  apiBaseUrl: 'https://agoramarketapi.purrtechllc.com/api',
};

/**
 * 获取 nonce（用于签名）
 * @param {string} walletAddress - 钱包地址
 * @returns {Promise<Object>} 包含 message, nonce, timestamp 的对象
 */
async function getNonce(walletAddress) {
  const nonceResponse = await fetch(`${WALLET_API_CONFIG.apiBaseUrl}/auth/wallet-connect/nonce`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      walletAddress: walletAddress
    })
  });

  if (!nonceResponse.ok) {
    throw new Error('獲取 nonce 失敗: ' + nonceResponse.statusText);
  }

  const data = await nonceResponse.json();
  
  // 从 message 中提取 nonce（如果 API 返回格式特殊）
  if (data.message && (!data.nonce || data.nonce === '')) {
    if (data.message.includes('Nonce:')) {
      const nonceMatch = data.message.match(/Nonce:\s*([^\n]+)/);
      if (nonceMatch && nonceMatch[1]) {
        data.nonce = nonceMatch[1].trim();
      }
    }
  }
  
  // 从 message 中提取 timestamp（如果 API 返回格式特殊）
  if (data.message && !data.timestamp) {
    if (data.message.includes('Timestamp:')) {
      const timestampMatch = data.message.match(/Timestamp:\s*([^\n]+)/);
      if (timestampMatch && timestampMatch[1]) {
        const timestamp = parseInt(timestampMatch[1].trim());
        if (!isNaN(timestamp)) {
          data.timestamp = timestamp;
        }
      }
    }
  }
  
  // 验证必需字段
  if (!data.message || data.message === '') {
    throw new Error('獲取 nonce 失敗：缺少 message 字段');
  }
  
  if (!data.nonce || data.nonce === '') {
    throw new Error('獲取 nonce 失敗：缺少 nonce 字段');
  }
  
  // 如果没有 timestamp，使用当前时间
  if (!data.timestamp) {
    data.timestamp = Math.floor(Date.now() / 1000);
  }

  return data;
}

/**
 * 验证签名并登录
 * @param {string} walletAddress - 钱包地址
 * @param {string} signature - 签名
 * @param {Object} nonceData - nonce 数据（包含 nonce 和 timestamp）
 * @param {string} chainType - 链类型（如 'tron'）
 * @returns {Promise<Object>} 登录响应数据（包含 token, refreshToken, user）
 */
async function verifyAndLogin(walletAddress, signature, nonceData, chainType = 'tron') {
  const requestBody = {
    walletAddress: walletAddress,
    signature: signature,
    nonce: nonceData.nonce,
    timestamp: nonceData.timestamp
  };
  
  // 如果是 TronLink，添加链信息
  if (chainType === 'tron') {
    requestBody.chain = 'TRC20';
    requestBody.chainType = 'tron';
  }
  
  const loginResponse = await fetch(`${WALLET_API_CONFIG.apiBaseUrl}/auth/wallet-connect/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (!loginResponse.ok) {
    const errorData = await loginResponse.json().catch(() => ({ message: loginResponse.statusText }));
    throw new Error(errorData.message || '登錄失敗: ' + loginResponse.statusText);
  }

  const loginData = await loginResponse.json();
  
  if (!loginData.token || !loginData.refreshToken) {
    throw new Error(loginData.message || '登錄響應中缺少 token');
  }
  
  return loginData;
}

