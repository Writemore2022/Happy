/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _a1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a1.js */ \"./src/a1.js\");\n/* harmony import */ var _a2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a2.js */ \"./src/a2.js\");\n\r\n\r\n\r\nconst number = _a1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + _a2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/a.js?");

/***/ }),

/***/ "./src/a1.js":
/*!*******************!*\
  !*** ./src/a1.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst number1 = 2;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number1);\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/a1.js?");

/***/ }),

/***/ "./src/a2.js":
/*!*******************!*\
  !*** ./src/a2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst number2 = 8;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number2);\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/a2.js?");

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst number = 20;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/b.js?");

/***/ }),

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst number = 30;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/c.js?");

/***/ }),

/***/ "./src/webpack.js":
/*!************************!*\
  !*** ./src/webpack.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ \"./src/b.js\");\n/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c.js */ \"./src/c.js\");\n\r\n\r\n\r\nconsole.log(_a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nconsole.log(_b_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nconsole.log(_c_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\nconst $buttonA = document.querySelector('#button-a');\r\nconst $buttonB = document.querySelector('#button-b');\r\nconst $buttonC = document.querySelector('#button-c');\r\nconst $display = document.querySelector('#display');\r\n\r\n$buttonA.addEventListener('click', function () {\r\n  $display.textContent = _a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n});\r\n\r\n$buttonB.addEventListener('click', function () {\r\n  $display.textContent = _b_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n});\r\n\r\n$buttonC.addEventListener('click', function () {\r\n  $display.textContent = _c_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n});\r\n\n\n//# sourceURL=webpack://web-pack-practice/./src/webpack.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webpack.js");
/******/ 	
/******/ })()
;