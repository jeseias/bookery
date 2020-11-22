module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Header */ \"./src/styles/components/Header.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/jeseias/www/LTC/NextJS/topbooks/src/components/Header.tsx\";\n\n\n\nconst HeaderComponent = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaBars\"], {\n      size: 30,\n      color: \"#e4e6eb\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"SearchBox\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaSearch\"], {\n        size: 20,\n        color: \"#e4e6eb\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"InfoBox\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"10 books\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4PzhlYjUiXSwibmFtZXMiOlsiSGVhZGVyQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBeUIsR0FBRyxNQUFNO0FBQ3RDLHNCQUNFLHFFQUFDLGdFQUFEO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBUSxVQUFJLEVBQUUsRUFBZDtBQUFrQixXQUFLLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFLHFFQUFDLG1FQUFEO0FBQUEsOEJBQ0UscUVBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUUsRUFBaEI7QUFBb0IsYUFBSyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFPLFlBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBUUUscUVBQUMsaUVBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFjRCxDQWZEOztBQWlCZUEsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyLCBTZWFyY2hCb3gsIEluZm9Cb3ggfSBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBGYUJhcnMsIEZhU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmNvbnN0IEhlYWRlckNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWRlcj5cbiAgICAgIDxGYUJhcnMgc2l6ZT17MzB9IGNvbG9yPVwiI2U0ZTZlYlwiIC8+XG5cbiAgICAgIDxTZWFyY2hCb3g+XG4gICAgICAgIDxGYVNlYXJjaCBzaXplPXsyMH0gY29sb3I9XCIjZTRlNmViXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDwvU2VhcmNoQm94PlxuXG4gICAgICA8SW5mb0JveD5cbiAgICAgICAgPHA+MTAgYm9va3M8L3A+XG4gICAgICA8L0luZm9Cb3g+XG4gICAgPC9IZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n\nvar _jsxFileName = \"/home/jeseias/www/LTC/NextJS/topbooks/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"wrapper\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3JDLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxxREFBdEI7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVjRSxtSEFBTyxDQUFDQyxTQUFSLENBQWtCTCxHQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/auth/auth.enums.ts":
/*!**************************************!*\
  !*** ./src/redux/auth/auth.enums.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar UserActionTypes;\n\n(function (UserActionTypes) {\n  UserActionTypes[\"SIGN_IN_REQUEST\"] = \"SIGN_IN_REQUEST\";\n  UserActionTypes[\"SIGN_IN_SUCCESS\"] = \"SIGN_IN_SUCCESS\";\n  UserActionTypes[\"SIGN_IN_FAILURE\"] = \"SIGN_IN_FAILURE\";\n  UserActionTypes[\"SIGN_OUT_REQUEST\"] = \"SIGN_OUT_REQUEST\";\n})(UserActionTypes || (UserActionTypes = {}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserActionTypes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hdXRoLmVudW1zLnRzP2JkNmMiXSwibmFtZXMiOlsiVXNlckFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiO0lBQUtBLGU7O1dBQUFBLGU7QUFBQUEsaUI7QUFBQUEsaUI7QUFBQUEsaUI7QUFBQUEsaUI7R0FBQUEsZSxLQUFBQSxlOztBQU9VQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9yZWR1eC9hdXRoL2F1dGguZW51bXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIFVzZXJBY3Rpb25UeXBlcyB7XG4gIFNJR05fSU5fUkVRVUVTVCA9ICdTSUdOX0lOX1JFUVVFU1QnLFxuICBTSUdOX0lOX1NVQ0NFU1MgPSAnU0lHTl9JTl9TVUNDRVNTJyxcbiAgU0lHTl9JTl9GQUlMVVJFID0gJ1NJR05fSU5fRkFJTFVSRScsXG4gIFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckFjdGlvblR5cGVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/auth/auth.enums.ts\n");

/***/ }),

/***/ "./src/redux/auth/auth.reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/auth/auth.reducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.enums */ \"./src/redux/auth/auth.enums.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst INITIAL_STATE = {\n  login: '',\n  error: false,\n  isSignIn: false,\n  loading: false,\n  user: {\n    avatar_url: '',\n    bio: '',\n    email: '',\n    html_url: '',\n    name: ''\n  }\n};\n\nfunction authReducer(state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case _auth_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SIGN_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _auth_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SIGN_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        isSignIn: true\n      });\n\n    case _auth_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SIGN_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        isSignIn: true\n      });\n\n    case _auth_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SIGN_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null,\n        loading: false,\n        error: false,\n        isSignIn: false\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hdXRoLnJlZHVjZXJzLnRzPzk0MDQiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImxvZ2luIiwiZXJyb3IiLCJpc1NpZ25JbiIsImxvYWRpbmciLCJ1c2VyIiwiYXZhdGFyX3VybCIsImJpbyIsImVtYWlsIiwiaHRtbF91cmwiLCJuYW1lIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJVc2VyQWN0aW9uVHlwZXMiLCJTSUdOX0lOX1JFUVVFU1QiLCJTSUdOX0lOX1NVQ0NFU1MiLCJTSUdOX0lOX0ZBSUxVUkUiLCJTSUdOX09VVF9SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR0EsTUFBTUEsYUFBOEIsR0FBRztBQUNyQ0MsT0FBSyxFQUFFLEVBRDhCO0FBRXJDQyxPQUFLLEVBQUUsS0FGOEI7QUFHckNDLFVBQVEsRUFBRSxLQUgyQjtBQUlyQ0MsU0FBTyxFQUFFLEtBSjRCO0FBS3JDQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLEVBRFI7QUFFSkMsT0FBRyxFQUFFLEVBRkQ7QUFHSkMsU0FBSyxFQUFFLEVBSEg7QUFJSkMsWUFBUSxFQUFFLEVBSk47QUFLSkMsUUFBSSxFQUFFO0FBTEY7QUFMK0IsQ0FBdkM7O0FBY0EsU0FBU0MsV0FBVCxDQUNFQyxLQUFLLEdBQUdaLGFBRFYsRUFFRWEsTUFGRixFQUdtQjtBQUNqQixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtREFBZSxDQUFDQyxlQUFyQjtBQUNFLDZDQUNLSixLQURMO0FBRUVSLGVBQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtXLG1EQUFlLENBQUNFLGVBQXJCO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRVIsZUFBTyxFQUFFLEtBRlg7QUFHRUQsZ0JBQVEsRUFBRTtBQUhaOztBQUtGLFNBQUtZLG1EQUFlLENBQUNHLGVBQXJCO0FBQ0UsNkNBQ0tOLEtBREw7QUFFRVIsZUFBTyxFQUFFLEtBRlg7QUFHRUQsZ0JBQVEsRUFBRTtBQUhaOztBQUtGLFNBQUtZLG1EQUFlLENBQUNJLGdCQUFyQjtBQUNFLDZDQUNLUCxLQURMO0FBRUVQLFlBQUksRUFBRSxJQUZSO0FBR0VELGVBQU8sRUFBRSxLQUhYO0FBSUVGLGFBQUssRUFBRSxLQUpUO0FBS0VDLGdCQUFRLEVBQUU7QUFMWjs7QUFPRjtBQUNFLGFBQU9TLEtBQVA7QUEzQko7QUE2QkQ7O0FBRWNELDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L2F1dGgvYXV0aC5yZWR1Y2Vycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQWN0aW9uVHlwZXMgZnJvbSAnLi9hdXRoLmVudW1zJ1xuaW1wb3J0IHsgSUF1dGhTaWduSW5EYXRhLCBJQXV0aFN0YXRlU3RvcmUsIFRBdXRoQWN0aW9uIH0gZnJvbSAnLi9hdXRoLnR5cGVzJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFOiBJQXV0aFN0YXRlU3RvcmUgPSB7XG4gIGxvZ2luOiAnJyxcbiAgZXJyb3I6IGZhbHNlLFxuICBpc1NpZ25JbjogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICB1c2VyOiB7XG4gICAgYXZhdGFyX3VybDogJycsXG4gICAgYmlvOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgaHRtbF91cmw6ICcnLFxuICAgIG5hbWU6ICcnXG4gIH1cbn1cblxuZnVuY3Rpb24gYXV0aFJlZHVjZXIoXG4gIHN0YXRlID0gSU5JVElBTF9TVEFURSxcbiAgYWN0aW9uOiBUQXV0aEFjdGlvblxuKTogSUF1dGhTdGF0ZVN0b3JlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlNJR05fSU5fUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBpc1NpZ25JbjogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlNJR05fSU5fRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNTaWduSW46IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TSUdOX09VVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGlzU2lnbkluOiBmYWxzZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/auth/auth.reducers.ts\n");

/***/ }),

/***/ "./src/redux/root-reducer.ts":
/*!***********************************!*\
  !*** ./src/redux/root-reducer.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducers */ \"./src/redux/auth/auth.reducers.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: _auth_auth_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcm9vdC1yZWR1Y2VyLnRzPzRmNmIiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImF1dGhSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHZUEsNEhBQWUsQ0FBYztBQUMxQ0MsTUFBSSxFQUFFQywyREFBV0E7QUFEeUIsQ0FBZCxDQUE5QiIsImZpbGUiOiIuL3NyYy9yZWR1eC9yb290LXJlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGgvYXV0aC5yZWR1Y2VycydcbmltcG9ydCB7IElTdG9yZVN0YXRlIH0gZnJvbSAnLi9zdG9yZS50eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzPElTdG9yZVN0YXRlPih7XG4gIGF1dGg6IGF1dGhSZWR1Y2VyXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/root-reducer.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStore\", function() { return makeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_enviroment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/enviroment */ \"./src/utils/enviroment.ts\");\n/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ \"./src/redux/root-reducer.ts\");\n\n\n\n\n\nconst makeStore = () => {\n  const middlewares = [];\n\n  if (_utils_enviroment__WEBPACK_IMPORTED_MODULE_3__[\"isDevelopment\"]) {\n    middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);\n  }\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  return store;\n};\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(makeStore, {\n  debug: _utils_enviroment__WEBPACK_IMPORTED_MODULE_3__[\"isDevelopment\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHM/MDBiYiJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImlzRGV2ZWxvcG1lbnQiLCJwdXNoIiwibG9nZ2VyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxTQUErQyxHQUFHLE1BQU07QUFDbkUsUUFBTUMsV0FBeUIsR0FBRyxFQUFsQzs7QUFFQSxNQUFJQywrREFBSixFQUFtQjtBQUNqQkQsZUFBVyxDQUFDRSxJQUFaLENBQWlCQyxtREFBakI7QUFDRDs7QUFFRCxRQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLHFEQUFELEVBQWNDLDZEQUFlLENBQUMsR0FBR1AsV0FBSixDQUE3QixDQUF6QjtBQUVBLFNBQU9JLEtBQVA7QUFDRCxDQVZNO0FBWUEsTUFBTUksT0FBTyxHQUFHQyx3RUFBYSxDQUFDVixTQUFELEVBQVk7QUFDOUNXLE9BQUssRUFBRVQsK0RBQWFBO0FBRDBCLENBQVosQ0FBN0IiLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBNYWtlU3RvcmUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB7IGlzRGV2ZWxvcG1lbnQgfSBmcm9tICcuLi91dGlscy9lbnZpcm9tZW50J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdC1yZWR1Y2VyJ1xuaW1wb3J0IHsgSVN0b3JlU3RhdGUsIFRTdG9yZUFjdGlvbiB9IGZyb20gJy4vc3RvcmUudHlwZXMnXG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmU6IE1ha2VTdG9yZTxJU3RvcmVTdGF0ZSwgVFN0b3JlQWN0aW9uPiA9ICgpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZXM6IE1pZGRsZXdhcmVbXSA9IFtdXG5cbiAgaWYgKGlzRGV2ZWxvcG1lbnQpIHtcbiAgICBtaWRkbGV3YXJlcy5wdXNoKGxvZ2dlcilcbiAgfVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtcbiAgZGVidWc6IGlzRGV2ZWxvcG1lbnRcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ "./src/styles/components/Header.ts":
/*!*****************************************!*\
  !*** ./src/styles/components/Header.ts ***!
  \*****************************************/
/*! exports provided: Header, SearchBox, InfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchBox\", function() { return SearchBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoBox\", function() { return InfoBox; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"Header\",\n  componentId: \"sc-1d6ryu8-0\"\n})([\"background:\", \";border-bottom:1px solid \", \";color:\", \";padding:0 4rem;height:5.5rem;display:flex;justify-content:space-between;align-items:center;\"], props => props.theme.backgrounds.secondary, props => props.theme.backgrounds.tertiary, props => props.theme.colors.primary);\nconst SearchBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Header__SearchBox\",\n  componentId: \"sc-1d6ryu8-1\"\n})([\"overflow:hidden;position:relative;width:30rem;height:3.5rem;display:flex;align-items:center;input{display:block;width:100%;height:100%;position:absolute;top:0;left:0;padding:1rem;padding-left:4rem;border-radius:2rem;border:none;background:\", \";color:\", \";font-size:1.8rem;outline:none;}svg{position:relative;z-index:10;top:0.2rem;left:1rem;}\"], props => props.theme.backgrounds.tertiary, props => props.theme.colors.primary);\nconst InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Header__InfoBox\",\n  componentId: \"sc-1d6ryu8-2\"\n})([\"display:block;font-size:2rem;font-family:sans-serif;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvSGVhZGVyLnRzPzk4ZTIiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsImJhY2tncm91bmRzIiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJjb2xvcnMiLCJwcmltYXJ5IiwiU2VhcmNoQm94IiwiZGl2IiwiSW5mb0JveCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsNEpBQ0hDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLFNBRDlCLEVBRVVILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLFFBRjNDLEVBR1JKLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLE1BQVosQ0FBbUJDLE9BSHBCLENBQVo7QUFZQSxNQUFNQyxTQUFTLEdBQUdULHdEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsOFZBc0JKUixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxRQXRCN0IsRUF1QlRKLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLE1BQVosQ0FBbUJDLE9BdkJuQixDQUFmO0FBb0NBLE1BQU1HLE9BQU8sR0FBR1gsd0RBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSw0REFBYiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9IZWFkZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kcy5zZWNvbmRhcnl9O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kcy50ZXJ0aWFyeX07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgcGFkZGluZzogMCA0cmVtO1xuICBoZWlnaHQ6IDUuNXJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kcy50ZXJ0aWFyeX07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBzdmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0b3A6IDAuMnJlbTtcbiAgICBsZWZ0OiAxcmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/Header.ts\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n  html {\n    font-size: 62.5%;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ${props => props.theme.backgrounds.primary};\n\n  }\n\n  body, input, textarea, button {\n    color: ${props => props.theme.colors.primary};\n    font: 1.6rem sans-serif;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJ0aGVtZSIsImJhY2tncm91bmRzIiwicHJpbWFyeSIsImNvbG9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsa0lBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsT0FBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJELE9BQVE7QUFDakQ7QUFDQTtBQUNBLENBckJBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9nbG9iYWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICBodG1sIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xuICB9XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZHMucHJpbWFyeX07XG5cbiAgfVxuXG4gIGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgZm9udDogMS42cmVtIHNhbnMtc2VyaWY7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    primary: '#e4e6eb',\n    secondary: '#b0b3b8'\n  },\n  backgrounds: {\n    primary: '#18191A',\n    secondary: '#242526',\n    tertiary: '#3A3B3C'\n  },\n  contemplary: {\n    primary: '  #2b3a41',\n    secondary: '#005555',\n    tertiary: '#007777',\n    fourth: '#bfc4dc'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZHMiLCJ0ZXJ0aWFyeSIsImNvbnRlbXBsYXJ5IiwiZm91cnRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLEtBQUssR0FBRztBQUNaQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsYUFBUyxFQUFFO0FBRkwsR0FESTtBQUtaQyxhQUFXLEVBQUU7QUFDWEYsV0FBTyxFQUFFLFNBREU7QUFFWEMsYUFBUyxFQUFFLFNBRkE7QUFHWEUsWUFBUSxFQUFFO0FBSEMsR0FMRDtBQVVaQyxhQUFXLEVBQUU7QUFDWEosV0FBTyxFQUFFLFdBREU7QUFFWEMsYUFBUyxFQUFFLFNBRkE7QUFHWEUsWUFBUSxFQUFFLFNBSEM7QUFJWEUsVUFBTSxFQUFFO0FBSkc7QUFWRCxDQUFkO0FBa0JlUCxvRUFBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyNlNGU2ZWInLFxuICAgIHNlY29uZGFyeTogJyNiMGIzYjgnXG4gIH0sXG4gIGJhY2tncm91bmRzOiB7XG4gICAgcHJpbWFyeTogJyMxODE5MUEnLFxuICAgIHNlY29uZGFyeTogJyMyNDI1MjYnLFxuICAgIHRlcnRpYXJ5OiAnIzNBM0IzQydcbiAgfSxcbiAgY29udGVtcGxhcnk6IHtcbiAgICBwcmltYXJ5OiAnICAjMmIzYTQxJyxcbiAgICBzZWNvbmRhcnk6ICcjMDA1NTU1JyxcbiAgICB0ZXJ0aWFyeTogJyMwMDc3NzcnLFxuICAgIGZvdXJ0aDogJyNiZmM0ZGMnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./src/utils/enviroment.ts":
/*!*********************************!*\
  !*** ./src/utils/enviroment.ts ***!
  \*********************************/
/*! exports provided: isDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDevelopment\", function() { return isDevelopment; });\nconst isDevelopment = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZW52aXJvbWVudC50cz9mNTRjIl0sIm5hbWVzIjpbImlzRGV2ZWxvcG1lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxhQUFhLE9BQW5CIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Vudmlyb21lbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNEZXZlbG9wbWVudCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/enviroment.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIj8xYzAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-logger\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });