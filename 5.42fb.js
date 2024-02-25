export const id=5;export const ids=[5];export const modules=Array(27).concat([(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return[].slice.call(t.querySelectorAll("*"),0).reduce(((t,n)=>t.concat(n.shadowRoot?e(n.shadowRoot):[n])),[]).filter(s)};var n="none",o="contents",r=/input|select|textarea|button|object|iframe/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var r=window.getComputedStyle(e),a=r.getPropertyValue("display");return t?a!==o&&((e,t)=>"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0)(e,r):a===n}catch(e){return!1}}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&((e,t)=>{var n=e.nodeName.toLowerCase();return(r.test(n)&&!e.disabled||"a"===n&&e.href||t)&&(e=>{for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),a(t))return!1;t=t.parentNode}return!0})(e)})(e,!n)}e.exports=t.default},,,(e,t,n)=>{n.d(t,{a:()=>h});const o=Symbol("singleComment"),r=Symbol("multiComment"),a=()=>"",s=(e,t,n)=>e.slice(t,n).replace(/\S/g," "),l=(e,t)=>{let n=t-1,o=0;for(;"\\"===e[n];)n-=1,o+=1;return Boolean(o%2)};var i=n(31);const c=(e,t,n)=>n<0?-1:e.lastIndexOf(t,n);function u(e,t,{oneBased:n=!1}={}){if(t<0||t>=e.length&&e.length>0)throw new RangeError("Index out of bounds");const o=((e,t)=>{const n=c(e,"\n",t-1),o=t-n-1;let r=0;for(let t=n;t>=0;t=c(e,"\n",t-1))r++;return{line:r,column:o}})(e,t);return n?{line:o.line+1,column:o.column+1}:o}class d extends Error{name="JSONError";fileName;codeFrame;rawCodeFrame;#e;constructor(e){super(),this.#e=e,Error.captureStackTrace?.(this,d)}get message(){const{fileName:e,codeFrame:t}=this;return`${this.#e}${e?` in ${e}`:""}${t?`\n\n${t}\n`:""}`}set message(e){this.#e=e}}const p=(e,t,n=!0)=>(0,i.a)(e,{start:t},{highlightCode:n});function f(e,t,n){let o,r;"string"===typeof t&&(n=t,t=void 0);try{return JSON.parse(e,t)}catch(e){o=e.message}e?(r=((e,t)=>{const n=t.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))?$/);if(!n)return;let{index:o,line:r,column:a}=n.groups;if(r&&a)return{line:Number(r),column:Number(a)};if(o=Number(o),o===e.length){const{line:t,column:n}=u(e,e.length-1,{oneBased:!0});return{line:t,column:n+1}}return u(e,o,{oneBased:!0})})(e,o),o=(e=>e.replace(/(?<=^Unexpected token )(?<quote>')?(.)\k<quote>/,((e,t,n)=>{return`"${n}"(${o=n,`\\u{${o.codePointAt(0).toString(16)}}`})`;var o})))(o)):o+=" while parsing empty string";const a=new d(o);throw a.fileName=n,r&&(a.codeFrame=p(e,r),a.rawCodeFrame=p(e,r,!1)),a}const h=e=>{try{return[null,f(((e,{whitespace:t=!0,trailingCommas:n=!1}={})=>{if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const i=t?s:a;let c=!1,u=!1,d=0,p="",f="",h=-1;for(let t=0;t<e.length;t++){const a=e[t],s=e[t+1];if(u||'"'!==a||l(e,t)||(c=!c),!c)if(u||a+s!=="//"){if(u===o&&a+s==="\r\n"){t++,u=!1,p+=i(e,d,t),d=t;continue}if(u===o&&"\n"===a)u=!1,p+=i(e,d,t),d=t;else{if(!u&&a+s==="/*"){p+=e.slice(d,t),d=t,u=r,t++;continue}if(u===r&&a+s==="*/"){t++,u=!1,p+=i(e,d,t+1),d=t+1;continue}n&&!u&&(-1!==h?"}"===a||"]"===a?(p+=e.slice(d,t),f+=i(p,0,1)+p.slice(1),p="",d=t,h=-1):" "!==a&&"\t"!==a&&"\r"!==a&&"\n"!==a&&(p+=e.slice(d,t),d=t,h=-1):","===a&&(f+=p+e.slice(d,t),p="",d=t,h=t))}}else p+=e.slice(d,t),d=t,u=o,t++}return f+p+(u?i(e.slice(d)):e.slice(d))})(e))]}catch(e){return[String(e)]}}},(e,t,n)=>{t.a=(e,t,n={})=>{const a=(n.highlightCode||n.forceColor)&&(0,o.shouldHighlight)(n),i=n.forceColor?(null!=s||(s=new r.default.constructor({enabled:!0,level:1})),s):r.default,c=(e=>({gutter:e.grey,marker:e.red.bold,message:e.red.bold}))(i),u=(e,t)=>a?e(t):t,d=e.split(l),{start:p,end:f,markerLines:h}=((e,t,n)=>{const o=Object.assign({column:0,line:-1},e.start),r=Object.assign({},o,e.end),{linesAbove:a=2,linesBelow:s=3}=n||{},l=o.line,i=o.column,c=r.line,u=r.column;let d=Math.max(l-(a+1),0),p=Math.min(t.length,c+s);-1===l&&(d=0),-1===c&&(p=t.length);const f=c-l,h={};if(f)for(let e=0;e<=f;e++){const n=e+l;h[n]=!i||(0===e?[i,t[n-1].length-i+1]:e===f?[0,u]:[0,t[n-e].length])}else h[l]=i===u?!i||[i,0]:[i,u-i];return{start:d,end:p,markerLines:h}})(t,d,n),m=t.start&&"number"===typeof t.start.column,b=String(f).length;let v=(a?(0,o.default)(e,n):e).split(l,f).slice(p,f).map(((e,t)=>{const o=p+1+t,r=` ${` ${o}`.slice(-b)} |`,a=h[o],s=!h[o+1];if(a){let t="";if(Array.isArray(a)){const o=e.slice(0,Math.max(a[0]-1,0)).replace(/[^\t]/g," "),l=a[1]||1;t=["\n ",u(c.gutter,r.replace(/\d/g," "))," ",o,u(c.marker,"^").repeat(l)].join(""),s&&n.message&&(t+=" "+u(c.message,n.message))}return[u(c.marker,">"),u(c.gutter,r),e.length>0?` ${e}`:"",t].join("")}return` ${u(c.gutter,r)}${e.length>0?` ${e}`:""}`})).join("\n");return n.message&&!m&&(v=`${" ".repeat(b+1)}${n.message}\n${v}`),a?i.reset(v):v};var o=n(13),r=((e,t)=>{if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(!0);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o})(n(14));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=e=>e?n:t)(e)}let s;const l=/\r\n|[\n\r\u2028\u2029]/},(e,t,n)=>{n.d(t,{a:()=>C});var o=n(5);const r=({index:e,name:t,expected:n})=>(0,o.c)("p",{children:`Incorrect type of property "${t}" at "jobs[${e}]". Expected "${n}"`});var a=n(12),s=n(11),l=n(8),i=n(3),c=n(0),u=n(25);const d=[c.a.functionLocation,c.a.functionName,c.a.executionConfig],p=[...d,c.a.description],f=[c.a.dayOfWeek,c.a.dateInMonth],h=[...f,c.a.time],m=[...h,c.a.cronExpression],b=e=>"object"===typeof e&&!Array.isArray(e)&&null!==e,v=e=>[!0,e],y=(e,t)=>{for(const n in e)if(!t.includes(n))return[!0,n];return[!1]},g=(e,t)=>{for(const n of t)if(!(n in e))return[!0,n];return[!1]},C=e=>{const t='", "';if(!b(e))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:'Incorrect type. Expected "object"'}),(0,o.c)("p",{children:"The jobs.config file must contains a JSON object"})]}));if(!(c.a.jobs in e))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:'Missing property "jobs"'}),(0,o.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}));const n=Object.keys(e);if(n.length>1){const e=n.filter((e=>e!==c.a.jobs)).join(t);return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Unknown property "${e}"`}),(0,o.c)("p",{children:'The jobs object must contains one top-level key named "jobs"'})]}))}if(!Array.isArray(e.jobs))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:'Incorrect type. Expected "array"'}),(0,o.c)("p",{children:'The top-level key "jobs" must be an array'})]}));const{jobs:C}=e;let O=C.length;if(O>c.c)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Too many scheduled jobs. (${O})`}),(0,o.c)("p",{children:"You can configure up to 20 jobs"})]}));if(O<1)return v((0,o.c)("p",{children:"No scheduled jobs"}));if(!C.every(b))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:'Incorrect type. Expected "object"'}),(0,o.c)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job'})]}));for(;0<O--;){const e=C[O],[n,w]=y(e,p);if(n)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Unknown property "${w}" at "jobs[${O}]"`}),(0,o.c)("p",{children:`Allowed one of "${p.join(t)}"`})]}));const[j,E]=g(e,d);if(j)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Missing property "${E}" at "jobs[${O}]"`}),(0,o.c)("p",{children:`Each scheduled job object must contain the required fields "${d.join(t)}"`})]}));if(c.a.description in e&&!(0,i.b)(e.description))return v((0,o.c)(r,{index:O,name:c.a.description,expected:"string"}));const{functionLocation:x}=e;if(!(0,i.b)(x))return v((0,o.c)(r,{index:O,name:c.a.functionLocation,expected:"string"}));if(!(0,l.c)(x))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Invalid "functionLocation" at "jobs[${O}]"`}),(0,o.b)("p",{children:["The function location is a relative path within the Backend folder for ",(0,o.c)("code",{children:".js"})," or ",(0,o.c)("code",{children:".jsw"})," file."]}),(0,o.c)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period"})]}));const{functionName:M}=e;if(!(0,i.b)(M))return v((0,o.c)(r,{index:O,name:c.a.functionName,expected:"string"}));if(!(0,l.d)(M)){const e=s.a.has(M)?`reserved word "${M}"`:`token "${M}"`;return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Invalid "functionName" at "jobs[${O}]"`}),(0,o.c)("p",{children:`Error: Unexpected ${e}`})]}))}const{executionConfig:N}=e;if(!b(N))return v((0,o.c)(r,{index:O,name:c.a.executionConfig,expected:"object"}));const[S,_]=y(N,m);if(S)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Unknown property "${_}" in "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:`Allowed one of "${m.join(t)}"`})]}));if(c.a.cronExpression in N){const{cronExpression:e}=N;if(!(0,i.b)(e))return v((0,o.c)(r,{index:O,name:c.a.cronExpression,expected:"string"}));const[t,n]=(0,u.a)(e);if(t)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Invalid "cronExpression" at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:n})]}))}else{if(!(c.a.time in N))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Missing the time of the job runs at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties'})]}));{const{time:e}=N;if(!(0,i.b)(e))return v((0,o.c)(r,{index:O,name:c.a.time,expected:"string"}));if(!(0,l.b)(e))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Invalid "time" at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format`})]}))}}if(c.a.dayOfWeek in N){const{dayOfWeek:e}=N;if(!(0,i.b)(e))return v((0,o.c)(r,{index:O,name:c.a.dayOfWeek,expected:"string"}));if(!a.a.some((t=>t===e)))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:`Error: unknown value "${e}". Allowed one of "${a.a.join(t)}"`})]}))}if(c.a.dateInMonth in N){const{dateInMonth:e}=N;if(!Number.isInteger(e))return v((0,o.c)(r,{index:O,name:c.a.dateInMonth,expected:"number"}));if(e<1||e>31)return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Invalid "dateInMonth" at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31'})]}))}if(c.a.cronExpression in N&&h.some((e=>e in N)))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Mutual exclusion property at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:`Error: "cronExpression" omit all of "${h.join(t)}" properties`}),(0,o.c)("p",{children:(0,o.c)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression'})})]}));if(f.every((e=>e in N)))return v((0,o.b)(o.a,{children:[(0,o.c)("p",{children:`Mutual exclusion property at "jobs[${O}].executionConfig"`}),(0,o.c)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property'})]}))}return[!1]}},(e,t,n)=>{n.d(t,{a:()=>s});var o=n(3),r=n(26),a=n(5);const s=({className:e,onLoad:t})=>(0,a.b)("label",{className:(0,o.a)(["P",e]),"aria-label":"Upload your file","data-rh":"Upload your file","data-rh-at":"left",children:[(0,a.c)("input",{type:"file",className:"Q",onChange:e=>{return(n=e.currentTarget.files,new Promise(((e,t)=>{if(n?.length){const r=new FileReader;r.onload=()=>{(0,o.b)(r.result)?e(r.result):t()},r.onerror=t,r.readAsText(n[0])}else t()}))).then(t);var n}}),(0,a.c)(r.a,{})]})},(e,t,n)=>{n.d(t,{a:()=>r});var o=n(5);const r=({onInput:e,value:t})=>(0,o.c)("textarea",{onInput:e,className:"S",value:t,placeholder:"{}",spellcheck:!1})},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(44))&&o.__esModule?o:{default:o};t.default=r.default,e.exports=t.default},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign,r=(()=>{function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return(t,n,o)=>(n&&e(t.prototype,n),o&&e(t,o),t)})(),a=n(4),s=(p(n(15)),d(n(45))),l=p(n(37)),i=d(n(41)),c=d(n(46)),u=(p(n(38)),p(n(42)));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}n(47);var f={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},h=0,m=function(e){function t(e){((e,t)=>{if(!(this instanceof t))throw new TypeError("Cannot call a class as a function")})(0,t);var n=((e,t)=>{if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t})(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=e=>{n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=e=>{n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=()=>{var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,d=l&&l().ownerDocument||document;a&&c.remove(d.body,a),r&&c.remove(d.getElementsByTagName("html")[0],r),o&&h>0&&0===(h-=1)&&i.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(s.returnFocus(n.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),u.default.deregister(n)},n.open=()=>{n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(s.setupScopedFocus(n.node),s.markForFocusLater()),n.setState({isOpen:!0},(()=>{n.openAnimationFrame=requestAnimationFrame((()=>{n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=()=>{n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=()=>n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0}),n.closeWithTimeout=()=>{var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(()=>{n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=()=>{n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=e=>{(e=>"Tab"===e.code||9===e.keyCode)(e)&&(0,l.default)(n.content,e),n.props.shouldCloseOnEsc&&(e=>"Escape"===e.code||27===e.keyCode)(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=e=>{null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=()=>{n.shouldClose=!1},n.handleOverlayOnMouseDown=e=>{n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=()=>{n.shouldClose=!1},n.handleContentOnMouseDown=()=>{n.shouldClose=!1},n.requestClose=e=>n.ownerHandlesClose()&&n.props.onRequestClose(e),n.ownerHandlesClose=()=>n.props.onRequestClose,n.shouldBeClosed=()=>!n.state.isOpen&&!n.state.beforeClose,n.contentHasFocus=()=>document.activeElement===n.content||n.content.contains(document.activeElement),n.buildClassName=(e,t)=>{var o="object"===("undefined"===typeof t?"undefined":typeof t)?t:{base:f[e],afterOpen:f[e]+"--after-open",beforeClose:f[e]+"--before-close"},r=o.base;return n.state.afterOpen&&(r=r+" "+o.afterOpen),n.state.beforeClose&&(r=r+" "+o.beforeClose),"string"===typeof t&&t?r+" "+t:r},n.attributesFromObject=(e,t)=>Object.keys(t).reduce(((n,o)=>(n[e+"-"+o]=t[o],n)),{}),n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return((e,t)=>{if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,s=a&&a().ownerDocument||document;r&&c.add(s.body,r),o&&c.add(s.getElementsByTagName("html")[0],o),n&&(h+=1,i.hide(t)),u.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,s=e.children,l=n?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,s);return this.props.overlayElement(c,d)}}]),t}(a.Component);m.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},t.default=m,e.exports=t.default},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{var n=(0,r.default)(e);if(n.length){var o=void 0,s=t.shiftKey,l=n[0],i=n[n.length-1],c=a();if(e===c){if(!s)return;o=i}if(i!==c||s||(o=l),l===c&&s&&(o=i),o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var d=n.indexOf(c);if(d>-1&&(d+=s?-1:1),"undefined"===typeof(o=n[d]))return t.preventDefault(),void(o=s?i:l).focus();t.preventDefault(),o.focus()}}else t.preventDefault()};var o,r=(o=n(27))&&o.__esModule?o:{default:o};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,r=((o=n(20))&&o.__esModule?o:{default:o}).default,a=r.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=r.canUseDOM?window.NodeList:{},t.canUseDOM=r.canUseDOM,t.default=a},,,(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=()=>{s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((e=>e.removeAttribute("aria-hidden"))):document.querySelectorAll(s).forEach((e=>e.removeAttribute("aria-hidden")))),s=null},t.log=()=>{},t.assertNodeList=l,t.setElement=e=>{var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t=n}return s=t||s},t.validateElement=i,t.hide=e=>{var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.setAttribute("aria-hidden","true")}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.show=e=>{var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.removeAttribute("aria-hidden")}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=()=>{s=null};var o,r=(o=n(19))&&o.__esModule?o:{default:o},a=n(38),s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.log=()=>{o.openInstances.forEach((e=>{}))},t.resetState=()=>{o=new n};var n=function e(){var t=this;((e,t)=>{if(!(this instanceof t))throw new TypeError("Cannot call a class as a function")})(0,e),this.register=e=>{-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=e=>{var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=e=>{t.subscribers.push(e)},this.emit=e=>{t.subscribers.forEach((n=>n(e,t.openInstances.slice())))},this.openInstances=[],this.subscribers=[]},o=new n;t.default=o},(e,t,n)=>{n.r(t),n.d(t,{UploadModal:()=>O});var o=n(2),r=n(6),a=n(3),s=n(30),l=n(32),i=n(7),c=n(0),u=n(35),d=n.n(u),p=n(5);d().setAppElement("#app");const f=d(),h=({close:e,label:t,children:n})=>(0,p.c)(f,{isOpen:!0,onRequestClose:e,contentLabel:t,overlayClassName:"Ra",className:"Ua",bodyOpenClassName:"Sa",htmlOpenClassName:"Ta",children:n});var m=n(34),b=n(23),v=n(33);const y=()=>(0,p.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,p.c)("path",{d:"M10.94 12 6 7.06A.75.75 0 1 1 7.06 6L12 10.94 16.94 6A.75.75 0 0 1 18 7.06L13.06 12 18 16.94A.75.75 0 0 1 16.94 18L12 13.06 7.06 18A.75.75 0 0 1 6 16.94L10.94 12Z"})}),g=()=>(0,p.c)("svg",{width:"24",height:"24",fill:"currentcolor",children:(0,p.c)("path",{d:"M9.5 14.44 16.94 7A.75.75 0 0 1 18 8.06l-8.5 8.5-3.5-3.5A.75.75 0 0 1 7.06 12l2.44 2.44Z"})}),C=()=>{location.hash=c.e.BUILDER},O=()=>{const e=(0,o.k)(""),t=(0,r.b)(),n=e=>{if(""===e.trim())return C();const[n,o]=(0,s.a)(e);if(!n){const[e]=(0,l.a)(o);if(!e)return t("items/replace",(0,i.b)(o)),C()}t("validator/input",e),location.hash=c.e.VALIDATOR};return(0,p.c)(h,{label:"Upload form",close:C,children:(0,p.b)("form",{onSubmit:t=>{(0,a.c)(t),n(e.current)},className:"ma",children:[(0,p.c)(b.a,{onClick:C,className:"na","aria-label":"close modal",children:(0,p.c)(y,{})}),(0,p.c)("h2",{children:"Upload your config"}),(0,p.b)("div",{className:"pa",children:[(0,p.c)(v.a,{className:"qa",onLoad:n}),(0,p.c)(m.a,{onInput:t=>{e.current=t.currentTarget.value}})]}),(0,p.b)("div",{className:"oa",children:[(0,p.b)(b.b,{type:"submit",children:[(0,p.c)(g,{}),"Upload Config"]}),(0,p.b)(b.b,{onClick:C,children:[(0,p.c)(y,{}),"Cancel"]})]})]})})}},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign,r=(()=>{function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return(t,n,o)=>(n&&e(t.prototype,n),o&&e(t,o),t)})(),a=n(4),s=p(a),l=p(n(4)),i=(p(n(15)),p(n(36))),c=(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t})(n(41)),u=n(38),d=(p(u),n(21));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h=t.portalClassName="ReactModalPortal",m=t.bodyOpenClassName="ReactModal__Body--open",b=u.canUseDOM&&void 0!==l.default.createPortal,v=e=>document.createElement(e),y=()=>b?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer;function g(e){return e()}var C=function(e){function t(){var e,n,r;((e,t)=>{if(!(this instanceof t))throw new TypeError("Cannot call a class as a function")})(0,t);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.removePortal=()=>{!b&&l.default.unmountComponentAtNode(r.node);var e=g(r.props.parentSelector);e&&e.contains(r.node)&&e.removeChild(r.node)},r.portalRef=e=>{r.portal=e},r.renderPortal=e=>{var n=y()(r,s.default.createElement(i.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},f(r,n)}return((e,t)=>{if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),r(t,[{key:"componentDidMount",value:function(){u.canUseDOM&&(b||(this.node=v("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(u.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var s=n.prevParent,l=n.nextParent;l!==s&&(s.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(u.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return u.canUseDOM&&b?(!this.node&&b&&(this.node=v("div")),y()(s.default.createElement(i.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:e=>{c.setElement(e)}}]),t}(a.Component);C.defaultProps={isOpen:!1,portalClassName:h,bodyOpenClassName:m,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:()=>document.body,overlayElement:(e,t)=>s.default.createElement("div",e,t),contentElement:(e,t)=>s.default.createElement("div",e,t)},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,d.polyfill)(C),t.default=C},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=()=>{a=[]},t.log=()=>{},t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=()=>{a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{return void(0!==a.length&&a.pop().focus({preventScroll:e}))}catch(e){}},t.popWithoutFocus=()=>{a.length>0&&a.pop()},t.setupScopedFocus=e=>{s=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=()=>{s=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var o,r=(o=n(27))&&o.__esModule?o:{default:o},a=[],s=null,l=!1;function i(){l=!0}function c(){if(l){if(l=!1,!s)return;setTimeout((()=>{s.contains(document.activeElement)||((0,r.default)(s)[0]||s).focus()}),0)}}},(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=()=>{var e=document.getElementsByTagName("html")[0];for(var t in n)r(e,n[t]);var a=document.body;for(var s in o)r(a,o[s]);n={},o={}},t.log=()=>{};var n={},o={};function r(e,t){e.classList.remove(t)}t.add=(e,t)=>{return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((e=>{((e,t)=>{e[t]||(e[t]=0),e[t]+=1})(a,e),r.add(e)}));var r,a},t.remove=(e,t)=>{return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((e=>{((e,t)=>{e[t]&&(e[t]-=1)})(a,e),0===a[e]&&r.remove(e)}));var r,a}},(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=()=>{for(var e=[a,s],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}a=s=null,l=[]},t.log=()=>{for(var e=[a,s],t=0;t<e.length;t++);};var o,r=(o=n(42))&&o.__esModule?o:{default:o},a=void 0,s=void 0,l=[];function i(){0!==l.length&&l[l.length-1].focusContent()}r.default.subscribe(((e,t)=>{a||s||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",i),(s=a.cloneNode()).addEventListener("focus",i)),(l=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(a.parentElement&&a.parentElement.removeChild(a),s.parentElement&&s.parentElement.removeChild(s))}))}]);