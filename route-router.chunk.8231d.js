(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4RH5":function(t,e,n){"use strict";function r(t,e,n){Object(o.d)((()=>{function r(r){const o=(n||[]).concat(t);t.current&&o.every((t=>!t.current.contains(r.target)))&&e()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[t,e,n])}n.d(e,"a",(function(){return r}));var o=n("QRet")},"8Jek":function(t,e){var n;!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&t.push(c)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var a in n)o.call(n,a)&&n[a]&&t.push(a);else t.push(n.toString())}}return t.join(" ")}var o={}.hasOwnProperty;t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},ES0i:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r={tabletWidth:767,mobileWidth:480},o={app:"https://app.rubic.exchange/",faq:"https://app.rubic.exchange/faq",team:"https://app.rubic.exchange/team",fiatOnRamp:"https://app.rubic.exchange/buy-crypto",onePager:"/assets/pdf/OnePager.pdf",whitePaper:"/assets/pdf/WhitePaper.pdf",certik:"/assets/pdf/certik.pdf",policy:"/assets/pdf/Rubic%20Privacy%20Policy.pdf",doc:"https://docs.rubic.finance/",roadmap:"https://docs.rubic.finance/rubic/roadmap",pitchDeck:"https://docs.rubic.finance/pitch-deck",docWidget:"https://docs.rubic.finance/rubic-relay-widget/instruction",merchShop:"https://shop.rubic.exchange/",tutorials:"https://www.youtube.com/c/RubicExchange"}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),c={};if(i&&i[1])for(var s=i[1].split("&"),u=0;u<s.length;u++){var l=s[u].split("=");c[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var h=Math.max(t.length,e.length),p=0;p<h;p++)if(e[p]&&":"===e[p].charAt(0)){var f=e[p].replace(/(^:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||m)[0]||"",b=~d.indexOf("+"),_=~d.indexOf("*"),g=t[p]||"";if(!g&&!_&&(d.indexOf("?")<0||b)){r=!1;break}if(c[f]=decodeURIComponent(g),b||_){c[f]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,a(e).map(s).join(""));var e}(t),t.props}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function u(){var t;return""+((t=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:j).pathname||"")+(t.search||"")}function l(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=v.length;e--;)if(v[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),g&&g[e]?g[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),h(t)}function h(t){for(var e=!1,n=0;n<v.length;n++)!0===v[n].routeTo(t)&&(e=!0);for(var r=O.length;r--;)O[r](t);return e}function p(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return l(e)}}function f(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return p(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function b(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(p(e))return d(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return O})),n.d(e,"getCurrentUrl",(function(){return u})),n.d(e,"route",(function(){return l})),n.d(e,"Router",(function(){return k})),n.d(e,"Route",(function(){return w})),n.d(e,"Link",(function(){return C})),n.d(e,"exec",(function(){return o}));var _=n("hosL"),m={},g=null,v=[],O=[],j={},y=!1,k=function(t){function e(e){t.call(this,e),e.history&&(g=e.history),this.state={url:e.url||u()},y||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){h(u())})),addEventListener("click",b)),y=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(_.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){v.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;g&&(this.unlisten=g.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),v.splice(v.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var c={url:e,matches:i};return r(c,i),delete c.ref,delete c.key,Object(_.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(_.toChildArray)(n),o,!0),c=i[0]||null,a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:c})),c},e}(_.Component),C=function(t){return Object(_.createElement)("a",r({onClick:f},t))},w=function(t){return Object(_.createElement)(t.component,t)};k.subscribers=O,k.getCurrentUrl=u,k.route=l,k.Router=k,k.Route=w,k.Link=C,k.exec=o,e.default=k},ZK5a:function(t,e){"use strict";e.a={"drop-portal":"_8e7JriZ3TGBEEqYJcxhQH"}},kaGJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("QRet"),i=n("8Jek"),c=n.n(i),a="_1A7hsyIuo366Cm918KSon5";const s=t=>c()(t.props.class,a),u=({render:t,children:e})=>{const n=function(t,e){const[n,r]=Object(o.j)(!1);return Object(o.d)((()=>{let o;return t&&!n?r(!0):!t&&n&&(o=setTimeout((()=>r(!1)),e)),()=>clearTimeout(o)}),[t,e,n]),n}(t,300),[i,c]=Object(o.j)({opacity:0}),u={opacity:0};if(Object(o.d)((()=>{let e;return t&&n?e=setTimeout((()=>{c({opacity:1})}),10):c({opacity:0}),()=>{clearTimeout(e)}}),[t,n]),"object"==typeof e){const o=Array.isArray(e)?e[0]:e,c=Object(r.cloneElement)(o,{style:t?i:u,class:s(o)});return Object(r.h)(r.Fragment,null,n&&c)}return Object(r.h)("div",{class:a,style:t?i:u},n&&e)}},l8WD:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function i(t){this.props=t}function c(t){function e(e,n){var o=r({},e);return delete o.ref,t(o,(n=e.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return e.$$typeof=O,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}function a(){this.__u=0,this.t=null,this.__b=null}function s(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function u(){this.u=null,this.o=null}function l(t){return this.getChildContext=function(){return t.context},t.children}function h(t){var e=this,n=t.i;e.componentWillUnmount=function(){Object(g.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(t){this.childNodes.push(t),e.i.appendChild(t)},insertBefore:function(t){this.childNodes.push(t),e.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),e.i.removeChild(t)}}),Object(g.render)(Object(g.createElement)(l,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function p(t,e){return Object(g.createElement)(h,{__v:t,i:e})}function f(){}function d(){return this.cancelBubble}function b(){return this.defaultPrevented}function _(t){return!!t&&t.$$typeof===R}n.d(e,"a",(function(){return y})),n.d(e,"f",(function(){return p})),n.d(e,"h",(function(){return c}));var m=n("QRet");n.d(e,"i",(function(){return m.a})),n.d(e,"j",(function(){return m.b})),n.d(e,"k",(function(){return m.d})),n.d(e,"l",(function(){return m.e})),n.d(e,"m",(function(){return m.f})),n.d(e,"n",(function(){return m.g})),n.d(e,"o",(function(){return m.h})),n.d(e,"p",(function(){return m.i})),n.d(e,"q",(function(){return m.j}));var g=n("hosL");n.d(e,"e",(function(){return g.createElement})),n.d(e,"d",(function(){return g.createContext})),n.d(e,"c",(function(){return g.Fragment})),n.d(e,"b",(function(){return g.Component})),(i.prototype=new g.Component).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(t,e){return o(this.props,t)||o(this.state,e)};var v=g.options.__b;g.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),v&&v(t)};var O="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,j=function(t,e){return null==t?null:Object(g.toChildArray)(Object(g.toChildArray)(t).map(e))},y={map:j,forEach:j,count:function(t){return t?Object(g.toChildArray)(t).length:0},only:function(t){var e=Object(g.toChildArray)(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:g.toChildArray},k=g.options.__e;g.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);k(t,e,n)};var C=g.options.unmount;g.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),C&&C(t)},(a.prototype=new g.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=s(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(a):a())};n.__R=c;var a=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},u=!0===e.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(c,c)},a.prototype.componentWillUnmount=function(){this.t=[]},a.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=r({},e)).__c&&(e.__c.__P===o&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,o)}))),e}(this.__b,n,o.__O=o.__P)}this.__b=null}var i=e.__e&&Object(g.createElement)(g.Fragment,null,t.fallback);return i&&(i.__h=null),[Object(g.createElement)(g.Fragment,null,e.__e?null:t.children),i]};var w=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(u.prototype=new g.Component).__e=function(t){var e=this,n=s(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),w(e,t,r)):o()};n?n(i):i()}},u.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(g.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},u.prototype.componentDidUpdate=u.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){w(t,n,e)}))};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,E=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,x=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};g.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(g.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var S=g.options.event;g.options.event=function(t){return S&&(t=S(t)),t.persist=f,t.isPropagationStopped=d,t.isDefaultPrevented=b,t.nativeEvent=t};var P,A={configurable:!0,get:function(){return this.class}},L=g.options.vnode;g.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){for(var o in r={},n){var i=n[o];"value"===o&&"defaultValue"in n&&null==i||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!x(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():E.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(g.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(g.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r}e&&n.class!=n.className&&(A.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",A)),t.$$typeof=R,L&&L(t)};var N=g.options.__r;g.options.__r=function(t){N&&N(t),P=t.__c};e.g={useState:m.j,useReducer:m.h,useEffect:m.d,useLayoutEffect:m.f,useRef:m.i,useImperativeHandle:m.e,useMemo:m.g,useCallback:m.a,useContext:m.b,useDebugValue:m.c,version:"17.0.2",Children:y,render:function(t,e,n){return null==e.__k&&(e.textContent=""),Object(g.render)(t,e),"function"==typeof n&&n(),t?t.__c:null},hydrate:function(t,e,n){return Object(g.hydrate)(t,e),"function"==typeof n&&n(),t?t.__c:null},unmountComponentAtNode:function(t){return!!t.__k&&(Object(g.render)(null,t),!0)},createPortal:p,createElement:g.createElement,createContext:g.createContext,createFactory:function(t){return g.createElement.bind(null,t)},cloneElement:function(t){return _(t)?g.cloneElement.apply(null,arguments):t},createRef:g.createRef,Fragment:g.Fragment,isValidElement:_,findDOMNode:function(t){return t&&(t.base||1===t.nodeType&&t)||null},Component:g.Component,PureComponent:i,memo:function(t,e){function n(t){var n=this.props.ref,r=n==t.ref;return!r&&n&&(n.call?n(null):n.current=null),e?!e(this.props,t)||!r:o(this.props,t)}function r(e){return this.shouldComponentUpdate=n,Object(g.createElement)(t,e)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:c,flushSync:function(t,e){return t(e)},unstable_batchedUpdates:function(t,e){return t(e)},StrictMode:g.Fragment,Suspense:a,SuspenseList:u,lazy:function(t){function e(e){if(n||(n=t()).then((function(t){r=t.default||t}),(function(t){o=t})),o)throw o;if(!r)throw n;return Object(g.createElement)(r,e)}var n,r,o;return e.displayName="Lazy",e.__f=!0,e},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:{current:{readContext:function(t){return P.__n[t.__c].props.value}}}}}},mqcj:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.r(e);var o=n("hosL"),i=n("Y3FI");var c=class extends o.Component{constructor(){super(),this.state={componentData:null}}loadComponent(){if(this.props.component)return this.setState({componentData:this.props.component});const t=this.props.getComponent(this.props.url,(({component:t})=>{t&&this.setState({componentData:t})}),r({},this.props,this.props.matches));t&&t.then&&(e=>{t.then((t=>{e===this.props.url?this.setState({componentData:t}):this.setState({componentData:null},(()=>{this.loadComponent()}))}))})(this.props.url)}componentWillReceiveProps(t){this.props.path&&this.props.path!==t.path&&this.setState({componentData:null},(()=>{this.loadComponent()}))}componentWillMount(){this.loadComponent()}render(){if(this.state.componentData)return Object(o.h)(this.state.componentData,this.props);if(this.props.loading){return this.props.loading()}return null}},a=n("ox/y"),s=n("OhSV"),u=n("l8WD"),l=n("ES0i"),h="iRKT12nv3QAOFMLIZ6Bei",p="_19FlRiHsw4hpTH1s8xBq64",f="_2o2E8Xptyj0n_GleAkGcDc",d="_2Ybq9bT2gkQZrDs9vv1Lxe",b="_26UGxTyRWrX1mhxP8UEbFo",_="_2TnbgnUFOh_uP5pZ4V1cUl",m=n("us/P"),g=n("QRet"),v=n("8Jek"),O=n.n(v),j=n("YDDN");const y=[{id:j.a.ENGLISH,title:"English",image:"assets/images/lng/en.svg"},{id:j.a.RUSSIAN,title:"Русский",image:"assets/images/lng/ru.svg"},{id:j.a.KOREAN,title:"한국어",image:"assets/images/lng/ko.svg"},{id:j.a.SPANISH,title:"Español",image:"assets/images/lng/es.svg"},{id:j.a.CHINESE,title:"中国",image:"assets/images/lng/zh.svg"}];var k=n("LLyK"),C=n("EWqP"),w={container__header:"_1UaUeNbiFtEIZ_ZiFbJ9RF",container__back:"_3dAGg3B-1nRfExfwE-61BC","container__languages-list":"_18grP-3m891LbGpKZjXV_H",container__language:"_3sVPqk4QXWnsCjze5bwgx9"};const R={[j.b.LIGHT]:"assets/icons/arrow_light.svg",[j.b.DARK]:"assets/icons/arrow.svg"},E=({onBackClick:t})=>{const{theme:e}=Object(u.j)(k.a),{language:n,setLanguage:r}=Object(u.j)(C.a);return Object(o.h)("div",{class:w.container},Object(o.h)("div",{class:w.container__header},Object(o.h)("button",{className:w.container__back,onClick:t},Object(o.h)("img",{src:R[e],alt:"Back"})),Object(o.h)("h3",null,Object(o.h)(s.b,{id:"settings.languages"},"Languages"))),Object(o.h)("ul",{class:w["container__languages-list"]},y.map((e=>Object(o.h)("li",{key:e.id,class:O()(w.container__language,{[w.container__language_active]:e.id===n}),onClick:()=>{r(e.id),t()}},Object(o.h)("img",{src:e.image,alt:"Language symbol"}),Object(o.h)("span",null,e.title))))))};var x="_3P4pf151tbSKI_Y0vuVyF2",S="_3Yd2rDgWeXq38Lc1OuJhqL";const P=()=>{const{theme:t,toggleTheme:e}=Object(u.j)(k.a);return Object(o.h)("label",{class:x},Object(o.h)("input",{type:"checkbox",checked:t===j.b.DARK,onChange:e}),Object(o.h)("span",{class:S}))},A=t=>Object(o.h)("a",{href:t.href,class:t.class,target:"_blank",rel:"noopener noreferrer"},t.children);var L={settings:"_2t4A391bL88og_xvoDv53l",settings__label:"uORlbOGDjKcuNFTjwHKMk",settings__list:"_3DgFXcyOkq2iAtWH0tuygf","settings__item-container":"_2KBxVIi6GvBQSJfFdbtGEb",settings__item:"qurKyclokEqI27YQFICdG",settings__header:"_2v_45L7smCuYTlHG8WCvAn",settings__title:"jM5sqd_NxOiSJHWFeDzFA",settings__text:"zorFu3tJU8T7A_tRbulRm",settings__close:"jddquUQ3VOFWmbA20353A"};const N={[j.b.LIGHT]:"assets/icons/arrow_light.svg",[j.b.DARK]:"assets/icons/arrow.svg"};var T=({setMode:t})=>{const{theme:e,toggleTheme:n}=Object(u.j)(k.a),{language:r}=Object(u.j)(C.a),i=y.find((t=>t.id===r));return Object(o.h)("div",{class:L.settings},Object(o.h)("h3",{className:L.settings__label},Object(o.h)(s.b,{id:"nav.settings"},"Settings")),Object(o.h)("ul",{class:L.settings__list},Object(o.h)("li",{class:L.settings__item,onClick:n},Object(o.h)("div",{class:L.settings__header},Object(o.h)("img",{class:L.settings__icon,src:"assets/icons/theme.svg",alt:"theme"}),Object(o.h)(P,null)),Object(o.h)("div",null,Object(o.h)("h4",{className:L.settings__title},Object(o.h)(s.b,{id:"settings.darkMode"},"Dark mode")),Object(o.h)("p",{className:L.settings__text},Object(o.h)(s.b,{id:"settings.themeForTheWeb"},"Theme for the web")))),Object(o.h)("li",{className:L.settings__item,onClick:()=>t("languages")},Object(o.h)("div",{className:L.settings__header},Object(o.h)("img",{height:"32",width:"32",className:L.settings__icon,src:i.image,alt:"Language flag"}),Object(o.h)("img",{src:N[e],alt:"Change language"})),Object(o.h)("div",null,Object(o.h)("h4",{className:L.settings__title},i.title),Object(o.h)("p",{className:L.settings__text},Object(o.h)(s.b,{id:"settings.chooseLanguage"},"Choose language")))),Object(o.h)("li",{class:L.settings__item},Object(o.h)(A,{class:L["settings__item-container"],href:l.b.tutorials},Object(o.h)("div",{className:L.settings__header},Object(o.h)("img",{className:L.settings__icon,src:"assets/icons/tutorials.svg",alt:"Tutorials"}),Object(o.h)("img",{className:L.settings__icon,src:N[e],alt:"Go to tutorials"})),Object(o.h)("div",null,Object(o.h)("h4",{className:L.settings__title},Object(o.h)(s.b,{id:"settings.tutorials"},"Tutorials")),Object(o.h)("p",{className:L.settings__text},Object(o.h)(s.b,{id:"settings.howToUse"},"How to use")))))))};var U=()=>{const[t,e]=Object(g.j)("default");return{default:Object(o.h)(T,{setMode:e}),languages:Object(o.h)(E,{onBackClick:()=>e("default")})}[t]},D=n("kaGJ");var F=n("sCes"),I=n("ZK5a");const W=({targetRef:t,position:e,children:n})=>{const r=(t=>{const[e,n]=Object(g.j)({}),r=Object(g.i)(window.innerWidth),o=Object(g.a)((()=>{var e;return n(t&&t.current?null==(e=t.current)?void 0:e.getBoundingClientRect():{})}),[n,t]),i=Object(g.a)((()=>{const t=window.innerWidth;t!==r.current&&(r.current=t,o())}),[o]);return Object(g.d)((()=>(o(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i))),[o]),e})(t),i=void 0!==(null==r?void 0:r.top)&&void 0!==(null==r?void 0:r.height)?r.top+r.height:(null==r?void 0:r.top)||0,c=(null==r?void 0:r.left)||0,a={top:`${null!=e&&e.top?e.top+i:i}px`};return"fullwidth"===(null==e?void 0:e.left)?(a.left=0,a.right=0):a.left=`${null!=e&&e.left?e.left+c:c}px`,Object(u.f)(Object(o.h)("div",{class:I.a["drop-portal"],style:a},n),Object(F.a)())};var M="b1wrYDKlpvqv6pS_mCwck";const K=Object(u.h)((({open:t,targetRef:e},n)=>Object(o.h)(W,{targetRef:e,position:{left:-320,top:50}},Object(o.h)(D.a,{render:t},Object(o.h)("div",{class:M,ref:n},Object(o.h)(U,null))))));var q="_1jbIeeS_IKvFehINuceEvf",H="_2Hp0jv1AS2CnXTWJL5PVxV",B="_1LnnxHM6xUFaUZ3dUDQBcI",G="_3_QMBOhdABJgD-5o-bDPZz";var J=({openMenu:t})=>Object(o.h)("div",{class:q},Object(o.h)("h3",{class:B},Object(o.h)(s.b,{id:"nav.menu"},"Menu")),Object(o.h)("nav",{class:H},Object(o.h)(A,{href:l.b.team,class:G},Object(o.h)(s.b,{id:"nav.team"},"Team")),Object(o.h)(A,{href:l.b.whitePaper,class:G},Object(o.h)(s.b,{id:"nav.whitePaper"},"White Paper")),Object(o.h)(A,{href:l.b.fiatOnRamp,class:G},Object(o.h)(s.b,{id:"nav.fiatOnRamp"},"Fiat On-ramp")),Object(o.h)(A,{href:l.b.onePager,class:G},Object(o.h)(s.b,{id:"nav.onePager"},"One Pager")),Object(o.h)(A,{href:l.b.faq,class:G},Object(o.h)(s.b,{id:"nav.faq"},"FAQ")),Object(o.h)(A,{href:l.b.merchShop,class:G},Object(o.h)(s.b,{id:"nav.merchShop"},"Merch Shop")),Object(o.h)(A,{href:l.b.roadmap,class:G},Object(o.h)(s.b,{id:"nav.roadmap"},"Roadmap")),Object(o.h)(a.Link,{href:"/contact",class:G,onClick:()=>{t(!1),window.scrollTo(0,0)}},Object(o.h)(s.b,{id:"nav.contactOurTeam"},"Contact Our Team")))),V="K54P6C-LUVx4A_H7dSFqz";const z=Object(u.h)((({open:t,openMenu:e},n)=>{const r=Object(g.i)();return Object(u.m)((()=>{r.current=document.getElementById("main-header")})),Object(o.h)(W,{targetRef:r,position:{left:"fullwidth"}},Object(o.h)(D.a,{render:t},Object(o.h)("div",{class:V,ref:n},Object(o.h)(J,{openMenu:e}),Object(o.h)(U,null))))}));var Z=n("4RH5"),Q="_3d9iIK81-i6RrvQFxcIM2S",$="_1Kf-9NndJIwoSnFIowxF2k",Y="_16h49WogrGUswbIb-sO06A",X="IJIZNWFS8iERZTCep5oFu";var tt=()=>{const[t,e]=Object(g.j)(!1),n=Object(g.i)(),r=Object(g.i)(),i=Object(g.a)((()=>e(!1)),[e]);Object(Z.a)(r,i,[n]);const c=Object(m.a)()<=l.a.tabletWidth;return Object(o.h)("div",{class:X},Object(o.h)("button",{class:Q,onClick:()=>e(!t),ref:n},Object(o.h)("div",{class:O()($,{[Y]:t})}),Object(o.h)("div",{class:O()($,{[Y]:t})}),Object(o.h)("div",{class:O()($,{[Y]:t})})),c?Object(o.h)(z,{open:t,openMenu:e,ref:r}):Object(o.h)(K,{open:t,targetRef:n,ref:r}))};const et={[j.b.LIGHT]:"assets/icons/logo_dark.svg",[j.b.DARK]:"assets/icons/logo.svg"};var nt=()=>{const{theme:t}=Object(u.j)(k.a);return Object(o.h)("header",{id:"main-header",class:f},Object(o.h)("div",{class:h},Object(o.h)(a.Link,{class:d,href:"/"},Object(o.h)("img",{src:et[t],alt:"Rubic logo"})),Object(o.h)("nav",{class:b},Object(o.h)("a",{href:l.b.team,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.team"},"Team")),Object(o.h)("a",{href:l.b.fiatOnRamp,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.fiatOnRamp"},"Fiat On-ramp")),Object(o.h)("a",{href:l.b.faq,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.faq"},"FAQ"))),Object(o.h)("div",{class:_},Object(o.h)(tt,null),Object(o.h)("a",{href:l.b.app,class:p,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"header.launchApp"},"Launch app")))))},rt=n("ensb"),ot=Object(rt.a)((function(t){n.e(5).then(function(){var e=n("3LGf");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),it="_2CnzWZ7-9CkSBh7Czhrq7O",ct="_1taTtc7XhIMqvwCgfnppti",at="xKGRxEZ58RoSqMJGbrrq6",st="RmujUMsYkKkkuRY8eS296",ut="nEVyhRp2L427W-NvwfPEX",lt="_3d4_tKssgilyA1Tcp3MBFt",ht="_3jt2oztRe9u2DB6DlqqmE_",pt="_2AYjj8ChaxuGx00GqNpb3u";const ft=[{name:"coingecko",link:"https://www.coingecko.com/en/coins/rubic"},{name:"fb",link:"https://www.facebook.com/RubicDEX/"},{name:"twitter",link:"https://twitter.com/CryptoRubic"},{name:"discord",link:"https://discord.gg/hayrHU2Tvh"},{name:"telegram",link:"https://t.me/cryptorubic_chat"},{name:"marketcap",link:"https://coinmarketcap.com/currencies/rubic"},{name:"medium",link:"https://cryptorubic.medium.com/"},{name:"mail",link:"mailto:support@rubic.finance"},{name:"github",link:"https://github.com/Cryptorubic"},{name:"gitbook",link:"https://docs.rubic.finance/"}];var dt=()=>Object(o.h)("footer",{class:it},Object(o.h)("div",{class:at},Object(o.h)("div",null,Object(o.h)("h3",{class:ct},Object(o.h)(s.b,{id:"footer.community"},"Community")),Object(o.h)("nav",{class:ht},ft.map((({name:t,link:e},n)=>Object(o.h)("a",{key:n,class:pt,href:e},Object(o.h)("img",{src:`assets/icons/socials/${t}.svg`,alt:t})))))),Object(o.h)("div",null,Object(o.h)("h3",{class:ct},Object(o.h)(s.b,{id:"footer.documents"},"Documents")),Object(o.h)("nav",{class:st},Object(o.h)("a",{href:l.b.pitchDeck,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.pitchDeck"},"Pitch Deck"),Object(o.h)("img",{src:"assets/icons/arrow-right-green.svg",alt:"Pitch Deck"})),Object(o.h)("a",{href:l.b.onePager,target:"_blank"},Object(o.h)(s.b,{id:"nav.onePager"},"One Pager"),Object(o.h)("img",{src:"assets/icons/arrow-right-green.svg",alt:"One Pager"})),Object(o.h)("a",{href:l.b.roadmap,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.roadmap"},"Roadmap"),Object(o.h)("img",{src:"assets/icons/arrow-right-green.svg",alt:"Roadmap"})))),Object(o.h)("div",null,Object(o.h)("h3",{class:ct},Object(o.h)(s.b,{id:"footer.company"},"Company")),Object(o.h)("nav",{class:st},Object(o.h)("a",{href:l.b.merchShop,target:"_blank",rel:"noreferrer"},Object(o.h)(s.b,{id:"nav.merchShop"},"Merch Shop"),Object(o.h)("img",{src:"assets/icons/arrow-right-green.svg",alt:"Merch shop"})),Object(o.h)(a.Link,{href:"/contact",onClick:()=>{window.scrollTo(0,0)}},Object(o.h)(s.b,{id:"nav.contactOurTeam"},"Contact Our Team"),Object(o.h)("img",{src:"assets/icons/arrow-right-green.svg",alt:"Contact our team"}))))),Object(o.h)("p",{class:ut},"©Copyright Rubic 2021,"," ",Object(o.h)("a",{class:lt,href:l.b.policy,target:"_blank"},"Privacy policy")));e.default=()=>Object(o.h)(o.Fragment,null,Object(o.h)(nt,null),Object(o.h)(i.Router,null,Object(o.h)(c,{path:"/",getComponent:()=>n.e(8).then(n.bind(null,"+6G5")).then((t=>t.default))}),Object(o.h)(c,{path:"/contact",getComponent:()=>n.e(7).then(n.bind(null,"zt3s")).then((t=>t.default))}),Object(o.h)(i.Route,{default:!0,component:ot})),Object(o.h)(dt,null))},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),c=n("Y3FI"),a=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,c.exec)(n,t.path,{})})},e}(i.Component),s=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(a,{path:n||r.href},(function(t){return(0,i.h)(c.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=a,a.Link=s},sCes:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=()=>"undefined"!=typeof window?document.getElementById("modals"):null},"us/P":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("l8WD");var o=t=>{const e=r.p(t);return r.k((()=>{e.current=t})),e};const i=(t,e=100,n=!1)=>{function i(){s.current&&clearTimeout(s.current),s.current=void 0}function c(){s.current=void 0}const a=o(t),s=r.p(),u=[e,n,a];return r.k((()=>i),u),r.i((function(){const t=arguments,{current:r}=s;if(void 0===r&&n)return s.current=setTimeout(c,e),a.current.apply(null,t);r&&clearTimeout(r),s.current=setTimeout((()=>{s.current=void 0,a.current.apply(null,t)}),e)}),u)};var c=function(t,e,n,o){const i=r.p(n),c=r.p(o);r.k((()=>{i.current=n,c.current=o})),r.k((()=>{function n(...t){o||i.current.apply(this,t)}const r=t&&"current"in t?t.current:t;if(!r)return;let o=0;r.addEventListener(e,n);const a=c.current;return()=>{o=1,r.removeEventListener(e,n),a&&a()}}),[t,e])};const a={},s="undefined"==typeof window?null:window,u=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],l=(t=a)=>{const{wait:e,leading:n,initialWidth:o=0,initialHeight:l=0}=t,[h,p]=((t,e,n)=>{const o=r.q(t);return[o[0],i(o[1],e,n)]})("undefined"==typeof document?[o,l]:u,e,n),f=()=>p(u);return c(s,"resize",f),c(s,"orientationchange",f),h},h=t=>l(t)[0]}}]);
//# sourceMappingURL=route-router.chunk.8231d.js.map