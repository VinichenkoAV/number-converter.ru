!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}({29:function(e,t,n){"use strict";function o(e){if("SecurityError"!==e.name)throw e;console.log("Обработка ошибки: SecurityError")}n.r(t),n.d(t,"catchUncaughtDOMException",(function(){return o})),document.location.hash||(document.location.hash="#tab_01"),document.getElementById("writeClipboard1").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.getElementById("writeClipboard2").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.getElementById("writeClipboard3").addEventListener("click",(function(e){e.preventDefault(),navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){})).catch((function(e){console.log("Something went wrong",e)}))})),document.addEventListener("keydown",(function(e){"KeyQ"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then((function(){})),"KeyX"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then((function(){})),"KeyB"==e.code&&(e.ctrlKey||e.metaKey)&&navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then((function(){}))}))}});