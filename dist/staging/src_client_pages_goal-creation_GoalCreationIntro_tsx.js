"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_goal-creation_GoalCreationIntro_tsx"],{

/***/ "./src/client/pages/components/mono/connect/ConnectDetails.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/pages/components/mono/connect/ConnectDetails.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const ConnectDetails = ({ title, subtitle }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-center mx-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans font-semibold text-base tracking-title text-skin-base text-center mb-3" }, { children: title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins text-skin-base text-xs text-center tracking-subtitle pr-6" }, { children: subtitle }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDetails);


/***/ }),

/***/ "./src/client/pages/components/mono/connect/ConnectImage.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/pages/components/mono/connect/ConnectImage.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const ConnectImage = ({ image }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mr-4 ml-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: image, alt: "" }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectImage);


/***/ }),

/***/ "./src/client/pages/components/mono/connect/ConnectSlider.tsx":
/*!********************************************************************!*\
  !*** ./src/client/pages/components/mono/connect/ConnectSlider.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var client_pages_components_mono_connect_ConnectImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/pages/components/mono/connect/ConnectImage */ "./src/client/pages/components/mono/connect/ConnectImage.tsx");
/* harmony import */ var client_pages_components_mono_connect_ConnectDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/pages/components/mono/connect/ConnectDetails */ "./src/client/pages/components/mono/connect/ConnectDetails.tsx");
/* harmony import */ var client_store_connectIntroStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/connectIntroStore */ "./src/client/store/connectIntroStore.ts");






const ConnectSlider = ({ details, index }) => {
    const connectInfoStore = (0,client_store_connectIntroStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    const slider = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const connectSliderSettings = {
        mobileFirst: true,
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        centerPadding: '0px',
        slidesToShow: 1,
        speed: 300,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: true,
        swipeToSlide: false,
        className: 'connect_slider',
        appendDots: (dots) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: dots }),
        beforeChange: (current, next) => connectInfoStore.setSlideIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        slider.current.slickGoTo(index);
    }, [index]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, connectSliderSettings, { ref: slider }, { children: details === null || details === void 0 ? void 0 : details.map((element, i) => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-12" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_mono_connect_ConnectImage__WEBPACK_IMPORTED_MODULE_4__["default"], { image: element.image }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center mx-6 mb-11" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_mono_connect_ConnectDetails__WEBPACK_IMPORTED_MODULE_5__["default"], { title: element.title, subtitle: element.subtitle }) }))] }, i));
        }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectSlider);


/***/ }),

/***/ "./src/client/pages/goal-creation/GoalCreationIntro.tsx":
/*!**************************************************************!*\
  !*** ./src/client/pages/goal-creation/GoalCreationIntro.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/pages/components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var client_pages_components_mono_connect_ConnectSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/pages/components/mono/connect/ConnectSlider */ "./src/client/pages/components/mono/connect/ConnectSlider.tsx");
/* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/pages/components/CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var client_assets_images_money1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/money1.svg */ "./src/client/assets/images/money1.svg");
/* harmony import */ var client_assets_images_money3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/assets/images/money3.svg */ "./src/client/assets/images/money3.svg");
/* harmony import */ var client_store_connectIntroStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/connectIntroStore */ "./src/client/store/connectIntroStore.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/goalCreationStatus */ "./src/client/store/goalCreationStatus.ts");











const connectDetailsList = [
    {
        title: "Save with ease",
        subtitle: "Set individual savings schedules or fun savings rules for each goal you have",
        image: client_assets_images_money1_svg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        title: "Track with ease",
        subtitle: "Track your savings progress from your Your Bank app so you can spend day-to-day with peace of mind",
        image: client_assets_images_money3_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
];
const GoalCreationIntro = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const slideInfoStore = (0,client_store_connectIntroStore__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state);
    const userStore = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state);
    const slideIndex = slideInfoStore.slideIndex;
    const goalCreationStatus = (0,client_store_goalCreationStatus__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state.goalCreationStatus);
    const { has_income } = goalCreationStatus;
    const slidePages = () => {
        if (slideIndex >= 1) {
            if (userStore.user.tc_accepted) {
                slideInfoStore.setSlideIndex(0);
                if (has_income) {
                    navigate("/create-savings-goal");
                }
                else {
                    navigate("/monthly-income");
                }
            }
            else {
                navigate("/terms-and-conditons");
                slideInfoStore.setSlideIndex(0);
            }
        }
        else {
            slideInfoStore.setSlideIndex(slideIndex + 1);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-screen" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col bg-white" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-4 mx-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-end" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: () => {
                                    navigate(-1);
                                    slideInfoStore.setSlideIndex(0);
                                } }) })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-20 mb-16" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_mono_connect_ConnectSlider__WEBPACK_IMPORTED_MODULE_9__["default"], { details: connectDetailsList, index: slideIndex }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mt-16 fixed bottom-0 left-3 right-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_10__["default"], { title: `${slideIndex === 1 ? "I understand" : "Next"}`, click: () => slidePages() }) }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoalCreationIntro);


/***/ }),

/***/ "./src/client/store/connectIntroStore.ts":
/*!***********************************************!*\
  !*** ./src/client/store/connectIntroStore.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useConnectInfoStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    infoSlideIndex: 0,
    slideIndex: 0,
    setSlideIndex: (index) => {
        return set(() => {
            const result = {
                slideIndex: index,
            };
            return result;
        });
    },
    setInfoSlideIndex: (index) => {
        return set(() => {
            const result = {
                infoSlideIndex: index,
            };
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConnectInfoStore);


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

/***/ "./src/client/assets/images/money1.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/images/money1.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ffdfb7372c3936044a0.svg";

/***/ }),

/***/ "./src/client/assets/images/money3.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/images/money3.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2fadb01e2155bd3be7a.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0dvYWxDcmVhdGlvbkludHJvX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBc0IsRUFBRSxFQUFFO0lBQ2hFLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsbUNBQW1DLGlCQUNoRCw4RUFBSyxTQUFTLEVBQUMsc0ZBQXNGLGdCQUNsRyxLQUFLLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsd0VBQXdFLGdCQUNwRixRQUFRLElBQ0wsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDlCLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQW9CLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQ0wsOEVBQUssU0FBUyxFQUFDLGFBQWEsZ0JBQzFCLGdFQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxJQUN0QixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWks7QUFDTztBQUVxQztBQUNJO0FBQ2hCO0FBT2pFLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFlLEVBQUUsRUFBRTtJQUN2RCxNQUFNLGdCQUFnQixHQUFHLDBFQUFtQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxNQUFNLE1BQU0sR0FBUSw2Q0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0scUJBQXFCLEdBQUc7UUFDNUIsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsS0FBSztRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hC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Ozs7O0FDdEJOO0FBQzdCLE1BQU0sb0JBQW9CLEdBQUcsbURBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLHFCQUFxQixFQUFFLENBQUMsTUFBVyxFQUFFLEVBQUU7UUFDckMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRztnQkFDYixrQkFBa0IsRUFBRSxNQUFNO2FBQzNCLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMsQ0FBQztBQUNKLGlFQUFlLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvbW9uby9jb25uZWN0L0Nvbm5lY3REZXRhaWxzLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdEltYWdlLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdFNsaWRlci50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2dvYWwtY3JlYXRpb24vR29hbENyZWF0aW9uSW50cm8udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9zdG9yZS9jb25uZWN0SW50cm9TdG9yZS50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvZ29hbENyZWF0aW9uU3RhdHVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgQ29ubmVjdERldGFpbHNQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xufTtcblxuY29uc3QgQ29ubmVjdERldGFpbHMgPSAoe3RpdGxlLCBzdWJ0aXRsZX06IENvbm5lY3REZXRhaWxzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXgtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1iYXNlIHRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyB0ZXh0LXNraW4tYmFzZSB0ZXh0LXhzIHRleHQtY2VudGVyIHRyYWNraW5nLXN1YnRpdGxlIHByLTZcIj5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdERldGFpbHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIENvbm5lY3RJbWFnZVByb3BzID0ge1xuICBpbWFnZTogc3RyaW5nO1xufTtcbmNvbnN0IENvbm5lY3RJbWFnZSA9ICh7aW1hZ2V9OiBDb25uZWN0SW1hZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBtbC0zLjVcIj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb25uZWN0SW1hZ2U7XG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbm5lY3RJbWFnZSBmcm9tICdjbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdEltYWdlJztcbmltcG9ydCBDb25uZWN0RGV0YWlscyBmcm9tICdjbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdERldGFpbHMnO1xuaW1wb3J0IHVzZUNvbm5lY3RJbmZvU3RvcmUgZnJvbSAnY2xpZW50L3N0b3JlL2Nvbm5lY3RJbnRyb1N0b3JlJztcblxudHlwZSBDb25uZWN0UHJvcHMgPSB7XG4gIGRldGFpbHM/OiBBcnJheTxhbnk+O1xuICBpbmRleD86IG51bWJlcjtcbn07XG5cbmNvbnN0IENvbm5lY3RTbGlkZXIgPSAoe2RldGFpbHMsIGluZGV4fTogQ29ubmVjdFByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3RJbmZvU3RvcmUgPSB1c2VDb25uZWN0SW5mb1N0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHNsaWRlcjogYW55ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjb25uZWN0U2xpZGVyU2V0dGluZ3MgPSB7XG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICBzd2lwZTogdHJ1ZSxcbiAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJ2Nvbm5lY3Rfc2xpZGVyJyxcbiAgICBhcHBlbmREb3RzOiAoZG90czogYW55KSA9PiA8dWw+e2RvdHN9PC91bD4sXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudDogYW55LCBuZXh0OiBhbnkpID0+XG4gICAgICBjb25uZWN0SW5mb1N0b3JlLnNldFNsaWRlSW5kZXgobmV4dCksXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDIsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzbGlkZXIuY3VycmVudC5zbGlja0dvVG8oaW5kZXgpO1xuICB9LCBbaW5kZXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZXIgey4uLmNvbm5lY3RTbGlkZXJTZXR0aW5nc30gcmVmPXtzbGlkZXJ9PlxuICAgICAge2RldGFpbHM/Lm1hcCgoZWxlbWVudDogYW55LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICAgICAgICA8Q29ubmVjdEltYWdlIGltYWdlPXtlbGVtZW50LmltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXgtNiBtYi0xMVwiPlxuICAgICAgICAgICAgICA8Q29ubmVjdERldGFpbHNcbiAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17ZWxlbWVudC5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9TbGlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFNsaWRlcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9NYWluQnV0dG9uXCI7XG5pbXBvcnQgQ29ubmVjdFNsaWRlciBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvbW9uby9jb25uZWN0L0Nvbm5lY3RTbGlkZXJcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9DbG9zZUJ1dHRvblwiO1xuaW1wb3J0IG1vbmV5MSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvbW9uZXkxLnN2Z1wiO1xuaW1wb3J0IG1vbmV5MiBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvbW9uZXkyLnN2Z1wiO1xuaW1wb3J0IG1vbmV5MyBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvbW9uZXkzLnN2Z1wiO1xuaW1wb3J0IFJvdXRlcyBmcm9tIFwiY2xpZW50L3BhZ2VzL3JvdXRlc1wiO1xuaW1wb3J0IHVzZUFjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB1c2VDb25uZWN0SW5mb1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY29ubmVjdEludHJvU3RvcmVcIjtcbmltcG9ydCB1c2VVc2VyU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS91c2VyU3RvcmVcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB1c2VHb2FsQ3JlYXRpb25TdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxDcmVhdGlvblN0YXR1c1wiO1xuXG5jb25zdCBjb25uZWN0RGV0YWlsc0xpc3QgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJTYXZlIHdpdGggZWFzZVwiLFxuICAgIHN1YnRpdGxlOlxuICAgICAgXCJTZXQgaW5kaXZpZHVhbCBzYXZpbmdzIHNjaGVkdWxlcyBvciBmdW4gc2F2aW5ncyBydWxlcyBmb3IgZWFjaCBnb2FsIHlvdSBoYXZlXCIsXG4gICAgaW1hZ2U6IG1vbmV5MSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRyYWNrIHdpdGggZWFzZVwiLFxuICAgIHN1YnRpdGxlOlxuICAgICAgXCJUcmFjayB5b3VyIHNhdmluZ3MgcHJvZ3Jlc3MgZnJvbSB5b3VyIFlvdXIgQmFuayBhcHAgc28geW91IGNhbiBzcGVuZCBkYXktdG8tZGF5IHdpdGggcGVhY2Ugb2YgbWluZFwiLFxuICAgIGltYWdlOiBtb25leTMsXG4gIH0sXG5dO1xuY29uc3QgR29hbENyZWF0aW9uSW50cm8gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3Qgc2xpZGVJbmZvU3RvcmUgPSB1c2VDb25uZWN0SW5mb1N0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHVzZXJTdG9yZSA9IHVzZVVzZXJTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBzbGlkZUluZGV4ID0gc2xpZGVJbmZvU3RvcmUuc2xpZGVJbmRleDtcbiAgY29uc3QgZ29hbENyZWF0aW9uU3RhdHVzID0gdXNlR29hbENyZWF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmdvYWxDcmVhdGlvblN0YXR1c1xuICApO1xuICBjb25zdCB7IGhhc19pbmNvbWUgfSA9IGdvYWxDcmVhdGlvblN0YXR1cztcbiAgY29uc3Qgc2xpZGVQYWdlcyA9ICgpID0+IHtcbiAgICBpZiAoc2xpZGVJbmRleCA+PSAxKSB7XG4gICAgICBpZiAodXNlclN0b3JlLnVzZXIudGNfYWNjZXB0ZWQpIHtcbiAgICAgICAgc2xpZGVJbmZvU3RvcmUuc2V0U2xpZGVJbmRleCgwKTtcbiAgICAgICAgaWYgKGhhc19pbmNvbWUpIHtcbiAgICAgICAgICBuYXZpZ2F0ZShcIi9jcmVhdGUtc2F2aW5ncy1nb2FsXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hdmlnYXRlKFwiL21vbnRobHktaW5jb21lXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZpZ2F0ZShcIi90ZXJtcy1hbmQtY29uZGl0b25zXCIpO1xuICAgICAgICBzbGlkZUluZm9TdG9yZS5zZXRTbGlkZUluZGV4KDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZUluZm9TdG9yZS5zZXRTbGlkZUluZGV4KHNsaWRlSW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTMuNVwiPlxuICAgICAgICAgIDxOYXZCYXJcbiAgICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmZvU3RvcmUuc2V0U2xpZGVJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgbWItMTZcIj5cbiAgICAgICAgICA8Q29ubmVjdFNsaWRlciBkZXRhaWxzPXtjb25uZWN0RGV0YWlsc0xpc3R9IGluZGV4PXtzbGlkZUluZGV4fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG10LTE2IGZpeGVkIGJvdHRvbS0wIGxlZnQtMyByaWdodC0zXCI+XG4gICAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICAgIHRpdGxlPXtgJHtzbGlkZUluZGV4ID09PSAxID8gXCJJIHVuZGVyc3RhbmRcIiA6IFwiTmV4dFwifWB9XG4gICAgICAgICAgICBjbGljaz17KCkgPT4gc2xpZGVQYWdlcygpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb2FsQ3JlYXRpb25JbnRybztcbiIsImltcG9ydCBjcmVhdGUgZnJvbSAnenVzdGFuZCc7XG5cbmNvbnN0IHVzZUNvbm5lY3RJbmZvU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgaW5mb1NsaWRlSW5kZXg6IDAsXG4gIHNsaWRlSW5kZXg6IDAsXG4gIHNldFNsaWRlSW5kZXg6IChpbmRleDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHNsaWRlSW5kZXg6IGluZGV4LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldEluZm9TbGlkZUluZGV4OiAoaW5kZXg6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBpbmZvU2xpZGVJbmRleDogaW5kZXgsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHVzZUNvbm5lY3RJbmZvU3RvcmU7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5jb25zdCB1c2VHb2FsQ3JlYXRpb25TdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBnb2FsQ3JlYXRpb25TdGF0dXM6IHt9LFxuICBzZXRHb2FsQ3JlYXRpb25TdGF0dXM6IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgZ29hbENyZWF0aW9uU3RhdHVzOiBzdGF0dXMsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHVzZUdvYWxDcmVhdGlvblN0b3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9