import{bk as S,s as _,x as W,d as A,ao as L,i as N,j as O,k as M}from"./index.e442f220.js";var R=/\s/;function U(e){for(var r=e.length;r--&&R.test(e.charAt(r)););return r}var j=/^\s+/;function F(e){return e&&e.slice(0,U(e)+1).replace(j,"")}var y=0/0,z=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,H=/^0o[0-7]+$/i,P=parseInt;function E(e){if(typeof e=="number")return e;if(S(e))return y;if(_(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=_(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=F(e);var i=D.test(e);return i||H.test(e)?P(e.slice(2),i?2:8):z.test(e)?y:+e}var V=function(){return W.Date.now()},v=V,X="Expected a function",q=Math.max,G=Math.min;function ne(e,r,i){var s,f,u,c,t,o,d=0,T=!1,m=!1,g=!0;if(typeof e!="function")throw new TypeError(X);r=E(r)||0,_(i)&&(T=!!i.leading,m="maxWait"in i,u=m?q(E(i.maxWait)||0,r):u,g="trailing"in i?!!i.trailing:g);function x(n){var a=s,l=f;return s=f=void 0,d=n,c=e.apply(l,a),c}function $(n){return d=n,t=setTimeout(p,r),T?x(n):c}function B(n){var a=n-o,l=n-d,b=r-a;return m?G(b,u-l):b}function I(n){var a=n-o,l=n-d;return o===void 0||a>=r||a<0||m&&l>=u}function p(){var n=v();if(I(n))return k(n);t=setTimeout(p,B(n))}function k(n){return t=void 0,g&&s?x(n):(s=f=void 0,c)}function w(){t!==void 0&&clearTimeout(t),d=0,s=o=f=t=void 0}function C(){return t===void 0?c:k(v())}function h(){var n=v(),a=I(n);if(s=arguments,f=this,o=n,a){if(t===void 0)return $(o);if(m)return clearTimeout(t),t=setTimeout(p,r),x(o)}return t===void 0&&(t=setTimeout(p,r)),c}return h.cancel=w,h.flush=C,h}const J=A({name:"ArrowUp"}),K={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Q=M("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"},null,-1),Y=[Q];function Z(e,r,i,s,f,u){return N(),O("svg",K,Y)}var re=L(J,[["render",Z]]);export{re as a,ne as d};