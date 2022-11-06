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

/***/ "./src/Box.js":
/*!********************!*\
  !*** ./src/Box.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial()\r\nconst cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cube);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Box.js?");

/***/ }),

/***/ "./src/Camera.js":
/*!***********************!*\
  !*** ./src/Camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camera);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Camera.js?");

/***/ }),

/***/ "./src/Light.js":
/*!**********************!*\
  !*** ./src/Light.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x404040)\r\nconst directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 0.5)\r\nlight.add(directionalLight)\r\ndirectionalLight.position.set(1, 2, 3)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Light.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGL1Renderer({ antialias: true })\r\nrenderer.setSize(window.innerWidth, window.innerHeight)\r\ndocument.body.appendChild(renderer.domElement)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Renderer.js?");

/***/ }),

/***/ "./src/Resize.js":
/*!***********************!*\
  !*** ./src/Resize.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ \"./src/Camera.js\");\n\r\n\r\nclass Resize {\r\n    constructor() {\r\n        this.renderer = null\r\n    }\r\n    start(renderer) {\r\n        this.renderer = renderer\r\n        window.addEventListener('resize', this.resize.bind(this))\r\n    }\r\n    stop() {\r\n        window.removeEventListener('resize', this.resize.bind(this))\r\n    }\r\n    resize() {\r\n        _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aspect = window.innerWidth / window.innerHeight\r\n        _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateProjectionMatrix()\r\n        this.renderer.setSize(window.innerWidth, window.innerHeight)\r\n    }\r\n}\r\n\r\nconst resize = new Resize()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resize);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Resize.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scene);\n\n//# sourceURL=webpack://belajar-thee-js/./src/Scene.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./src/Box.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/Camera.js\");\n/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Light */ \"./src/Light.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _Resize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resize */ \"./src/Resize.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"].add(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"].add(_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].position.set(1, 2, 5)\r\n_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lookAt(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"].position)\r\n_Resize__WEBPACK_IMPORTED_MODULE_4__[\"default\"].start(_Renderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n_Renderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render(_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\nsetInterval(() => {\r\n    _Renderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render(_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n}, 1000 / 30)\n\n//# sourceURL=webpack://belajar-thee-js/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;