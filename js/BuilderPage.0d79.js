(window.J=window.J||[]).push([[315],{952:(e,a,t)=>{t.r(a),t.d(a,{BuilderPage:()=>Y});var n=t(396),r=t(971),i="la",l="sa",s="xa wa",o="ya wa",c=t(661),d=t(235),m=t(584);const u=({key:e,target:a})=>{"Enter"!==e&&" "!==e||a.firstChild.click()},h=({name:e,value:a,period:t})=>{const n=a===t;return(0,m.BX)("label",{className:"ua",tabIndex:n?-1:0,onKeyPress:u,children:[(0,m.tZ)("input",{type:"radio",name:e,checked:n,"data-name":"period",value:a,className:"ra"}),(0,m.tZ)("span",{className:"qa",children:a})]})},p=({top:e,children:a})=>(0,m.BX)("label",{className:"ta",children:[(0,m.tZ)("span",{className:"va",children:e}),a]}),Z=({value:e})=>(0,m.tZ)(p,{top:"The time of day the job runs.",children:(0,m.tZ)("input",{type:"time",value:e,"data-name":"time",className:o,required:!0})}),v=({value:e,error:a})=>{const t=(0,n.sO)(null);return(0,n.d4)((()=>{var e;null==(e=t.current)||e.setCustomValidity(a?"error":"")}),[a]),(0,m.tZ)(p,{top:"A valid cron expression",children:(0,m.tZ)("input",{ref:t,type:"text",className:"za ya wa",value:e,"data-name":"cronExpression",spellcheck:!1,required:!0})})};var N=t(337);const b=({value:e,setValidity:a})=>{const[t,r]=(0,N.G)(e);return(0,n.d4)((()=>{a(t)}),[t]),r};var f=t(309);const y=({name:e,time:a,cronExpression:t,period:n})=>{const[r,s]=(0,c.eJ)(!1),o=n===d.aI.CRON,u=o?(0,m.tZ)(v,{value:t,error:r}):(0,m.tZ)(Z,{value:a}),p=o&&(0,m.tZ)("div",{className:(0,f.AK)(["Ca",r&&"Da"]),children:b({value:t,setValidity:s})});return(0,m.tZ)("fieldset",{className:i,children:(0,m.BX)("div",{className:l,children:[(0,m.BX)("div",{children:[u,(0,m.tZ)(h,{name:e,value:d.aI.DAILY,period:n}),(0,m.tZ)(h,{name:e,value:d.aI.WEEKLY,period:n}),(0,m.tZ)(h,{name:e,value:d.aI.MONTHLY,period:n}),(0,m.tZ)(h,{name:e,value:d.aI.CRON,period:n})]}),p]})})},g=t(744).N.map((e=>(0,m.tZ)("option",{value:e,children:e},e))),x=({day:e})=>(0,m.tZ)("fieldset",{className:i,children:(0,m.tZ)("div",{className:l,children:(0,m.tZ)(p,{top:"The day of the week the job runs.",children:(0,m.tZ)("select",{className:o,"data-name":"dayOfWeek",value:e,children:g})})})}),k=({date:e})=>(0,m.tZ)("fieldset",{className:i,children:(0,m.tZ)("div",{className:l,children:(0,m.tZ)(p,{top:"The day of the month the job runs.",children:(0,m.tZ)("input",{type:"number",min:"1",max:"31",step:"1",value:e,"data-name":"dateInMonth",className:o,required:!0})})})}),w=({remove:e,clone:a,isMax:t})=>(0,m.BX)("div",{className:"ma",children:[(0,m.tZ)("button",{type:"button","aria-label":"remove",onClick:e,className:"oa na","data-rh":"Remove","data-rh-at":"top"}),(0,m.tZ)("button",{type:"button","aria-label":"clone",onClick:a,className:"pa na","data-rh":"Clone","data-rh-at":"top",disabled:t})]}),I=({functionLocation:e,functionName:a,description:t})=>(0,m.BX)("fieldset",{className:i,children:[(0,m.BX)("div",{className:l,children:[(0,m.tZ)(p,{top:"Function Location",children:(0,m.tZ)("input",{type:"text","data-name":"functionLocation","data-fl":!0,"data-fl-at":"bottom",className:s,value:e,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",spellcheck:!1,required:!0})}),(0,m.tZ)("span",{className:"Ba",children:"/"}),(0,m.tZ)(p,{top:"Function Name",children:(0,m.tZ)("input",{type:"text","data-name":"functionName","data-fl":!0,"data-fl-at":"bottom",className:s,value:a,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",spellcheck:!1,required:!0})})]}),(0,m.tZ)("div",{className:l,children:(0,m.tZ)(p,{top:"Description",children:(0,m.tZ)("input",{type:"text",value:t,className:"Aa wa","data-name":"description",placeholder:"Description"})})})]}),C=({data:e,remove:a,clone:t,update:n,isMax:r})=>{const{id:i,period:l}=e,s=l===d.aI.WEEKLY&&(0,m.tZ)(x,{day:e.dayOfWeek}),o=l===d.aI.MONTHLY&&(0,m.tZ)(k,{date:String(e.dateInMonth)});return(0,m.tZ)("li",{children:(0,m.BX)("form",{id:i,action:"#",className:"ka",onInput:n,onSubmit:f.PF,children:[(0,m.tZ)(I,{functionLocation:e.functionLocation,functionName:e.functionName,description:e.description}),(0,m.tZ)(y,{name:i,period:l,time:e.time,cronExpression:e.cronExpression}),s,o,(0,m.tZ)(w,{remove:a,clone:t,isMax:r})]})})},B=()=>{const{dispatch:e,items:a,isMax:t}=(0,r.bI)("items","isMax"),i=(0,n.I4)((({target:a})=>{e("items/remove",a.form.id)}),[]),l=(0,n.I4)((({target:a})=>{e("items/clone",a.form.id)}),[]),s=(0,n.I4)((({target:a})=>{e("items/update",{id:a.form.id,name:a.dataset.name,value:a.value})}),[]),o=a.map((e=>(0,m.tZ)(C,{data:e,remove:i,clone:l,update:s,isMax:t},e.id)));return(0,m.tZ)("ul",{className:"ja",children:o})};var M=t(717);const E=()=>(0,m.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,m.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})}),j=()=>{const{dispatch:e,isMax:a}=(0,r.bI)("isMax");return(0,m.tZ)("div",{className:"V",children:(0,m.tZ)("span",{"data-rh":"You can configure up to 20 jobs.",className:"W",children:(0,m.BX)(M.z,{onClick:()=>{e("items/new")},disabled:a,children:[(0,m.tZ)(E,{})," New Job"]})})})},X=()=>(0,m.BX)(m.HY,{children:[(0,m.tZ)(j,{}),(0,m.tZ)(B,{})]}),L=({left:e,right:a})=>(0,m.BX)("div",{className:"M",children:[(0,m.tZ)("div",{className:"O N",children:e}),(0,m.tZ)("div",{className:"P N",children:a})]});var S=t(529);const A=[{regex:/^[\s[\]{}:,]+/},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i,className:S.Z.mtk5},{regex:/^"(?:\\.|[^"\\])*"/,className:S.Z.mtk6}],O=({input:e})=>{const a=[];let t;do{t=!1;for(let n=0;n<A.length;n++){const r=A[n],i=r.regex.exec(e);if(Array.isArray(i)){const[n]=i,l="className"in r?(0,m.tZ)("span",{className:r.className,children:n}):n;a.push(l),e=e.substring(n.length),t=!0;break}}}while(e.length>0&&t);return(0,m.tZ)("code",{children:a})};var R=t(225);const V=()=>{const{items:e}=(0,r.bI)("items"),a=(0,n.sO)(null),t=(0,R._g)(e),i=`data:application/json,${encodeURIComponent(t)}`;return(0,m.BX)("div",{className:"Q",children:[(0,m.tZ)("div",{className:"S",children:(0,m.tZ)(M.z,{onClick:()=>{const e=window.getSelection(),t=document.createRange();(0,f.Re)(a.current)&&(t.selectNodeContents(a.current),e.removeAllRanges(),e.addRange(t),document.execCommand("copy"))},children:"Copy Code"})}),(0,m.tZ)("pre",{ref:a,className:"R",children:(0,m.tZ)(O,{input:t})}),(0,m.tZ)("div",{className:"T",children:(0,m.tZ)("a",{href:i,className:"U",download:"jobs.config",type:"application/json","aria-label":"Download a file","data-rh":"Download a file","data-rh-at":"left"})})]})},Y=()=>(0,m.tZ)(L,{left:(0,m.tZ)(X,{}),right:(0,m.tZ)(V,{})})},717:(e,a,t)=>{t.d(a,{z:()=>r});var n=t(584);const r=({onClick:e,disabled:a,children:t,type:r="button"})=>(0,n.tZ)("button",{type:r,onClick:e,className:"Fa Ea",disabled:a,children:t})},337:(e,a,t)=>{t.d(a,{G:()=>s});var n=t(502),r=t(458);const i=/^every (\d+ )?(second|minute)s?\b/i,l=e=>[!0,e],s=e=>{try{const a=(0,r.toString)(e,{use24HourTimeFormat:!0});return i.test(a)?l(`${a}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?l(`${a}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?l(`${a}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):[!(0,n.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0}),a]}catch(e){return l(String(e))}}},529:(e,a)=>{a.Z={mtk1:"s",mtk4:"t",mtk3:"u",mtk5:"v",mtk6:"w",mtk10:"x",err:"y"}}}]);