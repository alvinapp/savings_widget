"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_goal-creation_CustomImageSelection_tsx"],{

/***/ "./src/client/pages/components/goal-creation/ImageCard.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/ImageCard.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCard": () => (/* binding */ ImageCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const ImageCard = ({ image, onClick }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-24 w-24 rounded-lg", onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: image, className: "h-24 w-24 rounded-lg object-cover" }) })));
};


/***/ }),

/***/ "./src/client/pages/goal-creation/CustomImageSelection.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/pages/goal-creation/CustomImageSelection.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/api/goal */ "./src/client/api/goal.ts");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var _components_goal_creation_ImageCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/goal-creation/ImageCard */ "./src/client/pages/components/goal-creation/ImageCard.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");











const CustomImageSelection = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const inputChanged = (e) => {
        setSearch(e.target.value);
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            searchTheImages();
        }, 700);
        setTimer(newTimer);
    };
    const { data: images, isLoading, error, refetch: searchTheImages, } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)("search-images", () => (0,client_api_goal__WEBPACK_IMPORTED_MODULE_6__.searchImages)({ searchText: search }), {
        refetchOnWindowFocus: false,
        enabled: false,
    });
    const unSplashImages = images !== null && images !== void 0 ? images : [];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen bg-skin-base" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "shadow-card h-20 flex flex-col items-center justify-center px-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: () => {
                                    navigate(-1);
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins text-base text-skin-subtitle font-medium tracking-progress_label w-56 ml-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "outline-none", placeholder: `Search ${goal.goalName}`, value: search, onChange: inputChanged }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CloseButton__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: () => {
                                    navigate(-3);
                                } })] })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "pl-3 pr-3 pt-3.5 grid grid-cols-3 gap-x-0 gap-y-5 md:grid-cols-3 lg:grid-cols-4" }, { children: isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center w-screen" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.TailSpin, { height: "30", width: "30", radius: 2, color: "#056489", ariaLabel: "tail-spin-loading", wrapperStyle: {}, wrapperClass: "", visible: true }) }))) : (unSplashImages.map((image) => {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_ImageCard__WEBPACK_IMPORTED_MODULE_10__.ImageCard, { image: image.urls.small, onClick: () => {
                            goal.setGoalImageUrl(image.urls.small);
                            navigate(-1);
                        } }));
                })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomImageSelection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0N1c3RvbUltYWdlU2VsZWN0aW9uX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLTyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBa0IsRUFBRSxFQUFFO0lBQzlELE9BQU8sQ0FDTCw4RUFBSyxTQUFTLEVBQUMsc0JBQXNCLEVBQUMsT0FBTyxFQUFFLE9BQU8sZ0JBQ3BELGdFQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLG1DQUFtQyxHQUFHLElBQzdELENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g2QztBQUNHO0FBQ1Y7QUFDUTtBQUNUO0FBQ1E7QUFDRztBQUNFO0FBQ2M7QUFDeEI7QUFFMUMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtDQUFRLEVBQUUsQ0FBQztJQUVyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQzlCLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQixNQUFNLFFBQVEsR0FBUSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3BDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFDRixNQUFNLEVBQ0osSUFBSSxFQUFFLE1BQU0sRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFBRSxlQUFlLEdBQ3pCLEdBQUcscURBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsNkRBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ3hFLG9CQUFvQixFQUFFLEtBQUs7UUFDM0IsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDLENBQUM7SUFDSCxNQUFNLGNBQWMsR0FBRyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxFQUFFLENBQUM7SUFDcEMsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxnQ0FBZ0MsaUJBQzdDLDhFQUFLLFNBQVMsRUFBQyxpRUFBaUUsZ0JBQzlFLHVEQUFDLDBEQUFNLElBQ0wsUUFBUSxFQUNOLCtFQUFLLFNBQVMsRUFBQyw0Q0FBNEMsaUJBQ3pELHVEQUFDLDhEQUFVLElBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQ0FDWixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDZixDQUFDLEdBQ0QsRUFDRiw4RUFBSyxTQUFTLEVBQUMseUZBQXlGLGdCQUN0RyxrRUFDRSxJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLFdBQVcsRUFBRSxVQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDdEMsS0FBSyxFQUFFLE1BQU0sRUFDYixRQUFRLEVBQUUsWUFBWSxHQUN0QixJQUNFLEVBQ04sdURBQUMsK0RBQVcsSUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFO29DQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNmLENBQUMsR0FDRCxLQUNFLEdBRVIsSUFDRSxFQUNOLDhFQUFLLFNBQVMsRUFBQyxpRkFBaUYsZ0JBQzdGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDWCw4RUFBSyxTQUFTLEVBQUMsdUNBQXVDLGdCQUNwRCx1REFBQywwREFBUSxJQUNQLE1BQU0sRUFBQyxJQUFJLEVBQ1gsS0FBSyxFQUFDLElBQUksRUFDVixNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBQyxTQUFTLEVBQ2YsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixZQUFZLEVBQUUsRUFBRSxFQUNoQixZQUFZLEVBQUMsRUFBRSxFQUNmLE9BQU8sRUFBRSxJQUFJLEdBQ2IsSUFDRSxDQUNQLENBQUMsQ0FBQyxDQUFDLENBQ0YsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUNoQyxPQUFPLENBQ0wsdURBQUMsMkVBQVMsSUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN2QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZixDQUFDLEdBQ0QsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUNILElBQ0csS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSW1hZ2VDYXJkLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvZ29hbC1jcmVhdGlvbi9DdXN0b21JbWFnZVNlbGVjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBJbWFnZUNhcmRQcm9wcyA9IHtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBJbWFnZUNhcmQgPSAoeyBpbWFnZSwgb25DbGljayB9OiBJbWFnZUNhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtbGdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBzZWFyY2hJbWFnZXMgfSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhaWxTcGluIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XG5pbXBvcnQgeyBJbWFnZUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0ltYWdlQ2FyZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcblxuY29uc3QgQ3VzdG9tSW1hZ2VTZWxlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBnb2FsID0gdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBpbnB1dENoYW5nZWQgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICBjb25zdCBuZXdUaW1lcjogYW55ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWFyY2hUaGVJbWFnZXMoKTtcbiAgICB9LCA3MDApO1xuXG4gICAgc2V0VGltZXIobmV3VGltZXIpO1xuICB9O1xuICBjb25zdCB7XG4gICAgZGF0YTogaW1hZ2VzLFxuICAgIGlzTG9hZGluZyxcbiAgICBlcnJvcixcbiAgICByZWZldGNoOiBzZWFyY2hUaGVJbWFnZXMsXG4gIH0gPSB1c2VRdWVyeShcInNlYXJjaC1pbWFnZXNcIiwgKCkgPT4gc2VhcmNoSW1hZ2VzKHsgc2VhcmNoVGV4dDogc2VhcmNoIH0pLCB7XG4gICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgdW5TcGxhc2hJbWFnZXMgPSBpbWFnZXMgPz8gW107XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBiZy1za2luLWJhc2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNhcmQgaC0yMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zXCI+XG4gICAgICAgIDxOYXZCYXJcbiAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QmFja0J1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0xKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyB0ZXh0LWJhc2UgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtbWVkaXVtIHRyYWNraW5nLXByb2dyZXNzX2xhYmVsIHctNTYgbWwtNlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Z29hbC5nb2FsTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dENoYW5nZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTMgcHItMyBwdC0zLjUgZ3JpZCBncmlkLWNvbHMtMyBnYXAteC0wIGdhcC15LTUgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgdy1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICByYWRpdXM9ezJ9XG4gICAgICAgICAgICAgIGNvbG9yPVwiIzA1NjQ4OVwiXG4gICAgICAgICAgICAgIGFyaWFMYWJlbD1cInRhaWwtc3Bpbi1sb2FkaW5nXCJcbiAgICAgICAgICAgICAgd3JhcHBlclN0eWxlPXt7fX1cbiAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdW5TcGxhc2hJbWFnZXMubWFwKChpbWFnZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SW1hZ2VDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlLnVybHMuc21hbGx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZ29hbC5zZXRHb2FsSW1hZ2VVcmwoaW1hZ2UudXJscy5zbWFsbCk7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUltYWdlU2VsZWN0aW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9