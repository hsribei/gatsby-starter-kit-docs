(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.literal,r=t.overlap,o=n?e:["&"].concat(e);function i(e){if("object"!=typeof e||null==e)return[];if(Array.isArray(e))return e.map(i);var t={},a={},u={};return Object.keys(e).forEach(function(l){var c=e[l];if(!Array.isArray(c)&&n&&(c=[c]),(n||Array.isArray(c))&&38!==l.charCodeAt(0)){var f=void 0;c.forEach(function(e,i){if((!r||f!==e)&&null!=e)if(f=e,0!==i||n)if(void 0===t[o[i]]){var a;t[o[i]]=((a={})[l]=e,a)}else t[o[i]][l]=e;else u[l]=e})}else"object"==typeof c?a[l]=i(c):u[l]=c}),o.forEach(function(e){t[e]&&(u[e]=t[e])}),Object.assign(u,a),u}return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(i)}}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(48),o=u(n(3)),i=u(n(0)),a=u(n(262));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.title,n=e.subTitle,o=e.themeStyle,u=void 0===o?a.default:o;return i.default.createElement(r.Link,{className:"".concat(u),to:"/"},i.default.createElement("h1",null,t),i.default.createElement("p",null,n))};l.propTypes={title:o.default.string,subTitle:o.default.string,logo:o.default.node,themeStyle:o.default.string};var c=l;t.default=c},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(3)),o=a(n(0)),i=a(n(274));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.links,n=e.copyright,r=e.themeStyle,a=void 0===r?i.default:r;return o.default.createElement("footer",{className:"".concat(a)},o.default.createElement("div",{className:"links",dangerouslySetInnerHTML:{__html:t}}),o.default.createElement("div",{className:"copyright",dangerouslySetInnerHTML:{__html:n}}),o.default.createElement("div",{className:"credits"},"Built with"," ",o.default.createElement("a",{href:"https://github.com/greglobinski/gatsby-starter-kit"},"Gatsby Starter Kit")," ","| Design by"," ",o.default.createElement("a",{href:"https://github.com/greglobinski/react-website-themes"},"React Website Themes")))};u.propTypes={links:r.default.string,copyright:r.default.string,themeStyle:r.default.string};var l=u;t.default=l},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),i=a(n(275));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.children,n=e.themeStyle,o=void 0===n?i.default:n;return r.default.createElement("header",{className:"".concat(o)},t)};u.propTypes={children:o.default.node,themeStyle:o.default.string};var l=u;t.default=l},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(3)),o=a(n(0));n(276),n(278);var i=a(n(279));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,n,r,o,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return this,a={modifier:""},(i="state")in(o=s(s(n=!(r=(e=c(t)).call.apply(e,[this].concat(f)))||"object"!==u(r)&&"function"!=typeof r?s(this):r)))?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.default.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.setState({modifier:"entry"})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.themeStyle,r=void 0===n?i.default:n,a=this.state.modifier;return o.default.createElement("div",{className:"".concat(r," ").concat(a)},o.default.createElement("main",null,t))}}])&&l(n.prototype,r),t}();d.propTypes={children:r.default.node.isRequired,themeStyle:r.default.string};var p=d;t.default=p},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(3)),o=u(n(0)),i=n(48),a=u(n(280));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=e.items,n=e.themeStyle,r=void 0===n?a.default:n;return o.default.createElement("nav",{className:"".concat(r)},o.default.createElement("ul",null,t.map(function(e){var t=e.label,n=e.to,r=e.icon,a=e.linkProps;return o.default.createElement("li",{key:t},o.default.createElement(i.Link,l({to:n,activeClassName:"active"},a),r&&o.default.createElement(r,null),o.default.createElement("span",null,t)))})))};c.propTypes={items:r.default.array.isRequired,themeStyle:r.default.string};var f=c;t.default=f},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),i=a(n(281));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.url,n=e.language,o=void 0===n?"en":n,a=e.title,u=e.description;return r.default.createElement(i.default,{htmlAttributes:{lang:o,prefix:"og: http://ogp.me/ns#"}},r.default.createElement("title",null,a),r.default.createElement("meta",{name:"description",content:u}),r.default.createElement("meta",{property:"og:url",content:t}),r.default.createElement("meta",{property:"og:title",content:a}),r.default.createElement("meta",{property:"og:description",content:u}),r.default.createElement("meta",{property:"og:type",content:"website"}),r.default.createElement("meta",{name:"twitter:card",content:"summary"}))};u.propTypes={language:o.default.string,url:o.default.string.isRequired,title:o.default.string.isRequired,description:o.default.string.isRequired,image:o.default.string};var l=u;t.default=l},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(0)),i=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.color,n=e.size,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","size"]);return o.default.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.default.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.default.createElement("polyline",{points:"9 22 9 12 15 12 15 22"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"},t.default=u},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(0)),i=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.color,n=e.size,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","size"]);return o.default.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.default.createElement("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),o.default.createElement("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),o.default.createElement("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),o.default.createElement("line",{x1:"3",y1:"6",x2:"3",y2:"6"}),o.default.createElement("line",{x1:"3",y1:"12",x2:"3",y2:"12"}),o.default.createElement("line",{x1:"3",y1:"18",x2:"3",y2:"18"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"},t.default=u},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(0)),i=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.color,n=e.size,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","size"]);return o.default.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.default.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),o.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"8"}))};u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.defaultProps={color:"currentColor",size:"24"},t.default=u},258:function(e,t,n){},259:function(e,t){t.__esModule=!0,t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(124);function i(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  flex-grow: 0;\n  justify-content: center;\n\n  ",";\n\n  h1 {\n    font-size: 1em;\n    margin-bottom: 3px;\n    font-weight: 400;\n  }\n\n  p {\n    font-size: 0.7em;\n    color: var(--superLightTextColor);\n    letter-spacing: 0.1em;\n    font-weight: 300;\n  }\n"]);return i=function(){return e},e}var a=(0,((r=n(237))&&r.__esModule?r:{default:r}).default)([1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),u=(0,o.css)(i(),a({alignItems:["center","flex-start"],margin:["10px 0 20px","0"]}));t.default=u},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(124);function i(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: column;\n  font-size: 0.9em;\n  margin: 60px 0 20px;\n\n  ",";\n\n  .links ul {\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    line-height: 1.1;\n  }\n\n  .links a {\n    text-decoration: none;\n    color: #777;\n    font-weight: bold;\n  }\n\n  .links li {\n    text-align: center;\n    margin: 2px 10px;\n    position: relative;\n  }\n\n  .copyright {\n    font-size: 0.8em;\n    text-align: center;\n    margin: 10px 0 30px;\n\n    & p {\n      color: var(--superLightTextColor);\n    }\n  }\n\n  .credits {\n    font-size: 0.8em;\n    color: var(--superLightTextColor);\n    margin: 20px 0 0;\n    text-align: center;\n\n    & a {\n      text-decoration: none;\n      color: var(--lightTextColor);\n    }\n  }\n"]);return i=function(){return e},e}var a=(0,((r=n(237))&&r.__esModule?r:{default:r}).default)([1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),u=(0,o.css)(i(),a({margin:["60px 0 60px","60px 0 20px"]}));t.default=u},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(124);function i(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  margin-bottom: 50px;\n  padding: 5px 5px 0;\n  align-items: center;\n\n  ",";\n\n  a {\n    text-decoration: none;\n  }\n"]);return i=function(){return e},e}var a=(0,((r=n(237))&&r.__esModule?r:{default:r}).default)([1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),u=(0,o.css)(i(),a({flexDirection:["column","row"],marginBottom:["35px","50px"]}));t.default=u},276:function(e,t,n){"use strict";function r(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  :root {\n    --firstActiveColor: #d00;\n    --secondActiveColor: orange;\n    --superLightGray: #ccc;\n\n    --textColor: #555;\n    --lightTextColor:  #777;\n    --superLightTextColor:  #aaa;\n\n    --linkColor: #a00;\n    --hoverLinkColor: #d00;\n\n    --scrollBarThumb: #eaeaea;\n    --scrollBarTrack: #f9f9f9;\n    --scrollBarWidth: 5px;\n  }\n"]);return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(258);var o=(0,n(124).injectGlobal)(r());t.default=o},278:function(e,t,n){"use strict";function r(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  html {\n    box-sizing: border-box;\n    font-family: "Merriweather Sans", sans-serif;\n    font-size: 16px;\n    color: #666;\n  }\n\n  *,\n  *:after,\n  *:before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    color: var(--textColor);\n  }\n\n  h1, h2, h3 {\n    color: var(--lightTextColor);\n  }\n\n  h1 {\n    font-size: 2.4em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  ul {\n    list-style-position: inside;\n  }\n\n  a {\n    color: var(--linkColor);\n    transition: .3s;\n  }\n\n  @media (hover: hover)  {\n    a:hover {\n      color: var(--hoverLinkColor);\n    }\n  }\n\n  *::-webkit-scrollbar {\n    width: var(--scrollBarWidth);\n  }\n  *::-webkit-scrollbar-track {\n    background: var(--scrollBarTrack);\n  }\n  *::-webkit-scrollbar-thumb {\n    background-color: var(--scrollBarThumb);\n  }\n\n\n']);return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(258);var o=(0,n(124).injectGlobal)(r());t.default=o},279:function(e,t,n){"use strict";function r(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 15px 25px;\n"]);return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,n(124).css)(r());t.default=o},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(124);function i(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n  z-index: 1;\n  background: #fff;\n  justify-content: center;\n\n  ",";\n\n  & ul {\n    list-style: none;\n    display: flex;\n    height: 44px;\n    justify-content: center;\n  }\n\n  & li {\n    padding: 0 5px;\n    line-height: 1;\n\n    & a {\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n      margin: 0 5px;\n      color: var(--lightTextColor);\n      position: relative;\n\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        background: var(--firstActiveColor);\n        width: 20px;\n        height: 0px;\n        transition: 0.3s;\n        transform: translateY(8px);\n      }\n\n      &.active:before {\n        height: 5px;\n        transform: translateY(0);\n      }\n\n      &:not(.active) {\n        @media (hover: hover) {\n          &:hover:before {\n            height: 5px;\n            transform: translateY(0);\n            background: var(--secondActiveColor);\n          }\n        }\n      }\n    }\n\n    & svg {\n      margin: 0 5px 0 0;\n      height: 20px;\n      width: 20px;\n    }\n  }\n"]);return i=function(){return e},e}var a=(0,((r=n(237))&&r.__esModule?r:{default:r}).default)([1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),u=(0,o.css)(i(),a({justifyContent:["center","flex-end"],position:["fixed","relative"],bottom:[0,"auto"],width:["100%","auto"],left:[0,"auto"],borderTop:["1px solid #ddd","none"]}));t.default=u},281:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(0)),a=s(n(3)),u=s(n(282)),l=s(n(285)),c=n(288),f=n(259);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var p,T,y,E=(0,u.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)(function(){return null}),h=(p=E,y=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case f.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case f.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case f.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case f.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach(function(t){var o;n=r({},n,((o={})[t]=e[t],o))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=d(o,["children"]),u=(0,c.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case f.TAG_NAMES.LINK:case f.TAG_NAMES.META:case f.TAG_NAMES.NOSCRIPT:case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},282:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(0),i=r(o),a=r(n(283)),u=r(n(284));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],c=void 0;function f(){c=e(l.map(function(e){return e.props})),s.canUseDOM?t(c):n&&(c=n(c))}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return c},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return s.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",s.canUseDOM=a.canUseDOM,s}}},283:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},284:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var f=e[c],s=t[c];if(!1===(o=n?n.call(r,f,s,c):void 0)||void 0===o&&f!==s)return!1}return!0}},285:function(e,t,n){var r=Array.prototype.slice,o=n(286),i=n(287),a=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var c,f;if(u(e)||u(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=r.call(e),t=r.call(t),a(e,t,n));if(l(e)){if(!l(t))return!1;if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}try{var s=o(e),d=o(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),c=s.length-1;c>=0;c--)if(s[c]!=d[c])return!1;for(c=s.length-1;c>=0;c--)if(f=s[c],!a(e[f],t[f],n))return!1;return typeof e==typeof t}(e,t,n))};function u(e){return null===e||void 0===e}function l(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.copy||"function"!=typeof e.slice||e.length>0&&"number"!=typeof e[0])}},286:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},287:function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?r:o).supported=r,t.unsupported=o},288:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n(0)),a=l(n(75)),u=n(259);function l(e){return e&&e.__esModule?e:{default:e}}var c,f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},d=function(e,t,n){var o={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===u.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==u.TAG_PROPERTIES.INNER_HTML&&l!==u.TAG_PROPERTIES.CSS_TEXT&&l!==u.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][f]&&(r[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(r),l=0;l<i.length;l++){var c=i[l],f=(0,a.default)({},o[c],r[c]);o[c]=f}return e},[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},T=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout(function(){T(e)},0)}),y=function(e){return clearTimeout(e)},E="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,h="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},m=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,s=e.styleTags,d=e.title,p=e.titleAttributes;_(u.TAG_NAMES.BODY,r),_(u.TAG_NAMES.HTML,o),g(d,p);var T={baseTag:O(u.TAG_NAMES.BASE,n),linkTags:O(u.TAG_NAMES.LINK,i),metaTags:O(u.TAG_NAMES.META,a),noscriptTags:O(u.TAG_NAMES.NOSCRIPT,l),scriptTags:O(u.TAG_NAMES.SCRIPT,f),styleTags:O(u.TAG_NAMES.STYLE,s)},y={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),c(e,y,E)},A=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=A(e)),_(u.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],f=t[c]||"";n.getAttribute(c)!==f&&n.setAttribute(c,f),-1===o.indexOf(c)&&o.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},S=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},w=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=P(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=S(n),i=A(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return S(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},t.handleClientStateChange=function(e){m&&h(m),e.defer?m=E(function(){b(e,function(){m=null})}):(b(e),m=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,f=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:w(u.TAG_NAMES.BASE,t,r),bodyAttributes:w(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(u.ATTRIBUTE_NAMES.HTML,o,r),link:w(u.TAG_NAMES.LINK,i,r),meta:w(u.TAG_NAMES.META,a,r),noscript:w(u.TAG_NAMES.NOSCRIPT,l,r),script:w(u.TAG_NAMES.SCRIPT,c,r),style:w(u.TAG_NAMES.STYLE,f,r),title:w(u.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])}([u.TAG_PROPERTIES.HREF],e),bodyAttributes:s(u.ATTRIBUTE_NAMES.BODY,e),defer:p(e,u.HELMET_PROPS.DEFER),encode:p(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:s(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:function(e){return p(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}}(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:function(e){var t=p(e,u.TAG_NAMES.TITLE),n=p(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=p(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0}(e),titleAttributes:s(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=E,t.warn=v}).call(this,n(125))}}]);
//# sourceMappingURL=0-bed1d16073de7e30c60e.js.map