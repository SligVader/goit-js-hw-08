!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function O(e){return l=e,f=setTimeout(h,t),s?b(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=o=void 0,a)}function T(){var e=p(),n=S(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O="feedback-form-state",S=document.querySelector(".feedback-form");!function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e),n=S.elements;n.message.value=t.message,n.email.value=t.email}}(),S.addEventListener("input",e(t)((function(){new FormData(S).forEach((function(e,t){return h[t]=e})),localStorage.setItem(O,JSON.stringify(h))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(O))),localStorage.removeItem(O)}));var h={}}();
//# sourceMappingURL=03-feedback.f5055be4.js.map
