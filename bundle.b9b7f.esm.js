!function(e){function t(t){for(var n,r,o=t[0],u=t[1],a=0,l=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(c&&c(t);l.length;)l.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={1:0},i={1:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,3:1,4:1,5:1,6:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({0:"route-contact~route-main",3:"route-contact",4:"route-main",5:"route-notfound",6:"route-router"}[e]||e)+".chunk."+{0:"2c311",3:"d5004",4:"67c9b",5:"3571f",6:"758f0",7:"31d6c",8:"31d6c"}[e]+".css",u=n.p+i,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=(_=a[l]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(c===i||c===u))return t()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){var _;if((c=(_=s[l]).getAttribute("data-href"))===i||c===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css";p.onerror=p.onload=function(n){if(p.onerror=p.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||u,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=a,delete o[e],p.parentNode.removeChild(p),r(l)}},p.href=u,document.head.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=function(e){return n.p+""+({0:"route-contact~route-main",3:"route-contact",4:"route-main",5:"route-notfound",6:"route-router"}[e]||e)+".chunk."+{0:"280f9",3:"ba4da",4:"4ab03",5:"58e09",6:"cc7b5",7:"96f4c",8:"0d108"}[e]+".esm.js"}(e);var c=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=a;n(n.s="mdyV")}({EWqP:function(e,t,n){"use strict";var r=n("hosL");const o=Object(r.createContext)({});t.a=o},LLyK:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n("hosL"),o=n("QRet");var i=Object(r.createContext)({}),u=n("YDDN");var a=({children:e})=>{const[t,n]=Object(o.j)(u.b.DARK),a=Object(o.a)((()=>{t===u.b.LIGHT?(document.querySelector("html").classList.add("dark"),n(u.b.DARK)):(document.querySelector("html").classList.remove("dark"),n(u.b.LIGHT))}),[t]);return Object(r.h)(i.Provider,{value:{theme:t,toggleTheme:a}},e)}},OhSV:function(e,t,n){"use strict";function r(e,t,n){if(3===e.nodeType){var o="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==r.options.trim){var i=0===t||t===n.length-1;if((!(o=o.match(/^[\s\n]+$/g)&&"all"!==r.options.trim?" ":o.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===r.options.trim||i?"":" "))||" "===o)&&n.length>1&&i)return null}return o}if(1!==e.nodeType)return null;var u=String(e.nodeName).toLowerCase();if("script"===u&&!r.options.allowScripts)return null;var a,l,c=r.h(u,function(e){var t=e&&e.length;if(!t)return null;for(var n={},o=0;o<t;o++){var i=e[o],u=i.name,a=i.value;"on"===u.substring(0,2)&&r.options.allowEvents&&(a=new Function(a)),n[u]=a}return n}(e.attributes),(l=(a=e.childNodes)&&Array.prototype.map.call(a,r).filter(P))&&l.length?l:null);return r.visitor&&r.visitor(c),c}function o(e){var t=(e.type||"").toLowerCase(),n=o.map;n&&n.hasOwnProperty(t)?(e.type=n[t],e.props=Object.keys(e.props||{}).reduce((function(t,n){var r;return t[(r=n,r.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=e.props[n],t}),{})):e.type=t.replace(/[^a-z0-9-]/i,"")}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return null!=e}function a(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){var n=a({},e);for(var r in t)t.hasOwnProperty(r)&&(n[r]=e[r]&&t[r]&&"object"==typeof e[r]&&"object"==typeof t[r]?l(e[r],t[r]):e[r]||t[r]);return n}function c(e){var t=e.scope,n=e.mark,r=e.definition,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["scope","mark","definition"]),i=a({},Object(O.b)(A).intl||{});return t&&(i.scope=t),r&&(i.dictionary=l(i.dictionary||{},r)),(n||"undefined"!=typeof location&&String(location).match(E))&&(i.mark=!0),Object(C.h)(A.Provider,{value:{intl:i}},o.children)}function s(e,t){function n(n){return Object(C.h)(c,t||{},Object(C.h)(e,n))}return arguments.length<2?(t=e,function(e){return s(e,t)}):(n.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},n)}function _(e,t,n,r){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,p.bind(null,t||L,n,r))}function p(e,t,n,r,o){for(var i=o.split("."),u=e,a=0;a<i.length;a++){if(null==(u=u[i[a]]))return"";if(u&&u.type===h)return f(u.props.id,t,n,u.props.fields,u.props.plural,u.props.fallback)}return"string"==typeof u&&u.match(/\{\{/)&&(u=_(u,e)),u}function f(e,t,n,r,o,i){t&&(e=t+"."+e);var a=n&&S(n,e);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&u(a.none||a.zero)?a.none||a.zero:1===o&&u(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&_(a,r,t,n)||i||null}function d(e){var t=e.value,n=e.id,r=Object(O.b)(A).intl;if(r&&r.mark){var o="dictionary"+(r&&r.scope?"."+r.scope:"")+"."+n;return Object(C.h)("mark",{style:{background:t?S(r,o)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:n},t)}return t}function h(e){var t=e.id,n=e.children,r=e.plural,o=e.fields,i=Object(O.b)(A).intl,u=f(t,i&&i.scope,i&&i.dictionary,o,r,n);return Object(C.h)(d,{id:t,value:u})}function m(e,t,n){var r={};for(var o in t=t||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var t={},n=0;n<e.length;n++){var r=e[n].trim();r&&(t[r.split(".").pop()]=r)}return t}return e}(e))if(e.hasOwnProperty(o)&&e[o]){var i=e[o];n||"string"!=typeof i?i.type===h&&(i=a({fallback:i.props.children},i.props),r[o]=f(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):r[o]=f(i,t.scope,t.dictionary)}return r}function v(e){var t=e.children,n=Object(O.b)(A).intl;return t&&t.length?t.map((function(e){return Object(C.cloneElement)(e,m(e.props,n,!0))})):t&&Object(C.cloneElement)(t,m(t.props,n,!0))}function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}function b(e){var t=e.html,n=e.id,r=y(e,["html","id"]);return Object(C.h)(d,{id:n,value:t?"string"==typeof t?Object(C.h)(T,i({},{type:"html",trim:!1},r,{markup:t})):Object(C.h)("span",null,t):t})}function g(e){return function(t){function n(n){var r=Object(O.b)(A).intl,o=m("function"==typeof e?e(n,{intl:r}):e,r);return Object(C.h)(t,a(a({},n),o))}return n.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},n}}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g}));var k,w,C=n("hosL"),O=n("QRet"),S=function(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},j={},P=function(e){return e},x={},T=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.setReviver=function(e){w=e},t.prototype.shouldComponentUpdate=function(e){var t=this.props;return e.wrap!==t.wrap||e.type!==t.type||e.markup!==t.markup},t.prototype.setComponents=function(e){if(this.map={},e)for(var t in e)if(e.hasOwnProperty(t)){var n=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=e[t]}},t.prototype.render=function(e){var t=e.wrap;void 0===t&&(t=!0);var n,i=e.type,u=e.markup,a=e.components,l=e.reviver,c=e.onError,s=e["allow-scripts"],_=e["allow-events"],p=e.trim,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),d=l||this.reviver||this.constructor.prototype.reviver||w||C.h;this.setComponents(a);var h={allowScripts:s,allowEvents:_,trim:p};try{n=function(e,t,n,i,u){var a=function(e,t){var n,r,o,i,u="html"===t?"text/html":"application/xml";"html"===t?(i="body",o="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(i="xml",o='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{n=(new DOMParser).parseFromString(o,u)}catch(e){r=e}if(n||"html"!==t||((n=k||(k=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),n.write(o),n.close()),n){var a=n.getElementsByTagName(i)[0],l=a.firstChild;return e&&!l&&(a.error="Document parse failed."),l&&"parsererror"===String(l.nodeName).toLowerCase()&&(l.removeChild(l.firstChild),l.removeChild(l.lastChild),a.error=l.textContent||l.nodeValue||r||"Unknown error",a.removeChild(l)),a}}(e,t);if(a&&a.error)throw new Error(a.error);var l=a&&a.body||a;o.map=i||x;var c=l&&function(e,t,n,o){return r.visitor=t,r.h=n,r.options=o||j,r(e)}(l,o,n,u);return o.map=null,c&&c.props&&c.props.children||null}(u,i,d,this.map,h)}catch(e){c?c({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===t)return n||null;var m=f.hasOwnProperty("className")?"className":"class",v=f[m];return v?v.splice?v.splice(0,0,"markup"):"string"==typeof v?f[m]+=" markup":"object"==typeof v&&(v.markup=!0):f[m]="markup",d("div",f,n||null)},t}(C.Component),A=Object(C.createContext)({intl:{}}),E=/[?&#]intl=show/,L={};s.intl=s,s.IntlContext=A,s.IntlProvider=c,s.Text=h,s.MarkupText=function(e){var t=e.id,n=e.fields,r=e.plural,o=e.children,u=y(e,["id","fields","plural","children"]);return Object(C.h)(v,null,Object(C.h)(b,i({},{html:Object(C.h)(h,{id:t,fields:n,plural:r,children:o}),id:t},u)))},s.Localizer=v,s.withText=g,s.useText=function(e){var t=Object(O.b)(A).intl;return m("function"==typeof e?e({intl:t}):e,t)},s.translate=f},QRet:function(e,t,n){"use strict";function r(e,t){w.options.__h&&w.options.__h(g,e,C||t),C=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return C=1,i(y,e)}function i(e,t,n){var o=r(b++,2);return o.t=e,o.__c||(o.__=[n?n(t):y(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function u(e,t){var n=r(b++,3);!w.options.__s&&v(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function a(e,t){var n=r(b++,4);!w.options.__s&&v(n.__H,t)&&(n.__=e,n.__H=t,g.__h.push(n))}function l(e){return C=5,s((function(){return{current:e}}),[])}function c(e,t,n){C=6,a((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function s(e,t){var n=r(b++,7);return v(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function _(e,t){return C=8,s((function(){return e}),t)}function p(e){var t=g.context[e.__c],n=r(b++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(g)),t.props.value):e.__}function f(e,t){w.options.useDebugValue&&w.options.useDebugValue(t?t(e):e)}function d(){O.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(h),e.__H.__h.forEach(m),e.__H.__h=[]}catch(t){e.__H.__h=[],w.options.__e(t,e.__v)}})),O=[]}function h(e){var t=g;"function"==typeof e.__c&&e.__c(),g=t}function m(e){var t=g;e.__c=e.__(),g=t}function v(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function y(e,t){return"function"==typeof t?t(e):t}n.d(t,"j",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return a})),n.d(t,"i",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}));var b,g,k,w=n("hosL"),C=0,O=[],S=w.options.__b,j=w.options.__r,P=w.options.diffed,x=w.options.__c,T=w.options.unmount;w.options.__b=function(e){g=null,S&&S(e)},w.options.__r=function(e){j&&j(e),b=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(h),t.__h.forEach(m),t.__h=[])},w.options.diffed=function(e){P&&P(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==O.push(t)&&k===w.options.requestAnimationFrame||((k=w.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),A&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);A&&(t=requestAnimationFrame(n))})(d)),g=void 0},w.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(h),e.__h=e.__h.filter((function(e){return!e.__||m(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],w.options.__e(n,e.__v)}})),x&&x(e,t)},w.options.unmount=function(e){T&&T(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(h)}catch(e){w.options.__e(e,t.__v)}};var A="function"==typeof requestAnimationFrame},YDDN:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),function(e){e.LIGHT="LIGHT",e.DARK="DARK"}(r||(r={}));var o,i=r;!function(e){e.ENGLISH="en",e.RUSSIAN="ru",e.SPANISH="es",e.KOREAN="ko",e.CHINESE="zh"}(o||(o={}));var u=o},ensb:function(e,t,n){"use strict";function r(e,t){if("string"==typeof e.type)return null;const n=e.__;if(!n)return;let o=n.__k;if(o){Array.isArray(o)||(o=[o]);let t=o.indexOf(e);-1===t&&(t=o.length);for(let e=t;e--;){const t=o[e],n=t&&t.__e||r(t,!0);if(n)return n}}return t?void 0:r(n)}function o(e){function t(){i.Component.call(this),n||(this.componentWillMount=()=>{e((e=>{n=e&&e.default||e,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(i.h)(n,e);const t=r(this.__v),o=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return o&&Object(i.h)(o.localName,{dangerouslySetInnerHTML:u})}}let n;return t.preload=e,(t.prototype=new i.Component).constructor=t,t}n.d(t,"a",(function(){return o}));var i=n("hosL");const u={}},fyes:function(e){e.exports=JSON.parse('{"header":{"launchApp":"Launch app"},"footer":{"community":"Community","documents":"Documents","company":"Company"},"nav":{"team":"Team","fiatOnRamp":"Fiat On-Ramp","faq":"FAQ","roadmap":"Roadmap","pitchDeck":"Pitch Deck","whitePaper":"White Paper","onePager":"One Pager","merchShop":"Merch Shop","settings":"Settings","contactOurTeam":"Contact Our Team","menu":"Menu"},"settings":{"darkMode":"Dark mode","themeForTheWeb":"Theme for the web","chooseLanguage":"Choose language","tutorials":"Tutorials","howToUse":"How to use","languages":"Languages"},"main":{"multiChain":"Multi-chain","swap":"swap","protocol":"protocol","rubic":"Rubic","multiChainSwapProtocolWhich":"is a Multi-chain Swap Protocol which","allows":"allows","you":"you","toSwap":"to swap","anyOf":"any of","of10000":"10000+ tokens, on","and":"and","onAndBetween8Blockchains":"between 8 blockchains in one click.","startTrading":"Start Trading"},"advantages":{"multiChainSwaps":"Multi-chain swaps","swapAssetsBetweenMultipleBlockchainsInASingleSwap":"Swap assets between multiple\\nblockchains in a single swap","blockchains":"8 Blockchains","tradeAssets":"Trade 10000+ assets","tradeMoreAssetsWithTheLowestGasFees":"Trade more assets with the\\nlowest gas fees"},"about":{"whatIs":"What is","rubic":"Rubic","multiChainProtocol":"is a Multi-Chain protocol that","allowsTo":"allows to complete","swapsBetween":"swaps between 10.000 tokens","blockchains":"on Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom and MoonRiver","in1Click":"in 1 click.","ourProtocol":"Our protocol features","dex":"60 DEXs,","fiat":"fiat on-ramps and Bridges.","pitchDeck":"Pitch Deck","onePager":"One Pager"},"grants":{"grants":"Grants","forRubic":"for Rubic","rubicHasWonGrantsWith":"Rubic has won grants with","majorBlockchainPlatforms":"major blockchain platforms","suchAs":"such as"},"audits":{"rubic":"Rubic","audits":"Audits","contractsAreCurrently":"Rubic Multi-Chain contracts are currently being audited by CertiK team."},"partnership":{"rubic":"Rubic","supports":"supports","dexes":"Dexes","blockchains":"Blockchains"},"trade":{"trade":"Trade","getWidget":"Get Widget","yourToken":"your token","directlyOn":"directly on","yourPlatform":"your platform!","theRubicRelay":"The Rubic Relay","widgetEnables":"Widget enables","users":"users","toBuy":"to buy and sell tokens on any website.","thisMeans":"This means that your users can buy token, without having to leave your website! It’s","free":"free","and":"and","easy":"easy to setup."},"documentation":{"documentation":"Documentation","findOutMore":"Find out more about our Multi-Chain solution and platform.","knowMore":"Know more"},"subscription":{"subscribeToOurNewsletter":"Subscribe to our newsletter","fillInYourEmail":"Fill in your email to receive Rubic’s latest info and updates","submit":"Submit"},"contact":{"get":"Get","involved":"Involved","contactUsToLearn":"Contact us to learn more about how you can become a validator, develop an application on the network, or integrate your chain.","byClicking":"By clicking the \\"Submit Message\\" button, you automatically agree to the","privacyPolicy":"privacy policy","submitMessage":"Submit Message"},"feedback":{"yourName":"Your name*","emailAdress":"Email adress*","telegram":"Telegram account*","companyOrProject":"Company or Project*","companyWebsiteURL":"Company website URL*","selectReason":"Select reason, why are you interested in Rubic?*","yourMessage":"Your message to our team","integrateOurBlockchain":"Integrate our blockchain to Rubic","MultiChainSwapProtocol":"Multi-chain swap protocol","CommerceDeal":"Commerce Deal","ProblemsMultiChainRouting":"Problems with Rubic Multi-Chain Routing"},"modal":{"WeSentConfirmation":"Thank you!\\n We\'ve sent a confirmation letter to your mail.","theApplicationHasBeenSubmitted":"Thank you!\\n The application has been submitted","theWidgetOnlySupports":"The widget only supports tokens that are listed at Rubic.exchange. In order to be listed, please fill the form. Check docs for selfintegration.","submit":"Submit","ok":"OK"}}')},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,a={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return u(e,a,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++D:o};return null!=R.vnode&&R.vnode(i),i}function a(){return{current:null}}function l(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function p(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!f.__r++||I!==R.debounceRendering)&&((I=R.debounceRendering)||N)(f)}function f(){for(var e;f.__r=M.length;)e=M.sort((function(e,t){return e.__v.__b-t.__v.__b})),M=[],e.some((function(e){var t,n,o,i,u,a;e.__d&&(u=(i=(t=e).__v).__e,(a=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,w(a,i,o,t.__n,void 0!==a.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?s(i):u,i.__h),C(n,i),i.__e!=u&&_(i)))}))}function d(e,t,n,r,o,i,a,c,_,p){var f,d,m,y,b,g,k,C=r&&r.__k||F,O=C.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(y=n.__k[f]=null==(y=t[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(l,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=C[f])||m&&y.key==m.key&&y.type===m.type)C[f]=void 0;else for(d=0;d<O;d++){if((m=C[d])&&y.key==m.key&&y.type===m.type){C[d]=void 0;break}m=null}w(e,y,m=m||U,o,i,a,c,_,p),b=y.__e,(d=y.ref)&&m.ref!=d&&(k||(k=[]),m.ref&&k.push(m.ref,null,y),k.push(d,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&null!=y.__k&&y.__k===m.__k?y.__d=_=h(y,_,e):_=v(e,y,m,C,b,_),p||"option"!==n.type?"function"==typeof n.type&&(n.__d=_):e.value=""):_&&m.__e==_&&_.parentNode!=e&&(_=s(m))}for(n.__e=g,f=O;f--;)null!=C[f]&&("function"==typeof n.type&&null!=C[f].__e&&C[f].__e==n.__d&&(n.__d=s(r,f+1)),j(C[f],C[f]));if(k)for(f=0;f<k.length;f++)S(k[f],k[++f],k[++f])}function h(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):v(n,o,o,e.__k,o.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function v(e,t,n,r,o,i){var u,a,l;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(a=i,l=0;(a=a.nextSibling)&&l<r.length;l+=2)if(a==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||B.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](R.event?R.event(e):e)}function k(e){this.l[e.type+!0](R.event?R.event(e):e)}function w(e,t,n,o,i,u,a,s,_){var p,f,h,m,v,y,b,g,k,w,C,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(_=n.__h,s=t.__e=n.__e,t.__h=null,u=[s]),(p=R.__b)&&p(t);try{e:if("function"==typeof S){if(g=t.props,k=(p=S.contextType)&&o[p.__c],w=p?k?k.props.value:p.__:o,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in S&&S.prototype.render?t.__c=f=new S(g,w):(t.__c=f=new c(g,w),f.constructor=S,f.render=P),k&&k.sub(f),f.props=g,f.state||(f.state={}),f.context=w,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=r({},f.__s)),r(f.__s,S.getDerivedStateFromProps(g,f.__s))),m=f.props,v=f.state,h)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,w)||t.__v===n.__v){f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&a.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,v,y)}))}f.context=w,f.props=g,f.state=f.__s,(p=R.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=e,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=r(r({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(m,v)),C=null!=p&&p.type===l&&null==p.key?p.props.children:p,d(e,Array.isArray(C)?C:[C],t,n,o,i,u,a,s,_),f.base=t.__e,t.__h=null,f.__h.length&&a.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,u,a,_);(p=R.diffed)&&p(t)}catch(e){t.__v=null,(_||null!=u)&&(t.__e=s,t.__h=!!_,u[u.indexOf(s)]=null),R.__e(e,t,n)}}function C(e,t){R.__c&&R.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){R.__e(e,t.__v)}}))}function O(e,t,n,r,i,u,a,l){var c,_,p,f=n.props,h=t.props,m=t.type,v=0;if("svg"===m&&(i=!0),null!=u)for(;v<u.length;v++)if((c=u[v])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,u[v]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),u=null,l=!1}if(null===m)f===h||l&&e.data===h||(e.data=h);else{if(u=u&&L.call(e.childNodes),_=(f=n.props||U).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!l){if(null!=u)for(f={},v=0;v<e.attributes.length;v++)f[e.attributes[v].name]=e.attributes[v].value;(p||_)&&(p&&(_&&p.__html==_.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,h,f,i,l),p)t.__k=[];else if(v=t.props.children,d(e,Array.isArray(v)?v:[v],t,n,r,i&&"foreignObject"!==m,u,a,u?u[0]:n.__k&&s(n,0),l),null!=u)for(v=u.length;v--;)null!=u[v]&&o(u[v]);l||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===m&&!v)&&b(e,"value",v,f.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&b(e,"checked",v,f.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){R.__e(e,n)}}function j(e,t,n){var r,i;if(R.unmount&&R.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){R.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function P(e,t,n){return this.constructor(e,n)}function x(e,t,n){var r,o,u;R.__&&R.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,u=[],w(t,e=(!r&&n||t).__k=i(l,null,[e]),o||U,U,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?L.call(t.childNodes):null,u,!r&&n?n:o?o.__e:t.firstChild,r),C(u,e)}function T(e,t){x(e,t,T)}function A(e,t,n){var o,i,a,l=r({},e.props);for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:l[a]=t[a];return arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),u(e.type,l,o||e.key,i||e.ref,null)}function E(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return x})),n.d(t,"hydrate",(function(){return T})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return l})),n.d(t,"createRef",(function(){return a})),n.d(t,"isValidElement",(function(){return H})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return E})),n.d(t,"toChildArray",(function(){return m})),n.d(t,"options",(function(){return R}));var L,R,D,H,M,N,I,W,U={},F=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=F.slice,R={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},D=0,H=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=l,M=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f.__r=0,W=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,a=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof a(n("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=a(n("qVkA")),r={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(r=JSON.parse(decodeURI(u.innerHTML)).preRenderData||r);r.url&&(l=r.url);var l;e=i(o(t,{CLI_DATA:{preRenderData:r}}),document.body,e)})()}},qVkA:function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.r(t);var o=n("hosL"),i=n("ensb"),u=Object(i.a)((function(e){n.e(6).then(function(){var t=n("mqcj");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),a=n("LLyK"),l={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},c=function e(t,n){function o(e,o,i){if("undefined"!=typeof document){"number"==typeof(i=r({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),o=t.write(o,e);var u="";for(var a in i)i[a]&&(u+="; "+a,!0!==i[a]&&(u+="="+i[a].split(";")[0]));return document.cookie=e+"="+o+u}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),u=i.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var a=l.read(i[0]);if(r[a]=t.read(u,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){o(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}(l,{path:"/"}),s=n("OhSV"),_=n("QRet"),p=n("fyes"),f=n("YDDN"),d=n("EWqP");const h={[f.a.ENGLISH]:p,[f.a.RUSSIAN]:p,[f.a.KOREAN]:p,[f.a.CHINESE]:p,[f.a.SPANISH]:p};var m=({children:e})=>{let t=f.a.ENGLISH;if("undefined"!=typeof window){var n;const e=Object.values(f.a);let r=null==(n=navigator.language)?void 0:n.split("-")[0];r=e.includes(r)?r:f.a.ENGLISH,t=c.get("lng"),t||(t=r,c.set("lng",r))}const[r,i]=Object(_.j)(t),u=Object(_.a)((e=>{c.set("lng",e),i(e)}),[]);return Object(o.h)(d.a.Provider,{value:{language:r,setLanguage:u}},Object(o.h)(s.a,{definition:h[r]},e))};t.default=()=>Object(o.h)(o.Fragment,null,Object(o.h)("div",{id:"preact_root"},Object(o.h)(a.b,null,Object(o.h)(m,null,Object(o.h)(u,null)))),Object(o.h)("div",{id:"modals",style:{"z-index":1e3}}))}});
//# sourceMappingURL=bundle.b9b7f.esm.js.map