!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(T,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?y(e):(i=o=void 0,u)}function w(){var e=p(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector("input"),j=document.querySelector("textarea"),T=document.querySelector(".feedback-form"),h="feedback-form-state",w={email:"",message:""};!function(){if(!localStorage.getItem(h))return;w.email=JSON.parse(localStorage.getItem(h)).email,w.message=JSON.parse(localStorage.getItem(h)).message,O.value=w.email,j.value=w.message}(),O.addEventListener("input",e(t)((function(){w.email=inputEl.value,localStorage.setItem(h,JSON.stringify(w))}),500)),j.addEventListener("input",e(t)((function(){w.message=j.value,localStorage.setItem(h,JSON.stringify(w))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),inputEl.value&&j.value&&(console.log(w),localStorage.clear(),e.currentTarget.reset(),w={email:"",message:""})}))}();
//# sourceMappingURL=03-feedback.a09085ed.js.map
