(()=>{"use strict";var e={495:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(15),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by mini-css-extract-plugin\nexport {};"],sourceRoot:""}]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],c=o[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),d="/*# ".concat(s," */"),u=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([d]).join("\n")}return[a].join("\n")}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var l=c(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(m)):a.push({identifier:u,updater:p(m,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,b=0;function p(e,t){var n,r,o;if(t.singleton){var a=b++;n=f||(f=s(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var s=i(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=s}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(495);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.createElement("a");o.id="item-links",o.classList.add("tab-item--links"),o.innerHTML="links";const a=document.createElement("a");a.setAttribute("target","_blank"),a.href="https://armorywharfcafe.orderup.com.au/",a.classList.add("links-menu--item"),a.innerHTML="online order";const c=document.createElement("a");c.setAttribute("target","_blank"),c.href="https://www.thefork.com.au/restaurant/armory-wharf-cafe-r558803",c.classList.add("links-menu--item"),c.innerHTML="booking";const i=document.createElement("div");i.setAttribute("class","links-menu hidden"),i.append(a,c),o.appendChild(i);const s=()=>{const e=document.createElement("span");e.setAttribute("class","tab-item--selected tab-item tab-content"),e.setAttribute("id","logo"),document.querySelector(".tab-content-container").append(e)},d=(()=>{let e,t=0;const n=()=>{e=document.querySelectorAll(".food"),0!==e.length&&(e.forEach((e=>e.classList.add("hidden"))),t++,t>e.length&&(t=1),r(t-1),setTimeout(n,2e3))},r=t=>{e[t].classList.remove("hidden")},o=t=>{e[t].classList.add("hidden")};return{carousel:n,showNext:n=>{o(t),t+=1,t===e.length&&(t=0),r(t)},showPrevious:n=>{o(t),t-=1,t<0&&(t=e.length-1),r(t)}}})();(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.setAttribute("class","bg-image"),e.appendChild(t),(e=>{const t=document.createElement("nav");t.setAttribute("class","nav-bar");const n=e=>{const t=document.createElement("a");return t.id=`item-${e}`,t.classList.add("tab-item"),t.innerHTML=e,t},r=n("menu"),a=n("contact"),c=n("gallery"),i=document.createElement("span");i.setAttribute("class","tab-item hidden"),i.id="item-logo",t.append(r,c,i,o,a),e.appendChild(t)})(e);const n=document.createElement("div");n.setAttribute("class","tab-content-container"),e.appendChild(n),s(),(e=>{const t=document.createElement("footer"),n=document.createElement("span"),r=document.createElement("a"),o=document.createElement("p");n.setAttribute("class","footer-content"),n.innerHTML="Made by Lance Dang",r.setAttribute("id","github-logo"),r.setAttribute("href","https://github.com/lancedang64"),o.innerHTML="All images, logos used in this personal project belong to <a href='http://www.armorywharfcafe.com/' , id='shop'>Armory Wharf Cafe</a> <br> Thanks Chloe for your permission!",t.append(n,r,o),e.appendChild(t)})(e)})(),(()=>{const e=document.querySelector("#item-logo"),t=document.querySelector("#item-links").querySelector(".links-menu"),n=e=>{const t=e.target.id.slice(5);"booking"!==t&&"onlineOrder"!==t&&("logo"===t?r():o(),a(),c(t),i(t))},r=()=>{e.classList.add("hidden")},o=()=>{e.classList.contains("hidden")&&e.classList.remove("hidden")},a=()=>{const e=document.querySelector(".tab-item--selected"),t=document.querySelector(".tab-content");e.classList.remove("tab-item--selected"),t&&t.remove()},c=e=>{document.querySelector(`#item-${e}`).classList.add("tab-item--selected")},i=e=>{"menu"===e&&m(),"gallery"===e&&u(),"contact"===e&&(()=>{const e=document.createElement("div");e.setAttribute("class","tab-content board-content"),e.setAttribute("id","contact");const t=document.createElement("a");t.href="https://maps.google.com/maps?q=13%2C+Blaxland+Riverside+Park+Jamieson+Street+Newington+NSW+2127",t.innerHTML="<br>\n  Building 13, <br>\n  Blaxland Riverside Park <br>\n  Jamieson Street <br>\n  (off Holker Street) <br>\n  Newington NSW 2127";const n=document.createElement("p");n.innerHTML="0423 884 801";const r=document.createElement("p");r.innerHTML="Trading Hours <br>\n  Tuesday-Friday 9am-2pm <br>\n  Saturday & Sunday 8am-3pm <br>\n  Monday Closed <br>\n  Closed Public Holidays <br>\n  All hours are weather permitting",e.append(t,n,r),document.querySelector(".tab-content-container").appendChild(e)})(),"logo"===e&&s()},u=()=>{(()=>{const e=document.createElement("div");e.setAttribute("class","tab-content slideshow-content"),e.setAttribute("id","gallery");const t=document.createElement("img");t.setAttribute("class","food food-1");const n=document.createElement("img");n.setAttribute("class","food food-2");const r=document.createElement("img");r.setAttribute("class","food food-3");const o=document.createElement("img");o.setAttribute("class","food food-4");const a=document.createElement("img");a.setAttribute("class","food food-5");const c=document.createElement("button");c.setAttribute("class","menu-arrow"),c.setAttribute("id","left-arrow"),c.innerHTML="<";const i=document.createElement("button");i.setAttribute("class","menu-arrow"),i.setAttribute("id","right-arrow"),i.innerHTML=">",e.append(t,n,r,o,a,c,i),document.querySelector(".tab-content-container").append(e)})(),d.carousel(),l()},l=()=>{const e=document.querySelector("#left-arrow"),t=document.querySelector("#right-arrow");e.addEventListener("click",d.showPrevious),t.addEventListener("click",d.showNext)},m=()=>{(()=>{const e=document.createElement("div");e.setAttribute("class","tab-content menu-content"),e.setAttribute("id","menu");const t=document.createElement("div");t.setAttribute("id","menu-1"),t.setAttribute("class","menu-img");const n=document.createElement("div");n.setAttribute("id","menu-2"),n.setAttribute("class","menu-img hidden");const r=document.createElement("button");r.setAttribute("class","menu-arrow"),r.setAttribute("id","left-arrow"),r.innerHTML="<";const o=document.createElement("button");o.setAttribute("class","menu-arrow"),o.setAttribute("id","right-arrow"),o.innerHTML=">",e.append(t,n,r,o),document.querySelector(".tab-content-container").append(e)})(),f()},f=()=>{document.querySelectorAll(".menu-arrow").forEach((e=>e.addEventListener("click",b)))},b=()=>{const e=document.querySelector(".menu-img.hidden"),t="menu-1"===e.id?document.querySelector("#menu-2"):document.querySelector("#menu-1");e.classList.remove("hidden"),t.classList.add("hidden")},p=e=>{t.classList.remove("hidden")},h=e=>{t.classList.add("hidden")};return{addEventListeners:()=>{document.querySelectorAll(".tab-item").forEach((e=>e.addEventListener("click",n)));const e=document.querySelector(".tab-item--links");e.addEventListener("click",p),e.addEventListener("mouseover",p),e.addEventListener("mouseout",h)}}})().addEventListeners()})()})();
//# sourceMappingURL=bundle.js.map