(window.g=window.g||[]).push([[315],{7785:(e,t,a)=>{a.r(t),a.d(t,{BuilderPage:()=>ee});var n=a(2323),r=a(7428),l=a(396);const i="xa",o="Ga",s="Ma La",c="Qa Ma La";var d=a(8661),h=a(4664);const u=(0,d.createContext)((0,h.CC)()),m=()=>(0,d.useContext)(u);var p=a(484),Z=a(6584);const v=e=>{let{key:t,target:a}=e;"Enter"!==t&&" "!==t||a instanceof HTMLElement&&a.firstChild instanceof HTMLElement&&a.firstChild.click()},b=e=>{let{name:t,value:a,period:n}=e;const r=a===n;return(0,Z.BX)("label",{className:"Ja",tabIndex:0,onKeyPress:v,"aria-checked":r,role:"checkbox",children:[(0,Z.tZ)("input",{type:"radio",name:t,checked:r,"data-name":"period",value:a,className:"Fa"}),(0,Z.tZ)("span",{className:"Ea",children:a})]})},N=()=>{const{id:e,period:t}=m();return(0,Z.tZ)("fieldset",{className:i,children:(0,Z.BX)("div",{className:"Ha",children:[(0,Z.tZ)(b,{name:e,value:r.aI.DAILY,period:t}),(0,Z.tZ)(b,{name:e,value:r.aI.WEEKLY,period:t}),(0,Z.tZ)(b,{name:e,value:r.aI.MONTHLY,period:t}),(0,Z.tZ)(b,{name:e,value:r.aI.CRON,period:t})]})})};var f=a(1330);const g=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z"})}),w=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M6 8V6a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm10 1H4v2h12V9zm0 10v-7H4v7h12zM7 8h9a1 1 0 011 1v7h2V6H7v2z"})}),y=e=>{let{up:t}=e;return(0,Z.tZ)("svg",{width:"24",height:"24",fill:"#116dff","aria-hidden":"true",children:(0,Z.tZ)("path",{d:t?"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z":"M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z"})})},k=()=>{const{id:e}=m(),{dispatch:t,isMax:a}=(0,n.bI)("isMax");return(0,Z.BX)("div",{className:"ya",children:[(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"Move up",onClick:()=>{t("items/up",e)},className:"Aa za","data-rh":"Move up","data-rh-at":"top",children:(0,Z.tZ)(y,{up:!1})}),(0,Z.tZ)(f.T,{"aria-label":"Move down",onClick:()=>{t("items/down",e)},className:"Ba za","data-rh":"Move down","data-rh-at":"top",children:(0,Z.tZ)(y,{up:!0})})]}),(0,Z.BX)("div",{children:[(0,Z.tZ)(f.T,{"aria-label":"remove",onClick:()=>{t("items/remove",e)},className:"za","data-rh":"Remove","data-rh-at":"top",children:(0,Z.tZ)(g,{})}),(0,Z.tZ)(f.T,{"aria-label":"clone",onClick:()=>{t("items/clone",e)},className:"za","data-rh":"Clone","data-rh-at":"top",disabled:a,children:(0,Z.tZ)(w,{})})]})]})},C=e=>{let{top:t,children:a}=e;return(0,Z.BX)("label",{className:"Ia",children:[(0,Z.tZ)("span",{className:"Ka",children:t}),a]})},x=()=>{const{functionLocation:e,functionName:t,description:a}=m();return(0,Z.BX)("fieldset",{className:i,children:[(0,Z.BX)("div",{className:o,children:[(0,Z.tZ)(C,{top:"Function Location",children:(0,Z.tZ)("input",{type:"text","data-name":r.tW.functionLocation,"data-fl":!0,"data-fl-at":"bottom",className:s,value:e,placeholder:"Function Location",pattern:"^(\\/)?[\\w\\-\\.\\/]*[\\w-]\\.jsw?$",spellcheck:!1,required:!0})}),(0,Z.tZ)("span",{className:"Pa",children:"/"}),(0,Z.tZ)(C,{top:"Function Name",children:(0,Z.tZ)("input",{type:"text","data-name":r.tW.functionName,"data-fl":!0,"data-fl-at":"bottom",className:s,value:t,placeholder:"Function Name",pattern:"^(\\s)*?[\\$a-zA-Z_][\\$\\w]*(\\s)*?$",spellcheck:!1,required:!0})})]}),(0,Z.tZ)("div",{className:o,children:(0,Z.tZ)(C,{top:"Description",children:(0,Z.tZ)("input",{type:"text",value:a,className:"Oa La","data-name":r.tW.description,placeholder:"Description"})})})]})};var M=a(2598);const z=e=>{let{value:t,setValidity:a}=e;const[n,r]=(0,M.G)(t);return(0,l.d4)((()=>{a(n)}),[n]),(0,Z.tZ)(Z.HY,{children:r})},L=e=>{let{value:t,error:a}=e;const n=(0,l.sO)(null);return(0,l.d4)((()=>{var e;null==(e=n.current)||e.setCustomValidity(a?"error":"")}),[a]),(0,Z.tZ)(C,{top:"A valid cron expression",children:(0,Z.tZ)("input",{ref:n,type:"text",className:c,value:t,"data-name":r.tW.cronExpression,spellcheck:!1,required:!0})})},B=()=>{const{time:e}=m();return(0,Z.tZ)(C,{top:"The time of day the job runs",children:(0,Z.tZ)("input",{type:"time",value:e,"data-name":"time",className:c,required:!0})})},I=()=>(0,Z.tZ)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M6 12.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm5 0c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"})}),V=()=>{const{id:e}=m();return(0,Z.tZ)(C,{top:"Cron Examples",children:(0,Z.tZ)(f.T,{className:"Za","aria-haspopup":"true","aria-label":"Show examples","data-fl":!0,"data-fl-at":"right","data-name":r.tW.cronExpression,"data-id":e,children:(0,Z.tZ)(I,{})})})},j=a(6705).N.map((e=>(0,Z.tZ)("option",{value:e,children:e},e))),H=()=>{const{dayOfWeek:e}=m();return(0,Z.tZ)(C,{top:"The day of the week the job runs",children:(0,Z.tZ)("select",{className:"Na Ma La","data-name":r.tW.dayOfWeek,value:e,children:j})})},S=()=>{const{dateInMonth:e}=m();return(0,Z.tZ)(C,{top:"The day of the month the job runs",children:(0,Z.tZ)("input",{type:"number",min:"1",max:"31",step:"1",value:String(e),"data-name":r.tW.dateInMonth,className:c,required:!0})})},E=()=>{const[e,t]=(0,l.eJ)(!1),{period:a,cronExpression:n}=m(),s=a===r.aI.CRON,c=s?(0,Z.tZ)(L,{value:n,error:e}):(0,Z.tZ)(B,{}),d=s&&(0,Z.tZ)(V,{}),h=s&&(0,Z.tZ)("div",{className:(0,p.AK)(["Ra",e&&"Sa"]),children:(0,Z.tZ)(z,{value:n,setValidity:t})}),u=a===r.aI.WEEKLY&&(0,Z.tZ)(H,{}),v=a===r.aI.MONTHLY&&(0,Z.tZ)(S,{});return(0,Z.BX)("fieldset",{className:i,children:[(0,Z.BX)("div",{className:o,children:[c,(0,Z.tZ)("span",{className:"Pa"}),d,u,v]}),h]})},X=e=>{let{id:t,update:a}=e;return(0,Z.BX)("form",{id:t,action:"#",className:"wa",onInput:a,onSubmit:p.PF,children:[(0,Z.tZ)(x,{}),(0,Z.tZ)(N,{}),(0,Z.tZ)(E,{}),(0,Z.tZ)(k,{})]})},A=()=>{const{dispatch:e,items:t}=(0,n.bI)("items"),a=t.length-1,r=(0,l.I4)((t=>{let{target:a}=t;e("items/update",{id:a.form.id,name:a.dataset.name,value:a.value})}),[]),i=t.map(((e,t)=>{const n=(0,p.AK)([0===t&&"Ca",t===a&&"Da"]);return(0,Z.tZ)("li",{className:n,children:(0,Z.tZ)(u.Provider,{value:e,children:(0,Z.tZ)(X,{id:e.id,update:r})})},e.id)}));return(0,Z.tZ)("ul",{className:"va",children:i})},T=e=>{let{children:t}=e;return(0,Z.tZ)("div",{className:"Ta",children:t})},W=e=>{let{children:t,label:a}=e;return(0,Z.tZ)("span",{"data-rh":a,"data-rh-at":"top",className:"Ua",children:t})},P=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"})});var O=a(6517);const Y=()=>{const{dispatch:e,isMax:t}=(0,n.bI)("isMax");return(0,Z.BX)(T,{children:[(0,Z.tZ)(W,{label:"You can configure up to 20 jobs",children:(0,Z.BX)(f.z,{onClick:()=>{e("items/new")},disabled:t,children:[(0,Z.tZ)(P,{})," New Job"]})}),(0,Z.tZ)(W,{label:"Upload your config",children:(0,Z.tZ)(f.z,{onClick:()=>{location.hash=r.Yj.UPLOAD},"aria-label":"Upload your config",children:(0,Z.tZ)(O.b,{})})})]})},D=()=>(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(Y,{}),(0,Z.tZ)(A,{})]});var F=a(8105);const K=[{regex:/^[\s[\]{}:,]+/},{regex:/^"(?:\\.|[^"\\])*"/,className:F.Z.mtk6},{regex:/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/,className:F.Z.mtk5}],R=e=>{let{input:t}=e;const a=[];for(;t.length>0;)for(let e=0;e<K.length;e++){const n=K[e],r=n.regex.exec(t);if(Array.isArray(r)){const[e]=r,l="className"in n?(0,Z.tZ)("span",{className:n.className,children:e}):e;a.push(l),t=t.slice(e.length);break}}return(0,Z.tZ)("code",{children:a})};var q=a(1621);const J="function"===typeof window.showSaveFilePicker,U=()=>(0,Z.tZ)("svg",{width:"24",height:"24",fill:"currentColor","aria-hidden":"true",children:(0,Z.tZ)("path",{d:"M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 00-2 0v4a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3v-4a1 1 0 00-2 0zm-7-2.414V3a1 1 0 00-2 0v9.586L7.707 9.293a.999.999 0 10-1.414 1.414l5 5A1.008 1.008 0 0012 16a.997.997 0 00.707-.293l5-5a.999.999 0 10-1.414-1.414z"})}),G=e=>{let{label:t,jsonString:a}=e;return J?(0,Z.tZ)(f.z,{onClick:()=>{(async e=>{const t=await window.showSaveFilePicker({suggestedName:"jobs.config",types:[{description:"Jobs Config",accept:{"application/json":[".config"]}}]});if("granted"===await t.queryPermission()){const a=await t.createWritable();await a.write(e),await a.close()}})(a)},"aria-label":t,children:(0,Z.tZ)(U,{})}):(0,Z.tZ)("a",{href:"data:application/json,"+encodeURIComponent(a),className:q.Z.btn,download:"jobs.config",type:"application/json","aria-label":t,tabIndex:0,children:(0,Z.tZ)(U,{})})},$=()=>{const{items:e}=(0,n.bI)("items"),t=(0,l.sO)(null),a=(0,h._g)(e);return(0,Z.BX)("div",{className:"ga",children:[(0,Z.BX)(T,{children:[(0,Z.tZ)(W,{label:"Copy to clipboard",children:(0,Z.tZ)(f.z,{onClick:async()=>{if(await navigator.clipboard.writeText(a),t.current instanceof Node){const e=window.getSelection(),a=document.createRange();a.selectNodeContents(t.current),null==e||e.removeAllRanges(),null==e||e.addRange(a)}},children:"Copy Code"})}),(0,Z.tZ)(W,{label:"Download a file",children:(0,Z.tZ)(G,{label:"Download a file",jsonString:a})})]}),(0,Z.tZ)("pre",{ref:t,className:"ha",children:(0,Z.tZ)(R,{input:a})})]})},_=(0,d.lazy)((()=>Promise.all([a.e(532),a.e(113),a.e(253),a.e(842)]).then(a.bind(a,3763)).then((e=>e.UploadModal)))),Q=()=>(0,Z.tZ)(d.Suspense,{fallback:null,children:(0,Z.tZ)(_,{})}),ee=()=>{const{path:e}=(0,n.bI)("path"),t=e===r.Yj.UPLOAD&&(0,Z.tZ)(Q,{});return(0,Z.BX)("div",{className:"da",children:[(0,Z.tZ)("div",{className:"ea",children:(0,Z.tZ)(D,{})}),(0,Z.tZ)("div",{className:"ea",children:(0,Z.tZ)($,{})}),t]})}},1330:(e,t,a)=>{a.d(t,{T:()=>o,z:()=>i});var n=a(1621),r=a(484),l=a(6584);const i=e=>{let{type:t="button",onClick:a,children:i,className:o,...s}=e;const c=(0,r.AK)([n.Z.btn,o]);return(0,l.tZ)("button",{type:t,onClick:a,className:c,...s,children:i})},o=e=>{let{children:t,className:a,...i}=e;const o=(0,r.AK)([n.Z.blank,a]);return(0,l.tZ)("button",{type:"button",className:o,...i,children:t})}},2598:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7502),r=a(2458);const l=/^every (\d+ )?(second|minute)s?\b/i,i=e=>[!0,e],o=e=>{try{const t=(0,r.toString)(e,{use24HourTimeFormat:!0});return l.test(t)?i(t+"\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored."):e.includes("?")?i(t+".\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol."):e.includes("#")?i(t+".\n\nError: Velo Job Scheduler does not support the hash (#) symbol."):(0,n.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:i(t+".\n\nError: Velo Job Scheduler does not support this syntax.")}catch(e){return i(String(e))}}},6517:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(6584);const r=()=>(0,n.tZ)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,n.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},1621:(e,t,a)=>{a.d(t,{Z:()=>n});const n={base:"ia",btn:"ja ia",blank:"ka ia"}},8105:(e,t,a)=>{a.d(t,{Z:()=>n});const n={mtk1:"A",mtk4:"B",mtk3:"C",mtk5:"D",mtk6:"E",mtk10:"F",err:"G"}}}]);