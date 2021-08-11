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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ \"./src/module1.js\");\n/* harmony import */ var _module2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2.js */ \"./src/module2.js\");\n/* harmony import */ var _module3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3.js */ \"./src/module3.js\");\n/* harmony import */ var _module4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module4.js */ \"./src/module4.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_module1_js__WEBPACK_IMPORTED_MODULE_0__.generate)();\r\n\r\nfunction tabs(i){\r\n  switch(i){\r\n    case 0:\r\n      (0,_module2_js__WEBPACK_IMPORTED_MODULE_1__.displaySort)();\r\n      break;\r\n    case 1: \r\n      (0,_module3_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();\r\n      break;\r\n    case 2: \r\n      (0,_module4_js__WEBPACK_IMPORTED_MODULE_3__.displayContact)();\r\n      break;\r\n  }\r\n}\r\nconst listButtons = document.getElementsByTagName(\"BUTTON\");\r\nconsole.log(listButtons);\r\n  for(let i =0; i<listButtons.length ; i++){\r\n    listButtons[i].addEventListener(\"click\", function(){\r\n      let msg = document.getElementById(\"msg\");\r\n      if (msg === null){\r\n        tabs(i);\r\n    } else {\r\n      msg.remove();\r\n      tabs(i);\r\n    }\r\n    });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => (/* binding */ generate)\n/* harmony export */ });\n\r\nfunction generate() {\r\n        const webpage = document.getElementById(\"content\"); \r\n        webpage.setAttribute(\"class\", \"demo\");\r\n\r\n        const image = document.createElement(\"IMG\");\r\n        image.setAttribute(\"class\", \"bg\");\r\n        image.setAttribute(\"src\", \"https://cdn.pixabay.com/photo/2015/10/12/15/11/cafe-984275_960_720.jpg\");\r\n        image.setAttribute(\"alt\", \"a picuture of a cafe\");\r\n        webpage.appendChild(image);\r\n\r\n        const textArea = document.createElement(\"DIV\");\r\n        textArea.setAttribute(\"id\", \"for-text\");\r\n        textArea.setAttribute(\"class\", \"for-content\");\r\n\r\n        textArea.style.display= \"flex\";\r\n        textArea.style.justifyContent= \"center\";\r\n        textArea.style.padding= \"20px\";\r\n\r\n        textArea.style.margin = \"5px\";\r\n        textArea.style.fontFamily= \"Georgia, Garamond,Times New Roman\";\r\n        textArea.style.color = \"white\";\r\n\r\n        const restaurantTitling = document.createElement(\"h1\");\r\n        restaurantTitling.style.padding= \"25px\";\r\n        restaurantTitling.style.marginLeft= \"0px\";\r\n        restaurantTitling.style.marginRight= \"20%\";\r\n\r\n        restaurantTitling.style.textAlign= \"Center\";\r\n        restaurantTitling.textContent= \"Workaday Cafe\";\r\n\r\n        const aboutPage = document.createElement(\"DIV\");\r\n        aboutPage.setAttribute(\"id\", \"about\");\r\n        aboutPage.style.display =\"none\";\r\n        const aboutTextTitle = document.createElement(\"h2\");\r\n        aboutTextTitle.textContent = \"About Us\";\r\n        const aboutTextBlurb = document.createElement(\"p\");\r\n\r\n\r\n        const menuPage = document.createElement(\"DIV\");\r\n\r\n        //divs with ids cannot be returned bc they don't have values\r\n        const menuTextTitle = document.createElement(\"h2\");\r\n        menuTextTitle.setAttribute(\"id\", \"menu\");\r\n        menuTextTitle.textContent = \"Menu\";\r\n        const menuTextBlurb = document.createElement(\"p\");\r\n        menuTextBlurb.textContent = \"Our current selection: \"\r\n        const menu = document.createElement(\"IMG\");\r\n        menu.setAttribute(\"src\" ,\"https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\r\n        menu.style.display= \"none\";\r\n        menuPage.appendChild(menu);\r\n\r\n        const menuTextBlurb1 = document.createElement(\"p\");\r\n        menuTextBlurb1.textContent = \"+1-212-864-6137\";\r\n\r\n\r\n        const contactPage = document.createElement(\"DIV\");\r\n        contactPage.setAttribute(\"id\", \"contact\");\r\n        contactPage.style.display =\"none\";\r\n\r\n        textArea.appendChild(restaurantTitling);\r\n\r\n        textArea.appendChild(menuPage);\r\n        //div to hold all the links \r\n\r\n        const buttons = document.createElement(\"DIV\");\r\n\r\n        const barButton1 = document.createElement(\"button\");\r\n        barButton1.setAttribute(\"class\",\"barButton\");\r\n        barButton1.style.marginLeft = \"30px\";\r\n        barButton1.textContent = \"About\";\r\n\r\n        const barButton2 = document.createElement(\"button\");\r\n        barButton2.setAttribute(\"class\",\"barButton\");\r\n        barButton2.textContent = \"Menu\";\r\n\r\n        //barButton2.onclick(openTab(\"menu\"));\r\n\r\n        const barButton3 = document.createElement(\"button\");\r\n        barButton3.setAttribute(\"class\",\"barButton\");\r\n        barButton3.textContent = \"Contact Us\";\r\n\r\n        \r\n        const pageContent = document.createElement(\"DIV\");\r\n        pageContent.setAttribute(\"id\", \"word\");\r\n        pageContent.setAttribute(\"class\", \"text\");\r\n        buttons.appendChild(barButton1);\r\n        buttons.appendChild(barButton2);\r\n        buttons.appendChild(barButton3);\r\n\r\n        textArea.appendChild(buttons);\r\n\r\n        webpage.appendChild(textArea);\r\n        webpage.appendChild(pageContent);\r\n    }\r\n        \n\n//# sourceURL=webpack://restaurant-page/./src/module1.js?");

/***/ }),

/***/ "./src/module2.js":
/*!************************!*\
  !*** ./src/module2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySort\": () => (/* binding */ displaySort)\n/* harmony export */ });\n//here we write the module to load separate divs for the page content \r\n\r\nfunction displaySort() {\r\n    const webpage = document.getElementById(\"content\");\r\n    const wordDiv = document.createElement(\"DIV\");\r\n    wordDiv.setAttribute(\"class\", \"for-content\");\r\n    wordDiv.setAttribute(\"id\", \"msg\");\r\n        const aboutUs = document.createElement(\"P\");\r\n        aboutUs.textContent = \"Hello and welcome to our website! We at the Workaday Cafe are just about a family, and that means we believe in paying our employees liveable wages\"\r\n        + \" and providing plenty of benefits along with their wages. In this time of great of uncertainty, we will continue to strive to treat our employees as human beings,\" \r\n        +\" and we encourage you, the customer, to show them patience and understanding. We reserve our rights to be selective in who we serve, and that includes following all mask mandates.\";\r\n        \r\n        const title = document.createElement(\"h4\");\r\n        title.textContent = \"Business Hours: \";\r\n\r\n        const times = document.createElement(\"p\");\r\n        times.textContent = \"Monday-Friday: 08:00AM - 7:00PM\"; \r\n        const times1 = document.createElement(\"p\");\r\n        times1.textContent= \"Saturday and Sunday: 9AM-5:00PM\";\r\n        wordDiv.style.display = \"block\";\r\n        wordDiv.style.color= \"white\";\r\n\r\n        wordDiv.appendChild(aboutUs);\r\n        wordDiv.appendChild(title);\r\n        wordDiv.appendChild(times);\r\n        wordDiv.appendChild(times1);\r\n        webpage.style.display = \"block\";\r\n        webpage.appendChild(wordDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/module2.js?");

/***/ }),

/***/ "./src/module3.js":
/*!************************!*\
  !*** ./src/module3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenu\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nfunction displayMenu(){\r\n    \r\n    const webpage = document.getElementById(\"content\");\r\n    const menuDiv = document.createElement(\"DIV\");\r\n    menuDiv.setAttribute(\"class\", \"for-content\");\r\n    menuDiv.setAttribute(\"id\", \"msg\");\r\n    const menuTextTitle = document.createElement(\"h2\");\r\n    menuTextTitle.setAttribute(\"id\", \"menu\");\r\n    menuTextTitle.textContent = \"Menu\";\r\n    menuTextTitle.style.color = \"white\";\r\n    \r\n    const menu = document.createElement(\"IMG\");\r\n    menu.setAttribute(\"src\" ,\"https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\r\n    menu.setAttribute(\"width\", \"960\");\r\n    menu.setAttribute(\"height\", \"500\");\r\n    \r\n    \r\n    menuDiv.appendChild(menuTextTitle);\r\n    menuDiv.appendChild(menu);\r\n    webpage.appendChild(menuDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/module3.js?");

/***/ }),

/***/ "./src/module4.js":
/*!************************!*\
  !*** ./src/module4.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContact\": () => (/* binding */ displayContact)\n/* harmony export */ });\nfunction displayContact(){\r\n    const webpage = document.getElementById(\"content\");\r\n    const contactDiv = document.createElement(\"DIV\");\r\n    contactDiv.setAttribute(\"class\", \"for-content\");\r\n    contactDiv.setAttribute(\"id\", \"msg\");\r\n        const title = document.createElement(\"h4\");\r\n        title.textContent = \"Contact Information: \";\r\n\r\n        const times = document.createElement(\"p\");\r\n        times.textContent = \"definitelyARealEmail@email.com\"; \r\n        const times1 = document.createElement(\"p\");\r\n        times1.textContent= \"555-555-5555\";\r\n        contactDiv.style.display = \"block\";\r\n        contactDiv.style.color= \"white\";\r\n\r\n        contactDiv.appendChild(title);\r\n        contactDiv.appendChild(times);\r\n        contactDiv.appendChild(times1);\r\n        webpage.style.display = \"block\";\r\n        webpage.appendChild(contactDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/module4.js?");

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