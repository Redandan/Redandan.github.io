// template-name: Costco 商品数据转换模板
// template-description: 此模板将 Costco JSON 格式的商品数据转换为 ProductCreateParam 格式
// 
// 使用说明：
// 1. 此模板使用 JavaScript 代码进行转换
// 2. 支持通过 params 配置参数，例如：
//    exchangeRate: 31.0  // 汇率
//    profitMargin: 0.0   // 利润率（%）
//    stock: 100          // 默认库存

function convert(sourceData, params) {
  // 获取参数（带默认值）
  const exchangeRate = params.exchangeRate || 31.0;  // 汇率，默认 31.0
  const profitMargin = params.profitMargin || 0.0;   // 利润率（%），默认 0.0
  const defaultStock = params.stock || 100;          // 默认库存，默认 100
  
  // 提取商品信息（优先使用 name，否则使用 englishName）
  const name = sourceData.name || null;
  const englishName = sourceData.englishName || null;
  const productTitle = (name && name.trim() !== '') ? name : (englishName || '未命名商品');
  
  // 清理 HTML 描述
  function cleanHtmlDescription(htmlDesc) {
    if (!htmlDesc) return '';
    let clean = htmlDesc.replace(/<[^>]*>/g, '');
    clean = clean.replace(/\s+/g, ' ').trim();
    return clean;
  }
  
  const rawDescription = sourceData.description || sourceData.desc || '';
  const description = cleanHtmlDescription(rawDescription);
  
  // 价格处理
  let price = null;
  if (sourceData.basePrice && sourceData.basePrice.value != null) {
    price = sourceData.basePrice.value;
  } else if (sourceData.price != null) {
    price = sourceData.price;
  }
  
  // 计算最终价格（应用汇率和利润率）
  const finalPrice = (price || 0) * exchangeRate * (1 + profitMargin / 100);
  
  // SKU 智能提取（从商品名称中提取）
  const skus = new Set();
  const productName = name || englishName || '';
  
  if (productName.trim() !== '') {
    const parts = productName.trim().split(' ');
    if (parts.length > 0) {
      const quantityKeywords = [
        'pack', 'count', 'piece', 'sheet', 'ml', 'g', 'kg', 'l', 'cc', 'oz', 'lb',
        'inch', 'cm', 'mm', 'x', '×', 'piece', 'pieces', 'counts', 'packs',
        '包', '件', '片', '張', '個', '瓶', '罐', '盒', '組', '套', '條', '支',
        '毫升', '公克', '公斤', '公升', '公分', '吋', '克', '升'
      ];
      
      const lastPart = parts[parts.length - 1].trim().toLowerCase();
      const isLastPartUnit = quantityKeywords.some(keyword => 
        lastPart.includes(keyword.toLowerCase())
      );
      
      let skuPart = '';
      if (isLastPartUnit && parts.length >= 2) {
        const valuePart = parts[parts.length - 2].trim();
        const unitPart = parts[parts.length - 1].trim();
        
        if (valuePart.includes('+') && parts.length >= 3) {
          const prevPart = parts[parts.length - 3].trim();
          skuPart = prevPart + ' ' + valuePart + ' ' + unitPart;
        } else {
          skuPart = valuePart + ' ' + unitPart;
        }
      } else if (lastPart.includes('+') && parts.length >= 2) {
        const prevPart = parts[parts.length - 2].trim();
        const currentPart = parts[parts.length - 1].trim();
        skuPart = prevPart + ' ' + currentPart;
      } else {
        skuPart = parts[parts.length - 1].trim();
      }
      
      if (skuPart !== '') {
        skus.add(skuPart);
      }
    }
  }
  
  // 如果源数据中有 SKU，也添加进去
  if (sourceData.sku) {
    skus.add(sourceData.sku);
  }
  if (Array.isArray(sourceData.skus)) {
    sourceData.skus.forEach(sku => skus.add(sku));
  }
  
  // 图片处理（优先选择 webp 格式，否则选择 product 格式）
  const imageUrls = new Set();
  if (sourceData.images && Array.isArray(sourceData.images)) {
    const formatToImages = {};
    
    for (const image of sourceData.images) {
      if (image && typeof image === 'object' && image.url) {
        const format = image.format || '';
        formatToImages[format] = image.url;
      } else if (typeof image === 'string') {
        // 如果图片是字符串，直接使用
        imageUrls.add(image);
      }
    }
    
    // 优先选择 webp 格式，否则选择 product 格式
    const webpFormat = 'product-webp';
    const jpgFormat = 'product';
    
    let selectedImageUrl = null;
    if (formatToImages[webpFormat]) {
      selectedImageUrl = formatToImages[webpFormat];
    } else if (formatToImages[jpgFormat]) {
      selectedImageUrl = formatToImages[jpgFormat];
    } else if (Object.keys(formatToImages).length > 0) {
      // 如果没有找到指定格式，使用第一个
      selectedImageUrl = Object.values(formatToImages)[0];
    }
    
    if (selectedImageUrl) {
      // 转换为完整 URL（如果是相对路径）
      let fullUrl = selectedImageUrl;
      if (!selectedImageUrl.startsWith('http')) {
        // 根据实际情况调整域名
        fullUrl = 'https://www.costco.com.tw' + selectedImageUrl;
      }
      imageUrls.add(fullUrl);
    }
  }
  
  // 品牌提取（从标题中提取）
  function extractBrandFromTitle(title) {
    if (!title) return null;
    
    const brands = [
      'Philips', 'Samsung', 'LG', 'Sony', 'Apple', 'Dyson',
      'KitchenAid', 'Vitamix', 'Nespresso', 'Kirkland'
    ];
    
    const lowerTitle = title.toLowerCase();
    for (const brand of brands) {
      if (lowerTitle.includes(brand.toLowerCase())) {
        return brand;
      }
    }
    return null;
  }
  
  const brand = sourceData.brand || extractBrandFromTitle(englishName || name) || null;
  
  // 处理分类（根据商品名称和描述自动分类）
  let category = 'OTHER';
  const titleLower = (englishName || name || '').toLowerCase();
  const descLower = description.toLowerCase();
  const combined = titleLower + ' ' + descLower;
  
  if (combined.includes('tv') || combined.includes('電視') || 
      combined.includes('monitor') || combined.includes('顯示器')) {
    category = 'ELECTRONICS';
  } else if (combined.includes('vitamin') || combined.includes('維生素') || 
             combined.includes('supplement') || combined.includes('保健')) {
    category = 'HEALTH';
  } else if (combined.includes('food') || combined.includes('食物') || 
             combined.includes('snack') || combined.includes('零食')) {
    category = 'FOOD';
  } else if (combined.includes('clothing') || combined.includes('衣服') || 
             combined.includes('shoes') || combined.includes('鞋子')) {
    category = 'CLOTHING';
  } else if (combined.includes('kitchen') || combined.includes('廚房') || 
             combined.includes('appliance') || combined.includes('家電')) {
    category = 'HOME';
  }
  
  // 获取分类的默认值
  function getCategoryDefaults(cat) {
    switch (cat) {
      case 'ELECTRONICS':
        return {
          tags: '電子產品,3C,科技',
          shippingPreparationHours: 24,
          estimatedDeliveryDays: 2,
          freeShippingThreshold: 1000.0,
          supportedServiceTypes: ['BLACK_CAT', 'SEVEN_ELEVEN'],
          serviceTypeFees: {'BLACK_CAT': 150.0, 'SEVEN_ELEVEN': 60.0},
          shippingDescription: '電子產品，包裝完善，快速配送。'
        };
      case 'HEALTH':
        return {
          tags: '保健,健康,營養',
          shippingPreparationHours: 12,
          estimatedDeliveryDays: 2,
          freeShippingThreshold: 800.0,
          supportedServiceTypes: ['BLACK_CAT', 'SEVEN_ELEVEN'],
          serviceTypeFees: {'BLACK_CAT': 120.0, 'SEVEN_ELEVEN': 60.0},
          shippingDescription: '保健產品，品質保證，快速配送。'
        };
      case 'FOOD':
        return {
          tags: '食品,美食,新鮮',
          shippingPreparationHours: 6,
          estimatedDeliveryDays: 1,
          freeShippingThreshold: 500.0,
          supportedServiceTypes: ['BLACK_CAT', 'SEVEN_ELEVEN'],
          serviceTypeFees: {'BLACK_CAT': 120.0, 'SEVEN_ELEVEN': 60.0},
          shippingDescription: '新鮮食品，快速配送，請盡早食用。'
        };
      case 'CLOTHING':
        return {
          tags: '服飾,時尚,穿搭',
          shippingPreparationHours: 12,
          estimatedDeliveryDays: 2,
          freeShippingThreshold: 600.0,
          supportedServiceTypes: ['SEVEN_ELEVEN', 'FAMILY_MART'],
          serviceTypeFees: {'SEVEN_ELEVEN': 60.0, 'FAMILY_MART': 60.0},
          shippingDescription: '時尚服飾，包裝精美，快速配送。'
        };
      case 'HOME':
        return {
          tags: '居家,生活,用品',
          shippingPreparationHours: 24,
          estimatedDeliveryDays: 3,
          freeShippingThreshold: 1200.0,
          supportedServiceTypes: ['BLACK_CAT', 'FAMILY_MART'],
          serviceTypeFees: {'BLACK_CAT': 150.0, 'FAMILY_MART': 60.0},
          shippingDescription: '高品質居家用品，提升生活品質。'
        };
      default:
        return {
          tags: '新品,熱銷',
          shippingPreparationHours: 24,
          estimatedDeliveryDays: 2,
          freeShippingThreshold: 500.0,
          supportedServiceTypes: ['SEVEN_ELEVEN'],
          serviceTypeFees: {'SEVEN_ELEVEN': 60.0},
          shippingDescription: '商品將在指定時間內出貨。'
        };
    }
  }
  
  const defaults = getCategoryDefaults(category);
  
  // 处理购买链接（补全相对路径）
  let purchaseUrl = sourceData.url || sourceData.purchaseUrl || null;
  if (purchaseUrl && !purchaseUrl.startsWith('http://') && !purchaseUrl.startsWith('https://')) {
    if (purchaseUrl.startsWith('/')) {
      purchaseUrl = 'https://www.costco.com.tw' + purchaseUrl;
    } else {
      purchaseUrl = 'https://www.costco.com.tw/' + purchaseUrl;
    }
  }
  
  // 处理库存（确保是数字）
  let stockValue = defaultStock;
  if (sourceData.stock != null) {
    if (typeof sourceData.stock === 'number') {
      stockValue = sourceData.stock;
    } else if (typeof sourceData.stock === 'object' && sourceData.stock.stockLevelStatus) {
      // 如果 stock 是对象，尝试从对象中提取库存值
      // 某些数据源可能将库存信息存储在对象中
      stockValue = defaultStock; // 使用默认值
    }
  }
  
  // 处理标签（确保是字符串）
  let tagsValue = defaults.tags;
  if (sourceData.tags != null) {
    if (typeof sourceData.tags === 'string') {
      tagsValue = sourceData.tags;
    } else if (Array.isArray(sourceData.tags)) {
      // 如果是数组，转换为逗号分隔的字符串
      tagsValue = sourceData.tags.join(', ');
    }
  }
  
  // 返回转换后的商品数据
  return {
    title: productTitle,
    description: description,
    price: finalPrice,
    currency: 'USDT',
    stock: stockValue,
    category: category,
    skus: Array.from(skus),
    brand: brand,
    imageUrls: Array.from(imageUrls),
    purchaseUrl: purchaseUrl,
    tags: tagsValue,
    shippingFee: 0.0,
    minStock: 10,
    stockAlertThreshold: 10,
    allowNegativeStock: false,
    supportsScheduledShipping: false,
    shippingDateRange: 7,
    dailyShippingDeadline: '18:00',
    enablePlatformDelivery: false,
    pickupAddress: '',
    pickupLongitude: 0.0,
    pickupLatitude: 0.0,
    pickupTimeStart: '',
    pickupTimeEnd: '',
    shippingPreparationHours: defaults.shippingPreparationHours,
    estimatedDeliveryDays: defaults.estimatedDeliveryDays,
    freeShippingThreshold: defaults.freeShippingThreshold,
    supportedServiceTypes: defaults.supportedServiceTypes,
    serviceTypeFees: defaults.serviceTypeFees,
    shippingDescription: defaults.shippingDescription
  };
}

