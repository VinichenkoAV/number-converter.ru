!function(t){function e(e){for(var r,c,u=e[0],a=e[1],s=e[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(l&&l(e);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={1:0,3:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;i.push([124,2]),n()}({124:function(t,e,n){n(125),t.exports=n(313)},29:function(t,e,n){"use strict";function r(t){if("SecurityError"!==t.name)throw t;console.log("Обработка ошибки: SecurityError")}n.r(e),n.d(e,"catchUncaughtDOMException",(function(){return r})),document.location.hash||(document.location.hash="#tab_01"),document.getElementById("writeClipboard1").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.getElementById("writeClipboard2").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.getElementById("writeClipboard3").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.addEventListener("keydown",(function(t){"KeyQ"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})),"KeyX"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})),"KeyB"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){}))}))},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r,o,i=n(5);function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r=Symbol.iterator,o=Symbol.toPrimitive;var d=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"00";a(this,t),f(this,"gender",(function(t,e){return 2===e?i.g.female[t]:i.g.male[t]})),this.first=n||"0",this.second=r.slice(0,2).padEnd(2,"0"),this.cur_first=this.writeCur(this.first,i.a[e][0]),this.cur_second=this.writeCur(this.second,i.a[e][1])}return l(t,null,[{key:"checkUserSum",value:function(t,e){return Number.isFinite(+e)&&!e.includes("e")&&Number(e)<=75e11&&Object.keys(i.a).includes(t)}}]),l(t,[{key:"writeCur",value:function(t,e){return e["1"===t.slice(-2,-1)?2:"1"===t.slice(-1)?0:"234".includes(t.slice(-1))?1:2]}},{key:"writeOrder",value:function(){var t=this.writeCur,e=i.f;return f({},Symbol.iterator,(function(){var n=-2,r=i.f.length-1;return{next:function(o){return{value:-1!==(n+=1)&&+o?n<=r?t(o,e[n]):"(Пропишите порядок!)":void 0,done:!0}}}}))}},{key:"distributeFirst",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.first.substring(this.first.length-3*t,this.first.length-3*(t-1));return""===e?"":"".concat(this.distributeFirst(++t)," ").concat(e).trimStart()}},{key:r,value:function(){var t=this,e=this.writeOrder()[Symbol.iterator](),n=Math.ceil(this.first.length/3),r=0;return{next:function(){return r+=1,{value:[i.d[t.first.charAt(t.first.length-3*r)],i.b[t.first.charAt(t.first.length-(3*r-1))],i.c[t.first.substring(t.first.length-(3*r-1),t.first.length-3*(r-1))]||i.h[t.first.charAt(t.first.length-(3*r-2))]||t.gender(t.first.charAt(t.first.length-(3*r-2)),r),e.next(t.first.substring(t.first.length-3*r,t.first.length-3*(r-1))).value].filter((function(t){return t})).join(" "),done:r>n}}}}},{key:o,value:function(t){if("string"===t)return+this.first?c(this).filter((function(t){return t})).reverse().join(" ").replace(/\S/,(function(t){return t.toUpperCase()})):i.e}}]),t}()},311:function(t,e,n){},313:function(t,e,n){"use strict";n.r(e),n.d(e,"result",(function(){return d}));var r=n(30);function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){function t(t,e,n){return void 0===n||0==+n?Math[t](e):(e=+e,n=+n,isNaN(e)||"number"!=typeof n||n%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-n:-n)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+n:n))))}Math.round10||(Math.round10=function(e,n){return t("round",e,n)}),Math.floor10||(Math.floor10=function(e,n){return t("floor",e,n)}),Math.ceil10||(Math.ceil10=function(e,n){return t("ceil",e,n)})}();var s=n(29);n(311);function l(){setTimeout((function(){document.getElementById("result1").innerText=d[0].slice(0,g),document.getElementById("result1").innerText!==d[0]&&(g+=1,window.requestAnimationFrame(l))}),10)}function f(){setTimeout((function(){document.getElementById("result2").innerText=d[1].slice(0,p),document.getElementById("result2").innerText!==d[1]&&(p+=1,window.requestAnimationFrame(f))}),10)}var d,m=document.getElementById("first-form"),g=0,p=0;m.addEventListener("submit",(function(t){var e,n,i,c,a,h;if(t.preventDefault(),e=m.elements.user_value.value,n=m.elements.currency.value,i=m.elements.statusVAT.value,e.includes(",")&&(e=e.split(",").join(".")),e=e.replace(/\s/g,(function(t){return""})),d=!!r.a.checkUserSum(n,e)&&(e=Math.round10(e,-2).toString(),"1"===i?(a=Math.round10(e-e/1.2,-2).toString(),c=o(r.a,[n].concat(u(e.split("."))))):(a=.2*e,e=Math.round10(Number(e)+a,-2).toString(),a=Math.round10(a,-2).toString(),c=o(r.a,[n].concat(u(e.split("."))))),h=o(r.a,[n].concat(u(a.split(".")))),["".concat(c.distributeFirst()," (").concat(c,") ").concat(c.cur_first," ").concat(c.second," ").concat(c.cur_second,",")+" в том числе НДС 20% в сумме "+"".concat(h.distributeFirst()," (").concat(h,") ").concat(h.cur_first," ").concat(h.second," ").concat(h.cur_second,"."),"".concat(c," ").concat(c.cur_first," ").concat(c.second," ").concat(c.cur_second,",")+" в том числе НДС 20% - "+"".concat(h," ").concat(h.cur_first," ").concat(h.second," ").concat(h.cur_second,".")])){g=p=0;try{window.sessionStorage.setItem("storage1",window.JSON.stringify([m.elements.user_value.value,m.elements.currency.value,m.elements.statusVAT.value,d[0],d[1]]))}catch(t){Object(s.catchUncaughtDOMException)(t)}window.requestAnimationFrame(l),window.requestAnimationFrame(f)}else{var y=p="Введите допустимое значение.";document.getElementById("result1").innerText=y,document.getElementById("result2").innerText=p}})),m.addEventListener("reset",(function(t){t.preventDefault(),document.getElementById("first-form").elements.user_value.value="",d=["",""],document.getElementById("result1").innerText=d[0],document.getElementById("result2").innerText=d[1];try{window.sessionStorage.setItem("storage1",window.JSON.stringify([document.getElementById("first-form").elements.user_value.value,m.elements.currency.value,m.elements.statusVAT.value,d[0],d[1]]))}catch(t){Object(s.catchUncaughtDOMException)(t)}window.requestAnimationFrame(l),window.requestAnimationFrame(f)}))},5:function(t){t.exports=JSON.parse('{"e":"Ноль","g":{"female":{"1":"одна","2":"две"},"male":{"1":"один","2":"два"}},"h":{"3":"три","4":"четыре","5":"пять","6":"шесть","7":"семь","8":"восемь","9":"девять"},"c":{"10":"десять","11":"одиннадцать","12":"двенадцать","13":"тринадцать","14":"четырнадцать","15":"пятнадцать","16":"шестнадцать","17":"семнадцать","18":"восемнадцать","19":"девятнадцать"},"b":{"2":"двадцать","3":"тридцать","4":"сорок","5":"пятьдесят","6":"шестьдесят","7":"семьдесят","8":"восемьдесят","9":"девяносто"},"d":{"1":"сто","2":"двести","3":"триста","4":"четыреста","5":"пятьсот","6":"шестьсот","7":"семьсот","8":"восемьсот","9":"девятьсот"},"f":[["тысяча","тысячи","тысяч"],["миллион","миллиона","миллионов"],["миллиард","миллиарда","миллиардов"],["триллион","триллиона","триллионов"],["квадриллион","квадриллиона","квадриллионов"],["квинтиллион","квинтиллиона","квинтиллионов"],["секстиллион","секстиллиона","секстиллионов"],["септиллион","септиллиона","септиллионов"],["октиллион","октиллиона","октиллионов"],["нониллион","нониллиона","нониллионов"],["дециллион","дециллиона","дециллионов"]],"a":{"RUB":[["рубль","рубля","рублей"],["копейка","копейки","копеек"]],"USD":[["доллар","доллара","долларов"],["цент","цента","центов"]],"EUR":[["евро","евро","евро"],["цент","цента","центов"]]}}')}});