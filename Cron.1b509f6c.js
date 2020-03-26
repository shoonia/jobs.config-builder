parcelRequire=function(e){var t="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,r={};function i(e,i){if(e in r)return r[e];var o="function"==typeof parcelRequire&&parcelRequire;if(!i&&o)return o(e,!0);if(t)return t(e,!0);if(n&&"string"==typeof e)return n(e);var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return i.register=function(e,t){r[e]=t},r=function(e){var t,n={},r={};return function(e,n){"object"==typeof r?r=n():"object"==typeof r?(t=n(),r.cronstrue=t):e.cronstrue=n()}("undefined"!=typeof self?self:r,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=function(){function e(t,n){this.expression=t,this.options=n,this.expressionParts=[,,,,,],this.i18n=e.locales[n.locale]?e.locales[n.locale]:e.locales.en,void 0===n.use24HourTimeFormat&&(n.use24HourTimeFormat=this.i18n.use24HourTimeFormatByDefault())}return e.toString=function(t,n){var r=void 0===n?{}:n,i=r.throwExceptionOnParseError,o=r.verbose,s=r.dayOfWeekStartIndexZero,a=r.locale;return new e(t,{throwExceptionOnParseError:void 0===i||i,verbose:void 0!==o&&o,dayOfWeekStartIndexZero:void 0===s||s,use24HourTimeFormat:r.use24HourTimeFormat,locale:void 0===a?"en":a}).getFullDescription()},e.initialize=function(t){e.specialCharacters=["/","-",",","*"],t.load(e.locales)},e.prototype.getFullDescription=function(){var e="";try{var t=new i.CronParser(this.expression,this.options.dayOfWeekStartIndexZero);this.expressionParts=t.parse();var n=this.getTimeOfDayDescription(),r=this.getDayOfMonthDescription(),o=this.getMonthDescription();e+=n+r+this.getDayOfWeekDescription()+o+this.getYearDescription(),e=(e=this.transformVerbosity(e,this.options.verbose)).charAt(0).toLocaleUpperCase()+e.substr(1)}catch(t){if(this.options.throwExceptionOnParseError)throw""+t;e=this.i18n.anErrorOccuredWhenGeneratingTheExpressionD()}return e},e.prototype.getTimeOfDayDescription=function(){var t=this.expressionParts[0],n=this.expressionParts[1],i=this.expressionParts[2],o="";if(r.StringUtilities.containsAny(n,e.specialCharacters)||r.StringUtilities.containsAny(i,e.specialCharacters)||r.StringUtilities.containsAny(t,e.specialCharacters))if(t||!(n.indexOf("-")>-1)||n.indexOf(",")>-1||n.indexOf("/")>-1||r.StringUtilities.containsAny(i,e.specialCharacters))if(!t&&i.indexOf(",")>-1&&-1==i.indexOf("-")&&-1==i.indexOf("/")&&!r.StringUtilities.containsAny(n,e.specialCharacters)){var s=i.split(",");o+=this.i18n.at();for(var a=0;a<s.length;a++)o+=" ",o+=this.formatTime(s[a],n,""),a<s.length-2&&(o+=","),a==s.length-2&&(o+=this.i18n.spaceAnd())}else{var u=this.getSecondsDescription(),c=this.getMinutesDescription(),f=this.getHoursDescription();(o+=u).length>0&&c.length>0&&(o+=", "),(o+=c).length>0&&f.length>0&&(o+=", "),o+=f}else{var p=n.split("-");o+=r.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(),this.formatTime(i,p[0],""),this.formatTime(i,p[1],""))}else o+=this.i18n.atSpace()+this.formatTime(i,n,t);return o},e.prototype.getSecondsDescription=function(){var e=this;return this.getSegmentDescription(this.expressionParts[0],this.i18n.everySecond(),(function(e){return e}),(function(t){return r.StringUtilities.format(e.i18n.everyX0Seconds(),t)}),(function(t){return e.i18n.secondsX0ThroughX1PastTheMinute()}),(function(t){return"0"==t?"":parseInt(t)<20?e.i18n.atX0SecondsPastTheMinute():e.i18n.atX0SecondsPastTheMinuteGt20()||e.i18n.atX0SecondsPastTheMinute()}))},e.prototype.getMinutesDescription=function(){var e=this,t=this.expressionParts[0],n=this.expressionParts[2];return this.getSegmentDescription(this.expressionParts[1],this.i18n.everyMinute(),(function(e){return e}),(function(t){return r.StringUtilities.format(e.i18n.everyX0Minutes(),t)}),(function(t){return e.i18n.minutesX0ThroughX1PastTheHour()}),(function(r){try{return"0"==r&&-1==n.indexOf("/")&&""==t?e.i18n.everyHour():parseInt(r)<20?e.i18n.atX0MinutesPastTheHour():e.i18n.atX0MinutesPastTheHourGt20()||e.i18n.atX0MinutesPastTheHour()}catch(t){return e.i18n.atX0MinutesPastTheHour()}}))},e.prototype.getHoursDescription=function(){var e=this;return this.getSegmentDescription(this.expressionParts[2],this.i18n.everyHour(),(function(t){return e.formatTime(t,"0","")}),(function(t){return r.StringUtilities.format(e.i18n.everyX0Hours(),t)}),(function(t){return e.i18n.betweenX0AndX1()}),(function(t){return e.i18n.atX0()}))},e.prototype.getDayOfWeekDescription=function(){var e=this,t=this.i18n.daysOfTheWeek();return"*"==this.expressionParts[5]?"":this.getSegmentDescription(this.expressionParts[5],this.i18n.commaEveryDay(),(function(e){var n=e;return e.indexOf("#")>-1?n=e.substr(0,e.indexOf("#")):e.indexOf("L")>-1&&(n=n.replace("L","")),t[parseInt(n)]}),(function(t){return 1==parseInt(t)?"":r.StringUtilities.format(e.i18n.commaEveryX0DaysOfTheWeek(),t)}),(function(t){return e.i18n.commaX0ThroughX1()}),(function(t){var n=null;if(t.indexOf("#")>-1){var r=null;switch(t.substring(t.indexOf("#")+1)){case"1":r=e.i18n.first();break;case"2":r=e.i18n.second();break;case"3":r=e.i18n.third();break;case"4":r=e.i18n.fourth();break;case"5":r=e.i18n.fifth()}n=e.i18n.commaOnThe()+r+e.i18n.spaceX0OfTheMonth()}else n=t.indexOf("L")>-1?e.i18n.commaOnTheLastX0OfTheMonth():"*"!=e.expressionParts[3]?e.i18n.commaAndOnX0():e.i18n.commaOnlyOnX0();return n}))},e.prototype.getMonthDescription=function(){var e=this,t=this.i18n.monthsOfTheYear();return this.getSegmentDescription(this.expressionParts[4],"",(function(e){return t[parseInt(e)-1]}),(function(t){return 1==parseInt(t)?"":r.StringUtilities.format(e.i18n.commaEveryX0Months(),t)}),(function(t){return e.i18n.commaMonthX0ThroughMonthX1()||e.i18n.commaX0ThroughX1()}),(function(t){return e.i18n.commaOnlyInMonthX0?e.i18n.commaOnlyInMonthX0():e.i18n.commaOnlyInX0()}))},e.prototype.getDayOfMonthDescription=function(){var e=this,t=null,n=this.expressionParts[3];switch(n){case"L":t=this.i18n.commaOnTheLastDayOfTheMonth();break;case"WL":case"LW":t=this.i18n.commaOnTheLastWeekdayOfTheMonth();break;default:var i=n.match(/(\d{1,2}W)|(W\d{1,2})/);if(i){var o=parseInt(i[0].replace("W","")),s=1==o?this.i18n.firstWeekday():r.StringUtilities.format(this.i18n.weekdayNearestDayX0(),""+o);t=r.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(),s);break}var a=n.match(/L-(\d{1,2})/);if(a){var u=a[1];t=r.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(),u);break}if("*"==n&&"*"!=this.expressionParts[5])return"";t=this.getSegmentDescription(n,this.i18n.commaEveryDay(),(function(t){return"L"==t?e.i18n.lastDay():e.i18n.dayX0?r.StringUtilities.format(e.i18n.dayX0(),t):t}),(function(t){return"1"==t?e.i18n.commaEveryDay():e.i18n.commaEveryX0Days()}),(function(t){return e.i18n.commaBetweenDayX0AndX1OfTheMonth()}),(function(t){return e.i18n.commaOnDayX0OfTheMonth()}))}return t},e.prototype.getYearDescription=function(){var e=this;return this.getSegmentDescription(this.expressionParts[6],"",(function(e){return/^\d+$/.test(e)?""+new Date(parseInt(e),1).getFullYear():e}),(function(t){return r.StringUtilities.format(e.i18n.commaEveryX0Years(),t)}),(function(t){return e.i18n.commaYearX0ThroughYearX1()||e.i18n.commaX0ThroughX1()}),(function(t){return e.i18n.commaOnlyInYearX0?e.i18n.commaOnlyInYearX0():e.i18n.commaOnlyInX0()}))},e.prototype.getSegmentDescription=function(e,t,n,i,o,s){var a=this,u=null;if(e)if("*"===e)u=t;else if(r.StringUtilities.containsAny(e,["/","-",","]))if(e.indexOf("/")>-1){var c=e.split("/");if(u=r.StringUtilities.format(i(c[1]),c[1]),c[0].indexOf("-")>-1)0!=(l=this.generateBetweenSegmentDescription(c[0],o,n)).indexOf(", ")&&(u+=", "),u+=l;else if(!r.StringUtilities.containsAny(c[0],["*",","])){var f=r.StringUtilities.format(s(c[0]),n(c[0]));f=f.replace(", ",""),u+=r.StringUtilities.format(this.i18n.commaStartingX0(),f)}}else if(e.indexOf(",")>-1){c=e.split(",");for(var p="",h=0;h<c.length;h++){var l;h>0&&c.length>2&&(p+=",",h<c.length-1&&(p+=" ")),h>0&&c.length>1&&(h==c.length-1||2==c.length)&&(p+=this.i18n.spaceAnd()+" "),c[h].indexOf("-")>-1?p+=l=(l=this.generateBetweenSegmentDescription(c[h],(function(e){return a.i18n.commaX0ThroughX1()}),n)).replace(", ",""):p+=n(c[h])}u=r.StringUtilities.format(s(e),p)}else e.indexOf("-")>-1&&(u=this.generateBetweenSegmentDescription(e,o,n));else u=r.StringUtilities.format(s(e),n(e));else u="";return u},e.prototype.generateBetweenSegmentDescription=function(e,t,n){var i=e.split("-"),o=n(i[0]),s=n(i[1]);s=s.replace(":00",":59");var a=t(e);return""+r.StringUtilities.format(a,o,s)},e.prototype.formatTime=function(e,t,n){var r=parseInt(e),i="",o=!1;this.options.use24HourTimeFormat||(i=(o=this.i18n.setPeriodBeforeTime&&this.i18n.setPeriodBeforeTime())?this.getPeriod(r)+" ":" "+this.getPeriod(r),r>12&&(r-=12),0===r&&(r=12));var s=t,a="";return n&&(a=":"+("00"+n).substring(n.length)),""+(o?i:"")+("00"+r).substring((""+r).length)+":"+("00"+s).substring((""+s).length)+a+(o?"":i)},e.prototype.transformVerbosity=function(e,t){return t||(e=(e=(e=(e=e.replace(RegExp(", "+this.i18n.everyMinute(),"g"),"")).replace(RegExp(", "+this.i18n.everyHour(),"g"),"")).replace(RegExp(this.i18n.commaEveryDay(),"g"),"")).replace(/\, ?$/,"")),e},e.prototype.getPeriod=function(e){return e>=12?this.i18n.pm&&this.i18n.pm()||"PM":this.i18n.am&&this.i18n.am()||"AM"},e.locales={},e}();t.ExpressionDescriptor=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.replace(/%s/g,(function(){return t.shift()}))},e.containsAny=function(e,t){return t.some((function(t){return e.indexOf(t)>-1}))},e}();t.StringUtilities=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){void 0===t&&(t=!0),this.expression=e,this.dayOfWeekStartIndexZero=t}return e.prototype.parse=function(){var e=this.extractParts(this.expression);return this.normalize(e),this.validate(e),e},e.prototype.extractParts=function(e){if(!this.expression)throw Error("Expression is empty");var t=e.trim().split(/[ ]+/);if(t.length<5)throw Error("Expression has only "+t.length+" part"+(1==t.length?"":"s")+". At least 5 parts are required.");if(5==t.length)t.unshift(""),t.push("");else if(6==t.length)/\d{4}$/.test(t[5])?t.unshift(""):t.push("");else if(t.length>7)throw Error("Expression has "+t.length+" parts; too many!");return t},e.prototype.normalize=function(e){var t=this;if(e[3]=e[3].replace("?","*"),e[5]=e[5].replace("?","*"),e[2]=e[2].replace("?","*"),0==e[0].indexOf("0/")&&(e[0]=e[0].replace("0/","*/")),0==e[1].indexOf("0/")&&(e[1]=e[1].replace("0/","*/")),0==e[2].indexOf("0/")&&(e[2]=e[2].replace("0/","*/")),0==e[3].indexOf("1/")&&(e[3]=e[3].replace("1/","*/")),0==e[4].indexOf("1/")&&(e[4]=e[4].replace("1/","*/")),0==e[5].indexOf("1/")&&(e[5]=e[5].replace("1/","*/")),0==e[6].indexOf("1/")&&(e[6]=e[6].replace("1/","*/")),e[5]=e[5].replace(/(^\d)|([^#/\s]\d)/g,(function(e){var n=e.replace(/\D/,""),r=n;return t.dayOfWeekStartIndexZero?"7"==n&&(r="0"):r=""+(parseInt(n)-1),e.replace(n,r)})),"L"==e[5]&&(e[5]="6"),"?"==e[3]&&(e[3]="*"),e[3].indexOf("W")>-1&&(e[3].indexOf(",")>-1||e[3].indexOf("-")>-1))throw Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");var n={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6};for(var r in n)e[5]=e[5].replace(RegExp(r,"gi"),""+n[r]);var i={JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};for(var o in i)e[4]=e[4].replace(RegExp(o,"gi"),""+i[o]);"0"==e[0]&&(e[0]=""),/\*|\-|\,|\//.test(e[2])||!/\*|\//.test(e[1])&&!/\*|\//.test(e[0])||(e[2]+="-"+e[2]);for(var s=0;s<e.length;s++)if("*/1"==e[s]&&(e[s]="*"),e[s].indexOf("/")>-1&&!/^\*|\-|\,/.test(e[s])){var a=null;switch(s){case 4:a="12";break;case 5:a="6";break;case 6:a="9999";break;default:a=null}if(null!=a){var u=e[s].split("/");e[s]=u[0]+"-"+a+"/"+u[1]}}},e.prototype.validate=function(e){this.assertNoInvalidCharacters("DOW",e[5]),this.assertNoInvalidCharacters("DOM",e[3])},e.prototype.assertNoInvalidCharacters=function(e,t){var n=t.match(/[A-KM-VX-Z]+/gi);if(n&&n.length)throw Error(e+" part contains invalid values: '"+n+"'")},e}();t.CronParser=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.atX0SecondsPastTheMinuteGt20=function(){return null},e.prototype.atX0MinutesPastTheHourGt20=function(){return null},e.prototype.commaMonthX0ThroughMonthX1=function(){return null},e.prototype.commaYearX0ThroughYearX1=function(){return null},e.prototype.use24HourTimeFormatByDefault=function(){return!1},e.prototype.anErrorOccuredWhenGeneratingTheExpressionD=function(){return"An error occured when generating the expression description.  Check the cron expression syntax."},e.prototype.everyMinute=function(){return"every minute"},e.prototype.everyHour=function(){return"every hour"},e.prototype.atSpace=function(){return"At "},e.prototype.everyMinuteBetweenX0AndX1=function(){return"Every minute between %s and %s"},e.prototype.at=function(){return"At"},e.prototype.spaceAnd=function(){return" and"},e.prototype.everySecond=function(){return"every second"},e.prototype.everyX0Seconds=function(){return"every %s seconds"},e.prototype.secondsX0ThroughX1PastTheMinute=function(){return"seconds %s through %s past the minute"},e.prototype.atX0SecondsPastTheMinute=function(){return"at %s seconds past the minute"},e.prototype.everyX0Minutes=function(){return"every %s minutes"},e.prototype.minutesX0ThroughX1PastTheHour=function(){return"minutes %s through %s past the hour"},e.prototype.atX0MinutesPastTheHour=function(){return"at %s minutes past the hour"},e.prototype.everyX0Hours=function(){return"every %s hours"},e.prototype.betweenX0AndX1=function(){return"between %s and %s"},e.prototype.atX0=function(){return"at %s"},e.prototype.commaEveryDay=function(){return", every day"},e.prototype.commaEveryX0DaysOfTheWeek=function(){return", every %s days of the week"},e.prototype.commaX0ThroughX1=function(){return", %s through %s"},e.prototype.first=function(){return"first"},e.prototype.second=function(){return"second"},e.prototype.third=function(){return"third"},e.prototype.fourth=function(){return"fourth"},e.prototype.fifth=function(){return"fifth"},e.prototype.commaOnThe=function(){return", on the "},e.prototype.spaceX0OfTheMonth=function(){return" %s of the month"},e.prototype.lastDay=function(){return"the last day"},e.prototype.commaOnTheLastX0OfTheMonth=function(){return", on the last %s of the month"},e.prototype.commaOnlyOnX0=function(){return", only on %s"},e.prototype.commaAndOnX0=function(){return", and on %s"},e.prototype.commaEveryX0Months=function(){return", every %s months"},e.prototype.commaOnlyInX0=function(){return", only in %s"},e.prototype.commaOnTheLastDayOfTheMonth=function(){return", on the last day of the month"},e.prototype.commaOnTheLastWeekdayOfTheMonth=function(){return", on the last weekday of the month"},e.prototype.commaDaysBeforeTheLastDayOfTheMonth=function(){return", %s days before the last day of the month"},e.prototype.firstWeekday=function(){return"first weekday"},e.prototype.weekdayNearestDayX0=function(){return"weekday nearest day %s"},e.prototype.commaOnTheX0OfTheMonth=function(){return", on the %s of the month"},e.prototype.commaEveryX0Days=function(){return", every %s days"},e.prototype.commaBetweenDayX0AndX1OfTheMonth=function(){return", between day %s and %s of the month"},e.prototype.commaOnDayX0OfTheMonth=function(){return", on day %s of the month"},e.prototype.commaEveryHour=function(){return", every hour"},e.prototype.commaEveryX0Years=function(){return", every %s years"},e.prototype.commaStartingX0=function(){return", starting %s"},e.prototype.daysOfTheWeek=function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},e.prototype.monthsOfTheYear=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]},e}();t.en=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(5);r.ExpressionDescriptor.initialize(new i.enLocaleLoader),t.default=r.ExpressionDescriptor,t.toString=r.ExpressionDescriptor.toString},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=function(){function e(){}return e.prototype.load=function(e){e.en=new r.en},e}();t.enLocaleLoader=i}])})),e("aSor"),e("MwGB"),e("jDKZ"),n.default=function({id:t,value:n}){var i=function(e){return e&&e.__esModule?{d:e.default}:{d:e}}(e("jDKZ"));const o=e("MwGB").useRef(null),{isValid:s,message:a}=e("MwGB").useMemo(()=>(e=>{try{return{isValid:!0,message:r.toString(e)}}catch(e){return{isValid:!1,message:e+""}}})(n),[n]),u=s?"":i.d.error;return e("MwGB").useEffect(()=>{o.current.setCustomValidity(s?"":a)},[n]),e("aSor").h("fieldset",{className:i.d.fields},e("aSor").h("div",{className:i.d.location},e("aSor").h("label",{className:i.d.block},e("aSor").h("span",{className:i.d.text},"A valid cron expression"),e("aSor").h("input",{ref:o,type:"text",className:i.d.cronInput,value:n,"data-name":"cronExpression","data-id":t,required:!0}))),e("aSor").h("div",{className:u},a))},"object"===typeof exports&&"undefined"!==typeof module?module.exports=n:"function"===typeof define&&define.amd&&define((function(){return n})),n.__esModule=!0,{h77e:n}}(i),i.modules=r,i}();