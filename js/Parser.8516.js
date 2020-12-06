(window.jobsConfig=window.jobsConfig||[]).push([[842],{717:(n,e,o)=>{o.d(e,{z:()=>r});var t=o(400);const r=({onClick:n,disabled:e,children:o,type:r="button"})=>(0,t.h)("button",{type:r,onClick:n,className:"ga fa",disabled:e},o)},798:(n,e,o)=>{o.d(e,{j:()=>l});var t=o(400),r=o(661);const i=(0,r.Vo)((()=>o.e(861).then(o.bind(o,554)).then((n=>({default:n.CronTrue}))))),l=n=>(0,t.h)(r.n4,{fallback:null},i(n))},380:(n,e,o)=>{o.r(e),o.d(e,{Parser:()=>k});var t=o(400),r=o(409),i=o.n(r),l=o(97),u=o.n(l),s=o(502),c=o(798);const a=({index:n,name:e,expected:o})=>(0,t.h)("p",null,`Incorrect type of property "${e}" at "jobs[${n}]". Expected "${o}".`);var h=o(744),p=o(791),f=o(309),d=o(235);const b=[d.tW.functionLocation,d.tW.functionName,d.tW.executionConfig],j=[...b,d.tW.description],m=[d.tW.dayOfWeek,d.tW.dateInMonth],x=[d.tW.time,...m],y=[d.tW.cronExpression,...x],g=n=>[!0,n],W=(n,e)=>{for(const o of Object.keys(n))if(!e.includes(o))return[!0,o];return[!1]},$=(n,e)=>{for(const o of e)if(!(o in n))return[!0,o];return[!1]},H=n=>{const e='", "';if(!(0,f.Kn)(n))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,'Incorrect type. Expected "object".'),(0,t.h)("p",null,"The jobs.config file must contains a JSON object.")));if(!(d.tW.jobs in n))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,'Missing property "jobs".'),(0,t.h)("p",null,'The jobs object must contains one top-level key named "jobs".')));const o=Object.keys(n);if(o.length>1){const n=o.filter((n=>n!==d.tW.jobs)).join(e);return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Unknown property "${n}".`),(0,t.h)("p",null,'The jobs object must contains one top-level key named "jobs".')))}if(!Array.isArray(n.jobs))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,'Incorrect type. Expected "array".'),(0,t.h)("p",null,'The top-level key "jobs" must be an array.')));const r=n.jobs;let i=r.length;if(i>20)return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Too many scheduled jobs. (${i})`),(0,t.h)("p",null,"You can configure up to 20 jobs.")));if(i<1)return g((0,t.h)("p",null,"No scheduled jobs."));if(!r.every(f.Kn))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,'Incorrect type. Expected "object."'),(0,t.h)("p",null,'The "jobs" array must contain only objects, each of which represents a scheduled job.')));for(;0<i--;){const n=r[i],[o,l]=W(n,j);if(o)return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Unknown property "${l}" at "jobs[${i}]".`),(0,t.h)("p",null,`Allowed one of "${j.join(e)}"`)));const[u,H]=$(n,b);if(u)return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Missing property "${H}" at "jobs[${i}]"`),(0,t.h)("p",null,`Each scheduled job object must contain the required fields "${b.join(e)}".`)));if(d.tW.description in n&&!(0,f.HD)(n.description))return g((0,t.h)(a,{index:i,name:d.tW.description,expected:"string"}));const v=n.functionLocation;if(!(0,f.HD)(v))return g((0,t.h)(a,{index:i,name:d.tW.functionLocation,expected:"string"}));if(!(0,p.lo)(v))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Invalid "functionLocation" at "jobs[${i}]".`),(0,t.h)("p",null,"The function location is a relative path within the Backend folder for ",(0,t.h)("code",null,".js")," or ",(0,t.h)("code",null,".jsw")," file."),(0,t.h)("p",null,"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period.")));const C=n.functionName;if(!(0,f.HD)(C))return g((0,t.h)(a,{index:i,name:d.tW.functionName,expected:"string"}));if(!(0,p.c3)(C))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Invalid "functionName" at "jobs[${i}]"`),(0,t.h)("p",null,`Error: "${C}".`)));const E=n.executionConfig;if(!(0,f.Kn)(E))return g((0,t.h)(a,{index:i,name:d.tW.executionConfig,expected:"object"}));const[I,Y]=W(E,y);if(I)return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Unknown property "${Y}" in "jobs[${i}].executionConfig".`),(0,t.h)("p",null,`Allowed one of "${y.join(e)}"`)));if(d.tW.cronExpression in E){const n=E.cronExpression;if(!(0,f.HD)(n))return g((0,t.h)(a,{index:i,name:d.tW.cronExpression,expected:"string"}));if(!(0,s.isValidCron)(n))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Invalid "cronExpression" at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,(0,t.h)(c.j,{value:n,setValidity:()=>{}})),(0,t.h)("p",null,(0,t.h)("em",null,"You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored."))))}else{if(!(d.tW.time in E))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Missing the time of the job runs at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,'The "executionConfig" object must contain one of "time", "cronExpression" properties.')));{const n=E.time;if(!(0,f.HD)(n))return g((0,t.h)(a,{index:i,name:d.tW.time,expected:"string"}));if(!(0,p.CO)(n))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Invalid "time" at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,`Error: "${n}". The time is specified as UTC time in HH:MM format.`)))}}if(d.tW.dayOfWeek in E){const n=E.dayOfWeek;if(!(0,f.HD)(n))return g((0,t.h)(a,{index:i,name:d.tW.dayOfWeek,expected:"string"}));if(!h.N.some((e=>e===n)))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Incorrect value of "dayOfWeek" at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,`Error: unknown value "${n}". Allowed one of "${h.N.join(e)}"`)))}if(d.tW.dateInMonth in E){const n=E.dateInMonth;if(!(0,f.hj)(n))return g((0,t.h)(a,{index:i,name:d.tW.dateInMonth,expected:"number"}));if(!Number.isInteger(n)||n<1||n>31)return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Invalid "dateInMonth" at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,'The value of the "dateInMonth" property must be a number between 1 and 31.')))}if(d.tW.cronExpression in E&&x.some((n=>n in E)))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Mutual exclusion property at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,`Error: "cronExpression" omit all of "${x.join(e)}" properties.`),(0,t.h)("p",null,(0,t.h)("em",null,'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression.'))));if(m.every((n=>n in E)))return g((0,t.h)(t.HY,null,(0,t.h)("p",null,`Mutual exclusion property at "jobs[${i}].executionConfig".`),(0,t.h)("p",null,'Error: "dateInMonth" omit the "dayOfWeek" property.')))}return[!1]},v=({children:n,error:e=!1})=>(0,t.h)("div",{className:"Ba"},(0,t.h)("pre",{className:e?"Da Ca":"Ea Ca"},n));var C=o(182),E=o(717),I=o(225);const Y=({config:n})=>{const{dispatch:e}=(0,C.bI)();return(0,t.h)(E.z,{onClick:()=>{e("items/replace",(0,I.Ze)(n)),location.hash=d.Yj.BUILDER}},"Edit Config")},k=({value:n})=>{if(""===n.trim())return(0,t.h)(v,null,"No input");if(n.length>15e3)return(0,t.h)(v,{error:!0},"The file size is too large for the jobs.config.");const[e,o]=(n=>{try{const e=i()(n);return[null,u()(e)]}catch(n){return[String(n)]}})(n);if(null!==e)return(0,t.h)(v,{error:!0},e);const[r,l]=H(o);return r?(0,t.h)(v,{error:!0},l):(0,t.h)(v,null,(0,t.h)("p",null,"Valid jobs.config"),(0,t.h)(Y,{config:o}))}},758:()=>{}}]);