(window.J=window.J||[]).push([[315],{952:(e,a,t)=>{t.r(a),t.d(a,{BuilderPage:()=>q});var n=t(396),i=t(971),r="ga",s="na",l="sa ra",c="ta ra",d=t(661),o=t(235),m=t(584);const h=({key:e,target:a})=>{"Enter"!==e&&" "!==e||a.firstChild.click()},u=({name:e,value:a,period:t})=>{const n=a===t;return(0,m.BX)("label",{className:"pa",tabIndex:n?-1:0,onKeyPress:h,children:[(0,m.tZ)("input",{type:"radio",name:e,checked:n,"data-name":"period",value:a,className:"ma"}),(0,m.tZ)("span",{className:"la",children:a})]})},p=({top:e,children:a})=>(0,m.BX)("label",{className:"oa",children:[(0,m.tZ)("span",{className:"qa",children:e}),a]}),Z=({value:e})=>(0,m.tZ)(p,{top:"The time of day the job runs.",children:(0,m.tZ)("input",{type:"time",value:e,"data-name":"time",className:c,required:!0})}),v=({value:e,error:a})=>{const t=(0,n.sO)();return(0,n.d4)((()=>{t.current.setCustomValidity(a?"error":"")}),[a]),(0,m.tZ)(p,{top:"A valid cron expression",children:(0,m.tZ)("input",{ref:t,type:"text",className:"ua ta ra",value:e,"data-name":"cronExpression",spellcheck:!1,required:!0})})};var N=t(337);const f=({value:e,setValidity:a})=>{const[t,i]=(0,N.G)(e);return(0,n.d4)((()=>{a(t)}),[t]),i},b=({name:e,time:a,cronExpression:t,period:n})=>{const[i,l]=(0,d.eJ)(!1),c=n===o.aI.CRON,h=c?(0,m.tZ)(v,{value:t,error:i}):(0,m.tZ)(Z,{value:a}),p=c&&(0,m.tZ)("span",{className:i?"xa":void 0,children:f({value:t,setValidity:l})});return(0,m.tZ)("fieldset",{className:r,children:(0,m.BX)("div",{className:s,children:[(0,m.BX)("div",{children:[h,(0,m.tZ)(u,{name:e,value:o.aI.DAILY,period:n}),(0,m.tZ)(u,{name:e,value:o.aI.WEEKLY,period:n}),(0,m.tZ)(u,{name:e,value:o.aI.MONTHLY,period:n}),(0,m.tZ)(u,{name:e,value:o.aI.CRON,period:n})]}),p]})})},y=t(744).N.map((e=>(0,m.tZ)("option",{value:e,children:e},e))),g=({day:e})=>(0,m.tZ)("fieldset",{className:r,children:(0,m.tZ)("div",{className:s,children:(0,m.tZ)(p,{top:"The day of the week the job runs.",children:(0,m.tZ)("select",{className:c,"data-name":"dayOfWeek",value:e,children:y})})})}),x=({date:e})=>(0,m.tZ)("fieldset",{className:r,children:(0,m.tZ)("div",{className:s,children:(0,m.tZ)(p,{top:"The day of the month the job runs.",children:(0,m.tZ)("input",{type:"number",min:"1",max:"31",step:"1",value:e,"data-name":"dateInMonth",className:c,required:!0})})})}),k=({remove:e,clone:a,isMax:t})=>(0,m.BX)("div",{className:"ha",children:[(0,m.tZ)("button",{type:"button","aria-label":"remove",onClick:e,className:"ja ia","data-rh":"Remove","data-rh-at":"top"}),(0,m.tZ)("button",{type:"button","aria-label":"clone",onClick:a,className:"ka ia","data-rh":"Clone","data-rh-at":"top",disabled:t})]}),w=({functionLocation:e,functionName:a,description:t})=>(0,m.BX)("fieldset",{className:r,children:[(0,m.BX)("div",{className:s,children:[(0,m.tZ)(p,{top:"Function Location",children:(0,m.tZ)("input",{type:"text","data-name":"functionLocation","data-fl":!0,"data-fl-at":"bottom",className:l,value:e,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",spellcheck:!1,required:!0})}),(0,m.tZ)("span",{className:"wa",children:"/"}),(0,m.tZ)(p,{top:"Function Name",children:(0,m.tZ)("input",{type:"text","data-name":"functionName","data-fl":!0,"data-fl-at":"bottom",className:l,value:a,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",spellcheck:!1,required:!0})})]}),(0,m.tZ)("div",{className:s,children:(0,m.tZ)(p,{top:"Description",children:(0,m.tZ)("input",{type:"text",value:t,className:"va ra","data-name":"description",placeholder:"Description"})})})]});var C=t(309);const I=({data:e,remove:a,clone:t,update:n,isMax:i})=>{const{id:r,period:s}=e,l=s===o.aI.WEEKLY&&(0,m.tZ)(g,{day:e.dayOfWeek}),c=s===o.aI.MONTHLY&&(0,m.tZ)(x,{date:String(e.dateInMonth)});return(0,m.tZ)("li",{children:(0,m.BX)("form",{id:r,action:"#",className:"fa",onInput:n,onSubmit:C.PF,children:[(0,m.tZ)(w,{functionLocation:e.functionLocation,functionName:e.functionName,description:e.description}),(0,m.tZ)(b,{name:r,period:s,time:e.time,cronExpression:e.cronExpression}),l,c,(0,m.tZ)(k,{remove:a,clone:t,isMax:i})]})})},B=()=>{const{dispatch:e,items:a,isMax:t}=(0,i.bI)("items","isMax"),r=(0,n.I4)((({target:a})=>{e("items/remove",a.form.id)}),[]),s=(0,n.I4)((({target:a})=>{e("items/clone",a.form.id)}),[]),l=(0,n.I4)((({target:a})=>{e("items/update",{id:a.form.id,name:a.dataset.name,value:a.value})}),[]),c=a.map((e=>(0,m.tZ)(I,{data:e,remove:r,clone:s,update:l,isMax:t},e.id)));return(0,m.tZ)("ul",{className:"ea",children:c})};var M=t(717);const L=()=>(0,m.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,m.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})}),X=()=>{const{dispatch:e,isMax:a}=(0,i.bI)("isMax");return(0,m.tZ)("div",{className:"T",children:(0,m.tZ)("span",{"data-rh":"You can configure up to 20 jobs.",className:"U",children:(0,m.BX)(M.z,{onClick:()=>{e("items/new")},disabled:a,children:[(0,m.tZ)(L,{})," New Job"]})})})},E=()=>(0,m.BX)(m.HY,{children:[(0,m.tZ)(X,{}),(0,m.tZ)(B,{})]}),j=({left:e,right:a})=>(0,m.BX)("div",{className:"K",children:[(0,m.tZ)("div",{className:"M L",children:e}),(0,m.tZ)("div",{className:"N L",children:a})]});var O=t(529);const R=[{regex:/^[\s[\]{}:,]+/},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,className:O.Z.mtk5},{regex:/^"(?:\\.|[^"\\])*"/,className:O.Z.mtk6}],z=({input:e})=>{const a=[];let t;do{t=!1;for(let n=0;n<R.length;n++){const i=R[n],r=i.regex.exec(e);if(Array.isArray(r)){const[n]=r,s="className"in i?(0,m.tZ)("span",{className:i.className,children:n}):n;a.push(s),e=e.substring(n.length),t=!0;break}}}while(e.length>0&&t);return(0,m.tZ)("code",{children:a})};var A=t(225);const Y=()=>{const{items:e}=(0,i.bI)("items"),a=(0,n.sO)(),t=(0,A._g)(e),r=`data:application/json,${encodeURIComponent(t)}`;return(0,m.BX)("div",{className:"O",children:[(0,m.tZ)("div",{className:"Q",children:(0,m.tZ)(M.z,{onClick:()=>{const e=window.getSelection(),t=document.createRange();t.selectNodeContents(a.current),e.removeAllRanges(),e.addRange(t),document.execCommand("copy")},children:"Copy Code"})}),(0,m.tZ)("pre",{ref:a,className:"P",children:(0,m.tZ)(z,{input:t})}),(0,m.tZ)("div",{className:"R",children:(0,m.tZ)("a",{href:r,className:"S",download:"jobs.config",type:"application/json","aria-label":"Download a file","data-rh":"Download a file","data-rh-at":"left"})})]})},q=()=>(0,m.tZ)(j,{left:(0,m.tZ)(E,{}),right:(0,m.tZ)(Y,{})})},717:(e,a,t)=>{t.d(a,{z:()=>i});var n=t(584);const i=({onClick:e,disabled:a,children:t,type:i="button"})=>(0,n.tZ)("button",{type:i,onClick:e,className:"za ya",disabled:a,children:t})},337:(e,a,t)=>{t.d(a,{G:()=>s});var n=t(502),i=t(458);const r=/^every (\d+ )?(second|minute)s?\b/i,s=e=>{try{const a=(0,i.toString)(e);return r.test(a)?[!0,a]:[!(0,n.isValidCron)(e,{seconds:!1}),a]}catch(e){return[!0,String(e)]}}},529:(e,a)=>{a.Z={mtk1:"y",mtk4:"z",mtk3:"A",mtk5:"B",mtk6:"C",func:"D",err:"E"}}}]);