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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ \"./src/module1.js\");\n\r\n\r\n\r\n\r\n(0,_module1_js__WEBPACK_IMPORTED_MODULE_0__.generate)();\r\nconst listButtons = document.getElementsByTagName(\"BUTTON\");\r\nconst text = document.getElementById(\"word\");\r\nconsole.log(listButtons);\r\nfor(let i =0; i<listButtons.length ; i++){\r\n  listButtons[i].addEventListener(\"click\", function(){\r\n    \r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => (/* binding */ generate)\n/* harmony export */ });\n\r\nfunction generate() {\r\n        const webpage = document.getElementById(\"content\"); \r\n        webpage.setAttribute(\"class\", \"demo\");\r\n\r\n        const image = document.createElement(\"IMG\");\r\n        image.setAttribute(\"class\", \"bg\");\r\n        image.setAttribute(\"src\", \"https://cdn.pixabay.com/photo/2015/10/12/15/11/cafe-984275_960_720.jpg\");\r\n        image.setAttribute(\"alt\", \"a picuture of a cafe\");\r\n        webpage.appendChild(image);\r\n\r\n        const textArea = document.createElement(\"DIV\");\r\n        textArea.setAttribute(\"id\", \"for-text\");\r\n        textArea.setAttribute(\"class\", \"for-content\");\r\n\r\n        textArea.style.display= \"flex\";\r\n        textArea.style.justifyContent= \"center\";\r\n        textArea.style.padding= \"20px\";\r\n\r\n        textArea.style.margin = \"5px\";\r\n        textArea.style.fontFamily= \"Georgia, Garamond,Times New Roman\";\r\n        textArea.style.color = \"white\";\r\n\r\n        const restaurantTitling = document.createElement(\"h1\");\r\n        restaurantTitling.style.padding= \"25px\";\r\n        restaurantTitling.style.marginLeft= \"0px\";\r\n        restaurantTitling.style.marginRight= \"20%\";\r\n\r\n        restaurantTitling.style.textAlign= \"Center\";\r\n        restaurantTitling.textContent= \"Workaday Cafe\";\r\n\r\n        const aboutPage = document.createElement(\"DIV\");\r\n        aboutPage.setAttribute(\"id\", \"about\");\r\n        aboutPage.style.display =\"none\";\r\n        const aboutTextTitle = document.createElement(\"h2\");\r\n        aboutTextTitle.textContent = \"About Us\";\r\n        const aboutTextBlurb = document.createElement(\"p\");\r\n\r\n\r\n        const menuPage = document.createElement(\"DIV\");\r\n\r\n        //divs with ids cannot be returned bc they don't have values\r\n        const menuTextTitle = document.createElement(\"h2\");\r\n        menuTextTitle.setAttribute(\"id\", \"menu\");\r\n        menuTextTitle.textContent = \"Menu\";\r\n        const menuTextBlurb = document.createElement(\"p\");\r\n        menuTextBlurb.textContent = \"Our current selection: \"\r\n        const menu = document.createElement(\"IMG\");\r\n        menu.setAttribute(\"src\" ,\"https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\r\n        menu.style.display= \"none\";\r\n        menuPage.appendChild(menu);\r\n\r\n        const menuTextBlurb1 = document.createElement(\"p\");\r\n        menuTextBlurb1.textContent = \"+1-212-864-6137\";\r\n\r\n\r\n        const contactPage = document.createElement(\"DIV\");\r\n        contactPage.setAttribute(\"id\", \"contact\");\r\n        contactPage.style.display =\"none\";\r\n\r\n        textArea.appendChild(restaurantTitling);\r\n\r\n        textArea.appendChild(menuPage);\r\n        //div to hold all the links \r\n\r\n        const buttons = document.createElement(\"DIV\");\r\n\r\n        const barButton1 = document.createElement(\"button\");\r\n        barButton1.setAttribute(\"class\",\"barButton\");\r\n        barButton1.style.marginLeft = \"30px\";\r\n        barButton1.textContent = \"About\";\r\n\r\n        const barButton2 = document.createElement(\"button\");\r\n        barButton2.setAttribute(\"class\",\"barButton\");\r\n        barButton2.textContent = \"Menu\";\r\n\r\n        //barButton2.onclick(openTab(\"menu\"));\r\n\r\n        const barButton3 = document.createElement(\"button\");\r\n        barButton3.setAttribute(\"class\",\"barButton\");\r\n        barButton3.textContent = \"Contact Us\";\r\n\r\n        \r\n        const pageContent = document.createElement(\"DIV\");\r\n        pageContent.setAttribute(\"id\", \"word\");\r\n        buttons.appendChild(barButton1);\r\n        buttons.appendChild(barButton2);\r\n        buttons.appendChild(barButton3);\r\n\r\n        textArea.appendChild(buttons);\r\n\r\n        webpage.appendChild(textArea);\r\n        webpage.appendChild(pageContent);\r\n    }\r\n        \n\n//# sourceURL=webpack://restaurant-page/./src/module1.js?");

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