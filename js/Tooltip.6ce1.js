(window.jobsConfig=window.jobsConfig||[]).push([[764],{415:(t,e,n)=>{n.r(e),n.d(e,{Tooltips:()=>m});var o=n(400),r=n(396),i=n(934),a=n.n(i),s=n(971),l=n(632),c=n(309);const u=({target:t})=>{const e={minWidth:t.offsetWidth},n=(0,c.AK)([l.Z.mtk4,!t.value&&l.Z.err]),r=(0,c.AK)([l.Z.func,!t.validity.valid&&l.Z.err]);return(0,o.h)("div",{className:"y",style:e},(0,o.h)("code",{className:"z"},(0,o.h)("span",{className:n},"export function "),(0,o.h)("span",{className:r},t.value),"() {",(0,o.h)("br",null),(0,o.h)("span",{className:l.Z.mtk3},"  // TODO:"),(0,o.h)("br",null),"}"))},h=(t,e)=>""===t||/[^\w\d\.-]/.test(t)||46===t.charCodeAt(0)||46===t.charCodeAt(t.length-1)||e&&!/[^\.]\.jsw?$/.test(t),p=(t,e)=>e?/\.js$/.test(t)?"aa":/\.jsw$/.test(t)?"ba":"_":"ca",f=({target:t})=>{const e={minWidth:t.offsetWidth},n=(r=t.value,r.replace(/^\//,"").split("/").map(((t,e,n)=>{const o=e===n.length-1;return{path:t,className:(0,c.AK)(["Y",p(t,o),h(t,o)&&"Z"])}}))).reduceRight(((t,e,n)=>(0,o.h)("ul",{className:0===n?"W":"X"},(0,o.h)("li",null,(0,o.h)("div",{className:e.className},e.path),t))),(0,o.h)(o.HY,null));var r;return(0,o.h)("div",{className:"U",style:e},(0,o.h)("div",{className:"V"},"Backend Files"),n)},d=a()({createElement:o.h,Component:o.wA}),m=()=>{const{items:t}=(0,s.bI)("items"),e=(0,r.I4)((t=>{const{name:e}=t.dataset;switch(e){case"functionLocation":return(0,o.h)(f,{target:t});case"functionName":return(0,o.h)(u,{target:t})}return null}),[t]);return(0,o.h)(o.HY,null,(0,o.h)(d,{events:!0,delay:"500"}),(0,o.h)(d,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0},className:"w",onRenderContent:e}))}},632:(t,e)=>{e.Z={mtk1:"p",mtk4:"q",mtk3:"r",mtk5:"s",mtk6:"t",func:"u",err:"v"}},934:(t,e)=>{function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}e.__esModule=!0,e.default=function(t){var e,r,i=t.createElement;return r=e=function(t){function e(){var r,i;n(this,e);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=i=o(this,t.call.apply(t,[this].concat(s))),i.state={target:null},i._containerStyle={position:"relative"},i.toggleEvents=function(t,e){var n=t.events,o=n.click,r=n.focus,a=n.hover,s=e?"addEventListener":"removeEventListener",l=!0===t.events;(o||l)&&document[s]("click",i.toggleHint),(r||l)&&document[s]("focusin",i.toggleHint),(a||l)&&document[s]("mouseover",i.toggleHint),(o||a||l)&&document[s]("touchend",i.toggleHint)},i.toggleHint=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.target,n=void 0===e?null:e;n=i.getHint(n),clearTimeout(i._timeout),i._timeout=setTimeout((function(){return i.setState((function(){return{target:n}}))}),null===n?void 0===i.props.delay.hide?i.props.delay:i.props.delay.hide:void 0===i.props.delay.show?i.props.delay:i.props.delay.show)},i.getHint=function(t){for(var e=i.props,n=e.attribute,o=e.persist,r=i.state.target;t&&t!==document;){if(o&&t===i._hint)return r;if(t.hasAttribute(n))return t;t=t.parentNode}return null},i.shallowEqual=function(t,e){var n=Object.keys(t);return n.length===Object.keys(e).length&&n.reduce((function(n,o){return n&&("function"===typeof t[o]&&"function"===typeof e[o]||t[o]===e[o])}),!0)},i.getHintData=function(t,e){var n=t.target,o=e.attribute,r=e.autoPosition,a=e.position,s=n.getAttribute(o)||"",l=n.getAttribute(o+"-at")||a,c=i._container.getBoundingClientRect(),u=c.top,h=c.left,p=i._hint.getBoundingClientRect(),f=p.width,d=p.height,m=n.getBoundingClientRect(),g=m.top,v=m.left,b=m.width,y=m.height;if(r){var w=["left","right"].includes(l),k=document.documentElement,_={left:(w?v-f:v+(b-f>>1))>0,right:(w?v+b+f:v+(b+f>>1))<k.clientWidth,bottom:(w?g+(y+d>>1):g+y+d)<k.clientHeight,top:(w?g-(d>>1):g-d)>0};switch(l){case"left":_.left||(l="right"),_.top||(l="bottom"),_.bottom||(l="top");break;case"right":_.right||(l="left"),_.top||(l="bottom"),_.bottom||(l="top");break;case"bottom":_.bottom||(l="top"),_.left||(l="right"),_.right||(l="left");break;case"top":default:_.top||(l="bottom"),_.left||(l="right"),_.right||(l="left")}}var N=void 0,C=void 0;switch(l){case"left":N=y-d>>1,C=-f;break;case"right":N=y-d>>1,C=b;break;case"bottom":N=y,C=b-f>>1;break;case"top":default:N=-d,C=b-f>>1}return{content:s,at:l,top:N+g-u|0,left:C+v-h|0}},o(i,r)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.toggleEvents(this.props,!0)},e.prototype.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},e.prototype.shouldComponentUpdate=function(t,e){return!this.shallowEqual(e,this.state)||!this.shallowEqual(t,this.props)},e.prototype.componentDidUpdate=function(){this.state.target&&this.setState(this.getHintData)},e.prototype.render=function(){var t=this,e=this.props,n=e.className,o=e.onRenderContent,r=this.state,a=r.target,s=r.content;return i("div",{ref:function(e){return t._container=e},style:this._containerStyle},a&&i("div",{className:n+" "+n+"--"+r.at,ref:function(e){return t._hint=e},role:"tooltip",style:{top:r.top,left:r.left}},o?o(a,s):i("div",{className:n+"__content"},s)))},e}(t.Component),e.defaultProps={attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"},r},t.exports=e.default}}]);