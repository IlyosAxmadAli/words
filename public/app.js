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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\nhtml {\\r\\n  height: 100vh;\\r\\n  font-size: 62.5%;\\r\\n  \\r\\n}\\r\\nmain{\\r\\n  flex-grow: 1;\\r\\n}\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  font-family: sans-serif;\\r\\n  height: 100vh;\\r\\n  background-color: var(--White-color);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  max-width: 800px;\\r\\n  padding-right: 30px;\\r\\n  padding-left: 30px;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --font-family: sans-serif;\\r\\n\\r\\n  --D2-color: #2d2d2d;\\r\\n  --O5-color: #050505;\\r\\n  --F1-color: #1f1f1f;\\r\\n  --A3-color: #3a3a3a;\\r\\n  --C75-color: #757575;\\r\\n  --E9-color: #e9e9e9;\\r\\n  --F4-color: #f4f4f4;\\r\\n  --White-color: #ffffff;\\r\\n  --A4-color: #a445ed;\\r\\n  --Tomato-color: #ff5252;\\r\\n\\r\\n  --h1-w: 700;\\r\\n  --h1-size: 6.4rem;\\r\\n  --h1-line-height: 7.7rem;\\r\\n  --h2-size: 3.2rem;\\r\\n  --h2-line-height: 4rem;\\r\\n  --h3-size: 2.4rem;\\r\\n  --h3-line-height: 2.9rem;\\r\\n  --h4-size: 2rem;\\r\\n  --h4-line-height: 2.4rem;\\r\\n  --h5-size: 1.8rem;\\r\\n  --h5-line-height: 2.4rem;\\r\\n  --h6-size: 1.4rem;\\r\\n  --h6-line-height: 1.7rem;\\r\\n}\\r\\n\\r\\n.dark-mode{\\r\\n  --D2-color: #ffffff;\\r\\n  --O5-color: #fff;\\r\\n  --F1-color: #1f1f1f;\\r\\n  --A3-color: #3a3a3a;\\r\\n  --C75-color: #ffffff;\\r\\n  --E9-color: #e9e9e9;\\r\\n  --F4-color: #1f1f1f;\\r\\n  --White-color: #000;\\r\\n  --A4-color: #a445ed;\\r\\n  --Tomato-color: #ff5252;\\r\\n}\\r\\n.sans-serif{\\r\\n  font-family: sans-serif;\\r\\n}\\r\\n.serif{\\r\\n  font-family: serif;\\r\\n}\\r\\n.mono{\\r\\n  font-family: monospace;\\r\\n}\\r\\n\\r\\n.header-div {\\r\\n  padding-top: 5rem;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 8rem;\\r\\n}\\r\\n.site-logo {\\r\\n  margin-right: auto;\\r\\n}\\r\\n.dropdown img {\\r\\n  margin-right: 6rem;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  margin-right: 20px;\\r\\n  opacity: 0;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  width: 30px;\\r\\n  height: 15px;\\r\\n  background-color: var(--C75-color);\\r\\n  display: flex;\\r\\n  border-radius: 50px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 5px;\\r\\n  position: relative;\\r\\n  transform: scale(1.5);\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.label:hover {\\r\\n  background-color: var(--A4-color);\\r\\n}\\r\\n\\r\\n.ball {\\r\\n  width: 12px;\\r\\n  height: 12px;\\r\\n  background-color: var(--White-color);\\r\\n  position: absolute;\\r\\n  top: 1.5px;\\r\\n  left: 2px;\\r\\n  border-radius: 50%;\\r\\n  transition: transform 0.2s linear;\\r\\n}\\r\\n\\r\\n/*  target the elemenent after the label*/\\r\\n.checkbox:checked + .label .ball {\\r\\n  transform: translateX(14px);\\r\\n}\\r\\n\\r\\n.dark-mode-img {\\r\\n  display: block;\\r\\n}\\r\\n.font-select {\\r\\n  font-weight: 700;\\r\\n  font-size: var(--h5-size);\\r\\n  line-height: var(--h5-line);\\r\\n  color: var(--O5-color);\\r\\n  margin-right: 1rem;\\r\\n  position: relative;\\r\\n}\\r\\n.dropdown {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  cursor: pointer;\\r\\n  position: relative;\\r\\n}\\r\\n.dropdown-content {\\r\\n  padding: 24px;\\r\\n  top: 20px;\\r\\n  right: 30%;\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  background: var(--White-color);\\r\\n  color: var(--O5-color);\\r\\n  box-shadow: 0px 5px 30px  rgba(0, 0, 0, 0.1);\\r\\n  border-radius: 16px;\\r\\n  width: 183px;\\r\\n  height: 152px;\\r\\n  z-index: 1;\\r\\n}\\r\\n.dropdown-content li {\\r\\n  list-style: none;\\r\\n  font-weight: 700;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--D2-color);\\r\\n}\\r\\n.dropdown-content li:not(:last-child) {\\r\\n  margin-bottom: 1.6rem;\\r\\n}\\r\\n.dropdown-content li:hover {\\r\\n  color: var(--A4-color);\\r\\n}\\r\\n\\r\\n.dropdown:hover .dropdown-content {\\r\\n  display: block;\\r\\n}\\r\\n.search-form{\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.button{\\r\\n  border: none;\\r\\n}\\r\\n.searcher {\\r\\n  padding: 20px 24px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: var(--F4-color);\\r\\n  border-radius: 16px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n.input {\\r\\n  width: 100%;\\r\\n  background-color: transparent;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  font-family: var(--font-family);\\r\\n  font-weight: 400;\\r\\nfont-size: 18px;\\r\\nline-height: 24px;\\r\\n\\r\\n}\\r\\n.button{\\r\\n  background-color: transparent;\\r\\n}\\r\\n.keyboard-title {\\r\\n  font-weight: 700;\\r\\n  font-size: 32px;\\r\\n  line-height: 77px;\\r\\n  color: var(--D2-color);\\r\\n  margin-bottom: 8px;\\r\\n}\\r\\n.transcription {\\r\\n  font-weight: 400;\\r\\n  font-size: 24px;\\r\\n  line-height: 29px;\\r\\n  color: var(--A4-color);\\r\\n}\\r\\n.keyboard {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 4rem;\\r\\n}\\r\\n.hr {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 25px;\\r\\n}\\r\\n.line{\\r\\n  width: 100%;\\r\\n}\\r\\n.noun {\\r\\n  font-style: italic;\\r\\n  font-weight: 700;\\r\\n  font-size: 24px;\\r\\n  line-height: 29px;\\r\\n  color: var(--D2-color);\\r\\n  margin-right: 2rem;\\r\\n}\\r\\n.meaning{\\r\\n  font-weight: 400;\\r\\nfont-size: 20px;\\r\\nline-height: 24px;\\r\\ncolor: var(--C75-color);\\r\\nmargin-bottom: 32px;\\r\\n}\\r\\n.info{\\r\\n  margin-bottom: 55px;\\r\\n  margin-left: 22px;\\r\\n}\\r\\n.desc{\\r\\n  font-weight: 400;\\r\\nfont-size: 18px;\\r\\nline-height: 24px;\\r\\ncolor: var(--D2-color);\\r\\nmargin-bottom: 12px;\\r\\n}\\r\\n.Synonyms{\\r\\n  font-weight: 400;\\r\\nfont-size: 20px;\\r\\nline-height: 24px;\\r\\ncolor: var(--C75-color);\\r\\nmargin-bottom: 40px;\\r\\n}\\r\\n.Synonyms span{\\r\\n  margin-left: 22px;\\r\\n  font-weight: 700;\\r\\nfont-size: 20px;\\r\\nline-height: 24px;\\r\\ncolor: var(--A4-color);\\r\\n}\\r\\n.info-list{\\r\\n  margin-left: 22px;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n.verb{\\r\\n  font-style: italic;\\r\\n  font-weight: 700;\\r\\n  font-size: 24px;\\r\\n  line-height: 29px;\\r\\n  color: var(--D2-color);\\r\\n  margin-right: 2rem;\\r\\n}\\r\\n.info-desc{\\r\\n  font-weight: 400;\\r\\n  font-size: 18px;\\r\\n  line-height: 24px;\\r\\n  color: var(--D2-color);\\r\\n}\\r\\n.verb-text{\\r\\n  font-weight: 400;\\r\\nfont-size: 18px;\\r\\nline-height: 24px;\\r\\ncolor: var(--C75-color);\\r\\nmargin-left: 25px;\\r\\nmargin-bottom: 40px;\\r\\n}\\r\\n.footer-text{\\r\\n  font-weight: 400;\\r\\nfont-size: 14px;\\r\\nline-height: 17px;\\r\\ntext-decoration-line: underline;\\r\\ncolor: var(--C75-color);\\r\\nmargin-right: 20px;\\r\\n}\\r\\n.footer-hr{\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n.footer-link{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-bottom: 55px;\\r\\n}\\r\\n.link{\\r\\n  font-weight: 400;\\r\\nfont-size: 14px;\\r\\nline-height: 17px;\\r\\ntext-decoration-line: underline;\\r\\ncolor: var(--D2-color);\\r\\nmargin-right: 9px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://1-project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://1-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://1-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://1-project/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://1-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ \"./src/js/select.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_select__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://1-project/./src/js/app.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const checkbox = document.querySelector(\"#checkbox\");\r\nconst dropdown = document.querySelector(\".dropdown-content\");\r\nconst searcher = document.querySelector(\".searcher\");\r\nconst button = document.querySelector(\".button\");\r\nconst input = document.querySelector(\".input\");\r\n\r\nconst modeLocal = localStorage.getItem(\"mode\")\r\n  ? localStorage.getItem(\"mode\")\r\n  : null;\r\n\r\nif (modeLocal) {\r\n  document.body.classList.add(\"dark-mode\");\r\n  dropdown.style.boxShadow = \"0px 5px 30px #A445ED\";\r\n    searcher.style.boxShadow = \"0px 5px 30px #A445ED\";\r\n    input.style.color = \"#ffffff\";\r\n}\r\n\r\ncheckbox.addEventListener(\"click\", () => {\r\n    document.body.classList.toggle(\"dark-mode\");\r\n     modeLocal\r\n    ? localStorage.setItem(\"mode\", \"\")\r\n    : localStorage.setItem(\"mode\", \"dark\");\r\n  if (document.body.classList.contains(\"dark-mode\")) {\r\n    dropdown.style.boxShadow = \"0px 5px 30px #A445ED\";\r\n    searcher.style.boxShadow = \"0px 5px 30px #A445ED\";\r\n    input.style.color = \"#ffffff\";\r\n   \r\n  } else {\r\n    dropdown.style.boxShadow = \"0px 5px 30px  rgba(0, 0, 0, 0.1)\";\r\n    searcher.style.boxShadow = \"0px 5px 30px  rgba(0, 0, 0, 0.1)\";\r\n    input.style.color = \"#000000\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://1-project/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = async (url) => {\r\n  try {\r\n    const req = await fetch(url);\r\n    const data = await req.json();\r\n    return data;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://1-project/./src/js/request.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\r\n\r\nconst form = document.querySelector(\"form\");\r\nconst input = document.querySelector(\".input\");\r\n\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const query = input.value;\r\n  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`;\r\n  (0,_request__WEBPACK_IMPORTED_MODULE_0__.getData)(`${API}${query}`).then((data) => {\r\n    console.log(data);\r\n      (0,_updateUI__WEBPACK_IMPORTED_MODULE_1__.updateUI)(data[0]);     \r\n  });\r\n  form.reset()\r\n});\n\n//# sourceURL=webpack://1-project/./src/js/search.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ (() => {

eval("const sansSerif = document.querySelector('.sans-serif')\r\nconst serif = document.querySelector('.serif')\r\nconst mono = document.querySelector('.mono')\r\nconst fontSelect = document.querySelector('.font-select')\r\n\r\nsansSerif.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'sans-serif'\r\n    fontSelect.textContent = 'Sans Serif'\r\n})\r\nserif.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'serif'\r\n    fontSelect.textContent = 'Serif'\r\n})\r\nmono.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'monospace'\r\n    fontSelect.textContent = 'Mono'\r\n})\n\n//# sourceURL=webpack://1-project/./src/js/select.js?");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n\r\n\r\nfunction updateUI(data) {\r\n        const update = document.querySelector(\".update\");\r\n        const { phonetics, word, meanings,sourceUrls} = data;\r\n        const div = document.createElement(\"div\");\r\n        update.innerHTML = \"\";\r\n        div.innerHTML = `\r\n              <div class=\"keyboard\">\r\n                  <div class=\"keyboard-title\">\r\n                      <h1 class=\"title\">${word}</h1>\r\n                      <h5 class=\"transcription\">${phonetics[1].text}</h5>\r\n                  </div>\r\n                  <img class=\"play\" src=\"./images/play.svg\" alt=\"play\">\r\n              </div>\r\n              <div class=\"hr\">\r\n                  <h4 class=\"noun\">noun</h4>\r\n                  <div class=\"line\"><hr></div>\r\n              </div>\r\n              <h5 class=\"meaning\">${meanings[0].definitions[0].definition}</h5>\r\n              <ul class=\"info\">\r\n                  <li class=\"desc item1\">\r\n                  ${meanings[2].definitions[0].definition}\r\n                  </li>\r\n                  <li class=\"desc item2\">\r\n                  ${meanings[2].definitions[2].definition}\r\n                  </li>\r\n                  <li class=\"desc item3\">\r\n                  ${meanings[2].definitions[3].definition}\r\n                  </li>\r\n              </ul>\r\n              <h4 class=\"Synonyms\">Synonyms <span class=\"span\"></span></h4>\r\n              <div class=\"hr\">\r\n                  <h4 class=\"verb\">verb</h4>\r\n                  <div class=\"line\"><hr></div>\r\n              </div>\r\n              <h5 class=\"meaning\">${meanings[1].definitions[0].definition}</h5>\r\n              <ul class=\"info-list\">\r\n                  <li class=\"info-desc\">\r\n                      ${meanings[2].definitions[0].definition}\r\n                  </li>\r\n              </ul>\r\n              <p class=\"verb-text\">\r\n              ${meanings[2].definitions[0].example\r\n              }\r\n              </p>\r\n              <hr class=\"footer-hr\">\r\n            `;\r\n        update.appendChild(div);\r\n      \r\n        const play = document.querySelector(\".play\");\r\n        const span = document.querySelector(\".span\");\r\n        const link = document.querySelector(\".link\");\r\n      \r\n        link.href=`${sourceUrls[0]}`\r\n        link.textContent = `${sourceUrls[0]}`\r\n      \r\n      \r\n        play.addEventListener(\"click\", () => {\r\n          const audio = new Audio(phonetics[0].audio);\r\n          audio.play();\r\n        });\r\n      \r\n        meanings[0].synonyms.forEach((synonym)=>{\r\n          span.textContent = `${synonym ? synonym : 'no synonyms'}`\r\n        })\r\n}\r\n\n\n//# sourceURL=webpack://1-project/./src/js/updateUI.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;