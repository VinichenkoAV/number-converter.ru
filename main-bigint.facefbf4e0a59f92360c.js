!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=312)}({27:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if("SecurityError"!==t.name)throw t;console.log("Обработка ошибки: SecurityError")}n.r(e),n.d(e,"catchUncaughtDOMException",(function(){return o})),document.location.hash||(document.location.hash="#tab_01");try{if(window.sessionStorage.storage1){var i=window.JSON.parse(window.sessionStorage.getItem("storage1")),u=(a=3,function(t){if(Array.isArray(t))return t}(c=i)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(c,a)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(c,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());document.getElementById("first-form").elements.user_value.value=u[0],document.getElementById("first-form").elements.currency.value=u[1],document.getElementById("first-form").elements.statusVAT.value=u[2]}else document.getElementById("first-form").elements.currency.value="RUB",document.getElementById("first-form").elements.statusVAT.value="1";window.sessionStorage.storage2&&(document.getElementById("second-form").elements.user_value.value=window.JSON.parse(window.sessionStorage.getItem("storage2"))[0])}catch(t){o(t)}var c,a;document.getElementById("writeClipboard1").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.getElementById("writeClipboard2").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.getElementById("writeClipboard3").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){})).catch((function(t){console.log("Something went wrong",t)}))})),document.addEventListener("keydown",(function(t){"KeyQ"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})),"KeyX"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})),"KeyB"==t.code&&(t.ctrlKey||t.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){}))}))},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r,o,i=n(5);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r=Symbol.iterator,o=Symbol.toPrimitive;var d=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"00";a(this,t),f(this,"gender",(function(t,e){return 2===e?i.g.female[t]:i.g.male[t]})),this.first=n||"0",this.second=r.slice(0,2).padEnd(2,"0"),this.cur_first=this.writeCur(this.first,i.a[e][0]),this.cur_second=this.writeCur(this.second,i.a[e][1])}return l(t,null,[{key:"checkUserSum",value:function(t,e){return Number.isFinite(+e)&&!e.includes("e")&&Number(e)<=75e11&&Object.keys(i.a).includes(t)}}]),l(t,[{key:"writeCur",value:function(t,e){return e["1"===t.slice(-2,-1)?2:"1"===t.slice(-1)?0:"234".includes(t.slice(-1))?1:2]}},{key:"writeOrder",value:function(){var t=this.writeCur,e=i.f;return f({},Symbol.iterator,(function(){var n=-2,r=i.f.length-1;return{next:function(o){return{value:-1!==(n+=1)&&+o?n<=r?t(o,e[n]):"(Пропишите порядок!)":void 0,done:!0}}}}))}},{key:"distributeFirst",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.first.substring(this.first.length-3*t,this.first.length-3*(t-1));return""===e?"":"".concat(this.distributeFirst(++t)," ").concat(e).trimStart()}},{key:r,value:function(){var t=this,e=this.writeOrder()[Symbol.iterator](),n=Math.ceil(this.first.length/3),r=0;return{next:function(){return r+=1,{value:[i.d[t.first.charAt(t.first.length-3*r)],i.b[t.first.charAt(t.first.length-(3*r-1))],i.c[t.first.substring(t.first.length-(3*r-1),t.first.length-3*(r-1))]||i.h[t.first.charAt(t.first.length-(3*r-2))]||t.gender(t.first.charAt(t.first.length-(3*r-2)),r),e.next(t.first.substring(t.first.length-3*r,t.first.length-3*(r-1))).value].filter((function(t){return t})).join(" "),done:r>n}}}}},{key:o,value:function(t){if("string"===t)return+this.first?u(this).filter((function(t){return t})).reverse().join(" ").replace(/\S/,(function(t){return t.toUpperCase()})):i.e}}]),t}()},312:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,c=u(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,"RUB",t)).first=BigInt(t).toString(),e}return e=a,r=[{key:"checkUserBigInt",value:function(t){try{return BigInt(t),!0}catch(t){if("SyntaxError"===t.name)return!1;throw t}}}],(n=null)&&o(e.prototype,n),r&&o(e,r),a}(n(30).a);var l=n(27);var f=document.getElementById("second-form"),d="12345";f.addEventListener("submit",(function(t){var e;if(t.preventDefault(),e=(e=f.elements.user_value.value).replace(/\s/g,(function(t){return""})),document.getElementById("resultBigint").innerText="-1",d="".concat(new s(e))){0;try{window.sessionStorage.setItem("storage2",window.JSON.stringify([f.elements.user_value.value,d]))}catch(t){Object(l.catchUncaughtDOMException)(t)}document.getElementById("resultBigint").innerText=d}else{document.getElementById("resultBigint").innerText="Введите допустимое значение."}})),f.addEventListener("reset",(function(t){t.preventDefault(),document.getElementById("second-form").elements.user_value.value="",d="",document.getElementById("resultBigint").innerText=d;try{window.sessionStorage.setItem("storage2",window.JSON.stringify([document.getElementById("second-form").elements.user_value.value,d]))}catch(t){Object(l.catchUncaughtDOMException)(t)}}))},5:function(t){t.exports=JSON.parse('{"e":"Ноль","g":{"female":{"1":"одна","2":"две"},"male":{"1":"один","2":"два"}},"h":{"3":"три","4":"четыре","5":"пять","6":"шесть","7":"семь","8":"восемь","9":"девять"},"c":{"10":"десять","11":"одиннадцать","12":"двенадцать","13":"тринадцать","14":"четырнадцать","15":"пятнадцать","16":"шестнадцать","17":"семнадцать","18":"восемнадцать","19":"девятнадцать"},"b":{"2":"двадцать","3":"тридцать","4":"сорок","5":"пятьдесят","6":"шестьдесят","7":"семьдесят","8":"восемьдесят","9":"девяносто"},"d":{"1":"сто","2":"двести","3":"триста","4":"четыреста","5":"пятьсот","6":"шестьсот","7":"семьсот","8":"восемьсот","9":"девятьсот"},"f":[["тысяча","тысячи","тысяч"],["миллион","миллиона","миллионов"],["миллиард","миллиарда","миллиардов"],["триллион","триллиона","триллионов"],["квадриллион","квадриллиона","квадриллионов"],["квинтиллион","квинтиллиона","квинтиллионов"],["секстиллион","секстиллиона","секстиллионов"],["септиллион","септиллиона","септиллионов"],["октиллион","октиллиона","октиллионов"],["нониллион","нониллиона","нониллионов"],["дециллион","дециллиона","дециллионов"]],"a":{"RUB":[["рубль","рубля","рублей"],["копейка","копейки","копеек"]],"USD":[["доллар","доллара","долларов"],["цент","цента","центов"]],"EUR":[["евро","евро","евро"],["цент","цента","центов"]]}}')}});