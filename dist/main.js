(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"body {\n    background-color: black;\n}\n\n* {\n    color: white;\n}\n\nbutton {\n    background-color: gray;\n}\n\nul {\n    list-style-type: none;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"a503cd859c7c1af12d7c.png";function v(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="Darley's Smokin' Hot Chicken Wings",t.appendChild(n),e.appendChild(t);const o=document.createElement("div");o.classList.add("business-description"),o.textContent="Darley's wings are hotter than a 3-alarm fire. All our wing flavors were created by firefighters who love to cook, and a portion of all sales go to the families of disabled firefighters.",e.appendChild(o);const r=document.createElement("div");r.classList.add("hero-image-container");const a=document.createElement("img");a.classList.add("homepage-hero-image"),a.setAttribute("src",h),r.appendChild(a),e.appendChild(r);const c=document.createElement("div");c.classList.add("hours");const i=document.createElement("h2");i.textContent="Hours",c.appendChild(i);const s=document.createElement("ul"),d=document.createElement("li");d.textContent="Sunday: 8am - 4pm";const l=document.createElement("li");l.textContent="Monday: 8am - 9pm";const u=document.createElement("li");u.textContent="Tuesday: 8am - 9pm";const p=document.createElement("li");p.textContent="Wednesday: 8am - 9pm";const m=document.createElement("li");m.textContent="Thurdsday: 8am - 9pm";const f=document.createElement("li");f.textContent="Friday: 8am - 9pm";const v=document.createElement("li");return v.textContent="Saturday: 8am - 1am",s.appendChild(d),s.appendChild(l),s.appendChild(u),s.appendChild(p),s.appendChild(m),s.appendChild(f),s.appendChild(v),c.appendChild(s),e.appendChild(c),e}const y=n.p+"3999f1933b360545f2da.svg";function C(){document.querySelector(".main").remove()}function b(){document.querySelector("button.home-button").addEventListener("click",(()=>{C(),function(){const e=document.querySelector(".header"),t=v();e.insertAdjacentElement("afterend",t)}()})),document.querySelector("button.menu-button").addEventListener("click",(()=>{C(),function(){const e=document.querySelector(".header"),t=function(){const e=document.createElement("div");return e.classList.add("main"),e.textContent="test",e}();e.insertAdjacentElement("afterend",t)}()}))}!function(){const e=document.querySelector("div#content"),t=function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("img");t.classList.add("logo"),t.setAttribute("src",y),e.appendChild(t);const n=document.createElement("div");n.classList.add("header-buttons");const o=document.createElement("button");o.textContent="Home",o.classList.add("home-button"),n.appendChild(o);const r=document.createElement("button");r.textContent="Menu",r.classList.add("menu-button"),n.appendChild(r);const a=document.createElement("button");return a.textContent="Contact",a.classList.add("contact-button"),n.appendChild(a),e.appendChild(n),e}(),n=v(),o=function(){const e=document.createElement("div");return e.classList.add("footer"),e.textContent="100 Fake El-Paso Address Drive",e}();e.appendChild(t),e.appendChild(n),e.appendChild(o),b()}()})()})();