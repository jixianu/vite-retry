!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).assetsRetry=e()}(this,function(){"use strict";function i(t){return t}function h(){}function t(t){for(var e=Object.getPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__},r=Object.keys(t);e(t);)r=r.concat(Object.keys(e(t))),t=e(t);return r.filter(function(t){return"constructor"!==t})}function n(t,e){try{return"function"==typeof t[e]}catch(t){return!1}}function c(t){return Array.isArray(t)?t.reduce(function(t,e,r,n){return t[e]=n[(r+1)%n.length],t},{}):t}function a(e,t){return Object.keys(t).filter(function(t){return-1<e.indexOf(t)}).sort(function(t,e){return e.length-t.length})[0]}var e,r,o,g="retryTimes",s="succeeded",b="failed",m="maxRetryCount",E="onRetry",l="onSuccess",d="onFail",O="domain",u="styleImageNoImportant",v="_assetsRetryProxy",j="_assetsRetryOnerror",y="script",f="link",A="data-assets-retry-hooked",w="data-assets-retry-ignore",k="data-retry-id",p=window,L=window.document,R=p.HTMLElement,T=p.HTMLScriptElement,_=(p.HTMLStyleElement,p.HTMLLinkElement),M=p.HTMLImageElement,S=Object.prototype.hasOwnProperty,x=function(t,e,r){var n=t.indexOf(e);return-1===n?t:t.substring(0,n)+r+t.substring(n+e.length)},H=function(t){return[].slice.call(t)},P=function(e,t,r,n){void 0===r&&(r=h),void 0===n&&(n=!1);var o,i,c,a,u,f=n||e.defer||e.async;"loading"!==L.readyState||/Edge|MSIE|rv:/i.test(navigator.userAgent)||f?(o=L.createElement(y),Object.keys(T.prototype).forEach(function(t){if("src"!==t&&e[t]&&"object"!=typeof e[t])try{o[t]=e[t]}catch(t){}}),o.src=t,o.onload=e.onload,o.onerror=e.onerror,o.setAttribute(k,B()),(i=e.getAttribute("nonce"))&&o.setAttribute("nonce",i),L.getElementsByTagName("head")[0].appendChild(o)):(c=B(),a=e.outerHTML.replace(/data-retry-id="[^"]+"/,"").replace(/src=(?:"[^"]+"|.+)([ >])/,k+"="+c+' src="'+t+'"$1'),L.write(a),(u=L.querySelector("script["+k+'="'+c+'"]'))&&(u.onload=r))},N=function(e){try{return e.rules}catch(t){try{return e.cssRules}catch(t){return null}}},I=function(e,t,r){var n=L.createElement(f);Object.keys(_.prototype).forEach(function(t){if("href"!==t&&e[t]&&"object"!=typeof e[t])try{n[t]=e[t]}catch(t){}}),n.href=t,n.onload=r||e.onload,n.onerror=e.onerror,n.setAttribute(k,B()),L.getElementsByTagName("head")[0].appendChild(n)},C=function(t){return t?t instanceof R?[t.nodeName,t.src,t.href,t.getAttribute(k)].join(";"):"not_supported":"null"},B=function(){return Math.random().toString(36).slice(2)},q=function(t){return t instanceof T||t instanceof M?t.src:t instanceof _?t.href:""},F={},$=function(t,e){var r,n=z(t,e),o=n[0],i=n[1];return o?(F[o]=F[o]||((r={})[g]=0,r[b]=[],r[s]=[],r),[i,F[o]]):[]},z=function(t,e){var r,n,o=a(t,e);return o?[(n=o,(r=t).substr(r.indexOf(n)+n.length,r.length)),o]:["",""]};try{r=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,o++)n[o]=i[c];return n}(t(T.prototype),t(_.prototype)),o={},r.forEach(function(t){o[t]=!0}),e=Object.keys(o)}catch(t){}function D(s,l){var d=l[m],y=c(l[O]),p=l[E];return e.reduce(function(t,r){var e=n(T.prototype,r);return t[r]=e?{value:function(){return s[v][r].apply(s[v],arguments)}}:{set:function(e){var f=s[v];return"onerror"===r?(s[j]=e,void(f.onerror=function(n){if("string"!=typeof n){n.stopPropagation&&n.stopPropagation();var t=function(){return t=s[j],e=f,r=n,"function"!=typeof t?null:t.call(e,r);var t,e,r},e=q(f),r=$(e,y),o=r[0],i=r[1],c=f.hasAttribute(w);if(!o||!i||c)return t();if(!(i[g]>l[m])){var a=x(e,o,y[o]),u=p(a,e,i);if(null===u)return t();if("string"!=typeof u)throw new Error("a string should be returned in `onRetry` function");i[g]<=d?f instanceof T?P(f,u,h,!0):f instanceof _&&I(f,u):t()}}})):"onload"===r?(s._assetsRetryOnload=e,void(s[v].onload=function(t){e&&!e._called&&(e._called=!0,e.call(s[v],t))})):void(f[r]=e)},get:function(){return s[v][r]}},t},{})}var G=function(r){var n=L.createElement;L.createElement=function(t,e){return t===y||t===f?function(t,e){var r;t.setAttribute(A,"true");var n=((r={})[v]=t,r[j]=h,r),o=D(n,e);return Object.defineProperties(n,o),n.onload=h,n.onerror=h,n}(n.call(L,t),r):n.call(L,t,e)}},J=function(r){Object.keys(r).filter(function(t){return n(r,t)}).forEach(function(t){var e=r[t];r[t]=function(){var t=[].slice.call(arguments).map(function(t){return t&&S.call(t,v)?t[v]:t});return e.apply(this,t)}})};var K={};function Q(y){function u(t){if(t){var e=t.target||t.srcElement,r=q(e);if(r){var n="";e instanceof M&&(e.getAttribute(k)||(n=B(),r=r+"?"+k+"="+n));var o=$(r,v),i=o[0],c=o[1],a=e instanceof HTMLElement&&e.hasAttribute(w);if(c&&i&&!a){c[g]++,c[b].push(r);var u=c[g]>y[m];if(u)h(r,c);else if(v[i]&&!u&&!(e instanceof T&&e.getAttribute(A)||e instanceof _&&e.getAttribute(A))){var f=v[i],s=x(r,i,f),l=p(s,r,c);if(null!==l){if("string"!=typeof l)throw new Error("a string should be returned in `onRetry` function");if(e instanceof M&&e.src)return e.getAttribute(k)||e.setAttribute(k,n),void(e.src=l);var d=C(e);K[d]||(K[d]=!0,e instanceof T&&!e.getAttribute(A)&&e.src?P(e,l):e instanceof _&&!e.getAttribute(A)&&e.href&&I(e,l))}}}}}}var p=y[E],f=y[l],h=y[d],v=y[O];L.addEventListener("error",u,!0),L.addEventListener("load",function(t){var e,r,n,o,i,c,a;t&&(e=t.target||t.srcElement,(r=q(e))&&((n=$(r,v))[0],o=n[1],i=function(){o&&(o[s].push(r),f(r,o))},e instanceof _?L.styleSheets&&(c=H(L.styleSheets).filter(function(t){return t.href===e.href})[0],null!==(a=N(c))&&(0!==a.length?i():u(t))):i()))},!0)}return function(t){var e;void 0===t&&(t={});try{if("object"!=typeof t[O])throw new Error("opts.domain cannot be non-object.");var r=[m,E,l,d,O,u],n=Object.keys(t).filter(function(t){return-1===r.indexOf(t)});if(0<n.length)throw new Error("option name: "+n.join(", ")+" is not valid.");var o=((e={})[m]=t[m]||3,e[E]=t[E]||i,e[l]=t[l]||h,e[d]=t[d]||h,e[O]=c(t[O]),e[u]=t[u]||!1,e);return G(o),"undefined"!=typeof Node&&J(Node.prototype),"undefined"!=typeof Element&&J(Element.prototype),Q(o),F}catch(t){p.console&&console.error("[assetsRetry] error captured",t)}}});
//# sourceMappingURL=assets-retry.umd.js.map
