(self.g=self.g||[]).push([[764],{20:(t,e,a)=>{a.d(e,{a:()=>l,b:()=>i});var n=a(21),r=a(3),o=a(5);const i=({type:t="button",onClick:e,children:a,className:i,...l})=>{const s=(0,r.a)([n.a.btn,i]);return(0,o.c)("button",{type:t,onClick:e,className:s,...l,children:a})},l=({children:t,className:e,...a})=>{const i=(0,r.a)([n.a.blank,e]);return(0,o.c)("button",{type:"button",className:i,...a,children:t})}},14:(t,e,a)=>{a.r(e),a.d(e,{Tooltips:()=>k});var n=a(2),r=a(1),o=a(27),i=a.n(o),l=a(6),s=a(0),c=a(28),u=a(3),d=a(5);const h=({target:t})=>{const e=(0,u.a)([c.a.mtk4,!t.value&&c.a.err]),a=(0,u.a)([c.a.mtk10,!t.validity.valid&&c.a.err]);return(0,d.c)("div",{className:"B",style:`min-width:${t.offsetWidth}px`,children:(0,d.b)("code",{className:"C",children:[(0,d.c)("span",{className:e,children:"export function "}),(0,d.c)("span",{className:a,children:t.value}),"() {",(0,d.c)("br",{}),(0,d.c)("span",{className:c.a.mtk3,children:"  // TODO:"}),(0,d.c)("br",{}),"}"]})})};var p=a(8);const m=(t,e)=>e?t.endsWith(".js")?"_":t.endsWith(".jsw")?"aa":"Z":"ba",v=({target:t})=>{const e=(a=t.value,a.replace(/^\//,"").split("/").map(((t,e,a)=>{const n=e===a.length-1;return{path:t,className:(0,u.a)(["X",m(t,n),(0,p.a)(t,n)&&"Y"])}}))).reduceRight(((t,e,a)=>(0,d.c)("ul",{className:0===a?"V":"W",children:(0,d.b)("li",{children:[(0,d.c)("div",{className:e.className,children:e.path}),t]})})),null);var a;return(0,d.b)("div",{className:"T",style:`min-width:${t.offsetWidth}px`,children:[(0,d.c)("div",{className:"U",children:"Backend"}),e]})},f=JSON.parse('[{"label":"Every 1 hour","value":"0 * * * *"},{"label":"Every 3 hours","value":"0 */3 * * *"},{"label":"Every Monday","value":"0 0 * * MON"},{"label":"Every Tuesday and Sunday","value":"0 0 * * TUE,SUN"},{"label":"Every Friday at 12:15","value":"15 12 * * FRI"},{"label":"Every month","value":"0 0 1 * *"},{"label":"Every 2 months","value":"0 0 1 */2 *"},{"label":"Every 3 months at 10:30","value":"30 10 1 */3 *"},{"label":"Every year","value":"0 0 1 1 *"},{"label":"Every May and November","value":"0 0 1 MAY,NOV *"},{"label":"Every 4th of July at 18:30","value":"30 18 4 JUL *"}]');var g=a(20);const b=({target:t})=>{const{items:e,dispatch:a}=(0,l.b)("items"),{id:n}=t.dataset,{cronExpression:r}=e.find((t=>t.id===n))||{},o=t=>{a("items/update",{id:n||"",name:s.a.cronExpression,value:t.target.value})},i=f.map((t=>{const e=(0,u.a)(["ea",r===t.value&&"fa"]);return(0,d.c)("li",{className:"da",children:(0,d.c)(g.a,{value:t.value,title:t.value,className:e,onClick:o,children:t.label})},t.value)}));return(0,d.b)("ul",{className:"ca",children:[i,(0,d.c)("li",{className:"da",children:(0,d.c)("a",{href:"https://github.com/shoonia/jobs.config/discussions/15",className:"ga",target:"_blank",rel:"noreferrer",tabIndex:0,children:"You can request an example"})})]})},y=i()({createElement:n.h,Component:n.a,createRef:n.f}),N={show:500,hide:100},k=()=>{const{items:t}=(0,l.b)("items"),e=(0,r.a)((t=>{const{name:e}=t.dataset;switch(e){case s.a.functionLocation:return(0,d.c)(v,{target:t});case s.a.functionName:return(0,d.c)(h,{target:t});case s.a.cronExpression:return(0,d.c)(b,{target:t})}return null}),[t]);return(0,d.b)(d.a,{children:[(0,d.c)(y,{events:!0,delay:N}),(0,d.c)(y,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0,hover:!1},className:"z",onRenderContent:e})]})}},21:(t,e,a)=>{a.d(e,{a:()=>n});const n={base:"ja",btn:"ka ja",blank:"la ja"}},28:(t,e,a)=>{a.d(e,{a:()=>n});const n={mtk1:"r",mtk4:"s",mtk3:"t",mtk5:"u",mtk6:"v",mtk10:"w",err:"x"}},27:(t,e)=>{function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.__esModule=!0,e.default=void 0,e.default=function(t){var e,o,i=t.createElement,l=t.createRef;return o=e=function(t){var e,o;function s(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r(a(e=t.call.apply(t,[this].concat(o))||this),"_hint",l()),r(a(e),"_container",l()),r(a(e),"state",{target:null,hidden:!0}),r(a(e),"target",null),r(a(e),"placement",null),r(a(e),"_containerStyle",{position:"relative"}),r(a(e),"toggleEvents",(function(t,a){var n=t.events,r=n.click,o=n.focus,i=n.hover,l=a?"addEventListener":"removeEventListener",s=!0===t.events;(r||s)&&document[l]("click",e.toggleHint),(o||s)&&document[l]("focusin",e.toggleHint),(i||s)&&document[l]("mouseover",e.toggleHint),(r||i||s)&&document[l]("touchend",e.toggleHint)})),r(a(e),"toggleHint",(function(t){var a=(void 0===t?{}:t).target,n=void 0===a?null:a;n=e.getHint(n),clearTimeout(e._timeout),e._timeout=setTimeout((function(){e.target=n,e.target&&(e.placement=null),e.getHintData()}),null===n?void 0===e.props.delay.hide?e.props.delay:e.props.delay.hide:void 0===e.props.delay.show?e.props.delay:e.props.delay.show)})),r(a(e),"getHint",(function(t){for(var a=e.props,n=a.attribute,r=a.persist,o=e.target;t&&t!==document;){if(r&&t===e._hint.current)return o;if(t.hasAttribute(n))return t;t=t.parentNode}return null})),r(a(e),"shallowEqual",(function(t,e){var a=Object.keys(t);return a.length===Object.keys(e).length&&a.reduce((function(a,n){return a&&("function"===typeof t[n]&&"function"===typeof e[n]||t[n]===e[n])}),!0)})),r(a(e),"getHintData",(function(){if(e.target){var t,a,n=e.props,r=n.attribute,o=n.autoPosition,i=n.position,l=e.target.getAttribute(r)||"",s=e.placement||e.target.getAttribute(r+"-at")||i,c=e._container.current.getBoundingClientRect(),u=c.top,d=c.left,h=e._hint.current.getBoundingClientRect(),p=h.width,m=h.height,v=e.target.getBoundingClientRect(),f=v.top,g=v.left,b=v.width,y=v.height;if(o&&!e.placement){var N=["left","right"].includes(s),k=document.documentElement,E={left:(N?g-p:g+(b-p>>1))>0,right:(N?g+b+p:g+(b+p>>1))<k.clientWidth,bottom:(N?f+(y+m>>1):f+y+m)<k.clientHeight,top:(N?f-(m>>1):f-m)>0};if(!s||!E[s])switch(s){case"left":E.left||(s="right"),E.top||(s="bottom"),E.bottom||(s="top");break;case"right":E.right||(s="left"),E.top||(s="bottom"),E.bottom||(s="top");break;case"bottom":E.bottom||(s="top"),E.left||(s="right"),E.right||(s="left");break;default:E.top||(s="bottom"),E.left||(s="right"),E.right||(s="left")}}switch(s){case"left":t=y-m>>1,a=-p;break;case"right":t=y-m>>1,a=b;break;case"bottom":t=y,a=b-p>>1;break;default:t=-m,a=b-p>>1}(m>0||p>0)&&(e.placement=s),e.setState({content:l,at:s,top:t+f-u|0,left:a+g-d|0,hidden:!1})}else e.setState({hidden:!0})})),e}o=t,(e=s).prototype=Object.create(o.prototype),e.prototype.constructor=e,n(e,o);var c=s.prototype;return c.componentDidMount=function(){this.toggleEvents(this.props,!0)},c.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},c.componentDidUpdate=function(){this.target&&!this.state.hidden&&this.getHintData()},c.shouldComponentUpdate=function(t,e){return!this.shallowEqual(e,this.state)||!this.shallowEqual(t,this.props)},c.render=function(){var t=this.props,e=t.className,a=t.onRenderContent,n=this.state,r=n.content;return i("div",{ref:this._container,style:this._containerStyle},i("div",{className:e+" "+e+"--"+n.at,ref:this._hint,role:"tooltip",style:{top:n.top,left:n.left,display:this.target?void 0:"none"}},this.target&&(a?a(this.target,r):i("div",{className:e+"__content"},r))))},s}(t.Component),r(e,"defaultProps",{attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"}),o},t.exports=e.default}}]);