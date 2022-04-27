"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _js_components_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/Users */ "./assets/js/components/Users.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_Users__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/PasswordForm.js":
/*!**********************************************!*\
  !*** ./assets/js/components/PasswordForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_userform_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/userform.css */ "./assets/styles/userform.css");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function PasswordForm(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordRepeat = _useState4[0],
      setPasswordRepeat = _useState4[1];

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    editPassword();
  };

  function editPassword() {
    if (password != passwordRepeat) {
      alert("Hasła nie mogą się różnić.");
      return;
    }

    var bodyFormData = new URLSearchParams();
    bodyFormData.append('password', password);
    axios__WEBPACK_IMPORTED_MODULE_14___default()({
      method: 'post',
      url: "http://localhost:8000/api/user/updatepassword/" + props.userId,
      data: bodyFormData
    })["catch"](function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }).then(function (res) {
      props.setPasswordForm(-1);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "show-popup-bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "show-popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: "btn btn-danger popup-exit",
    onClick: function onClick() {
      return props.setPasswordForm(-1);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h2", null, "Zmie\u0144 has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    className: "user-form-element"
  }, "Has\u0142o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("label", {
    className: "user-form-element"
  }, "Powt\xF3rz has\u0142o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-control",
    type: "password",
    value: passwordRepeat,
    onChange: function onChange(e) {
      return setPasswordRepeat(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "btn btn-success",
    type: "submit",
    value: "Zmie\u0144 has\u0142o"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordForm);

/***/ }),

/***/ "./assets/js/components/ShowUser.js":
/*!******************************************!*\
  !*** ./assets/js/components/ShowUser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_showuser_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/showuser.css */ "./assets/styles/showuser.css");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ShowUser(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_13___default().get("http://localhost:8000/api/user/show/" + props.userId).then(function (res) {
      setUser(res.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "show-popup-bg"
  }), user != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "show-popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
    className: "btn btn-danger popup-exit",
    onClick: function onClick() {
      return props.setShowUser(-1);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "IMI\u0118:"), " ", user['name']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "NAZWISKO:"), " ", user['surname']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "WIEK:"), " ", user['age']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "TELEFON:"), " ", user['phone']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "EMAIL:"), " ", user['email']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "STAWKA Z\u0141/H:"), " ", user['hourly_rate'])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "show-popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
    className: "btn btn-danger popup-exit",
    onClick: function onClick() {
      return props.setShowUser(-1);
    }
  }, "X"), "Loading..."));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowUser);

/***/ }),

/***/ "./assets/js/components/UserForm.js":
/*!******************************************!*\
  !*** ./assets/js/components/UserForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_userform_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/userform.css */ "./assets/styles/userform.css");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function UserForm(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      surname = _useState4[0],
      setSurname = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      age = _useState6[0],
      setAge = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      phone = _useState8[0],
      setPhone = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      password = _useState10[0],
      setPassword = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      email = _useState12[0],
      setEmail = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      hourly_rate = _useState14[0],
      setHourlyRate = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (props.userId != 0) {
      var currentUser = props.users[props.users.findIndex(function (x) {
        return x['id'] == props.userId;
      })];
      setName(currentUser['name']);
      setSurname(currentUser['surname']);
      setAge(currentUser['age']);
      setPhone(currentUser['phone']);
      setEmail(currentUser['email']);
      setHourlyRate(currentUser['hourly_rate']);
    }
  }, []);

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();

    if (props.userId == 0) {
      addUser();
    } else {
      editUser();
    }
  };

  function addUser() {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('name', name);
    bodyFormData.append('surname', surname);
    bodyFormData.append('age', age);
    bodyFormData.append('phone', phone);
    bodyFormData.append('password', password);
    bodyFormData.append('email', email);
    bodyFormData.append('hourly_rate', hourly_rate);
    axios__WEBPACK_IMPORTED_MODULE_15___default()({
      method: 'post',
      url: "http://localhost:8000/api/user/create",
      data: bodyFormData
    })["catch"](function (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }).then(function (res) {
      if (res) {
        props.setUserForm(-1);
      }
    });
  }

  function editUser() {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('name', name);
    bodyFormData.append('surname', surname);
    bodyFormData.append('age', age);
    bodyFormData.append('phone', phone);
    bodyFormData.append('password', password);
    bodyFormData.append('email', email);
    bodyFormData.append('hourly_rate', hourly_rate);
    axios__WEBPACK_IMPORTED_MODULE_15___default()({
      method: 'post',
      url: "http://localhost:8000/api/user/update/" + props.userId,
      data: bodyFormData
    })["catch"](function (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }).then(function (res) {
      if (res) {
        props.setUserForm(-1);
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "show-popup-bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "show-popup-container"
  }, props.userId == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "btn btn-danger popup-exit",
    onClick: function onClick() {
      return props.setUserForm(-1);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h2", null, "Dodaj u\u017Cytkownika")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "btn btn-danger popup-exit",
    onClick: function onClick() {
      return props.setUserForm(-1);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h2", null, "Edytuj u\u017Cytkownika")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", null, "Imie:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", null, "Nazwisko:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: surname,
    onChange: function onChange(e) {
      return setSurname(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: "user-form-element"
  }, "Wiek:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: age,
    onChange: function onChange(e) {
      return setAge(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: "user-form-element"
  }, "Telefon:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    }
  })), props.userId == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: "user-form-element"
  }, "Has\u0142o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: "user-form-element"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    className: "user-form-element"
  }, "Stawka z\u0142/h:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "form-control",
    type: "text",
    value: hourly_rate,
    onChange: function onChange(e) {
      return setHourlyRate(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    className: "btn btn-success",
    type: "submit",
    value: "Zatwierd\u017A"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserForm);

/***/ }),

/***/ "./assets/js/components/Users.js":
/*!***************************************!*\
  !*** ./assets/js/components/Users.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ShowUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShowUser */ "./assets/js/components/ShowUser.js");
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UserForm */ "./assets/js/components/UserForm.js");
/* harmony import */ var _PasswordForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PasswordForm */ "./assets/js/components/PasswordForm.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../styles/app.css */ "./assets/styles/app.css");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      showUser = _useState4[0],
      setShowUser = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      userForm = _useState6[0],
      setUserForm = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(-1),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordForm = _useState8[0],
      setPasswordForm = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    fetchData();
  }, [userForm]);

  function fetchData() {
    axios__WEBPACK_IMPORTED_MODULE_14___default().get("http://localhost:8000/api/users").then(function (res) {
      if (Array.isArray(res.data)) {
        setUsers(res.data);
      }
    });
  }

  function deleteUser(userId) {
    if (window.confirm('Chcesz usunąć tego użytkownika?')) {
      axios__WEBPACK_IMPORTED_MODULE_14___default()["delete"]("http://localhost:8000/api/user/delete/" + userId).then(function (res) {
        fetchData();
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h1", null, "Lista u\u017Cytkownik\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: "btn btn-success m-3",
    onClick: function onClick() {
      return setUserForm(0);
    }
  }, "Dodaj u\u017Cytkownika"), passwordForm != -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_PasswordForm__WEBPACK_IMPORTED_MODULE_17__["default"], {
    userId: passwordForm,
    setPasswordForm: setPasswordForm
  }) : null, showUser != -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_ShowUser__WEBPACK_IMPORTED_MODULE_15__["default"], {
    userId: showUser,
    setShowUser: setShowUser
  }) : null, userForm != -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_UserForm__WEBPACK_IMPORTED_MODULE_16__["default"], {
    userId: userForm,
    users: users,
    setUserForm: setUserForm
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("table", {
    id: "usersTable",
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Imi\u0119"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Nazwisko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Wiek"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Telefon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null, "Stawka z\u0142/h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tbody", null, users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", {
      key: user['id']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['name']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['surname']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['age']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['phone']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['email']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, user['hourly_rate'], "z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "btn btn-info",
      onClick: function onClick() {
        return setShowUser(user['id']);
      }
    }, "POKA\u017B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "btn btn-primary",
      onClick: function onClick() {
        return setUserForm(user['id']);
      }
    }, "EDYTUJ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "btn btn-warning",
      onClick: function onClick() {
        return setPasswordForm(user['id']);
      }
    }, "ZMIE\u0143 HAS\u0141O")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "btn btn-danger",
      onClick: function onClick() {
        return deleteUser(user['id']);
      }
    }, "USU\u0143")));
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/showuser.css":
/*!************************************!*\
  !*** ./assets/styles/showuser.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/userform.css":
/*!************************************!*\
  !*** ./assets/styles/userform.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find-index_js-node_-1027b2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ0ksd0VBQUtBLElBQUksQ0FBQyxNQUFELENBQVQsQ0FESixlQUVJLHdFQUFLQSxJQUFJLENBQUMsU0FBRCxDQUFULENBRkosZUFHSSx3RUFBS0EsSUFBSSxDQUFDLEtBQUQsQ0FBVCxDQUhKLGVBSUksd0VBQUtBLElBQUksQ0FBQyxPQUFELENBQVQsQ0FKSixlQUtJLHdFQUFLQSxJQUFJLENBQUMsT0FBRCxDQUFULENBTEosZUFNSSx3RUFBS0EsSUFBSSxDQUFDLGFBQUQsQ0FBVCxZQU5KLGVBT0kscUZBQUk7QUFBUSxlQUFTLEVBQUMsY0FBbEI7QUFBaUMsYUFBTyxFQUFFO0FBQUEsZUFBTUcsV0FBVyxDQUFDSCxJQUFJLENBQUMsSUFBRCxDQUFMLENBQWpCO0FBQUE7QUFBMUMsb0JBQUosQ0FQSixlQVFJLHFGQUFJO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNdUIsV0FBVyxDQUFDdkIsSUFBSSxDQUFDLElBQUQsQ0FBTCxDQUFqQjtBQUFBO0FBQTdDLGdCQUFKLENBUkosZUFTSSxxRkFBSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUwsZUFBZSxDQUFDSyxJQUFJLENBQUMsSUFBRCxDQUFMLENBQXJCO0FBQUE7QUFBN0MsK0JBQUosQ0FUSixlQVVJLHFGQUFJO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxhQUFPLEVBQUU7QUFBQSxlQUFNK0IsVUFBVSxDQUFDL0IsSUFBSSxDQUFDLElBQUQsQ0FBTCxDQUFoQjtBQUFBO0FBQTVDLG1CQUFKLENBVkosQ0FETztBQUFBLEdBQVYsQ0FETCxDQWZKLENBckJKLENBREo7QUF3REg7O0FBQ0QsaUVBQWVwQyxLQUFmOzs7Ozs7Ozs7OztBQ2hHQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2hvd1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zaG93dXNlci5jc3M/YmM0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3VzZXJmb3JtLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4vanMvY29tcG9uZW50cy9Vc2Vycyc7XHJcbiAgICBcclxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PFVzZXJzIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvdXNlcmZvcm0uY3NzJztcclxuXHJcbmZ1bmN0aW9uIFBhc3N3b3JkRm9ybShwcm9wcykge1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZFJlcGVhdCwgc2V0UGFzc3dvcmRSZXBlYXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGVkaXRQYXNzd29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRQYXNzd29yZCgpIHtcclxuICAgICAgICBpZihwYXNzd29yZCAhPSBwYXNzd29yZFJlcGVhdCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkhhc8WCYSBuaWUgbW9nxIUgc2nEmSByw7PFvG5pxIcuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBib2R5Rm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL3VwZGF0ZXBhc3N3b3JkL2AgKyBwcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5Rm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0UGFzc3dvcmRGb3JtKC0xKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBvcHVwLWJnXCIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1wb3B1cC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgcG9wdXAtZXhpdFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFBhc3N3b3JkRm9ybSgtMSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Wm1pZcWEIGhhc8WCbzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tZWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFzxYJvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tZWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG93dMOzcnogaGFzxYJvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFJlcGVhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkUmVwZWF0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlptaWXFhCBoYXPFgm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3Nob3d1c2VyLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBTaG93VXNlcihwcm9wcykge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9zaG93L2AgKyBwcm9wcy51c2VySWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBvcHVwLWJnXCIvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgIT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1wb3B1cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgcG9wdXAtZXhpdFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFNob3dVc2VyKC0xKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+SU1JxJg6PC9iPiB7dXNlclsnbmFtZSddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPk5BWldJU0tPOjwvYj4ge3VzZXJbJ3N1cm5hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5XSUVLOjwvYj4ge3VzZXJbJ2FnZSddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPlRFTEVGT046PC9iPiB7dXNlclsncGhvbmUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5FTUFJTDo8L2I+IHt1c2VyWydlbWFpbCddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPlNUQVdLQSBaxYEvSDo8L2I+IHt1c2VyWydob3VybHlfcmF0ZSddfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctcG9wdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHBvcHVwLWV4aXRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRTaG93VXNlcigtMSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1VzZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3VzZXJmb3JtLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBVc2VyRm9ybShwcm9wcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtob3VybHlfcmF0ZSwgc2V0SG91cmx5UmF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLnVzZXJJZCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VXNlciA9IHByb3BzLnVzZXJzW3Byb3BzLnVzZXJzLmZpbmRJbmRleCh4ID0+IHhbJ2lkJ10gPT0gcHJvcHMudXNlcklkKV07XHJcbiAgICAgICAgICAgIHNldE5hbWUoY3VycmVudFVzZXJbJ25hbWUnXSk7XHJcbiAgICAgICAgICAgIHNldFN1cm5hbWUoY3VycmVudFVzZXJbJ3N1cm5hbWUnXSk7XHJcbiAgICAgICAgICAgIHNldEFnZShjdXJyZW50VXNlclsnYWdlJ10pO1xyXG4gICAgICAgICAgICBzZXRQaG9uZShjdXJyZW50VXNlclsncGhvbmUnXSk7XHJcbiAgICAgICAgICAgIHNldEVtYWlsKGN1cnJlbnRVc2VyWydlbWFpbCddKTtcclxuICAgICAgICAgICAgc2V0SG91cmx5UmF0ZShjdXJyZW50VXNlclsnaG91cmx5X3JhdGUnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihwcm9wcy51c2VySWQgPT0gMCkge1xyXG4gICAgICAgICAgICBhZGRVc2VyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWRpdFVzZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVXNlcigpIHtcclxuICAgICAgICBsZXQgYm9keUZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdzdXJuYW1lJywgc3VybmFtZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnYWdlJywgYWdlKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwaG9uZScsIHBob25lKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdob3VybHlfcmF0ZScsIGhvdXJseV9yYXRlKTtcclxuXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvY3JlYXRlYCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHlGb3JtRGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFVzZXJGb3JtKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0VXNlcigpIHtcclxuICAgICAgICBsZXQgYm9keUZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdzdXJuYW1lJywgc3VybmFtZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnYWdlJywgYWdlKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwaG9uZScsIHBob25lKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdob3VybHlfcmF0ZScsIGhvdXJseV9yYXRlKTtcclxuXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvdXBkYXRlL2AgKyBwcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5Rm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0VXNlckZvcm0oLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctcG9wdXAtYmdcIi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBvcHVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnVzZXJJZCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgcG9wdXAtZXhpdFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFVzZXJGb3JtKC0xKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRvZGFqIHXFvHl0a293bmlrYTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgcG9wdXAtZXhpdFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFVzZXJGb3JtKC0xKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVkeXR1aiB1xbx5dGtvd25pa2E8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1pZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXp3aXNrbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpZWs6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tZWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVsZWZvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy51c2VySWQgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFzxYJvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVzZXItZm9ybS1lbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF3a2EgesWCL2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG91cmx5X3JhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRIb3VybHlSYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJaYXR3aWVyZMW6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckZvcm07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBTaG93VXNlciBmcm9tICcuL1Nob3dVc2VyJztcclxuaW1wb3J0IFVzZXJGb3JtIGZyb20gJy4vVXNlckZvcm0nO1xyXG5pbXBvcnQgUGFzc3dvcmRGb3JtIGZyb20gJy4vUGFzc3dvcmRGb3JtJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBVc2VycygpIHtcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Nob3dVc2VyLCBzZXRTaG93VXNlcl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbdXNlckZvcm0sIHNldFVzZXJGb3JtXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEZvcm0sIHNldFBhc3N3b3JkRm9ybV0gPSB1c2VTdGF0ZSgtMSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW3VzZXJGb3JtXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2Vyc2ApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlcy5kYXRhKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcklkKSB7XHJcbiAgICAgICAgaWYod2luZG93LmNvbmZpcm0oJ0NoY2VzeiB1c3VuxIXEhyB0ZWdvIHXFvHl0a293bmlrYT8nKSl7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2RlbGV0ZS9gICsgdXNlcklkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5MaXN0YSB1xbx5dGtvd25pa8OzdzwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG0tM1wiIG9uQ2xpY2s9eygpID0+IHNldFVzZXJGb3JtKDApfT5Eb2RhaiB1xbx5dGtvd25pa2E8L2J1dHRvbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGb3JtICE9IC0xID9cclxuICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmRGb3JtIHVzZXJJZD17cGFzc3dvcmRGb3JtfSBzZXRQYXNzd29yZEZvcm09e3NldFBhc3N3b3JkRm9ybX0gLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd1VzZXIgIT0gLTEgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93VXNlciB1c2VySWQ9e3Nob3dVc2VyfSBzZXRTaG93VXNlcj17c2V0U2hvd1VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJGb3JtICE9IC0xID9cclxuICAgICAgICAgICAgICAgICAgICA8VXNlckZvcm0gdXNlcklkPXt1c2VyRm9ybX0gdXNlcnM9e3VzZXJzfSBzZXRVc2VyRm9ybT17c2V0VXNlckZvcm19Lz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHRhYmxlIGlkPVwidXNlcnNUYWJsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbWnEmTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYXp3aXNrbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XaWVrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRlbGVmb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3Rhd2thIHrFgi9oPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlclsnaWQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbJ25hbWUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyWydzdXJuYW1lJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlclsnYWdlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlclsncGhvbmUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyWydlbWFpbCddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbJ2hvdXJseV9yYXRlJ119esWCPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dVc2VyKHVzZXJbJ2lkJ10pfT5QT0tBxbs8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VXNlckZvcm0odXNlclsnaWQnXSl9PkVEWVRVSjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiBzZXRQYXNzd29yZEZvcm0odXNlclsnaWQnXSl9PlpNSUXFgyBIQVPFgU88L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyKHVzZXJbJ2lkJ10pfT5VU1XFgzwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiVXNlcnMiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlBhc3N3b3JkRm9ybSIsInByb3BzIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkUmVwZWF0Iiwic2V0UGFzc3dvcmRSZXBlYXQiLCJoYW5kbGVTdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImVkaXRQYXNzd29yZCIsImFsZXJ0IiwiYm9keUZvcm1EYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwibWV0aG9kIiwidXJsIiwidXNlcklkIiwiZGF0YSIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsInNldFBhc3N3b3JkRm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlNob3dVc2VyIiwidXNlciIsInNldFVzZXIiLCJnZXQiLCJzZXRTaG93VXNlciIsIlVzZXJGb3JtIiwibmFtZSIsInNldE5hbWUiLCJzdXJuYW1lIiwic2V0U3VybmFtZSIsImFnZSIsInNldEFnZSIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldEVtYWlsIiwiaG91cmx5X3JhdGUiLCJzZXRIb3VybHlSYXRlIiwiY3VycmVudFVzZXIiLCJ1c2VycyIsImZpbmRJbmRleCIsIngiLCJhZGRVc2VyIiwiZWRpdFVzZXIiLCJzZXRVc2VyRm9ybSIsInNldFVzZXJzIiwic2hvd1VzZXIiLCJ1c2VyRm9ybSIsInBhc3N3b3JkRm9ybSIsImZldGNoRGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRlbGV0ZVVzZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==