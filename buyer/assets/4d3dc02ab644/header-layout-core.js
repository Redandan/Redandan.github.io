// Flutter NavigationToolbar._ToolbarLayout: leading/trailing are actual widths.
// Source: packages/flutter/lib/src/widgets/navigation_toolbar.dart.
export function nativeToolbarLayout(width,leading,trailing,intrinsic,middleSpacing=16,rtl=false){
 const maximum=Math.max(width-leading-trailing-middleSpacing*2,0),titleWidth=Math.min(Math.max(intrinsic,0),maximum),margin=leading+middleSpacing;
 let start=(width-titleWidth)/2;
 if(start+titleWidth>width-trailing)start=width-trailing-titleWidth-middleSpacing;
 else if(start<margin)start=margin;
 return{left:rtl?width-titleWidth-start:start,width:titleWidth,maximum};
}

// Flutter ui_web Browser.detectOperatingSystem + adaptivePlatformDensity.
// Source: pinned Flutter ui_web/browser_detection.dart, not viewport width.
export function nativeMaterialDensity(platform,userAgent,maxTouchPoints){
 if(platform.startsWith('Mac'))return maxTouchPoints>2?'standard':'compact';
 if(/iphone|ipad|ipod/i.test(platform)||userAgent.includes('Android'))return'standard';
 return platform.startsWith('Linux')||platform.startsWith('Win')?'compact':'standard';
}
