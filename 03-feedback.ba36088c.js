function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,u=setTimeout(j,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function j(){var e=g();if(S(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function T(e){return u=void 0,v&&o?y(e):(o=i=void 0,a)}function w(){var e=g(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:T(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("form"),h=document.querySelector("input"),S=document.querySelector(".feedback-form textarea");!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(h.value=e.email,S.value=e.message,console.log(e.email))}(),S.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t),j.setMessage(userMessage),T(j)}),500)),h.addEventListener("input",e(t)((function(e){e.preventDefault();const t=e.target.value;j.setEmail(t),T(j)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j)}));const j={setEmail(e){this.email=e},setMessage(e){this.message=e}};function T(e){let t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}
//# sourceMappingURL=03-feedback.ba36088c.js.map
