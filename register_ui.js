(function () {
  'use strict';
  // Display-only helpers. Registration/session ownership stays in register.html
  // and legacy_auth_guard.js; this module never sends requests or stores tokens.
  const keys = [
    'pageTitle','title','subtitle','username','email','password','confirmPassword','promoCode',
    'usernamePlaceholder','emailPlaceholder','passwordPlaceholder','confirmPlaceholder','promoPlaceholder',
    'securityInfo','securityLoading','securitySuccess','register','registering','agreementIntro','agreement',
    'agreementMiddle','privacy','agreementEnd','themeToggle','backToLogin','refreshVerification',
    'securityFailed','securityExpired','registrationFailed','checkInputs','sessionChanged',
    'usernamePasswordRequired','passwordMismatch','securityOrEmail','sessionSaveFailed','networkError','securityUnavailable'
  ];
  const values = {
    'zh-TW': [
      '註冊 - Agora Market','加入 Agora Market','建立帳戶，開始探索市集',
      '用戶名','電子郵件','密碼','確認密碼','推廣碼（選填）',
      '用戶名（3–20 個字元）','輸入電子郵件地址','密碼（8–128 個字元）','再次輸入密碼','輸入推廣碼（選填）',
      '安全驗證（選填）：完成後，電子郵件可不填寫。','正在載入安全驗證…','安全驗證成功，電子郵件可不填寫。',
      '立即註冊','註冊中…','註冊即表示您同意','使用者協議','，並確認已閱讀','隱私政策','。',
      '切換主題','返回登入','重新驗證','安全驗證失敗，請重新驗證','安全驗證已過期，請重新驗證',
      '註冊失敗，請稍後再試','註冊失敗，請檢查輸入資訊','登入狀態已變更，請返回商城繼續。',
      '請填寫用戶名和密碼','密碼與確認密碼不一致','請完成安全驗證或提供電子郵件地址',
      '註冊成功但登入狀態未能保存，請重新登入','網路錯誤，請稍後再試',
      '暫時無法載入安全驗證。您可以重新驗證，或填寫電子郵件繼續註冊。'
    ],
    'zh-CN': [
      '注册 - Agora Market','加入 Agora Market','创建账户，开始探索市集',
      '用户名','电子邮件','密码','确认密码','推广码（选填）',
      '用户名（3–20 个字符）','输入电子邮件地址','密码（8–128 个字符）','再次输入密码','输入推广码（选填）',
      '安全验证（选填）：完成后，电子邮件可不填写。','正在加载安全验证…','安全验证成功，电子邮件可不填写。',
      '立即注册','注册中…','注册即表示您同意','用户协议','，并确认已阅读','隐私政策','。',
      '切换主题','返回登录','重新验证','安全验证失败，请重新验证','安全验证已过期，请重新验证',
      '注册失败，请稍后再试','注册失败，请检查输入信息','登录状态已变更，请返回商城继续。',
      '请填写用户名和密码','密码与确认密码不一致','请完成安全验证或提供电子邮件地址',
      '注册成功但登录状态未能保存，请重新登录','网络错误，请稍后再试',
      '暂时无法加载安全验证。您可以重新验证，或填写电子邮件继续注册。'
    ],
    en: [
      'Register - Agora Market','Join Agora Market','Create an account and explore the marketplace',
      'Username','Email','Password','Confirm password','Promo code (optional)',
      'Username (3–20 characters)','Enter your email address','Password (8–128 characters)','Enter your password again','Enter a promo code (optional)',
      'Security verification is optional. After verification, you can leave email blank.','Loading security verification…','Verification complete. Email is now optional.',
      'Register','Registering…','By registering, you agree to the ','User Agreement',' and acknowledge the ','Privacy Policy','.',
      'Switch theme','Back to login','Verify again','Verification failed. Please try again.','Verification expired. Please try again.',
      'Registration failed. Please try again later.','Registration failed. Please check your details.','Your sign-in status changed. Return to the marketplace to continue.',
      'Enter your username and password.','The passwords do not match.','Complete verification or provide an email address.',
      'Your account was created, but sign-in could not be saved. Please sign in again.','Network error. Please try again later.',
      'Security verification is unavailable. Try again, or enter an email address to continue registering.'
    ],
    th: [
      'สมัครสมาชิก - Agora Market','เข้าร่วม Agora Market','สร้างบัญชีเพื่อสำรวจตลาด',
      'ชื่อผู้ใช้','อีเมล','รหัสผ่าน','ยืนยันรหัสผ่าน','รหัสแนะนำ (ไม่บังคับ)',
      'ชื่อผู้ใช้ (3–20 ตัวอักษร)','ป้อนที่อยู่อีเมล','รหัสผ่าน (8–128 ตัวอักษร)','ป้อนรหัสผ่านอีกครั้ง','ป้อนรหัสแนะนำ (ไม่บังคับ)',
      'การยืนยันความปลอดภัยเป็นทางเลือก หลังยืนยันแล้วไม่จำเป็นต้องระบุอีเมล','กำลังโหลดการยืนยันความปลอดภัย…','ยืนยันสำเร็จแล้ว ไม่จำเป็นต้องระบุอีเมล',
      'สมัครสมาชิก','กำลังสมัครสมาชิก…','การสมัครสมาชิกแสดงว่าคุณยอมรับ','ข้อตกลงผู้ใช้',' และรับทราบ','นโยบายความเป็นส่วนตัว','',
      'เปลี่ยนธีม','กลับไปเข้าสู่ระบบ','ยืนยันอีกครั้ง','ยืนยันไม่สำเร็จ โปรดลองอีกครั้ง','การยืนยันหมดอายุ โปรดลองอีกครั้ง',
      'สมัครสมาชิกไม่สำเร็จ โปรดลองอีกครั้งภายหลัง','สมัครสมาชิกไม่สำเร็จ โปรดตรวจสอบข้อมูล','สถานะการเข้าสู่ระบบเปลี่ยนไป โปรดกลับไปที่ตลาดเพื่อดำเนินการต่อ',
      'โปรดระบุชื่อผู้ใช้และรหัสผ่าน','รหัสผ่านไม่ตรงกัน','โปรดยืนยันความปลอดภัยหรือระบุอีเมล',
      'สร้างบัญชีแล้ว แต่บันทึกการเข้าสู่ระบบไม่ได้ โปรดเข้าสู่ระบบอีกครั้ง','เกิดข้อผิดพลาดเครือข่าย โปรดลองอีกครั้งภายหลัง',
      'ไม่สามารถโหลดการยืนยันความปลอดภัยได้ โปรดยืนยันอีกครั้ง หรือป้อนอีเมลเพื่อสมัครสมาชิกต่อ'
    ],
    ja: [
      '登録 - Agora Market','Agora Market に参加','アカウントを作成してマーケットを見てみましょう',
      'ユーザー名','メールアドレス','パスワード','パスワードの確認','紹介コード（任意）',
      'ユーザー名（3〜20文字）','メールアドレスを入力','パスワード（8〜128文字）','パスワードを再入力','紹介コードを入力（任意）',
      'セキュリティ確認は任意です。確認後はメールアドレスを省略できます。','セキュリティ確認を読み込み中…','確認が完了しました。メールアドレスは任意です。',
      '登録','登録中…','登録すると','利用規約','に同意し、','プライバシーポリシー','を確認したものとします。',
      'テーマを切り替え','ログインに戻る','再確認','確認に失敗しました。もう一度お試しください。','確認の有効期限が切れました。もう一度お試しください。',
      '登録に失敗しました。後でもう一度お試しください。','入力内容を確認してください。','ログイン状態が変わりました。マーケットに戻ってください。',
      'ユーザー名とパスワードを入力してください。','パスワードが一致しません。','セキュリティ確認を完了するか、メールアドレスを入力してください。',
      'アカウントは作成されましたが、ログインを保存できませんでした。再度ログインしてください。','ネットワークエラーです。後でもう一度お試しください。',
      'セキュリティ確認を読み込めません。再試行するか、メールアドレスを入力して登録を続けてください。'
    ]
  };
  const thaiErrors = {
    USERNAME_EXISTS:'ชื่อผู้ใช้นี้มีอยู่แล้ว โปรดเลือกชื่ออื่น', EMAIL_EXISTS:'อีเมลนี้มีอยู่แล้ว โปรดใช้อีเมลอื่น',
    PASSWORD_MISMATCH:'รหัสผ่านไม่ตรงกัน', USERNAME_SIZE_INVALID:'ชื่อผู้ใช้ต้องมี 3–20 ตัวอักษร',
    USERNAME_REQUIRED:'โปรดระบุชื่อผู้ใช้', EMAIL_FORMAT_INVALID:'รูปแบบอีเมลไม่ถูกต้อง', EMAIL_REQUIRED:'โปรดระบุอีเมล',
    PASSWORD_SIZE_INVALID:'รหัสผ่านต้องมี 8–128 ตัวอักษร', PASSWORD_REQUIRED:'โปรดระบุรหัสผ่าน', CONFIRM_PASSWORD_REQUIRED:'โปรดยืนยันรหัสผ่าน'
  };
  function normalizeLocale(value) {
    const v=String(value || '').replaceAll('_','-').toLowerCase();
    if (/^en(?:-|$)/.test(v)) return 'en';
    if (/^th(?:-|$)/.test(v)) return 'th';
    if (/^ja(?:-|$)/.test(v)) return 'ja';
    if (/^zh(?:-cn|-hans|-sg)?$/.test(v) || v.startsWith('zh-hans-')) return 'zh-CN';
    return 'zh-TW';
  }
  function text(key) {
    const language=normalizeLocale(document.documentElement.lang);
    const index=keys.indexOf(key);
    return index < 0 ? key : values[language][index];
  }
  function apply() {
    document.title=text('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(e=>{e.textContent=text(e.dataset.i18n);});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{e.placeholder=text(e.dataset.i18nPlaceholder);});
    const toggle=document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.title=text('themeToggle');toggle.setAttribute('aria-label',text('themeToggle'));
      toggle.innerHTML=document.documentElement.dataset.theme==='dark'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.8 13a9 9 0 0 1-9.8-9.8A9 9 0 1 0 20.8 13Z"/></svg>';
    }
    const back=document.querySelector('.back-link');
    if (back) {
      const u=new URL('./',location.href);
      u.searchParams.set('lang',document.documentElement.lang);u.searchParams.set('theme',document.documentElement.dataset.theme);
      const target=typeof window.getSafeReturnTo==='function'?window.getSafeReturnTo():'/';
      u.hash='/login'+(target!=='/'?'?returnTo='+encodeURIComponent(target):'');back.href=u.href;
    }
  }
  function init() {
    const params=new URLSearchParams(location.search);
    let storedLanguage=null,storedTheme=null;
    try { storedLanguage=localStorage.getItem('language');storedTheme=localStorage.getItem('theme'); } catch (_) { /* URL/default still works when storage is unavailable. */ }
    const language=normalizeLocale(params.get('lang')||storedLanguage||'zh-TW');
    document.documentElement.lang=language;
    const requested=params.get('theme')||storedTheme||'system';
    document.documentElement.dataset.theme=requested==='dark'||requested==='system'&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    apply();
  }
  window.AgoraRegisterUI={normalizeLocale,text,apply,init,errorMessage:code=>document.documentElement.lang==='th'?thaiErrors[code]:null};
  init();
  document.addEventListener('DOMContentLoaded',init,{once:true});
}());
