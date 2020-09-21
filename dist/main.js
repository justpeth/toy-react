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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./src/toy-react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_ToyReact$Component) {\n  _inherits(App, _ToyReact$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 1,\n      b: 2\n    };\n    _this.buttonClickHandle = _this.buttonClickHandle.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"buttonClickHandle\",\n    value: function buttonClickHandle() {\n      this.setState({\n        a: this.state.a + 1\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          a = _this$state.a,\n          b = _this$state.b;\n      return _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, a.toString()), _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, b.toString()), _toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n        onClick: buttonClickHandle\n      }));\n    }\n  }]);\n\n  return App;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./src/toy-react/index.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/toy-react/component.js":
/*!************************************!*\
  !*** ./src/toy-react/component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/toy-react/utils.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/toy-react/constant.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.children = [];\n    this._root = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.childNodes.push(component);\n    }\n  }, {\n    key: _constant__WEBPACK_IMPORTED_MODULE_1__[\"RENDER_TO_DOM\"],\n    value: function value(range) {\n      this._range = range;\n      this.render()[_constant__WEBPACK_IMPORTED_MODULE_1__[\"RENDER_TO_DOM\"]](range);\n    }\n  }, {\n    key: \"reRender\",\n    value: function reRender() {\n      var oldRange = this._range;\n      var range = document.createRange();\n      range.setStart(oldRange.startContainer, oldRange.startOffset);\n      range.setEnd(oldRange.startContainer, oldRange.startOffset);\n      this[_constant__WEBPACK_IMPORTED_MODULE_1__[\"RENDER_TO_DOM\"]](range);\n      oldRange.setStart(range.endContainer, range.endOffset);\n      oldRange.deleteContents();\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNullOrObject\"])(this.state)) {\n        this.state = newState;\n        this.reRender();\n        return;\n      }\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"merge\"])(this.state, newState);\n      this.render();\n    }\n  }]);\n\n  return Component;\n}();\n\n\n\n//# sourceURL=webpack:///./src/toy-react/component.js?");

/***/ }),

/***/ "./src/toy-react/constant.js":
/*!***********************************!*\
  !*** ./src/toy-react/constant.js ***!
  \***********************************/
/*! exports provided: RENDER_TO_DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RENDER_TO_DOM\", function() { return RENDER_TO_DOM; });\nvar RENDER_TO_DOM = Symbol('renderToDom');\n\n//# sourceURL=webpack:///./src/toy-react/constant.js?");

/***/ }),

/***/ "./src/toy-react/createElement.js":
/*!****************************************!*\
  !*** ./src/toy-react/createElement.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ \"./src/toy-react/wrapper.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar insertChildren = function insertChildren(children, element) {\n  var _iterator = _createForOfIteratorHelper(children),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var child = _step.value;\n\n      if (typeof children === 'string') {\n        child = new _wrapper__WEBPACK_IMPORTED_MODULE_0__[\"TextWrapper\"](child);\n      }\n\n      if (child === null) {\n        continue;\n      }\n\n      if (_typeof(children) === 'object' && child instanceof Array) {\n        insertChildren(child, element);\n      } else {\n        element.appendChild(child);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\nvar createElement = function createElement(type, attributes) {\n  var e = typeof type === 'string' ? new _wrapper__WEBPACK_IMPORTED_MODULE_0__[\"ElementWrapper\"](type) : new type();\n  console.log(e);\n  debugger;\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children, e);\n  return e;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/toy-react/createElement.js?");

/***/ }),

/***/ "./src/toy-react/index.js":
/*!********************************!*\
  !*** ./src/toy-react/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/toy-react/component.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/toy-react/render.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./src/toy-react/createElement.js\");\n\n\n\nvar ToyReact = {\n  Component: _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render: _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  createElement: _createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToyReact);\n\n//# sourceURL=webpack:///./src/toy-react/index.js?");

/***/ }),

/***/ "./src/toy-react/render.js":
/*!*********************************!*\
  !*** ./src/toy-react/render.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/toy-react/constant.js\");\n\n\nvar render = function render(component, parentElement) {\n  var range = document.createRange();\n  range.setStart(parentElement, 0);\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  range.deleteContents();\n  component[_constant__WEBPACK_IMPORTED_MODULE_0__[\"RENDER_TO_DOM\"]](range);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/toy-react/render.js?");

/***/ }),

/***/ "./src/toy-react/utils.js":
/*!********************************!*\
  !*** ./src/toy-react/utils.js ***!
  \********************************/
/*! exports provided: isNullOrObject, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNullOrObject\", function() { return isNullOrObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return merge; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isNullOrObject = function isNullOrObject(val) {\n  return val === null || _typeof(val) !== 'object';\n};\nvar merge = function merge(oldVal, newVal) {\n  for (var p in newVal) {\n    if (isNullOrObject(oldVal[p])) {\n      oldVal[p] = newVal[p];\n    } else {\n      merge(oldVal[p], newVal[p]);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/toy-react/utils.js?");

/***/ }),

/***/ "./src/toy-react/wrapper.js":
/*!**********************************!*\
  !*** ./src/toy-react/wrapper.js ***!
  \**********************************/
/*! exports provided: ElementWrapper, TextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ElementWrapper\", function() { return ElementWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextWrapper\", function() { return TextWrapper; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/toy-react/constant.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(tagName) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(tagName);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // 绑定事件\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        var eventName = RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLocaleLowerCase();\n        });\n        this.root.addEventListener(eventName, value);\n        return;\n      } // 设置类名\n\n\n      if (name === 'className') {\n        this.root.setAttribute('class', value);\n        return;\n      } // 普通attributes设置\n\n\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      var range = document.createRange();\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length);\n      component[_constant__WEBPACK_IMPORTED_MODULE_0__[\"RENDER_TO_DOM\"]](range);\n    }\n  }, {\n    key: _constant__WEBPACK_IMPORTED_MODULE_0__[\"RENDER_TO_DOM\"],\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(text) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(TextWrapper, [{\n    key: _constant__WEBPACK_IMPORTED_MODULE_0__[\"RENDER_TO_DOM\"],\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\n//# sourceURL=webpack:///./src/toy-react/wrapper.js?");

/***/ })

/******/ });