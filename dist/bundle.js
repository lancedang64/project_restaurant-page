(()=>{"use strict";var n,e,t,o={426:(n,e,t)=>{t.d(e,{Z:()=>w});var o=t(645),r=t.n(o),a=t(667),i=t.n(a),c=t(653),s=t(588),l=t(542),f=t(232),u=t(134),d=t(606),p=t(771),h=r()((function(n){return n[1]})),m=i()(c),g=i()(s),v=i()(l),b=i()(f),y=i()(u),A=i()(d),E=i()(p);h.push([n.id,"@font-face {\n  font-family: 'JeanLuc-bold';\n  src: url("+m+") format('woff'),\n    url("+g+") format('eot'),\n    url("+v+") format('svg');\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'JeanLuc-thin';\n  src: url("+b+") format('woff'),\n    url("+y+") format('eot'),\n    url("+A+") format('svg');\n  font-style: normal;\n}\n/* \"THE JEAN-LUC TYPEFACE WAS DESIGNED AND MADE BY ATELIER CARVALHO BERNAU ON THE OCCASION OF THE 80TH BIRTHDAY OF JEAN-LUC GODARD. IT IS AVAILABLE FREE OF CHARGE FROM HTTP://WWW.CARVALHO-BERNAU.COM/JLG/\nJEAN-LUC TYPEFACE COPYRIGHT (C) 2010 ATELIER CARVALHO BERNAU\" */\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n}\n\n.bg-image {\n  background-image: url("+E+");\n  filter: grayscale(20%) contrast(110%);\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nheader,\nfooter {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  color: white;\n}\n\nheader#nav-bar {\n  opacity: 70%;\n  height: 12%;\n  background-color: black;\n  top: 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.tab-item {\n  font-family: 'JeanLuc-bold';\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  font-size: 4.5vw;\n}\n\n.tab-item--logo {\n  flex-shrink: 0;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n}\n\n.home-screen--logo {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 40%;\n  opacity: 90%;\n}\n\nfooter {\n  opacity: 90%;\n  bottom: 0;\n  height: 5%;\n  background-color: black;\n  font-size: 1.3em;\n\n}\n\n.footer-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",""]);const w=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],s=e.base?c[0]+e.base:c[0],l=t[s]||0,f="".concat(s," ").concat(l);t[s]=l+1;var u=i(f),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:f,updater:m(d,e),references:1}),o.push(f)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(n,e){var t,o,r;if(e.singleton){var a=h++;t=p||(p=s(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=s(e),o=d.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=i(t[o]);a[r].references--}for(var s=c(n,e),l=0;l<t.length;l++){var f=i(t[l]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}t=s}}}},588:(n,e,t)=>{n.exports=t.p+"747593093ae6b637087e.eot"},542:(n,e,t)=>{n.exports=t.p+"41cb4f23737a6f2fb234.svg"},653:(n,e,t)=>{n.exports=t.p+"d62c54079a915a5b804a.woff"},134:(n,e,t)=>{n.exports=t.p+"56a452e9ca7793039cc4.eot"},606:(n,e,t)=>{n.exports=t.p+"373ee0de2adf2ac276f9.svg"},232:(n,e,t)=>{n.exports=t.p+"28b620749783aaaca201.woff"},771:(n,e,t)=>{n.exports=t.p+"80dbe877806f0765eb95.jpg"}},r={};function a(n){var e=r[n];if(void 0!==e)return e.exports;var t=r[n]={id:n,exports:{}};return o[n](t,t.exports,a),t.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),n=a(379),e=a.n(n),t=a(426),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,console.log("hello"),console.log("is this me you lookin for")})();