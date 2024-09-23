"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_settings_SavingsTriggersSettings_tsx"],{

/***/ "./src/client/pages/components/TriggerCard.tsx":
/*!*****************************************************!*\
  !*** ./src/client/pages/components/TriggerCard.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/assets/images/savings/trigger.png */ "./src/client/assets/images/savings/trigger.png");


const TriggerCard = ({ id, appliedTo, percentage, image, created_at, }) => {
    const createdAt = new Date(created_at);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2 border-solid border-gray", id: "al-transaction-card" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3 justify-start" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full bg-skin-secondaryWithOpacity h-8 w-8 flex justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: image !== null && image !== void 0 ? image : client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_1__ }) })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40" }, { children: "Round it up" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium text-skin-subtitle tracking-wide text-start` }, { children: `x${percentage}%, ${appliedTo}` }))] }))] })) })) })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TriggerCard);


/***/ }),

/***/ "./src/client/pages/savings-triggers/SavingsTriggerSkeleton.tsx":
/*!**********************************************************************!*\
  !*** ./src/client/pages/savings-triggers/SavingsTriggerSkeleton.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");


const SavingsTriggerCardSkeleton = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-lg px-4 py-3 w-auto mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mr-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { circle: true, width: 40, height: 40 }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: " font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-44" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins text-xs font-medium tracking-wide text-start` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {}) }))] }))] })) })) })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavingsTriggerCardSkeleton);


/***/ }),

/***/ "./src/client/pages/settings/SavingsTriggersSettings.tsx":
/*!***************************************************************!*\
  !*** ./src/client/pages/settings/SavingsTriggersSettings.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx");
/* harmony import */ var _components_TriggerCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TriggerCard */ "./src/client/pages/components/TriggerCard.tsx");
/* harmony import */ var client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/savingsTriggerStore */ "./src/client/store/savingsTriggerStore.ts");
/* harmony import */ var _savings_triggers_SavingsTriggerSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../savings-triggers/SavingsTriggerSkeleton */ "./src/client/pages/savings-triggers/SavingsTriggerSkeleton.tsx");








const SavingsTriggersSettings = ({ fetching, }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    const savingsTriggersStore = (0,client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col h-screen w-screen pt-6 relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-between mr-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_4__["default"], { background: "bg-skin-base", onClick: () => navigate(-1) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBarTitle__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "Savings triggers" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "rounded-full h-10 w-10" }) }))] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mx-3.5 mt-5" }, { children: fetching
                    ? Array(10)
                        .fill("a")
                        .map((_, i) => {
                        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_savings_triggers_SavingsTriggerSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, i);
                    })
                    : savingsTriggersStore.allSavingsTriggers.map((trigger, i) => {
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TriggerCard__WEBPACK_IMPORTED_MODULE_7__["default"], { image: trigger.image, percentage: trigger.round_up_percentage, appliedTo: trigger.merchant_name, created_at: trigger.created_at }, trigger.id));
                    }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavingsTriggersSettings);


/***/ }),

/***/ "./src/client/store/savingsTriggerStore.ts":
/*!*************************************************!*\
  !*** ./src/client/store/savingsTriggerStore.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useSavingsTriggerStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    percentage: 1,
    merchant_name: "All merchants",
    goal_id: 0,
    merchants_dataset: [
        "All merchants",
        "Groceries",
        "Shopping",
        "Eating out",
        "Transportation",
        "Utilities",
        "Health care",
        "Entertainment",
        "Travel",
        "Bills & Fees",
        "Personal care",
        "Home improvement",
        "Charity",
        "Cash withdrawals",
        "Restaurants",
        "Fast food",
    ],
    allSavingsTriggers: [],
    setAllSavingsTriggers: (triggers) => {
        return set(() => {
            const results = {
                allSavingsTriggers: triggers,
            };
            return results;
        });
    },
    setPercentage: (value) => {
        return set(() => {
            const results = {
                percentage: value,
            };
            return results;
        });
    },
    setMerchantName: (name) => {
        return set(() => {
            const results = {
                merchant_name: name,
            };
            return results;
        });
    },
    setGoalId: (id) => {
        return set(() => {
            const results = {
                goal_id: id,
            };
            return results;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSavingsTriggerStore);


/***/ }),

/***/ "./src/client/assets/images/savings/trigger.png":
/*!******************************************************!*\
  !*** ./src/client/assets/images/savings/trigger.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955603989a7c3bd4abea.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zZXR0aW5nc19TYXZpbmdzVHJpZ2dlcnNTZXR0aW5nc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUsrRDtBQUMvRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQ25CLEVBQUUsRUFDRixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLEdBQ0YsRUFBRSxFQUFFO0lBQ1osTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkMsT0FBTyxDQUNMLDhFQUNFLFNBQVMsRUFBQyxnRkFBZ0YsRUFDMUYsRUFBRSxFQUFDLHFCQUFxQixnQkFFeEIsOEVBQUssU0FBUyxFQUFDLDRDQUE0QyxnQkFDekQsOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLCtFQUFLLFNBQVMsRUFBQyw0QkFBNEIsaUJBQ3pDLDhFQUFLLFNBQVMsRUFBQyxrQ0FBa0MsZ0JBQy9DLDhFQUFLLFNBQVMsRUFBQyxVQUFVLGdCQUV2Qiw4RUFBSyxTQUFTLEVBQUMsdUVBQXVFLGdCQUNwRixnRUFBSyxHQUFHLEVBQUUsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUkscUVBQU8sR0FBSSxJQUMxQixJQUNGLElBQ0YsRUFDTiwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsOEVBQUssU0FBUyxFQUFDLGlIQUFpSCxpQ0FFMUgsRUFDTiw4RUFDRSxTQUFTLEVBQUUsOEVBQThFLGdCQUV4RixJQUFJLFVBQVUsTUFBTSxTQUFTLEVBQUUsSUFDNUIsS0FDRixLQUNGLElBQ0YsSUFDRixJQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NtQjtBQUU5QyxNQUFNLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtJQUN0QyxPQUFPLENBQ0wsOEVBQUssU0FBUyxFQUFDLGtDQUFrQyxnQkFDL0MsOEVBQUssU0FBUyxFQUFDLDRDQUE0Qyxn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QUFRO1FBQ1IsY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsV0FBVztLQUNaO0lBQ0Qsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixxQkFBcUIsRUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLGtCQUFrQixFQUFFLFFBQVE7YUFDN0IsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGFBQWEsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQy9CLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLFVBQVUsRUFBRSxLQUFLO2FBQ2xCLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxlQUFlLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBRztnQkFDZCxhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUU7UUFDeEIsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSixpRUFBZSxzQkFBc0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL1RyaWdnZXJDYXJkLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvc2F2aW5ncy10cmlnZ2Vycy9TYXZpbmdzVHJpZ2dlclNrZWxldG9uLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvc2V0dGluZ3MvU2F2aW5nc1RyaWdnZXJzU2V0dGluZ3MudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9zdG9yZS9zYXZpbmdzVHJpZ2dlclN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrSWZEZWJpdENyZWRpdCwgZGF0ZUZvcm1hdCB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuaW1wb3J0IHVzZUFjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50c1wiO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gXCJjbGllbnQvbW9kZWxzL1RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwiY2xpZW50L21vZGVscy9UcmlnZ2VyXCI7XG5pbXBvcnQgdHJpZ2dlciBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy90cmlnZ2VyLnBuZ1wiO1xuY29uc3QgVHJpZ2dlckNhcmQgPSAoe1xuICBpZCxcbiAgYXBwbGllZFRvLFxuICBwZXJjZW50YWdlLFxuICBpbWFnZSxcbiAgY3JlYXRlZF9hdCxcbn06IFRyaWdnZXIpID0+IHtcbiAgY29uc3QgY3JlYXRlZEF0ID0gbmV3IERhdGUoY3JlYXRlZF9hdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHB4LTQgcHktMyB3LWF1dG8gc2hhZG93LWNhcmQgbWItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXlcIlxuICAgICAgaWQ9XCJhbC10cmFuc2FjdGlvbi1jYXJkXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMyBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJcIj48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eSBoLTggdy04IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZSA/PyB0cmlnZ2VyfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2UgdGV4dC1zdGFydCB0ZXh0LWVsbGlwc2lzIG92ZXJmbG93LWhpZGRlbiB3aGl0ZXNwYWNlLW5vd3JhcCB3LTQwXCI+XG4gICAgICAgICAgICAgICAgUm91bmQgaXQgdXBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctd2lkZSB0ZXh0LXN0YXJ0YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtgeCR7cGVyY2VudGFnZX0lLCAke2FwcGxpZWRUb31gfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXJDYXJkO1xuIiwiaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5cbmNvbnN0IFNhdmluZ3NUcmlnZ2VyQ2FyZFNrZWxldG9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBweC00IHB5LTMgdy1hdXRvIG1iLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0zXCI+XG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBjaXJjbGUgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1wb3BwaW5zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibGFjayB0ZXh0LXN0YXJ0IHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwIHctNDRcIj5cbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHRleHQtc3RhcnRgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1wb3BwaW5zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibGFjayB0ZXh0LWVuZCB0ZXh0LWVsbGlwc2lzIG92ZXJmbG93LWhpZGRlbiB3aGl0ZXNwYWNlLW5vd3JhcCB3LTE2XCI+XG4gICAgICAgICAgICA8U2tlbGV0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHRleHQtZW5kIHctMTJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTYXZpbmdzVHJpZ2dlckNhcmRTa2VsZXRvbjtcbiIsImltcG9ydCBUcmlnZ2VyIGZyb20gXCJjbGllbnQvbW9kZWxzL1RyaWdnZXJcIjtcbmltcG9ydCB7IHRyaWdnZXJzIH0gZnJvbSBcImNsaWVudC91dGlscy9Nb2NrRGF0YVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFkZEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRCdXR0b25cIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcbmltcG9ydCBUcmlnZ2VyQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmlnZ2VyQ2FyZFwiO1xuaW1wb3J0IHsgZmV0Y2hBbGxUcmlnZ2VycyB9IGZyb20gXCJjbGllbnQvYXBpL3NhdmluZ3MtdHJpZ2dlcnNcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvc2F2aW5nc1RyaWdnZXJTdG9yZVwiO1xuaW1wb3J0IFNhdmluZ3NUcmlnZ2VyQ2FyZFNrZWxldG9uIGZyb20gXCIuLi9zYXZpbmdzLXRyaWdnZXJzL1NhdmluZ3NUcmlnZ2VyU2tlbGV0b25cIjtcblxudHlwZSBTYXZpbmdzVHJpZ2dlcnNTZXR0aW5nc1Byb3BzID0ge1xuICBmZXRjaGluZz86IGJvb2xlYW47XG59O1xuY29uc3QgU2F2aW5nc1RyaWdnZXJzU2V0dGluZ3MgPSAoe1xuICBmZXRjaGluZyxcbn06IFNhdmluZ3NUcmlnZ2Vyc1NldHRpbmdzUHJvcHMpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBzYXZpbmdzVHJpZ2dlcnNTdG9yZSA9IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gcHQtNiByZWxhdGl2ZVwiPlxuICAgICAgPE5hdkJhclxuICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXItMy41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmctc2tpbi1iYXNlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8TmF2QmFyVGl0bGUgdGl0bGU9XCJTYXZpbmdzIHRyaWdnZXJzXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTAgdy0xMFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMuNSBtdC01XCI+XG4gICAgICAgIHtmZXRjaGluZ1xuICAgICAgICAgID8gQXJyYXkoMTApXG4gICAgICAgICAgICAgIC5maWxsKFwiYVwiKVxuICAgICAgICAgICAgICAubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTYXZpbmdzVHJpZ2dlckNhcmRTa2VsZXRvbiBrZXk9e2l9IC8+O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIDogc2F2aW5nc1RyaWdnZXJzU3RvcmUuYWxsU2F2aW5nc1RyaWdnZXJzLm1hcChcbiAgICAgICAgICAgICAgKHRyaWdnZXI6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxUcmlnZ2VyQ2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RyaWdnZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXt0cmlnZ2VyLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXt0cmlnZ2VyLnJvdW5kX3VwX3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpZWRUbz17dHJpZ2dlci5tZXJjaGFudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0PXt0cmlnZ2VyLmNyZWF0ZWRfYXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBUT0RPOiBGaXggdGhpcyBsYXRlciB0byBwb2ludCB0byBzYXZpbmdzIHRyaWdnZXJzIHBhZ2UgYW5kIGxpc3QgYWxsIGdvYWxzIGZvciBzZWxlY3Rpb24gKi99XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTRcIj5cbiAgICAgICAgPEFkZEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIC8vIG5hdmlnYXRlKFwiL3NhdmluZ3MtdHJpZ2dlclwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNhdmluZ3NUcmlnZ2Vyc1NldHRpbmdzO1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50XCI7XG5cbmNvbnN0IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgcGVyY2VudGFnZTogMSxcbiAgbWVyY2hhbnRfbmFtZTogXCJBbGwgbWVyY2hhbnRzXCIsXG4gIGdvYWxfaWQ6IDAsXG4gIG1lcmNoYW50c19kYXRhc2V0OiBbXG4gICAgXCJBbGwgbWVyY2hhbnRzXCIsXG4gICAgXCJHcm9jZXJpZXNcIixcbiAgICBcIlNob3BwaW5nXCIsXG4gICAgXCJFYXRpbmcgb3V0XCIsXG4gICAgXCJUcmFuc3BvcnRhdGlvblwiLFxuICAgIFwiVXRpbGl0aWVzXCIsXG4gICAgXCJIZWFsdGggY2FyZVwiLFxuICAgIFwiRW50ZXJ0YWlubWVudFwiLFxuICAgIFwiVHJhdmVsXCIsXG4gICAgXCJCaWxscyAmIEZlZXNcIixcbiAgICBcIlBlcnNvbmFsIGNhcmVcIixcbiAgICBcIkhvbWUgaW1wcm92ZW1lbnRcIixcbiAgICBcIkNoYXJpdHlcIixcbiAgICBcIkNhc2ggd2l0aGRyYXdhbHNcIixcbiAgICBcIlJlc3RhdXJhbnRzXCIsXG4gICAgXCJGYXN0IGZvb2RcIixcbiAgXSxcbiAgYWxsU2F2aW5nc1RyaWdnZXJzOiBbXSxcbiAgc2V0QWxsU2F2aW5nc1RyaWdnZXJzOiAodHJpZ2dlcnM6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgYWxsU2F2aW5nc1RyaWdnZXJzOiB0cmlnZ2VycyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgc2V0UGVyY2VudGFnZTogKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IHZhbHVlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZXRNZXJjaGFudE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIG1lcmNoYW50X25hbWU6IG5hbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIHNldEdvYWxJZDogKGlkOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIGdvYWxfaWQ6IGlkLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9