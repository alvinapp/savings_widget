"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_terms-condition_TermsCondition_tsx"],{

/***/ "./src/client/api/accept-terms.ts":
/*!****************************************!*\
  !*** ./src/client/api/accept-terms.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acceptTerms": () => (/* binding */ acceptTerms)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const acceptTerms = ({ configuration, accept, }) => __awaiter(void 0, void 0, void 0, function* () {
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
        endpoint: "/users/terms-and-conditions/",
        data: accept,
        token: configuration.token,
    })
        .then((data) => {
        return data;
    })
        .catch((reason) => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        return Promise.reject(reason);
    });
});


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

/***/ "./src/client/pages/terms-condition/TermsCondition.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/terms-condition/TermsCondition.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/pages/components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var client_pages_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/pages/components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
/* harmony import */ var client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/pages/components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/pages/components/CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var client_api_accept_terms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/api/accept-terms */ "./src/client/api/accept-terms.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/api/token */ "./src/client/api/token.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");














const TermsCondition = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)((state) => state.configuration);
    const userStore = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const { isFetching: acceptingTerms, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("accept-terms", () => (0,client_api_accept_terms__WEBPACK_IMPORTED_MODULE_6__.acceptTerms)({ configuration: configuration, accept: true })
        .then((result) => {
        if (result) {
            (0,client_api_token__WEBPACK_IMPORTED_MODULE_7__["default"])(configuration).then((result) => {
                userStore.setUser(result.user);
                navigate("/monthly-income");
            });
        }
    })
        .catch((error) => error), {
        refetchOnWindowFocus: true,
        enabled: false,
    });
    const { data, error, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("fetchingTerms", () => (0,client_api_api__WEBPACK_IMPORTED_MODULE_8__.fetchData)({
        endpoint: "/terms_and_conditions",
        token: configuration.token,
    }).then((result) => {
        const finalResult = result.terms_n_conditions.replace(/[{()}]/g, "");
        return finalResult.replace(/"/g, "");
    }), {
        refetchOnWindowFocus: false,
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen bg-white" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed top-0 left-0 right-0 bg-white pl-2 pr-4 pt-4 pb-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => {
                                    navigate(-1);
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "Terms & Conditions" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => {
                                    navigate(-2);
                                } })] })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col pl-4 pr-6 mt-24" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-base font-poppins text-black tracking-paragraph leading-6 font-light pb-8" }, { children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(data !== null && data !== void 0 ? data : "") })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "fixed bottom-0 left-0 right-0 px-3.5 bg-white" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_13__["default"], { title: "Ok", click: () => refetch(), loading: acceptingTerms }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsCondition);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc190ZXJtcy1jb25kaXRpb25fVGVybXNDb25kaXRpb25fdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUlFO0FBQ3JDLE1BQU0sV0FBVyxHQUFHLENBQU8sRUFDaEMsYUFBYSxFQUNiLE1BQU0sR0FJUCxFQUFFLEVBQUU7SUFDSCxPQUFPLDhDQUFRLENBQUM7UUFDZCxRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLGFBQWMsQ0FBQyxLQUFLO0tBQzVCLENBQUM7U0FDQyxJQUFJLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1FBQ3JCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QndDO0FBR0E7QUFFMUMsTUFBTSxRQUFRLEdBQUcsQ0FBTyxhQUFzQixFQUFFLEVBQUU7SUFDaEQsSUFBSTtRQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLHdEQUFRLENBQUM7WUFDekIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7U0FDaEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBRUYsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDRDtBQUVzQjtBQUNFO0FBQ0Y7QUFDUjtBQUNVO0FBRVI7QUFDc0I7QUFDcEM7QUFDVTtBQUNQO0FBQ0k7QUFDL0MsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFO0lBQzFCLE1BQU0sUUFBUSxHQUFHLDZEQUFXLEVBQUUsQ0FBQztJQUMvQixNQUFNLGFBQWEsR0FBRyxpRkFBcUIsQ0FDekMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7SUFDYixNQUFNLFNBQVMsR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsR0FBUSxxREFBUSxDQUMzRCxjQUFjLEVBQ2QsR0FBRyxFQUFFLENBQ0gsb0VBQVcsQ0FBQyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3hELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2YsSUFBSSxNQUFNLEVBQUU7WUFDViw0REFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUN0QyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQzVCO1FBQ0Usb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixPQUFPLEVBQUUsS0FBSztLQUNmLENBQ0YsQ0FBQztJQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFRLHFEQUFRLENBQzlDLGVBQWUsRUFDZixHQUFHLEVBQUUsQ0FDSCx5REFBUyxDQUFDO1FBQ1IsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxLQUFLLEVBQUUsYUFBYyxDQUFDLEtBQUs7S0FDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQ0o7UUFDRSxvQkFBb0IsRUFBRSxLQUFLO0tBQzVCLENBQ0YsQ0FBQztJQUVGLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsbUJBQW1CLGlCQUNoQyw4RUFBSyxTQUFTLEVBQUMseURBQXlELGdCQUN0RSx1REFBQyxzRUFBTSxJQUNMLFFBQVEsRUFDTiwrRUFBSyxTQUFTLEVBQUMsNENBQTRDLGlCQUN6RCx1REFBQywyRUFBVSxJQUNULE9BQU8sRUFBRSxHQUFHLEVBQUU7b0NBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsQ0FBQyxHQUNELEVBQ0YsdURBQUMsNEVBQVcsSUFBQyxLQUFLLEVBQUMsb0JBQW9CLEdBQUcsRUFDMUMsdURBQUMsNEVBQVcsSUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFO29DQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNmLENBQUMsR0FDRCxLQUNFLEdBRVIsSUFDRSxFQUNOLDhFQUFLLFNBQVMsRUFBQywrQkFBK0IsZ0JBQzVDLDhFQUFLLFNBQVMsRUFBQyxnRkFBZ0YsZ0JBQzVGLDZEQUFLLENBQUMsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksRUFBRSxDQUFDLElBQ2QsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQywrQ0FBK0MsZ0JBQzVELHVEQUFDLDJFQUFVLElBQ1QsS0FBSyxFQUFDLElBQUksRUFDVixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ3RCLE9BQU8sRUFBRSxjQUFjLEdBQ3ZCLElBQ0UsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvYXBpL2FjY2VwdC10ZXJtcy50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvYXBpL3Rva2VuLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy90ZXJtcy1jb25kaXRpb24vVGVybXNDb25kaXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcblxuaW1wb3J0IHsgZmV0Y2hEYXRhLCBwb3N0RGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0IGNvbnN0IGFjY2VwdFRlcm1zID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgYWNjZXB0LFxufToge1xuICBjb25maWd1cmF0aW9uPzogSUNvbmZpZztcbiAgYWNjZXB0PzogYm9vbGVhbjtcbn0pID0+IHtcbiAgcmV0dXJuIHBvc3REYXRhKHtcbiAgICBlbmRwb2ludDogXCIvdXNlcnMvdGVybXMtYW5kLWNvbmRpdGlvbnMvXCIsXG4gICAgZGF0YTogYWNjZXB0LFxuICAgIHRva2VuOiBjb25maWd1cmF0aW9uIS50b2tlbixcbiAgfSlcbiAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHtcbiAgICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tIFwiY2xpZW50L2FwaS9hcGlcIjtcblxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciwgcHVibGljS2V5IH0gPSBjb25maWd1cmF0aW9uO1xuICAgIGlmICghaWRlbnRpZmllciB8fCAhcHVibGljS2V5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHVibGljS2V5IGFuZCBpZGVudGlmaWVyIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJzL2NyZWF0ZS9cIixcbiAgICAgIGRhdGE6IHsgZW1haWw6IGlkZW50aWZpZXIsIHNka19rZXk6IHB1YmxpY0tleSB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBwYXJzZSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcblxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBOYXZCYXJUaXRsZSBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCBSb3V0ZXMgZnJvbSBcImNsaWVudC9wYWdlcy9yb3V0ZXNcIjtcbmltcG9ydCB7IGFjY2VwdFRlcm1zIH0gZnJvbSBcImNsaWVudC9hcGkvYWNjZXB0LXRlcm1zXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCBnZXRUb2tlbiBmcm9tIFwiY2xpZW50L2FwaS90b2tlblwiO1xuaW1wb3J0IHVzZVVzZXJTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL3VzZXJTdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jb25zdCBUZXJtc0NvbmRpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgdXNlclN0b3JlID0gdXNlVXNlclN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHsgaXNGZXRjaGluZzogYWNjZXB0aW5nVGVybXMsIHJlZmV0Y2ggfTogYW55ID0gdXNlUXVlcnkoXG4gICAgXCJhY2NlcHQtdGVybXNcIixcbiAgICAoKSA9PlxuICAgICAgYWNjZXB0VGVybXMoeyBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLCBhY2NlcHQ6IHRydWUgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGdldFRva2VuKGNvbmZpZ3VyYXRpb24pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICB1c2VyU3RvcmUuc2V0VXNlcihyZXN1bHQudXNlcik7XG4gICAgICAgICAgICAgIG5hdmlnYXRlKFwiL21vbnRobHktaW5jb21lXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvciksXG4gICAge1xuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IHRydWUsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9OiBhbnkgPSB1c2VRdWVyeShcbiAgICBcImZldGNoaW5nVGVybXNcIixcbiAgICAoKSA9PlxuICAgICAgZmV0Y2hEYXRhKHtcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3Rlcm1zX2FuZF9jb25kaXRpb25zXCIsXG4gICAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uIS50b2tlbixcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBmaW5hbFJlc3VsdCA9IHJlc3VsdC50ZXJtc19uX2NvbmRpdGlvbnMucmVwbGFjZSgvW3soKX1dL2csIFwiXCIpO1xuXG4gICAgICAgIHJldHVybiBmaW5hbFJlc3VsdC5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcbiAgICAgIH0pLFxuICAgIHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJnLXdoaXRlIHBsLTIgcHItNCBwdC00IHBiLTNcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxOYXZCYXJUaXRsZSB0aXRsZT1cIlRlcm1zICYgQ29uZGl0aW9uc1wiIC8+XG4gICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0yKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGwtNCBwci02IG10LTI0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtcG9wcGlucyB0ZXh0LWJsYWNrIHRyYWNraW5nLXBhcmFncmFwaCBsZWFkaW5nLTYgZm9udC1saWdodCBwYi04XCI+XG4gICAgICAgICAge3BhcnNlKGRhdGEgPz8gXCJcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHB4LTMuNSBiZy13aGl0ZVwiPlxuICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgIHRpdGxlPVwiT2tcIlxuICAgICAgICAgIGNsaWNrPXsoKSA9PiByZWZldGNoKCl9XG4gICAgICAgICAgbG9hZGluZz17YWNjZXB0aW5nVGVybXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUZXJtc0NvbmRpdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==