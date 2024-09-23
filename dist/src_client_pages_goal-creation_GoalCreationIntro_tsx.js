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
                navigate("/terms-and-conditions");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0dvYWxDcmVhdGlvbkludHJvX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBc0IsRUFBRSxFQUFFO0lBQ2hFLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsbUNBQW1DLGlCQUNoRCw4RUFBSyxTQUFTLEVBQUMsc0ZBQXNGLGdCQUNsRyxLQUFLLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsd0VBQXdFLGdCQUNwRixRQUFRLElBQ0wsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDlCLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQW9CLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQ0wsOEVBQUssU0FBUyxFQUFDLGFBQWEsZ0JBQzFCLGdFQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxJQUN0QixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWks7QUFDTztBQUVxQztBQUNJO0FBQ2hCO0FBT2pFLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFlLEVBQUUsRUFBRTtJQUN2RCxNQUFNLGdCQUFnQixHQUFHLDBFQUFtQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxNQUFNLE1BQU0sR0FBUSw2Q0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0scUJBQXFCLEdBQUc7UUFDNUIsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsS0FBSztRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hC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WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvbW9uby9jb25uZWN0L0Nvbm5lY3REZXRhaWxzLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdEltYWdlLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9tb25vL2Nvbm5lY3QvQ29ubmVjdFNsaWRlci50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2dvYWwtY3JlYXRpb24vR29hbENyZWF0aW9uSW50cm8udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9zdG9yZS9jb25uZWN0SW50cm9TdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIENvbm5lY3REZXRhaWxzUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbn07XG5cbmNvbnN0IENvbm5lY3REZXRhaWxzID0gKHt0aXRsZSwgc3VidGl0bGV9OiBDb25uZWN0RGV0YWlsc1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG14LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0cmFja2luZy10aXRsZSB0ZXh0LXNraW4tYmFzZSB0ZXh0LWNlbnRlciBtYi0zXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC1za2luLWJhc2UgdGV4dC14cyB0ZXh0LWNlbnRlciB0cmFja2luZy1zdWJ0aXRsZSBwci02XCI+XG4gICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBDb25uZWN0SW1hZ2VQcm9wcyA9IHtcbiAgaW1hZ2U6IHN0cmluZztcbn07XG5jb25zdCBDb25uZWN0SW1hZ2UgPSAoe2ltYWdlfTogQ29ubmVjdEltYWdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTQgbWwtMy41XCI+XG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdEltYWdlO1xuIiwiaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb25uZWN0SW1hZ2UgZnJvbSAnY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvbW9uby9jb25uZWN0L0Nvbm5lY3RJbWFnZSc7XG5pbXBvcnQgQ29ubmVjdERldGFpbHMgZnJvbSAnY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvbW9uby9jb25uZWN0L0Nvbm5lY3REZXRhaWxzJztcbmltcG9ydCB1c2VDb25uZWN0SW5mb1N0b3JlIGZyb20gJ2NsaWVudC9zdG9yZS9jb25uZWN0SW50cm9TdG9yZSc7XG5cbnR5cGUgQ29ubmVjdFByb3BzID0ge1xuICBkZXRhaWxzPzogQXJyYXk8YW55PjtcbiAgaW5kZXg/OiBudW1iZXI7XG59O1xuXG5jb25zdCBDb25uZWN0U2xpZGVyID0gKHtkZXRhaWxzLCBpbmRleH06IENvbm5lY3RQcm9wcykgPT4ge1xuICBjb25zdCBjb25uZWN0SW5mb1N0b3JlID0gdXNlQ29ubmVjdEluZm9TdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBzbGlkZXI6IGFueSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY29ubmVjdFNsaWRlclNldHRpbmdzID0ge1xuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBjZW50ZXJQYWRkaW5nOiAnMHB4JyxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgc3dpcGU6IHRydWUsXG4gICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICdjb25uZWN0X3NsaWRlcicsXG4gICAgYXBwZW5kRG90czogKGRvdHM6IGFueSkgPT4gPHVsPntkb3RzfTwvdWw+LFxuICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQ6IGFueSwgbmV4dDogYW55KSA9PlxuICAgICAgY29ubmVjdEluZm9TdG9yZS5zZXRTbGlkZUluZGV4KG5leHQpLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyLFxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2xpZGVyLmN1cnJlbnQuc2xpY2tHb1RvKGluZGV4KTtcbiAgfSwgW2luZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyIHsuLi5jb25uZWN0U2xpZGVyU2V0dGluZ3N9IHJlZj17c2xpZGVyfT5cbiAgICAgIHtkZXRhaWxzPy5tYXAoKGVsZW1lbnQ6IGFueSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgICAgICAgPENvbm5lY3RJbWFnZSBpbWFnZT17ZWxlbWVudC5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG14LTYgbWItMTFcIj5cbiAgICAgICAgICAgICAgPENvbm5lY3REZXRhaWxzXG4gICAgICAgICAgICAgICAgdGl0bGU9e2VsZW1lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e2VsZW1lbnQuc3VidGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvU2xpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RTbGlkZXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xuaW1wb3J0IENvbm5lY3RTbGlkZXIgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL21vbm8vY29ubmVjdC9Db25uZWN0U2xpZGVyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCBtb25leTEgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL21vbmV5MS5zdmdcIjtcbmltcG9ydCBtb25leTIgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL21vbmV5Mi5zdmdcIjtcbmltcG9ydCBtb25leTMgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL21vbmV5My5zdmdcIjtcbmltcG9ydCBSb3V0ZXMgZnJvbSBcImNsaWVudC9wYWdlcy9yb3V0ZXNcIjtcbmltcG9ydCB1c2VBY2NvdW50U3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9iYW5rQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgdXNlQ29ubmVjdEluZm9TdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2Nvbm5lY3RJbnRyb1N0b3JlXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlR29hbENyZWF0aW9uU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsQ3JlYXRpb25TdGF0dXNcIjtcblxuY29uc3QgY29ubmVjdERldGFpbHNMaXN0ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiU2F2ZSB3aXRoIGVhc2VcIixcbiAgICBzdWJ0aXRsZTpcbiAgICAgIFwiU2V0IGluZGl2aWR1YWwgc2F2aW5ncyBzY2hlZHVsZXMgb3IgZnVuIHNhdmluZ3MgcnVsZXMgZm9yIGVhY2ggZ29hbCB5b3UgaGF2ZVwiLFxuICAgIGltYWdlOiBtb25leTEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUcmFjayB3aXRoIGVhc2VcIixcbiAgICBzdWJ0aXRsZTpcbiAgICAgIFwiVHJhY2sgeW91ciBzYXZpbmdzIHByb2dyZXNzIGZyb20geW91ciBZb3VyIEJhbmsgYXBwIHNvIHlvdSBjYW4gc3BlbmQgZGF5LXRvLWRheSB3aXRoIHBlYWNlIG9mIG1pbmRcIixcbiAgICBpbWFnZTogbW9uZXkzLFxuICB9LFxuXTtcbmNvbnN0IEdvYWxDcmVhdGlvbkludHJvID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHNsaWRlSW5mb1N0b3JlID0gdXNlQ29ubmVjdEluZm9TdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCB1c2VyU3RvcmUgPSB1c2VVc2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3Qgc2xpZGVJbmRleCA9IHNsaWRlSW5mb1N0b3JlLnNsaWRlSW5kZXg7XG4gIGNvbnN0IGdvYWxDcmVhdGlvblN0YXR1cyA9IHVzZUdvYWxDcmVhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5nb2FsQ3JlYXRpb25TdGF0dXNcbiAgKTtcbiAgY29uc3QgeyBoYXNfaW5jb21lIH0gPSBnb2FsQ3JlYXRpb25TdGF0dXM7XG4gIGNvbnN0IHNsaWRlUGFnZXMgPSAoKSA9PiB7XG4gICAgaWYgKHNsaWRlSW5kZXggPj0gMSkge1xuICAgICAgaWYgKHVzZXJTdG9yZS51c2VyLnRjX2FjY2VwdGVkKSB7XG4gICAgICAgIHNsaWRlSW5mb1N0b3JlLnNldFNsaWRlSW5kZXgoMCk7XG4gICAgICAgIGlmIChoYXNfaW5jb21lKSB7XG4gICAgICAgICAgbmF2aWdhdGUoXCIvY3JlYXRlLXNhdmluZ3MtZ29hbFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYXZpZ2F0ZShcIi9tb250aGx5LWluY29tZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2aWdhdGUoXCIvdGVybXMtYW5kLWNvbmRpdGlvbnNcIik7XG4gICAgICAgIHNsaWRlSW5mb1N0b3JlLnNldFNsaWRlSW5kZXgoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlSW5mb1N0b3JlLnNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtMy41XCI+XG4gICAgICAgICAgPE5hdkJhclxuICAgICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZm9TdG9yZS5zZXRTbGlkZUluZGV4KDApO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBtYi0xNlwiPlxuICAgICAgICAgIDxDb25uZWN0U2xpZGVyIGRldGFpbHM9e2Nvbm5lY3REZXRhaWxzTGlzdH0gaW5kZXg9e3NsaWRlSW5kZXh9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXQtMTYgZml4ZWQgYm90dG9tLTAgbGVmdC0zIHJpZ2h0LTNcIj5cbiAgICAgICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9e2Ake3NsaWRlSW5kZXggPT09IDEgPyBcIkkgdW5kZXJzdGFuZFwiIDogXCJOZXh0XCJ9YH1cbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiBzbGlkZVBhZ2VzKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvYWxDcmVhdGlvbkludHJvO1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJztcblxuY29uc3QgdXNlQ29ubmVjdEluZm9TdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBpbmZvU2xpZGVJbmRleDogMCxcbiAgc2xpZGVJbmRleDogMCxcbiAgc2V0U2xpZGVJbmRleDogKGluZGV4OiBhbnkpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgc2xpZGVJbmRleDogaW5kZXgsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0SW5mb1NsaWRlSW5kZXg6IChpbmRleDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGluZm9TbGlkZUluZGV4OiBpbmRleCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxufSkpO1xuZXhwb3J0IGRlZmF1bHQgdXNlQ29ubmVjdEluZm9TdG9yZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==