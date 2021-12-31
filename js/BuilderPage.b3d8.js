(window.g=window.g||[]).push([[315],{5499:(e,t,a)=>{a.r(t),a.d(t,{BuilderPage:()=>Q});var n=a(2323),r=a(396),l="pa",i="Ba",o="Ha Ga",s="La Ha Ga",c=a(8661),d=a(4664);const h=(0,c.createContext)((0,d.CC)()),u=()=>(0,c.useContext)(h);var m=a(484),p=a(7428),Z=a(6584);const v=e=>{let{key:t,target:a}=e;"Enter"!==t&&" "!==t||a instanceof HTMLElement&&a.firstChild instanceof HTMLElement&&a.firstChild.click()},b=e=>{let{name:t,value:a,period:n}=e;const r=a===n;return(0,Z.BX)("label",{className:"Ea",tabIndex:0,onKeyPress:v,"aria-checked":r,role:"checkbox",children:[(0,Z.tZ)("input",{type:"radio",name:t,checked:r,"data-name":"period",value:a,className:"Aa"}),(0,Z.tZ)("span",{className:"za",children:a})]})},N=()=>{const{id:e,period:t}=u();return(0,Z.tZ)("fieldset",{className:l,children:(0,Z.BX)("div",{className:"Ca",children:[(0,Z.tZ)(b,{name:e,value:p.aI.DAILY,period:t}),(0,Z.tZ)(b,{name:e,value:p.aI.WEEKLY,period:t}),(0,Z.tZ)(b,{name:e,value:p.aI.MONTHLY,period:t}),(0,Z.tZ)(b,{name:e,value:p.aI.CRON,period:t})]})})};var f=a(1330);const g=()=>{const{id:e}=u(),{dispatch:t,isMax:a}=(0,n.bI)("isMax");return(0,Z.BX)("div",{className:"qa",children:[(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"Move up",onClick:()=>{t("items/up",e)},className:"ua ra","data-rh":"Move up","data-rh-at":"top"}),(0,Z.tZ)(f.T,{"aria-label":"Move down",onClick:()=>{t("items/down",e)},className:"va ra wa","data-rh":"Move down","data-rh-at":"top"})]}),(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"remove",onClick:()=>{t("items/remove",e)},className:"sa ra","data-rh":"Remove","data-rh-at":"top"}),(0,Z.tZ)(f.T,{"aria-label":"clone",onClick:()=>{t("items/clone",e)},className:"ta ra","data-rh":"Clone","data-rh-at":"top",disabled:a})]})]})},y=e=>{let{top:t,children:a}=e;return(0,Z.BX)("label",{className:"Da",children:[(0,Z.tZ)("span",{className:"Fa",children:t}),a]})},w=()=>{const{functionLocation:e,functionName:t,description:a}=u();return(0,Z.BX)("fieldset",{className:l,children:[(0,Z.BX)("div",{className:i,children:[(0,Z.tZ)(y,{top:"Function Location",children:(0,Z.tZ)("input",{type:"text","data-name":p.tW.functionLocation,"data-fl":!0,"data-fl-at":"bottom",className:o,value:e,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",spellcheck:!1,required:!0})}),(0,Z.tZ)("span",{className:"Ka",children:"/"}),(0,Z.tZ)(y,{top:"Function Name",children:(0,Z.tZ)("input",{type:"text","data-name":p.tW.functionName,"data-fl":!0,"data-fl-at":"bottom",className:o,value:t,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",spellcheck:!1,required:!0})})]}),(0,Z.tZ)("div",{className:i,children:(0,Z.tZ)(y,{top:"Description",children:(0,Z.tZ)("input",{type:"text",value:a,className:"Ja Ga","data-name":p.tW.description,placeholder:"Description"})})})]})};var k=a(2598);const C=e=>{let{value:t,setValidity:a}=e;const[n,l]=(0,k.G)(t);return(0,r.d4)((()=>{a(n)}),[n]),(0,Z.tZ)(Z.HY,{children:l})},x=e=>{let{value:t,error:a}=e;const n=(0,r.sO)(null);return(0,r.d4)((()=>{var e;null==(e=n.current)||e.setCustomValidity(a?"error":"")}),[a]),(0,Z.tZ)(y,{top:"A valid cron expression",children:(0,Z.tZ)("input",{ref:n,type:"text",className:s,value:t,"data-name":p.tW.cronExpression,spellcheck:!1,required:!0})})},M=()=>{const{time:e}=u();return(0,Z.tZ)(y,{top:"The time of day the job runs",children:(0,Z.tZ)("input",{type:"time",value:e,"data-name":"time",className:s,required:!0})})},B=()=>(0,Z.tZ)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"})}),I=()=>{const{id:e}=u();return(0,Z.tZ)(y,{top:"Cron Examples",children:(0,Z.tZ)(f.T,{className:"bb","aria-haspopup":"true","aria-label":"Show examples","data-fl":!0,"data-fl-at":"right","data-name":p.tW.cronExpression,"data-id":e,children:(0,Z.tZ)(B,{})})})},S=a(6705).N.map((e=>(0,Z.tZ)("option",{value:e,children:e},e))),X=()=>{const{dayOfWeek:e}=u();return(0,Z.tZ)(y,{top:"The day of the week the job runs",children:(0,Z.tZ)("select",{className:"Ia Ha Ga wa","data-name":p.tW.dayOfWeek,value:e,children:S})})},E=()=>{const{dateInMonth:e}=u();return(0,Z.tZ)(y,{top:"The day of the month the job runs",children:(0,Z.tZ)("input",{type:"number",min:"1",max:"31",step:"1",value:String(e),"data-name":p.tW.dateInMonth,className:s,required:!0})})},j=()=>{const[e,t]=(0,r.eJ)(!1),{period:a,cronExpression:n}=u(),o=a===p.aI.CRON,s=o?(0,Z.tZ)(x,{value:n,error:e}):(0,Z.tZ)(M,{}),c=o&&(0,Z.tZ)(I,{}),d=o&&(0,Z.tZ)("div",{className:(0,m.AK)(["Ma",e&&"Na"]),children:(0,Z.tZ)(C,{value:n,setValidity:t})}),h=a===p.aI.WEEKLY&&(0,Z.tZ)(X,{}),v=a===p.aI.MONTHLY&&(0,Z.tZ)(E,{});return(0,Z.BX)("fieldset",{className:l,children:[(0,Z.BX)("div",{className:i,children:[s,(0,Z.tZ)("span",{className:"Ka"}),c,h,v]}),d]})},L=e=>{let{id:t,update:a}=e;return(0,Z.BX)("form",{id:t,action:"#",className:"oa",onInput:a,onSubmit:m.PF,children:[(0,Z.tZ)(w,{}),(0,Z.tZ)(N,{}),(0,Z.tZ)(j,{}),(0,Z.tZ)(g,{})]})},T=()=>{const{dispatch:e,items:t}=(0,n.bI)("items"),a=t.length-1,l=(0,r.I4)((t=>{let{target:a}=t;e("items/update",{id:a.form.id,name:a.dataset.name,value:a.value})}),[]),i=t.map(((e,t)=>{const n=(0,m.AK)([0===t&&"xa",t===a&&"ya"]);return(0,Z.tZ)("li",{className:n,children:(0,Z.tZ)(h.Provider,{value:e,children:(0,Z.tZ)(L,{id:e.id,update:l})})},e.id)}));return(0,Z.tZ)("ul",{className:"na",children:i})},z=e=>{let{children:t}=e;return(0,Z.tZ)("div",{className:"Ra",children:t})},A=e=>{let{children:t,label:a}=e;return(0,Z.tZ)("span",{"data-rh":a,"data-rh-at":"top",className:"Sa",children:t})},H=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})});var O=a(6517);const W=()=>{const{dispatch:e,isMax:t}=(0,n.bI)("isMax");return(0,Z.BX)(z,{children:[(0,Z.tZ)(A,{label:"You can configure up to 20 jobs",children:(0,Z.BX)(f.z,{onClick:()=>{e("items/new")},disabled:t,children:[(0,Z.tZ)(H,{})," New Job"]})}),(0,Z.tZ)(A,{label:"Upload your config",children:(0,Z.tZ)(f.z,{onClick:()=>{e("router/open-modal",!0)},"aria-label":"Upload your config",children:(0,Z.tZ)(O.b,{})})})]})},F=()=>(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(W,{}),(0,Z.tZ)(T,{})]}),P=e=>{let{left:t,right:a}=e;return(0,Z.BX)("div",{className:"N",children:[(0,Z.tZ)("div",{className:"O",children:t}),(0,Z.tZ)("div",{className:"O",children:a})]})};var V=a(8105);const Y=[{regex:/^[\s[\]{}:,]+/},{regex:/^"(?:\\.|[^"\\])*"/,className:V.Z.mtk6},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,className:V.Z.mtk5}],K=e=>{let{input:t}=e;const a=[];for(;t.length>0;)for(let e=0;e<Y.length;e++){const n=Y[e],r=n.regex.exec(t);if(Array.isArray(r)){const[e]=r,l="className"in n?(0,Z.tZ)("span",{className:n.className,children:e}):e;a.push(l),t=t.slice(e.length);break}}return(0,Z.tZ)("code",{children:a})};var q=a(1621);const D="function"===typeof window.showSaveFilePicker,R=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 00-2 0v4a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3v-4a1 1 0 00-2 0zm-7-2.414V3a1 1 0 00-2 0v9.586L7.707 9.293a.999.999 0 10-1.414 1.414l5 5A1.008 1.008 0 0012 16a.997.997 0 00.707-.293l5-5a.999.999 0 10-1.414-1.414z"})}),G=e=>{let{label:t,jsonString:a}=e;return D?(0,Z.tZ)(f.z,{onClick:()=>{(async e=>{const t=await window.showSaveFilePicker({suggestedName:"jobs.config",types:[{description:"Jobs Config",accept:{"application/json":[".config"]}}]});if("granted"===await t.queryPermission()){const a=await t.createWritable();await a.write(e),await a.close()}})(a)},"aria-label":t,children:(0,Z.tZ)(R,{})}):(0,Z.tZ)("a",{href:"data:application/json,"+encodeURIComponent(a),className:q.Z.btn,download:"jobs.config",type:"application/json","aria-label":t,tabIndex:0,children:(0,Z.tZ)(R,{})})},J=()=>{const{items:e}=(0,n.bI)("items"),t=(0,r.sO)(null),a=(0,d._g)(e);return(0,Z.BX)("div",{className:"P",children:[(0,Z.BX)(z,{children:[(0,Z.tZ)(A,{label:"Copy to clipboard",children:(0,Z.tZ)(f.z,{onClick:async()=>{if(await navigator.clipboard.writeText(a),t.current instanceof Node){const e=window.getSelection(),a=document.createRange();a.selectNodeContents(t.current),null==e||e.removeAllRanges(),null==e||e.addRange(a)}},children:"Copy Code"})}),(0,Z.tZ)(A,{label:"Download a file",children:(0,Z.tZ)(G,{label:"Download a file",jsonString:a})})]}),(0,Z.tZ)("pre",{ref:t,className:"Q",children:(0,Z.tZ)(K,{input:a})})]})},U=(0,c.lazy)((()=>Promise.all([a.e(532),a.e(113),a.e(253),a.e(842)]).then(a.bind(a,3763)).then((e=>e.UploadModal)))),$=()=>(0,Z.tZ)(c.Suspense,{fallback:null,children:(0,Z.tZ)(U,{})}),Q=()=>{const{openModal:e}=(0,n.bI)("openModal");return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(P,{left:(0,Z.tZ)(F,{}),right:(0,Z.tZ)(J,{})}),e&&(0,Z.tZ)($,{})]})}},1330:(e,t,a)=>{a.d(t,{T:()=>o,z:()=>i});var n=a(1621),r=a(484),l=a(6584);const i=e=>{let{type:t="button",onClick:a,children:i,className:o,...s}=e;const c=(0,r.AK)([n.Z.btn,o]);return(0,l.tZ)("button",{type:t,onClick:a,className:c,...s,children:i})},o=e=>{let{children:t,className:a,...i}=e;const o=(0,r.AK)([n.Z.blank,a]);return(0,l.tZ)("button",{type:"button",className:o,...i,children:t})}},2598:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7502),r=a(2458);const l=/^every (\d+ )?(second|minute)s?\b/i,i=e=>[!0,e],o=e=>{try{const t=(0,r.toString)(e,{use24HourTimeFormat:!0});return l.test(t)?i(t+"\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored."):e.includes("?")?i(t+".\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol."):e.includes("#")?i(t+".\n\nError: Velo Job Scheduler does not support the hash (#) symbol."):(0,n.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:i(t+".\n\nError: Velo Job Scheduler does not support this syntax.")}catch(e){return i(String(e))}}},6517:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(6584);const r=()=>(0,n.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,n.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},1621:(e,t)=>{t.Z={base:"Oa",btn:"Pa Oa",blank:"Qa Oa"}},8105:(e,t)=>{t.Z={mtk1:"A",mtk4:"B",mtk3:"C",mtk5:"D",mtk6:"E",mtk10:"F",err:"G"}}}]);