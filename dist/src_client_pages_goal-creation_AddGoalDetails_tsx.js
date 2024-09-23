"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_goal-creation_AddGoalDetails_tsx"],{

/***/ "./src/client/api/accounts.ts":
/*!************************************!*\
  !*** ./src/client/api/accounts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCheckingAccounts": () => (/* binding */ getCheckingAccounts),
/* harmony export */   "getMyAccounts": () => (/* binding */ getMyAccounts),
/* harmony export */   "getSavingsAccounts": () => (/* binding */ getSavingsAccounts),
/* harmony export */   "linkBankAccount": () => (/* binding */ linkBankAccount)
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


const linkBankAccount = ({ configuration, data, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: `/bank_accounts/goal_bank_accounts/create`,
            token: configuration.token,
            data: data,
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
//Get a list of bank accounts
const getBankAccounts = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/bank_accounts/",
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
//Get list of checking accounts
const getCheckingAccounts = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/bank_accounts/checking_accounts",
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
const getSavingsAccounts = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/bank_accounts/savings_accounts",
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
//get my total accounts
const getMyAccounts = (configuration) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: "/bank_accounts/my_acounts",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBankAccounts);


/***/ }),

/***/ "./src/client/api/savings-triggers.ts":
/*!********************************************!*\
  !*** ./src/client/api/savings-triggers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAllTriggers": () => (/* binding */ fetchAllTriggers),
/* harmony export */   "fetchGoalTriggers": () => (/* binding */ fetchGoalTriggers),
/* harmony export */   "saveTrigger": () => (/* binding */ saveTrigger)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const saveTrigger = ({ configuration, data, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = (0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
            endpoint: `/savings_trigger_endpoints/`,
            token: configuration.token,
            data: data,
        });
        return res;
    }
    catch (reason) {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(reason);
        console.debug(reason);
        return Promise.reject(reason);
    }
});
const fetchGoalTriggers = ({ configuration, goalId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: `/savings_trigger_endpoints/goal/${goalId}`,
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
const fetchAllTriggers = ({ configuration, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
            endpoint: `/savings_trigger_endpoints`,
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


/***/ }),

/***/ "./src/client/pages/goal-creation/AddGoalDetails.tsx":
/*!***********************************************************!*\
  !*** ./src/client/pages/goal-creation/AddGoalDetails.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_assets_images_savings_overlay_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/assets/images/savings/overlay.svg */ "./src/client/assets/images/savings/overlay.svg");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx");
/* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var _components_AddPhotoButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/AddPhotoButton */ "./src/client/pages/components/AddPhotoButton.tsx");
/* harmony import */ var _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/goal-creation/Input */ "./src/client/pages/components/goal-creation/Input.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js");
/* harmony import */ var _AddContributionSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AddContributionSettings */ "./src/client/pages/goal-creation/AddContributionSettings.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/api/goal */ "./src/client/api/goal.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts");
/* harmony import */ var _components_goal_creation_SelectBank__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/goal-creation/SelectBank */ "./src/client/pages/components/goal-creation/SelectBank.tsx");
/* harmony import */ var client_api_accounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/api/accounts */ "./src/client/api/accounts.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! client/assets/images/savings/trigger.png */ "./src/client/assets/images/savings/trigger.png");
/* harmony import */ var client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/api/savings-triggers */ "./src/client/api/savings-triggers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


























const AddGoalDetails = () => {
    var _a, _b, _c, _d, _e, _f;
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    const monthlyIncome = (0,client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state.monthlyIncome);
    const user = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state.user);
    const accountStore = (0,client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state);
    const monthlyIncomeAmount = monthlyIncome || user.income;
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_7__["default"])((state) => state);
    const [hasGoalAmount, setHasGoalAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [hasGoalName, setHasGoalName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
    const isValid = !!goalContributionSettings.contributionFrequency &&
        accountStore.savingAccount.bank_name;
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_9__.useConfigurationStore)((state) => state.configuration);
    const saveGoalDetails = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Save goal and get goal id
            const goalResult = yield (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.saveAGoal)({
                configuration: configuration,
                data: {
                    extern_id: "",
                    name: goal.goalName,
                    title: "",
                    amount: parseFloat(goal.goalAmount),
                    contribute_from: "",
                    is_customized: false,
                },
            });
            goal.setContributionSettingsGoalId(goalResult.id);
            goal.setGoalId(goalResult.id);
            const goalId = goalResult.id;
            // Run remaining tasks concurrently using Promise.all
            const [saveImage, goalContributionSchedule, linkAccount, saveRule] = yield Promise.all([
                (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.saveGoalImage)({
                    configuration: configuration,
                    data: {
                        image_url: goal.goalImageUrl,
                    },
                    goalId: goalId,
                }),
                (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.saveGoalContributionSettings)({
                    configuration: configuration,
                    data: {
                        cron_string: goalContributionSettings.cron_string,
                        savings_amount: goalContributionSettings.contributionAmount,
                        contribute_from: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.convertDate)(goalContributionSettings.startingFromDate.toString()),
                    },
                    goalId: goalId,
                }),
                (0,client_api_accounts__WEBPACK_IMPORTED_MODULE_12__.linkBankAccount)({
                    configuration: configuration,
                    data: {
                        goal_id: goalId,
                        bank_account_id: accountStore.savingAccount.id,
                    },
                }),
                (0,client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_13__.saveTrigger)({
                    configuration: configuration,
                    data: {
                        round_up_percentage: goal.percentage,
                        merchant_name: goal.merchant_name,
                        goal_id: goalId,
                    },
                }),
            ]);
            //Confirm the goal
            const confirmTheGoal = yield (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.confirmGoal)({
                configuration: configuration,
                goalId: goalId,
                data: {},
            });
            return {
                goalResult: goalResult,
                saveImage: saveImage,
                goalContributionSchedule: goalContributionSchedule,
                linkAccount: linkAccount,
                confirmTheGoal: confirmTheGoal,
                saveRule: saveRule,
            };
        }
        catch (error) {
            throw error;
        }
    });
    const { isFetching: saveGoalFetching, refetch: saveTheGoal } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("save-goal-details", () => saveGoalDetails()
        .then((result) => {
        if (result) {
            goal.setGoalImageUrl("");
            goal.setGoalName("");
            goal.setGoalAmount("");
            goalContributionSettings.setContributionFrequency("");
            goal.setGoal({});
            accountStore.setSavingAccount({});
            goal.setPercentage(0);
            goal.setMerchantName("");
            (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.getConfirmedGoals)({ configuration: configuration }).then((result) => {
                goal.setConfirmedGoals(result);
            });
        }
    })
        .finally(() => navigate("/")), {
        refetchOnWindowFocus: false,
        enabled: false,
    });
    const { isFetching: fetchingCheckingAccounts } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("checking-accounts", () => (0,client_api_accounts__WEBPACK_IMPORTED_MODULE_12__.getCheckingAccounts)(configuration).then((result) => {
        if (result) {
            accountStore.setCheckingAccounts(result);
        }
    }), { enabled: !!configuration.token });
    const { isFetching: fetchingSavingsAccounts } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("savings-accounts", () => (0,client_api_accounts__WEBPACK_IMPORTED_MODULE_12__.getSavingsAccounts)(configuration).then((result) => {
        if (result) {
            accountStore.setSavingsAccounts(result);
        }
    }), { enabled: !!configuration.token });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "h-screen w-screen relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "h-1/2 absolute top-0 left-0 right-0" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: goal.goalImageUrl ? goal.goalImageUrl : "", className: "absolute top-0 right-0 left-0 w-screen h-72" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_overlay_svg__WEBPACK_IMPORTED_MODULE_14__, className: "absolute object-cover w-screen h-72" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "absolute top-28 left-0 right-0 flex flex-col items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddPhotoButton__WEBPACK_IMPORTED_MODULE_15__.AddPhotoButton, { onClick: () => {
                                            // navigate("/image-selection");
                                        } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xs text-white tracking-subtitle" }, { children: "Tap to personalize cover photo" }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-6 absolute top-0 right-0 left-0 px-3.5" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBar__WEBPACK_IMPORTED_MODULE_16__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackButton__WEBPACK_IMPORTED_MODULE_17__["default"], { background: "bg-skin-base", onClick: () => {
                                    // unconfirmedGoals();
                                    navigate(-1);
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CloseButton__WEBPACK_IMPORTED_MODULE_18__["default"], { background: "bg-skin-base", onClick: () => {
                                    // unconfirmedGoals();
                                    navigate(-3);
                                } })] })) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__.TextInput, { placeHolder: "Add goal name", label: "Let\u2019s name your goal", value: goal.goalName ? goal.goalName : "", leadingIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_20__.FiFlag, { size: "1.375rem" }), addValue: (e) => goal.setGoalName(e), 
                            // hasValue={hasGoalName}
                            clearInput: () => {
                                setHasGoalName(false);
                                goal.setGoalName("");
                            }, onClick: () => {
                                setHasGoalName(false);
                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__.TextInput, { hasCurrencySymbol: true, type: "number", placeHolder: "Add target amount", label: "What\u2019s your target amount?", value: goal.goalAmount ? goal.goalAmount : "", leadingIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_20__.FiTarget, { size: "1.375rem" }), addValue: (e) => goal.setGoalAmount(e), 
                            // hasValue={hasGoalAmount}
                            clearInput: () => {
                                setHasGoalAmount(false);
                                goal.setGoalAmount("");
                            }, onClick: () => {
                                setHasGoalAmount(false);
                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__.TextInputWithPopup, { hasCurrencySymbol: true, type: "button", placeHolder: "Add contribution", label: "How would you like to contribute?", value: goalContributionSettings.contributionFrequency
                                    ? goalContributionSettings.contributionFrequency
                                    : "", leadingIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_20__.FiPocket, { size: "1.375rem" }), hasValue: !!goalContributionSettings.contributionFrequency, onClick: () => {
                                    goalContributionSettings.openContributionSettingsBottomSheet(true);
                                    goalContributionSettings.setContributionAmount((monthlyIncomeAmount * 5) / 100);
                                    goal.setPercentageOfSavings(5);
                                    goalContributionSettings.setStartFromDate(new Date());
                                }, addValue: (e) => e, 
                                // isLoading={saveGoalNameFetching}
                                clearInput: () => goalContributionSettings.setContributionFrequency("") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__.BottomSheet, { open: goalContributionSettings.openContributionSettingsSheet, style: {
                                    borderRadius: 24,
                                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddContributionSettings__WEBPACK_IMPORTED_MODULE_22__.AddContributionSettings, { onClick: () => {
                                        goalContributionSettings.openContributionSettingsBottomSheet(false);
                                        goalContributionSettings.setContributionAmount(0);
                                        goalContributionSettings.setTabIndex(0);
                                        // goalContributionSettings.setStartFromDate(new Date());
                                    } }), defaultSnap: 300 })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-6" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__.TextInputWithPopup, { placeHolder: "set up a funding account", label: "set up a savings funding account and track your savings with ease", value: accountStore.savingAccount &&
                                    ((_a = accountStore.savingAccount) === null || _a === void 0 ? void 0 : _a.bank_name)
                                    ? `${((_b = accountStore.savingAccount) === null || _b === void 0 ? void 0 : _b.bank_name)
                                        ? (_c = accountStore.savingAccount) === null || _c === void 0 ? void 0 : _c.bank_name
                                        : ""} , ${accountStore.savingAccount.account_number
                                        ? (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.maskCreditCardNumber)((_d = accountStore.savingAccount) === null || _d === void 0 ? void 0 : _d.account_number.toString())
                                        : ""}`
                                    : "", leadingIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_20__.FiPocket, { size: "1.375rem" }), hasValue: Object.keys(accountStore.savingAccount).length !== 0
                                    ? !!((_e = accountStore.savingAccount) === null || _e === void 0 ? void 0 : _e.bank_name) &&
                                        ((_f = accountStore.savingAccount) === null || _f === void 0 ? void 0 : _f.account_number)
                                    : false, onClick: () => {
                                    accountStore.openAccountBottomSheet(true);
                                }, addValue: (e) => e, clearInput: () => {
                                    accountStore.setSavingAccount({});
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__.BottomSheet, { onSpringEnd: () => accountStore.setSavingAccount(accountStore.savingAccounts[0]), onDismiss: () => {
                                    accountStore.openAccountBottomSheet(false);
                                    accountStore.setSavingAccount({});
                                }, open: accountStore.accountBottomSheet, style: {
                                    borderRadius: 24,
                                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_SelectBank__WEBPACK_IMPORTED_MODULE_23__.SelectBank, {}), defaultSnap: 300 })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-10" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_19__.TextInputWithPopup, { placeHolder: "Apply savings rule", hasValue: !!goal.percentage && goal.merchant_name, label: "Set rule", value: goal.merchant_name ? `Round it up x${goal.percentage}%` : "", leadingIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_24__ }), addValue: (e) => e, onClick: () => {
                                goal.setPercentage(1);
                                goal.setMerchantName("All merchants");
                                navigate("/create-goal-savings-trigger");
                            }, clearInput: () => {
                                goal.setPercentage(0);
                                goal.setMerchantName("");
                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainButton__WEBPACK_IMPORTED_MODULE_25__["default"], { isDisabled: !isValid, title: "Start saving", click: () => saveTheGoal(), loading: saveGoalFetching })] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddGoalDetails);


/***/ }),

/***/ "./src/client/assets/images/savings/trigger.png":
/*!******************************************************!*\
  !*** ./src/client/assets/images/savings/trigger.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955603989a7c3bd4abea.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0FkZEdvYWxEZXRhaWxzX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBR1c7QUFFOUMsTUFBTSxlQUFlLEdBQUcsQ0FBTyxFQUNwQyxhQUFhLEVBQ2IsSUFBSSxHQUlMLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHdEQUFRLENBQUM7WUFDekIsUUFBUSxFQUFFLDBDQUEwQztZQUNwRCxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDMUIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFDRiw2QkFBNkI7QUFDN0IsTUFBTSxlQUFlLEdBQUcsQ0FBTyxhQUFzQixFQUFFLEVBQUU7SUFDdkQsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0seURBQVMsQ0FBQztZQUMxQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFDRiwrQkFBK0I7QUFFeEIsTUFBTSxtQkFBbUIsR0FB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QyxDQUFDOzRCQUMzQyxDQUFDLEVBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQ0FDZixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMzQixDQUFDLEdBQ0QsSUFDRSxFQUNOLHVEQUFDLCtEQUFVLElBQ1QsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUNwQixLQUFLLEVBQUMsY0FBYyxFQUNwQixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQzFCLE9BQU8sRUFBRSxnQkFBZ0IsR0FDekIsS0FDRSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9hcGkvYWNjb3VudHMudHMiLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L2FwaS9zYXZpbmdzLXRyaWdnZXJzLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLWNyZWF0aW9uL0FkZEdvYWxEZXRhaWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEsIHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rQmFua0FjY291bnQgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBkYXRhLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBkYXRhOiBhbnk7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGAvYmFua19hY2NvdW50cy9nb2FsX2JhbmtfYWNjb3VudHMvY3JlYXRlYCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuLy9HZXQgYSBsaXN0IG9mIGJhbmsgYWNjb3VudHNcbmNvbnN0IGdldEJhbmtBY2NvdW50cyA9IGFzeW5jIChjb25maWd1cmF0aW9uOiBJQ29uZmlnKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi9iYW5rX2FjY291bnRzL1wiLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcbi8vR2V0IGxpc3Qgb2YgY2hlY2tpbmcgYWNjb3VudHNcblxuZXhwb3J0IGNvbnN0IGdldENoZWNraW5nQWNjb3VudHMgPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvYmFua19hY2NvdW50cy9jaGVja2luZ19hY2NvdW50c1wiLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNhdmluZ3NBY2NvdW50cyA9IGFzeW5jIChjb25maWd1cmF0aW9uOiBJQ29uZmlnKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi9iYW5rX2FjY291bnRzL3NhdmluZ3NfYWNjb3VudHNcIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbi8vZ2V0IG15IHRvdGFsIGFjY291bnRzXG5leHBvcnQgY29uc3QgZ2V0TXlBY2NvdW50cyA9IGFzeW5jIChjb25maWd1cmF0aW9uOiBJQ29uZmlnKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi9iYW5rX2FjY291bnRzL215X2Fjb3VudHNcIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJhbmtBY2NvdW50cztcbiIsImltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGZldGNoRGF0YSwgcG9zdERhdGEgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5leHBvcnQgY29uc3Qgc2F2ZVRyaWdnZXIgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBkYXRhLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBkYXRhPzogYW55O1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBgL3NhdmluZ3NfdHJpZ2dlcl9lbmRwb2ludHMvYCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHb2FsVHJpZ2dlcnMgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBnb2FsSWQsXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG4gIGdvYWxJZDogbnVtYmVyO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogYC9zYXZpbmdzX3RyaWdnZXJfZW5kcG9pbnRzL2dvYWwvJHtnb2FsSWR9YCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5leHBvcnQgY29uc3QgZmV0Y2hBbGxUcmlnZ2VycyA9IGFzeW5jICh7XG4gIGNvbmZpZ3VyYXRpb24sXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBgL3NhdmluZ3NfdHJpZ2dlcl9lbmRwb2ludHNgLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG92ZXJsYXkgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3Mvb3ZlcmxheS5zdmdcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEFkZFBob3RvQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkUGhvdG9CdXR0b25cIjtcbmltcG9ydCB7XG4gIFRleHRJbnB1dCxcbiAgVGV4dElucHV0V2l0aFBvcHVwLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0lucHV0XCI7XG5pbXBvcnQgeyBGaUZsYWcsIEZpVGFyZ2V0LCBGaVBvY2tldCwgRmlUcmVuZGluZ1VwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluQnV0dG9uXCI7XG5pbXBvcnQgeyBCb3R0b21TaGVldCB9IGZyb20gXCJyZWFjdC1zcHJpbmctYm90dG9tLXNoZWV0XCI7XG5pbXBvcnQgeyBBZGRDb250cmlidXRpb25TZXR0aW5ncyB9IGZyb20gXCIuL0FkZENvbnRyaWJ1dGlvblNldHRpbmdzXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgdXNlTW9udGhseUluY29tZVN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvbW9udGhseUluY29tZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7XG4gIGNvbmZpcm1Hb2FsLFxuICBnZXRDb25maXJtZWRHb2FscyxcbiAgc2F2ZUFHb2FsLFxuICBzYXZlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzLFxuICBzYXZlR29hbEltYWdlLFxufSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgZGVsZXRlVW5jb25maXJtZWQgZnJvbSBcImNsaWVudC9hcGkvZGVsZXRlLXVuY29uZmlybWVkLWdvYWxzXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5pbXBvcnQgdXNlQmFua0FjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7IFNlbGVjdEJhbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL1NlbGVjdEJhbmtcIjtcbmltcG9ydCBnZXRCYW5rQWNjb3VudHMsIHtcbiAgZ2V0Q2hlY2tpbmdBY2NvdW50cyxcbiAgZ2V0U2F2aW5nc0FjY291bnRzLFxuICBsaW5rQmFua0FjY291bnQsXG59IGZyb20gXCJjbGllbnQvYXBpL2FjY291bnRzXCI7XG5pbXBvcnQgeyBjb252ZXJ0RGF0ZSwgbWFza0NyZWRpdENhcmROdW1iZXIgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB0cmlnZ2VyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3RyaWdnZXIucG5nXCI7XG5pbXBvcnQgeyBzYXZlVHJpZ2dlciB9IGZyb20gXCJjbGllbnQvYXBpL3NhdmluZ3MtdHJpZ2dlcnNcIjtcbmNvbnN0IEFkZEdvYWxEZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MgPSB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGVcbiAgKTtcbiAgY29uc3QgbW9udGhseUluY29tZSA9IHVzZU1vbnRobHlJbmNvbWVTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUubW9udGhseUluY29tZVxuICApO1xuICBjb25zdCB1c2VyID0gdXNlVXNlclN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgYWNjb3VudFN0b3JlID0gdXNlQmFua0FjY291bnRTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBtb250aGx5SW5jb21lQW1vdW50ID0gbW9udGhseUluY29tZSB8fCB1c2VyLmluY29tZTtcbiAgY29uc3QgZ29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBbaGFzR29hbEFtb3VudCwgc2V0SGFzR29hbEFtb3VudF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2hhc0dvYWxOYW1lLCBzZXRIYXNHb2FsTmFtZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBpc1ZhbGlkID1cbiAgICAhIWdvYWxDb250cmlidXRpb25TZXR0aW5ncy5jb250cmlidXRpb25GcmVxdWVuY3kgJiZcbiAgICBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudC5iYW5rX25hbWU7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG5cbiAgY29uc3Qgc2F2ZUdvYWxEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBTYXZlIGdvYWwgYW5kIGdldCBnb2FsIGlkXG4gICAgICBjb25zdCBnb2FsUmVzdWx0ID0gYXdhaXQgc2F2ZUFHb2FsKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGV4dGVybl9pZDogXCJcIixcbiAgICAgICAgICBuYW1lOiBnb2FsLmdvYWxOYW1lLFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChnb2FsLmdvYWxBbW91bnQpLFxuICAgICAgICAgIGNvbnRyaWJ1dGVfZnJvbTogXCJcIixcbiAgICAgICAgICBpc19jdXN0b21pemVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZ29hbC5zZXRDb250cmlidXRpb25TZXR0aW5nc0dvYWxJZChnb2FsUmVzdWx0LmlkKTtcbiAgICAgIGdvYWwuc2V0R29hbElkKGdvYWxSZXN1bHQuaWQpO1xuXG4gICAgICBjb25zdCBnb2FsSWQgPSBnb2FsUmVzdWx0LmlkO1xuXG4gICAgICAvLyBSdW4gcmVtYWluaW5nIHRhc2tzIGNvbmN1cnJlbnRseSB1c2luZyBQcm9taXNlLmFsbFxuICAgICAgY29uc3QgW3NhdmVJbWFnZSwgZ29hbENvbnRyaWJ1dGlvblNjaGVkdWxlLCBsaW5rQWNjb3VudCwgc2F2ZVJ1bGVdID1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHNhdmVHb2FsSW1hZ2Uoe1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBnb2FsLmdvYWxJbWFnZVVybCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb2FsSWQ6IGdvYWxJZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzYXZlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzKHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGNyb25fc3RyaW5nOiBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MuY3Jvbl9zdHJpbmcsXG4gICAgICAgICAgICAgIHNhdmluZ3NfYW1vdW50OiBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MuY29udHJpYnV0aW9uQW1vdW50LFxuICAgICAgICAgICAgICBjb250cmlidXRlX2Zyb206IGNvbnZlcnREYXRlKFxuICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zdGFydGluZ0Zyb21EYXRlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb2FsSWQ6IGdvYWxJZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsaW5rQmFua0FjY291bnQoe1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZ29hbF9pZDogZ29hbElkLFxuICAgICAgICAgICAgICBiYW5rX2FjY291bnRfaWQ6IGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50LmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzYXZlVHJpZ2dlcih7XG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICByb3VuZF91cF9wZXJjZW50YWdlOiBnb2FsLnBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgIG1lcmNoYW50X25hbWU6IGdvYWwubWVyY2hhbnRfbmFtZSxcbiAgICAgICAgICAgICAgZ29hbF9pZDogZ29hbElkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG5cbiAgICAgIC8vQ29uZmlybSB0aGUgZ29hbFxuICAgICAgY29uc3QgY29uZmlybVRoZUdvYWwgPSBhd2FpdCBjb25maXJtR29hbCh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGdvYWxJZDogZ29hbElkLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ29hbFJlc3VsdDogZ29hbFJlc3VsdCxcbiAgICAgICAgc2F2ZUltYWdlOiBzYXZlSW1hZ2UsXG4gICAgICAgIGdvYWxDb250cmlidXRpb25TY2hlZHVsZTogZ29hbENvbnRyaWJ1dGlvblNjaGVkdWxlLFxuICAgICAgICBsaW5rQWNjb3VudDogbGlua0FjY291bnQsXG4gICAgICAgIGNvbmZpcm1UaGVHb2FsOiBjb25maXJtVGhlR29hbCxcbiAgICAgICAgc2F2ZVJ1bGU6IHNhdmVSdWxlLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgaXNGZXRjaGluZzogc2F2ZUdvYWxGZXRjaGluZywgcmVmZXRjaDogc2F2ZVRoZUdvYWwgfSA9IHVzZVF1ZXJ5KFxuICAgIFwic2F2ZS1nb2FsLWRldGFpbHNcIixcbiAgICAoKSA9PlxuICAgICAgc2F2ZUdvYWxEZXRhaWxzKClcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGdvYWwuc2V0R29hbEltYWdlVXJsKFwiXCIpO1xuICAgICAgICAgICAgZ29hbC5zZXRHb2FsTmFtZShcIlwiKTtcbiAgICAgICAgICAgIGdvYWwuc2V0R29hbEFtb3VudChcIlwiKTtcbiAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRDb250cmlidXRpb25GcmVxdWVuY3koXCJcIik7XG4gICAgICAgICAgICBnb2FsLnNldEdvYWwoe30pO1xuICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNldFNhdmluZ0FjY291bnQoe30pO1xuICAgICAgICAgICAgZ29hbC5zZXRQZXJjZW50YWdlKDApO1xuICAgICAgICAgICAgZ29hbC5zZXRNZXJjaGFudE5hbWUoXCJcIik7XG4gICAgICAgICAgICBnZXRDb25maXJtZWRHb2Fscyh7IGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24gfSkudGhlbihcbiAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGdvYWwuc2V0Q29uZmlybWVkR29hbHMocmVzdWx0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IG5hdmlnYXRlKFwiL1wiKSksXG4gICAge1xuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHsgaXNGZXRjaGluZzogZmV0Y2hpbmdDaGVja2luZ0FjY291bnRzIH0gPSB1c2VRdWVyeShcbiAgICBcImNoZWNraW5nLWFjY291bnRzXCIsXG4gICAgKCkgPT5cbiAgICAgIGdldENoZWNraW5nQWNjb3VudHMoY29uZmlndXJhdGlvbikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBhY2NvdW50U3RvcmUuc2V0Q2hlY2tpbmdBY2NvdW50cyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICB7IGVuYWJsZWQ6ICEhY29uZmlndXJhdGlvbi50b2tlbiB9XG4gICk7XG5cbiAgY29uc3QgeyBpc0ZldGNoaW5nOiBmZXRjaGluZ1NhdmluZ3NBY2NvdW50cyB9ID0gdXNlUXVlcnkoXG4gICAgXCJzYXZpbmdzLWFjY291bnRzXCIsXG4gICAgKCkgPT5cbiAgICAgIGdldFNhdmluZ3NBY2NvdW50cyhjb25maWd1cmF0aW9uKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGFjY291bnRTdG9yZS5zZXRTYXZpbmdzQWNjb3VudHMocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgeyBlbmFibGVkOiAhIWNvbmZpZ3VyYXRpb24udG9rZW4gfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvMiBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtnb2FsLmdvYWxJbWFnZVVybCA/IGdvYWwuZ29hbEltYWdlVXJsIDogXCJcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbGVmdC0wIHctc2NyZWVuIGgtNzJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZyBzcmM9e292ZXJsYXl9IGNsYXNzTmFtZT1cImFic29sdXRlIG9iamVjdC1jb3ZlciB3LXNjcmVlbiBoLTcyXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yOCBsZWZ0LTAgcmlnaHQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgIDxBZGRQaG90b0J1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIG5hdmlnYXRlKFwiL2ltYWdlLXNlbGVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhzIHRleHQtd2hpdGUgdHJhY2tpbmctc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgVGFwIHRvIHBlcnNvbmFsaXplIGNvdmVyIHBob3RvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGxlZnQtMCBweC0zLjVcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gdW5jb25maXJtZWRHb2FscygpO1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLWJhc2VcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIHVuY29uZmlybWVkR29hbHMoKTtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIHJvdW5kZWQtdC0zeGwgYmctc2tpbi1iYXNlIGFic29sdXRlIHJpZ2h0LTAgbGVmdC0wIHRvcC00OCBib3R0b20tMCBweC0zLjUgcHQtOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cIkFkZCBnb2FsIG5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMZXTigJlzIG5hbWUgeW91ciBnb2FsXCJcbiAgICAgICAgICAgIHZhbHVlPXtnb2FsLmdvYWxOYW1lID8gZ29hbC5nb2FsTmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICBsZWFkaW5nSWNvbj17PEZpRmxhZyBzaXplPVwiMS4zNzVyZW1cIiAvPn1cbiAgICAgICAgICAgIGFkZFZhbHVlPXsoZSkgPT4gZ29hbC5zZXRHb2FsTmFtZShlKX1cbiAgICAgICAgICAgIC8vIGhhc1ZhbHVlPXtoYXNHb2FsTmFtZX1cbiAgICAgICAgICAgIGNsZWFySW5wdXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SGFzR29hbE5hbWUoZmFsc2UpO1xuICAgICAgICAgICAgICBnb2FsLnNldEdvYWxOYW1lKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SGFzR29hbE5hbWUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgaGFzQ3VycmVuY3lTeW1ib2w9e3RydWV9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwiQWRkIHRhcmdldCBhbW91bnRcIlxuICAgICAgICAgICAgbGFiZWw9XCJXaGF04oCZcyB5b3VyIHRhcmdldCBhbW91bnQ/XCJcbiAgICAgICAgICAgIHZhbHVlPXtnb2FsLmdvYWxBbW91bnQgPyBnb2FsLmdvYWxBbW91bnQgOiBcIlwifVxuICAgICAgICAgICAgbGVhZGluZ0ljb249ezxGaVRhcmdldCBzaXplPVwiMS4zNzVyZW1cIiAvPn1cbiAgICAgICAgICAgIGFkZFZhbHVlPXsoZSkgPT4gZ29hbC5zZXRHb2FsQW1vdW50KGUpfVxuICAgICAgICAgICAgLy8gaGFzVmFsdWU9e2hhc0dvYWxBbW91bnR9XG4gICAgICAgICAgICBjbGVhcklucHV0PXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEhhc0dvYWxBbW91bnQoZmFsc2UpO1xuICAgICAgICAgICAgICBnb2FsLnNldEdvYWxBbW91bnQoXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRIYXNHb2FsQW1vdW50KGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRXaXRoUG9wdXBcbiAgICAgICAgICAgIGhhc0N1cnJlbmN5U3ltYm9sPXt0cnVlfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cIkFkZCBjb250cmlidXRpb25cIlxuICAgICAgICAgICAgbGFiZWw9XCJIb3cgd291bGQgeW91IGxpa2UgdG8gY29udHJpYnV0ZT9cIlxuICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MuY29udHJpYnV0aW9uRnJlcXVlbmN5XG4gICAgICAgICAgICAgICAgPyBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MuY29udHJpYnV0aW9uRnJlcXVlbmN5XG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWFkaW5nSWNvbj17PEZpUG9ja2V0IHNpemU9XCIxLjM3NXJlbVwiIC8+fVxuICAgICAgICAgICAgaGFzVmFsdWU9eyEhZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLmNvbnRyaWJ1dGlvbkZyZXF1ZW5jeX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLm9wZW5Db250cmlidXRpb25TZXR0aW5nc0JvdHRvbVNoZWV0KFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldENvbnRyaWJ1dGlvbkFtb3VudChcbiAgICAgICAgICAgICAgICAobW9udGhseUluY29tZUFtb3VudCAqIDUpIC8gMTAwXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGdvYWwuc2V0UGVyY2VudGFnZU9mU2F2aW5ncyg1KTtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldFN0YXJ0RnJvbURhdGUobmV3IERhdGUoKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBlfVxuICAgICAgICAgICAgLy8gaXNMb2FkaW5nPXtzYXZlR29hbE5hbWVGZXRjaGluZ31cbiAgICAgICAgICAgIGNsZWFySW5wdXQ9eygpID0+XG4gICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRDb250cmlidXRpb25GcmVxdWVuY3koXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgICAgb3Blbj17Z29hbENvbnRyaWJ1dGlvblNldHRpbmdzLm9wZW5Db250cmlidXRpb25TZXR0aW5nc1NoZWV0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICAgIDxBZGRDb250cmlidXRpb25TZXR0aW5nc1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5vcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldChcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0Q29udHJpYnV0aW9uQW1vdW50KDApO1xuICAgICAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldFRhYkluZGV4KDApO1xuICAgICAgICAgICAgICAgICAgLy8gZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldFN0YXJ0RnJvbURhdGUobmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRTbmFwPXszMDB9XG4gICAgICAgICAgPjwvQm90dG9tU2hlZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8VGV4dElucHV0V2l0aFBvcHVwXG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cInNldCB1cCBhIGZ1bmRpbmcgYWNjb3VudFwiXG4gICAgICAgICAgICBsYWJlbD1cInNldCB1cCBhIHNhdmluZ3MgZnVuZGluZyBhY2NvdW50IGFuZCB0cmFjayB5b3VyIHNhdmluZ3Mgd2l0aCBlYXNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNhdmluZ0FjY291bnQgJiZcbiAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNhdmluZ0FjY291bnQ/LmJhbmtfbmFtZVxuICAgICAgICAgICAgICAgID8gYCR7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50Py5iYW5rX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50Py5iYW5rX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0gLCAke1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudC5hY2NvdW50X251bWJlclxuICAgICAgICAgICAgICAgICAgICAgID8gbWFza0NyZWRpdENhcmROdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50Py5hY2NvdW50X251bWJlci50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGVhZGluZ0ljb249ezxGaVBvY2tldCBzaXplPVwiMS4zNzVyZW1cIiAvPn1cbiAgICAgICAgICAgIGhhc1ZhbHVlPXtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWNjb3VudFN0b3JlLnNhdmluZ0FjY291bnQpLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICAgID8gISFhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudD8uYmFua19uYW1lICYmXG4gICAgICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudD8uYWNjb3VudF9udW1iZXJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGFjY291bnRTdG9yZS5vcGVuQWNjb3VudEJvdHRvbVNoZWV0KHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFkZFZhbHVlPXsoZSkgPT4gZX1cbiAgICAgICAgICAgIGNsZWFySW5wdXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNldFNhdmluZ0FjY291bnQoe30pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgICAgb25TcHJpbmdFbmQ9eygpID0+XG4gICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zZXRTYXZpbmdBY2NvdW50KGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50c1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgICBhY2NvdW50U3RvcmUub3BlbkFjY291bnRCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zZXRTYXZpbmdBY2NvdW50KHt9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcGVuPXthY2NvdW50U3RvcmUuYWNjb3VudEJvdHRvbVNoZWV0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17PFNlbGVjdEJhbmsgLz59XG4gICAgICAgICAgICBkZWZhdWx0U25hcD17MzAwfVxuICAgICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRXaXRoUG9wdXBcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwiQXBwbHkgc2F2aW5ncyBydWxlXCJcbiAgICAgICAgICAgIGhhc1ZhbHVlPXshIWdvYWwucGVyY2VudGFnZSAmJiBnb2FsLm1lcmNoYW50X25hbWV9XG4gICAgICAgICAgICBsYWJlbD1cIlNldCBydWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXtnb2FsLm1lcmNoYW50X25hbWUgPyBgUm91bmQgaXQgdXAgeCR7Z29hbC5wZXJjZW50YWdlfSVgIDogXCJcIn1cbiAgICAgICAgICAgIGxlYWRpbmdJY29uPXs8aW1nIHNyYz17dHJpZ2dlcn0gLz59XG4gICAgICAgICAgICBhZGRWYWx1ZT17KGUpID0+IGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdvYWwuc2V0UGVyY2VudGFnZSgxKTtcbiAgICAgICAgICAgICAgZ29hbC5zZXRNZXJjaGFudE5hbWUoXCJBbGwgbWVyY2hhbnRzXCIpO1xuICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9jcmVhdGUtZ29hbC1zYXZpbmdzLXRyaWdnZXJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xlYXJJbnB1dD17KCkgPT4ge1xuICAgICAgICAgICAgICBnb2FsLnNldFBlcmNlbnRhZ2UoMCk7XG4gICAgICAgICAgICAgIGdvYWwuc2V0TWVyY2hhbnROYW1lKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICBpc0Rpc2FibGVkPXshaXNWYWxpZH1cbiAgICAgICAgICB0aXRsZT1cIlN0YXJ0IHNhdmluZ1wiXG4gICAgICAgICAgY2xpY2s9eygpID0+IHNhdmVUaGVHb2FsKCl9XG4gICAgICAgICAgbG9hZGluZz17c2F2ZUdvYWxGZXRjaGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFkZEdvYWxEZXRhaWxzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9