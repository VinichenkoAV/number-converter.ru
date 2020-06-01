/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/working-with-results.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/working-with-results.js":
/*!*****************************************!*\
  !*** ./scripts/working-with-results.js ***!
  \*****************************************/
/*! exports provided: catchUncaughtDOMException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchUncaughtDOMException", function() { return catchUncaughtDOMException; });
 // Функция обрабатывает ошибку SecurityError.

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function catchUncaughtDOMException(err) {
  if (err.name === "SecurityError") {
    console.log("Обработка ошибки: SecurityError");
  } else throw err;
}
;

window.onerror = function (msg, url, line) {
  alert(msg + "\n" + url + "\n" + "\n" + line);
  return true;
};

if (!document.location.hash) {
  document.location.hash = "#tab_01";
}

; // Блок кода выводящий на экран сохраненные настройки меню form.

try {
  if (window.sessionStorage.storage1) {
    var _window$JSON$parse = window.JSON.parse(window.sessionStorage.getItem("storage1"));

    var _window$JSON$parse2 = _slicedToArray(_window$JSON$parse, 3);

    document.getElementById("first-form").elements.user_value.value = _window$JSON$parse2[0];
    document.getElementById("first-form").elements.currency.value = _window$JSON$parse2[1];
    document.getElementById("first-form").elements.statusVAT.value = _window$JSON$parse2[2];
  } else {
    //На тот случай если сработает ошибка (функция catchUncaughtDOMException).
    document.getElementById("first-form").elements.currency.value = "RUB";
    document.getElementById("first-form").elements.statusVAT.value = "1";
  }

  if (window.sessionStorage.storage2) {
    document.getElementById("second-form").elements.user_value.value = window.JSON.parse(window.sessionStorage.getItem("storage2"))[0];
  }
} catch (err) {
  catchUncaughtDOMException(err);
} //-------------------------------------------------------------------------------------------------------//
// Блок кода с реализацией копирования в буфер результата суммы договора.


var writeCb1 = document.getElementById('writeClipboard1');
writeCb1.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then(function () {// Получилось!
  }).catch(function (err) {
    console.log('Something went wrong', err);
  });
}); // Блок кода с реализацией копирования в буфер результата суммы счета.

var writeCb2 = document.getElementById('writeClipboard2');
writeCb2.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then(function () {// Получилось!
  }).catch(function (err) {
    console.log('Something went wrong', err);
  });
}); // Блок кода с реализацией копирования в буфер результата большого числа.

var writeCb3 = document.getElementById('writeClipboard3');
writeCb3.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then(function () {// Получилось!
  }).catch(function (err) {
    console.log('Something went wrong', err);
  });
}); //-------------------------------------------------------------------------------------------------------//
// Реализация горячих клавиш.

document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyQ' && (event.ctrlKey || event.metaKey)) {
    navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[3]).then(function () {});
  }

  if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
    navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage1"))[4]).then(function () {});
  }

  if (event.code == 'KeyB' && (event.ctrlKey || event.metaKey)) {
    navigator.clipboard.writeText(window.JSON.parse(window.sessionStorage.getItem("storage2"))[1]).then(function () {});
  }
});

/***/ })

/******/ });
//# sourceMappingURL=working-with-results.js.map