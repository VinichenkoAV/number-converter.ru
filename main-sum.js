/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main-sum": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main-sum","main-bigint~main-sum"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./scripts/converter-sum.js":
/*!**********************************!*\
  !*** ./scripts/converter-sum.js ***!
  \**********************************/
/*! exports provided: converterSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converterSum", function() { return converterSum; });
/* harmony import */ var _typewriter_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typewriter-sum.js */ "./scripts/typewriter-sum.js");


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function converterSum(user_value, currency, statusVAT) {
  // Фрагмент кода заменяет первую запятую на точку.
  if (user_value.includes(",")) {
    user_value = user_value.split(",").join(".");
  } // Фрагмент кода удаляет пробелы.


  user_value = user_value.replace(/\s/g, function (x) {
    return "";
  }); // Проверка на допустимость вводимого значения.

  if (!_typewriter_sum_js__WEBPACK_IMPORTED_MODULE_0__["TypewriterSum"].checkUserSum(currency, user_value)) {
    return false;
  } // Основной код функции.


  var amount;
  var VAT;
  var amountVAT;
  user_value = Math.round10(user_value, -2).toString();

  if (statusVAT === "1") {
    // Выделение НДС
    VAT = Math.round10(user_value - user_value / 1.2, -2).toString();
    amount = _construct(_typewriter_sum_js__WEBPACK_IMPORTED_MODULE_0__["TypewriterSum"], [currency].concat(_toConsumableArray(user_value.split("."))));
  } else {
    // Начисление НДС
    VAT = user_value * 0.2;
    user_value = Math.round10(Number(user_value) + VAT, -2).toString();
    VAT = Math.round10(VAT, -2).toString();
    amount = _construct(_typewriter_sum_js__WEBPACK_IMPORTED_MODULE_0__["TypewriterSum"], [currency].concat(_toConsumableArray(user_value.split("."))));
  }

  amountVAT = _construct(_typewriter_sum_js__WEBPACK_IMPORTED_MODULE_0__["TypewriterSum"], [currency].concat(_toConsumableArray(VAT.split(".")))); // Возвращение результата в текстовом оформлении суммы.

  return ["".concat(amount.distributeFirst(), " (").concat(amount, ") ").concat(amount.cur_first, " ").concat(amount.second, " ").concat(amount.cur_second, ",") + " в том числе НДС 20% в сумме " + "".concat(amountVAT.distributeFirst(), " (").concat(amountVAT, ") ").concat(amountVAT.cur_first, " ").concat(amountVAT.second, " ").concat(amountVAT.cur_second, "."), // Сверху запись в договор снизу запись в счет
  "".concat(amount, " ").concat(amount.cur_first, " ").concat(amount.second, " ").concat(amount.cur_second, ",") + " в том числе НДС 20% - " + "".concat(amountVAT, " ").concat(amountVAT.cur_first, " ").concat(amountVAT.second, " ").concat(amountVAT.cur_second, ".")];
}

(function () {
  /**
   * Корректировка округления десятичных дробей.
   *
   * @param {String}  type  Тип корректировки.
   * @param {Number}  value Число.
   * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
   * @returns {Number} Скорректированное значение.
   */
  function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }

    value = +value;
    exp = +exp; // Если значение не является числом, либо степень не является целым числом...

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    } // Сдвиг разрядов


    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Обратный сдвиг

    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
  } // Десятичное округление к ближайшему


  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust('round', value, exp);
    };
  } // Десятичное округление вниз


  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  } // Десятичное округление вверх


  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

/***/ }),

/***/ "./scripts/form-sum.js":
/*!*****************************!*\
  !*** ./scripts/form-sum.js ***!
  \*****************************/
/*! exports provided: result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony import */ var _converter_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter-sum.js */ "./scripts/converter-sum.js");
/* harmony import */ var _working_with_results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./working-with-results.js */ "./scripts/working-with-results.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
 // import * as $ from "jquery" - подключение библиотеки.



 // Подключение стилей.
// import "./style.less" - не используется.
// import "@scss/style.scss" // Подключение SCSS.
// React:
// import React from "react";
// import {render} from "react-dom";
// Функция анимации вывода результата для договора.

function printResult1() {
  setTimeout(function () {
    document.getElementById("result1").innerText = result[0].slice(0, i);

    if (document.getElementById("result1").innerText !== result[0]) {
      i += 1;
      window.requestAnimationFrame(printResult1);
    }
  }, 10);
} // Функция анимации вывода результата для счета.


function printResult2() {
  setTimeout(function () {
    document.getElementById("result2").innerText = result[1].slice(0, j);

    if (document.getElementById("result2").innerText !== result[1]) {
      j += 1;
      window.requestAnimationFrame(printResult2);
    }
  }, 10);
} // Блок кода с реализацией вывода результата денежной суммы.


var form1 = document.getElementById("first-form");
var i = 0;
var j = 0;
var result;
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  result = Object(_converter_sum_js__WEBPACK_IMPORTED_MODULE_0__["converterSum"])(form1.elements.user_value.value, form1.elements.currency.value, form1.elements.statusVAT.value);

  if (!result) {
    var _i = j = "Введите допустимое значение.";

    document.getElementById("result1").innerText = _i;
    document.getElementById("result2").innerText = j;
  } else {
    i = j = 0;

    try {
      window.sessionStorage.setItem("storage1", window.JSON.stringify([form1.elements.user_value.value, form1.elements.currency.value, form1.elements.statusVAT.value, result[0], result[1]]));
    } catch (err) {
      Object(_working_with_results_js__WEBPACK_IMPORTED_MODULE_1__["catchUncaughtDOMException"])(err);
    }

    window.requestAnimationFrame(printResult1);
    window.requestAnimationFrame(printResult2);
  }
}); // Реализация кнопки "Очистить" первой формы.

form1.addEventListener("reset", function (event) {
  event.preventDefault();
  document.getElementById("first-form").elements.user_value.value = "";
  result = ["", ""];
  document.getElementById("result1").innerText = result[0];
  document.getElementById("result2").innerText = result[1];

  try {
    window.sessionStorage.setItem("storage1", window.JSON.stringify([document.getElementById("first-form").elements.user_value.value, form1.elements.currency.value, form1.elements.statusVAT.value, result[0], result[1]]));
  } catch (err) {
    Object(_working_with_results_js__WEBPACK_IMPORTED_MODULE_1__["catchUncaughtDOMException"])(err);
  }

  window.requestAnimationFrame(printResult1);
  window.requestAnimationFrame(printResult2);
});

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./scripts/form-sum.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./scripts/form-sum.js */"./scripts/form-sum.js");


/***/ })

/******/ });
//# sourceMappingURL=main-sum.js.map