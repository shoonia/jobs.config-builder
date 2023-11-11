export const id=1;export const ids=[1];export const modules={27:(e,t)=>{function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.__esModule=!0,t.default=void 0,t.default=function(e){var t,r,l=e.createElement,i=e.createRef;return r=t=function(e){var t,r;function o(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return c(a(t=e.call.apply(e,[this].concat(r))||this),"_hint",i()),c(a(t),"_container",i()),c(a(t),"state",{target:null,hidden:!0}),c(a(t),"target",null),c(a(t),"placement",null),c(a(t),"_containerStyle",{position:"relative"}),c(a(t),"toggleEvents",(function(e,a){var n=e.events,c=n.click,r=n.focus,l=n.hover,i=a?"addEventListener":"removeEventListener",o=!0===e.events;(c||o)&&document[i]("click",t.toggleHint),(r||o)&&document[i]("focusin",t.toggleHint),(l||o)&&document[i]("mouseover",t.toggleHint),(c||l||o)&&document[i]("touchend",t.toggleHint)})),c(a(t),"toggleHint",(function(e){var a=(void 0===e?{}:e).target,n=void 0===a?null:a;n=t.getHint(n),clearTimeout(t._timeout),t._timeout=setTimeout((function(){t.target=n,t.target&&(t.placement=null),t.getHintData()}),null===n?void 0===t.props.delay.hide?t.props.delay:t.props.delay.hide:void 0===t.props.delay.show?t.props.delay:t.props.delay.show)})),c(a(t),"getHint",(function(e){for(var a=t.props,n=a.attribute,c=a.persist,r=t.target;e&&e!==document;){if(c&&e===t._hint.current)return r;if(e.hasAttribute(n))return e;e=e.parentNode}return null})),c(a(t),"shallowEqual",(function(e,t){var a=Object.keys(e);return a.length===Object.keys(t).length&&a.reduce((function(a,n){return a&&("function"===typeof e[n]&&"function"===typeof t[n]||e[n]===t[n])}),!0)})),c(a(t),"getHintData",(function(){if(t.target){var e,a,n=t.props,c=n.attribute,r=n.autoPosition,l=n.position,i=t.target.getAttribute(c)||"",o=t.placement||t.target.getAttribute(c+"-at")||l,s=t._container.current.getBoundingClientRect(),d=s.top,h=s.left,u=t._hint.current.getBoundingClientRect(),p=u.width,m=u.height,v=t.target.getBoundingClientRect(),b=v.top,f=v.left,g=v.width,N=v.height;if(r&&!t.placement){var y=["left","right"].includes(o),w=document.documentElement,k={left:(y?f-p:f+(g-p>>1))>0,right:(y?f+g+p:f+(g+p>>1))<w.clientWidth,bottom:(y?b+(N+m>>1):b+N+m)<w.clientHeight,top:(y?b-(m>>1):b-m)>0};if(!o||!k[o])switch(o){case"left":k.left||(o="right"),k.top||(o="bottom"),k.bottom||(o="top");break;case"right":k.right||(o="left"),k.top||(o="bottom"),k.bottom||(o="top");break;case"bottom":k.bottom||(o="top"),k.left||(o="right"),k.right||(o="left");break;default:k.top||(o="bottom"),k.left||(o="right"),k.right||(o="left")}}switch(o){case"left":e=N-m>>1,a=-p;break;case"right":e=N-m>>1,a=g;break;case"bottom":e=N,a=g-p>>1;break;default:e=-m,a=g-p>>1}(m>0||p>0)&&(t.placement=o),t.setState({content:i,at:o,top:e+b-d|0,left:a+f-h|0,hidden:!1})}else t.setState({hidden:!0})})),t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r);var s=o.prototype;return s.componentDidMount=function(){this.toggleEvents(this.props,!0)},s.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},s.componentDidUpdate=function(){this.target&&!this.state.hidden&&this.getHintData()},s.shouldComponentUpdate=function(e,t){return!this.shallowEqual(t,this.state)||!this.shallowEqual(e,this.props)},s.render=function(){var e=this.props,t=e.className,a=e.onRenderContent,n=this.state,c=n.content;return l("div",{ref:this._container,style:this._containerStyle},l("div",{className:t+" "+t+"--"+n.at,ref:this._hint,role:"tooltip",style:{top:n.top,left:n.left,display:this.target?void 0:"none"}},this.target&&(a?a(this.target,c):l("div",{className:t+"__content"},c))))},o}(e.Component),c(t,"defaultProps",{attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"}),r},e.exports=t.default},17:(e,t,a)=>{a.r(t),a.d(t,{BuilderPage:()=>ie});var n=a(6),c=a(0);const r="Ea",l="Ia",i="Oa Na",o="Sa Oa Na";var s=a(4),d=a(7);const h=(0,s.createContext)((0,d.c)()),u=(0,s.memo)(h.Provider,((e,t)=>e.value===t.value)),p=()=>(0,s.useContext)(h);var m=a(1),v=a(5);const b=e=>{if("Enter"===e.key||" "===e.key){const t=e.target;t.firstChild instanceof HTMLElement&&t.firstChild.click()}},f=({name:e,value:t,period:a})=>(0,v.b)("label",{className:"La",tabIndex:0,onKeyDown:b,children:[(0,v.c)("input",{type:"radio",name:e,checked:t===a,"data-name":"period",value:t,className:"Ha"}),(0,v.c)("span",{className:"Ga",children:t})]}),g=()=>{const{id:e,period:t}=p();return(0,v.c)("fieldset",{className:r,children:(0,v.b)("div",{className:"Ja",children:[(0,v.c)(f,{name:e,value:c.d.DAILY,period:t}),(0,v.c)(f,{name:e,value:c.d.WEEKLY,period:t}),(0,v.c)(f,{name:e,value:c.d.MONTHLY,period:t}),(0,v.c)(f,{name:e,value:c.d.CRON,period:t})]})})},N="Wa";var y=a(23);const w=()=>(0,v.c)("svg",{width:"24",height:"24",fill:"#8e21b1",children:(0,v.c)("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z"})}),k=()=>(0,v.c)("svg",{width:"24",height:"24",fill:"#116dff",children:(0,v.c)("path",{d:"M6 8V6a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm10 1H4v2h12V9zm0 10v-7H4v7h12zM7 8h9a1 1 0 011 1v7h2V6H7v2z"})}),E=({up:e})=>(0,v.c)("svg",{width:"24",height:"24",fill:"#116dff",children:(0,v.c)("path",{d:e?"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z":"M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z"})}),x=()=>{const{id:e}=p(),{dispatch:t,items:a}=(0,n.b)("items"),r=a.length,l=a.findIndex((t=>t.id===e));return(0,v.b)("div",{className:"Va",children:[(0,v.b)("div",{children:[(0,v.c)(y.a,{"aria-label":"Move up",onClick:()=>t("items/up",e),className:N,"data-rh":"Move up","data-rh-at":"top",disabled:l<1,children:(0,v.c)(E,{up:!1})}),(0,v.c)(y.a,{"aria-label":"Move down",onClick:()=>t("items/down",e),className:N,"data-rh":"Move down","data-rh-at":"top",disabled:l>=r-1,children:(0,v.c)(E,{up:!0})})]}),(0,v.b)("div",{children:[(0,v.c)(y.a,{"aria-label":"remove",onClick:()=>t("items/remove",e),className:N,"data-rh":"Remove","data-rh-at":"top",children:(0,v.c)(w,{})}),(0,v.c)(y.a,{"aria-label":"clone",onClick:()=>t("items/clone",e),className:N,"data-rh":"Clone","data-rh-at":"top",disabled:r>=c.c,children:(0,v.c)(k,{})})]})]})},C=({top:e,children:t})=>(0,v.b)("label",{className:"Ka",children:[(0,v.c)("span",{className:"Ma",children:e}),t]});var H=a(8);const V=e=>t=>{const a=t.target,n=a.value.trim();a.value!==n&&(a.value=n),a.setCustomValidity(e(n)?"":"error")},M=V(H.d),L=V(H.c),O=()=>{const{functionLocation:e,functionName:t,description:a}=p();return(0,v.b)("fieldset",{className:r,children:[(0,v.b)("div",{className:l,children:[(0,v.c)(C,{top:"Function Location",children:(0,v.c)("input",{type:"text","data-name":c.a.functionLocation,"data-fl":!0,"data-fl-at":"bottom",className:i,value:e,placeholder:"Function Location",onInput:L,spellcheck:!1,required:!0})}),(0,v.c)("span",{className:"Ra",children:"/"}),(0,v.c)(C,{top:"Function Name",children:(0,v.c)("input",{type:"text","data-name":c.a.functionName,"data-fl":!0,"data-fl-at":"bottom",className:i,value:t,placeholder:"Function Name",onInput:M,spellcheck:!1,required:!0})})]}),(0,v.c)("div",{className:l,children:(0,v.c)(C,{top:"Description",children:(0,v.c)("input",{type:"text",value:a,className:"Qa Na","data-name":c.a.description,placeholder:"Description"})})})]})};var S=a(28);const _=({value:e,setValidity:t})=>{const[a,n]=(0,S.a)(e);return(0,m.d)((()=>{t(a)}),[a]),(0,v.c)(v.a,{children:n})},R=({value:e,error:t})=>{const a=(0,m.k)(null);return(0,m.d)((()=>{a.current?.setCustomValidity(t?"error":"")}),[t]),(0,v.c)(C,{top:"A valid cron expression",children:(0,v.c)("input",{ref:a,type:"text",className:o,value:e,"data-name":c.a.cronExpression,spellcheck:!1,list:"cron-examples",required:!0})})},T=()=>{const{time:e}=p();return(0,v.c)(C,{top:"The time of day the job runs",children:(0,v.c)("input",{type:"time",value:e,"data-name":"time",className:o,required:!0})})},j=()=>(0,v.c)("svg",{width:"18",height:"18",fill:"currentcolor",viewBox:"0 0 24 24",children:(0,v.c)("path",{d:"M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"})}),z=()=>{const{id:e}=p();return(0,v.c)(C,{top:"Cron Examples",children:(0,v.c)(y.a,{className:"Xa","aria-haspopup":"true","aria-label":"Show examples","data-fl":!0,"data-fl-at":"right","data-name":c.a.cronExpression,"data-id":e,children:(0,v.c)(j,{})})})},D=a(12).a.map((e=>(0,v.c)("option",{value:e,children:e},e))),A=()=>{const{dayOfWeek:e}=p();return(0,v.c)(C,{top:"The day of the week the job runs",children:(0,v.c)("select",{className:"Pa Oa Na","data-name":c.a.dayOfWeek,value:e,children:D})})},I=()=>{const{dateInMonth:e}=p();return(0,v.c)(C,{top:"The day of the month the job runs",children:(0,v.c)("input",{type:"number",min:1,max:31,step:1,value:String(e),"data-name":c.a.dateInMonth,className:o,required:!0})})};var U=a(3);const P=()=>{const[e,t]=(0,m.l)(!1),{period:a,cronExpression:n}=p(),i=a===c.d.CRON,o=i?(0,v.c)(R,{value:n,error:e}):(0,v.c)(T,{}),s=i&&(0,v.c)(z,{}),d=i&&(0,v.c)("div",{className:(0,U.a)(["Ta",e&&"Ua"]),children:(0,v.c)(_,{value:n,setValidity:t})}),h=a===c.d.WEEKLY&&(0,v.c)(A,{}),u=a===c.d.MONTHLY&&(0,v.c)(I,{});return(0,v.b)("fieldset",{className:r,children:[(0,v.b)("div",{className:l,children:[o,(0,v.c)("span",{className:"Ra"}),s,h,u]}),d]})},W=({id:e,isNew:t})=>{const a=(0,n.c)();return(0,m.d)((()=>{if(t){const t=setTimeout((()=>{a.dispatch("items/update",{id:e,name:"isNew",value:void 0})}),500);return()=>clearTimeout(t)}}),[]),(0,v.b)("form",{action:"#",className:(0,U.a)(["Da",t&&"Fa"]),onInput:t=>{const n=t.target;a.dispatch("items/update",{id:e,name:n.dataset.name,value:n.value})},onSubmit:U.c,children:[(0,v.c)(O,{}),(0,v.c)(g,{}),(0,v.c)(P,{}),(0,v.c)(x,{})]})},q=()=>{const{items:e}=(0,n.b)("items"),t=e.map((e=>(0,v.c)("li",{children:(0,v.c)(u,{value:e,children:(0,v.c)(W,{id:e.id,isNew:e.isNew})})},e.id)));return(0,v.c)("ul",{className:"Ca",children:t})},F=({children:e})=>(0,v.c)("div",{className:"Aa",children:e}),Y=({children:e,label:t})=>(0,v.c)("span",{"data-rh":t,"data-rh-at":"top",className:"Ba",children:e}),B=()=>(0,v.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,v.c)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})});var J=a(30);const Z=()=>{const{dispatch:e,items:t}=(0,n.b)("items");return(0,v.b)(F,{children:[(0,v.c)(Y,{label:"You can configure up to 20 jobs",children:(0,v.b)(y.b,{onClick:()=>{e("items/new")},disabled:t.length>=c.c,children:[(0,v.c)(B,{})," New Job"]})}),(0,v.c)(Y,{label:"Upload your config",children:(0,v.c)(y.b,{onClick:()=>{location.hash=c.e.UPLOAD},"aria-label":"Upload your config",children:(0,v.c)(J.a,{})})})]})},$=()=>(0,v.b)("div",{children:[(0,v.c)(Z,{}),(0,v.c)(q,{})]});var K=a(36);const G=[{regex:/^[\s[\]{}:,]+/},{regex:/^"(?:\\.|[^"\\])*"/,className:K.a.mtk6},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,className:K.a.mtk5}],Q=({input:e})=>{const t=[];for(;e;)for(const a of G){const n=a.regex.exec(e);if(Array.isArray(n)){const[c]=n,r=a.className?(0,v.c)("span",{className:a.className,children:c}):c;t.push(r),e=e.slice(c.length);break}}return(0,v.c)("code",{children:t})};var X=a(24);const ee="function"===typeof window.showSaveFilePicker,te=()=>(0,v.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,v.c)("path",{d:"M5 13v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h1v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4h1Zm6 .293V5h1v8.293l2.146-2.147a.5.5 0 0 1 .708.708L11.5 15.207l-3.354-3.353a.5.5 0 0 1 .708-.708L11 13.293Z"})}),ae=({label:e,data:t})=>ee?(0,v.c)(y.b,{onClick:()=>(async e=>{const t=await window.showSaveFilePicker({suggestedName:"jobs.config"}),a=await t.createWritable();await a.write(e),await a.close()})(t),"aria-label":e,children:(0,v.c)(te,{})}):(0,v.c)("a",{href:`data:application/json,${encodeURIComponent(t)}`,className:X.a.btn,download:"jobs.config",type:"application/json","aria-label":e,tabIndex:0,children:(0,v.c)(te,{})}),ne=()=>(0,v.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,v.c)("path",{d:"M19 5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V6a1 1 0 0 1 1-1h10ZM8 9H6v10h10v-2H9a1 1 0 0 1-1-1V9Zm11-3H9v10h10V6Z"})}),ce=()=>{const{items:e}=(0,n.b)("items"),t=(0,m.k)(null),a=(0,d.a)(e),c=(e=>`// Jobs Config Generator\n// https://wix.to/NDAQn6c\n\n${e}`)(a);return(0,v.b)("div",{className:"W",children:[(0,v.b)(F,{children:[(0,v.c)(Y,{label:"Copy to clipboard",children:(0,v.b)(y.b,{onClick:async()=>{if(await navigator.clipboard.writeText(c),t.current){const e=window.getSelection(),a=document.createRange();a.selectNodeContents(t.current),e?.removeAllRanges(),e?.addRange(a)}},children:[(0,v.c)(ne,{}),"Copy Code"]})}),(0,v.c)(Y,{label:"Download a file",children:(0,v.c)(ae,{label:"Download a file",data:c})})]}),(0,v.c)("pre",{ref:t,className:"X",children:(0,v.c)(Q,{input:a})})]})},re=(0,s.lazy)((()=>Promise.all([a.e(0,"high"),a.e(5,"high"),a.e(2,"high")]).then(a.bind(a,44)).then((e=>e.UploadModal)))),le=()=>(0,v.c)(s.Suspense,{fallback:null,children:(0,v.c)(re,{})}),ie=()=>{const{path:e}=(0,n.b)("path"),t=e===c.e.UPLOAD&&(0,v.c)(le,{});return(0,v.b)("div",{className:"R",children:[(0,v.c)($,{}),(0,v.c)(ce,{}),t]})}},23:(e,t,a)=>{a.d(t,{a:()=>i,b:()=>l});var n=a(24),c=a(3),r=a(5);const l=({type:e="button",onClick:t,children:a,className:l,...i})=>{const o=(0,c.a)([n.a.btn,l]);return(0,r.c)("button",{type:e,onClick:t,className:o,...i,children:a})},i=({children:e,className:t,...a})=>{const l=(0,c.a)([n.a.blank,t]);return(0,r.c)("button",{type:"button",className:l,...a,children:e})}},28:(e,t,a)=>{a.d(t,{a:()=>i});var n=a(37),c=a(29);const r=/^every (\d+ )?(second|minute)s?\b/i,l=e=>[!0,e],i=e=>{try{const t=(0,c.toString)(e,{use24HourTimeFormat:!0});return r.test(t)?l(`${t}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?l(`${t}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?l(`${t}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,n.a)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:l(`${t}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return l(String(e))}}},30:(e,t,a)=>{a.d(t,{a:()=>c});var n=a(5);const c=()=>(0,n.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,n.c)("path",{d:"M5 13v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h1v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4h1Zm6-6.293L8.854 8.854a.5.5 0 1 1-.708-.708L11.5 4.793l3.354 3.353a.5.5 0 0 1-.708.708L12 6.707V16h-1V6.707Z"})})},16:(e,t,a)=>{a.r(t),a.d(t,{Tooltips:()=>k});var n=a(2),c=a(1),r=a(27),l=a.n(r),i=a(6),o=a(0),s=a(36),d=a(3),h=a(5);const u=({target:e})=>{const t=(0,d.a)([s.a.mtk4,!e.value&&s.a.err]),a=(0,d.a)([s.a.mtk10,!e.validity.valid&&s.a.err]);return(0,h.c)("div",{className:"B",style:`min-width:${e.offsetWidth}px`,children:(0,h.b)("code",{className:"C",children:[(0,h.c)("span",{className:t,children:"export function "}),(0,h.c)("span",{className:a,children:e.value}),"() {",(0,h.c)("br",{}),(0,h.c)("span",{className:s.a.mtk3,children:"  // TODO:"}),(0,h.c)("br",{}),"}"]})})};var p=a(8);const m=(e,t)=>t?e.endsWith(".js")?"ta":e.endsWith(".jsw")?"ua":"sa":"va",v=({target:e})=>{const t=(e=>e.replace(/^\//,"").split("/").map(((e,t,a)=>{const n=t===a.length-1;return{path:e,className:(0,d.a)(["qa",m(e,n),(0,p.a)(e,n)&&"ra"])}})))(e.value).reduceRight(((e,t,a)=>(0,h.c)("ul",{className:a<1?"oa":"pa",children:(0,h.b)("li",{children:[(0,h.c)("div",{className:t.className,children:t.path}),e]})})),null);return(0,h.b)("div",{className:"ma",style:`min-width:${e.offsetWidth}px`,children:[(0,h.c)("div",{className:"na",children:"Backend"}),t]})},b=JSON.parse('[{"label":"Every 1 hour","value":"0 * * * *"},{"label":"Every 3 hours","value":"0 */3 * * *"},{"label":"Every Monday","value":"0 0 * * MON"},{"label":"Every Tuesday and Sunday","value":"0 0 * * TUE,SUN"},{"label":"Every Friday at 12:15","value":"15 12 * * FRI"},{"label":"Every month","value":"0 0 1 * *"},{"label":"Every 2 months","value":"0 0 1 */2 *"},{"label":"Every 3 months at 10:30","value":"30 10 1 */3 *"},{"label":"Every year","value":"0 0 1 1 *"},{"label":"Every May and November","value":"0 0 1 MAY,NOV *"},{"label":"Every 4th of July at 18:30","value":"30 18 4 JUL *"}]');var f=a(23);const g=({target:e})=>{const{items:t,dispatch:a}=(0,i.b)("items"),{id:n}=e.dataset,{cronExpression:c}=t.find((e=>e.id===n))||{},r=e=>{a("items/update",{id:n||"",name:o.a.cronExpression,value:e.target.value})},l=b.map((e=>{const t=(0,d.a)(["_",c===e.value&&"aa"]);return(0,h.c)("li",{className:"Z",children:(0,h.c)(f.a,{value:e.value,title:e.value,className:t,onClick:r,children:e.label})},e.value)}));return(0,h.b)("ul",{className:"Y",children:[l,(0,h.c)("li",{className:"Z",children:(0,h.c)("a",{href:"https://github.com/shoonia/jobs.config/discussions/15",className:"ba",target:"_blank",rel:"noreferrer",tabIndex:0,children:"You can request an example"})})]})},N=l()({createElement:n.h,Component:n.a,createRef:n.f}),y={show:500,hide:100},w=b.map((e=>(0,h.c)("option",{value:e.value,children:e.label},e.value))),k=()=>{const{items:e}=(0,i.b)("items"),t=(0,c.a)((e=>{const{name:t}=e.dataset;switch(t){case o.a.functionLocation:return(0,h.c)(v,{target:e});case o.a.functionName:return(0,h.c)(u,{target:e});case o.a.cronExpression:return(0,h.c)(g,{target:e})}return null}),[e]);return(0,h.b)(h.a,{children:[(0,h.c)(N,{events:!0,delay:y}),(0,h.c)(N,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0,hover:!1},className:"z",onRenderContent:t}),(0,h.c)("datalist",{id:"cron-examples",children:w})]})}},24:(e,t,a)=>{a.d(t,{a:()=>n});const n={base:"T",btn:"U T",blank:"V T"}},36:(e,t,a)=>{a.d(t,{a:()=>n});const n={mtk1:"a",mtk4:"b",mtk3:"c",mtk5:"d",mtk6:"e",mtk10:"f",err:"g"}}};