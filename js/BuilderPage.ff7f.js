(window.g=window.g||[]).push([[315],{7785:(e,a,t)=>{t.r(a),t.d(a,{BuilderPage:()=>ee});var n=t(2323),r=t(7428),l=t(396),i="xa",o="Ga",s="Ma La",c="Qa Ma La",d=t(8661),h=t(4664);const u=(0,d.createContext)((0,h.CC)()),m=()=>(0,d.useContext)(u);var p=t(484),Z=t(6584);const v=e=>{let{key:a,target:t}=e;"Enter"!==a&&" "!==a||t instanceof HTMLElement&&t.firstChild instanceof HTMLElement&&t.firstChild.click()},b=e=>{let{name:a,value:t,period:n}=e;const r=t===n;return(0,Z.BX)("label",{className:"Ja",tabIndex:0,onKeyPress:v,"aria-checked":r,role:"checkbox",children:[(0,Z.tZ)("input",{type:"radio",name:a,checked:r,"data-name":"period",value:t,className:"Fa"}),(0,Z.tZ)("span",{className:"Ea",children:t})]})},N=()=>{const{id:e,period:a}=m();return(0,Z.tZ)("fieldset",{className:i,children:(0,Z.BX)("div",{className:"Ha",children:[(0,Z.tZ)(b,{name:e,value:r.aI.DAILY,period:a}),(0,Z.tZ)(b,{name:e,value:r.aI.WEEKLY,period:a}),(0,Z.tZ)(b,{name:e,value:r.aI.MONTHLY,period:a}),(0,Z.tZ)(b,{name:e,value:r.aI.CRON,period:a})]})})};var f=t(1330);const g=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z"})}),w=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M6 8V6a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm10 1H4v2h12V9zm0 10v-7H4v7h12zM7 8h9a1 1 0 011 1v7h2V6H7v2z"})}),y=e=>{let{up:a}=e;return(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,Z.tZ)("path",{d:a?"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z":"M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z"})})},k=()=>{const{id:e}=m(),{dispatch:a,isMax:t}=(0,n.bI)("isMax");return(0,Z.BX)("div",{className:"ya",children:[(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"Move up",onClick:()=>{a("items/up",e)},className:"Aa za","data-rh":"Move up","data-rh-at":"top",children:(0,Z.tZ)(y,{up:!1})}),(0,Z.tZ)(f.T,{"aria-label":"Move down",onClick:()=>{a("items/down",e)},className:"Ba za","data-rh":"Move down","data-rh-at":"top",children:(0,Z.tZ)(y,{up:!0})})]}),(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"remove",onClick:()=>{a("items/remove",e)},className:"za","data-rh":"Remove","data-rh-at":"top",children:(0,Z.tZ)(g,{})}),(0,Z.tZ)(f.T,{"aria-label":"clone",onClick:()=>{a("items/clone",e)},className:"za","data-rh":"Clone","data-rh-at":"top",disabled:t,children:(0,Z.tZ)(w,{})})]})]})},C=e=>{let{top:a,children:t}=e;return(0,Z.BX)("label",{className:"Ia",children:[(0,Z.tZ)("span",{className:"Ka",children:a}),t]})},x=()=>{const{functionLocation:e,functionName:a,description:t}=m();return(0,Z.BX)("fieldset",{className:i,children:[(0,Z.BX)("div",{className:o,children:[(0,Z.tZ)(C,{top:"Function Location",children:(0,Z.tZ)("input",{type:"text","data-name":r.tW.functionLocation,"data-fl":!0,"data-fl-at":"bottom",className:s,value:e,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",spellcheck:!1,required:!0})}),(0,Z.tZ)("span",{className:"Pa",children:"/"}),(0,Z.tZ)(C,{top:"Function Name",children:(0,Z.tZ)("input",{type:"text","data-name":r.tW.functionName,"data-fl":!0,"data-fl-at":"bottom",className:s,value:a,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",spellcheck:!1,required:!0})})]}),(0,Z.tZ)("div",{className:o,children:(0,Z.tZ)(C,{top:"Description",children:(0,Z.tZ)("input",{type:"text",value:t,className:"Oa La","data-name":r.tW.description,placeholder:"Description"})})})]})};var M=t(2598);const z=e=>{let{value:a,setValidity:t}=e;const[n,r]=(0,M.G)(a);return(0,l.d4)((()=>{t(n)}),[n]),(0,Z.tZ)(Z.HY,{children:r})},L=e=>{let{value:a,error:t}=e;const n=(0,l.sO)(null);return(0,l.d4)((()=>{var e;null==(e=n.current)||e.setCustomValidity(t?"error":"")}),[t]),(0,Z.tZ)(C,{top:"A valid cron expression",children:(0,Z.tZ)("input",{ref:n,type:"text",className:c,value:a,"data-name":r.tW.cronExpression,spellcheck:!1,required:!0})})},B=()=>{const{time:e}=m();return(0,Z.tZ)(C,{top:"The time of day the job runs",children:(0,Z.tZ)("input",{type:"time",value:e,"data-name":"time",className:c,required:!0})})},I=()=>(0,Z.tZ)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"})}),V=()=>{const{id:e}=m();return(0,Z.tZ)(C,{top:"Cron Examples",children:(0,Z.tZ)(f.T,{className:"Za","aria-haspopup":"true","aria-label":"Show examples","data-fl":!0,"data-fl-at":"right","data-name":r.tW.cronExpression,"data-id":e,children:(0,Z.tZ)(I,{})})})},j=t(6705).N.map((e=>(0,Z.tZ)("option",{value:e,children:e},e))),H=()=>{const{dayOfWeek:e}=m();return(0,Z.tZ)(C,{top:"The day of the week the job runs",children:(0,Z.tZ)("select",{className:"Na Ma La","data-name":r.tW.dayOfWeek,value:e,children:j})})},S=()=>{const{dateInMonth:e}=m();return(0,Z.tZ)(C,{top:"The day of the month the job runs",children:(0,Z.tZ)("input",{type:"number",min:"1",max:"31",step:"1",value:String(e),"data-name":r.tW.dateInMonth,className:c,required:!0})})},E=()=>{const[e,a]=(0,l.eJ)(!1),{period:t,cronExpression:n}=m(),s=t===r.aI.CRON,c=s?(0,Z.tZ)(L,{value:n,error:e}):(0,Z.tZ)(B,{}),d=s&&(0,Z.tZ)(V,{}),h=s&&(0,Z.tZ)("div",{className:(0,p.AK)(["Ra",e&&"Sa"]),children:(0,Z.tZ)(z,{value:n,setValidity:a})}),u=t===r.aI.WEEKLY&&(0,Z.tZ)(H,{}),v=t===r.aI.MONTHLY&&(0,Z.tZ)(S,{});return(0,Z.BX)("fieldset",{className:i,children:[(0,Z.BX)("div",{className:o,children:[c,(0,Z.tZ)("span",{className:"Pa"}),d,u,v]}),h]})},X=e=>{let{id:a,update:t}=e;return(0,Z.BX)("form",{id:a,action:"#",className:"wa",onInput:t,onSubmit:p.PF,children:[(0,Z.tZ)(x,{}),(0,Z.tZ)(N,{}),(0,Z.tZ)(E,{}),(0,Z.tZ)(k,{})]})},A=()=>{const{dispatch:e,items:a}=(0,n.bI)("items"),t=a.length-1,r=(0,l.I4)((a=>{let{target:t}=a;e("items/update",{id:t.form.id,name:t.dataset.name,value:t.value})}),[]),i=a.map(((e,a)=>{const n=(0,p.AK)([0===a&&"Ca",a===t&&"Da"]);return(0,Z.tZ)("li",{className:n,children:(0,Z.tZ)(u.Provider,{value:e,children:(0,Z.tZ)(X,{id:e.id,update:r})})},e.id)}));return(0,Z.tZ)("ul",{className:"va",children:i})},T=e=>{let{children:a}=e;return(0,Z.tZ)("div",{className:"Ta",children:a})},W=e=>{let{children:a,label:t}=e;return(0,Z.tZ)("span",{"data-rh":t,"data-rh-at":"top",className:"Ua",children:a})},P=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})});var O=t(6517);const Y=()=>{const{dispatch:e,isMax:a}=(0,n.bI)("isMax");return(0,Z.BX)(T,{children:[(0,Z.tZ)(W,{label:"You can configure up to 20 jobs",children:(0,Z.BX)(f.z,{onClick:()=>{e("items/new")},disabled:a,children:[(0,Z.tZ)(P,{})," New Job"]})}),(0,Z.tZ)(W,{label:"Upload your config",children:(0,Z.tZ)(f.z,{onClick:()=>{location.hash=r.Yj.UPLOAD},"aria-label":"Upload your config",children:(0,Z.tZ)(O.b,{})})})]})},D=()=>(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(Y,{}),(0,Z.tZ)(A,{})]});var F=t(8105);const K=[{regex:/^[\s[\]{}:,]+/},{regex:/^"(?:\\.|[^"\\])*"/,className:F.Z.mtk6},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,className:F.Z.mtk5}],R=e=>{let{input:a}=e;const t=[];for(;a.length>0;)for(let e=0;e<K.length;e++){const n=K[e],r=n.regex.exec(a);if(Array.isArray(r)){const[e]=r,l="className"in n?(0,Z.tZ)("span",{className:n.className,children:e}):e;t.push(l),a=a.slice(e.length);break}}return(0,Z.tZ)("code",{children:t})};var q=t(1621);const J="function"===typeof window.showSaveFilePicker,U=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 00-2 0v4a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3v-4a1 1 0 00-2 0zm-7-2.414V3a1 1 0 00-2 0v9.586L7.707 9.293a.999.999 0 10-1.414 1.414l5 5A1.008 1.008 0 0012 16a.997.997 0 00.707-.293l5-5a.999.999 0 10-1.414-1.414z"})}),G=e=>{let{label:a,jsonString:t}=e;return J?(0,Z.tZ)(f.z,{onClick:()=>{(async e=>{const a=await window.showSaveFilePicker({suggestedName:"jobs.config",types:[{description:"Jobs Config",accept:{"application/json":[".config"]}}]});if("granted"===await a.queryPermission()){const t=await a.createWritable();await t.write(e),await t.close()}})(t)},"aria-label":a,children:(0,Z.tZ)(U,{})}):(0,Z.tZ)("a",{href:"data:application/json,"+encodeURIComponent(t),className:q.Z.btn,download:"jobs.config",type:"application/json","aria-label":a,tabIndex:0,children:(0,Z.tZ)(U,{})})},$=()=>{const{items:e}=(0,n.bI)("items"),a=(0,l.sO)(null),t=(0,h._g)(e);return(0,Z.BX)("div",{className:"ga",children:[(0,Z.BX)(T,{children:[(0,Z.tZ)(W,{label:"Copy to clipboard",children:(0,Z.tZ)(f.z,{onClick:async()=>{if(await navigator.clipboard.writeText(t),a.current instanceof Node){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(a.current),null==e||e.removeAllRanges(),null==e||e.addRange(t)}},children:"Copy Code"})}),(0,Z.tZ)(W,{label:"Download a file",children:(0,Z.tZ)(G,{label:"Download a file",jsonString:t})})]}),(0,Z.tZ)("pre",{ref:a,className:"ha",children:(0,Z.tZ)(R,{input:t})})]})},_=(0,d.lazy)((()=>Promise.all([t.e(532),t.e(113),t.e(253),t.e(842)]).then(t.bind(t,3763)).then((e=>e.UploadModal)))),Q=()=>(0,Z.tZ)(d.Suspense,{fallback:null,children:(0,Z.tZ)(_,{})}),ee=()=>{const{path:e}=(0,n.bI)("path"),a=e===r.Yj.UPLOAD&&(0,Z.tZ)(Q,{});return(0,Z.BX)("div",{className:"da",children:[(0,Z.tZ)("div",{className:"ea",children:(0,Z.tZ)(D,{})}),(0,Z.tZ)("div",{className:"ea",children:(0,Z.tZ)($,{})}),a]})}},1330:(e,a,t)=>{t.d(a,{T:()=>o,z:()=>i});var n=t(1621),r=t(484),l=t(6584);const i=e=>{let{type:a="button",onClick:t,children:i,className:o,...s}=e;const c=(0,r.AK)([n.Z.btn,o]);return(0,l.tZ)("button",{type:a,onClick:t,className:c,...s,children:i})},o=e=>{let{children:a,className:t,...i}=e;const o=(0,r.AK)([n.Z.blank,t]);return(0,l.tZ)("button",{type:"button",className:o,...i,children:a})}},2598:(e,a,t)=>{t.d(a,{G:()=>o});var n=t(7502),r=t(2458);const l=/^every (\d+ )?(second|minute)s?\b/i,i=e=>[!0,e],o=e=>{try{const a=(0,r.toString)(e,{use24HourTimeFormat:!0});return l.test(a)?i(a+"\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored."):e.includes("?")?i(a+".\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol."):e.includes("#")?i(a+".\n\nError: Velo Job Scheduler does not support the hash (#) symbol."):(0,n.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,a]:i(a+".\n\nError: Velo Job Scheduler does not support this syntax.")}catch(e){return i(String(e))}}},6517:(e,a,t)=>{t.d(a,{b:()=>r});var n=t(6584);const r=()=>(0,n.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,n.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},1621:(e,a)=>{a.Z={base:"ia",btn:"ja ia",blank:"ka ia"}},8105:(e,a)=>{a.Z={mtk1:"A",mtk4:"B",mtk3:"C",mtk5:"D",mtk6:"E",mtk10:"F",err:"G"}}}]);