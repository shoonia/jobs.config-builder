(window.J=window.J||[]).push([[764],{834:(t,e,n)=>{n.r(e),n.d(e,{Tooltips:()=>y});var a=n(400),r=n(396),o=n(934),i=n.n(o),l=n(971),s=n(235),c=n(529),u=n(309),d=n(584);const h=({target:t})=>{const e=(0,u.AK)([c.Z.mtk4,!t.value&&c.Z.err]),n=(0,u.AK)([c.Z.mtk10,!t.validity.valid&&c.Z.err]);return(0,d.tZ)("div",{className:"q",style:`min-width:${t.offsetWidth}px`,children:(0,d.BX)("code",{className:"r",children:[(0,d.tZ)("span",{className:e,children:"export function "}),(0,d.tZ)("span",{className:n,children:t.value}),"() {",(0,d.tZ)("br",{}),(0,d.tZ)("span",{className:c.Z.mtk3,children:"  // TODO:"}),(0,d.tZ)("br",{}),"}"]})})};var p=n(791);const m=(t,e)=>e?/\.js$/.test(t)?"ga":/\.jsw$/.test(t)?"ha":"fa":"ia",v=({target:t})=>{const e=(n=t.value,n.replace(/^\//,"").split("/").map(((t,e,n)=>{const a=e===n.length-1;return{path:t,className:(0,u.AK)(["da",m(t,a),(0,p.Ox)(t,a)&&"ea"])}}))).reduceRight(((t,e,n)=>(0,d.tZ)("ul",{className:0===n?"ba":"ca",children:(0,d.BX)("li",{children:[(0,d.tZ)("div",{className:e.className,children:e.path}),t]})})),(0,d.tZ)(d.HY,{}));var n;return(0,d.BX)("div",{className:"_",style:`min-width:${t.offsetWidth}px`,children:[(0,d.tZ)("div",{className:"aa",children:"Backend"}),e]})},f=[{label:"Every 1 hour",value:"0 * * * *"},{label:"Every 3 hours",value:"0 */3 * * *"},{label:"Every Monday",value:"0 0 * * MON"},{label:"Every Tuesday and Sunday",value:"0 0 * * TUE,SUN"},{label:"Every Friday at 12:15",value:"15 12 * * FRI"},{label:"Every month",value:"0 0 1 * *"},{label:"Every 2 months",value:"0 0 1 */2 *"},{label:"Every 3 months at 10:30",value:"30 10 1 */3 *"},{label:"Every year",value:"0 0 1 1 *"},{label:"Every May and November",value:"0 0 1 MAY,NOV *"},{label:"Every 4th of July at 18:30",value:"30 18 4 JUL *"}],g=({target:t})=>{const{items:e,dispatch:n}=(0,l.bI)("items"),{id:a}=t.dataset,{cronExpression:r}=e.find((t=>t.id===a))||{},o=f.map((t=>{const e=(0,u.AK)(["la",r===t.value&&"ma"]);return(0,d.tZ)("li",{className:"ka",children:(0,d.tZ)("button",{type:"button",value:t.value,title:t.value,className:e,children:t.label})},t.value)}));return(0,d.tZ)("ul",{className:"ja",onClick:t=>{t.target instanceof HTMLButtonElement&&n("items/update",{id:a||"",name:s.tW.cronExpression,value:t.target.value})},children:o})},b=i()({createElement:a.h,Component:a.wA,createRef:a.Vf}),y=()=>{const{items:t}=(0,l.bI)("items"),e=(0,r.I4)((t=>{const{name:e}=t.dataset;switch(e){case s.tW.functionLocation:return(0,d.tZ)(v,{target:t});case s.tW.functionName:return(0,d.tZ)(h,{target:t});case s.tW.cronExpression:return(0,d.tZ)(g,{target:t})}return null}),[t]);return(0,d.BX)(d.HY,{children:[(0,d.tZ)(b,{events:!0,delay:"500"}),(0,d.tZ)(b,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0},className:"o",onRenderContent:e})]})}},529:(t,e)=>{e.Z={mtk1:"y",mtk4:"z",mtk3:"A",mtk5:"B",mtk6:"C",mtk10:"D",err:"E"}},934:(t,e)=>{function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.__esModule=!0,e.default=void 0,e.default=function(t){var e,o,i=t.createElement,l=t.createRef;return o=e=function(t){var e,o;function s(){for(var e,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return r(n(e=t.call.apply(t,[this].concat(o))||this),"_hint",l()),r(n(e),"_container",l()),r(n(e),"state",{target:null,hidden:!0}),r(n(e),"target",null),r(n(e),"placement",null),r(n(e),"_containerStyle",{position:"relative"}),r(n(e),"toggleEvents",(function(t,n){var a=t.events,r=a.click,o=a.focus,i=a.hover,l=n?"addEventListener":"removeEventListener",s=!0===t.events;(r||s)&&document[l]("click",e.toggleHint),(o||s)&&document[l]("focusin",e.toggleHint),(i||s)&&document[l]("mouseover",e.toggleHint),(r||i||s)&&document[l]("touchend",e.toggleHint)})),r(n(e),"toggleHint",(function(t){var n=(void 0===t?{}:t).target,a=void 0===n?null:n;a=e.getHint(a),clearTimeout(e._timeout),e._timeout=setTimeout((function(){e.target=a,e.target&&(e.placement=null),e.getHintData()}),null===a?void 0===e.props.delay.hide?e.props.delay:e.props.delay.hide:void 0===e.props.delay.show?e.props.delay:e.props.delay.show)})),r(n(e),"getHint",(function(t){for(var n=e.props,a=n.attribute,r=n.persist,o=e.target;t&&t!==document;){if(r&&t===e._hint.current)return o;if(t.hasAttribute(a))return t;t=t.parentNode}return null})),r(n(e),"shallowEqual",(function(t,e){var n=Object.keys(t);return n.length===Object.keys(e).length&&n.reduce((function(n,a){return n&&("function"===typeof t[a]&&"function"===typeof e[a]||t[a]===e[a])}),!0)})),r(n(e),"getHintData",(function(){if(e.target){var t,n,a=e.props,r=a.attribute,o=a.autoPosition,i=a.position,l=e.target.getAttribute(r)||"",s=e.placement||e.target.getAttribute(r+"-at")||i,c=e._container.current.getBoundingClientRect(),u=c.top,d=c.left,h=e._hint.current.getBoundingClientRect(),p=h.width,m=h.height,v=e.target.getBoundingClientRect(),f=v.top,g=v.left,b=v.width,y=v.height;if(o&&!e.placement){var E=["left","right"].includes(s),N=document.documentElement,Z={left:(E?g-p:g+(b-p>>1))>0,right:(E?g+b+p:g+(b+p>>1))<N.clientWidth,bottom:(E?f+(y+m>>1):f+y+m)<N.clientHeight,top:(E?f-(m>>1):f-m)>0};if(!s||!Z[s])switch(s){case"left":Z.left||(s="right"),Z.top||(s="bottom"),Z.bottom||(s="top");break;case"right":Z.right||(s="left"),Z.top||(s="bottom"),Z.bottom||(s="top");break;case"bottom":Z.bottom||(s="top"),Z.left||(s="right"),Z.right||(s="left");break;case"top":default:Z.top||(s="bottom"),Z.left||(s="right"),Z.right||(s="left")}}switch(s){case"left":t=y-m>>1,n=-p;break;case"right":t=y-m>>1,n=b;break;case"bottom":t=y,n=b-p>>1;break;case"top":default:t=-m,n=b-p>>1}(m>0||p>0)&&(e.placement=s),e.setState({content:l,at:s,top:t+f-u|0,left:n+g-d|0,hidden:!1})}else e.setState({hidden:!0})})),e}o=t,(e=s).prototype=Object.create(o.prototype),e.prototype.constructor=e,a(e,o);var c=s.prototype;return c.componentDidMount=function(){this.toggleEvents(this.props,!0)},c.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},c.componentDidUpdate=function(){this.target&&!this.state.hidden&&this.getHintData()},c.shouldComponentUpdate=function(t,e){return!this.shallowEqual(e,this.state)||!this.shallowEqual(t,this.props)},c.render=function(){var t=this.props,e=t.className,n=t.onRenderContent,a=this.state,r=a.content;return i("div",{ref:this._container,style:this._containerStyle},i("div",{className:e+" "+e+"--"+a.at,ref:this._hint,role:"tooltip",style:{top:a.top,left:a.left,display:this.target?void 0:"none"}},this.target&&(n?n(this.target,r):i("div",{className:e+"__content"},r))))},s}(t.Component),r(e,"defaultProps",{attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"}),o},t.exports=e.default}}]);