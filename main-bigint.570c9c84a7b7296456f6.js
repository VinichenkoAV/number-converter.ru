!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=312)}({27:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){if("SecurityError"!==e.name)throw e;console.log("Обработка ошибки: SecurityError")}n.r(t),n.d(t,"catchUncaughtDOMException",(function(){return o})),document.location.hash||(document.location.hash="#tab_01");try{if(window.sessionStorage.storage1){var i=window.JSON.parse(window.sessionStorage.getItem("storage1")),u=(a=3,function(e){if(Array.isArray(e))return e}(c=i)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(c,a)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(c,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());document.getElementById("first-form").elements.user_value.value=u[0],document.getElementById("first-form").elements.currency.value=u[1],document.getElementById("first-form").elements.statusVAT.value=u[2]}else document.getElementById("first-form").elements.currency.value="RUB",document.getElementById("first-form").elements.statusVAT.value="1";window.sessionStorage.storage2&&(document.getElementById("second-form").elements.user_value.value=window.JSON.parse(window.sessionStorage.getItem("storage2"))[0])}catch(e){o(e)}var c,a;document.getElementById("writeClipboard1").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.getElementById("writeClipboard2").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.getElementById("writeClipboard3").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.addEventListener("keydown",(function(e){"KeyQ"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})),"KeyX"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})),"KeyB"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){}))}))},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o,i=n(5);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r=Symbol.iterator,o=Symbol.toPrimitive;var d=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"00";a(this,e),f(this,"gender",(function(e,t){return 2===t?i.g.female[e]:i.g.male[e]})),this.first=n||"0",this.second=r.slice(0,2).padEnd(2,"0"),this.cur_first=this.writeCur(this.first,i.a[t][0]),this.cur_second=this.writeCur(this.second,i.a[t][1])}return l(e,null,[{key:"checkUserSum",value:function(e,t){return Number.isFinite(+t)&&!t.includes("e")&&Number(t)<=75e11&&Object.keys(i.a).includes(e)}}]),l(e,[{key:"writeCur",value:function(e,t){return t["1"===e.slice(-2,-1)?2:"1"===e.slice(-1)?0:"234".includes(e.slice(-1))?1:2]}},{key:"writeOrder",value:function(){var e=this.writeCur,t=i.f;return f({},Symbol.iterator,(function(){var n=-2,r=i.f.length-1;return{next:function(o){return{value:-1!==(n+=1)&&+o?n<=r?e(o,t[n]):"(Пропишите порядок!)":void 0,done:!0}}}}))}},{key:"distributeFirst",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.first.substring(this.first.length-3*e,this.first.length-3*(e-1));return""===t?"":"".concat(this.distributeFirst(++e)," ").concat(t).trimStart()}},{key:r,value:function(){var e=this,t=this.writeOrder()[Symbol.iterator](),n=Math.ceil(this.first.length/3),r=0;return{next:function(){return r+=1,{value:[i.d[e.first.charAt(e.first.length-3*r)],i.b[e.first.charAt(e.first.length-(3*r-1))],i.c[e.first.substring(e.first.length-(3*r-1),e.first.length-3*(r-1))]||i.h[e.first.charAt(e.first.length-(3*r-2))]||e.gender(e.first.charAt(e.first.length-(3*r-2)),r),t.next(e.first.substring(e.first.length-3*r,e.first.length-3*(r-1))).value].filter((function(e){return e})).join(" "),done:r>n}}}}},{key:o,value:function(e){if("string"===e)return+this.first?u(this).filter((function(e){return e})).reverse().join(" ").replace(/\S/,(function(e){return e.toUpperCase()})):i.e}}]),e}()},312:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t);var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,e);var t,n,r,c=u(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,"RUB",e)).first=BigInt(e).toString(),t}return t=a,r=[{key:"checkUserBigInt",value:function(e){try{return BigInt(e),!0}catch(e){if("SyntaxError"===e.name)return!1;throw e}}}],(n=null)&&o(t.prototype,n),r&&o(t,r),a}(n(30).a);var l=n(27);function f(){setTimeout((function(){document.getElementById("resultBigNum").innerText=d.slice(0,m),document.getElementById("resultBigNum").innerText!==d&&(m+=1,window.requestAnimationFrame(f))}),2)}var d,m,y=document.getElementById("second-form");y.addEventListener("submit",(function(e){var t;if(e.preventDefault(),t=(t=y.elements.user_value.value).replace(/\s/g,(function(e){return""})),d=!!s.checkUserBigInt(t)&&"".concat(new s(t))){m=0;try{window.sessionStorage.setItem("storage2",window.JSON.stringify([y.elements.user_value.value,d]))}catch(e){Object(l.catchUncaughtDOMException)(e)}window.requestAnimationFrame(f)}else{document.getElementById("resultBigNum").innerText="Введите допустимое значение."}})),y.addEventListener("reset",(function(e){e.preventDefault(),document.getElementById("second-form").elements.user_value.value="",d="",document.getElementById("resultBigNum").innerText=d;try{window.sessionStorage.setItem("storage2",window.JSON.stringify([document.getElementById("second-form").elements.user_value.value,d]))}catch(e){Object(l.catchUncaughtDOMException)(e)}}))},5:function(e){e.exports=JSON.parse('{"e":"Ноль","g":{"female":{"1":"одна","2":"две"},"male":{"1":"один","2":"два"}},"h":{"3":"три","4":"четыре","5":"пять","6":"шесть","7":"семь","8":"восемь","9":"девять"},"c":{"10":"десять","11":"одиннадцать","12":"двенадцать","13":"тринадцать","14":"четырнадцать","15":"пятнадцать","16":"шестнадцать","17":"семнадцать","18":"восемнадцать","19":"девятнадцать"},"b":{"2":"двадцать","3":"тридцать","4":"сорок","5":"пятьдесят","6":"шестьдесят","7":"семьдесят","8":"восемьдесят","9":"девяносто"},"d":{"1":"сто","2":"двести","3":"триста","4":"четыреста","5":"пятьсот","6":"шестьсот","7":"семьсот","8":"восемьсот","9":"девятьсот"},"f":[["тысяча","тысячи","тысяч"],["миллион","миллиона","миллионов"],["миллиард","миллиарда","миллиардов"],["триллион","триллиона","триллионов"],["квадриллион","квадриллиона","квадриллионов"],["квинтиллион","квинтиллиона","квинтиллионов"],["секстиллион","секстиллиона","секстиллионов"],["септиллион","септиллиона","септиллионов"],["октиллион","октиллиона","октиллионов"],["нониллион","нониллиона","нониллионов"],["дециллион","дециллиона","дециллионов"]],"a":{"RUB":[["рубль","рубля","рублей"],["копейка","копейки","копеек"]],"USD":[["доллар","доллара","долларов"],["цент","цента","центов"]],"EUR":[["евро","евро","евро"],["цент","цента","центов"]]}}')}});