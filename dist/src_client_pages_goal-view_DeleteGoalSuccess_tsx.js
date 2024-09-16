"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_goal-view_DeleteGoalSuccess_tsx"],{

/***/ "./src/client/pages/components/SuccessProgress.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/components/SuccessProgress.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const SuccessProgress = ({ timer, label }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row mb-10" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: timer <= 12 && timer >= 1 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiCircle, { color: "rgba(255,255,255,0.5)", size: "1.4375rem" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiCheckCircle, { color: "#FFFFFF", size: "1.4375rem" })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `${timer <= 12 && timer >= 1 ? " text-white/50" : " text-white "} font-poppins text-base font-medium tracking-progress_label ml-4` }, { children: label }))] })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessProgress);


/***/ }),

/***/ "./src/client/pages/goal-view/DeleteGoalSuccess.tsx":
/*!**********************************************************!*\
  !*** ./src/client/pages/goal-view/DeleteGoalSuccess.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var _components_SuccessProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SuccessProgress */ "./src/client/pages/components/SuccessProgress.tsx");
/* harmony import */ var client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/assets/json_lottie/clouds.json */ "./src/client/assets/json_lottie/clouds.json");
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");









const DeleteGoalSuccess = () => {
    var _a;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12);
    const [percentage, setPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const timeOutCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setTimer((currTimer) => currTimer - 1);
        setPercentage((currPercent) => currPercent + 10);
    }, []);
    const cloudImage = {
        loop: true,
        autoplay: true,
        animationData: client_assets_json_lottie_clouds_json__WEBPACK_IMPORTED_MODULE_5__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
        if (timer === 0) {
            navigate(-2);
        }
    }, [timer, timeOutCallback]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen bg-connectSuccessBg bg-cover w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute w-full h-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_lottie__WEBPACK_IMPORTED_MODULE_2__["default"], { options: cloudImage }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-56 flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "w-44 h-44 rounded-full" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__.CircularProgressbarWithChildren, Object.assign({ strokeWidth: 2, value: percentage, styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__.buildStyles)({
                                    pathColor: `#CDE0E7`,
                                    trailColor: `rgba(255,255,255,0.5)`,
                                }) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiThumbsUp, { size: "3rem", color: "#CDE0E7" }) })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mx-9 flex flex-col mt-12" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SuccessProgress__WEBPACK_IMPORTED_MODULE_8__["default"], { timer: timer, label: `Deleting ${(_a = goal.confirmedGoal.name) !== null && _a !== void 0 ? _a : ""}` }) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteGoalSuccess);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLXZpZXdfRGVsZXRlR29hbFN1Y2Nlc3NfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFNekQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQXdCLEVBQUUsRUFBRTtJQUNqRSxPQUFPLENBQ0wsNEhBQ0UsK0VBQUssU0FBUyxFQUFDLHFCQUFxQixpQkFDbEMsMEVBQ0csS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQix1REFBQyxvREFBUSxJQUFDLEtBQUssRUFBQyx1QkFBdUIsRUFBQyxJQUFJLEVBQUMsV0FBVyxHQUFHLENBQzVELENBQUMsQ0FBQyxDQUFDLENBQ0YsdURBQUMseURBQWEsSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxXQUFXLEdBQUcsQ0FDbkQsR0FDRyxFQUNOLDhFQUNFLFNBQVMsRUFBRSxHQUNULEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQ2pELGtFQUFrRSxnQkFFakUsS0FBSyxJQUNGLEtBQ0YsR0FDTCxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJpQztBQUM5QjtBQUUwQjtBQUNEO0FBSXZCO0FBQ1E7QUFFTTtBQUNIO0FBQy9DLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFOztJQUM3QixNQUFNLFFBQVEsR0FBRyw2REFBVyxFQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxNQUFNLGVBQWUsR0FBRyxrREFBVyxDQUFDLEdBQUcsRUFBRTtRQUN2QyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQVUsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQVUsRUFBRSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxNQUFNLFVBQVUsR0FBRztRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsYUFBYSxFQUFFLGtFQUFNO1FBQ3JCLGdCQUFnQixFQUFFO1lBQ2hCLG1CQUFtQixFQUFFLGdCQUFnQjtTQUN0QztLQUNGLENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLEtBQUssR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyw4Q0FBOEMsaUJBQzNELDhFQUFLLFNBQVMsRUFBQyx3QkFBd0IsZ0JBQ3JDLHVEQUFDLG9EQUFNLElBQUMsT0FBTyxFQUFFLFVBQVUsR0FBSSxJQUMzQixFQUNOLCtFQUFLLFNBQVMsRUFBQyx3QkFBd0IsaUJBQ3JDLDhFQUFLLFNBQVMsRUFBQyxvQ0FBb0MsZ0JBQ2pELDhFQUFLLFNBQVMsRUFBQyx3QkFBd0IsZ0JBQ3JDLHVEQUFDLHVGQUErQixrQkFDOUIsV0FBVyxFQUFFLENBQUMsRUFDZCxLQUFLLEVBQUUsVUFBVSxFQUNqQixNQUFNLEVBQUUsdUVBQVcsQ0FBQztvQ0FDbEIsU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFVBQVUsRUFBRSx1QkFBdUI7aUNBQ3BDLENBQUMsZ0JBRUYsdURBQUMsc0RBQVUsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxTQUFTLEdBQUcsSUFDVixJQUM5QixJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLDBCQUEwQixnQkFDdkMsdURBQUMsbUVBQWUsSUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxZQUFZLFVBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxtQ0FBSSxFQUFFLEVBQUUsR0FDbEQsSUFDRSxLQUNGLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9TdWNjZXNzUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLXZpZXcvRGVsZXRlR29hbFN1Y2Nlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpQ2lyY2xlLCBGaUNoZWNrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG50eXBlIFN1Y2Nlc3NQcm9ncmVzc1Byb3BzID0ge1xuICB0aW1lcjogbnVtYmVyO1xuICBsYWJlbD86IHN0cmluZztcbn07XG5cbmNvbnN0IFN1Y2Nlc3NQcm9ncmVzcyA9ICh7IHRpbWVyLCBsYWJlbCB9OiBTdWNjZXNzUHJvZ3Jlc3NQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWItMTBcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGltZXIgPD0gMTIgJiYgdGltZXIgPj0gMSA/IChcbiAgICAgICAgICAgIDxGaUNpcmNsZSBjb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHNpemU9XCIxLjQzNzVyZW1cIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RmlDaGVja0NpcmNsZSBjb2xvcj1cIiNGRkZGRkZcIiBzaXplPVwiMS40Mzc1cmVtXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICB0aW1lciA8PSAxMiAmJiB0aW1lciA+PSAxID8gXCIgdGV4dC13aGl0ZS81MFwiIDogXCIgdGV4dC13aGl0ZSBcIlxuICAgICAgICAgIH0gZm9udC1wb3BwaW5zIHRleHQtYmFzZSBmb250LW1lZGl1bSB0cmFja2luZy1wcm9ncmVzc19sYWJlbCBtbC00YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzUHJvZ3Jlc3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb3R0aWUgZnJvbSBcInJlYWN0LWxvdHRpZVwiO1xuaW1wb3J0IFVubGlua1N1Y2Nlc3NJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL21vbm8vdW5saW5rLXN1Y2Nlc3MvY29ubmVjdC1zdWNjZXNzL1VubGlua1N1Y2Nlc3NJY29uXCI7XG5pbXBvcnQgU3VjY2Vzc1Byb2dyZXNzIGZyb20gXCIuLi9jb21wb25lbnRzL1N1Y2Nlc3NQcm9ncmVzc1wiO1xuaW1wb3J0IENsb3VkcyBmcm9tIFwiY2xpZW50L2Fzc2V0cy9qc29uX2xvdHRpZS9jbG91ZHMuanNvblwiO1xuaW1wb3J0IHtcbiAgYnVpbGRTdHlsZXMsXG4gIENpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW4sXG59IGZyb20gXCJyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2JhclwiO1xuaW1wb3J0IHsgRmlUaHVtYnNVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwienVzdGFuZFwiO1xuaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxTdG9yZVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY29uc3QgRGVsZXRlR29hbFN1Y2Nlc3MgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgxMik7XG4gIGNvbnN0IFtwZXJjZW50YWdlLCBzZXRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB0aW1lT3V0Q2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VGltZXIoKGN1cnJUaW1lcik6IG51bWJlciA9PiBjdXJyVGltZXIgLSAxKTtcbiAgICBzZXRQZXJjZW50YWdlKChjdXJyUGVyY2VudCk6IG51bWJlciA9PiBjdXJyUGVyY2VudCArIDEwKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbG91ZEltYWdlID0ge1xuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYW5pbWF0aW9uRGF0YTogQ2xvdWRzLFxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICB9LFxuICB9O1xuICBjb25zdCBnb2FsID0gdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZXIgPiAwICYmIHNldFRpbWVvdXQodGltZU91dENhbGxiYWNrLCAxMDAwKTtcbiAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgIG5hdmlnYXRlKC0yKTtcbiAgICB9XG4gIH0sIFt0aW1lciwgdGltZU91dENhbGxiYWNrXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1jb25uZWN0U3VjY2Vzc0JnIGJnLWNvdmVyIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgIDxMb3R0aWUgb3B0aW9ucz17Y2xvdWRJbWFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00NCBoLTQ0IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW5cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgICBzdHlsZXM9e2J1aWxkU3R5bGVzKHtcbiAgICAgICAgICAgICAgICBwYXRoQ29sb3I6IGAjQ0RFMEU3YCxcbiAgICAgICAgICAgICAgICB0cmFpbENvbG9yOiBgcmdiYSgyNTUsMjU1LDI1NSwwLjUpYCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGaVRodW1ic1VwIHNpemU9XCIzcmVtXCIgY29sb3I9XCIjQ0RFMEU3XCIgLz5cbiAgICAgICAgICAgIDwvQ2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOSBmbGV4IGZsZXgtY29sIG10LTEyXCI+XG4gICAgICAgICAgPFN1Y2Nlc3NQcm9ncmVzc1xuICAgICAgICAgICAgdGltZXI9e3RpbWVyfVxuICAgICAgICAgICAgbGFiZWw9e2BEZWxldGluZyAke2dvYWwuY29uZmlybWVkR29hbC5uYW1lID8/IFwiXCJ9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUdvYWxTdWNjZXNzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9