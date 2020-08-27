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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TodoFilter/TodoFilter.js */ \"./src/components/TodoFilter/TodoFilter.js\");\n/* harmony import */ var _components_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TodoList/TodoList.js */ \"./src/components/TodoList/TodoList.js\");\n/* harmony import */ var _services_todo_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/todo.service.js */ \"./src/services/todo.service.js\");\n/* harmony import */ var _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers/TodoList.observer.js */ \"./src/observers/TodoList.observer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar todoListID = 'todo-list';\nvar todoFilterID = 'todo-filter';\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    var _this = this;\n\n    var htmlNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, App);\n\n    _defineProperty(this, \"renderFilter\", function () {\n      var filterNode = document.getElementById(todoFilterID);\n      _this._filter.htmlNode = filterNode;\n\n      _this._filter.render();\n    });\n\n    _defineProperty(this, \"renderTodoList\", function () {\n      var todoListNode = document.getElementById(todoListID);\n      _this._todoList.htmlNode = todoListNode;\n\n      _this._todoList.render();\n    });\n\n    _defineProperty(this, \"render\", function () {\n      _this._htmlNode.innerHTML = \"\\n      <div class=\\\"todo-app\\\">\\n        <div class=\\\"todo-app__header\\\">\\n          <div class=\\\"todo-app__title\\\">TO-DO List.</div>\\n          <div id=\".concat(todoFilterID, \"></div>\\n        </div>\\n        <div class=\\\"todo-app__content\\\">\\n          <div id=\").concat(todoListID, \"></div>\\n        </div>\\n      </div>\\n    \");\n\n      _this.renderFilter();\n\n      _this.renderTodoList();\n    });\n\n    this._htmlNode = htmlNode;\n    this._filter = new _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this._todoList = new _components_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    var resolveTodos = function resolveTodos(todoList) {\n      return _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].todoList = todoList.todos;\n    };\n\n    _services_todo_service_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTodoList().then(resolveTodos);\n  }\n\n  _createClass(App, [{\n    key: \"htmlNode\",\n    get: function get() {\n      return this._htmlNode;\n    },\n    set: function set(htmlNode) {\n      this._htmlNode = htmlNode;\n      this.render();\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/CreateTodoItem/CreateTodoItem.js":
/*!*********************************************************!*\
  !*** ./src/components/CreateTodoItem/CreateTodoItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CreateTodoItem = /*#__PURE__*/function () {\n  function CreateTodoItem() {\n    _classCallCheck(this, CreateTodoItem);\n  }\n\n  _createClass(CreateTodoItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n        <div class=\\\"create-todo-item\\\">\\n          <span class=\\\"icon-plus\\\"></span>\\n          Create Task\\n        </div>\\n      \";\n    }\n  }]);\n\n  return CreateTodoItem;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTodoItem);\n\n//# sourceURL=webpack:///./src/components/CreateTodoItem/CreateTodoItem.js?");

/***/ }),

/***/ "./src/components/TodoFilter/TodoFilter.js":
/*!*************************************************!*\
  !*** ./src/components/TodoFilter/TodoFilter.js ***!
  \*************************************************/
/*! exports provided: FILTER_ALL, FILTER_COMPLETE, FILTER_PENDING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILTER_ALL\", function() { return FILTER_ALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILTER_COMPLETE\", function() { return FILTER_COMPLETE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILTER_PENDING\", function() { return FILTER_PENDING; });\n/* harmony import */ var _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observers/TodoList.observer.js */ \"./src/observers/TodoList.observer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar FILTER_ALL = 'all';\nvar FILTER_COMPLETE = 'complete';\nvar FILTER_PENDING = 'pending';\nvar filterOptionsConfig = [{\n  id: 'filter-all',\n  label: 'All',\n  value: FILTER_ALL,\n  attributeName: '_filterAllInput',\n  checked: true\n}, {\n  id: 'filter-completed',\n  label: 'Completed',\n  value: FILTER_COMPLETE,\n  attributeName: '_filterCompleteInput'\n}, {\n  id: 'filter-pending',\n  label: 'Pending',\n  value: FILTER_PENDING,\n  attributeName: '_filterPendingInput'\n}];\n\nvar TodoFilter = /*#__PURE__*/function () {\n  function TodoFilter() {\n    var _this = this;\n\n    var htmlNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, TodoFilter);\n\n    this._htmlNode = htmlNode;\n    filterOptionsConfig.forEach(function (filter) {\n      return _this[filter.attributeName] = null;\n    });\n  }\n\n  _createClass(TodoFilter, [{\n    key: \"addReferences\",\n    value: function addReferences() {\n      var _this2 = this;\n\n      filterOptionsConfig.forEach(function (filter) {\n        _this2[filter.attributeName] = document.getElementById(filter.id);\n        _this2[filter.attributeName].checked = filter.checked;\n\n        _this2[filter.attributeName].addEventListener('change', function (e) {\n          var filter = e.target.value;\n          _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filterTodoList(filter);\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this._htmlNode.innerHTML = \"\\n      <div class=\\\"todo-filter\\\">\\n      \".concat(filterOptionsConfig.reduce(function (template, filter) {\n        var newOption = \"\\n            <label class=\\\"todo-filter__item radio-container\\\">\\n              <input\\n                type=\\\"radio\\\"\\n                name=\\\"filter\\\"\\n                id=\".concat(filter.id, \" \\n                value=\").concat(filter.value, \" \\n              />\\n              <span class=\\\"radio-mark\\\"></span>\\n              \").concat(filter.label, \"\\n            </label>\\n          \");\n        return \"\".concat(template).concat(newOption);\n      }, ''), \"\\n      </div>\\n    \");\n      this.addReferences();\n    }\n  }, {\n    key: \"htmlNode\",\n    get: function get() {\n      return this._htmlNode;\n    },\n    set: function set(htmlNode) {\n      this._htmlNode = htmlNode;\n      this.render();\n    }\n  }]);\n\n  return TodoFilter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoFilter);\n\n//# sourceURL=webpack:///./src/components/TodoFilter/TodoFilter.js?");

/***/ }),

/***/ "./src/components/TodoItem/TodoItem.js":
/*!*********************************************!*\
  !*** ./src/components/TodoItem/TodoItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TodoItem = /*#__PURE__*/function () {\n  function TodoItem(_ref) {\n    var title = _ref.title,\n        description = _ref.description,\n        completed = _ref.completed;\n\n    _classCallCheck(this, TodoItem);\n\n    this.title = title;\n    this.description = description;\n    this.completed = completed;\n  }\n\n  _createClass(TodoItem, [{\n    key: \"render\",\n    value: function render() {\n      var title = this.title,\n          description = this.description,\n          completed = this.completed;\n      var checkText = completed ? \"Completed\" : \"Pending\";\n      var componentClass = \"todo-item \".concat(completed ? 'completed' : '');\n      return \"\\n      <div class=\\\"\".concat(componentClass, \"\\\">\\n        <div class=\\\"todo-item__info\\\">\\n          <div class=\\\"row\\\"> \\n            <label>Title:</label>\\n            <p>\").concat(title, \"</p>\\n          </div>\\n          <div class=\\\"row\\\">\\n            <label>Description:</label>\\n            <p>\").concat(description, \"</p>\\n          </div>\\n        </div>\\n        <div class=\\\"todo-item__state\\\">\\n          <label class=\\\"checkbox-container\\\">\\n            \").concat(checkText, \"\\n            <input\\n              type=\\\"checkbox\\\"\\n              name=\\\"todoItemCheckbox\\\"\\n              \").concat(completed ? 'checked' : '', \"\\n            >\\n            <span class=\\\"check-mark\\\"></span>\\n          </label>\\n        </div>\\n      </div>\\n    \");\n    }\n  }]);\n\n  return TodoItem;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\n\n//# sourceURL=webpack:///./src/components/TodoItem/TodoItem.js?");

/***/ }),

/***/ "./src/components/TodoList/TodoList.js":
/*!*********************************************!*\
  !*** ./src/components/TodoList/TodoList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoList; });\n/* harmony import */ var _TodoItem_TodoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TodoItem/TodoItem.js */ \"./src/components/TodoItem/TodoItem.js\");\n/* harmony import */ var _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observers/TodoList.observer.js */ \"./src/observers/TodoList.observer.js\");\n/* harmony import */ var _CreateTodoItem_CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateTodoItem/CreateTodoItem.js */ \"./src/components/CreateTodoItem/CreateTodoItem.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar TodoList = /*#__PURE__*/function () {\n  function TodoList() {\n    var _this = this;\n\n    var htmlNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, TodoList);\n\n    _defineProperty(this, \"render\", function () {\n      _this.cleanNode();\n\n      _this._htmlNode.innerHTML = \"<div class=\\\"todo-list\\\"></div>\";\n      var todoListParent = _this._htmlNode.childNodes[0];\n      _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList.forEach(function (todo) {\n        var todoItem = new _TodoItem_TodoItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_objectSpread({}, todo));\n        var todoItemHtml = todoItem.render();\n        todoListParent.insertAdjacentHTML('beforeend', todoItemHtml);\n        todoListParent.lastElementChild.querySelector('input').addEventListener('change', function (e) {\n          _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(todo.id, !todo.completed);\n        });\n      });\n      var createTodoItem = new _CreateTodoItem_CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      var createTodoItemHtml = createTodoItem.render();\n      todoListParent.insertAdjacentHTML('beforeend', createTodoItemHtml);\n    });\n\n    _defineProperty(this, \"cleanNode\", function () {\n      _this._htmlNode.innerHTML = '';\n    });\n\n    this._htmlNode = htmlNode;\n    _observers_TodoList_observer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addSubscriber(this.render);\n  }\n\n  _createClass(TodoList, [{\n    key: \"htmlNode\",\n    get: function get() {\n      return this._htmlNode;\n    },\n    set: function set(htmlNode) {\n      this._htmlNode = htmlNode;\n      this.render();\n    }\n  }]);\n\n  return TodoList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/TodoList/TodoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n\nvar rootNode = document.getElementById('todo-app-root');\nvar app = new _App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rootNode);\napp.render();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/observers/TodoList.observer.js":
/*!********************************************!*\
  !*** ./src/observers/TodoList.observer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoFilter/TodoFilter.js */ \"./src/components/TodoFilter/TodoFilter.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar TodoListObserver = /*#__PURE__*/function () {\n  function TodoListObserver() {\n    var _this = this;\n\n    _classCallCheck(this, TodoListObserver);\n\n    _defineProperty(this, \"addTodo\", function (todo) {\n      _this._todoList.push(todo);\n\n      _this.notify();\n    });\n\n    _defineProperty(this, \"addSubscriber\", function (callback) {\n      _this._subscribers.push(callback);\n    });\n\n    _defineProperty(this, \"updateTodo\", function (id, state) {\n      var todo = _this._todoList.find(function (todo) {\n        return todo.id == id;\n      });\n\n      todo.completed = state;\n\n      _this.notify();\n    });\n\n    _defineProperty(this, \"filterTodoList\", function (filter) {\n      _this._currentFilter = filter;\n\n      _this.notify();\n    });\n\n    _defineProperty(this, \"notify\", function () {\n      _this._subscribers.forEach(function (subscriber) {\n        subscriber(_this.todoList);\n      });\n    });\n\n    this._todoList = [];\n    this._currentFilter = 'all';\n    this._subscribers = [];\n  }\n\n  _createClass(TodoListObserver, [{\n    key: \"todoList\",\n    get: function get() {\n      var filteredList = [];\n\n      switch (this._currentFilter) {\n        case _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__[\"FILTER_COMPLETE\"]:\n          filteredList = this._todoList.filter(function (todo) {\n            return todo.completed;\n          });\n          break;\n\n        case _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__[\"FILTER_PENDING\"]:\n          filteredList = this._todoList.filter(function (todo) {\n            return !todo.completed;\n          });\n          break;\n\n        case _components_TodoFilter_TodoFilter_js__WEBPACK_IMPORTED_MODULE_0__[\"FILTER_ALL\"]:\n        default:\n          filteredList = JSON.parse(JSON.stringify(this._todoList));\n          break;\n      }\n\n      return filteredList;\n    },\n    set: function set(todoList) {\n      console.log('todoList  => ', todoList);\n      this._todoList = JSON.parse(JSON.stringify(todoList));\n      this._filteredList = JSON.parse(JSON.stringify(todoList));\n      this.notify();\n    }\n  }]);\n\n  return TodoListObserver;\n}();\n\nvar instance = new TodoListObserver();\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/observers/TodoList.observer.js?");

/***/ }),

/***/ "./src/services/config.js":
/*!********************************!*\
  !*** ./src/services/config.js ***!
  \********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nvar localData = './data/';\nvar config = {\n  url: {\n    getTodoList: \"\".concat(localData, \"todos.json\")\n  }\n};\n\n//# sourceURL=webpack:///./src/services/config.js?");

/***/ }),

/***/ "./src/services/todo.service.js":
/*!**************************************!*\
  !*** ./src/services/todo.service.js ***!
  \**************************************/
/*! exports provided: getTodoList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoList\", function() { return getTodoList; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/services/config.js\");\n\nfunction getTodoList() {\n  return fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"config\"].url.getTodoList).then(function (res) {\n    return res.json();\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTodoList: getTodoList\n});\n\n//# sourceURL=webpack:///./src/services/todo.service.js?");

/***/ })

/******/ });