(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/CookieTailor.props.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return defaultCookieTailorProps}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/types/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/constants/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var DefaultButtonComponent=function DefaultButtonComponent(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",Object.assign({},props,{children:children}))};DefaultButtonComponent.displayName="DefaultButtonComponent";var defaultCookieTailorProps={ButtonComponent:DefaultButtonComponent,acceptOnOverlayClick:!1,acceptOnScroll:!1,acceptOnScrollPercentage:25,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",containerClasses:"CookieTailor",contentClasses:"",contentStyle:{},cookieName:_types__WEBPACK_IMPORTED_MODULE_5__.defaultCookieTailorName,cookieValue:"true",customContainerAttributes:{},customContentAttributes:{},customDeclineButtonProps:{},debug:!1,declineCookieValue:"false",disableButtonStyles:!1,disableStyles:!1,enableDeclineButton:!1,expires:365,extraCookieOptions:{},flipButtons:!1,hideOnAccept:!0,hideOnDecline:!0,labels:_constants__WEBPACK_IMPORTED_MODULE_6__.c,location:_types__WEBPACK_IMPORTED_MODULE_5__.POSITION_OPTIONS.BOTTOM,onAccept:function onAccept(_acceptedByScrolling){},onDecline:function onDecline(){},onOverlayClick:function onOverlayClick(){},overlay:!1,overlayClasses:"",overlayStyle:{},sameSite:_types__WEBPACK_IMPORTED_MODULE_5__.SAME_SITE_OPTIONS.LAX,setDeclineCookie:!0,style:{},visible:_types__WEBPACK_IMPORTED_MODULE_5__.VISIBILITY_OPTIONS.BY_COOKIE_VALUE}},"./src/CookieTailor.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CookieTailor_CookieTailor}));__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var js_cookie=__webpack_require__("./node_modules/js-cookie/src/js.cookie.js"),js_cookie_default=__webpack_require__.n(js_cookie),react=__webpack_require__("./node_modules/react/index.js"),ConditionalWrapper=__webpack_require__("./src/components/ConditionalWrapper.tsx"),CookieTailor_props=__webpack_require__("./src/CookieTailor.props.tsx"),defaultState={visible:!1,style:{alignItems:"baseline",borderTop:"2px solid #2B567D",background:"#FFF",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},types=__webpack_require__("./src/types/index.ts"),utilities=__webpack_require__("./src/utilities.ts"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FooterTrailing_FooterTrailing=function FooterTrailing(_ref){var labels=_ref.labels;return Object(jsx_runtime.jsx)(Grid.a,{item:!0,md:3,children:Object(jsx_runtime.jsx)(Grid.a,{justifyContent:"flex-end",container:!0,spacing:24,children:Object(jsx_runtime.jsxs)(Grid.a,{item:!0,children:[Object(jsx_runtime.jsx)(Button.a,{variant:"contained",size:"large",sx:{mb:1},style:{width:"250px"},children:labels.main.buttonAllow}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(Button.a,{variant:"outlined",size:"large",style:{width:"250px"},children:labels.main.buttonDefault})]})})})};FooterTrailing_FooterTrailing.displayName="FooterTrailing";var Footer_FooterTrailing=FooterTrailing_FooterTrailing,constants=__webpack_require__("./src/constants/index.ts"),FooterMain_FooterMain=function FooterMain(_ref){var labels=_ref.labels;return Object(jsx_runtime.jsxs)(Grid.a,{item:!0,md:9,children:[Object(jsx_runtime.jsx)("span",{style:{color:"#000",fontFamily:constants.a,fontWeight:600,letterSpacing:.25,lineHeight:"1.6em",marginBottom:"0.5em"},children:labels.main.title})," ",Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("span",{style:{color:"#000",fontFamily:constants.a,fontSize:"16px",fontWeight:300,lineHeight:"1.6em"},children:labels.main.description})]})};FooterMain_FooterMain.displayName="FooterMain";var Footer_FooterMain=FooterMain_FooterMain,Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),FormGroup=__webpack_require__("./node_modules/@mui/material/FormGroup/FormGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),FooterBar_FooterBar=function FooterBar(_ref){var labels=_ref.labels;return Object(jsx_runtime.jsx)(Grid.a,{container:!0,spacing:2,children:Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:9,children:Object(jsx_runtime.jsxs)(FormGroup.a,{row:!0,children:[Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"switchMandatory",control:Object(jsx_runtime.jsx)(Switch.a,{color:"primary",disabled:!0,defaultChecked:!0}),label:Object(jsx_runtime.jsx)(Typography.a,{color:"common.black",fontFamily:constants.a,fontWeight:constants.b,letterSpacing:constants.d,children:labels.main.switchMandatory}),labelPlacement:"start",sx:{ml:0}}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"switchPreferences",control:Object(jsx_runtime.jsx)(Switch.a,{color:"primary",defaultChecked:!0}),label:Object(jsx_runtime.jsx)(Typography.a,{color:"common.black",fontFamily:constants.a,fontWeight:constants.b,letterSpacing:constants.d,children:labels.main.switchPreferences}),labelPlacement:"start",sx:{ml:5}}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"switchStatistics",control:Object(jsx_runtime.jsx)(Switch.a,{color:"primary",defaultChecked:!0}),label:Object(jsx_runtime.jsx)(Typography.a,{color:"common.black",fontFamily:constants.a,fontWeight:constants.b,letterSpacing:constants.d,children:labels.main.switchStatistics}),labelPlacement:"start",sx:{ml:5}}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"switchMarketing",control:Object(jsx_runtime.jsx)(Switch.a,{color:"primary",defaultChecked:!0}),label:Object(jsx_runtime.jsx)(Typography.a,{color:"common.black",fontFamily:constants.a,fontWeight:constants.b,letterSpacing:constants.d,children:labels.main.switchMarketing}),labelPlacement:"start",sx:{ml:5}}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"switchMarketing",label:Object(jsx_runtime.jsx)(Typography.a,{color:"#1976D2",fontFamily:constants.a,fontWeight:constants.b,letterSpacing:constants.d,children:labels.main.moreSettings}),labelPlacement:"start",sx:{ml:5},control:Object(jsx_runtime.jsx)("div",{})})]})})})};FooterBar_FooterBar.displayName="FooterBar";var Footer_FooterBar=FooterBar_FooterBar,Footer_FooterTailor=function FooterTailor(_ref){var labels=_ref.labels;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsxs)(Box.a,{sx:{flexGrow:1},children:[Object(jsx_runtime.jsxs)(Grid.a,{container:!0,spacing:2,children:[Object(jsx_runtime.jsx)(Footer_FooterMain,{labels:labels}),Object(jsx_runtime.jsx)(Footer_FooterTrailing,{labels:labels})]}),Object(jsx_runtime.jsx)(Divider.a,{sx:{my:1}}),Object(jsx_runtime.jsx)(Footer_FooterBar,{labels:labels})]})})},Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}var CookieTailor_CookieTailor=function(_Component){function CookieTailor(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CookieTailor);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_callSuper(this,CookieTailor,[].concat(args))).state=defaultState,_this.handleScroll=function(){var acceptOnScrollPercentage=Object.assign({},CookieTailor_props.a,_this.props).acceptOnScrollPercentage,rootNode=document.documentElement,body=document.body;(rootNode.scrollTop||body.scrollTop)/((rootNode.scrollHeight||body.scrollHeight)-rootNode.clientHeight)*100>acceptOnScrollPercentage&&_this.accept(!0)},_this.removeScrollListener=function(){_this.props.acceptOnScroll&&window.removeEventListener("scroll",_this.handleScroll)},_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CookieTailor,_Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CookieTailor,[{key:"componentDidMount",value:function componentDidMount(){var debug=this.props.debug;(void 0===this.getCookieValue()||debug)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeScrollListener()}},{key:"accept",value:function accept(){var acceptedByScrolling=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_defaultCookieTailorP2=Object.assign({},CookieTailor_props.a,this.props),cookieName=_defaultCookieTailorP2.cookieName,cookieValue=_defaultCookieTailorP2.cookieValue,hideOnAccept=_defaultCookieTailorP2.hideOnAccept,onAccept=_defaultCookieTailorP2.onAccept;this.setCookie(cookieName,cookieValue),onAccept(null!=acceptedByScrolling&&acceptedByScrolling),hideOnAccept&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"overlayClick",value:function overlayClick(){var _defaultCookieTailorP3=Object.assign({},CookieTailor_props.a,this.props),acceptOnOverlayClick=_defaultCookieTailorP3.acceptOnOverlayClick,onOverlayClick=_defaultCookieTailorP3.onOverlayClick;acceptOnOverlayClick&&this.accept(),onOverlayClick()}},{key:"decline",value:function decline(){var _defaultCookieTailorP4=Object.assign({},CookieTailor_props.a,this.props),cookieName=_defaultCookieTailorP4.cookieName,declineCookieValue=_defaultCookieTailorP4.declineCookieValue,hideOnDecline=_defaultCookieTailorP4.hideOnDecline,onDecline=_defaultCookieTailorP4.onDecline;_defaultCookieTailorP4.setDeclineCookie&&this.setCookie(cookieName,declineCookieValue),onDecline(),hideOnDecline&&this.setState({visible:!1})}},{key:"setCookie",value:function setCookie(cookieName,cookieValue){var _this$props=this.props,extraCookieOptions=_this$props.extraCookieOptions,expires=_this$props.expires,sameSite=_this$props.sameSite,cookieSecurity=this.props.cookieSecurity;void 0===cookieSecurity&&(cookieSecurity=!window.location||"https:"===window.location.protocol);var cookieOptions=Object.assign({expires:expires},extraCookieOptions,{sameSite:sameSite,secure:cookieSecurity});sameSite===types.SAME_SITE_OPTIONS.NONE&&js_cookie_default.a.set(Object(utilities.b)(cookieName),cookieValue,cookieOptions),js_cookie_default.a.set(cookieName,cookieValue,cookieOptions)}},{key:"getCookieValue",value:function getCookieValue(){var cookieName=this.props.cookieName;return Object(utilities.a)(cookieName)}},{key:"render",value:function render(){var _this2=this;switch(this.props.visible){case types.VISIBILITY_OPTIONS.HIDDEN:return null;case types.VISIBILITY_OPTIONS.BY_COOKIE_VALUE:if(!this.state.visible)return null}var _this$props2=this.props,containerClasses=_this$props2.containerClasses,contentClasses=_this$props2.contentClasses,contentStyle=_this$props2.contentStyle,customContainerAttributes=_this$props2.customContainerAttributes,customContentAttributes=_this$props2.customContentAttributes,disableStyles=_this$props2.disableStyles,labels=_this$props2.labels,location=_this$props2.location,overlay=_this$props2.overlay,overlayClasses=_this$props2.overlayClasses,overlayStyle=_this$props2.overlayStyle,style=_this$props2.style,myStyle={},myContentStyle={},myOverlayStyle={};switch(disableStyles?(myStyle=Object.assign({},style),myContentStyle=Object.assign({},contentStyle),myOverlayStyle=Object.assign({},overlayStyle)):(myStyle=Object.assign({},Object.assign({},this.state.style,style)),myContentStyle=Object.assign({},Object.assign({},this.state.contentStyle,contentStyle)),myOverlayStyle=Object.assign({},Object.assign({},this.state.overlayStyle,overlayStyle))),location){case types.POSITION_OPTIONS.TOP:myStyle.top="0";break;case types.POSITION_OPTIONS.BOTTOM:myStyle.bottom="0"}return Object(jsx_runtime.jsx)(ConditionalWrapper.a,{condition:overlay,wrapper:function wrapper(children){return Object(jsx_runtime.jsx)("div",{style:myOverlayStyle,className:overlayClasses,onClick:function onClick(){_this2.overlayClick()},children:children})},children:Object(jsx_runtime.jsx)("div",Object.assign({className:""+containerClasses,style:myStyle},customContainerAttributes,{children:Object(jsx_runtime.jsx)("div",Object.assign({style:myContentStyle,className:contentClasses},customContentAttributes,{children:Object(jsx_runtime.jsx)(Container.a,{maxWidth:"xl",children:Object(jsx_runtime.jsx)(Footer_FooterTailor,{labels:labels||CookieTailor_props.a.labels})})}))}))})}}]),CookieTailor}(react.Component);CookieTailor_CookieTailor.defaultProps=CookieTailor_props.a},"./src/components/ConditionalWrapper.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ConditionalWrapper}));var ConditionalWrapper=function ConditionalWrapper(_ref){var condition=_ref.condition,wrapper=_ref.wrapper,children=_ref.children;return condition?wrapper(children):children}},"./src/constants/defaultCookieName.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return defaultCookieTailorName}));var defaultCookieTailorName="CookieTailor"},"./src/constants/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return defaultLabels})),__webpack_require__.d(__webpack_exports__,"a",(function(){return defaultFontFamily})),__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultFontWeight})),__webpack_require__.d(__webpack_exports__,"d",(function(){return defaultLetterSpacing}));__webpack_require__("./src/constants/defaultCookieName.ts");var defaultLabels={about:{title:"About",description:"This is an example of a cookie consent banner with more information."},consent:{title:"Consent",description:"This is an example of a cookie consent banner with more information."},details:{title:"Details",description:"This is an example of a cookie consent banner with more information."},main:{buttonAllow:"Allow all",buttonDefault:"Allow default",description:"For purposes such as displaying personalized content, we use cookies or similar technologies. By clicking Accept, you agree to allow the collection of information through cookies or similar technologies. Find out more about cookies, including the ability to withdraw your consent, in the Cookies Policy section.",moreSettings:"More settings",switchMandatory:"Mandatory",switchMarketing:"Marketing",switchMoreInfo:"More info",switchPreferences:"Preferences",switchStatistics:"Statistics",title:"This website uses cookies"}},defaultFontFamily="sans-serif",defaultFontWeight=700,defaultLetterSpacing="0.05em"},"./src/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/js-cookie/src/js.cookie.js"),__webpack_require__("./src/components/ConditionalWrapper.tsx");var _CookieTailor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/CookieTailor.tsx");__webpack_require__.d(__webpack_exports__,"CookieTailor",(function(){return _CookieTailor__WEBPACK_IMPORTED_MODULE_2__.a}));__webpack_require__("./src/types/index.ts"),__webpack_require__("./src/utilities.ts");__webpack_exports__.default=_CookieTailor__WEBPACK_IMPORTED_MODULE_2__.a},"./src/types/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _constants_defaultCookieName__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/defaultCookieName.ts");__webpack_require__.d(__webpack_exports__,"defaultCookieTailorName",(function(){return _constants_defaultCookieName__WEBPACK_IMPORTED_MODULE_0__.a}));var _labels__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/labels.ts");__webpack_require__.o(_labels__WEBPACK_IMPORTED_MODULE_1__,"POSITION_OPTIONS")&&__webpack_require__.d(__webpack_exports__,"POSITION_OPTIONS",(function(){return _labels__WEBPACK_IMPORTED_MODULE_1__.POSITION_OPTIONS})),__webpack_require__.o(_labels__WEBPACK_IMPORTED_MODULE_1__,"SAME_SITE_OPTIONS")&&__webpack_require__.d(__webpack_exports__,"SAME_SITE_OPTIONS",(function(){return _labels__WEBPACK_IMPORTED_MODULE_1__.SAME_SITE_OPTIONS})),__webpack_require__.o(_labels__WEBPACK_IMPORTED_MODULE_1__,"VISIBILITY_OPTIONS")&&__webpack_require__.d(__webpack_exports__,"VISIBILITY_OPTIONS",(function(){return _labels__WEBPACK_IMPORTED_MODULE_1__.VISIBILITY_OPTIONS}));var _positionOptions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/types/positionOptions.ts");__webpack_require__.d(__webpack_exports__,"POSITION_OPTIONS",(function(){return _positionOptions__WEBPACK_IMPORTED_MODULE_2__.a}));var _sameSiteOptions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/types/sameSiteOptions.ts");__webpack_require__.d(__webpack_exports__,"SAME_SITE_OPTIONS",(function(){return _sameSiteOptions__WEBPACK_IMPORTED_MODULE_3__.a}));var _visibilityOptions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/types/visibilityOptions.ts");__webpack_require__.d(__webpack_exports__,"VISIBILITY_OPTIONS",(function(){return _visibilityOptions__WEBPACK_IMPORTED_MODULE_4__.a}))},"./src/types/labels.ts":function(module,exports){},"./src/types/positionOptions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return POSITION_OPTIONS}));var POSITION_OPTIONS={TOP:"top",BOTTOM:"bottom",NONE:"none"}},"./src/types/sameSiteOptions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SAME_SITE_OPTIONS}));var SAME_SITE_OPTIONS=function(SAME_SITE_OPTIONS){return SAME_SITE_OPTIONS.STRICT="strict",SAME_SITE_OPTIONS.LAX="lax",SAME_SITE_OPTIONS.NONE="none",SAME_SITE_OPTIONS}({})},"./src/types/visibilityOptions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return VISIBILITY_OPTIONS}));var VISIBILITY_OPTIONS={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"}},"./src/utilities.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getCookieTailorValue})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getLegacyCookieName}));var js_cookie__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/js-cookie/src/js.cookie.js"),js_cookie__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/index.ts"),getCookieTailorValue=function getCookieTailorValue(){var name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_types__WEBPACK_IMPORTED_MODULE_1__.defaultCookieTailorName,cookieValue=js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(name);return void 0===cookieValue?js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(getLegacyCookieName(name)):cookieValue},getLegacyCookieName=function getLegacyCookieName(name){return name+"-legacy"}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$":function(module,exports,__webpack_require__){var map={"./index.stories.tsx":"./stories/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$"},"./stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"AcceptOnScroll",(function(){return AcceptOnScroll})),__webpack_require__.d(__webpack_exports__,"AdditionalButtons",(function(){return AdditionalButtons})),__webpack_require__.d(__webpack_exports__,"CustomStyling",(function(){return CustomStyling})),__webpack_require__.d(__webpack_exports__,"FlippedButtons",(function(){return FlippedButtons})),__webpack_require__.d(__webpack_exports__,"CustomMuiButton",(function(){return CustomMuiButton})),__webpack_require__.d(__webpack_exports__,"CustomOnAccept",(function(){return CustomOnAccept})),__webpack_require__.d(__webpack_exports__,"Overlay",(function(){return Overlay})),__webpack_require__.d(__webpack_exports__,"Rainbows",(function(){return Rainbows}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var src=__webpack_require__("./src/index.tsx"),CookieTailor_props=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./src/CookieTailor.props.tsx")),defaultStoryProps=Object.assign({},CookieTailor_props.a,{debug:!0}),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),intro_Intro=function Intro(){return Object(jsx_runtime.jsx)("h1",{children:Object(jsx_runtime.jsx)("p",{children:"Debug is turned on for all stories so that the bar always shows up"})})};intro_Intro.displayName="Intro";var template_DefaultTemplate=function DefaultTemplate(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(intro_Intro,{}),Object(jsx_runtime.jsx)(src.default,{})]})},AcceptOnScroll=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),function AcceptOnScrollTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(intro_Intro,{}),Array.from(Array(25).keys()).map((function(_something){return Object(jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum aut distinctio quisquam ab!"})})),Object(jsx_runtime.jsxs)(src.default,Object.assign({},args,{children:["Scroll for ",args.acceptOnScrollPercentage,"% and the onAccept will trigger"]}))]})}.bind({}));AcceptOnScroll.args=Object.assign({},defaultStoryProps,{onAccept:function onAccept(acceptedByScrolling){alert("ACCEPTED! By scrolling? "+JSON.stringify(acceptedByScrolling))},acceptOnScroll:!0,acceptOnScrollPercentage:25});var AdditionalButtons=function AdditionalButtonsTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(intro_Intro,{}),Object(jsx_runtime.jsxs)(src.default,Object.assign({},args,{children:[Object(jsx_runtime.jsx)("button",{style:{color:"gray"},children:"I am a custom config button"}),Object(jsx_runtime.jsx)("span",{style:{fontSize:"10px"},children:"This bit of text is smaller :O"})]}))]})}.bind({});AdditionalButtons.args=defaultStoryProps;var CustomStyling=template_DefaultTemplate.bind({});CustomStyling.args=Object.assign({},defaultStoryProps,{style:{background:"red"},buttonStyle:{fontWeight:"bold"}});var FlippedButtons=template_DefaultTemplate.bind({});FlippedButtons.args=Object.assign({},defaultStoryProps,{flipButtons:!0,enableDeclineButton:!0});var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),CustomMuiButton=template_DefaultTemplate.bind({});CustomMuiButton.args=Object.assign({},defaultStoryProps,{disableButtonStyles:!0,ButtonComponent:Button.a,customButtonProps:{variant:"contained",style:{marginRight:"10px"}}});var CustomOnAccept=template_DefaultTemplate.bind({});CustomOnAccept.args=Object.assign({},defaultStoryProps,{onAccept:function onAccept(acceptedByScrolling){alert("ACCEPTED! By scrolling? "+JSON.stringify(acceptedByScrolling))}});var Overlay=template_DefaultTemplate.bind({});Overlay.args=Object.assign({},defaultStoryProps,{overlay:!0});var Rainbows=template_DefaultTemplate.bind({});Rainbows.args=Object.assign({},defaultStoryProps,{buttonText:"OMG DOUBLE RAINBOW",style:{background:"linear-gradient(to right, orange , yellow, green, cyan, blue, violet)",textShadow:"2px 2px black"},buttonStyle:{background:"linear-gradient(to left, orange , yellow, green, cyan, blue, violet)",color:"white",fontWeight:"bolder",textShadow:"2px 2px black"}});var meta={title:"CookieTailor",component:src.CookieTailor,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},Default=(__webpack_exports__.default=meta,template_DefaultTemplate.bind({}));Default.args=defaultStoryProps},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);