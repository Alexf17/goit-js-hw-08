function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,r,o,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function S(){var e=m();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function T(e){return u=void 0,p&&i?b(e):(i=r=void 0,a)}function w(){var e=m(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},w.flush=function(){return void 0===u?a:T(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("input"),h=document.querySelector("textarea"),j=document.querySelector("form"),S={setEmail(e){this.email=e},setMessage(e){this.message=e}};function T(e){let t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.value=e.email,h.value=e.message)}(),b.addEventListener("input",e(t)((function(e){e.preventDefault();const t=e.target.value;S.setEmail(t),T(S)}),500)),h.addEventListener("input",e(t)((function(e){e.preventDefault();const t=e.target.value;S.setMessage(t),T(S)}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(S)}));
//# sourceMappingURL=03-feedback.b9a337bc.js.map
