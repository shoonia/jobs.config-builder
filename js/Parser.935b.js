(window.J=window.J||[]).push([[842],{709:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=s,t.default=function(e,t,n,r={}){return o||(o=!0,new Error("Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.").name="DeprecationWarning"),s(e,{start:{column:n=Math.max(n,0),line:t}},r)};var r=n(14);let o=!1;const i=/\r\n|[\n\r\u2028\u2029]/;function s(e,t,n={}){const o=(n.highlightCode||n.forceColor)&&(0,r.shouldHighlight)(n),s=(0,r.getChalk)(n),c=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),l=(e,t)=>o?e(t):t,a=e.split(i),{start:u,end:d,markerLines:f}=function(e,t,n){const r=Object.assign({column:0,line:-1},e.start),o=Object.assign({},r,e.end),{linesAbove:i=2,linesBelow:s=3}=n||{},c=r.line,l=r.column,a=o.line,u=o.column;let d=Math.max(c-(i+1),0),f=Math.min(t.length,a+s);-1===c&&(d=0),-1===a&&(f=t.length);const p=a-c,h={};if(p)for(let e=0;e<=p;e++){const n=e+c;h[n]=!l||(0===e?[l,t[n-1].length-l+1]:e===p?[0,u]:[0,t[n-e].length])}else h[c]=l===u?!l||[l,0]:[l,u-l];return{start:d,end:f,markerLines:h}}(t,a,n),p=t.start&&"number"===typeof t.start.column,h=String(d).length;let g=(o?(0,r.default)(e,n):e).split(i).slice(u,d).map(((e,t)=>{const r=u+1+t,o=` ${` ${r}`.slice(-h)} |`,i=f[r],s=!f[r+1];if(i){let t="";if(Array.isArray(i)){const r=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\t]/g," "),a=i[1]||1;t=["\n ",l(c.gutter,o.replace(/\d/g," "))," ",r,l(c.marker,"^").repeat(a)].join(""),s&&n.message&&(t+=" "+l(c.message,n.message))}return[l(c.marker,">"),l(c.gutter,o),e.length>0?` ${e}`:"",t].join("")}return` ${l(c.gutter,o)}${e.length>0?` ${e}`:""}`})).join("\n");return n.message&&!p&&(g=`${" ".repeat(h+1)}${n.message}\n${g}`),o?s.reset(g):g}},306:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=a,t.isIdentifierChar=u,t.isIdentifierName=function(e){let t=!0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(55296===(64512&r)&&n+1<e.length){const t=e.charCodeAt(++n);56320===(64512&t)&&(r=65536+((1023&r)<<10)+(1023&t))}if(t){if(t=!1,!a(r))return!1}else if(!u(r))return!1}return!t};let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const o=new RegExp("["+n+"]"),i=new RegExp("["+n+r+"]");n=r=null;const s=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],c=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function l(e,t){let n=65536;for(let r=0,o=t.length;r<o;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function a(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):l(e,s)))}function u(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):l(e,s)||l(e,c))))}},720:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var r=n(306),o=n(887)},887:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=i,t.isStrictReservedWord=s,t.isStrictBindOnlyReservedWord=c,t.isStrictBindReservedWord=function(e,t){return s(e,t)||c(e)},t.isKeyword=function(e){return n.has(e)};const n=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),r=new Set(["implements","interface","let","package","private","protected","public","static","yield"]),o=new Set(["eval","arguments"]);function i(e,t){return t&&"await"===e||"enum"===e}function s(e,t){return i(e,t)||r.has(e)}function c(e){return o.has(e)}},14:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shouldHighlight=u,t.getChalk=d,t.default=function(e,t={}){return u(t)?function(e,t){let n="";for(const{type:r,value:o}of a(t)){const t=e[r];n+=t?o.split(c).map((e=>t(e))).join("\n"):o}return n}({keyword:(n=d(t)).cyan,capitalized:n.yellow,jsxIdentifier:n.yellow,punctuator:n.yellow,number:n.magenta,string:n.green,regex:n.magenta,comment:n.grey,invalid:n.white.bgRed.bold},e):e;var n};var r=n(188),o=n(720),i=n(589);const s=new Set(["as","async","from","get","of","set"]),c=/\r\n|[\n\r\u2028\u2029]/,l=/^[()[\]{}]$/;let a;{const e=/^[a-z][\w-]*$/i,t=function(t,n,r){if("name"===t.type){if((0,o.isKeyword)(t.value)||(0,o.isStrictReservedWord)(t.value,!0)||s.has(t.value))return"keyword";if(e.test(t.value)&&("<"===r[n-1]||"</"==r.substr(n-2,2)))return"jsxIdentifier";if(t.value[0]!==t.value[0].toLowerCase())return"capitalized"}return"punctuator"===t.type&&l.test(t.value)?"bracket":"invalid"!==t.type||"@"!==t.value&&"#"!==t.value?t.type:"punctuator"};a=function*(e){let n;for(;n=r.default.exec(e);){const o=r.matchToToken(n);yield{type:t(o,n.index,e),value:o.value}}}}function u(e){return!!i.supportsColor||e.forceColor}function d(e){return e.forceColor?new i.constructor({enabled:!0,level:1}):i}},434:(e,t,n)=>{e=n.nmd(e);const r=n(981),o=(e,t)=>function(){const n=e.apply(r,arguments);return`[${n+t}m`},i=(e,t)=>function(){const n=e.apply(r,arguments);return`[${38+t};5;${n}m`},s=(e,t)=>function(){const n=e.apply(r,arguments);return`[${38+t};2;${n[0]};${n[1]};${n[2]}m`};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.grey=t.color.gray;for(const n of Object.keys(t)){const r=t[n];for(const n of Object.keys(r)){const o=r[n];t[n]={open:`[${o[0]}m`,close:`[${o[1]}m`},r[n]=t[n],e.set(o[0],o[1])}Object.defineProperty(t,n,{value:r,enumerable:!1}),Object.defineProperty(t,"codes",{value:e,enumerable:!1})}const n=e=>e,c=(e,t,n)=>[e,t,n];t.color.close="[39m",t.bgColor.close="[49m",t.color.ansi={ansi:o(n,0)},t.color.ansi256={ansi256:i(n,0)},t.color.ansi16m={rgb:s(c,0)},t.bgColor.ansi={ansi:o(n,10)},t.bgColor.ansi256={ansi256:i(n,10)},t.bgColor.ansi16m={rgb:s(c,10)};for(let e of Object.keys(r)){if("object"!==typeof r[e])continue;const n=r[e];"ansi16"===e&&(e="ansi"),"ansi16"in n&&(t.color.ansi[e]=o(n.ansi16,0),t.bgColor.ansi[e]=o(n.ansi16,10)),"ansi256"in n&&(t.color.ansi256[e]=i(n.ansi256,0),t.bgColor.ansi256[e]=i(n.ansi256,10)),"rgb"in n&&(t.color.ansi16m[e]=s(n.rgb,0),t.bgColor.ansi16m[e]=s(n.rgb,10))}return t}})},717:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(584);const o=({onClick:e,disabled:t,children:n,type:o="button"})=>(0,r.tZ)("button",{type:o,onClick:e,className:"Fa Ea",disabled:t,children:n})},337:(e,t,n)=>{n.d(t,{G:()=>c});var r=n(502),o=n(458);const i=/^every (\d+ )?(second|minute)s?\b/i,s=e=>[!0,e],c=e=>{try{const t=(0,o.toString)(e,{use24HourTimeFormat:!0});return i.test(t)?s(`${t}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`):e.includes("?")?s(`${t}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`):e.includes("#")?s(`${t}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`):(0,r.isValidCron)(e,{seconds:!1,allowBlankDay:!1,allowSevenAsSunday:!0,alias:!0})?[!1,t]:s(`${t}.\n\nError: Velo Job Scheduler does not support this syntax.`)}catch(e){return s(String(e))}}},380:(e,t,n)=>{n.r(t),n.d(t,{Parser:()=>E});var r=n(409),o=n.n(r),i=n(97),s=n.n(i),c=n(584);const l=({index:e,name:t,expected:n})=>(0,c.tZ)("p",{children:`Incorrect type of property "${t}" at "jobs[${e}]". Expected "${n}".`});var a=n(744),u=n(791),d=n(309),f=n(235),p=n(337);const h=[f.tW.functionLocation,f.tW.functionName,f.tW.executionConfig],g=[...h,f.tW.description],m=[f.tW.dayOfWeek,f.tW.dateInMonth],y=[f.tW.time,...m],b=[f.tW.cronExpression,...y],j=e=>[!0,e],v=(e,t)=>{for(const n of Object.keys(e))if(!t.includes(n))return[!0,n];return[!1]},w=(e,t)=>{for(const n of t)if(!(n in e))return[!0,n];return[!1]},x=e=>{const t='", "';if(!(0,d.Kn)(e))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:'Incorrect type. Expected "object".'}),(0,c.tZ)("p",{children:"The jobs.config file must contains a JSON object."})]}));if(!(f.tW.jobs in e))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:'Missing property "jobs".'}),(0,c.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs".'})]}));const n=Object.keys(e);if(n.length>1){const e=n.filter((e=>e!==f.tW.jobs)).join(t);return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Unknown property "${e}".`}),(0,c.tZ)("p",{children:'The jobs object must contains one top-level key named "jobs".'})]}))}if(!Array.isArray(e.jobs))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:'Incorrect type. Expected "array".'}),(0,c.tZ)("p",{children:'The top-level key "jobs" must be an array.'})]}));const r=e.jobs;let o=r.length;if(o>20)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Too many scheduled jobs. (${o})`}),(0,c.tZ)("p",{children:"You can configure up to 20 jobs."})]}));if(o<1)return j((0,c.tZ)("p",{children:"No scheduled jobs."}));if(!r.every(d.Kn))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:'Incorrect type. Expected "object."'}),(0,c.tZ)("p",{children:'The "jobs" array must contain only objects, each of which represents a scheduled job.'})]}));for(;0<o--;){const e=r[o],[n,i]=v(e,g);if(n)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Unknown property "${i}" at "jobs[${o}]".`}),(0,c.tZ)("p",{children:`Allowed one of "${g.join(t)}"`})]}));const[s,x]=w(e,h);if(s)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Missing property "${x}" at "jobs[${o}]"`}),(0,c.tZ)("p",{children:`Each scheduled job object must contain the required fields "${h.join(t)}".`})]}));if(f.tW.description in e&&!(0,d.HD)(e.description))return j((0,c.tZ)(l,{index:o,name:f.tW.description,expected:"string"}));const $=e.functionLocation;if(!(0,d.HD)($))return j((0,c.tZ)(l,{index:o,name:f.tW.functionLocation,expected:"string"}));if(!(0,u.QL)($))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Invalid "functionLocation" at "jobs[${o}]".`}),(0,c.BX)("p",{children:["The function location is a relative path within the Backend folder for ",(0,c.tZ)("code",{children:".js"})," or ",(0,c.tZ)("code",{children:".jsw"})," file."]}),(0,c.tZ)("p",{children:"File and Folder names can contain only alphanumeric characters, periods, hyphens and underscores, and can not begin or end with a period."})]}));const O=e.functionName;if(!(0,d.HD)(O))return j((0,c.tZ)(l,{index:o,name:f.tW.functionName,expected:"string"}));if(!(0,u.c3)(O))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Invalid "functionName" at "jobs[${o}]"`}),(0,c.tZ)("p",{children:`Error: "${O}".`})]}));const C=e.executionConfig;if(!(0,d.Kn)(C))return j((0,c.tZ)(l,{index:o,name:f.tW.executionConfig,expected:"object"}));const[S,k]=v(C,b);if(S)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Unknown property "${k}" in "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:`Allowed one of "${b.join(t)}"`})]}));if(f.tW.cronExpression in C){const e=C.cronExpression;if(!(0,d.HD)(e))return j((0,c.tZ)(l,{index:o,name:f.tW.cronExpression,expected:"string"}));const[t,n]=(0,p.G)(e);if(t)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Invalid "cronExpression" at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:n})]}))}else{if(!(f.tW.time in C))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Missing the time of the job runs at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:'The "executionConfig" object must contain one of "time", "cronExpression" properties.'})]}));{const e=C.time;if(!(0,d.HD)(e))return j((0,c.tZ)(l,{index:o,name:f.tW.time,expected:"string"}));if(!(0,u.CO)(e))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Invalid "time" at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:`Error: "${e}". The time is specified as UTC time in HH:MM format.`})]}))}}if(f.tW.dayOfWeek in C){const e=C.dayOfWeek;if(!(0,d.HD)(e))return j((0,c.tZ)(l,{index:o,name:f.tW.dayOfWeek,expected:"string"}));if(!a.N.some((t=>t===e)))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Incorrect value of "dayOfWeek" at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:`Error: unknown value "${e}". Allowed one of "${a.N.join(t)}"`})]}))}if(f.tW.dateInMonth in C){const e=C.dateInMonth;if(!(0,d.hj)(e))return j((0,c.tZ)(l,{index:o,name:f.tW.dateInMonth,expected:"number"}));if(!Number.isInteger(e)||e<1||e>31)return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Invalid "dateInMonth" at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:'The value of the "dateInMonth" property must be a number between 1 and 31.'})]}))}if(f.tW.cronExpression in C&&y.some((e=>e in C)))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Mutual exclusion property at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:`Error: "cronExpression" omit all of "${y.join(t)}" properties.`}),(0,c.tZ)("p",{children:(0,c.tZ)("em",{children:'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression.'})})]}));if(m.every((e=>e in C)))return j((0,c.BX)(c.HY,{children:[(0,c.tZ)("p",{children:`Mutual exclusion property at "jobs[${o}].executionConfig".`}),(0,c.tZ)("p",{children:'Error: "dateInMonth" omit the "dayOfWeek" property.'})]}))}return[!1]},$=({children:e,error:t=!1})=>(0,c.tZ)("div",{className:"Ga",children:(0,c.tZ)("pre",{className:t?"Ia Ha":"Ja Ha",children:e})});var O=n(971),C=n(717),S=n(225);const k=({config:e})=>{const{dispatch:t}=(0,O.bI)();return(0,c.tZ)(C.z,{onClick:()=>{t("items/replace",(0,S.Ze)(e)),location.hash=f.Yj.BUILDER},children:"Edit Config"})},E=({value:e})=>{if(""===e.trim())return(0,c.tZ)($,{children:"No input"});if(e.length>15e3)return(0,c.tZ)($,{error:!0,children:"The file size is too large for the jobs.config."});const[t,n]=(e=>{try{const t=o()(e);return[null,s()(t)]}catch(e){return[String(e)]}})(e);if(null!==t)return(0,c.tZ)($,{error:!0,children:t});const[r,i]=x(n);return r?(0,c.tZ)($,{error:!0,children:i}):(0,c.BX)($,{children:[(0,c.tZ)("p",{children:"Valid jobs.config"}),(0,c.tZ)(k,{config:n})]})}},589:(e,t,n)=>{const r=n(150),o=n(434),i=n(555).stdout,s=n(938),c=["ansi","ansi","ansi256","ansi16m"],l=new Set(["gray"]),a=Object.create(null);function u(e,t){e.level=void 0===(t=t||{}).level?i?i.level:0:t.level,e.enabled="enabled"in t?t.enabled:e.level>0}function d(e){if(!this||!(this instanceof d)||this.template){const t={};return u(t,e),t.template=function(){const e=[].slice.call(arguments);return g.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,d.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=d,t.template}u(this,e)}for(const e of Object.keys(o))o[e].closeRe=new RegExp(r(o[e].close),"g"),a[e]={get(){const t=o[e];return p.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}};a.visible={get(){return p.call(this,this._styles||[],!0,"visible")}},o.color.closeRe=new RegExp(r(o.color.close),"g");for(const e of Object.keys(o.color.ansi))l.has(e)||(a[e]={get(){const t=this.level;return function(){const n=o.color[c[t]][e].apply(null,arguments),r={open:n,close:o.color.close,closeRe:o.color.closeRe};return p.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}});o.bgColor.closeRe=new RegExp(r(o.bgColor.close),"g");for(const e of Object.keys(o.bgColor.ansi))l.has(e)||(a["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const t=this.level;return function(){const n=o.bgColor[c[t]][e].apply(null,arguments),r={open:n,close:o.bgColor.close,closeRe:o.bgColor.closeRe};return p.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}});const f=Object.defineProperties((()=>{}),a);function p(e,t,n){const r=function(){return h.apply(r,arguments)};r._styles=e,r._empty=t;const o=this;return Object.defineProperty(r,"level",{enumerable:!0,get:()=>o.level,set(e){o.level=e}}),Object.defineProperty(r,"enabled",{enumerable:!0,get:()=>o.enabled,set(e){o.enabled=e}}),r.hasGrey=this.hasGrey||"gray"===n||"grey"===n,r.__proto__=f,r}function h(){const e=arguments,t=e.length;let n=String(arguments[0]);if(0===t)return"";if(t>1)for(let r=1;r<t;r++)n+=" "+e[r];if(!this.enabled||this.level<=0||!n)return this._empty?"":n;const r=o.dim.open;for(const e of this._styles.slice().reverse())n=e.open+n.replace(e.closeRe,e.open)+e.close,n=n.replace(/\r?\n/g,`${e.close}$&${e.open}`);return o.dim.open=r,n}function g(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");const n=[].slice.call(arguments,2),r=[t.raw[0]];for(let e=1;e<t.length;e++)r.push(String(n[e-1]).replace(/[{}\\]/g,"\\$&")),r.push(String(t.raw[e]));return s(e,r.join(""))}Object.defineProperties(d.prototype,a),e.exports=d(),e.exports.supportsColor=i,e.exports.default=e.exports},938:e=>{const t=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,n=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,r=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,o=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,i=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function s(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):i.get(e)||e}function c(e,t){const n=[],i=t.trim().split(/\s*,\s*/g);let c;for(const t of i)if(isNaN(t)){if(!(c=t.match(r)))throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`);n.push(c[2].replace(o,((e,t,n)=>t?s(t):n)))}else n.push(Number(t));return n}function l(e){n.lastIndex=0;const t=[];let r;for(;null!==(r=n.exec(e));){const e=r[1];if(r[2]){const n=c(e,r[2]);t.push([e].concat(n))}else t.push([e])}return t}function a(e,t){const n={};for(const e of t)for(const t of e.styles)n[t[0]]=e.inverse?null:t.slice(1);let r=e;for(const e of Object.keys(n))if(Array.isArray(n[e])){if(!(e in r))throw new Error(`Unknown Chalk style: ${e}`);r=n[e].length>0?r[e].apply(r,n[e]):r[e]}return r}e.exports=(e,n)=>{const r=[],o=[];let i=[];if(n.replace(t,((t,n,c,u,d,f)=>{if(n)i.push(s(n));else if(u){const t=i.join("");i=[],o.push(0===r.length?t:a(e,r)(t)),r.push({inverse:c,styles:l(u)})}else if(d){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");o.push(a(e,r)(i.join(""))),i=[],r.pop()}else i.push(f)})),o.push(i.join("")),r.length>0)throw new Error(`Chalk template literal is missing ${r.length} closing bracket${1===r.length?"":"s"} (\`}\`)`);return o.join("")}},864:(e,t,n)=>{var r=n(754),o=n(171),i=function(e,t){e&&e.constructor===String||(t=e||{},e=Error.name);var n=function r(i){if(!this)return new r(i);i=i instanceof Error?i.message:i||this.message,Error.call(this,i),Error.captureStackTrace(this,n),this.name=e,Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get:function(){var e=i.split(/\r?\n/g);for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"message"in r&&(e=r.message(this[n],e)||e,o(e)||(e=[e]))}return e.join("\n")},set:function(e){i=e}});var s=null,c=Object.getOwnPropertyDescriptor(this,"stack"),l=c.get,a=c.value;delete c.value,delete c.writable,c.set=function(e){s=e},c.get=function(){var e=(s||(l?l.call(this):a)).split(/\r?\n+/g);s||(e[0]=this.name+": "+this.message);var n=1;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if("line"in o){var i=o.line(this[r]);i&&e.splice(n++,0,"    "+i)}"stack"in o&&o.stack(this[r],e)}return e.join("\n")},Object.defineProperty(this,"stack",c)};return Object.setPrototypeOf?(Object.setPrototypeOf(n.prototype,Error.prototype),Object.setPrototypeOf(n,Error)):r.inherits(n,Error),n};i.append=function(e,t){return{message:function(n,r){return(n=n||t)&&(r[0]+=" "+e.replace("%s",n.toString())),r}}},i.line=function(e,t){return{line:function(n){return(n=n||t)?e.replace("%s",n.toString()):null}}},e.exports=i},150:e=>{var t=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},171:e=>{e.exports=function(e){return!!e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&e.splice instanceof Function)}},188:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},153:e=>{class t extends SyntaxError{constructor(e,t,n,r){const o=((e,t,n)=>{if(!t)return{message:e.message+" while parsing empty string",position:0};const r=e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i),o=r?+r[2]:e.message.match(/^Unexpected end of JSON.*/i)?t.length-1:null,i=r?e.message.replace(/^Unexpected token ./,`Unexpected token ${JSON.stringify(r[1])} (${(e=>{const t=e.charCodeAt(0).toString(16).toUpperCase();return"0x"+(t.length%2?"0":"")+t})(r[1])})`):e.message;if(null!==o&&void 0!==o){const e=o<=n?0:o-n,r=o+n>=t.length?t.length:o+n,s=(0===e?"":"...")+t.slice(e,r)+(r===t.length?"":"...");return{message:i+` while parsing ${t===s?"":"near "}${JSON.stringify(s)}`,position:o}}return{message:i+` while parsing '${t.slice(0,2*n)}'`,position:0}})(e,t,n=n||20);super(o.message),Object.assign(this,o),this.code="EJSONPARSE",this.systemError=e,Error.captureStackTrace(this,r||this.constructor)}get name(){return this.constructor.name}set name(e){}get[Symbol.toStringTag](){return this.constructor.name}}const n=Symbol.for("indent"),r=Symbol.for("newline"),o=/^\s*[{\[]((?:\r?\n)+)([\s\t]*)/,i=/^(?:\{\}|\[\])((?:\r?\n)+)?$/,s=(e,l,a)=>{const u=c(e);a=a||20;try{const[,e="\n",t="  "]=u.match(i)||u.match(o)||[,"",""],s=JSON.parse(u,l);return s&&"object"===typeof s&&(s[r]=e,s[n]=t),s}catch(n){if("string"!==typeof e&&!Buffer.isBuffer(e)){const t=Array.isArray(e)&&0===e.length;throw Object.assign(new TypeError(`Cannot parse ${t?"an empty array":String(e)}`),{code:"EJSONPARSE",systemError:n})}throw new t(n,u,a,s)}},c=e=>String(e).replace(/^\uFEFF/,"");e.exports=s,s.JSONParseError=t,s.noExceptions=(e,t)=>{try{return JSON.parse(c(e),t)}catch(e){}}},713:(e,t,n)=>{n.r(t);var r="\n",o=function(){function e(e){this.string=e;for(var t=[0],n=0;n<e.length;)switch(e[n]){case r:t.push(n+=r.length);break;case"\r":e[n+="\r".length]===r&&(n+=r.length),t.push(n);break;default:n++}this.offsets=t}return e.prototype.locationForIndex=function(e){if(e<0||e>this.string.length)return null;for(var t=0,n=this.offsets;n[t+1]<=e;)t++;return{line:t,column:e-n[t]}},e.prototype.indexForLocation=function(e){var t=e.line,n=e.column;return t<0||t>=this.offsets.length||n<0||n>this.lengthOfLine(t)?null:this.offsets[t]+n},e.prototype.lengthOfLine=function(e){return(e===this.offsets.length-1?this.string.length:this.offsets[e+1])-this.offsets[e]},e}();t.default=o},97:(e,t,n)=>{const r=n(864),o=n(153),{default:i}=n(713),{codeFrameColumns:s}=n(709),c=r("JSONError",{fileName:r.append("in %s"),codeFrame:r.append("\n\n%s\n")}),l=(e,t,n)=>{"string"===typeof t&&(n=t,t=null);try{try{return JSON.parse(e,t)}catch(n){throw o(e,t),n}}catch(t){t.message=t.message.replace(/\n/g,"");const r=t.message.match(/in JSON at position (\d+) while parsing/),o=new c(t);if(n&&(o.fileName=n),r&&r.length>0){const t=new i(e),n=Number(r[1]),c=t.locationForIndex(n),l=s(e,{start:{line:c.line+1,column:c.column+1}},{highlightCode:!0});o.codeFrame=l}throw o}};l.JSONError=c,e.exports=l},409:e=>{const t=Symbol("singleComment"),n=Symbol("multiComment"),r=()=>"",o=(e,t,n)=>e.slice(t,n).replace(/\S/g," "),i=(e,t)=>{let n=t-1,r=0;for(;"\\"===e[n];)n-=1,r+=1;return Boolean(r%2)};e.exports=(e,s={})=>{if("string"!==typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const c=!1===s.whitespace?r:o;let l=!1,a=!1,u=0,d="";for(let r=0;r<e.length;r++){const o=e[r],s=e[r+1];if(a||'"'!==o||i(e,r)||(l=!l),!l)if(a||o+s!=="//"){if(a===t&&o+s==="\r\n"){r++,a=!1,d+=c(e,u,r),u=r;continue}if(a===t&&"\n"===o)a=!1,d+=c(e,u,r),u=r;else{if(!a&&o+s==="/*"){d+=e.slice(u,r),u=r,a=n,r++;continue}if(a===n&&o+s==="*/"){r++,a=!1,d+=c(e,u,r+1),u=r+1;continue}}}else d+=e.slice(u,r),u=r,a=t,r++}return d+(a?c(e.slice(u)):e.slice(u))}},555:e=>{e.exports={stdout:!1,stderr:!1}},754:()=>{}}]);