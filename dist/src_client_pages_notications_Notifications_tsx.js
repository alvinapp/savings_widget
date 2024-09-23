"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_notications_Notifications_tsx"],{

/***/ "./src/client/pages/components/notificaitons/NotificaitonCard.tsx":
/*!************************************************************************!*\
  !*** ./src/client/pages/components/notificaitons/NotificaitonCard.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificaitonCard": () => (/* binding */ NotificaitonCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");


const NotificaitonCard = ({ date, image, description, type, resume, }) => {
    const createdDate = new Date(date);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row items-center justify-start" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xxxs tracking-subtitle text-skin-subtitle" }, { children: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(createdDate) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mt-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full bg-skin-secondaryWithOpacity h-8 w-8 mr-3 shadow-card" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: image, className: "h-8 w-8 rounded-full" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "rounded-full absolute top-0 right-3 bg-skin-danger h-2 w-2" })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins text-xs text-skin-base tracking-wide mr-12" }, { children: description }))] })), type === "pause schedule" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-center mt-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mr-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionButton, { label: "Ask me later", bgColor: "bg-skin-tertiary", labelColor: "text-skin-neutral" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionButton, { label: "Resume goal", bgColor: "bg-skin-primary", labelColor: "text-skin-white", onClick: resume })] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "border border-1 rounded-full mt-4" })] })));
};
const ActionButton = ({ label, onClick, bgColor, labelColor, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded flex items-center justify-center font-poppins text-xs tracking-longtext ${bgColor} px-3.5 py-2` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${labelColor}` }, { children: label })) })));
};


/***/ }),

/***/ "./src/client/pages/notications/NotificationEmptyState.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/notications/NotificationEmptyState.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationEmptyState": () => (/* binding */ NotificationEmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_notification_empty_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/savings/notification-empty.svg */ "./src/client/assets/images/savings/notification-empty.svg");


const NotificationEmptyState = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mt-24" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mb-5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_notification_empty_svg__WEBPACK_IMPORTED_MODULE_1__ }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center font-workSans font-semibold text-base tracking-title text-skin-neutral mb-3" }, { children: "You\u2019re all caught up!" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center font-workSans font-medium text-tiny tracking-listtile_subtitle text-center text-skin-subtitle mx-2" }, { children: "We\u2019ll notify you once we have something new for you!" }))] })));
};


/***/ }),

/***/ "./src/client/pages/notications/Notifications.tsx":
/*!********************************************************!*\
  !*** ./src/client/pages/notications/Notifications.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/api/goal */ "./src/client/api/goal.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var client_store_notificationStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/notificationStore */ "./src/client/store/notificationStore.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
/* harmony import */ var _components_notificaitons_NotificaitonCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/notificaitons/NotificaitonCard */ "./src/client/pages/components/notificaitons/NotificaitonCard.tsx");
/* harmony import */ var _NotificationEmptyState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NotificationEmptyState */ "./src/client/pages/notications/NotificationEmptyState.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const Notifications = () => {
    var _a;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    const notificaitonsStore = (_a = (0,client_store_notificationStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state)) !== null && _a !== void 0 ? _a : [];
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)((state) => state.configuration);
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state);
    const resumeAGoal = (id) => __awaiter(void 0, void 0, void 0, function* () {
        (0,client_api_goal__WEBPACK_IMPORTED_MODULE_5__.resumeGoal)({
            configuration: configuration,
            goalId: id,
            data: {},
        }).then((result) => {
            if (result) {
                (0,client_api_goal__WEBPACK_IMPORTED_MODULE_5__.getConfirmedGoals)({ configuration: configuration }).then((result) => {
                    goal.setConfirmedGoals(result);
                });
            }
        });
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col relative pt-6 h-screen w-screen" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mr-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_7__["default"], { background: "bg-skin-base", onClick: () => navigate(-1) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Notifications" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "rounded-full h-10 w-10" }) }))] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mt-9 mx-3.5" }, { children: notificaitonsStore.notifications.length > 0 ? (notificaitonsStore.notifications.map((notification) => {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_notificaitons_NotificaitonCard__WEBPACK_IMPORTED_MODULE_9__.NotificaitonCard, { date: notification.time, description: notification.message, image: notification.image.image_url, type: notification.type, resume: () => { } }));
                })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotificationEmptyState__WEBPACK_IMPORTED_MODULE_10__.NotificationEmptyState, {})) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);


/***/ }),

/***/ "./src/client/assets/images/savings/notification-empty.svg":
/*!*****************************************************************!*\
  !*** ./src/client/assets/images/savings/notification-empty.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a13727e6cb3b9056a5a4.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19ub3RpY2F0aW9uc19Ob3RpZmljYXRpb25zX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBVzlDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxFQUMvQixJQUFJLEVBQ0osS0FBSyxFQUNMLFdBQVcsRUFDWCxJQUFJLEVBQ0osTUFBTSxHQUNnQixFQUFFLEVBQUU7SUFDMUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxFQUFFLGlCQUNmLCtFQUFLLFNBQVMsRUFBQyxlQUFlLGlCQUM1Qiw4RUFBSyxTQUFTLEVBQUMsMENBQTBDLGdCQUN2RCw4RUFBSyxTQUFTLEVBQUMseUVBQXlFLGdCQUNyRixtRUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUNwQixJQUNGLEVBQ04sK0VBQUssU0FBUyxFQUFDLGlEQUFpRCxpQkFDOUQsOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLCtFQUFLLFNBQVMsRUFBQyxVQUFVLGlCQUN2Qiw4RUFBSyxTQUFTLEVBQUMsb0VBQW9FLGdCQUNqRixnRUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxzQkFBc0IsR0FBRyxJQUNoRCxFQUNOLGdFQUFLLFNBQVMsRUFBQyw0REFBNEQsR0FBTyxLQUM5RSxJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLHlEQUF5RCxnQkFDckUsV0FBVyxJQUNSLEtBQ0YsRUFDTCxJQUFJLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQzNCLCtFQUFLLFNBQVMsRUFBQyxtQ0FBbUMsaUJBQ2hELDhFQUFLLFNBQVMsRUFBQyxNQUFNLGdCQUNuQix1REFBQyxZQUFZLElBQ1gsS0FBSyxFQUFDLGNBQWMsRUFDcEIsT0FBTyxFQUFDLGtCQUFrQixFQUMxQixVQUFVLEVBQUMsbUJBQW1CLEdBQzlCLElBQ0UsRUFDTix1REFBQyxZQUFZLElBQ1gsS0FBSyxF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QkFBd0IsR0FBTyxJQUMxQyxLQUNGLEdBRVIsRUFDRiw4RUFBSyxTQUFTLEVBQUMsMkJBQTJCLGdCQUN2QyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDN0Msa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtvQkFDekQsT0FBTyxDQUNMLHVEQUFDLHdGQUFnQixJQUNmLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxFQUN2QixXQUFXLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFDakMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUNuQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FDaEIsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsdURBQUMsNEVBQXNCLEtBQUcsQ0FDM0IsSUFDRyxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL25vdGlmaWNhaXRvbnMvTm90aWZpY2FpdG9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL25vdGljYXRpb25zL05vdGlmaWNhdGlvbkVtcHR5U3RhdGUudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9ub3RpY2F0aW9ucy9Ob3RpZmljYXRpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRlRm9ybWF0IH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE5vdGlmaWNhaXRvbkNhcmRQcm9wcyA9IHtcbiAgZGF0ZTogRGF0ZTtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICByZXN1bWU/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBOb3RpZmljYWl0b25DYXJkID0gKHtcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIGRlc2NyaXB0aW9uLFxuICB0eXBlLFxuICByZXN1bWUsXG59OiBOb3RpZmljYWl0b25DYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgY3JlYXRlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHh4cyB0cmFja2luZy1zdWJ0aXRsZSB0ZXh0LXNraW4tc3VidGl0bGVcIj5cbiAgICAgICAgICAgIHtkYXRlRm9ybWF0KGNyZWF0ZWREYXRlKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eSBoLTggdy04IG1yLTMgc2hhZG93LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGFic29sdXRlIHRvcC0wIHJpZ2h0LTMgYmctc2tpbi1kYW5nZXIgaC0yIHctMlwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC14cyB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy13aWRlIG1yLTEyXCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dHlwZSA9PT0gXCJwYXVzZSBzY2hlZHVsZVwiID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQXNrIG1lIGxhdGVyXCJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiYmctc2tpbi10ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgbGFiZWxDb2xvcj1cInRleHQtc2tpbi1uZXV0cmFsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIlJlc3VtZSBnb2FsXCJcbiAgICAgICAgICAgICAgYmdDb2xvcj1cImJnLXNraW4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIGxhYmVsQ29sb3I9XCJ0ZXh0LXNraW4td2hpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXN1bWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0xIHJvdW5kZWQtZnVsbCBtdC00XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIEFjdGlvbkJ1dHRvblByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIGxhYmVsQ29sb3I/OiBzdHJpbmc7XG59O1xuY29uc3QgQWN0aW9uQnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIG9uQ2xpY2ssXG4gIGJnQ29sb3IsXG4gIGxhYmVsQ29sb3IsXG59OiBBY3Rpb25CdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1wb3BwaW5zIHRleHQteHMgdHJhY2tpbmctbG9uZ3RleHQgJHtiZ0NvbG9yfSBweC0zLjUgcHktMmB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2xhYmVsQ29sb3J9YH0+e2xhYmVsfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9ub3RpZmljYXRpb24tZW1wdHkuc3ZnXCI7XG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uRW1wdHlTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWItNVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1uZXV0cmFsIG1iLTNcIj5cbiAgICAgICAgWW914oCZcmUgYWxsIGNhdWdodCB1cCFcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGZvbnQtd29ya1NhbnMgZm9udC1tZWRpdW0gdGV4dC10aW55IHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlIHRleHQtY2VudGVyIHRleHQtc2tpbi1zdWJ0aXRsZSBteC0yXCI+XG4gICAgICAgIFdl4oCZbGwgbm90aWZ5IHlvdSBvbmNlIHdlIGhhdmUgc29tZXRoaW5nIG5ldyBmb3IgeW91IVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29uZmlybWVkR29hbHMsIHJlc3VtZUdvYWwgfSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCB1c2VOb3RpZmljYXRpb25TdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL25vdGlmaWNhdGlvblN0b3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBOYXZCYXJUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJUaXRsZVwiO1xuaW1wb3J0IHsgTm90aWZpY2FpdG9uQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL25vdGlmaWNhaXRvbnMvTm90aWZpY2FpdG9uQ2FyZFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRW1wdHlTdGF0ZSB9IGZyb20gXCIuL05vdGlmaWNhdGlvbkVtcHR5U3RhdGVcIjtcbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3Qgbm90aWZpY2FpdG9uc1N0b3JlID0gdXNlTm90aWZpY2F0aW9uU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKSA/PyBbXTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGdvYWwgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgcmVzdW1lQUdvYWwgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHJlc3VtZUdvYWwoe1xuICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgIGdvYWxJZDogaWQsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZ2V0Q29uZmlybWVkR29hbHMoeyBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGdvYWwuc2V0Q29uZmlybWVkR29hbHMocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHB0LTYgaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1yLTMuNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPE5hdkJhclRpdGxlIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEwIHctMTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTkgbXgtMy41XCI+XG4gICAgICAgIHtub3RpZmljYWl0b25zU3RvcmUubm90aWZpY2F0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIG5vdGlmaWNhaXRvbnNTdG9yZS5ub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxOb3RpZmljYWl0b25DYXJkXG4gICAgICAgICAgICAgICAgZGF0ZT17bm90aWZpY2F0aW9uLnRpbWV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e25vdGlmaWNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtub3RpZmljYXRpb24uaW1hZ2UuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxuICAgICAgICAgICAgICAgIHJlc3VtZT17KCkgPT4ge319XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbkVtcHR5U3RhdGUgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=