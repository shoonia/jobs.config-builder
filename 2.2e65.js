export const id=2;export const ids=[2];export const modules={25:e=>{class n extends SyntaxError{constructor(e,n,r,t){const o=((e,n,r)=>{if(!n)return{message:e.message+" while parsing empty string",position:0};const t=e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i),o=t?+t[2]:e.message.match(/^Unexpected end of JSON.*/i)?n.length-1:null,c=t?e.message.replace(/^Unexpected token ./,`Unexpected token ${JSON.stringify(t[1])} (${(e=>{const n=e.charCodeAt(0).toString(16).toUpperCase();return"0x"+(n.length%2?"0":"")+n})(t[1])})`):e.message;if(null!==o&&void 0!==o){const e=o<=r?0:o-r,t=o+r>=n.length?n.length:o+r,i=(0===e?"":"...")+n.slice(e,t)+(t===n.length?"":"...");return{message:c+` while parsing ${n===i?"":"near "}${JSON.stringify(i)}`,position:o}}return{message:c+` while parsing '${n.slice(0,2*r)}'`,position:0}})(e,n,r=r||20);super(o.message),Object.assign(this,o),this.code="EJSONPARSE",this.systemError=e,Error.captureStackTrace(this,t||this.constructor)}get name(){return this.constructor.name}set name(e){}get[Symbol.toStringTag](){return this.constructor.name}}const r=Symbol.for("indent"),t=Symbol.for("newline"),o=/^\s*[{[]((?:\r?\n)+)([\s\t]*)/,c=/^(?:\{\}|\[\])((?:\r?\n)+)?$/,i=(e,s,l)=>{const d=a(e);l=l||20;try{const[,e="\n",n="  "]=d.match(c)||d.match(o)||[null,"",""],i=JSON.parse(d,s);return i&&"object"===typeof i&&(i[t]=e,i[r]=n),i}catch(r){if("string"!==typeof e&&!Buffer.isBuffer(e)){const n=Array.isArray(e)&&0===e.length;throw Object.assign(new TypeError(`Cannot parse ${n?"an empty array":String(e)}`),{code:"EJSONPARSE",systemError:r})}throw new n(r,d,l,i)}},a=e=>String(e).replace(/^\uFEFF/,"");e.exports=i,i.JSONParseError=n,i.noExceptions=(e,n)=>{try{return JSON.parse(a(e),n)}catch(e){}}},23:(e,n,r)=>{r.d(n,{a:()=>a,b:()=>i});var t=r(24),o=r(3),c=r(5);const i=({type:e="button",onClick:n,children:r,className:i,...a})=>{const s=(0,o.a)([t.a.btn,i]);return(0,c.c)("button",{type:e,onClick:n,className:s,...a,children:r})},a=({children:e,className:n,...r})=>{const i=(0,o.a)([t.a.blank,n]);return(0,c.c)("button",{type:"button",className:i,...r,children:e})}},28:(e,n,r)=>{r.d(n,{a:()=>a});var t=r(37),o=r(29);const c=/^every (\d+ )?(second|minute)s?\b/i,i=e=>[!0,e],a=e=>{try{const n=(0,o.toString)(e,{use24HourTimeFormat:!0});return c.test(n)?i(`${n}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?i(`${n}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?i(`${n}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,t.a)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,n]:i(`${n}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return i(String(e))}}},30:(e,n,r)=>{r.d(n,{a:()=>o});var t=r(5);const o=()=>(0,t.c)("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",children:(0,t.c)("path",{stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.31 14.44v3.3a1.83 1.83 0 01-1.83 1.83h-13a1.83 1.83 0 01-1.83-1.83v-3.3M12 14V4M7.47 8L12 3.47 16.53 8"})})},39:(e,n,r)=>{r.d(n,{a:()=>j});var t=r(5);const o=({index:e,name:n,expected:r})=>(0,t.c)("p",{children:`Incorrect type of property "${n}" at "jobs[${e}]". Expected "${r}"`});var c=r(12),i=r(11),a=r(8),s=r(3),l=r(0),d=r(28);const u=[l.a.functionLocation,l.a.functionName,l.a.executionConfig],h=[...u,l.a.description],p=[l.a.dayOfWeek,l.a.dateInMonth],f=[...p,l.a.time],m=[...f,l.a.cronExpression],b=e=>"object"===typeof e&&!Array.isArray(e)&&null!==e,g=e=>[!0,e],y=(e,n)=>{for(const r in e)if(!n.includes(r))return[!0,r];return[!1]},x=(e,n)=>{for(const r of n)if(!(r in e))return[!0,r];return[!1]},j=e=>{const n='", "';if(!b(e))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:'Incorrect type. Expected "object"'}),(0,t.c)("p",{children:"The jobs.config file must contains a JSON object"})]}));if(!(l.a.jobs in e))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:'Missing property "jobs"'}),(0,t.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}));const r=Object.keys(e);if(r.length>1){const e=r.filter((e=>e!==l.a.jobs)).join(n);return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Unknown property "${e}"`}),(0,t.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}))}if(!Array.isArray(e.jobs))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:'Incorrect type. Expected "array"'}),(0,t.c)("p",{children:'The top-level key "jobs" must be an array'})]}));const{jobs:j}=e;let v=j.length;if(v>l.c)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Too many scheduled jobs. (${v})`}),(0,t.c)("p",{children:"You can configure up to 20 jobs"})]}));if(v<1)return g((0,t.c)("p",{children:"No scheduled jobs"}));if(!j.every(b))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:'Incorrect type. Expected "object"'}),(0,t.c)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job'})]}));for(;0<v--;){const e=j[v],[r,$]=y(e,h);if(r)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Unknown property "${$}" at "jobs[${v}]"`}),(0,t.c)("p",{children:`Allowed one of "${h.join(n)}"`})]}));const[N,w]=x(e,u);if(N)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Missing property "${w}" at "jobs[${v}]"`}),(0,t.c)("p",{children:`Each scheduled job object must contain the required fields "${u.join(n)}"`})]}));if(l.a.description in e&&!(0,s.b)(e.description))return g((0,t.c)(o,{index:v,name:l.a.description,expected:"string"}));const{functionLocation:k}=e;if(!(0,s.b)(k))return g((0,t.c)(o,{index:v,name:l.a.functionLocation,expected:"string"}));if(!(0,a.c)(k))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Invalid "functionLocation" at "jobs[${v}]"`}),(0,t.b)("p",{children:["The function location is a relative path within the Backend folder for ",(0,t.c)("code",{children:".js"})," or ",(0,t.c)("code",{children:".jsw"})," file."]}),(0,t.c)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period"})]}));const{functionName:E}=e;if(!(0,s.b)(E))return g((0,t.c)(o,{index:v,name:l.a.functionName,expected:"string"}));if(!(0,a.d)(E)){const e=i.a.has(E)?`reserved word "${E}"`:`token "${E}"`;return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Invalid "functionName" at "jobs[${v}]"`}),(0,t.c)("p",{children:`Error: Unexpected ${e}`})]}))}const{executionConfig:C}=e;if(!b(C))return g((0,t.c)(o,{index:v,name:l.a.executionConfig,expected:"object"}));const[S,O]=y(C,m);if(S)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Unknown property "${O}" in "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:`Allowed one of "${m.join(n)}"`})]}));if(l.a.cronExpression in C){const{cronExpression:e}=C;if(!(0,s.b)(e))return g((0,t.c)(o,{index:v,name:l.a.cronExpression,expected:"string"}));const[n,r]=(0,d.a)(e);if(n)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Invalid "cronExpression" at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:r})]}))}else{if(!(l.a.time in C))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Missing the time of the job runs at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties'})]}));{const{time:e}=C;if(!(0,s.b)(e))return g((0,t.c)(o,{index:v,name:l.a.time,expected:"string"}));if(!(0,a.b)(e))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Invalid "time" at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format`})]}))}}if(l.a.dayOfWeek in C){const{dayOfWeek:e}=C;if(!(0,s.b)(e))return g((0,t.c)(o,{index:v,name:l.a.dayOfWeek,expected:"string"}));if(!c.a.some((n=>n===e)))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:`Error: unknown value "${e}". Allowed one of "${c.a.join(n)}"`})]}))}if(l.a.dateInMonth in C){const{dateInMonth:e}=C;if(!Number.isInteger(e))return g((0,t.c)(o,{index:v,name:l.a.dateInMonth,expected:"number"}));if(e<1||e>31)return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Invalid "dateInMonth" at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31'})]}))}if(l.a.cronExpression in C&&f.some((e=>e in C)))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:`Error: "cronExpression" omit all of "${f.join(n)}" properties`}),(0,t.c)("p",{children:(0,t.c)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression'})})]}));if(p.every((e=>e in C)))return g((0,t.b)(t.a,{children:[(0,t.c)("p",{children:`Mutual exclusion property at "jobs[${v}].executionConfig"`}),(0,t.c)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property'})]}))}return[!1]}},38:(e,n,r)=>{r.d(n,{a:()=>p});const t=Symbol("singleComment"),o=Symbol("multiComment"),c=()=>"",i=(e,n,r)=>e.slice(n,r).replace(/\S/g," "),a=(e,n)=>{let r=n-1,t=0;for(;"\\"===e[r];)r-=1,t+=1;return Boolean(t%2)};var s=r(25),l=r(31);class d extends Error{fileName;codeFrame;rawCodeFrame;constructor(e){super(e);let n=e instanceof Error?e.message:e;Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get(){return`${n}${this.fileName?` in ${this.fileName}`:""}${this.codeFrame?`\n\n${this.codeFrame}\n`:""}`},set(e){n=e}}),this.name="JSONError",Error.captureStackTrace&&Error.captureStackTrace(this,d)}}const u=(e,n,r=!0)=>(0,l.a)(e,{start:n},{highlightCode:r});function h(e,n,r){let t;"string"===typeof n&&(r=n,n=void 0);try{return JSON.parse(e,n)}catch(e){t=e.message}try{s(e,n)}catch(e){t=e.message}t=t.replaceAll("\n","");const o=new d(t);r&&(o.fileName=r);const c=((e,n)=>{const r=n.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))? while parsing/);if(!r)return;const{index:t,line:o,column:c}=r.groups;return o&&c?{line:Number(o),column:Number(c)}:function(e,n,{oneBased:r=!1}={}){if(n<0||n>=e.length&&e.length>0)throw new RangeError("Index out of bounds");let t=r?1:0,o=r?1:0;for(let c=0;c<n;c++)"\n"===e[c]||"\r"===e[c]&&"\n"===e[c+1]?(t++,o=r?1:0,"\r"===e[c]&&c++):o++;return{line:t,column:o}}(e,Number(t),{oneBased:!0})})(e,t);throw c&&(o.codeFrame=u(e,c),o.rawCodeFrame=u(e,c,!1)),o}const p=e=>{try{return[null,h(function(e,{whitespace:n=!0,trailingCommas:r=!1}={}){if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const s=n?i:c;let l=!1,d=!1,u=0,h="",p="",f=-1;for(let n=0;n<e.length;n++){const c=e[n],i=e[n+1];if(d||'"'!==c||a(e,n)||(l=!l),!l)if(d||c+i!=="//"){if(d===t&&c+i==="\r\n"){n++,d=!1,h+=s(e,u,n),u=n;continue}if(d===t&&"\n"===c)d=!1,h+=s(e,u,n),u=n;else{if(!d&&c+i==="/*"){h+=e.slice(u,n),u=n,d=o,n++;continue}if(d===o&&c+i==="*/"){n++,d=!1,h+=s(e,u,n+1),u=n+1;continue}r&&!d&&(-1!==f?"}"===c||"]"===c?(h+=e.slice(u,n),p+=s(h,0,1)+h.slice(1),h="",u=n,f=-1):" "!==c&&"\t"!==c&&"\r"!==c&&"\n"!==c&&(h+=e.slice(u,n),u=n,f=-1):","===c&&(p+=h+e.slice(u,n),h="",u=n,f=n))}}else h+=e.slice(u,n),u=n,d=t,n++}return p+h+(d?s(e.slice(u)):e.slice(u))}(e))]}catch(e){return[String(e)]}}},41:(e,n,r)=>{r.d(n,{a:()=>o});var t=r(5);const o=({onInput:e,value:n})=>(0,t.c)("textarea",{onInput:e,className:"S",value:n,placeholder:"{}",spellcheck:!1})},40:(e,n,r)=>{r.d(n,{a:()=>i});var t=r(3),o=r(30),c=r(5);const i=({className:e,onLoad:n})=>(0,c.b)("label",{className:(0,t.a)(["P",e]),"aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,c.c)("input",{type:"file",className:"Q",onChange:e=>{var r;(r=e.target.files,new Promise(((e,n)=>{if(r?.length){const o=new FileReader;o.onload=()=>{(0,t.b)(o.result)?e(o.result):n()},o.onerror=n,o.readAsText(r[0])}else n()}))).then(n)}}),(0,c.c)(o.a,{})]})},44:(e,n,r)=>{r.r(n),r.d(n,{UploadModal:()=>j});var t=r(1),o=r(6),c=r(3),i=r(38),a=r(39),s=r(7),l=r(0),d=r(32),u=r.n(d),h=r(5);const p=u();u().setAppElement("#app");const f=({close:e,label:n,children:r})=>(0,h.c)(p,{isOpen:!0,onRequestClose:e,contentLabel:n,overlayClassName:"ra",className:"ua",bodyOpenClassName:"sa",htmlOpenClassName:"ta",children:r});var m=r(41),b=r(23),g=r(40);const y=()=>(0,h.c)("svg",{fill:"currentcolor",width:"12",height:"12",viewBox:"0 0 8 8","aria-hidden":"true",children:(0,h.c)("path",{d:"M7.2 0 4 3.2.8 0 .1.7 3.3 4 0 7.3l.7.7L4 4.7 7.3 8l.7-.7L4.7 4 7.9.7z"})}),x=()=>{location.hash=l.e.BUILDER},j=()=>{const e=(0,t.k)(""),n=(0,o.c)(),r=e=>{if(""===e.trim())return x();const[r,t]=(0,i.a)(e);if(!r){const[e]=(0,a.a)(t);if(!e)return n.dispatch("items/replace",(0,s.b)(t)),x()}n.dispatch("validator/input",e),location.hash=l.e.VALIDATOR};return(0,h.c)(f,{label:"Upload form",close:x,children:(0,h.b)("form",{onSubmit:n=>{(0,c.c)(n),r(e.current)},className:"va",children:[(0,h.c)(b.a,{onClick:x,className:"wa","aria-label":"close modal",children:(0,h.c)(y,{})}),(0,h.c)("h2",{children:"Upload your config"}),(0,h.b)("div",{className:"ya",children:[(0,h.c)(g.a,{className:"za",onLoad:r}),(0,h.c)(m.a,{onInput:n=>{e.current=n.target.value}})]}),(0,h.b)("div",{className:"xa",children:[(0,h.c)(b.b,{type:"submit",children:"Upload Config"}),(0,h.c)(b.b,{onClick:x,children:"Cancel"})]})]})})}},18:(e,n,r)=>{r.r(n),r.d(n,{ValidatorPage:()=>j});var t=r(6),o=r(3),c=r(38),i=r(39),a=r(0),s=r(5);const l=({children:e,error:n=!1})=>(0,s.c)("div",{className:"ca",children:(0,s.c)("pre",{className:n?"ea da":"fa da",children:e})});var d=r(23),u=r(7);const h=({config:e})=>{const n=(0,t.c)();return(0,s.c)(d.b,{onClick:()=>{n.dispatch("items/replace",(0,u.b)(e)),location.hash=a.e.BUILDER},children:"Edit Config"})},p=({value:e})=>{if(""===e.trim())return(0,s.c)(l,{children:"No input"});if(e.length>a.f)return(0,s.c)(l,{error:!0,children:"The file size is too large for the jobs.config."});const[n,r]=(0,c.a)(e);if(null!==n)return(0,s.c)(l,{error:!0,children:n});const[t,o]=(0,i.a)(r);return t?(0,s.c)(l,{error:!0,children:o}):(0,s.b)(l,{children:[(0,s.c)("p",{children:"Valid jobs.config"}),(0,s.c)(h,{config:r})]})};var f=r(1),m=r(9);const b=()=>(0,s.c)("svg",{fill:"currentcolor",width:"24",height:"24",viewBox:"0 0 18 18","aria-hidden":"true",children:(0,s.c)("path",{d:"M10.997 7a.5.5 0 010 .707L7.707 11A.5.5 0 017 10.293L10.29 7a.5.5 0 01.707 0zm-1.145 5.852l-1.137 1.123A3.336 3.336 0 014 13.978a3.325 3.325 0 01-.006-4.701L4 9.27l1.142-1.122a.499.499 0 01.706.006v.001a.501.501 0 01-.007.708L4.706 9.978a2.326 2.326 0 000 3.292c.913.91 2.39.91 3.302-.002l1.131-1.119a.506.506 0 01.712 0 .494.494 0 01.005.698l-.004.005zM8.16 5.114l1.124-1.095a3.334 3.334 0 014.737.039 3.378 3.378 0 01-.068 4.762l-1.086 1.033a.516.516 0 01-.72-.008.485.485 0 01.008-.697l1.1-1.044c.938-.912.87-2.5.049-3.35-.811-.838-2.404-.935-3.314-.027L8.827 5.86a.479.479 0 01-.692-.024.523.523 0 01.026-.723z"})}),g=({className:e})=>{const n=(0,t.c)(),[r,o]=(0,f.l)(!1),c=r?"Copied!":"Copy link to validation results";return(0,s.c)(d.a,{onClick:async()=>{const{validatorValue:e}=n.get(),r=(0,m.a)(e);r&&(history.pushState(null,"",r),await navigator.clipboard.writeText(r),o(!0),setTimeout(o,2e3,!1))},className:e,"aria-label":c,"data-rh":c,"data-rh-at":"left",children:(0,s.c)(b,{})})};var y=r(40),x=r(41);const j=()=>{const{validatorValue:e,dispatch:n}=(0,t.b)("validatorValue");return(0,s.c)("section",{className:"J",children:(0,s.b)("div",{className:"L",children:[(0,s.c)("h2",{className:"K",children:"Jobs Config Validator"}),(0,s.b)("form",{action:"#",onSubmit:o.c,className:"M",children:[(0,s.c)(x.a,{onInput:e=>{n("validator/input",e.target.value)},value:e}),(0,s.b)("aside",{className:"N",children:[(0,s.c)(g,{className:"O"}),(0,s.c)(y.a,{className:"O",onLoad:e=>{n("validator/input",e)}})]})]}),(0,s.c)(p,{value:e})]})})}},24:(e,n,r)=>{r.d(n,{a:()=>t});const t={base:"V",btn:"W V",blank:"X V"}},31:(e,n,r)=>{n.a=function(e,n,r={}){const c=(r.highlightCode||r.forceColor)&&(0,t.shouldHighlight)(r),s=r.forceColor?(null!=i||(i=new o.default.constructor({enabled:!0,level:1})),i):o.default,l=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),d=(e,n)=>c?e(n):n,u=e.split(a),{start:h,end:p,markerLines:f}=function(e,n,r){const t=Object.assign({column:0,line:-1},e.start),o=Object.assign({},t,e.end),{linesAbove:c=2,linesBelow:i=3}=r||{},a=t.line,s=t.column,l=o.line,d=o.column;let u=Math.max(a-(c+1),0),h=Math.min(n.length,l+i);-1===a&&(u=0),-1===l&&(h=n.length);const p=l-a,f={};if(p)for(let e=0;e<=p;e++){const r=e+a;f[r]=!s||(0===e?[s,n[r-1].length-s+1]:e===p?[0,d]:[0,n[r-e].length])}else f[a]=s===d?!s||[s,0]:[s,d-s];return{start:u,end:h,markerLines:f}}(n,u,r),m=n.start&&"number"===typeof n.start.column,b=String(p).length;let g=(c?(0,t.default)(e,r):e).split(a,p).slice(h,p).map(((e,n)=>{const t=h+1+n,o=` ${` ${t}`.slice(-b)} |`,c=f[t],i=!f[t+1];if(c){let n="";if(Array.isArray(c)){const t=e.slice(0,Math.max(c[0]-1,0)).replace(/[^\t]/g," "),a=c[1]||1;n=["\n ",d(l.gutter,o.replace(/\d/g," "))," ",t,d(l.marker,"^").repeat(a)].join(""),i&&r.message&&(n+=" "+d(l.message,r.message))}return[d(l.marker,">"),d(l.gutter,o),e.length>0?` ${e}`:"",n].join("")}return` ${d(l.gutter,o)}${e.length>0?` ${e}`:""}`})).join("\n");return r.message&&!m&&(g=`${" ".repeat(b+1)}${r.message}\n${g}`),c?s.reset(g):g};var t=r(13),o=function(e,n){if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(!0);if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}return t.default=e,r&&r.set(e,t),t}(r(14));function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:n})(e)}let i;const a=/\r\n|[\n\r\u2028\u2029]/}};