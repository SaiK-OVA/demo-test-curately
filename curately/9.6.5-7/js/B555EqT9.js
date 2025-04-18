import{O as g,j as $,u as q,P as B,C as z,k as H,s as F,h as G,b as _,i as J,D as l}from"./CShd2aWe.js";import{r as p}from"./DAuuuMsE.js";import{aa as Q}from"./BZPAOVTJ.js";var T={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(t){return g.getMergedProps(t,T.defaultProps)},getOtherProps:function(t){return g.getDiffProps(t,T.defaultProps)},getPTI:function(t){var e=g.isEmpty(t.label),r=T.getOtherProps(t),s={className:$("p-icon",{"p-icon-spin":t.spin},t.className),role:e?void 0:"img","aria-label":e?void 0:t.label,"aria-hidden":e};return g.getMergedProps(r,s)}};function D(){return D=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)({}).hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},D.apply(null,arguments)}function E(n){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(n)}function V(n,t){if(E(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t);if(E(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Z(n){var t=V(n,"string");return E(t)=="symbol"?t:t+""}function ee(n,t,e){return(t=Z(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function te(n){if(Array.isArray(n))return n}function ne(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var r,s,v,o,i=[],y=!0,f=!1;try{if(v=(e=e.call(n)).next,t!==0)for(;!(y=(r=v.call(e)).done)&&(i.push(r.value),i.length!==t);y=!0);}catch(d){f=!0,s=d}finally{try{if(!y&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(f)throw s}}return i}}function M(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function re(n,t){if(n){if(typeof n=="string")return M(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?M(n,t):void 0}}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(n,t){return te(n)||ne(n,t)||re(n,t)||oe()}var ae=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,se={root:"p-ink"},P=z.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:ae,classes:se},getProps:function(t){return g.getMergedProps(t,P.defaultProps)},getOtherProps:function(t){return g.getDiffProps(t,P.defaultProps)}});function A(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,r)}return e}function ue(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?A(Object(e),!0).forEach(function(r){ee(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var ce=p.memo(p.forwardRef(function(n,t){var e=p.useState(!1),r=ie(e,2),s=r[0],v=r[1],o=p.useRef(null),i=p.useRef(null),y=q(),f=p.useContext(B),d=P.getProps(n,f),h=f&&f.ripple||H.ripple,j={props:d};F(P.css.styles,{name:"ripple",manual:!h});var x=P.setMetaData(ue({},j)),u=x.ptm,a=x.cx,c=function(){return o.current&&o.current.parentElement},C=function(){i.current&&i.current.addEventListener("pointerdown",I)},L=function(){i.current&&i.current.removeEventListener("pointerdown",I)},I=function(m){var S=l.getOffset(i.current),W=m.pageX-S.left+document.body.scrollTop-l.getWidth(o.current)/2,X=m.pageY-S.top+document.body.scrollLeft-l.getHeight(o.current)/2;Y(W,X)},Y=function(m,S){!o.current||getComputedStyle(o.current,null).display==="none"||(l.removeClass(o.current,"p-ink-active"),w(),o.current.style.top=S+"px",o.current.style.left=m+"px",l.addClass(o.current,"p-ink-active"))},K=function(m){l.removeClass(m.currentTarget,"p-ink-active")},w=function(){if(o.current&&!l.getHeight(o.current)&&!l.getWidth(o.current)){var m=Math.max(l.getOuterWidth(i.current),l.getOuterHeight(i.current));o.current.style.height=m+"px",o.current.style.width=m+"px"}};if(p.useImperativeHandle(t,function(){return{props:d,getInk:function(){return o.current},getTarget:function(){return i.current}}}),G(function(){v(!0)}),_(function(){s&&o.current&&(i.current=c(),w(),C())},[s]),_(function(){o.current&&!i.current&&(i.current=c(),w(),C())}),J(function(){o.current&&(i.current=null,L())}),!h)return null;var U=y({"aria-hidden":!0,className:$(a("root"))},P.getOtherProps(d),u("root"));return p.createElement("span",D({role:"presentation",ref:o},U,{onAnimationEnd:K}))}));ce.displayName="Ripple";function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(n)}function pe(n,t){if(O(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t);if(O(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function le(n){var t=pe(n,"string");return O(t)=="symbol"?t:t+""}function fe(n,t,e){return(t=le(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var k={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(t){return g.getMergedProps(t,k.defaultProps)},getOtherProps:function(t){return g.getDiffProps(t,k.defaultProps)}};function N(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,r)}return e}function R(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?N(Object(e),!0).forEach(function(r){fe(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var me=p.forwardRef(function(n,t){var e=k.getProps(n),r=p.useContext(B),s=e.disabled||e.options&&e.options.disabled||r&&!r.cssTransition||!H.cssTransition,v=function(a,c){e.onEnter&&e.onEnter(a,c),e.options&&e.options.onEnter&&e.options.onEnter(a,c)},o=function(a,c){e.onEntering&&e.onEntering(a,c),e.options&&e.options.onEntering&&e.options.onEntering(a,c)},i=function(a,c){e.onEntered&&e.onEntered(a,c),e.options&&e.options.onEntered&&e.options.onEntered(a,c)},y=function(a){e.onExit&&e.onExit(a),e.options&&e.options.onExit&&e.options.onExit(a)},f=function(a){e.onExiting&&e.onExiting(a),e.options&&e.options.onExiting&&e.options.onExiting(a)},d=function(a){e.onExited&&e.onExited(a),e.options&&e.options.onExited&&e.options.onExited(a)};if(_(function(){if(s){var u=g.getRefElement(e.nodeRef);e.in?(v(u,!0),o(u,!0),i(u,!0)):(y(u),f(u),d(u))}},[e.in]),s)return e.in?e.children:null;var h={nodeRef:e.nodeRef,in:e.in,appear:e.appear,onEnter:v,onEntering:o,onEntered:i,onExit:y,onExiting:f,onExited:d},j={classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit},x=R(R(R({},j),e.options||{}),h);return p.createElement(Q,x,e.children)});me.displayName="CSSTransition";export{me as C,T as I,ce as R};
