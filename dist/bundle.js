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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/three/build/three.module.js */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.js */ \"./js/images.js\");\n/* harmony import */ var _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vertexShader.glsl */ \"./js/shaders/vertexShader.glsl\");\n/* harmony import */ var _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/fragmentShader.glsl */ \"./js/shaders/fragmentShader.glsl\");\n// import * as THREE from 'three';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass app3 {\r\n    constructor() {\r\n        this.container = document.querySelector('main');\r\n        this.scene = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Scene();\r\n        this.sceneBg = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Scene();\r\n        this.mouse = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Vector2(0.5, 0.5);\r\n        this.prevMouse = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Vector2(0.5, 0.5);\r\n        this.isPlay = true;\r\n        this.time = 0;\r\n        this.currentWave = 0;\r\n\r\n\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.baseTexture();\r\n        this.mousePosition();\r\n        this.createCamera();\r\n        this.createRenderer();\r\n        this.createMesh();\r\n        this.render();\r\n    }\r\n\r\n    get viewport(){\r\n        let width = window.innerWidth;\r\n        let height = window.innerHeight;\r\n        let aspectRatio = width / height;\r\n\r\n        return{\r\n            width,\r\n            height,\r\n            aspectRatio\r\n        }\r\n    }\r\n\r\n    baseTexture() {\r\n            this.baseTex = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderTarget(this.viewport.width, this.viewport.height, {\r\n            minFilter: _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.LinearFilter,\r\n            magFilter: _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.LinearFilter,\r\n            format: _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.RGBFormat\r\n        });\r\n\r\n        return\r\n    }\r\n\r\n    mousePosition() {\r\n            window.addEventListener('mousemove', (event) => {\r\n            this.mouse.x = event.clientX - this.viewport.width / 2;\r\n            this.mouse.y = this.viewport.height / 2 - event.clientY;\r\n        });\r\n    }\r\n\r\n    createCamera() {\r\n        let perspective = 1000;\r\n        let fov = (180 * (2 * Math.atan(this.viewport.height / 2 / perspective))) / Math.PI;\r\n        this.camera = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);\r\n        this.camera.position.z = perspective;\r\n    }\r\n\r\n    createRenderer() {\r\n        this.renderer = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\r\n            antialias: true,\r\n            alpha: true\r\n        });\r\n        this.renderer.setClearColor(0x000000);\r\n        this.renderer.setSize(this.viewport.width, this.viewport.height);\r\n        this.renderer.setPixelRatio(window.devicePixelRatio);\r\n        this.container.appendChild(this.renderer.domElement);\r\n    }\r\n    createMesh() {\r\n\r\n        this.geometryFull = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry( this.viewport.width, this.viewport.height, 1, 1);\r\n        this.materialFull = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.ShaderMaterial({\r\n            uniforms: {\r\n                uColor: { value: new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Vector4(0.0, 0.5, 1.0, 1.0) }, // 海の色のような青\r\n                uDisplacement: { value: this.baseTex.texture }, // 初期化を確認\r\n            },\r\n            vertexShader: _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n            fragmentShader: _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        });\r\n\r\n        this.screen = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.geometryFull, this.materialFull);\r\n        this.sceneBg.add(this.screen);\r\n\r\n        this.max = 50;\r\n        this.meshes = [];\r\n        let texture = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageRipple);\r\n        let geometry = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(50, 50, 1, 1);\r\n\r\n        for (let i = 0; i < this.max; i++) {\r\n\r\n            let material = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({\r\n                color: 0xffffff,\r\n                map: texture,\r\n                transparent: true,\r\n                blending: _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.AdditiveBlending,\r\n                depathTest: false,\r\n                depathWrite: false\r\n            });\r\n\r\n            let mesh = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\r\n            mesh.rotation.z = Math.random() * 2 * Math.PI;\r\n            mesh.visible = false;\r\n\r\n\r\n\r\n            this.meshes.push(mesh);\r\n            this.scene.add(mesh);\r\n        }\r\n    }\r\n\r\n    stop() {\r\n        this.isPlay = false;\r\n    }\r\n\r\n    start() {\r\n        if(!this.isPlay){\r\n            this.isPlay = true;\r\n            this.render();\r\n        }\r\n    }\r\n\r\n    setNewWave(x , y ,index) {\r\n\r\n        let mesh = this.meshes[index];\r\n        mesh.visible = true;\r\n        mesh.position.x = x;\r\n        mesh.position.y = y;\r\n        mesh.material.opacity = 1;\r\n        mesh.scale.x = 1;\r\n        mesh.scale.y = 1;\r\n\r\n    }\r\n\r\n    trackMousePos() {\r\n        if( Math.abs(this.mouse.x - this.prevMouse.x) < 4 && Math.abs(this.mouse.y - this.prevMouse.y) < 4){\r\n        } else {\r\n            this.setNewWave( this.mouse.x , this.mouse.y , this.currentWave );\r\n            this.currentWave =  (this.currentWave + 1) % this.max;\r\n        }\r\n\r\n        this.prevMouse.x = this.mouse.x;\r\n        this.prevMouse.y = this.mouse.y;\r\n    }\r\n\r\n    render() {\r\n        if (!this.isPlay) {\r\n            return;\r\n        }\r\n        this.trackMousePos();\r\n        this.time += 0.01;\r\n\r\n        this.renderer.setRenderTarget(this.baseTex);\r\n        this.renderer.render(this.scene, this.camera);\r\n\r\n        this.materialFull.uniforms.uDisplacement.value = this.baseTex.texture;\r\n        this.renderer.setRenderTarget(null);\r\n        this.renderer.clear();\r\n        this.renderer.render(this.sceneBg, this.camera);\r\n\r\n        requestAnimationFrame(this.render.bind(this));\r\n\r\n        this.meshes.forEach((mesh, index) => {\r\n            mesh.rotation.z += 0.01;\r\n            mesh.material.opacity *= 0.9;\r\n            if (mesh.material.opacity < 0.001) {\r\n                mesh.visible = false;\r\n            }\r\n            mesh.scale.x =  mesh.scale.x + 0.2;\r\n            mesh.scale.y = mesh.scale.y + 0.2;\r\n        });\r\n    }\r\n\r\n\r\n    lerp(a, b, n) {\r\n        return (1 - n) * a + n * b;\r\n    }\r\n\r\n}\r\n\r\nnew app3();\r\n\n\n//# sourceURL=webpack://dev/./js/app.js?");

/***/ }),

/***/ "./js/images.js":
/*!**********************!*\
  !*** ./js/images.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_ripple_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/ripple.png */ \"./img/ripple.png\");\n/* harmony import */ var _img_img02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/img02.jpg */ \"./img/img02.jpg\");\n/* harmony import */ var _img_img03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/img03.jpg */ \"./img/img03.jpg\");\n/* harmony import */ var _img_img04_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/img04.jpg */ \"./img/img04.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst images = {\r\n    imageRipple: _img_ripple_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);\n\n//# sourceURL=webpack://dev/./js/images.js?");

/***/ }),

/***/ "./img/img02.jpg":
/*!***********************!*\
  !*** ./img/img02.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img02.jpg\");\n\n//# sourceURL=webpack://dev/./img/img02.jpg?");

/***/ }),

/***/ "./img/img03.jpg":
/*!***********************!*\
  !*** ./img/img03.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img03.jpg\");\n\n//# sourceURL=webpack://dev/./img/img03.jpg?");

/***/ }),

/***/ "./img/img04.jpg":
/*!***********************!*\
  !*** ./img/img04.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img04.jpg\");\n\n//# sourceURL=webpack://dev/./img/img04.jpg?");

/***/ }),

/***/ "./img/ripple.png":
/*!************************!*\
  !*** ./img/ripple.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ripple.png\");\n\n//# sourceURL=webpack://dev/./img/ripple.png?");

/***/ }),

/***/ "./js/shaders/fragmentShader.glsl":
/*!****************************************!*\
  !*** ./js/shaders/fragmentShader.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#define GLSLIFY 1\\nvarying vec2 vUv;\\nuniform vec4 uColor;\\nuniform sampler2D uDisplacement;\\nfloat PI = 3.14159;\\n\\nvoid main() {\\n\\n    vec4 displacement = texture2D(uDisplacement, vUv);\\n    vec2 newUv = vUv + displacement.r * 0.05;\\n    vec4 textureColor = texture2D(uDisplacement, newUv);\\n    vec4 color = mix(uColor, textureColor, 0.5);\\n    gl_FragColor = color;\\n}\");\n\n//# sourceURL=webpack://dev/./js/shaders/fragmentShader.glsl?");

/***/ }),

/***/ "./js/shaders/vertexShader.glsl":
/*!**************************************!*\
  !*** ./js/shaders/vertexShader.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision mediump float;\\n#define GLSLIFY 1\\nvarying vec2 vUv;\\n\\nvoid main(){\\n    vUv = uv;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n}\");\n\n//# sourceURL=webpack://dev/./js/shaders/vertexShader.glsl?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;