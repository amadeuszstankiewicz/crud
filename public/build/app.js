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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ0ksd0VBQUtBLElBQUksQ0FBQyxNQUFELENBQVQsQ0FESixlQUVJLHdFQUFLQSxJQUFJLENBQUMsU0FBRCxDQUFULENBRkosZUFHSSx3RUFBS0EsSUFBSSxDQUFDLEtBQUQsQ0FBVCxDQUhKLGVBSUksd0VBQUtBLElBQUksQ0FBQyxPQUFELENBQVQsQ0FKSixlQUtJLHdFQUFLQSxJQUFJLENBQUMsT0FBRCxDQUFULENBTEosZUFNSSx3RUFBS0EsSUFBSSxDQUFDLGFBQUQsQ0FBVCxZQU5KLGVBT0kscUZBQUk7QUFBUSxlQUFTLEVBQUMsY0FBbEI7QUFBaUMsYUFBTyxFQUFFO0FBQUEsZUFBTUcsV0FBVyxDQUFDSCxJQUFJLENBQUMsSUFBRCxDQUFMLENBQWpCO0FBQUE7QUFBMUMsb0JBQUosQ0FQSixlQVFJLHFGQUFJO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNdUIsV0FBVyxDQUFDdkIsSUFBSSxDQUFDLElBQUQsQ0FBTCxDQUFqQjtBQUFBO0FBQTdDLGdCQUFKLENBUkosZUFTSSxxRkFBSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUwsZUFBZSxDQUFDSyxJQUFJLENBQUMsSUFBRCxDQUFMLENBQXJCO0FBQUE7QUFBN0MsK0JBQUosQ0FUSixlQVVJLHFGQUFJO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUFtQyxhQUFPLEVBQUU7QUFBQSxlQUFNK0IsVUFBVSxDQUFDL0IsSUFBSSxDQUFDLElBQUQsQ0FBTCxDQUFoQjtBQUFBO0FBQTVDLG1CQUFKLENBVkosQ0FETztBQUFBLEdBQVYsQ0FETCxDQWZKLENBckJKLENBREo7QUF3REg7O0FBQ0QsaUVBQWVwQyxLQUFmOzs7Ozs7Ozs7OztBQ2hHQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2hvd1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2hvd3VzZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlcmZvcm0uY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9qcy9jb21wb25lbnRzL1VzZXJzJztcbiAgICBcblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxVc2VycyAvPjwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3VzZXJmb3JtLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBQYXNzd29yZEZvcm0ocHJvcHMpIHtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRSZXBlYXQsIHNldFBhc3N3b3JkUmVwZWF0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlZGl0UGFzc3dvcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT0gcGFzc3dvcmRSZXBlYXQpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJIYXPFgmEgbmllIG1vZ8SFIHNpxJkgcsOzxbxuacSHLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYm9keUZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci91cGRhdGVwYXNzd29yZC9gICsgcHJvcHMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keUZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFBhc3N3b3JkRm9ybSgtMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1wb3B1cC1iZ1wiLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctcG9wdXAtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHBvcHVwLWV4aXRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRQYXNzd29yZEZvcm0oLTEpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlptaWXFhCBoYXPFgm88L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhc8WCbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvd3TDs3J6IGhhc8WCbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRSZXBlYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZFJlcGVhdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJabWllxYQgaGFzxYJvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9zaG93dXNlci5jc3MnO1xyXG5cclxuZnVuY3Rpb24gU2hvd1VzZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvc2hvdy9gICsgcHJvcHMudXNlcklkKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1wb3B1cC1iZ1wiLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyICE9IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctcG9wdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHBvcHVwLWV4aXRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRTaG93VXNlcigtMSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPklNScSYOjwvYj4ge3VzZXJbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5OQVpXSVNLTzo8L2I+IHt1c2VyWydzdXJuYW1lJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+V0lFSzo8L2I+IHt1c2VyWydhZ2UnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5URUxFRk9OOjwvYj4ge3VzZXJbJ3Bob25lJ119PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RU1BSUw6PC9iPiB7dXNlclsnZW1haWwnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5TVEFXS0EgWsWBL0g6PC9iPiB7dXNlclsnaG91cmx5X3JhdGUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBvcHVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBwb3B1cC1leGl0XCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0U2hvd1VzZXIoLTEpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNob3dVc2VyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy91c2VyZm9ybS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gVXNlckZvcm0ocHJvcHMpIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaG91cmx5X3JhdGUsIHNldEhvdXJseVJhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy51c2VySWQgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFVzZXIgPSBwcm9wcy51c2Vyc1twcm9wcy51c2Vycy5maW5kSW5kZXgoeCA9PiB4WydpZCddID09IHByb3BzLnVzZXJJZCldO1xyXG4gICAgICAgICAgICBzZXROYW1lKGN1cnJlbnRVc2VyWyduYW1lJ10pO1xyXG4gICAgICAgICAgICBzZXRTdXJuYW1lKGN1cnJlbnRVc2VyWydzdXJuYW1lJ10pO1xyXG4gICAgICAgICAgICBzZXRBZ2UoY3VycmVudFVzZXJbJ2FnZSddKTtcclxuICAgICAgICAgICAgc2V0UGhvbmUoY3VycmVudFVzZXJbJ3Bob25lJ10pO1xyXG4gICAgICAgICAgICBzZXRFbWFpbChjdXJyZW50VXNlclsnZW1haWwnXSk7XHJcbiAgICAgICAgICAgIHNldEhvdXJseVJhdGUoY3VycmVudFVzZXJbJ2hvdXJseV9yYXRlJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocHJvcHMudXNlcklkID09IDApIHtcclxuICAgICAgICAgICAgYWRkVXNlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRVc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFVzZXIoKSB7XHJcbiAgICAgICAgbGV0IGJvZHlGb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCduYW1lJywgbmFtZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnc3VybmFtZScsIHN1cm5hbWUpO1xyXG4gICAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2FnZScsIGFnZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnaG91cmx5X3JhdGUnLCBob3VybHlfcmF0ZSk7XHJcblxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2NyZWF0ZWAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5Rm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRVc2VyRm9ybSgtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFVzZXIoKSB7XHJcbiAgICAgICAgbGV0IGJvZHlGb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCduYW1lJywgbmFtZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnc3VybmFtZScsIHN1cm5hbWUpO1xyXG4gICAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2FnZScsIGFnZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnaG91cmx5X3JhdGUnLCBob3VybHlfcmF0ZSk7XHJcblxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL3VwZGF0ZS9gICsgcHJvcHMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keUZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFVzZXJGb3JtKC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBvcHVwLWJnXCIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1wb3B1cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy51c2VySWQgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHBvcHVwLWV4aXRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRVc2VyRm9ybSgtMSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Eb2RhaiB1xbx5dGtvd25pa2E8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIHBvcHVwLWV4aXRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRVc2VyRm9ybSgtMSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FZHl0dWogdcW8eXRrb3duaWthPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltaWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF6d2lza286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVzZXItZm9ybS1lbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaWVrOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidXNlci1mb3JtLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVmb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudXNlcklkID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVzZXItZm9ybS1lbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhc8WCbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVzZXItZm9ybS1lbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tZWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Rhd2thIHrFgi9oOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvdXJseV9yYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SG91cmx5UmF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiWmF0d2llcmTFulwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU2hvd1VzZXIgZnJvbSAnLi9TaG93VXNlcic7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICcuL1VzZXJGb3JtJztcclxuaW1wb3J0IFBhc3N3b3JkRm9ybSBmcm9tICcuL1Bhc3N3b3JkRm9ybSc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gVXNlcnMoKSB7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG93VXNlciwgc2V0U2hvd1VzZXJdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3VzZXJGb3JtLCBzZXRVc2VyRm9ybV0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRGb3JtLCBzZXRQYXNzd29yZEZvcm1dID0gdXNlU3RhdGUoLTEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFt1c2VyRm9ybV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnNgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXMuZGF0YSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZCkge1xyXG4gICAgICAgIGlmKHdpbmRvdy5jb25maXJtKCdDaGNlc3ogdXN1bsSFxIcgdGVnbyB1xbx5dGtvd25pa2E/Jykpe1xyXG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9kZWxldGUvYCArIHVzZXJJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+TGlzdGEgdcW8eXRrb3duaWvDs3c8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtLTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRVc2VyRm9ybSgwKX0+RG9kYWogdcW8eXRrb3duaWthPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRm9ybSAhPSAtMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkRm9ybSB1c2VySWQ9e3Bhc3N3b3JkRm9ybX0gc2V0UGFzc3dvcmRGb3JtPXtzZXRQYXNzd29yZEZvcm19IC8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dVc2VyICE9IC0xID9cclxuICAgICAgICAgICAgICAgICAgICA8U2hvd1VzZXIgdXNlcklkPXtzaG93VXNlcn0gc2V0U2hvd1VzZXI9e3NldFNob3dVc2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRm9ybSAhPSAtMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJGb3JtIHVzZXJJZD17dXNlckZvcm19IHVzZXJzPXt1c2Vyc30gc2V0VXNlckZvcm09e3NldFVzZXJGb3JtfS8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInVzZXJzVGFibGVcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW1pxJk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmF6d2lza288L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+V2llazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UZWxlZm9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXdrYSB6xYIvaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJbJ2lkJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyWyduYW1lJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlclsnc3VybmFtZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbJ2FnZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbJ3Bob25lJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlclsnZW1haWwnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyWydob3VybHlfcmF0ZSddfXrFgjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VXNlcih1c2VyWydpZCddKX0+UE9LQcW7PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFVzZXJGb3JtKHVzZXJbJ2lkJ10pfT5FRFlUVUo8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gc2V0UGFzc3dvcmRGb3JtKHVzZXJbJ2lkJ10pfT5aTUlFxYMgSEFTxYFPPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gZGVsZXRlVXNlcih1c2VyWydpZCddKX0+VVNVxYM8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlVzZXJzIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQYXNzd29yZEZvcm0iLCJwcm9wcyIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZFJlcGVhdCIsInNldFBhc3N3b3JkUmVwZWF0IiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJlZGl0UGFzc3dvcmQiLCJhbGVydCIsImJvZHlGb3JtRGF0YSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsIm1ldGhvZCIsInVybCIsInVzZXJJZCIsImRhdGEiLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJzZXRQYXNzd29yZEZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJTaG93VXNlciIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0Iiwic2V0U2hvd1VzZXIiLCJVc2VyRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJhZ2UiLCJzZXRBZ2UiLCJwaG9uZSIsInNldFBob25lIiwiZW1haWwiLCJzZXRFbWFpbCIsImhvdXJseV9yYXRlIiwic2V0SG91cmx5UmF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcnMiLCJmaW5kSW5kZXgiLCJ4IiwiYWRkVXNlciIsImVkaXRVc2VyIiwic2V0VXNlckZvcm0iLCJzZXRVc2VycyIsInNob3dVc2VyIiwidXNlckZvcm0iLCJwYXNzd29yZEZvcm0iLCJmZXRjaERhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJkZWxldGVVc2VyIiwid2luZG93IiwiY29uZmlybSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=