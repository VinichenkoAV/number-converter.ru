(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-bigint~main-sum"],{

/***/ "./scripts/base.json":
/*!***************************!*\
  !*** ./scripts/base.json ***!
  \***************************/
/*! exports provided: NULL, UNITS_1_2, UNITS_all, DECADES_10, DECADES, HUNDREDS, ORDERS, CURRENCY, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"NULL\":\"Ноль\",\"UNITS_1_2\":{\"female\":{\"1\":\"одна\",\"2\":\"две\"},\"male\":{\"1\":\"один\",\"2\":\"два\"}},\"UNITS_all\":{\"3\":\"три\",\"4\":\"четыре\",\"5\":\"пять\",\"6\":\"шесть\",\"7\":\"семь\",\"8\":\"восемь\",\"9\":\"девять\"},\"DECADES_10\":{\"10\":\"десять\",\"11\":\"одиннадцать\",\"12\":\"двенадцать\",\"13\":\"тринадцать\",\"14\":\"четырнадцать\",\"15\":\"пятнадцать\",\"16\":\"шестнадцать\",\"17\":\"семнадцать\",\"18\":\"восемнадцать\",\"19\":\"девятнадцать\"},\"DECADES\":{\"2\":\"двадцать\",\"3\":\"тридцать\",\"4\":\"сорок\",\"5\":\"пятьдесят\",\"6\":\"шестьдесят\",\"7\":\"семьдесят\",\"8\":\"восемьдесят\",\"9\":\"девяносто\"},\"HUNDREDS\":{\"1\":\"сто\",\"2\":\"двести\",\"3\":\"триста\",\"4\":\"четыреста\",\"5\":\"пятьсот\",\"6\":\"шестьсот\",\"7\":\"семьсот\",\"8\":\"восемьсот\",\"9\":\"девятьсот\"},\"ORDERS\":[[\"тысяча\",\"тысячи\",\"тысяч\"],[\"миллион\",\"миллиона\",\"миллионов\"],[\"миллиард\",\"миллиарда\",\"миллиардов\"],[\"триллион\",\"триллиона\",\"триллионов\"],[\"квадриллион\",\"квадриллиона\",\"квадриллионов\"],[\"квинтиллион\",\"квинтиллиона\",\"квинтиллионов\"],[\"секстиллион\",\"секстиллиона\",\"секстиллионов\"],[\"септиллион\",\"септиллиона\",\"септиллионов\"],[\"октиллион\",\"октиллиона\",\"октиллионов\"],[\"нониллион\",\"нониллиона\",\"нониллионов\"],[\"дециллион\",\"дециллиона\",\"дециллионов\"]],\"CURRENCY\":{\"RUB\":[[\"рубль\",\"рубля\",\"рублей\"],[\"копейка\",\"копейки\",\"копеек\"]],\"USD\":[[\"доллар\",\"доллара\",\"долларов\"],[\"цент\",\"цента\",\"центов\"]],\"EUR\":[[\"евро\",\"евро\",\"евро\"],[\"цент\",\"цента\",\"центов\"]]}}");

/***/ }),

/***/ "./scripts/typewriter-sum.js":
/*!***********************************!*\
  !*** ./scripts/typewriter-sum.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TypewriterSum; });
/* harmony import */ var _base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.json */ "./scripts/base.json");
var _base_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./base.json */ "./scripts/base.json", 1);


var _Symbol$iterator, _Symbol$toPrimitive;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


_Symbol$iterator = Symbol.iterator;
_Symbol$toPrimitive = Symbol.toPrimitive;

var TypewriterSum = /*#__PURE__*/function () {
  _createClass(TypewriterSum, null, [{
    key: "checkUserSum",
    // Проверка входных значений на корректность создания экземпляра класса.
    value: function checkUserSum(currency, user_value) {
      return Number.isFinite(+user_value) && !user_value.includes("e") && Number(user_value) <= 7.5e12 && Object.keys(_base_json__WEBPACK_IMPORTED_MODULE_0__["CURRENCY"]).includes(currency);
    }
  }]);

  function TypewriterSum(currency, first) {
    var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "00";

    _classCallCheck(this, TypewriterSum);

    _defineProperty(this, "gender", function (digit, order) {
      return order === 2 ? _base_json__WEBPACK_IMPORTED_MODULE_0__["UNITS_1_2"].female[digit] : _base_json__WEBPACK_IMPORTED_MODULE_0__["UNITS_1_2"].male[digit];
    });

    this.first = first ? first : "0";
    this.second = second.slice(0, 2).padEnd(2, "0");
    this.cur_first = this.writeCur(this.first, _base_json__WEBPACK_IMPORTED_MODULE_0__["CURRENCY"][currency][0]);
    this.cur_second = this.writeCur(this.second, _base_json__WEBPACK_IMPORTED_MODULE_0__["CURRENCY"][currency][1]);
  }

  _createClass(TypewriterSum, [{
    key: "writeCur",
    value: function writeCur(digit, currency) {
      return currency[digit.slice(-2, -1) === "1" ? 2 : digit.slice(-1) === "1" ? 0 : "234".includes(digit.slice(-1)) ? 1 : 2];
    }
  }, {
    key: "writeOrder",
    value: function writeOrder() {
      var write_order_from_cur = this.writeCur;
      var orders = _base_json__WEBPACK_IMPORTED_MODULE_0__["ORDERS"];
      return _defineProperty({}, Symbol.iterator, function () {
        var step = -2;
        var len = _base_json__WEBPACK_IMPORTED_MODULE_0__["ORDERS"].length - 1;
        return {
          next: function next(digit) {
            step += 1;
            return {
              value: step !== -1 && +digit ? step <= len ? write_order_from_cur(digit, orders[step]) : "(Пропишите порядок!)" : undefined,
              done: true
            };
          }
        };
      });
    }
  }, {
    key: "distributeFirst",
    value: function distributeFirst() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var o = this.first.substring(this.first.length - 3 * i, this.first.length - (i - 1) * 3);
      if (o === "") return "";
      return "".concat(this.distributeFirst(++i), " ").concat(o).trimStart();
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      var _this = this;

      var ordersIt = this.writeOrder()[Symbol.iterator]();
      var L = Math.ceil(this.first.length / 3);
      var o = 0;
      return {
        next: function next() {
          o += 1;
          return {
            value: [_base_json__WEBPACK_IMPORTED_MODULE_0__["HUNDREDS"][_this.first.charAt(_this.first.length - 3 * o)], _base_json__WEBPACK_IMPORTED_MODULE_0__["DECADES"][_this.first.charAt(_this.first.length - (3 * o - 1))], _base_json__WEBPACK_IMPORTED_MODULE_0__["DECADES_10"][_this.first.substring(_this.first.length - (3 * o - 1), _this.first.length - (o - 1) * 3)] || _base_json__WEBPACK_IMPORTED_MODULE_0__["UNITS_all"][_this.first.charAt(_this.first.length - (3 * o - 2))] || _this.gender(_this.first.charAt(_this.first.length - (3 * o - 2)), o), ordersIt.next(_this.first.substring(_this.first.length - 3 * o, _this.first.length - (o - 1) * 3)).value].filter(function (x) {
              return x;
            }).join(" "),
            done: o > L
          };
        }
      };
    }
  }, {
    key: _Symbol$toPrimitive,
    value: function value(hint) {
      if (hint === "string") {
        if (!+this.first) {
          return _base_json__WEBPACK_IMPORTED_MODULE_0__["NULL"];
        }

        return _toConsumableArray(this).filter(function (x) {
          return x;
        }).reverse().join(" ").replace(/\S/, function (l) {
          return l.toUpperCase();
        });
      }
    }
  }]);

  return TypewriterSum;
}();



/***/ }),

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

}]);
//# sourceMappingURL=main-bigint~main-sum.js.map