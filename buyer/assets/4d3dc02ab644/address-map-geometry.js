// Shared WGS84 and slippy-map coordinate conversion. No browser/provider dependencies.
export function coordinates(latitude,longitude){
 if(![latitude,longitude].every(value=>typeof value==='number'||typeof value==='string'&&value.trim()!==''))return null;
 const lat=Number(latitude),lng=Number(longitude);
 return Number.isFinite(lat)&&Number.isFinite(lng)&&Math.abs(lat)<=90&&Math.abs(lng)<=180?{lat,lng}:null;
}
export function project(point,zoom){const scale=256*2**zoom,sin=Math.sin(Math.max(-85.05112878,Math.min(85.05112878,point.lat))*Math.PI/180);return{x:(point.lng+180)/360*scale,y:(.5-Math.log((1+sin)/(1-sin))/(4*Math.PI))*scale};}
export function unproject(point,zoom){const scale=256*2**zoom;return{lat:Math.max(-85.05112878,Math.min(85.05112878,Math.atan(Math.sinh(Math.PI*(1-2*Math.max(0,Math.min(scale,point.y))/scale)))*180/Math.PI)),lng:((point.x/scale*360)%360+360)%360-180};}
