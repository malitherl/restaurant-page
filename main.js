/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const webpage = document.getElementById(\"content\"); \r\nwebpage.setAttribute(\"class\", \"demo\");\r\n\r\nconst image = document.createElement(\"IMG\");\r\nimage.setAttribute(\"class\", \"bg\");\r\nimage.setAttribute(\"src\", \"https://cdn.pixabay.com/photo/2015/10/12/15/11/cafe-984275_960_720.jpg\");\r\nimage.setAttribute(\"alt\", \"a picuture of a cafe\");\r\nwebpage.appendChild(image);\r\n\r\nconst textArea = document.createElement(\"DIV\");\r\ntextArea.setAttribute(\"id\", \"for-text\");\r\ntextArea.setAttribute(\"class\", \"for-content\");\r\n\r\ntextArea.style.display= \"flex\";\r\ntextArea.style.justifyContent= \"center\";\r\ntextArea.style.padding= \"20px\";\r\n\r\ntextArea.style.margin = \"5px\";\r\ntextArea.style.fontFamily= \"Georgia, Garamond,Times New Roman\";\r\ntextArea.style.color = \"white\";\r\n\r\nconst restaurantTitling = document.createElement(\"h1\");\r\nrestaurantTitling.style.padding= \"25px\";\r\nrestaurantTitling.style.marginLeft= \"10px\";\r\nrestaurantTitling.style.borderRadius= \"25px\";\r\nrestaurantTitling.style.textAlign= \"Center\";\r\nrestaurantTitling.textContent= \"Workaday Cafe\";\r\n\r\n//styled in css now \r\nconst restaurantSubTitling= document.createElement(\"h2\");\r\nrestaurantSubTitling.style.padding= \"30px\";\r\nrestaurantSubTitling.style.textAlign= \"center\";\r\nrestaurantSubTitling.style.borderRadius= \"25px\";\r\nrestaurantSubTitling.textContent = \"About\";\r\nrestaurantSubTitling.style.marginRight= \"30px\";\r\nrestaurantSubTitling.style.marginLeft= \"30%\";\r\n\r\n\r\nconst restaurantSubTitling1= document.createElement(\"h2\");\r\nrestaurantSubTitling1.style.padding= \"30px\";\r\nrestaurantSubTitling1.style.marginRight= \"30px\";\r\nrestaurantSubTitling1.style.textAlign= \"center\";\r\nrestaurantSubTitling1.textContent = \"Menu\";\r\nrestaurantSubTitling1.style.marginRight= \"30px\";\r\n\r\nconst restaurantSubTitling2= document.createElement(\"h2\");\r\nrestaurantSubTitling2.style.padding= \"30px\";\r\nrestaurantSubTitling2.style.textAlign= \"center\";\r\nrestaurantSubTitling2.textContent = \"Contact Us\";\r\nrestaurantSubTitling2.style.marginRight= \"30px\";\r\n\r\n\r\nconst aboutPage = document.createElement(\"DIV\");\r\naboutPage.setAttribute(\"id\", \"about\");\r\naboutPage.style.display =\"none\";\r\nconst aboutTextTitle = document.createElement(\"h2\");\r\naboutTextTitle.textContent = \"About Us\";\r\nconst aboutTextBlurb = document.createElement(\"p\");\r\n\r\n\r\nconst menuPage = document.createElement(\"DIV\");\r\nmenuPage.setAttribute(\"id\", \"about\");\r\nmenuPage.style.display =\"none\";\r\nconst menuTextTitle = document.createElement(\"h2\");\r\nmenuTextTitle.textContent = \"Contact Us\";\r\nconst menuTextBlurb = document.createElement(\"p\");\r\nmenuTextBlurb.textContent = \"tomsrestaurant@yahoo.com\";\r\nconst menuTextBlurb1 = document.createElement(\"p\");\r\nmenuTextBlurb1.textContent = \"+1-212-864-6137\";\r\n\r\n\r\nconst contactPage = document.createElement(\"DIV\");\r\ncontactPage.setAttribute(\"id\", \"about\");\r\ncontactPage.style.display =\"none\";\r\n\r\n\r\ntextArea.appendChild(restaurantTitling);\r\n\r\n\r\n\r\nwebpage.appendChild(textArea);\r\n\r\n\r\nfunction openTab(tabName) {\r\n    var i;\r\n    var x = document.getElementsByClassName(\"tab\");\r\n    for (i = 0; i < x.length; i++) {\r\n      x[i].style.display = \"none\";\r\n    }\r\n    document.getElementById(tabName).style.display = \"block\";\r\n  }\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;