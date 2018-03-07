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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'jsx-dom-render';
var h1Content = 'world';
var list = ['Zhao', 'Qian', 'Sun', 'Li'];
var btn;
document.body.appendChild(_index.default.createElement("div", {
  "class": "cls1 cls2",
  "data-foo": "foo"
}, _index.default.createElement("h1", {
  title: "hello world"
}, "hello ", h1Content), _index.default.createElement("hr", null), _index.default.createElement("ol", null, list.map(function (item) {
  return _index.default.createElement("li", null, item);
})), _index.default.createElement("hr", null), _index.default.createElement("button", {
  ref: function ref(_) {
    return void (btn = _);
  },
  onClick: function onClick(e) {
    return void alert('from jsx');
  }
})));
btn.textContent = 'Click me';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const convertToTextNodeIfStr = node => typeof node === 'string' ? document.createTextNode(node) : node;

const createElement = function (tag, props) {
  const ele = document.createElement(tag);
  const children = Array.from(arguments).slice(2);

  if (props) {
    Object.entries(props).forEach(function (entry) {
      entry[0] = entry[0].toLowerCase();

      if (entry[0] === 'ref') {
        entry[1](ele);
        return;
      }

      if (entry[0] === 'classname') {
        entry[0] = 'class';
      }

      if (entry[0] === 'class') {
        entry[1].split(' ').forEach(cls => ele.classList.add(cls));
      } else if (entry[0].slice(0, 5) === 'data-') {
        ele.setAttribute(entry[0], entry[1]);
      } else if (entry[0] in ele) {
        if (entry[0].slice(0, 2) === 'on') {
          ele.addEventListener(entry[0].slice(2), entry[1]);
          return;
        }

        ele.setAttribute(entry[0], entry[1]);
      }
    });
  }

  if (children) {
    if (children.length === 1 && Array.isArray(children[0])) {
      children.pop().forEach(function (child) {
        children.push(convertToTextNodeIfStr(child));
      });
    }

    children.forEach(function (child) {
      ele.appendChild(convertToTextNodeIfStr(child));
    });
  }

  return ele;
};

React = {
  createElement
};
module.exports = React;

/***/ })
/******/ ]);