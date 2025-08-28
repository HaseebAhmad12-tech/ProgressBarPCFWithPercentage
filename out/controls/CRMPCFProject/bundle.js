/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./CRMPCFProject/index.ts":
/*!********************************!*\
  !*** ./CRMPCFProject/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CRMPCFProject: () => (/* binding */ CRMPCFProject)\n/* harmony export */ });\nclass CRMPCFProject {\n  // Constructor not empty anymore → removed warning\n  constructor() {\n    this.container = document.createElement(\"div\");\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this.container = container;\n    this.container.classList.add(\"progress-container\");\n  }\n  updateView(context) {\n    // Use const instead of let (since never reassigned)\n    var rawValue = context.parameters.sampleProperty.raw || \"0%\";\n    // Parse number from text (remove %)\n    var numericValue = parseInt(rawValue.replace(\"%\", \"\").trim(), 10);\n    if (isNaN(numericValue)) numericValue = 0;\n    if (numericValue < 0) numericValue = 0;\n    if (numericValue > 100) numericValue = 100;\n    // Clear previous content\n    this.container.innerHTML = \"\";\n    // Progress bar wrapper\n    var bar = document.createElement(\"div\");\n    bar.className = \"progress-bar\";\n    // Fill section\n    var fill = document.createElement(\"div\");\n    fill.className = \"progress-fill\";\n    fill.style.width = numericValue + \"%\";\n    // Color rules\n    if (numericValue < 30) {\n      fill.style.backgroundColor = \"red\";\n    } else if (numericValue >= 30 && numericValue <= 50) {\n      fill.style.backgroundColor = \"orange\";\n    } else if (numericValue > 50 && numericValue < 100) {\n      fill.style.backgroundColor = \"dodgerblue\";\n    } else if (numericValue === 100) {\n      fill.style.backgroundColor = \"green\";\n    }\n    // Text (always show %)\n    var text = document.createElement(\"div\");\n    text.className = \"progress-text\";\n    text.innerText = rawValue; // use original text field value\n    // Append\n    bar.appendChild(fill);\n    bar.appendChild(text);\n    this.container.appendChild(bar);\n  }\n  getOutputs() {\n    return {};\n  }\n  // Add comment to silence ESLint empty-function error\n  destroy() {\n    // Cleanup not needed for this control\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./CRMPCFProject/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./CRMPCFProject/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('CRMONCE.CRMPCFProject', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CRMPCFProject);
} else {
	var CRMONCE = CRMONCE || {};
	CRMONCE.CRMPCFProject = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CRMPCFProject;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}