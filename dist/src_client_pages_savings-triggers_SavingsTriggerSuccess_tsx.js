"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_savings-triggers_SavingsTriggerSuccess_tsx"],{

/***/ "./src/client/pages/savings-triggers/SavingsTriggerSuccess.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/pages/savings-triggers/SavingsTriggerSuccess.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/assets/json_lottie/clouds.json */ "./src/client/assets/json_lottie/clouds.json");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/assets/images/savings/trigger-success.svg */ "./src/client/assets/images/savings/trigger-success.svg");








const SavingsTriggerSuccess = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const configurations = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)((state) => state.configuration);
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const timeOutCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setTimer((currTimer) => currTimer - 1);
    }, []);
    const cloudImage = {
        loop: true,
        autoplay: true,
        animationData: client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_6__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
        if (timer === 0) {
            navigate(-2);
        }
    }, [timer, timeOutCallback]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen bg-connectSuccessBg bg-cover w-screen relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute w-full h-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_lottie__WEBPACK_IMPORTED_MODULE_2__["default"], { options: cloudImage }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col mx-9 absolute top-28 left-0 right-0 justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center items-center mt-44 mb-8" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_7__ }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mx-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-skin-white text-2xl text-center font-semibold" }, { children: "Whoop! Round It Up activated" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-xxxs font-poppins tracking-longtext text-skin-white text-center mt-4" }, { children: "Every time you make a transaction at any merchant in a Category you selected, we will round up to the next \u20A6 1,000 and contribute this change to your selected savings goal." }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute bottom-10 left-0 right-0 flex justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.BallTriangle, { height: 40, width: 40, color: "#ffffff", ariaLabel: "ball-triangle-loading", visible: true }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavingsTriggerSuccess);


/***/ }),

/***/ "./src/client/assets/images/savings/trigger-success.svg":
/*!**************************************************************!*\
  !*** ./src/client/assets/images/savings/trigger-success.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49762eb9521315a5f18a.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zYXZpbmdzLXRyaWdnZXJzX1NhdmluZ3NUcmlnZ2VyU3VjY2Vzc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDOUI7QUFDYTtBQUNZO0FBQ1A7QUFFd0I7QUFDRTtBQUM5RSxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtJQUNqQyxNQUFNLFFBQVEsR0FBRyw2REFBVyxFQUFFLENBQUM7SUFDL0IsTUFBTSxjQUFjLEdBQUcsaUZBQXFCLENBQzFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN6QixDQUFDO0lBRWIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sZUFBZSxHQUFHLGtEQUFXLENBQUMsR0FBRyxFQUFFO1FBQ3ZDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBVSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLElBQUk7UUFDZCxhQUFhLEVBQUUsa0VBQU07UUFDckIsZ0JBQWdCLEVBQUU7WUFDaEIsbUJBQW1CLEVBQUUsZ0JBQWdCO1NBQ3RDO0tBQ0YsQ0FBQztJQUNGLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsS0FBSyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7SUFDSCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM3QixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLHlEQUF5RCxpQkFDdEUsOEVBQUssU0FBUyxFQUFDLHdCQUF3QixnQkFDckMsdURBQUMsb0RBQU0sSUFBQyxPQUFPLEVBQUUsVUFBVSxHQUFJLElBQzNCLEVBQ04sK0VBQUssU0FBUyxFQUFDLGtFQUFrRSxpQkFDL0UsOEVBQUssU0FBUyxFQUFDLHNEQUFzRCxnQkFDbkUsZ0VBQUssR0FBRyxFQUFFLDZFQUFjLEdBQUksSUFDeEIsRUFDTiw4RUFBSyxTQUFTLEVBQUMsbUNBQW1DLGdCQUNoRCw4RUFBSyxTQUFTLEVBQUMsa0VBQWtFLGtEQUUzRSxJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLDJFQUEyRSx1TUFJcEYsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyx1REFBdUQsZ0JBQ3BFLHVEQUFDLDhEQUFZLElBQ1gsTUFBTSxFQUFFLEVBQUUsRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULEtBQUssRUFBQyxTQUFTLEVBQ2YsU0FBUyxFQUFDLHVCQUF1QixFQUNqQyxPQUFPLEVBQUUsSUFBSSxHQUNiLElBQ0UsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxxQkFBcUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9zYXZpbmdzLXRyaWdnZXJzL1NhdmluZ3NUcmlnZ2VyU3VjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG90dGllIGZyb20gXCJyZWFjdC1sb3R0aWVcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDbG91ZHMgZnJvbSBcImNsaWVudC9hc3NldHMvanNvbl9sb3R0aWUvY2xvdWRzLmpzb25cIjtcbmltcG9ydCB7IEJhbGxUcmlhbmdsZSB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHN1Y2Nlc3NUcmlnZ2VyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3RyaWdnZXItc3VjY2Vzcy5zdmdcIjtcbmNvbnN0IFNhdmluZ3NUcmlnZ2VyU3VjY2VzcyA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG5cbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IHRpbWVPdXRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUaW1lcigoY3VyclRpbWVyKTogbnVtYmVyID0+IGN1cnJUaW1lciAtIDEpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGNsb3VkSW1hZ2UgPSB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhbmltYXRpb25EYXRhOiBDbG91ZHMsXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge1xuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgIH0sXG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZXIgPiAwICYmIHNldFRpbWVvdXQodGltZU91dENhbGxiYWNrLCAxMDAwKTtcbiAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgIG5hdmlnYXRlKC0yKTtcbiAgICB9XG4gIH0sIFt0aW1lciwgdGltZU91dENhbGxiYWNrXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1jb25uZWN0U3VjY2Vzc0JnIGJnLWNvdmVyIHctc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgPExvdHRpZSBvcHRpb25zPXtjbG91ZEltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtOSBhYnNvbHV0ZSB0b3AtMjggbGVmdC0wIHJpZ2h0LTAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC00NCBtYi04XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3N1Y2Nlc3NUcmlnZ2VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG14LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1za2luLXdoaXRlIHRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFdob29wISBSb3VuZCBJdCBVcCBhY3RpdmF0ZWRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14eHhzIGZvbnQtcG9wcGlucyB0cmFja2luZy1sb25ndGV4dCB0ZXh0LXNraW4td2hpdGUgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgIEV2ZXJ5IHRpbWUgeW91IG1ha2UgYSB0cmFuc2FjdGlvbiBhdCBhbnkgbWVyY2hhbnQgaW4gYSBDYXRlZ29yeSB5b3VcbiAgICAgICAgICBzZWxlY3RlZCwgd2Ugd2lsbCByb3VuZCB1cCB0byB0aGUgbmV4dCDigqYgMSwwMDAgYW5kIGNvbnRyaWJ1dGUgdGhpc1xuICAgICAgICAgIGNoYW5nZSB0byB5b3VyIHNlbGVjdGVkIHNhdmluZ3MgZ29hbC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMCByaWdodC0wIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEJhbGxUcmlhbmdsZVxuICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgIGNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgYXJpYUxhYmVsPVwiYmFsbC10cmlhbmdsZS1sb2FkaW5nXCJcbiAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2F2aW5nc1RyaWdnZXJTdWNjZXNzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9