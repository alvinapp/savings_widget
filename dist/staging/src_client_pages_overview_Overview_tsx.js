"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_overview_Overview_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes react-loading-skeleton {\n    100% {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n    }\n}\n\n@keyframes react-loading-skeleton {\n    100% {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n    }\n}\n\n.react-loading-skeleton {\n    --base-color: #ebebeb;\n    --highlight-color: #f5f5f5;\n    --animation-duration: 1.5s;\n    --animation-direction: normal;\n    --pseudo-element-display: block; /* Enable animation */\n\n    background-color: var(--base-color);\n\n    width: 100%;\n    border-radius: 0.25rem;\n    display: inline-flex;\n    line-height: 1;\n\n    position: relative;\n    overflow: hidden;\n    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\n}\n\n.react-loading-skeleton::after {\n    content: ' ';\n    display: var(--pseudo-element-display);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        var(--base-color),\n        var(--highlight-color),\n        var(--base-color)\n    );\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n\n    -webkit-animation-name: react-loading-skeleton;\n\n            animation-name: react-loading-skeleton;\n    -webkit-animation-direction: var(--animation-direction);\n            animation-direction: var(--animation-direction);\n    -webkit-animation-duration: var(--animation-duration);\n            animation-duration: var(--animation-duration);\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/react-loading-skeleton/dist/skeleton.css"],"names":[],"mappings":"AAAA;IACI;QACI,mCAA2B;gBAA3B,2BAA2B;IAC/B;AACJ;;AAJA;IACI;QACI,mCAA2B;gBAA3B,2BAA2B;IAC/B;AACJ;;AAEA;IACI,qBAAqB;IACrB,0BAA0B;IAC1B,0BAA0B;IAC1B,6BAA6B;IAC7B,+BAA+B,EAAE,qBAAqB;;IAEtD,mCAAmC;;IAEnC,WAAW;IACX,sBAAsB;IACtB,oBAAoB;IACpB,cAAc;;IAEd,kBAAkB;IAClB,gBAAgB;IAChB,UAAU,EAAE,+DAA+D;AAC/E;;AAEA;IACI,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,4BAA4B;IAC5B;;;;;KAKC;IACD,oCAA4B;YAA5B,4BAA4B;;IAE5B,8CAAsC;;YAAtC,sCAAsC;IACtC,uDAA+C;YAA/C,+CAA+C;IAC/C,qDAA6C;YAA7C,6CAA6C;IAC7C,8CAAsC;YAAtC,sCAAsC;IACtC,2CAAmC;YAAnC,mCAAmC;AACvC","sourcesContent":["@keyframes react-loading-skeleton {\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.react-loading-skeleton {\n    --base-color: #ebebeb;\n    --highlight-color: #f5f5f5;\n    --animation-duration: 1.5s;\n    --animation-direction: normal;\n    --pseudo-element-display: block; /* Enable animation */\n\n    background-color: var(--base-color);\n\n    width: 100%;\n    border-radius: 0.25rem;\n    display: inline-flex;\n    line-height: 1;\n\n    position: relative;\n    overflow: hidden;\n    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\n}\n\n.react-loading-skeleton::after {\n    content: ' ';\n    display: var(--pseudo-element-display);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        var(--base-color),\n        var(--highlight-color),\n        var(--base-color)\n    );\n    transform: translateX(-100%);\n\n    animation-name: react-loading-skeleton;\n    animation-direction: var(--animation-direction);\n    animation-duration: var(--animation-duration);\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-loading-skeleton/dist/skeleton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/client/api/token.ts":
/*!*********************************!*\
  !*** ./src/client/api/token.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getToken = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identifier, publicKey } = configuration;
        if (!identifier || !publicKey)
            throw new Error("publicKey and identifier must be provided");
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: "/users/create/",
            data: { email: identifier, sdk_key: publicKey },
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getToken);


/***/ }),

/***/ "./src/client/api/user-goal-creation-status.ts":
/*!*****************************************************!*\
  !*** ./src/client/api/user-goal-creation-status.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const checkStatusOfGoalCreation = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/users/status/",
            token: configuration.token,
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStatusOfGoalCreation);


/***/ }),

/***/ "./src/client/pages/components/BalanceView.tsx":
/*!*****************************************************!*\
  !*** ./src/client/pages/components/BalanceView.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_pages_components_Amount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/pages/components/Amount */ "./src/client/pages/components/Amount.tsx");


const BalanceView = ({ balance, visible = true, toggleVisibility, viewBalance, currency, }) => {
    let accountBalance = balance;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col", onClick: viewBalance }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-skin-subtitle text-center font-poppins text-xs font-medium tracking-wide" }, { children: "Total savings" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mt-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_Amount__WEBPACK_IMPORTED_MODULE_1__.Amount, { balance: accountBalance }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-col justify-center" })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceView);


/***/ }),

/***/ "./src/client/pages/components/DepositButton.tsx":
/*!*******************************************************!*\
  !*** ./src/client/pages/components/DepositButton.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositButton": () => (/* binding */ DepositButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_deposit_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/assets/images/savings/deposit.webp */ "./src/client/assets/images/savings/deposit.webp");
/* harmony import */ var client_assets_images_savings_yellow_add_funds_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/savings/yellow-add-funds.svg */ "./src/client/assets/images/savings/yellow-add-funds.svg");



const DepositButton = ({ warning = false }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${warning ? "bg-skin-warningWithOpacity" : "bg-skin-secondaryWithOpacity"} px-3 py-1 rounded-3xl` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `text-skin-warning mr-1 w-4` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: warning ? client_assets_images_savings_yellow_add_funds_svg__WEBPACK_IMPORTED_MODULE_1__ : client_assets_images_savings_deposit_webp__WEBPACK_IMPORTED_MODULE_2__ }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${warning ? "text-skin-warning" : "text-skin-primary"} font-poppins text-xs font-semibold tracking-tab_text` }, { children: "Deposit" }))] })) })));
};


/***/ }),

/***/ "./src/client/pages/components/NotificationButton.tsx":
/*!************************************************************!*\
  !*** ./src/client/pages/components/NotificationButton.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_bell_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/savings/bell.svg */ "./src/client/assets/images/savings/bell.svg");


const NotificaitonsButton = ({ onClick, notificationCount = 0, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "rounded-full", onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_bell_svg__WEBPACK_IMPORTED_MODULE_1__ }) })), notificationCount > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "absolute top-0 right-0 rounded-full bg-skin-danger h-2 w-2" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificaitonsButton);


/***/ }),

/***/ "./src/client/pages/components/TransactionCardSkeleton.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/components/TransactionCardSkeleton.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./node_modules/react-loading-skeleton/dist/skeleton.css");



const TransactionCardSkeleton = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-lg px-4 py-3 w-auto mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { circle: true, width: 40, height: 40 }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: " font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-44" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium tracking-wide text-start` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {}) }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: " font-poppins text-sm font-medium text-black text-end text-ellipsis overflow-hidden whitespace-nowrap w-16" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium tracking-wide text-end w-12` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {}) }))] }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionCardSkeleton);


/***/ }),

/***/ "./src/client/pages/components/UpcomingSavingsCard.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/components/UpcomingSavingsCard.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var _DepositButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DepositButton */ "./src/client/pages/components/DepositButton.tsx");



const UpcomingSavingsCard = ({ id, goalName, amount, goalImage, due_date, onClick, }) => {
    const currencySymbol = "₦";
    const now = new Date();
    const warning = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__.isYesterday)(due_date);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-lg bg-white px-4 py-4 w-auto shadow-card mb-2", onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card rounded-full flex items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "rounded-full max-w-full align-middle border-none h-10 w-10\n                      ", src: goalImage }) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-sm font-semibold text-skin-title text-start text-ellipsis overflow-hidden whitespace-nowrap w-40 tracking-tab_text" }, { children: goalName })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center mt-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium tracking-wide text-start mr-1 ${warning ? "text-skin-warning" : "text-skin-primary"}` }, { children: currencySymbol })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium tracking-wide text-start mr-1 ${warning ? "text-skin-warning" : "text-skin-primary"}` }, { children: amount })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: " text-skin-subtitle font-medium text-xxxs" }, { children: ["/ ", (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(due_date)] }))] }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DepositButton__WEBPACK_IMPORTED_MODULE_2__.DepositButton, { warning: warning }) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingSavingsCard);


/***/ }),

/***/ "./src/client/pages/components/overview/GoalCreationProgress.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/pages/components/overview/GoalCreationProgress.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoalCreationProgress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


function GoalCreationProgress({ inProgress, title, subtitle, children, divider = true, }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mt-3 relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row pt-4" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `w-12 h-12 rounded-full border border-1 ${inProgress
                                    ? "border-skin-successTertiary text-skin-successTertiary"
                                    : "border-skin-secondary text-skin-primary"} text-center bg-white flex justify-center items-center` }, { children: children })), inProgress ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute  top-0 right-0 h-3.5 w-3.5 bg-skin-successTertiary text-skin-white rounded-full flex justify-center items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiCheck, { size: "0.625rem" }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col ml-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-skin-primary text-xs font-poppins tracking-longtext font-semibold" }, { children: title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-skin-subtitle text-xxxs font-poppins tracking-longest_text font-medium mt-2" }, { children: subtitle }))] }))] })), divider ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "absolute top-18 left-6 w-px h-3.5 bg-skin-accent" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })));
}


/***/ }),

/***/ "./src/client/pages/components/overview/MyGoals.tsx":
/*!**********************************************************!*\
  !*** ./src/client/pages/components/overview/MyGoals.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGoals": () => (/* binding */ MyGoals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_pages_components_GoalCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/pages/components/GoalCard */ "./src/client/pages/components/GoalCard.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts");






const MyGoals = ({ goals, completeGoals }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const confirmedGoal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    const currencySymbol = (0,client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [goals.map((goal, i) => {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_GoalCard__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: () => {
                        confirmedGoal.setConfirmedGoal(goal);
                        navigate("/goal-view");
                    }, id: goal.id, name: goal.name, amount: goal.amount, progress: goal.progress, imageUrl: goal.image_url.image_url, status: goal.progress === 50
                        ? "🚀 Halfway there"
                        : goal.is_active
                            ? ""
                            : `🪴 Resume goal, ${currencySymbol.currencySymbol} ${goal.amount}`, transacted_at: goal.transacted_at, is_active: goal.is_active, resume: () => { } }, i));
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mt-5" }, { children: completeGoals && (completeGoals === null || completeGoals === void 0 ? void 0 : completeGoals.length) > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center", onClick: () => setOpen(!open) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full flex justify-center items-center bg-skin-secondary1WithOpacity w-32 py-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-skin-neutral tracking-longtext font-poppins font-semibold text-xs" }, { children: open ? " Hide completed" : "Show completed" })) })) })), open ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-3" }, { children: completeGoals.map((goal, i) => {
                                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_GoalCard__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: () => {
                                        confirmedGoal.setConfirmedGoal(goal);
                                        navigate("/goal-view");
                                    }, id: goal.id, name: goal.name, amount: goal.amount, progress: goal.progress, imageUrl: goal.image_url.image_url, status: goal.status, transacted_at: goal.transacted_at, is_active: goal.is_active, resume: () => { } }, i));
                            }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})) }))] }));
};


/***/ }),

/***/ "./src/client/pages/components/overview/NotificationCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/pages/components/overview/NotificationCard.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationCard": () => (/* binding */ NotificationCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const NotificationCard = ({ amount }) => {
    const currencySymbol = "₦";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "px-5 py-3.5 shadow-card bg-skin-successWithOpacity rounded-lg relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-2xl mr-3" }, { children: "\uD83D\uDD25" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "text-skin-success font-poppins text-sm font-medium tracking-listtile_subtitle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "text-skin-success" }, { children: "Wow!" })), " You're getting it", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "skin-success" }, { children: " done with " })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "text-skin-success mr-1" }, { children: currencySymbol })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "text-skin-success" }, { children: Math.round(amount).toLocaleString("en-US") })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " saved this month." })] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute right-2 top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiX, { color: "#878787" }) }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/overview/OverviewTrackGoalCreationProgress.tsx":
/*!************************************************************************************!*\
  !*** ./src/client/pages/components/overview/OverviewTrackGoalCreationProgress.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_grow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/assets/images/savings/grow.svg */ "./src/client/assets/images/savings/grow.svg");
/* harmony import */ var client_assets_images_savings_sky_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/assets/images/savings/sky.svg */ "./src/client/assets/images/savings/sky.svg");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var client_pages_components_overview_GoalCreationProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/pages/components/overview/GoalCreationProgress */ "./src/client/pages/components/overview/GoalCreationProgress.tsx");
/* harmony import */ var client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/pages/components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var client_assets_images_bank_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/assets/images/bank.svg */ "./src/client/assets/images/bank.svg");
/* harmony import */ var client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/store/goalCreationStatus */ "./src/client/store/goalCreationStatus.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");










const OverviewTrackGoalCreationProgress = () => {
    const goalCreationStatus = (0,client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_1__["default"])((state) => state.goalCreationStatus);
    const { has_linked_account, has_income, has_goal } = goalCreationStatus;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const userToken = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)((state) => state.configuration.token);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "rounded-2xl my-6 pt-6 pb-4 px-3.5 shadow-card bg-overviewBg" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_grow_svg__WEBPACK_IMPORTED_MODULE_4__ }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_sky_svg__WEBPACK_IMPORTED_MODULE_5__ }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-3 pr-14" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-skin-primary text-base font-workSans tracking-title" }, { children: "Start your savings journey with Your Bank." })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_overview_GoalCreationProgress__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiBriefcase, { size: "0.875rem" }), title: "Add monthly income", subtitle: "Budget and save with ease", inProgress: has_income }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_overview_GoalCreationProgress__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiFlag, { size: "0.875rem" }), title: "Create a goal", subtitle: "Save and grow with us", inProgress: has_goal }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_overview_GoalCreationProgress__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_bank_svg__WEBPACK_IMPORTED_MODULE_8__ }), title: "Link an account", subtitle: "Track your goal with ease", inProgress: has_linked_account }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_overview_GoalCreationProgress__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiTrendingUp, { size: "0.875rem" }), title: "Add savings trigger", subtitle: "Boost your savings journey", divider: false })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_9__["default"], { isDisabled: !!!userToken, title: has_goal && !has_linked_account
                            ? "Link an account"
                            : has_income && !has_goal && !has_linked_account
                                ? "Create a goal"
                                : "Start your journey", click: userToken
                            ? () => {
                                has_goal && !has_linked_account
                                    ? navigate("/create-savings-goal")
                                    : has_income && !has_goal && !has_linked_account
                                        ? navigate("create-savings-goal")
                                        : navigate("goal-creation");
                            }
                            : () => { } }) }))] })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewTrackGoalCreationProgress);


/***/ }),

/***/ "./src/client/pages/components/overview/UpcomingSavings.tsx":
/*!******************************************************************!*\
  !*** ./src/client/pages/components/overview/UpcomingSavings.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingSavings": () => (/* binding */ UpcomingSavings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_pages_components_UpcomingSavingsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/pages/components/UpcomingSavingsCard */ "./src/client/pages/components/UpcomingSavingsCard.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_pages_overview_UpcomingSavingsEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/pages/overview/UpcomingSavingsEmpty */ "./src/client/pages/overview/UpcomingSavingsEmpty.tsx");




const UpcomingSavings = ({ upcomingSavings, }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    return upcomingSavings.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: upcomingSavings.map((upcomingSaving, i) => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_UpcomingSavingsCard__WEBPACK_IMPORTED_MODULE_2__["default"], { goalName: upcomingSaving.goalName, amount: upcomingSaving.amount, due_date: upcomingSaving.due_date, goalImage: upcomingSaving.goalImage }, i));
        }) })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col justify-center items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_overview_UpcomingSavingsEmpty__WEBPACK_IMPORTED_MODULE_3__.UpcomingSavingsEmptyState, {}) })));
};


/***/ }),

/***/ "./src/client/pages/overview/Overview.tsx":
/*!************************************************!*\
  !*** ./src/client/pages/overview/Overview.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var client_pages_components_SettingsButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/pages/components/SettingsButton */ "./src/client/pages/components/SettingsButton.tsx");
/* harmony import */ var client_pages_components_NotificationButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/pages/components/NotificationButton */ "./src/client/pages/components/NotificationButton.tsx");
/* harmony import */ var _components_BalanceView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/BalanceView */ "./src/client/pages/components/BalanceView.tsx");
/* harmony import */ var _components_AddGoalButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/AddGoalButton */ "./src/client/pages/components/AddGoalButton.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var client_api_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/api/token */ "./src/client/api/token.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var _components_overview_OverviewTrackGoalCreationProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/overview/OverviewTrackGoalCreationProgress */ "./src/client/pages/components/overview/OverviewTrackGoalCreationProgress.tsx");
/* harmony import */ var client_api_user_goal_creation_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/api/user-goal-creation-status */ "./src/client/api/user-goal-creation-status.ts");
/* harmony import */ var client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/store/goalCreationStatus */ "./src/client/store/goalCreationStatus.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/api/goal */ "./src/client/api/goal.ts");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var _components_overview_NotificationCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/overview/NotificationCard */ "./src/client/pages/components/overview/NotificationCard.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var client_utils_Toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/utils/Toast */ "./src/client/utils/Toast.ts");
/* harmony import */ var client_store_notificationStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/store/notificationStore */ "./src/client/store/notificationStore.ts");
/* harmony import */ var _components_TransactionCardSkeleton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/TransactionCardSkeleton */ "./src/client/pages/components/TransactionCardSkeleton.tsx");
/* harmony import */ var _components_TabFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/TabFilter */ "./src/client/pages/components/TabFilter.tsx");
/* harmony import */ var _components_overview_UpcomingSavings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/overview/UpcomingSavings */ "./src/client/pages/components/overview/UpcomingSavings.tsx");
/* harmony import */ var _components_overview_MyGoals__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/overview/MyGoals */ "./src/client/pages/components/overview/MyGoals.tsx");
/* harmony import */ var client_utils_MockData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! client/utils/MockData */ "./src/client/utils/MockData.tsx");
/* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts");



























const Overview = () => {
    var _a, _b;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_6__.useConfigurationStore)((state) => state.configuration);
    const setToken = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_6__.useConfigurationStore)((state) => state.setToken);
    const setUser = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_7__["default"])((state) => state.setUser);
    const setGoalCreationStatus = (0,client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_8__["default"])((state) => state.setGoalCreationStatus);
    const notificationsStore = (_a = (0,client_store_notificationStore__WEBPACK_IMPORTED_MODULE_9__["default"])((state) => state)) !== null && _a !== void 0 ? _a : [];
    const [tabIndex, setTabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const accountStore = (0,client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_10__["default"])((state) => state);
    const allConfirmedGoals = (_b = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state.confirmedGoals)) !== null && _b !== void 0 ? _b : [];
    const completeGoals = goal.confirmedGoals.filter((element) => element.progress === 100);
    const uncompleteGoals = goal.confirmedGoals.filter((element) => element.progress !== 100);
    const { data } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["token"], () => (0,client_api_token__WEBPACK_IMPORTED_MODULE_11__["default"])(configuration).then((res) => {
        if (typeof res.user !== "undefined") {
            setUser(res.user);
            setToken(res.token);
        }
        else {
            navigate("/");
            (0,client_utils_Toast__WEBPACK_IMPORTED_MODULE_12__.showCustomToast)({ message: "The sdk key is invalid" });
        }
    }), {
        refetchOnWindowFocus: false,
    });
    const { data: goalCreationStatusData } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["checkStatusOfGoalCreation"], () => (0,client_api_user_goal_creation_status__WEBPACK_IMPORTED_MODULE_13__["default"])(configuration).then((res) => {
        setGoalCreationStatus(res);
    }), { enabled: !!configuration.token });
    const { isFetching: confirmedGoalsFetching, data: confirmedGoals, isSuccess: goalsFetched, } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("confirmed-goals", () => (0,client_api_goal__WEBPACK_IMPORTED_MODULE_14__.getConfirmedGoals)({ configuration: configuration }).then((result) => {
        if (result) {
            goal.setConfirmedGoals(result);
        }
    }), { enabled: !!configuration.token, refetchOnWindowFocus: false });
    const { data: totalContributions } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("total-contributions", () => (0,client_api_goal__WEBPACK_IMPORTED_MODULE_14__.totalContribution)({ configuration: configuration }).then((result) => {
        if (result) {
            goal.setTotalContribution(result.total_contributions);
        }
    }), { enabled: !!configuration.token });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen bg-white overflow-y-auto overflow-x-hidden no-scrollbar px-3.5 relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_15__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-end" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NotificationButton__WEBPACK_IMPORTED_MODULE_16__["default"], { onClick: () => configuration.token ? navigate("/notifications") : null, notificationCount: notificationsStore.notifications.length }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "ml-6 mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_SettingsButton__WEBPACK_IMPORTED_MODULE_17__["default"], { onClick: () => configuration.token ? navigate("/settings") : null }) }))] })) })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6 flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BalanceView__WEBPACK_IMPORTED_MODULE_18__["default"], { balance: goal.totalContribution, currency: "\u20A6" }) })), (goalsFetched && goal.confirmedGoals.length > 0) ||
                (confirmedGoalsFetching && goal.confirmedGoals.length > 0) ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [goal.totalContribution > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_overview_NotificationCard__WEBPACK_IMPORTED_MODULE_19__.NotificationCard, { amount: goal.totalContribution }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TabFilter__WEBPACK_IMPORTED_MODULE_20__["default"], { tabs: client_utils_MockData__WEBPACK_IMPORTED_MODULE_21__.tabs, activeTab: tabIndex, onClick: (tab) => setTabIndex(tab.tab_id) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4" }, { children: tabIndex == 1 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_overview_UpcomingSavings__WEBPACK_IMPORTED_MODULE_22__.UpcomingSavings, { upcomingSavings: client_utils_MockData__WEBPACK_IMPORTED_MODULE_21__.upcomingSavings })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_overview_MyGoals__WEBPACK_IMPORTED_MODULE_23__.MyGoals, { goals: uncompleteGoals, completeGoals: completeGoals })) }))] }))] })) : goalsFetched && goal.confirmedGoals.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_overview_OverviewTrackGoalCreationProgress__WEBPACK_IMPORTED_MODULE_24__["default"], {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-1 mb-4" }, { children: Array(10)
                    .fill("a")
                    .map((_, i) => {
                    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TransactionCardSkeleton__WEBPACK_IMPORTED_MODULE_25__["default"], {}, i);
                }) }))), goal.confirmedGoals.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-4 right-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddGoalButton__WEBPACK_IMPORTED_MODULE_26__.AddGoalButton, { onClick: () => {
                        navigate("/goal-creation");
                    } }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {})] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);


/***/ }),

/***/ "./src/client/pages/overview/UpcomingSavingsEmpty.tsx":
/*!************************************************************!*\
  !*** ./src/client/pages/overview/UpcomingSavingsEmpty.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingSavingsEmptyState": () => (/* binding */ UpcomingSavingsEmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_empty_state_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/savings/empty-state.svg */ "./src/client/assets/images/savings/empty-state.svg");


const UpcomingSavingsEmptyState = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-10" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mb-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_empty_state_svg__WEBPACK_IMPORTED_MODULE_1__ }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center font-workSans font-semibold text-base tracking-title text-skin-neutral mb-3" }, { children: "No upcoming savings yet!" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-row justify-center font-workSans font-medium text-tiny tracking-listtile_subtitle text-center text-skin-subtitle mx-12" })] })));
};


/***/ }),

/***/ "./src/client/store/goalCreationStatus.ts":
/*!************************************************!*\
  !*** ./src/client/store/goalCreationStatus.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useGoalCreationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    goalCreationStatus: {},
    setGoalCreationStatus: (status) => {
        return set((state) => {
            const result = {
                goalCreationStatus: status,
            };
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGoalCreationStore);


/***/ }),

/***/ "./src/client/utils/Toast.ts":
/*!***********************************!*\
  !*** ./src/client/utils/Toast.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCustomToast": () => (/* binding */ showCustomToast)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");

const showCustomToast = ({ message }) => {
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(message, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: "toast",
        closeButton: false,
    });
};


/***/ }),

/***/ "./src/client/assets/images/bank.svg":
/*!*******************************************!*\
  !*** ./src/client/assets/images/bank.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a423f6c8ed525d91a78.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/bell.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/images/savings/bell.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2e7bcf63d3638dcd26d.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/deposit.webp":
/*!*******************************************************!*\
  !*** ./src/client/assets/images/savings/deposit.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2667cb7c4e4c15226f2.webp";

/***/ }),

/***/ "./src/client/assets/images/savings/grow.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/images/savings/grow.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cba3c422876fcd0719c7.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/sky.svg":
/*!**************************************************!*\
  !*** ./src/client/assets/images/savings/sky.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "500886137d3f03517287.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/yellow-add-funds.svg":
/*!***************************************************************!*\
  !*** ./src/client/assets/images/savings/yellow-add-funds.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec9924e0c7d44e89a3d4.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19vdmVydmlld19PdmVydmlld190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnRztBQUNqQjtBQUMvRSw4QkFBOEIsc0VBQTJCLENBQUMsK0VBQXFDO0FBQy9GO0FBQ0EscUZBQXFGLFlBQVksOENBQThDLDhDQUE4QyxPQUFPLEdBQUcsdUNBQXVDLFlBQVksOENBQThDLDhDQUE4QyxPQUFPLEdBQUcsNkJBQTZCLDRCQUE0QixpQ0FBaUMsaUNBQWlDLG9DQUFvQyx1Q0FBdUMsa0VBQWtFLG9CQUFvQiw2QkFBNkIsMkJBQTJCLHFCQUFxQiwyQkFBMkIsdUJBQXVCLGtCQUFrQixtRUFBbUUsb0NBQW9DLG1CQUFtQiw2Q0FBNkMseUJBQXlCLGFBQWEsY0FBYyxlQUFlLG1CQUFtQixtQ0FBbUMsd0pBQXdKLDJDQUEyQywyQ0FBMkMsdURBQXVELHVEQUF1RCw4REFBOEQsOERBQThELDREQUE0RCw0REFBNEQscURBQXFELHFEQUFxRCxrREFBa0Qsa0RBQWtELEdBQUcsU0FBUyx3SEFBd0gsS0FBSyxZQUFZLGNBQWMsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGNBQWMsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSwwQkFBMEIsY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxVQUFVLEtBQUssWUFBWSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsNkRBQTZELFlBQVksc0NBQXNDLE9BQU8sR0FBRyw2QkFBNkIsNEJBQTRCLGlDQUFpQyxpQ0FBaUMsb0NBQW9DLHVDQUF1QyxrRUFBa0Usb0JBQW9CLDZCQUE2QiwyQkFBMkIscUJBQXFCLDJCQUEyQix1QkFBdUIsa0JBQWtCLG1FQUFtRSxvQ0FBb0MsbUJBQW1CLDZDQUE2Qyx5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QUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pHO0FBSWhDLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQVMsRUFBRSxFQUFFO0lBQ3BELHFEQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2IsUUFBUSxFQUFFLHVFQUEyQjtRQUNyQyxlQUFlLEVBQUUsSUFBSTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsSUFBSTtRQUNsQixTQUFTLEVBQUUsT0FBTztRQUNsQixXQUFXLEVBQUUsS0FBSztLQUNuQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3M/MDgxMyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvYXBpL3Rva2VuLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9hcGkvdXNlci1nb2FsLWNyZWF0aW9uLXN0YXR1cy50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9CYWxhbmNlVmlldy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvRGVwb3NpdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9UcmFuc2FjdGlvbkNhcmRTa2VsZXRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVXBjb21pbmdTYXZpbmdzQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvb3ZlcnZpZXcvR29hbENyZWF0aW9uUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL292ZXJ2aWV3L015R29hbHMudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL292ZXJ2aWV3L05vdGlmaWNhdGlvbkNhcmQudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL292ZXJ2aWV3L092ZXJ2aWV3VHJhY2tHb2FsQ3JlYXRpb25Qcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvb3ZlcnZpZXcvVXBjb21pbmdTYXZpbmdzLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvb3ZlcnZpZXcvT3ZlcnZpZXcudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9vdmVydmlldy9VcGNvbWluZ1NhdmluZ3NFbXB0eS50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3N0b3JlL2dvYWxDcmVhdGlvblN0YXR1cy50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvdXRpbHMvVG9hc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIHJlYWN0LWxvYWRpbmctc2tlbGV0b24ge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByZWFjdC1sb2FkaW5nLXNrZWxldG9uIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxufVxcblxcbi5yZWFjdC1sb2FkaW5nLXNrZWxldG9uIHtcXG4gICAgLS1iYXNlLWNvbG9yOiAjZWJlYmViO1xcbiAgICAtLWhpZ2hsaWdodC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgLS1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICAgIC0tYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAtLXBzZXVkby1lbGVtZW50LWRpc3BsYXk6IGJsb2NrOyAvKiBFbmFibGUgYW5pbWF0aW9uICovXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7IC8qIE5lY2Vzc2FyeSBmb3Igb3ZlcmZsb3c6IGhpZGRlbiB0byB3b3JrIGNvcnJlY3RseSBpbiBTYWZhcmkgKi9cXG59XFxuXFxuLnJlYWN0LWxvYWRpbmctc2tlbGV0b246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB2YXIoLS1wc2V1ZG8tZWxlbWVudC1kaXNwbGF5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDkwZGVnLFxcbiAgICAgICAgdmFyKC0tYmFzZS1jb2xvciksXFxuICAgICAgICB2YXIoLS1oaWdobGlnaHQtY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYmFzZS1jb2xvcilcXG4gICAgKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJlYWN0LWxvYWRpbmctc2tlbGV0b247XFxuXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJlYWN0LWxvYWRpbmctc2tlbGV0b247XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRpcmVjdGlvbik7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRpcmVjdGlvbik7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0lBQy9CO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsK0JBQStCLEVBQUUscUJBQXFCOztJQUV0RCxtQ0FBbUM7O0lBRW5DLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGNBQWM7O0lBRWQsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVLEVBQUUsK0RBQStEO0FBQy9FOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qjs7Ozs7S0FLQztJQUNELG9DQUE0QjtZQUE1Qiw0QkFBNEI7O0lBRTVCLDhDQUFzQzs7WUFBdEMsc0NBQXNDO0lBQ3RDLHVEQUErQztZQUEvQywrQ0FBK0M7SUFDL0MscURBQTZDO1lBQTdDLDZDQUE2QztJQUM3Qyw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyByZWFjdC1sb2FkaW5nLXNrZWxldG9uIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLnJlYWN0LWxvYWRpbmctc2tlbGV0b24ge1xcbiAgICAtLWJhc2UtY29sb3I6ICNlYmViZWI7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAjZjVmNWY1O1xcbiAgICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gICAgLS1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIC0tcHNldWRvLWVsZW1lbnQtZGlzcGxheTogYmxvY2s7IC8qIEVuYWJsZSBhbmltYXRpb24gKi9cXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTsgLyogTmVjZXNzYXJ5IGZvciBvdmVyZmxvdzogaGlkZGVuIHRvIHdvcmsgY29ycmVjdGx5IGluIFNhZmFyaSAqL1xcbn1cXG5cXG4ucmVhY3QtbG9hZGluZy1za2VsZXRvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IHZhcigtLXBzZXVkby1lbGVtZW50LWRpc3BsYXkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgOTBkZWcsXFxuICAgICAgICB2YXIoLS1iYXNlLWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWhpZ2hsaWdodC1jb2xvciksXFxuICAgICAgICB2YXIoLS1iYXNlLWNvbG9yKVxcbiAgICApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcblxcbiAgICBhbmltYXRpb24tbmFtZTogcmVhY3QtbG9hZGluZy1za2VsZXRvbjtcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRpcmVjdGlvbik7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tIFwiY2xpZW50L2FwaS9hcGlcIjtcblxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciwgcHVibGljS2V5IH0gPSBjb25maWd1cmF0aW9uO1xuICAgIGlmICghaWRlbnRpZmllciB8fCAhcHVibGljS2V5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHVibGljS2V5IGFuZCBpZGVudGlmaWVyIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJzL2NyZWF0ZS9cIixcbiAgICAgIGRhdGE6IHsgZW1haWw6IGlkZW50aWZpZXIsIHNka19rZXk6IHB1YmxpY0tleSB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuO1xuIiwiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcblxuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEsIHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5cbmNvbnN0IGNoZWNrU3RhdHVzT2ZHb2FsQ3JlYXRpb24gPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvdXNlcnMvc3RhdHVzL1wiLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tTdGF0dXNPZkdvYWxDcmVhdGlvbjtcbiIsImltcG9ydCB7IGNoZWNrTkFOIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyBBbW91bnQgfSBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQW1vdW50XCI7XG50eXBlIEJhbGFuY2VWaWV3UHJvcHMgPSB7XG4gIGJhbGFuY2U/OiBudW1iZXI7XG4gIHZpc2libGU/OiBib29sZWFuO1xuICB0b2dnbGVWaXNpYmlsaXR5PzogKCkgPT4gdm9pZDtcbiAgdmlld0JhbGFuY2U/OiAoKSA9PiB2b2lkO1xuICBjdXJyZW5jeT86IHN0cmluZztcbn07XG5jb25zdCBCYWxhbmNlVmlldyA9ICh7XG4gIGJhbGFuY2UsXG4gIHZpc2libGUgPSB0cnVlLFxuICB0b2dnbGVWaXNpYmlsaXR5LFxuICB2aWV3QmFsYW5jZSxcbiAgY3VycmVuY3ksXG59OiBCYWxhbmNlVmlld1Byb3BzKSA9PiB7XG4gIGxldCBhY2NvdW50QmFsYW5jZSA9IGJhbGFuY2U7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uQ2xpY2s9e3ZpZXdCYWxhbmNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLXN1YnRpdGxlIHRleHQtY2VudGVyIGZvbnQtcG9wcGlucyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgIFRvdGFsIHNhdmluZ3NcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xXCI+XG4gICAgICAgICAgezxBbW91bnQgYmFsYW5jZT17YWNjb3VudEJhbGFuY2V9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZVZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGVwb3NpdEljb24gZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvZGVwb3NpdC53ZWJwXCI7XG5pbXBvcnQgd2FybmluZ0RlcG9zaXRJY29uIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3llbGxvdy1hZGQtZnVuZHMuc3ZnXCI7XG50eXBlIERlcG9zaXRCdXR0b25Qcm9wcyA9IHtcbiAgd2FybmluZz86IGJvb2xlYW47XG59O1xuZXhwb3J0IGNvbnN0IERlcG9zaXRCdXR0b24gPSAoeyB3YXJuaW5nID0gZmFsc2UgfTogRGVwb3NpdEJ1dHRvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgd2FybmluZyA/IFwiYmctc2tpbi13YXJuaW5nV2l0aE9wYWNpdHlcIiA6IFwiYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eVwiXG4gICAgICB9IHB4LTMgcHktMSByb3VuZGVkLTN4bGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtc2tpbi13YXJuaW5nIG1yLTEgdy00YH0+XG4gICAgICAgICAgPGltZyBzcmM9e3dhcm5pbmcgPyB3YXJuaW5nRGVwb3NpdEljb24gOiBkZXBvc2l0SWNvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgd2FybmluZyA/IFwidGV4dC1za2luLXdhcm5pbmdcIiA6IFwidGV4dC1za2luLXByaW1hcnlcIlxuICAgICAgICAgIH0gZm9udC1wb3BwaW5zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy10YWJfdGV4dGB9XG4gICAgICAgID5cbiAgICAgICAgICBEZXBvc2l0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG5vdGlmaWNhdGlvbnMgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvYmVsbC5zdmdcIjtcbnR5cGUgTm90aWZpY2FpdG9uc0J1dHRvblByb3BzID0ge1xuICBub3RpZmljYXRpb25Db3VudD86IG51bWJlcjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuY29uc3QgTm90aWZpY2FpdG9uc0J1dHRvbiA9ICh7XG4gIG9uQ2xpY2ssXG4gIG5vdGlmaWNhdGlvbkNvdW50ID0gMCxcbn06IE5vdGlmaWNhaXRvbnNCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb25zfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7bm90aWZpY2F0aW9uQ291bnQgPiAwID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcm91bmRlZC1mdWxsIGJnLXNraW4tZGFuZ2VyIGgtMiB3LTJcIj48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhaXRvbnNCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJztcblxuY29uc3QgVHJhbnNhY3Rpb25DYXJkU2tlbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHB4LTQgcHktMyB3LWF1dG8gbWItMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTNcIj5cbiAgICAgICAgICAgICAgPFNrZWxldG9uIGNpcmNsZSB3aWR0aD17NDB9IGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmb250LXBvcHBpbnMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIHRleHQtc3RhcnQgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW4gd2hpdGVzcGFjZS1ub3dyYXAgdy00NFwiPlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgdGV4dC1zdGFydGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZvbnQtcG9wcGlucyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgdGV4dC1lbmQgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW4gd2hpdGVzcGFjZS1ub3dyYXAgdy0xNlwiPlxuICAgICAgICAgICAgPFNrZWxldG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1wb3BwaW5zIHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSB0ZXh0LWVuZCB3LTEyYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNhcmRTa2VsZXRvbjtcbiIsImltcG9ydCB7IEVtb2ppIH0gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0Vtb2ppXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSBcImNsaWVudC9tb2RlbHMvR29hbFwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCJjbGllbnQvbW9kZWxzL0NhdGVnb3J5XCI7XG5pbXBvcnQgdXNlQWNjb3VudFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvYmFua0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRzIGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRzXCI7XG5pbXBvcnQgdW5jYXRlZ29yaXplZCBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvdW5jYXRlZ29yaXplZC5zdmdcIjtcbmltcG9ydCB7XG4gIGJ1aWxkU3R5bGVzLFxuICBDaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuLFxufSBmcm9tIFwicmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCBHb2FsIGZyb20gXCJjbGllbnQvbW9kZWxzL0dvYWxcIjtcbmltcG9ydCBVcGNvbWluZ1NhdmluZyBmcm9tIFwiY2xpZW50L21vZGVscy9VcGNvbWluZ1NhdmluZ1wiO1xuaW1wb3J0IHsgZGF0ZUZvcm1hdCwgaXNZZXN0ZXJkYXkgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB7IERlcG9zaXRCdXR0b24gfSBmcm9tIFwiLi9EZXBvc2l0QnV0dG9uXCI7XG5cbmNvbnN0IFVwY29taW5nU2F2aW5nc0NhcmQgPSAoe1xuICBpZCxcbiAgZ29hbE5hbWUsXG4gIGFtb3VudCxcbiAgZ29hbEltYWdlLFxuICBkdWVfZGF0ZSxcbiAgb25DbGljayxcbn06IFVwY29taW5nU2F2aW5nKSA9PiB7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gXCLigqZcIjtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgd2FybmluZyA9IGlzWWVzdGVyZGF5KGR1ZV9kYXRlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHB4LTQgcHktNCB3LWF1dG8gc2hhZG93LWNhcmQgbWItMlwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNhcmQgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG1heC13LWZ1bGwgYWxpZ24tbWlkZGxlIGJvcmRlci1ub25lIGgtMTAgdy0xMFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e2dvYWxJbWFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1za2luLXRpdGxlIHRleHQtc3RhcnQgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW4gd2hpdGVzcGFjZS1ub3dyYXAgdy00MCB0cmFja2luZy10YWJfdGV4dFwiPlxuICAgICAgICAgICAgICAgIHtnb2FsTmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbXQtMVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgdGV4dC1zdGFydCBtci0xICR7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcgPyBcInRleHQtc2tpbi13YXJuaW5nXCIgOiBcInRleHQtc2tpbi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHRleHQtc3RhcnQgbXItMSAke1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nID8gXCJ0ZXh0LXNraW4td2FybmluZ1wiIDogXCJ0ZXh0LXNraW4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YW1vdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtc2tpbi1zdWJ0aXRsZSBmb250LW1lZGl1bSB0ZXh0LXh4eHNcIj5cbiAgICAgICAgICAgICAgICAgIC8ge2RhdGVGb3JtYXQoZHVlX2RhdGUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPERlcG9zaXRCdXR0b24gd2FybmluZz17d2FybmluZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBVcGNvbWluZ1NhdmluZ3NDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xudHlwZSBHb2FsQ3JlYXRpb25Qcm9ncmVzc1Byb3BzID0ge1xuICBpblByb2dyZXNzPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBkaXZpZGVyPzogYm9vbGVhbjtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29hbENyZWF0aW9uUHJvZ3Jlc3Moe1xuICBpblByb2dyZXNzLFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGNoaWxkcmVuLFxuICBkaXZpZGVyID0gdHJ1ZSxcbn06IEdvYWxDcmVhdGlvblByb2dyZXNzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMyByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci0xICR7XG4gICAgICAgICAgICAgIGluUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLXNraW4tc3VjY2Vzc1RlcnRpYXJ5IHRleHQtc2tpbi1zdWNjZXNzVGVydGlhcnlcIlxuICAgICAgICAgICAgICAgIDogXCJib3JkZXItc2tpbi1zZWNvbmRhcnkgdGV4dC1za2luLXByaW1hcnlcIlxuICAgICAgICAgICAgfSB0ZXh0LWNlbnRlciBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpblByb2dyZXNzID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAgdG9wLTAgcmlnaHQtMCBoLTMuNSB3LTMuNSBiZy1za2luLXN1Y2Nlc3NUZXJ0aWFyeSB0ZXh0LXNraW4td2hpdGUgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxGaUNoZWNrIHNpemU9XCIwLjYyNXJlbVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLTMuNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLXByaW1hcnkgdGV4dC14cyBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ3RleHQgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLXN1YnRpdGxlIHRleHQteHh4cyBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ2VzdF90ZXh0IGZvbnQtbWVkaXVtIG10LTJcIj5cbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkaXZpZGVyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xOCBsZWZ0LTYgdy1weCBoLTMuNSBiZy1za2luLWFjY2VudFwiPjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgR29hbCBmcm9tIFwiY2xpZW50L21vZGVscy9Hb2FsXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSBcImNsaWVudC9tb2RlbHMvR29hbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR29hbENhcmQgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0dvYWxDYXJkXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DYXJkIGZyb20gXCIuLi9Hb2FsQ2FyZFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxTdG9yZVwiO1xuaW1wb3J0IHsgcmVzdW1lQUdvYWwgfSBmcm9tIFwiY2xpZW50L3V0aWxzL1Jlc3VtZUdvYWxcIjtcbmltcG9ydCB1c2VNb250aGx5SW5jb21lU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9tb250aGx5SW5jb21lXCI7XG5cbnR5cGUgTXlHb2Fsc1Byb3BzID0ge1xuICBnb2FsczogQXJyYXk8R29hbD47XG4gIGNvbXBsZXRlR29hbHM/OiBBcnJheTxHb2FsPjtcbn07XG5leHBvcnQgY29uc3QgTXlHb2FscyA9ICh7IGdvYWxzLCBjb21wbGV0ZUdvYWxzIH06IE15R29hbHNQcm9wcykgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY29uZmlybWVkR29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IHVzZU1vbnRobHlJbmNvbWVTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Z29hbHMubWFwKChnb2FsOiBhbnksIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8R29hbENhcmRcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uZmlybWVkR29hbC5zZXRDb25maXJtZWRHb2FsKGdvYWwpO1xuICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9nb2FsLXZpZXdcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9e2dvYWwuaWR9XG4gICAgICAgICAgICBuYW1lPXtnb2FsLm5hbWV9XG4gICAgICAgICAgICBhbW91bnQ9e2dvYWwuYW1vdW50fVxuICAgICAgICAgICAgcHJvZ3Jlc3M9e2dvYWwucHJvZ3Jlc3N9XG4gICAgICAgICAgICBpbWFnZVVybD17Z29hbC5pbWFnZV91cmwuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgc3RhdHVzPXtcbiAgICAgICAgICAgICAgZ29hbC5wcm9ncmVzcyA9PT0gNTBcbiAgICAgICAgICAgICAgICA/IFwi8J+agCBIYWxmd2F5IHRoZXJlXCJcbiAgICAgICAgICAgICAgICA6IGdvYWwuaXNfYWN0aXZlXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBg8J+qtCBSZXN1bWUgZ29hbCwgJHtjdXJyZW5jeVN5bWJvbC5jdXJyZW5jeVN5bWJvbH0gJHtnb2FsLmFtb3VudH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2FjdGVkX2F0PXtnb2FsLnRyYW5zYWN0ZWRfYXR9XG4gICAgICAgICAgICBpc19hY3RpdmU9e2dvYWwuaXNfYWN0aXZlfVxuICAgICAgICAgICAgcmVzdW1lPXsoKSA9PiB7fX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNVwiPlxuICAgICAgICB7Y29tcGxldGVHb2FscyAmJiBjb21wbGV0ZUdvYWxzPy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctc2tpbi1zZWNvbmRhcnkxV2l0aE9wYWNpdHkgdy0zMiBweS0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tbmV1dHJhbCB0cmFja2luZy1sb25ndGV4dCBmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICB7b3BlbiA/IFwiIEhpZGUgY29tcGxldGVkXCIgOiBcIlNob3cgY29tcGxldGVkXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICAgICAge2NvbXBsZXRlR29hbHMubWFwKChnb2FsOiBhbnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxHb2FsQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtZWRHb2FsLnNldENvbmZpcm1lZEdvYWwoZ29hbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9nb2FsLXZpZXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17Z29hbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtnb2FsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtnb2FsLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17Z29hbC5wcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17Z29hbC5pbWFnZV91cmwuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17Z29hbC5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3RlZF9hdD17Z29hbC50cmFuc2FjdGVkX2F0fVxuICAgICAgICAgICAgICAgICAgICAgIGlzX2FjdGl2ZT17Z29hbC5pc19hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdW1lPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xudHlwZSBOb3RpZmljYXRpb25DYXJkUHJvcHMgPSB7XG4gIGFtb3VudDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNhcmQgPSAoeyBhbW91bnQgfTogTm90aWZpY2F0aW9uQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gXCLigqZcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMy41IHNoYWRvdy1jYXJkIGJnLXNraW4tc3VjY2Vzc1dpdGhPcGFjaXR5IHJvdW5kZWQtbGcgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTNcIj7wn5SlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2tpbi1zdWNjZXNzIGZvbnQtcG9wcGlucyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tc3VjY2Vzc1wiPldvdyE8L3NwYW4+IFlvdSdyZSBnZXR0aW5nIGl0XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJza2luLXN1Y2Nlc3NcIj4gZG9uZSB3aXRoIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2tpbi1zdWNjZXNzIG1yLTFcIj57Y3VycmVuY3lTeW1ib2x9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1za2luLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAge01hdGgucm91bmQoYW1vdW50KS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+IHNhdmVkIHRoaXMgbW9udGguPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIHRvcC0yXCI+XG4gICAgICAgIDxGaVggY29sb3I9XCIjODc4Nzg3XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBncm93IGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2dyb3cuc3ZnXCI7XG5pbXBvcnQgc2t5IGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3NreS5zdmdcIjtcbmltcG9ydCB7IEZpQnJpZWZjYXNlLCBGaUZsYWcsIEZpVHJlbmRpbmdVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEdvYWxDcmVhdGlvblByb2dyZXNzIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9vdmVydmlldy9Hb2FsQ3JlYXRpb25Qcm9ncmVzc1wiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBiYW5rIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9iYW5rLnN2Z1wiO1xuaW1wb3J0IHVzZUdvYWxDcmVhdGlvblN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENyZWF0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmNvbnN0IE92ZXJ2aWV3VHJhY2tHb2FsQ3JlYXRpb25Qcm9ncmVzcyA9ICgpID0+IHtcbiAgY29uc3QgZ29hbENyZWF0aW9uU3RhdHVzID0gdXNlR29hbENyZWF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmdvYWxDcmVhdGlvblN0YXR1c1xuICApO1xuICBjb25zdCB7IGhhc19saW5rZWRfYWNjb3VudCwgaGFzX2luY29tZSwgaGFzX2dvYWwgfSA9IGdvYWxDcmVhdGlvblN0YXR1cztcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB1c2VyVG9rZW4gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb24udG9rZW5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBteS02IHB0LTYgcGItNCBweC0zLjUgc2hhZG93LWNhcmQgYmctb3ZlcnZpZXdCZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17Z3Jvd30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtza3l9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgcHItMTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2tpbi1wcmltYXJ5IHRleHQtYmFzZSBmb250LXdvcmtTYW5zIHRyYWNraW5nLXRpdGxlXCI+XG4gICAgICAgICAgICBTdGFydCB5b3VyIHNhdmluZ3Mgam91cm5leSB3aXRoIFlvdXIgQmFuay5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxHb2FsQ3JlYXRpb25Qcm9ncmVzc1xuICAgICAgICAgICAgY2hpbGRyZW49ezxGaUJyaWVmY2FzZSBzaXplPVwiMC44NzVyZW1cIiAvPn1cbiAgICAgICAgICAgIHRpdGxlPVwiQWRkIG1vbnRobHkgaW5jb21lXCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiQnVkZ2V0IGFuZCBzYXZlIHdpdGggZWFzZVwiXG4gICAgICAgICAgICBpblByb2dyZXNzPXtoYXNfaW5jb21lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdvYWxDcmVhdGlvblByb2dyZXNzXG4gICAgICAgICAgICBjaGlsZHJlbj17PEZpRmxhZyBzaXplPVwiMC44NzVyZW1cIiAvPn1cbiAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIGEgZ29hbFwiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cIlNhdmUgYW5kIGdyb3cgd2l0aCB1c1wiXG4gICAgICAgICAgICBpblByb2dyZXNzPXtoYXNfZ29hbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHb2FsQ3JlYXRpb25Qcm9ncmVzc1xuICAgICAgICAgICAgY2hpbGRyZW49ezxpbWcgc3JjPXtiYW5rfSAvPn1cbiAgICAgICAgICAgIHRpdGxlPVwiTGluayBhbiBhY2NvdW50XCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiVHJhY2sgeW91ciBnb2FsIHdpdGggZWFzZVwiXG4gICAgICAgICAgICBpblByb2dyZXNzPXtoYXNfbGlua2VkX2FjY291bnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R29hbENyZWF0aW9uUHJvZ3Jlc3NcbiAgICAgICAgICAgIGNoaWxkcmVuPXs8RmlUcmVuZGluZ1VwIHNpemU9XCIwLjg3NXJlbVwiIC8+fVxuICAgICAgICAgICAgdGl0bGU9XCJBZGQgc2F2aW5ncyB0cmlnZ2VyXCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiQm9vc3QgeW91ciBzYXZpbmdzIGpvdXJuZXlcIlxuICAgICAgICAgICAgZGl2aWRlcj17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxNYWluQnV0dG9uXG4gICAgICAgICAgICBpc0Rpc2FibGVkPXshISF1c2VyVG9rZW59XG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgIGhhc19nb2FsICYmICFoYXNfbGlua2VkX2FjY291bnRcbiAgICAgICAgICAgICAgICA/IFwiTGluayBhbiBhY2NvdW50XCJcbiAgICAgICAgICAgICAgICA6IGhhc19pbmNvbWUgJiYgIWhhc19nb2FsICYmICFoYXNfbGlua2VkX2FjY291bnRcbiAgICAgICAgICAgICAgICA/IFwiQ3JlYXRlIGEgZ29hbFwiXG4gICAgICAgICAgICAgICAgOiBcIlN0YXJ0IHlvdXIgam91cm5leVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGljaz17XG4gICAgICAgICAgICAgIHVzZXJUb2tlblxuICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYXNfZ29hbCAmJiAhaGFzX2xpbmtlZF9hY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBuYXZpZ2F0ZShcIi9jcmVhdGUtc2F2aW5ncy1nb2FsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgOiBoYXNfaW5jb21lICYmICFoYXNfZ29hbCAmJiAhaGFzX2xpbmtlZF9hY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBuYXZpZ2F0ZShcImNyZWF0ZS1zYXZpbmdzLWdvYWxcIilcbiAgICAgICAgICAgICAgICAgICAgICA6IG5hdmlnYXRlKFwiZ29hbC1jcmVhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBPdmVydmlld1RyYWNrR29hbENyZWF0aW9uUHJvZ3Jlc3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXBjb21pbmdTYXZpbmdzQ2FyZCBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVXBjb21pbmdTYXZpbmdzQ2FyZFwiO1xuaW1wb3J0IFVwY29taW5nU2F2aW5nIGZyb20gXCJjbGllbnQvbW9kZWxzL1VwY29taW5nU2F2aW5nXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBVcGNvbWluZ1NhdmluZ3NFbXB0eVN0YXRlIH0gZnJvbSBcImNsaWVudC9wYWdlcy9vdmVydmlldy9VcGNvbWluZ1NhdmluZ3NFbXB0eVwiO1xuXG50eXBlIE15VXBjb21pbmdTYXZpbmdzUHJvcHMgPSB7XG4gIHVwY29taW5nU2F2aW5nczogQXJyYXk8VXBjb21pbmdTYXZpbmc+O1xufTtcbmV4cG9ydCBjb25zdCBVcGNvbWluZ1NhdmluZ3MgPSAoe1xuICB1cGNvbWluZ1NhdmluZ3MsXG59OiBNeVVwY29taW5nU2F2aW5nc1Byb3BzKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgcmV0dXJuIHVwY29taW5nU2F2aW5ncy5sZW5ndGggPiAwID8gKFxuICAgIDxkaXY+XG4gICAgICB7dXBjb21pbmdTYXZpbmdzLm1hcCgodXBjb21pbmdTYXZpbmc6IFVwY29taW5nU2F2aW5nLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFVwY29taW5nU2F2aW5nc0NhcmRcbiAgICAgICAgICAgIGdvYWxOYW1lPXt1cGNvbWluZ1NhdmluZy5nb2FsTmFtZX1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGFtb3VudD17dXBjb21pbmdTYXZpbmcuYW1vdW50fVxuICAgICAgICAgICAgZHVlX2RhdGU9e3VwY29taW5nU2F2aW5nLmR1ZV9kYXRlfVxuICAgICAgICAgICAgZ29hbEltYWdlPXt1cGNvbWluZ1NhdmluZy5nb2FsSW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxVcGNvbWluZ1NhdmluZ3NFbXB0eVN0YXRlIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvU2V0dGluZ3NCdXR0b25cIjtcbmltcG9ydCBOb3RpZmljYWl0b25zQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25CdXR0b25cIjtcbmltcG9ydCBCYWxhbmNlVmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWxhbmNlVmlld1wiO1xuaW1wb3J0IHsgU2hvd0dvYWxzSW5PdmVydmlldyB9IGZyb20gXCIuLi9jb21wb25lbnRzL292ZXJ2aWV3L1Nob3dHb2Fsc0luT3ZlcnZpZXdcIjtcbmltcG9ydCB7IEFkZEdvYWxCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRHb2FsQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IGdldFRva2VuIGZyb20gXCJjbGllbnQvYXBpL3Rva2VuXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5pbXBvcnQgT3ZlcnZpZXdUcmFja0dvYWxDcmVhdGlvblByb2dyZXNzIGZyb20gXCIuLi9jb21wb25lbnRzL292ZXJ2aWV3L092ZXJ2aWV3VHJhY2tHb2FsQ3JlYXRpb25Qcm9ncmVzc1wiO1xuaW1wb3J0IGNoZWNrU3RhdHVzT2ZHb2FsQ3JlYXRpb24gZnJvbSBcImNsaWVudC9hcGkvdXNlci1nb2FsLWNyZWF0aW9uLXN0YXR1c1wiO1xuaW1wb3J0IHVzZUdvYWxDcmVhdGlvblN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENyZWF0aW9uU3RhdHVzXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5pbXBvcnQgeyBnZXRDb25maXJtZWRHb2FscywgdG90YWxDb250cmlidXRpb24gfSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3ZlcnZpZXcvTm90aWZpY2F0aW9uQ2FyZFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IHNob3dDdXN0b21Ub2FzdCB9IGZyb20gXCJjbGllbnQvdXRpbHMvVG9hc3RcIjtcbmltcG9ydCB1c2VOb3RpZmljYXRpb25TdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL25vdGlmaWNhdGlvblN0b3JlXCI7XG5pbXBvcnQgeyBUYWlsU3BpbiB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ2FyZFNrZWxldG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZFNrZWxldG9uXCI7XG5pbXBvcnQgVGFiRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYkZpbHRlclwiO1xuaW1wb3J0IHsgVXBjb21pbmdTYXZpbmdzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3ZlcnZpZXcvVXBjb21pbmdTYXZpbmdzXCI7XG5pbXBvcnQgeyBNeUdvYWxzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3ZlcnZpZXcvTXlHb2Fsc1wiO1xuaW1wb3J0IHsgdXBjb21pbmdTYXZpbmdzLCB0YWJzIH0gZnJvbSBcImNsaWVudC91dGlscy9Nb2NrRGF0YVwiO1xuaW1wb3J0IGdldEJhbmtBY2NvdW50cywge1xuICBnZXRDaGVja2luZ0FjY291bnRzLFxuICBnZXRTYXZpbmdzQWNjb3VudHMsXG59IGZyb20gXCJjbGllbnQvYXBpL2FjY291bnRzXCI7XG5pbXBvcnQgdXNlQmFua0FjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7IGVsZW1lbnQgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgZ29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3Qgc2V0VG9rZW4gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNldFRva2VuKTtcbiAgY29uc3Qgc2V0VXNlciA9IHVzZVVzZXJTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2V0VXNlcik7XG4gIGNvbnN0IHNldEdvYWxDcmVhdGlvblN0YXR1cyA9IHVzZUdvYWxDcmVhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZXRHb2FsQ3JlYXRpb25TdGF0dXNcbiAgKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uc1N0b3JlID0gdXNlTm90aWZpY2F0aW9uU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKSA/PyBbXTtcbiAgY29uc3QgW3RhYkluZGV4LCBzZXRUYWJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYWNjb3VudFN0b3JlID0gdXNlQmFua0FjY291bnRTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBhbGxDb25maXJtZWRHb2FscyA9XG4gICAgdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maXJtZWRHb2FscykgPz8gW107XG5cbiAgY29uc3QgY29tcGxldGVHb2FscyA9IGdvYWwuY29uZmlybWVkR29hbHMuZmlsdGVyKFxuICAgIChlbGVtZW50OiBhbnkpID0+IGVsZW1lbnQucHJvZ3Jlc3MgPT09IDEwMFxuICApO1xuICBjb25zdCB1bmNvbXBsZXRlR29hbHMgPSBnb2FsLmNvbmZpcm1lZEdvYWxzLmZpbHRlcihcbiAgICAoZWxlbWVudDogYW55KSA9PiBlbGVtZW50LnByb2dyZXNzICE9PSAxMDBcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShcbiAgICBbXCJ0b2tlblwiXSxcbiAgICAoKSA9PlxuICAgICAgZ2V0VG9rZW4oY29uZmlndXJhdGlvbikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzLnVzZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBzZXRVc2VyKHJlcy51c2VyKTtcbiAgICAgICAgICBzZXRUb2tlbihyZXMudG9rZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hdmlnYXRlKFwiL1wiKTtcbiAgICAgICAgICBzaG93Q3VzdG9tVG9hc3QoeyBtZXNzYWdlOiBcIlRoZSBzZGsga2V5IGlzIGludmFsaWRcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAge1xuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgeyBkYXRhOiBnb2FsQ3JlYXRpb25TdGF0dXNEYXRhIH0gPSB1c2VRdWVyeShcbiAgICBbXCJjaGVja1N0YXR1c09mR29hbENyZWF0aW9uXCJdLFxuICAgICgpID0+XG4gICAgICBjaGVja1N0YXR1c09mR29hbENyZWF0aW9uKGNvbmZpZ3VyYXRpb24pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRHb2FsQ3JlYXRpb25TdGF0dXMocmVzKTtcbiAgICAgIH0pLFxuICAgIHsgZW5hYmxlZDogISFjb25maWd1cmF0aW9uLnRva2VuIH1cbiAgKTtcbiAgY29uc3Qge1xuICAgIGlzRmV0Y2hpbmc6IGNvbmZpcm1lZEdvYWxzRmV0Y2hpbmcsXG4gICAgZGF0YTogY29uZmlybWVkR29hbHMsXG4gICAgaXNTdWNjZXNzOiBnb2Fsc0ZldGNoZWQsXG4gIH0gPSB1c2VRdWVyeShcbiAgICBcImNvbmZpcm1lZC1nb2Fsc1wiLFxuICAgICgpID0+XG4gICAgICBnZXRDb25maXJtZWRHb2Fscyh7IGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24gfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnb2FsLnNldENvbmZpcm1lZEdvYWxzKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgZW5hYmxlZDogISFjb25maWd1cmF0aW9uLnRva2VuLCByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UgfVxuICApO1xuICBjb25zdCB7IGRhdGE6IHRvdGFsQ29udHJpYnV0aW9ucyB9ID0gdXNlUXVlcnkoXG4gICAgXCJ0b3RhbC1jb250cmlidXRpb25zXCIsXG4gICAgKCkgPT5cbiAgICAgIHRvdGFsQ29udHJpYnV0aW9uKHsgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbiB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGdvYWwuc2V0VG90YWxDb250cmlidXRpb24ocmVzdWx0LnRvdGFsX2NvbnRyaWJ1dGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICB7IGVuYWJsZWQ6ICEhY29uZmlndXJhdGlvbi50b2tlbiB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLXdoaXRlIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBuby1zY3JvbGxiYXIgcHgtMy41IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhaXRvbnNCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24udG9rZW4gPyBuYXZpZ2F0ZShcIi9ub3RpZmljYXRpb25zXCIpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnQ9e25vdGlmaWNhdGlvbnNTdG9yZS5ub3RpZmljYXRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ3NCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnRva2VuID8gbmF2aWdhdGUoXCIvc2V0dGluZ3NcIikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8QmFsYW5jZVZpZXcgYmFsYW5jZT17Z29hbC50b3RhbENvbnRyaWJ1dGlvbn0gY3VycmVuY3k9XCLigqZcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7KGdvYWxzRmV0Y2hlZCAmJiBnb2FsLmNvbmZpcm1lZEdvYWxzLmxlbmd0aCA+IDApIHx8XG4gICAgICAoY29uZmlybWVkR29hbHNGZXRjaGluZyAmJiBnb2FsLmNvbmZpcm1lZEdvYWxzLmxlbmd0aCA+IDApID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtnb2FsLnRvdGFsQ29udHJpYnV0aW9uID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2FyZCBhbW91bnQ9e2dvYWwudG90YWxDb250cmlidXRpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgPFRhYkZpbHRlclxuICAgICAgICAgICAgICB0YWJzPXt0YWJzfVxuICAgICAgICAgICAgICBhY3RpdmVUYWI9e3RhYkluZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsodGFiOiBhbnkpID0+IHNldFRhYkluZGV4KHRhYi50YWJfaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICB7dGFiSW5kZXggPT0gMSA/IChcbiAgICAgICAgICAgICAgICA8VXBjb21pbmdTYXZpbmdzIHVwY29taW5nU2F2aW5ncz17dXBjb21pbmdTYXZpbmdzfSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNeUdvYWxzXG4gICAgICAgICAgICAgICAgICBnb2Fscz17dW5jb21wbGV0ZUdvYWxzfVxuICAgICAgICAgICAgICAgICAgY29tcGxldGVHb2Fscz17Y29tcGxldGVHb2Fsc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGdvYWxzRmV0Y2hlZCAmJiBnb2FsLmNvbmZpcm1lZEdvYWxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPE92ZXJ2aWV3VHJhY2tHb2FsQ3JlYXRpb25Qcm9ncmVzcyAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTRcIj5cbiAgICAgICAgICB7QXJyYXkoMTApXG4gICAgICAgICAgICAuZmlsbChcImFcIilcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2FjdGlvbkNhcmRTa2VsZXRvbiBrZXk9e2l9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2dvYWwuY29uZmlybWVkR29hbHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00XCI+XG4gICAgICAgICAgPEFkZEdvYWxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvZ29hbC1jcmVhdGlvblwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIiwiaW1wb3J0IGltYWdlIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2VtcHR5LXN0YXRlLnN2Z1wiO1xuZXhwb3J0IGNvbnN0IFVwY29taW5nU2F2aW5nc0VtcHR5U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1iLTNcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0cmFja2luZy10aXRsZSB0ZXh0LXNraW4tbmV1dHJhbCBtYi0zXCI+XG4gICAgICAgIE5vIHVwY29taW5nIHNhdmluZ3MgeWV0IVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZm9udC13b3JrU2FucyBmb250LW1lZGl1bSB0ZXh0LXRpbnkgdHJhY2tpbmctbGlzdHRpbGVfc3VidGl0bGUgdGV4dC1jZW50ZXIgdGV4dC1za2luLXN1YnRpdGxlIG14LTEyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuY29uc3QgdXNlR29hbENyZWF0aW9uU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgZ29hbENyZWF0aW9uU3RhdHVzOiB7fSxcbiAgc2V0R29hbENyZWF0aW9uU3RhdHVzOiAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGdvYWxDcmVhdGlvblN0YXR1czogc3RhdHVzLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5leHBvcnQgZGVmYXVsdCB1c2VHb2FsQ3JlYXRpb25TdG9yZTtcbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG50eXBlIFRvYXN0ID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IHNob3dDdXN0b21Ub2FzdCA9ICh7IG1lc3NhZ2UgfTogVG9hc3QpID0+IHtcbiAgdG9hc3QobWVzc2FnZSwge1xuICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5CT1RUT01fUklHSFQsXG4gICAgaGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcInRvYXN0XCIsXG4gICAgY2xvc2VCdXR0b246IGZhbHNlLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=