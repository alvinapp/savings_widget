"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_components_AddPhotoButton_tsx-src_client_pages_components_goal-creation_Sele-fc7da0"],{

/***/ "./src/client/pages/components/AccordionCard.tsx":
/*!*******************************************************!*\
  !*** ./src/client/pages/components/AccordionCard.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Accordion = ({ title, content, isOpen = false }) => {
    const [isOpenState, setIsOpenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isOpen);
    const toggleAccordion = () => {
        setIsOpenState(!isOpenState);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "border border-gray-300 rounded-lg mb-4 max-w-screen-xl" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex items-center justify-between p-4 bg-gray-100 cursor-pointer", onClick: toggleAccordion }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-skin-base text-tiny md:text-sm lg:text-base xl:text-lg flex-grow" }, { children: title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "transform duration-300" }, { children: isOpenState ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }))) }))] })), isOpenState && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "p-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-skin-subtitle text-xs md:text-sm lg:text-base xl:text-lg" }, { children: content })) }))), !isOpenState && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "grid w-full" }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/AccountTypeCard.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/components/AccountTypeCard.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTypeCard": () => (/* binding */ AccountTypeCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const AccountTypeCard = ({ title, description, onClick, disabled = false, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex flex-row mb-4 border-gray-300 rounded-lg p-4 cursor-pointer shadow-card hover:shadow-md ${disabled ? "opacity-50 pointer-events-none" : ""}`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col justify-start" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins font-medium text-skin-base text-tiny md:text-sm lg:text-base xl:text-lg mb-2 ${disabled ? "text-gray-400" : ""}` }, { children: title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins font-medium text-skin-subtitle text-xs md:text-sm lg:text-base xl:text-lg ${disabled ? "text-gray-400" : ""}` }, { children: description }))] })) })));
};


/***/ }),

/***/ "./src/client/pages/components/AddPhotoButton.tsx":
/*!********************************************************!*\
  !*** ./src/client/pages/components/AddPhotoButton.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPhotoButton": () => (/* binding */ AddPhotoButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const AddPhotoButton = ({ onClick }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: `rounded-full p-2.5 flex items-center justify-center bg-skin-secondary1WithOpacity`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiImage, { color: "#FFFFFF", size: "1.2rem" }) })));
};


/***/ }),

/***/ "./src/client/pages/components/IconContainercard.tsx":
/*!***********************************************************!*\
  !*** ./src/client/pages/components/IconContainercard.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconContainer": () => (/* binding */ IconContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const IconContainer = ({ icon }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex items-center justify-center w-32 h-32 border-4 border-black rounded-full my-4" }, { children: icon })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/AccountDropDown.tsx":
/*!***********************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/AccountDropDown.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDropDown": () => (/* binding */ AccountDropDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const AccountDropDown = ({ accountName, accountNumber, disable = false, onClick, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col mb-3", onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded flex flex-col pl-5 pr-2  py-3 border ${disable ? "border-skin-secondary" : "border-skin-primary"}` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-medium text-skin-base tracking-title" }, { children: accountName })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-medium text-skin-subtitle tracking-title" }, { children: accountNumber }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiChevronDown, { color: `${disable ? "#d3d3d3" : "#101010"}`, size: "1.2rem" }) }))] })) })) })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/ChooseSavingsAccount.tsx":
/*!****************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/ChooseSavingsAccount.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseSavingsAccount": () => (/* binding */ ChooseSavingsAccount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var _SavingsAccountCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SavingsAccountCard */ "./src/client/pages/components/goal-creation/SavingsAccountCard.tsx");
/* harmony import */ var _CreateSavingsAccountCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateSavingsAccountCard */ "./src/client/pages/components/goal-creation/CreateSavingsAccountCard.tsx");
/* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts");
/* harmony import */ var client_store_createSavingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/createSavingsStore */ "./src/client/store/createSavingsStore.ts");
/* harmony import */ var _SelectSavingsType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectSavingsType */ "./src/client/pages/components/goal-creation/SelectSavingsType.tsx");
/* harmony import */ var _SuccessClassicAccountCreation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SuccessClassicAccountCreation */ "./src/client/pages/components/goal-creation/SuccessClassicAccountCreation.tsx");
/* harmony import */ var _ClassicAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassicAccount */ "./src/client/pages/components/goal-creation/ClassicAccount.tsx");










const ChooseSavingsAccount = ({ activeIndex, click, }) => {
    var _a;
    const accountStore = (0,client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    const savinsAccounts = (_a = accountStore.savingAccounts) !== null && _a !== void 0 ? _a : [];
    const createSavingsStore = (0,client_store_createSavingsStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    const [accountType, showAccountType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedSavingsAccount, showSelectedSavingsAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [success, showSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start mx-3.5 mb-28 relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute top-0 right-0" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloseButton__WEBPACK_IMPORTED_MODULE_4__["default"], { background: "bg-skin-secondaryWithOpacity", onClick: () => {
                        accountStore.openSavingsAccountBottomSheet(false);
                    } }) })), accountType ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectSavingsType__WEBPACK_IMPORTED_MODULE_5__.SelectSavingsType, { click: () => {
                    showAccountType(false);
                    showSelectedSavingsAccount(true);
                } })) : selectedSavingsAccount ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ClassicAccount__WEBPACK_IMPORTED_MODULE_6__.ClassicAccount, { onClick: () => {
                    showSelectedSavingsAccount(false);
                    showSuccess(true);
                } })) : success ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SuccessClassicAccountCreation__WEBPACK_IMPORTED_MODULE_7__.SuccessClassicAccountCreation, { onClick: () => {
                    showSuccess(false);
                    accountStore.openSavingsAccountBottomSheet(false);
                } })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-start" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-12" }, { children: "Fund to" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "" }, { children: savinsAccounts.map((account, i) => {
                            const isSelected = account.id === activeIndex;
                            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SavingsAccountCard__WEBPACK_IMPORTED_MODULE_8__.SavingsAccountCard, { selected: isSelected, accountName: account.bank_name, accountNumber: account.account_number, onClick: () => {
                                    if (click) {
                                        click(account);
                                    }
                                    accountStore.setSavingAccount(account);
                                    accountStore.openSavingsAccountBottomSheet(false);
                                } }, i));
                        }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-5 mb-8" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CreateSavingsAccountCard__WEBPACK_IMPORTED_MODULE_9__.CreateSavingsAccountCard, { onClick: () => {
                                showAccountType(true);
                            } }) }))] })))] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/ClassicAccount.tsx":
/*!**********************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/ClassicAccount.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassicAccount": () => (/* binding */ ClassicAccount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _AccordionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AccordionCard */ "./src/client/pages/components/AccordionCard.tsx");
/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _IconContainercard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IconContainercard */ "./src/client/pages/components/IconContainercard.tsx");





const ClassicAccount = ({ onClick }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-center mx-3.5 mb-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconContainercard__WEBPACK_IMPORTED_MODULE_1__.IconContainer, { icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, { size: 55 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-bold text-skin-base tracking-title mb-2 mt-3 text-center" }, { children: "Demo Savings Account" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-skin-subtitle text-xs text-center md:text-sm lg:text-base xl:text-lg mb-6" }, { children: "A flexible accounts where you can earn an extra 2% on your savings to get to your goal faster." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccordionCard__WEBPACK_IMPORTED_MODULE_3__.Accordion, { title: "Interest rate", content: "A high yield, fee-free savings account that pays you 2% per annum interest toward your savings goal" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccordionCard__WEBPACK_IMPORTED_MODULE_3__.Accordion, { title: "Opening requirement", content: "If this is your first account with us, we will need a government-issued ID, proof of address and your BVN. If this is an added savings account, click 'Open new account' below to proceed.", isOpen: true })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MainButton__WEBPACK_IMPORTED_MODULE_4__["default"]
            // isDisabled={!isValid}
            , { 
                // isDisabled={!isValid}
                title: "Open new account", click: onClick })] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/CreateSavingsAccountCard.tsx":
/*!********************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/CreateSavingsAccountCard.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSavingsAccountCard": () => (/* binding */ CreateSavingsAccountCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


const CreateSavingsAccountCard = ({ onClick, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded flex flex-col pl-5 pr-2  py-3 border border-skin-primary`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-medium text-skin-base tracking-title" }, { children: "Create savings account" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "w-6 h-6 rounded-full flex justify-center items-center bg-skin-primary" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiPlus, { color: "#ffffff", size: "1.2rem" }) })) }))] })) })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/CustomDateButton.tsx":
/*!************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/CustomDateButton.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDateButton": () => (/* binding */ CustomDateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var _CustomDatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomDatePicker */ "./src/client/pages/components/CustomDatePicker.tsx");





const CustomDateButton = ({ isActive, click, }) => {
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"])((state) => state);
    // Get the selected date from the store
    const selectedDate = goalContributionSettings.startingFromDate;
    // Format the date to 'dd/MM/yyyy'
    const dateString = selectedDate
        ? selectedDate.toLocaleDateString('en-GB') // This formats the date as 'dd/MM/yyyy'
        : 'Custom';
    const ExampleCustomInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ value, onClick }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-3xl border border-1 border-skin-primary p-px mx-1", onClick: click }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ onClick: onClick, className: `rounded-3xl py-3 px-3.5 flex items-center justify-center ${isActive
                ? "bg-skin-primary text-white"
                : "text-skin-neutral bg-skin-base"}` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xs tracking-wide text-center" }, { children: isActive ? dateString : "Custom" })) })) }))));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CustomDatePicker__WEBPACK_IMPORTED_MODULE_4__.CustomDatePicker, Object.assign({ selectedDate: selectedDate, onDateChange: (date) => goalContributionSettings.setStartFromDate(date), minDate: new Date() }, { children: ({ toggleCalendar }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExampleCustomInput, { onClick: toggleCalendar })) })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/MonthlyContributionSelector.tsx":
/*!***********************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/MonthlyContributionSelector.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyContributionSelector": () => (/* binding */ MonthlyContributionSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MonthlyDaySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthlyDaySelector */ "./src/client/pages/components/goal-creation/MonthlyDaySelector.tsx");
/* harmony import */ var _SelectDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectDate */ "./src/client/pages/components/goal-creation/SelectDate.tsx");





const MonthlyContributionSelector = () => {
    const [activeDayIndex, setActiveDayIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [activeDateOption, setActiveDateOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const selectDateOptions = [
        { id: 0, title: "Today" },
        { id: 1, title: "Tomorrow" },
        { id: 2, title: "" },
    ];
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    const weeksOfTheMonthInWords = ["", "first", "second", "third", "fourth"];
    let tomorrow = new Date();
    const today = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mb-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MonthlyDaySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: (week) => {
                        goalContributionSettings.setMonthlyWeek(weeksOfTheMonthInWords[week]);
                        setActiveDayIndex(week);
                    }, activeIndex: activeDayIndex }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectDate__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "starting from", activeOption: activeDateOption, onClick: (selected) => {
                        if (selected === 0) {
                            goalContributionSettings.setStartFromDate(today);
                        }
                        else if (selected === 1) {
                            goalContributionSettings.setStartFromDate(tomorrow);
                        }
                        else {
                        }
                        setActiveDateOption(selected);
                    }, selectDateOptions: selectDateOptions }) }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/MonthlyDaySelector.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/MonthlyDaySelector.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const weekOfTheMonth = ["", "1st", "2nd", "3rd", "Last"];
const MonthlyDayCircle = ({ week, onClick, isActive, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full border border-1 border-skin-primary p-px mx-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded-full h-9 w-9 flex items-center justify-center ${isActive
                ? "bg-skin-primary text-white"
                : "bg-skin-base  text-skin-neutral"}`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-semibold font-poppins text-xs" }, { children: weekOfTheMonth[week] })) })) })));
};
const MonthlyDay = ({ activeIndex, onClick, }) => {
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    const exactDaysOfTheWeek = [
        "",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const [exactDay, selectExactDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select day");
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row mb-4" }, { children: [1, 2, 3, 4].map((week, i) => {
                    const active = week === activeIndex;
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonthlyDayCircle, { week: week, isActive: active, onClick: () => {
                            if (onClick) {
                                onClick(week);
                            }
                        } }, i));
                }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative inline-block" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ id: "day-dropdown", "aria-expanded": "true", "aria-haspopup": "true", className: "text-skin-base border border-1 border-skin-primary text-base font-medium font-poppins rounded-3xl px-4 py-2.5 text-center inline-flex items-center", type: "button", onClick: () => setIsOpen(!isOpen) }, { children: [exactDay, " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ className: "w-4 h-4 ml-2", "aria-hidden": "true", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }))] })), isOpen ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute right-0 left-0 rounded-2xl bg-skin-base p-3.5 w-32 border border-1 border-skin-primary h-28 overflow-y-auto" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "" }, { children: exactDaysOfTheWeek.map((day, i) => {
                                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "text-base font-poppins font-medium tracking-progress_label", onClick: () => {
                                            selectExactDay(day);
                                            goalContributionSettings.setWeekDayOfTheMonth(day);
                                            setIsOpen(false);
                                        } }, { children: day }), i));
                                }) })) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthlyDay);


/***/ }),

/***/ "./src/client/pages/components/goal-creation/SavingsAccountCard.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/SavingsAccountCard.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingsAccountCard": () => (/* binding */ SavingsAccountCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const SavingsAccountCard = ({ selected, accountName, accountNumber, onClick, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded flex flex-col pl-5 pr-2  py-3 border mb-3 ${selected ? "border-skin-primary" : "border-skin-secondary"}`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row justify-between" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-medium text-skin-base tracking-title" }, { children: accountName })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-medium text-skin-subtitle tracking-title" }, { children: accountNumber }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-col" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", checked: selected, className: "w-5 h-5 rounded-full accent-[#056489]", readOnly: true }) }))] })) })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/SelectBank.tsx":
/*!******************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/SelectBank.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectBank": () => (/* binding */ SelectBank)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts");
/* harmony import */ var _AccountDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountDropDown */ "./src/client/pages/components/goal-creation/AccountDropDown.tsx");
/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js");
/* harmony import */ var _ChooseSavingsAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChooseSavingsAccount */ "./src/client/pages/components/goal-creation/ChooseSavingsAccount.tsx");








const SelectBank = ({ updateBank = false }) => {
    var _a;
    const accountStore = (0,client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    const checkingAccounts = (_a = accountStore.checkingAccounts) !== null && _a !== void 0 ? _a : [];
    const savingAccount = accountStore.savingAccount;
    const [cardId, setCardId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // const { isFetching: linkingAccount, refetch: linkAccount } = useQuery(
    //   "link-bank-account",
    //   () =>
    //     linkBankAccount({
    //       configuration: configuration,
    //       data: {
    //         goal_id: goalStore.selectedGoal.id,
    //         bank_account_id: 0,
    //       },
    //     }),
    //   { refetchOnWindowFocus: false, enabled: false }
    // );
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start mx-3.5 mb-5 relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute top-0 right-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloseButton__WEBPACK_IMPORTED_MODULE_3__["default"], { background: "bg-skin-secondaryWithOpacity", onClick: () => {
                        accountStore.openAccountBottomSheet(false);
                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-10 text-center" }, { children: "set up a savings funding account" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-4 w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-start mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-tiny font-medium text-skin-subtitle tracking-title" }, { children: "Fund From" })) })), checkingAccounts.map((account, i) => {
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccountDropDown__WEBPACK_IMPORTED_MODULE_4__.AccountDropDown, { accountName: account.bank_name, accountNumber: account.account_number, disable: true }, i));
                    })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-5 w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-start mb-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-tiny font-medium text-skin-subtitle tracking-title" }, { children: "Fund To" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccountDropDown__WEBPACK_IMPORTED_MODULE_4__.AccountDropDown, { accountName: savingAccount === null || savingAccount === void 0 ? void 0 : savingAccount.bank_name, accountNumber: savingAccount === null || savingAccount === void 0 ? void 0 : savingAccount.account_number, onClick: () => {
                            accountStore.openSavingsAccountBottomSheet(true);
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__.BottomSheet, { onDismiss: () => {
                            accountStore.openSavingsAccountBottomSheet(false);
                        }, 
                        // onSpringStart={() => accountStore.openAccountBottomSheet(false)}
                        open: accountStore.savingsAccountBottomSheet, style: {
                            borderRadius: 24,
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChooseSavingsAccount__WEBPACK_IMPORTED_MODULE_6__.ChooseSavingsAccount, { click: (account) => setCardId(account.id), activeIndex: cardId }), defaultSnap: 600, className: "backdrop-blur-bottomSheet" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MainButton__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "Done", click: () => {
                    accountStore.openAccountBottomSheet(false);
                } })] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/SelectDate.tsx":
/*!******************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/SelectDate.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDateButton": () => (/* binding */ SelectDateButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomDateButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomDateButton */ "./src/client/pages/components/goal-creation/CustomDateButton.tsx");



const SelectDateButton = ({ label, isActive, onClick, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-3xl border border-1 border-skin-primary p-px mx-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ onClick: onClick, className: `rounded-3xl py-3 px-3.5 flex items-center justify-center ${isActive
                ? "bg-skin-primary text-white"
                : "text-skin-neutral bg-skin-base"}` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xs tracking-wide text-center" }, { children: label })) })) })));
};
const SelectDate = ({ title, onClick, activeOption, selectDateOptions, }) => {
    const [customButton, selectCustomButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mb-4" }, { children: title ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center" }, { children: title !== null && title !== void 0 ? title : "" }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: selectDateOptions.map((option, i) => {
                    const active = option.id === activeOption;
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: i === 2 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CustomDateButton__WEBPACK_IMPORTED_MODULE_2__.CustomDateButton, { isActive: active, click: () => {
                                if (onClick) {
                                    onClick(option.id);
                                }
                            } })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectDateButton, { label: option.title, isActive: active, onClick: () => {
                                if (onClick) {
                                    onClick(option.id);
                                }
                            } }, i)) }));
                }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectDate);


/***/ }),

/***/ "./src/client/pages/components/goal-creation/SelectSavingsType.tsx":
/*!*************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/SelectSavingsType.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectSavingsType": () => (/* binding */ SelectSavingsType)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _AccountTypeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AccountTypeCard */ "./src/client/pages/components/AccountTypeCard.tsx");


const SelectSavingsType = ({ click }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-start mx-3.5 mb-8 mt-10" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-3" }, { children: "Which savings account would you like to use for this goal?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "ml-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccountTypeCard__WEBPACK_IMPORTED_MODULE_1__.AccountTypeCard, { title: "Demo Savings Account", description: "A flexible accounts where you can earn an extra 2% on your savings to get to your goal faster.", onClick: click }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccountTypeCard__WEBPACK_IMPORTED_MODULE_1__.AccountTypeCard, { title: "Fixed savings account", description: "A higher yield savings account appropriate for longer term savings goals.Earn 6% interest to get to your goal faster.", disabled: true })] }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/SuccessClassicAccountCreation.tsx":
/*!*************************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/SuccessClassicAccountCreation.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessClassicAccountCreation": () => (/* binding */ SuccessClassicAccountCreation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainButton */ "./src/client/pages/components/MainButton.tsx");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _IconContainercard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IconContainercard */ "./src/client/pages/components/IconContainercard.tsx");




const SuccessClassicAccountCreation = ({ onClick, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-center mx-3.5 mb-5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconContainercard__WEBPACK_IMPORTED_MODULE_1__.IconContainer, { icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, { size: 55 }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-bold text-skin-base tracking-title mb-2 mt-3 text-center" }, { children: "Hooray! savings account created successfully." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-skin-subtitle text-xs text-center md:text-sm lg:text-base xl:text-lg mb-6" }, { children: "Nice work! Your new savings account has been created. We've sent an email with your account details." }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-center mx-3.5 pt-12" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "text-base font-semibold font-poppins tracking-longest_text text-skin-primary border border-skin-primary w-full rounded-lg h-14 flex flex-row items-center justify-center" }, { children: "View account details" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MainButton__WEBPACK_IMPORTED_MODULE_3__["default"]
                    // isDisabled={!isValid}
                    , { 
                        // isDisabled={!isValid}
                        title: "Continue", click: onClick })] }))] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/WeeklyContributionSelector.tsx":
/*!**********************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/WeeklyContributionSelector.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectDate */ "./src/client/pages/components/goal-creation/SelectDate.tsx");
/* harmony import */ var _WeeklyDaySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeeklyDaySelector */ "./src/client/pages/components/goal-creation/WeeklyDaySelector.tsx");





const WeeklyContributionSelector = () => {
    const [activeDayIndex, setActiveDayIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [activeDateOption, setActiveDateOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    let tomorrow = new Date();
    const today = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const selectDateOptions = [
        { id: 0, title: "Today" },
        { id: 1, title: "Tomorrow" },
        { id: 2, title: "" },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "mb-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mb-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WeeklyDaySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: (day) => setActiveDayIndex(day), activeIndex: activeDayIndex }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectDate__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "starting from", activeOption: activeDateOption, onClick: (selected) => {
                        if (selected === 0) {
                            goalContributionSettings.setStartFromDate(today);
                        }
                        else if (selected === 1) {
                            goalContributionSettings.setStartFromDate(tomorrow);
                        }
                        else {
                        }
                        setActiveDateOption(selected);
                    }, selectDateOptions: selectDateOptions }) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeeklyContributionSelector);


/***/ }),

/***/ "./src/client/pages/components/goal-creation/WeeklyDaySelector.tsx":
/*!*************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/WeeklyDaySelector.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const daysOfWeek = ["", "S", "M", "T", "W", "T", "F", "S"];
const WeekdayCircle = ({ day, onClick, isActive }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "rounded-full border border-1 border-skin-primary p-px mx-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `rounded-full h-9 w-9 flex items-center justify-center ${isActive
                ? "bg-skin-primary text-white"
                : "bg-skin-base  text-skin-neutral"}`, onClick: onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-semibold font-poppins text-xs" }, { children: daysOfWeek[day] })) })) })));
};
const WeekDay = ({ activeIndex, onClick, }) => {
    // get current date
    const exactDaysOfTheWeek = [
        "",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const [exactDay, setExactDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: [1, 2, 3, 4, 5, 6, 7].map((day, i) => {
                    const active = day === activeIndex;
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WeekdayCircle, { day: day, isActive: active, onClick: () => {
                            setExactDay(exactDaysOfTheWeek[day]);
                            goalContributionSettings.setWeekDayToContribute(exactDaysOfTheWeek[day]);
                            if (onClick) {
                                onClick(day);
                            }
                        } }, i));
                }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center mt-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center" }, { children: goalContributionSettings.weekDayToContibute })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeekDay);


/***/ }),

/***/ "./src/client/pages/goal-creation/AddContributionSettings.tsx":
/*!********************************************************************!*\
  !*** ./src/client/pages/goal-creation/AddContributionSettings.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContributionSettings": () => (/* binding */ AddContributionSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_pages_components_TabFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/pages/components/TabFilter */ "./src/client/pages/components/TabFilter.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var client_pages_components_Amount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/pages/components/Amount */ "./src/client/pages/components/Amount.tsx");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs");
/* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx");
/* harmony import */ var _components_goal_creation_BottomSheetFooter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/goal-creation/BottomSheetFooter */ "./src/client/pages/components/goal-creation/BottomSheetFooter.tsx");
/* harmony import */ var _components_goal_creation_WeeklyContributionSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/goal-creation/WeeklyContributionSelector */ "./src/client/pages/components/goal-creation/WeeklyContributionSelector.tsx");
/* harmony import */ var _components_goal_creation_MonthlyContributionSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/goal-creation/MonthlyContributionSelector */ "./src/client/pages/components/goal-creation/MonthlyContributionSelector.tsx");
/* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/store/userStore */ "./src/client/store/userStore.ts");
/* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/api/goal */ "./src/client/api/goal.ts");
/* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/store/configuration */ "./src/client/store/configuration.ts");
/* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/store/goalStore */ "./src/client/store/goalStore.ts");
/* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts");
/* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/utils/Formatters */ "./src/client/utils/Formatters.ts");
/* harmony import */ var client_store_currencyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/store/currencyStore */ "./src/client/store/currencyStore.ts");



















const AddContributionSettings = ({ onClick, updatingGoal = false, }) => {
    var _a, _b;
    const contributionSettingsTabs = [
        {
            tab_id: 0,
            name: "Weekly",
            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiToggleLeft, {}),
        },
        {
            tab_id: 1,
            name: "Monthly",
            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiToggleRight, {}),
        },
    ];
    const monthlyIncome = (0,client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_4__["default"])((state) => state.monthlyIncome);
    const user = (0,client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])((state) => state.user);
    const currencySymbol = (0,client_store_currencyStore__WEBPACK_IMPORTED_MODULE_6__["default"])((state) => state.currency);
    const monthlyIncomeAmount = monthlyIncome || user.income;
    const goalContributionSettings = (0,client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"])((state) => state);
    const configuration = (0,client_store_configuration__WEBPACK_IMPORTED_MODULE_8__.useConfigurationStore)((state) => state.configuration);
    const goal = (0,client_store_goalStore__WEBPACK_IMPORTED_MODULE_9__["default"])((state) => state);
    const weeklyCronString = `every ${goalContributionSettings.weekDayToContibute}`;
    const monthlyCronString = `every ${goalContributionSettings.monthlyWeek} ${goalContributionSettings.weekDayOfTheMonth}`;
    const { isFetching: frequencyFetching, refetch: getFrequencyText } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("frequency-text", () => (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.getScheduleFrequencyText)({
        configuration: configuration,
        data: {
            cron_string: goalContributionSettings.tabIndex === 1
                ? monthlyCronString
                : weeklyCronString,
            savings_amount: goalContributionSettings.contributionAmount,
        },
    }).then((result) => {
        if (result.frequency) {
            goalContributionSettings.setContributionFrequency(result.frequency);
            goalContributionSettings.setCronString(goalContributionSettings.tabIndex === 1
                ? monthlyCronString
                : weeklyCronString);
            goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
    }), {
        refetchOnWindowFocus: true,
        enabled: false,
    });
    // const {
    //   isFetching: saveContributionFetching,
    //   refetch: saveContributionSettings,
    // } = useQuery(
    //   "save-contribution-settings",
    //   () =>
    //     saveGoalContributionSettings({
    //       configuration: configuration,
    //       data: {
    //         cron_string:
    //           goalContributionSettings.tabIndex === 1
    //             ? monthlyCronString
    //             : weeklyCronString,
    //         savings_amount: goalContributionSettings.contributionAmount,
    //         contribute_from: convertDate(
    //           goalContributionSettings.startingFromDate.toString()
    //         ),
    //       },
    //       goalId: goal.contributionSettingsGoalId,
    //     }).then((result) => {
    //       if (result.frequency !== "") {
    //         // goalContributionSettings.setContributionFrequency(result.frequency);
    //         // goalContributionSettings.openContributionSettingsBottomSheet(false);
    //       }
    //     }),
    //   {
    //     refetchOnWindowFocus: true,
    //     enabled: false,
    //   }
    // );
    const { isFetching: updateContributionFetching, refetch: updateContributionSettings, } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("update-contribution-settings", () => (0,client_api_goal__WEBPACK_IMPORTED_MODULE_10__.updateGoalContributionSettings)({
        configuration: configuration,
        data: {
            cron_string: goalContributionSettings.tabIndex === 1
                ? monthlyCronString
                : weeklyCronString,
            savings_amount: goalContributionSettings.contributionAmount,
            contribute_from: (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.convertDate)(goalContributionSettings.startingFromDate.toString()),
        },
        goalId: goal.confirmedGoal.id,
    }).then((result) => {
        if (result.frequency !== "") {
            // console.log(result.frequency);
            goal.setGoalFrequency(result.frequency);
            goalContributionSettings.setContributionFrequency(result.frequency);
            goalContributionSettings.openContributionSettingsBottomSheet(false);
        }
    }), {
        refetchOnWindowFocus: true,
        enabled: false,
    });
    const debouncedMaturityDate = (0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.debounce)((value, frequency) => {
        goalContributionSettings.setMaturityDateText((0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.calculateGoalMaturityDate)({
            goalAmount: goal.goalAmount,
            contributionAmount: (monthlyIncomeAmount * value) / 100,
            frequency: frequency,
            dateStr: goalContributionSettings.startingFromDate.toString(),
        }));
    }, 1000);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        debouncedMaturityDate(goal.percentageOfSavings, goalContributionSettings.tabIndex === 0 ? "weekly" : "monthly");
    }, [goalContributionSettings.startingFromDate]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "absolute top-0 right-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CloseButton__WEBPACK_IMPORTED_MODULE_12__["default"], { background: "bg-skin-secondaryWithOpacity", onClick: onClick }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row justify-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center" }, { children: "I will contribute" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-6" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_TabFilter__WEBPACK_IMPORTED_MODULE_13__["default"], { tabs: contributionSettingsTabs, activeTab: goalContributionSettings.tabIndex, onClick: (tab) => {
                        goalContributionSettings.setTabIndex(tab.tab_id);
                        if (tab.tab_id === 0) {
                            goalContributionSettings.setContributionAmount((monthlyIncomeAmount * 5) / 100);
                            goal.setPercentageOfSavings(5);
                            debouncedMaturityDate(5, "weekly");
                        }
                        else {
                            goalContributionSettings.setContributionAmount((monthlyIncomeAmount * 20) / 100);
                            goal.setPercentageOfSavings(20);
                            debouncedMaturityDate(20, "monthly");
                        }
                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-2.5 flex flex-row justify-center items-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(client_pages_components_Amount__WEBPACK_IMPORTED_MODULE_14__.Amount, { balance: goalContributionSettings.contributionAmount }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mb-6 px-10" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_15__["default"], { value: goal.percentageOfSavings, className: "horizontal-slider", thumbClassName: "example-thumb", trackClassName: "example-track", marks: 20, renderThumb: (props, state) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, props, { children: `${state.valueNow}%` }))), onChange: (value) => {
                        goalContributionSettings.setContributionAmount((monthlyIncomeAmount * value) / 100);
                        goal.setPercentageOfSavings(value);
                        debouncedMaturityDate(value, goalContributionSettings.tabIndex === 0 ? "weekly" : "monthly");
                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-poppins font-medium text-xs text-skin-neutral tracking-wide text-center mb-4" }, { children: `${goal.percentageOfSavings}% of my monthly net income` })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-workSans font-semibold text-base text-skin-base text-center tracking-title mb-5" }, { children: "on" })), goalContributionSettings.tabIndex === 1 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_MonthlyContributionSelector__WEBPACK_IMPORTED_MODULE_16__.MonthlyContributionSelector, {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_WeeklyContributionSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "mt-12" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_goal_creation_BottomSheetFooter__WEBPACK_IMPORTED_MODULE_18__.BottomSheetFooter, { title: goalContributionSettings.maturityDateText
                        ? goalContributionSettings.tabIndex === 0
                            ? `Save ${currencySymbol}${goalContributionSettings.contributionAmount.toLocaleString("en-US")} weekly to reach your goal on ${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.formatDate)((_a = goalContributionSettings.maturityDateText) !== null && _a !== void 0 ? _a : "")}.`
                            : `Save ${currencySymbol}${goalContributionSettings.contributionAmount.toLocaleString("en-US")} monthly to reach your goal on ${(0,client_utils_Formatters__WEBPACK_IMPORTED_MODULE_11__.formatDate)((_b = goalContributionSettings.maturityDateText) !== null && _b !== void 0 ? _b : "")}.`
                        : "Calculating goal maturity date...", onClick: () => updatingGoal ? updateContributionSettings() : getFrequencyText(), loading: frequencyFetching || updateContributionFetching }) }))] })));
};


/***/ }),

/***/ "./src/client/store/createSavingsStore.ts":
/*!************************************************!*\
  !*** ./src/client/store/createSavingsStore.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useCreateSavingsAccountStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    savingsTypeBottomSheet: false,
    selectedAccountBottomSheet: false,
    successBottomSheet: false,
    openSavingsTypeBottomSheet: (open) => {
        return set(() => {
            const results = {
                savingsTypeBottomSheet: open,
            };
            return results;
        });
    },
    openSelectedAccountBottomSheet: (open) => {
        return set(() => {
            const results = {
                selectedAccountBottomSheet: open,
            };
            return results;
        });
    },
    openSuccessBottomSheet: (open) => {
        return set(() => {
            const results = {
                successBottomSheet: open,
            };
            return results;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateSavingsAccountStore);


/***/ }),

/***/ "./src/client/store/currencyStore.ts":
/*!*******************************************!*\
  !*** ./src/client/store/currencyStore.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useCurrencyStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    currency: "₦",
    setCurrency: (curr) => {
        return set(() => {
            const result = {
                currency: curr,
            };
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrencyStore);


/***/ }),

/***/ "./src/client/assets/images/savings/overlay.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/images/savings/overlay.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "135b9af7bfdc6eb8a9d4.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19jb21wb25lbnRzX0FkZFBob3RvQnV0dG9uX3RzeC1zcmNfY2xpZW50X3BhZ2VzX2NvbXBvbmVudHNfZ29hbC1jcmVhdGlvbl9TZWxlLWZjN2RhMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQVFqQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFrQixFQUFFLEVBQUU7SUFDOUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRywrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXZELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtRQUMzQixjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLHdEQUF3RCxpQkFDckUsK0VBQ0UsU0FBUyxFQUFDLGtFQUFrRSxFQUM1RSxPQUFPLEVBQUUsZUFBZSxpQkFFeEIsOEVBQUssU0FBUyxFQUFDLGdHQUFnRyxnQkFDNUcsS0FBSyxJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLHdCQUF3QixnQkFDcEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNiLDhFQUNFLEtBQUssRUFBQyw0QkFBNEIsRUFDbEMsU0FBUyxFQUFDLFNBQVMsRUFDbkIsSUFBSSxFQUFDLE1BQU0sRUFDWCxPQUFPLEVBQUMsV0FBVyxFQUNuQixNQUFNLEVBQUMsY0FBYyxnQkFFckIsaUVBQ0UsYUFBYSxFQUFDLE9BQU8sRUFDckIsY0FBYyxFQUFDLE9BQU8sRUFDdEIsV0FBVyxFQUFFLENBQUMsRUFDZCxDQUFDLEVBQUMsZUFBZSxHQUNqQixJQUNFLENBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FDRiw4RUFDRSxLQUFLLEVBQUMsNEJBQTRCLEVBQ2xDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLElBQUksRUFBQyxNQUFNLEVBQ1gsT0FBTyxFQUFD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dmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0FjY29yZGlvbkNhcmQudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0FjY291bnRUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQWRkUGhvdG9CdXR0b24udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0ljb25Db250YWluZXJjYXJkLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0FjY291bnREcm9wRG93bi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9DaG9vc2VTYXZpbmdzQWNjb3VudC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9DbGFzc2ljQWNjb3VudC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9DcmVhdGVTYXZpbmdzQWNjb3VudENhcmQudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vQ3VzdG9tRGF0ZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9Nb250aGx5Q29udHJpYnV0aW9uU2VsZWN0b3IudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vTW9udGhseURheVNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL1NhdmluZ3NBY2NvdW50Q2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9TZWxlY3RCYW5rLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL1NlbGVjdERhdGUudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vU2VsZWN0U2F2aW5nc1R5cGUudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vU3VjY2Vzc0NsYXNzaWNBY2NvdW50Q3JlYXRpb24udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vV2Vla2x5Q29udHJpYnV0aW9uU2VsZWN0b3IudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vV2Vla2x5RGF5U2VsZWN0b3IudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLWNyZWF0aW9uL0FkZENvbnRyaWJ1dGlvblNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvY3JlYXRlU2F2aW5nc1N0b3JlLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9zdG9yZS9jdXJyZW5jeVN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFjY29yZGlvblByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgaXNPcGVuPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb24gPSAoeyB0aXRsZSwgY29udGVudCwgaXNPcGVuID0gZmFsc2UgfTogQWNjb3JkaW9uUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzT3BlblN0YXRlLCBzZXRJc09wZW5TdGF0ZV0gPSB1c2VTdGF0ZShpc09wZW4pO1xuXG4gIGNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc09wZW5TdGF0ZSghaXNPcGVuU3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgbWItNCBtYXgtdy1zY3JlZW4teGxcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2UgdGV4dC10aW55IG1kOnRleHQtc20gbGc6dGV4dC1iYXNlIHhsOnRleHQtbGcgZmxleC1ncm93XCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAge2lzT3BlblN0YXRlID8gKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTUgMTVsNy03IDcgN1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTE5IDlsLTcgNy03LTdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc09wZW5TdGF0ZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC1za2luLXN1YnRpdGxlIHRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1sZ1wiPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshaXNPcGVuU3RhdGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsXCI+PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBBY2NvdW50VHlwZUNhcmRQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEFjY291bnRUeXBlQ2FyZCA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgb25DbGljayxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbn06IEFjY291bnRUeXBlQ2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBtYi00IGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtNCBjdXJzb3ItcG9pbnRlciBzaGFkb3ctY2FyZCBob3ZlcjpzaGFkb3ctbWQgJHtcbiAgICAgICAgZGlzYWJsZWQgPyBcIm9wYWNpdHktNTAgcG9pbnRlci1ldmVudHMtbm9uZVwiIDogXCJcIlxuICAgICAgfWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2UgdGV4dC10aW55IG1kOnRleHQtc20gbGc6dGV4dC1iYXNlIHhsOnRleHQtbGcgbWItMiAke1xuICAgICAgICAgICAgZGlzYWJsZWQgPyBcInRleHQtZ3JheS00MDBcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC1za2luLXN1YnRpdGxlIHRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2UgeGw6dGV4dC1sZyAke1xuICAgICAgICAgICAgZGlzYWJsZWQgPyBcInRleHQtZ3JheS00MDBcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUltYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG50eXBlIEFkZFBob3RvQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBBZGRQaG90b0J1dHRvbiA9ICh7IG9uQ2xpY2sgfTogQWRkUGhvdG9CdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCBwLTIuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1za2luLXNlY29uZGFyeTFXaXRoT3BhY2l0eWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxGaUltYWdlIGNvbG9yPVwiI0ZGRkZGRlwiIHNpemU9XCIxLjJyZW1cIiAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBJY29uQ29udGFpbmVyUHJvcHMgPSB7XG4gIGljb246IEpTWC5FbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSAoeyBpY29uIH06IEljb25Db250YWluZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0zMiBoLTMyIGJvcmRlci00IGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGwgbXktNFwiPlxuICAgICAge2ljb259XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlDaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG50eXBlIEFjY291bnREcm9wRG93blByb3BzID0ge1xuICBhY2NvdW50TmFtZT86IHN0cmluZztcbiAgYWNjb3VudE51bWJlcj86IHN0cmluZztcbiAgZGlzYWJsZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBBY2NvdW50RHJvcERvd24gPSAoe1xuICBhY2NvdW50TmFtZSxcbiAgYWNjb3VudE51bWJlcixcbiAgZGlzYWJsZSA9IGZhbHNlLFxuICBvbkNsaWNrLFxufTogQWNjb3VudERyb3BEb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWItM1wiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkIGZsZXggZmxleC1jb2wgcGwtNSBwci0yICBweS0zIGJvcmRlciAke1xuICAgICAgICAgIGRpc2FibGUgPyBcImJvcmRlci1za2luLXNlY29uZGFyeVwiIDogXCJib3JkZXItc2tpbi1wcmltYXJ5XCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGVcIj5cbiAgICAgICAgICAgICAge2FjY291bnROYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgICB7YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPEZpQ2hldnJvbkRvd25cbiAgICAgICAgICAgICAgY29sb3I9e2Ake2Rpc2FibGUgPyBcIiNkM2QzZDNcIiA6IFwiIzEwMTAxMFwifWB9XG4gICAgICAgICAgICAgIHNpemU9XCIxLjJyZW1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IFNhdmluZ3NBY2NvdW50Q2FyZCB9IGZyb20gXCIuL1NhdmluZ3NBY2NvdW50Q2FyZFwiO1xuaW1wb3J0IHsgQ3JlYXRlU2F2aW5nc0FjY291bnRDYXJkIH0gZnJvbSBcIi4vQ3JlYXRlU2F2aW5nc0FjY291bnRDYXJkXCI7XG5pbXBvcnQgdXNlQmFua0FjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB1c2VDcmVhdGVTYXZpbmdzQWNjb3VudFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY3JlYXRlU2F2aW5nc1N0b3JlXCI7XG5pbXBvcnQgeyBCb3R0b21TaGVldCB9IGZyb20gXCJyZWFjdC1zcHJpbmctYm90dG9tLXNoZWV0XCI7XG5pbXBvcnQgeyBTZWxlY3RTYXZpbmdzVHlwZSB9IGZyb20gXCIuL1NlbGVjdFNhdmluZ3NUeXBlXCI7XG5pbXBvcnQgeyBTdWNjZXNzQ2xhc3NpY0FjY291bnRDcmVhdGlvbiB9IGZyb20gXCIuL1N1Y2Nlc3NDbGFzc2ljQWNjb3VudENyZWF0aW9uXCI7XG5pbXBvcnQgeyBDbGFzc2ljQWNjb3VudCB9IGZyb20gXCIuL0NsYXNzaWNBY2NvdW50XCI7XG5cbnR5cGUgQ2hvb3NlU2F2aW5nc0FjY291bnRQcm9wcyA9IHtcbiAgYWN0aXZlSW5kZXg/OiBudW1iZXI7XG4gIGNsaWNrPzogKHNhdmluZ0FjY291bnQ6IGFueSkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgQ2hvb3NlU2F2aW5nc0FjY291bnQgPSAoe1xuICBhY3RpdmVJbmRleCxcbiAgY2xpY2ssXG59OiBDaG9vc2VTYXZpbmdzQWNjb3VudFByb3BzKSA9PiB7XG4gIGNvbnN0IGFjY291bnRTdG9yZSA9IHVzZUJhbmtBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3Qgc2F2aW5zQWNjb3VudHMgPSBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudHMgPz8gW107XG4gIGNvbnN0IGNyZWF0ZVNhdmluZ3NTdG9yZSA9IHVzZUNyZWF0ZVNhdmluZ3NBY2NvdW50U3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlXG4gICk7XG4gIGNvbnN0IFthY2NvdW50VHlwZSwgc2hvd0FjY291bnRUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkU2F2aW5nc0FjY291bnQsIHNob3dTZWxlY3RlZFNhdmluZ3NBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNob3dTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgbXgtMy41IG1iLTI4IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tc2Vjb25kYXJ5V2l0aE9wYWNpdHlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGFjY291bnRTdG9yZS5vcGVuU2F2aW5nc0FjY291bnRCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjY291bnRUeXBlID8gKFxuICAgICAgICA8U2VsZWN0U2F2aW5nc1R5cGVcbiAgICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2hvd0FjY291bnRUeXBlKGZhbHNlKTtcbiAgICAgICAgICAgIHNob3dTZWxlY3RlZFNhdmluZ3NBY2NvdW50KHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApIDogc2VsZWN0ZWRTYXZpbmdzQWNjb3VudCA/IChcbiAgICAgICAgPENsYXNzaWNBY2NvdW50XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2hvd1NlbGVjdGVkU2F2aW5nc0FjY291bnQoZmFsc2UpO1xuICAgICAgICAgICAgc2hvd1N1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBzdWNjZXNzID8gKFxuICAgICAgICA8U3VjY2Vzc0NsYXNzaWNBY2NvdW50Q3JlYXRpb25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzaG93U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICBhY2NvdW50U3RvcmUub3BlblNhdmluZ3NBY2NvdW50Qm90dG9tU2hlZXQoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGUgbWItNiBtdC0xMlwiPlxuICAgICAgICAgICAgICBGdW5kIHRvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge3Nhdmluc0FjY291bnRzLm1hcCgoYWNjb3VudDogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGFjY291bnQuaWQgPT09IGFjdGl2ZUluZGV4O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTYXZpbmdzQWNjb3VudENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2FjY291bnQuYmFua19uYW1lfVxuICAgICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcj17YWNjb3VudC5hY2NvdW50X251bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2soYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNldFNhdmluZ0FjY291bnQoYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5vcGVuU2F2aW5nc0FjY291bnRCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWItOFwiPlxuICAgICAgICAgICAgPENyZWF0ZVNhdmluZ3NBY2NvdW50Q2FyZFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd0FjY291bnRUeXBlKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gXCIuLi9BY2NvcmRpb25DYXJkXCI7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vTWFpbkJ1dHRvblwiO1xuaW1wb3J0IHsgQnNCYW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBJY29uQ29udGFpbmVyIH0gZnJvbSBcIi4uL0ljb25Db250YWluZXJjYXJkXCI7XG5leHBvcnQgdHlwZSBDbGFzc2ljQWNjb3VudFByb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgQ2xhc3NpY0FjY291bnQgPSAoeyBvbkNsaWNrIH06IENsYXNzaWNBY2NvdW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG14LTMuNSBtYi01XCI+XG4gICAgICA8SWNvbkNvbnRhaW5lciBpY29uPXs8QnNCYW5rIHNpemU9ezU1fSAvPn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1iLTIgbXQtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICBEZW1vIFNhdmluZ3MgQWNjb3VudFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXNraW4tc3VidGl0bGUgdGV4dC14cyB0ZXh0LWNlbnRlciBtZDp0ZXh0LXNtIGxnOnRleHQtYmFzZSB4bDp0ZXh0LWxnIG1iLTZcIj5cbiAgICAgICAgQSBmbGV4aWJsZSBhY2NvdW50cyB3aGVyZSB5b3UgY2FuIGVhcm4gYW4gZXh0cmEgMiUgb24geW91ciBzYXZpbmdzIHRvIGdldCB0byB5b3VyIGdvYWwgZmFzdGVyLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgdGl0bGU9XCJJbnRlcmVzdCByYXRlXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBoaWdoIHlpZWxkLCBmZWUtZnJlZSBzYXZpbmdzIGFjY291bnQgdGhhdCBwYXlzIHlvdSAyJSBwZXIgYW5udW0gaW50ZXJlc3QgdG93YXJkIHlvdXIgc2F2aW5ncyBnb2FsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyByZXF1aXJlbWVudFwiXG4gICAgICAgICAgY29udGVudD1cIklmIHRoaXMgaXMgeW91ciBmaXJzdCBhY2NvdW50IHdpdGggdXMsIHdlIHdpbGwgbmVlZCBhIGdvdmVybm1lbnQtaXNzdWVkIElELCBwcm9vZiBvZiBhZGRyZXNzIGFuZCB5b3VyIEJWTi4gSWYgdGhpcyBpcyBhbiBhZGRlZCBzYXZpbmdzIGFjY291bnQsIGNsaWNrICdPcGVuIG5ldyBhY2NvdW50JyBiZWxvdyB0byBwcm9jZWVkLlwiXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFpbkJ1dHRvblxuICAgICAgICAvLyBpc0Rpc2FibGVkPXshaXNWYWxpZH1cbiAgICAgICAgdGl0bGU9XCJPcGVuIG5ldyBhY2NvdW50XCJcbiAgICAgICAgY2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8vIGxvYWRpbmc9e3NhdmVHb2FsRmV0Y2hpbmd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG50eXBlIENyZWF0ZVNhdmluZ3NBY2NvdW50Q2FyZFByb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgQ3JlYXRlU2F2aW5nc0FjY291bnRDYXJkID0gKHtcbiAgb25DbGljayxcbn06IENyZWF0ZVNhdmluZ3NBY2NvdW50Q2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBmbGV4IGZsZXgtY29sIHBsLTUgcHItMiAgcHktMyBib3JkZXIgYm9yZGVyLXNraW4tcHJpbWFyeWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgQ3JlYXRlIHNhdmluZ3MgYWNjb3VudFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC02IHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1za2luLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxGaVBsdXMgY29sb3I9XCIjZmZmZmZmXCIgc2l6ZT1cIjEuMnJlbVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnO1xuaW1wb3J0IHsgQ3VzdG9tRGF0ZVBpY2tlciB9IGZyb20gXCIuLi9DdXN0b21EYXRlUGlja2VyXCI7XG5cbnR5cGUgQ3VzdG9tRGF0ZUJ1dHRvblByb3BzID0ge1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgY2xpY2s/OiAoKSA9PiB2b2lkO1xuICBvblNlbGVjdGVkT3V0c2lkZT86ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tRGF0ZUJ1dHRvbiA9ICh7XG4gIGlzQWN0aXZlLFxuICBjbGljayxcbn06IEN1c3RvbURhdGVCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MgPSB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGVcbiAgKTtcblxuICAvLyBHZXQgdGhlIHNlbGVjdGVkIGRhdGUgZnJvbSB0aGUgc3RvcmVcbiAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnN0YXJ0aW5nRnJvbURhdGU7XG5cbiAgLy8gRm9ybWF0IHRoZSBkYXRlIHRvICdkZC9NTS95eXl5J1xuICBjb25zdCBkYXRlU3RyaW5nID0gc2VsZWN0ZWREYXRlXG4gICAgPyBzZWxlY3RlZERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicpIC8vIFRoaXMgZm9ybWF0cyB0aGUgZGF0ZSBhcyAnZGQvTU0veXl5eSdcbiAgICA6ICdDdXN0b20nO1xuXG4gIGNvbnN0IEV4YW1wbGVDdXN0b21JbnB1dCA9IGZvcndhcmRSZWYoXG4gICAgKHsgdmFsdWUsIG9uQ2xpY2sgfTogeyB2YWx1ZT86IGFueTsgb25DbGljaz86ICgpID0+IHZvaWQgfSwgcmVmKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IHAtcHggbXgtMVwiXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTN4bCBweS0zIHB4LTMuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgPyBcImJnLXNraW4tcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgOiBcInRleHQtc2tpbi1uZXV0cmFsIGJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhzIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtpc0FjdGl2ZT8gZGF0ZVN0cmluZzogXCJDdXN0b21cIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tRGF0ZVBpY2tlclxuICAgICAgc2VsZWN0ZWREYXRlPXtzZWxlY3RlZERhdGV9XG4gICAgICBvbkRhdGVDaGFuZ2U9eyhkYXRlOiBEYXRlKSA9PiBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0U3RhcnRGcm9tRGF0ZShkYXRlKX1cbiAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgPlxuICAgICAgeyh7IHRvZ2dsZUNhbGVuZGFyIH0pID0+IChcbiAgICAgICAgPEV4YW1wbGVDdXN0b21JbnB1dCBvbkNsaWNrPXt0b2dnbGVDYWxlbmRhcn0gLz5cbiAgICAgICl9XG4gICAgPC9DdXN0b21EYXRlUGlja2VyPlxuICApO1xufTsiLCJpbXBvcnQgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9udGhseURheSBmcm9tIFwiLi9Nb250aGx5RGF5U2VsZWN0b3JcIjtcbmltcG9ydCBTZWxlY3REYXRlIGZyb20gXCIuL1NlbGVjdERhdGVcIjtcblxuZXhwb3J0IGNvbnN0IE1vbnRobHlDb250cmlidXRpb25TZWxlY3RvciA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZURheUluZGV4LCBzZXRBY3RpdmVEYXlJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZURhdGVPcHRpb24sIHNldEFjdGl2ZURhdGVPcHRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNlbGVjdERhdGVPcHRpb25zID0gW1xuICAgIHsgaWQ6IDAsIHRpdGxlOiBcIlRvZGF5XCIgfSxcbiAgICB7IGlkOiAxLCB0aXRsZTogXCJUb21vcnJvd1wiIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6IFwiXCIgfSxcbiAgXTtcbiAgY29uc3QgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzID0gdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlXG4gICk7XG4gIGNvbnN0IHdlZWtzT2ZUaGVNb250aEluV29yZHMgPSBbXCJcIiwgXCJmaXJzdFwiLCBcInNlY29uZFwiLCBcInRoaXJkXCIsIFwiZm91cnRoXCJdO1xuICBsZXQgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICA8TW9udGhseURheVxuICAgICAgICAgIG9uQ2xpY2s9eyh3ZWVrOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRNb250aGx5V2VlayhcbiAgICAgICAgICAgICAgd2Vla3NPZlRoZU1vbnRoSW5Xb3Jkc1t3ZWVrXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZURheUluZGV4KHdlZWspO1xuICAgICAgICAgIH19XG4gICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZURheUluZGV4fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPFNlbGVjdERhdGVcbiAgICAgICAgICB0aXRsZT1cInN0YXJ0aW5nIGZyb21cIlxuICAgICAgICAgIGFjdGl2ZU9wdGlvbj17YWN0aXZlRGF0ZU9wdGlvbn1cbiAgICAgICAgICBvbkNsaWNrPXsoc2VsZWN0ZWQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSAwKSB7XG4gICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRTdGFydEZyb21EYXRlKHRvZGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldFN0YXJ0RnJvbURhdGUodG9tb3Jyb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEFjdGl2ZURhdGVPcHRpb24oc2VsZWN0ZWQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgc2VsZWN0RGF0ZU9wdGlvbnM9e3NlbGVjdERhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB3ZWVrT2ZUaGVNb250aCA9IFtcIlwiLCBcIjFzdFwiLCBcIjJuZFwiLCBcIjNyZFwiLCBcIkxhc3RcIl07XG5cbnR5cGUgTW9udGhseURheUNpcmNsZVByb3BzID0ge1xuICB3ZWVrOiBudW1iZXI7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn07XG5jb25zdCBNb250aGx5RGF5Q2lyY2xlID0gKHtcbiAgd2VlayxcbiAgb25DbGljayxcbiAgaXNBY3RpdmUsXG59OiBNb250aGx5RGF5Q2lyY2xlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSBwLXB4IG14LTFcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIGgtOSB3LTkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgPyBcImJnLXNraW4tcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIDogXCJiZy1za2luLWJhc2UgIHRleHQtc2tpbi1uZXV0cmFsXCJcbiAgICAgICAgfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnMgdGV4dC14c1wiPlxuICAgICAgICAgIHt3ZWVrT2ZUaGVNb250aFt3ZWVrXX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1vbnRobHlEYXkgPSAoe1xuICBhY3RpdmVJbmRleCxcbiAgb25DbGljayxcbn06IHtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgb25DbGljaz86ICh3ZWVrOiBudW1iZXIpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IGdvYWxDb250cmlidXRpb25TZXR0aW5ncyA9IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZVxuICApO1xuICBjb25zdCBleGFjdERheXNPZlRoZVdlZWsgPSBbXG4gICAgXCJcIixcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIGNvbnN0IFtleGFjdERheSwgc2VsZWN0RXhhY3REYXldID0gdXNlU3RhdGUoXCJTZWxlY3QgZGF5XCIpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTRcIj5cbiAgICAgICAge1sxLCAyLCAzLCA0XS5tYXAoKHdlZWs6IGFueSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHdlZWsgPT09IGFjdGl2ZUluZGV4O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9udGhseURheUNpcmNsZVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHdlZWs9e3dlZWt9XG4gICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgICAgICAgb25DbGljayh3ZWVrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cImRheS1kcm9wZG93blwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tYmFzZSBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gZm9udC1wb3BwaW5zIHJvdW5kZWQtM3hsIHB4LTQgcHktMi41IHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZXhhY3REYXl9e1wiIFwifVxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbGVmdC0wIHJvdW5kZWQtMnhsIGJnLXNraW4tYmFzZSBwLTMuNSB3LTMyIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IGgtMjggb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICB7ZXhhY3REYXlzT2ZUaGVXZWVrLm1hcCgoZGF5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRyYWNraW5nLXByb2dyZXNzX2xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhhY3REYXkoZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRXZWVrRGF5T2ZUaGVNb250aChkYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2RheX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlEYXk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG50eXBlIFNhdmluZ3NBY2NvdW50Q2FyZFByb3BzID0ge1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGFjY291bnROYW1lPzogc3RyaW5nO1xuICBhY2NvdW50TnVtYmVyPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgU2F2aW5nc0FjY291bnRDYXJkID0gKHtcbiAgc2VsZWN0ZWQsXG4gIGFjY291bnROYW1lLFxuICBhY2NvdW50TnVtYmVyLFxuICBvbkNsaWNrLFxufTogU2F2aW5nc0FjY291bnRDYXJkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkIGZsZXggZmxleC1jb2wgcGwtNSBwci0yICBweS0zIGJvcmRlciBtYi0zICR7XG4gICAgICAgIHNlbGVjdGVkID8gXCJib3JkZXItc2tpbi1wcmltYXJ5XCIgOiBcImJvcmRlci1za2luLXNlY29uZGFyeVwiXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlXCI+XG4gICAgICAgICAgICB7YWNjb3VudE5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctdGl0bGVcIj5cbiAgICAgICAgICAgIHthY2NvdW50TnVtYmVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBhY2NlbnQtWyMwNTY0ODldXCJcbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhbmtBY2NvdW50Q2FyZCB9IGZyb20gXCIuLi9CYW5rQWNjb3VudENhcmRcIjtcbmltcG9ydCB1c2VCYW5rQWNjb3VudFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvYmFua0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IGxpbmtCYW5rQWNjb3VudCB9IGZyb20gXCJjbGllbnQvYXBpL2FjY291bnRzXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCB7IEFjY291bnREcm9wRG93biB9IGZyb20gXCIuL0FjY291bnREcm9wRG93blwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL01haW5CdXR0b25cIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEJvdHRvbVNoZWV0IH0gZnJvbSBcInJlYWN0LXNwcmluZy1ib3R0b20tc2hlZXRcIjtcbmltcG9ydCB7IFBhdXNlR29hbCB9IGZyb20gXCJjbGllbnQvcGFnZXMvZ29hbC12aWV3L1BhdXNlR29hbFwiO1xuaW1wb3J0IHsgQ2hvb3NlU2F2aW5nc0FjY291bnQgfSBmcm9tIFwiLi9DaG9vc2VTYXZpbmdzQWNjb3VudFwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDYXJkIH0gZnJvbSBcIi4uL0FjY291bnRUeXBlQ2FyZFwiO1xuZXhwb3J0IHR5cGUgU2VsZWN0QmFua1Byb3BzID0ge1xuICB1cGRhdGVCYW5rPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgU2VsZWN0QmFuayA9ICh7IHVwZGF0ZUJhbmsgPSBmYWxzZSB9OiBTZWxlY3RCYW5rUHJvcHMpID0+IHtcbiAgY29uc3QgYWNjb3VudFN0b3JlID0gdXNlQmFua0FjY291bnRTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBjaGVja2luZ0FjY291bnRzID0gYWNjb3VudFN0b3JlLmNoZWNraW5nQWNjb3VudHMgPz8gW107XG4gIGNvbnN0IHNhdmluZ0FjY291bnQgPSBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudDtcbiAgY29uc3QgW2NhcmRJZCwgc2V0Q2FyZElkXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB7IGlzRmV0Y2hpbmc6IGxpbmtpbmdBY2NvdW50LCByZWZldGNoOiBsaW5rQWNjb3VudCB9ID0gdXNlUXVlcnkoXG4gIC8vICAgXCJsaW5rLWJhbmstYWNjb3VudFwiLFxuICAvLyAgICgpID0+XG4gIC8vICAgICBsaW5rQmFua0FjY291bnQoe1xuICAvLyAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAvLyAgICAgICBkYXRhOiB7XG4gIC8vICAgICAgICAgZ29hbF9pZDogZ29hbFN0b3JlLnNlbGVjdGVkR29hbC5pZCxcbiAgLy8gICAgICAgICBiYW5rX2FjY291bnRfaWQ6IDAsXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9KSxcbiAgLy8gICB7IHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSwgZW5hYmxlZDogZmFsc2UgfVxuICAvLyApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBteC0zLjUgbWItNSByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0yXCI+XG4gICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhY2NvdW50U3RvcmUub3BlbkFjY291bnRCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1iLTYgbXQtMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgc2V0IHVwIGEgc2F2aW5ncyBmdW5kaW5nIGFjY291bnRcbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICB7YWNjb3VudExpc3QubWFwKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZUJhbmsgPyAoXG4gICAgICAgICAgICA8QmFua0FjY291bnRDYXJkXG4gICAgICAgICAgICAgIGtleT17YWNjb3VudC5pZH1cbiAgICAgICAgICAgICAgYWNjb3VudE51bWJlcj17YWNjb3VudC5hY2NvdW50X251bWJlcn1cbiAgICAgICAgICAgICAgYmFua05hbWU9e2FjY291bnQuYmFua19uYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNldEFjY291bnQoeyBiYW5rX2FjY291bnQ6IGFjY291bnQgfSk7XG4gICAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLm9wZW5VcGRhdGVBY2NvdW50Qm90dG9tU2hlZXQoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJhbmtBY2NvdW50Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2FjY291bnQuaWR9XG4gICAgICAgICAgICAgIGFjY291bnROdW1iZXI9e2FjY291bnQuYWNjb3VudF9udW1iZXJ9XG4gICAgICAgICAgICAgIGJhbmtOYW1lPXthY2NvdW50LmJhbmtfbmFtZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zZXRBY2NvdW50KGFjY291bnQpO1xuICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5vcGVuQWNjb3VudEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC10aW55IGZvbnQtbWVkaXVtIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgRnVuZCBGcm9tXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y2hlY2tpbmdBY2NvdW50cy5tYXAoKGFjY291bnQ6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBY2NvdW50RHJvcERvd25cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBhY2NvdW50TmFtZT17YWNjb3VudC5iYW5rX25hbWV9XG4gICAgICAgICAgICAgIGFjY291bnROdW1iZXI9e2FjY291bnQuYWNjb3VudF9udW1iZXJ9XG4gICAgICAgICAgICAgIGRpc2FibGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC10aW55IGZvbnQtbWVkaXVtIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgRnVuZCBUb1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFjY291bnREcm9wRG93blxuICAgICAgICAgIGFjY291bnROYW1lPXtzYXZpbmdBY2NvdW50Py5iYW5rX25hbWV9XG4gICAgICAgICAgYWNjb3VudE51bWJlcj17c2F2aW5nQWNjb3VudD8uYWNjb3VudF9udW1iZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYWNjb3VudFN0b3JlLm9wZW5TYXZpbmdzQWNjb3VudEJvdHRvbVNoZWV0KHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgYWNjb3VudFN0b3JlLm9wZW5TYXZpbmdzQWNjb3VudEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIC8vIG9uU3ByaW5nU3RhcnQ9eygpID0+IGFjY291bnRTdG9yZS5vcGVuQWNjb3VudEJvdHRvbVNoZWV0KGZhbHNlKX1cbiAgICAgICAgICBvcGVuPXthY2NvdW50U3RvcmUuc2F2aW5nc0FjY291bnRCb3R0b21TaGVldH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxDaG9vc2VTYXZpbmdzQWNjb3VudFxuICAgICAgICAgICAgICBjbGljaz17KGFjY291bnQpID0+IHNldENhcmRJZChhY2NvdW50LmlkKX1cbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2NhcmRJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHRTbmFwPXs2MDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFja2Ryb3AtYmx1ci1ib3R0b21TaGVldFwiXG4gICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFpbkJ1dHRvblxuICAgICAgICB0aXRsZT1cIkRvbmVcIlxuICAgICAgICBjbGljaz17KCkgPT4ge1xuICAgICAgICAgIGFjY291bnRTdG9yZS5vcGVuQWNjb3VudEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ3VzdG9tRGF0ZUJ1dHRvbiB9IGZyb20gXCIuL0N1c3RvbURhdGVCdXR0b25cIjtcbnR5cGUgU2VsZWN0RGF0ZVByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgYWN0aXZlT3B0aW9uOiBudW1iZXI7XG4gIHNlbGVjdERhdGVPcHRpb25zOiBBcnJheTxhbnk+O1xuICBvbkNsaWNrPzogKHRhYjogYW55KSA9PiB2b2lkO1xufTtcbnR5cGUgU2VsZWN0RGF0ZUJ1dHRvblByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgU2VsZWN0RGF0ZUJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBpc0FjdGl2ZSxcbiAgb25DbGljayxcbn06IFNlbGVjdERhdGVCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXByaW1hcnkgcC1weCBteC0xXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtM3hsIHB5LTMgcHgtMy41IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgID8gXCJiZy1za2luLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA6IFwidGV4dC1za2luLW5ldXRyYWwgYmctc2tpbi1iYXNlXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdHJhY2tpbmctd2lkZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBTZWxlY3REYXRlID0gKHtcbiAgdGl0bGUsXG4gIG9uQ2xpY2ssXG4gIGFjdGl2ZU9wdGlvbixcbiAgc2VsZWN0RGF0ZU9wdGlvbnMsXG59OiBTZWxlY3REYXRlUHJvcHMpID0+IHtcbiAgY29uc3QgW2N1c3RvbUJ1dHRvbiwgc2VsZWN0Q3VzdG9tQnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgIHt0aXRsZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGUgbWItNCBtdC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICB7dGl0bGUgPz8gXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAge3NlbGVjdERhdGVPcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gb3B0aW9uLmlkID09PSBhY3RpdmVPcHRpb247XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpID09PSAyID8gKFxuICAgICAgICAgICAgICAgIDxDdXN0b21EYXRlQnV0dG9uXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrKG9wdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0RGF0ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljayhvcHRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdERhdGU7XG4iLCJpbXBvcnQgeyBBY2NvdW50VHlwZUNhcmQgfSBmcm9tIFwiLi4vQWNjb3VudFR5cGVDYXJkXCI7XG5leHBvcnQgdHlwZSBTZWxlY3RTYXZpbmdzVHlwZVByb3BzID0ge1xuICBjbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IFNlbGVjdFNhdmluZ3NUeXBlID0gKHsgY2xpY2sgfTogU2VsZWN0U2F2aW5nc1R5cGVQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBteC0zLjUgbWItOCBtdC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1iLTYgbXQtM1wiPlxuICAgICAgICBXaGljaCBzYXZpbmdzIGFjY291bnQgd291bGQgeW91IGxpa2UgdG8gdXNlIGZvciB0aGlzIGdvYWw/XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICA8QWNjb3VudFR5cGVDYXJkXG4gICAgICAgICAgdGl0bGU9XCJEZW1vIFNhdmluZ3MgQWNjb3VudFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJBIGZsZXhpYmxlIGFjY291bnRzIHdoZXJlIHlvdSBjYW4gZWFybiBhbiBleHRyYSAyJSBvbiB5b3VyIHNhdmluZ3MgdG8gZ2V0IHRvIHlvdXIgZ29hbCBmYXN0ZXIuXCJcbiAgICAgICAgICBvbkNsaWNrPXtjbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPEFjY291bnRUeXBlQ2FyZFxuICAgICAgICAgIHRpdGxlPVwiRml4ZWQgc2F2aW5ncyBhY2NvdW50XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgaGlnaGVyIHlpZWxkIHNhdmluZ3MgYWNjb3VudCBhcHByb3ByaWF0ZSBmb3IgbG9uZ2VyIHRlcm0gc2F2aW5ncyBnb2Fscy5FYXJuIDYlIGludGVyZXN0IHRvIGdldCB0byB5b3VyIGdvYWwgZmFzdGVyLlwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vTWFpbkJ1dHRvblwiO1xuaW1wb3J0IHsgQnNCYW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBJY29uQ29udGFpbmVyIH0gZnJvbSBcIi4uL0ljb25Db250YWluZXJjYXJkXCI7XG5leHBvcnQgdHlwZSBTdWNjZXNzQ2xhc3NpY0FjY291bnRDcmVhdGlvblByb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgU3VjY2Vzc0NsYXNzaWNBY2NvdW50Q3JlYXRpb24gPSAoe1xuICBvbkNsaWNrLFxufTogU3VjY2Vzc0NsYXNzaWNBY2NvdW50Q3JlYXRpb25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG14LTMuNSBtYi01XCI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyIGljb249ezxCc0Jhbmsgc2l6ZT17NTV9IC8+fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy10aXRsZSBtYi0yIG10LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBIb29yYXkhIHNhdmluZ3MgYWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1zdWJ0aXRsZSB0ZXh0LXhzIHRleHQtY2VudGVyIG1kOnRleHQtc20gbGc6dGV4dC1iYXNlIHhsOnRleHQtbGcgbWItNlwiPlxuICAgICAgICAgIE5pY2Ugd29yayEgWW91ciBuZXcgc2F2aW5ncyBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQuIFdlJ3ZlIHNlbnQgYW5cbiAgICAgICAgICBlbWFpbCB3aXRoIHlvdXIgYWNjb3VudCBkZXRhaWxzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBteC0zLjUgcHQtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ2VzdF90ZXh0IHRleHQtc2tpbi1wcmltYXJ5IGJvcmRlciBib3JkZXItc2tpbi1wcmltYXJ5IHctZnVsbCByb3VuZGVkLWxnIGgtMTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBWaWV3IGFjY291bnQgZGV0YWlsc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICAvLyBpc0Rpc2FibGVkPXshaXNWYWxpZH1cbiAgICAgICAgICB0aXRsZT1cIkNvbnRpbnVlXCJcbiAgICAgICAgICBjbGljaz17b25DbGlja31cbiAgICAgICAgICAvLyBsb2FkaW5nPXtzYXZlR29hbEZldGNoaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdERhdGUsIHsgU2VsZWN0RGF0ZUJ1dHRvbiB9IGZyb20gXCIuL1NlbGVjdERhdGVcIjtcbmltcG9ydCBXZWVrRGF5IGZyb20gXCIuL1dlZWtseURheVNlbGVjdG9yXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgQ3VzdG9tRGF0ZUJ1dHRvbiB9IGZyb20gXCIuL0N1c3RvbURhdGVCdXR0b25cIjtcbmNvbnN0IFdlZWtseUNvbnRyaWJ1dGlvblNlbGVjdG9yID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlRGF5SW5kZXgsIHNldEFjdGl2ZURheUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlRGF0ZU9wdGlvbiwgc2V0QWN0aXZlRGF0ZU9wdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzID0gdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlXG4gICk7XG4gIGxldCB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcbiAgY29uc3Qgc2VsZWN0RGF0ZU9wdGlvbnMgPSBbXG4gICAgeyBpZDogMCwgdGl0bGU6IFwiVG9kYXlcIiB9LFxuICAgIHsgaWQ6IDEsIHRpdGxlOiBcIlRvbW9ycm93XCIgfSxcbiAgICB7IGlkOiAyLCB0aXRsZTogXCJcIiB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgPFdlZWtEYXlcbiAgICAgICAgICBvbkNsaWNrPXsoZGF5OiBudW1iZXIpID0+IHNldEFjdGl2ZURheUluZGV4KGRheSl9XG4gICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZURheUluZGV4fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxTZWxlY3REYXRlXG4gICAgICAgICAgdGl0bGU9XCJzdGFydGluZyBmcm9tXCJcbiAgICAgICAgICBhY3RpdmVPcHRpb249e2FjdGl2ZURhdGVPcHRpb259XG4gICAgICAgICAgb25DbGljaz17KHNlbGVjdGVkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gMCkge1xuICAgICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0U3RhcnRGcm9tRGF0ZSh0b2RheSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSAxKSB7XG4gICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRTdGFydEZyb21EYXRlKHRvbW9ycm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRBY3RpdmVEYXRlT3B0aW9uKHNlbGVjdGVkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHNlbGVjdERhdGVPcHRpb25zPXtzZWxlY3REYXRlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFdlZWtseUNvbnRyaWJ1dGlvblNlbGVjdG9yO1xuIiwiaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBkYXlzT2ZXZWVrID0gW1wiXCIsIFwiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXTtcblxudHlwZSBXZWVrZGF5Q2lyY2xlUHJvcHMgPSB7XG4gIGRheTogbnVtYmVyO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG59O1xuY29uc3QgV2Vla2RheUNpcmNsZSA9ICh7IGRheSwgb25DbGljaywgaXNBY3RpdmUgfTogV2Vla2RheUNpcmNsZVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXByaW1hcnkgcC1weCBteC0xXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCBoLTkgdy05IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgID8gXCJiZy1za2luLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA6IFwiYmctc2tpbi1iYXNlICB0ZXh0LXNraW4tbmV1dHJhbFwiXG4gICAgICAgIH1gfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1wb3BwaW5zIHRleHQteHNcIj5cbiAgICAgICAgICB7ZGF5c09mV2Vla1tkYXldfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgV2Vla0RheSA9ICh7XG4gIGFjdGl2ZUluZGV4LFxuICBvbkNsaWNrLFxufToge1xuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuICBvbkNsaWNrPzogKGRheTogbnVtYmVyKSA9PiB2b2lkO1xufSkgPT4ge1xuICAvLyBnZXQgY3VycmVudCBkYXRlXG4gIGNvbnN0IGV4YWN0RGF5c09mVGhlV2VlayA9IFtcbiAgICBcIlwiLFxuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgICBcIlN1bmRheVwiLFxuICBdO1xuICBjb25zdCBbZXhhY3REYXksIHNldEV4YWN0RGF5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MgPSB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGVcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICB7WzEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoZGF5OiBhbnksIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBkYXkgPT09IGFjdGl2ZUluZGV4O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8V2Vla2RheUNpcmNsZVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGRheT17ZGF5fVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RXhhY3REYXkoZXhhY3REYXlzT2ZUaGVXZWVrW2RheV0pO1xuICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRXZWVrRGF5VG9Db250cmlidXRlKFxuICAgICAgICAgICAgICAgICAgZXhhY3REYXlzT2ZUaGVXZWVrW2RheV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrKGRheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0ZXh0LXNraW4tbmV1dHJhbCB0cmFja2luZy13aWRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge2dvYWxDb250cmlidXRpb25TZXR0aW5ncy53ZWVrRGF5VG9Db250aWJ1dGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWVrRGF5O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYkZpbHRlciBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVGFiRmlsdGVyXCI7XG5pbXBvcnQgeyBGaVRvZ2dsZUxlZnQsIEZpVG9nZ2xlUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IEFtb3VudCB9IGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9BbW91bnRcIjtcbmltcG9ydCBSZWFjdFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpZGVyXCI7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEJvdHRvbVNoZWV0Rm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9Cb3R0b21TaGVldEZvb3RlclwiO1xuaW1wb3J0IFdlZWtseUNvbnRyaWJ1dGlvblNlbGVjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vV2Vla2x5Q29udHJpYnV0aW9uU2VsZWN0b3JcIjtcbmltcG9ydCB7IE1vbnRobHlDb250cmlidXRpb25TZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vTW9udGhseUNvbnRyaWJ1dGlvblNlbGVjdG9yXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5pbXBvcnQgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7XG4gIGNvbnRyaWJ1dGlvbk1hdHVyaXR5RGF0ZSxcbiAgZ2V0U2NoZWR1bGVGcmVxdWVuY3lUZXh0LFxuICBzYXZlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzLFxuICB1cGRhdGVHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MsXG59IGZyb20gXCJjbGllbnQvYXBpL2dvYWxcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxTdG9yZVwiO1xuaW1wb3J0IHVzZU1vbnRobHlJbmNvbWVTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL21vbnRobHlJbmNvbWVcIjtcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUdvYWxNYXR1cml0eURhdGUsXG4gIGNvbnZlcnREYXRlLFxuICBkZWJvdW5jZSxcbiAgZm9ybWF0RGF0ZSxcbiAgcmlnaHREYXRlRm9ybWF0LFxufSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB7IGRhdGVGb3JtYXQgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCB1c2VDdXJyZW5jeVN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvY3VycmVuY3lTdG9yZVwiO1xudHlwZSBBZGRDb250cmlidXRpb25TZXR0aW5nc1Byb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgdXBkYXRpbmdHb2FsPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgQWRkQ29udHJpYnV0aW9uU2V0dGluZ3MgPSAoe1xuICBvbkNsaWNrLFxuICB1cGRhdGluZ0dvYWwgPSBmYWxzZSxcbn06IEFkZENvbnRyaWJ1dGlvblNldHRpbmdzUHJvcHMpID0+IHtcbiAgY29uc3QgY29udHJpYnV0aW9uU2V0dGluZ3NUYWJzID0gW1xuICAgIHtcbiAgICAgIHRhYl9pZDogMCxcbiAgICAgIG5hbWU6IFwiV2Vla2x5XCIsXG4gICAgICBpY29uOiA8RmlUb2dnbGVMZWZ0IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGFiX2lkOiAxLFxuICAgICAgbmFtZTogXCJNb250aGx5XCIsXG4gICAgICBpY29uOiA8RmlUb2dnbGVSaWdodCAvPixcbiAgICB9LFxuICBdO1xuICBjb25zdCBtb250aGx5SW5jb21lID0gdXNlTW9udGhseUluY29tZVN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5tb250aGx5SW5jb21lXG4gICk7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IHVzZUN1cnJlbmN5U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmN1cnJlbmN5KTtcbiAgY29uc3QgbW9udGhseUluY29tZUFtb3VudCA9IG1vbnRobHlJbmNvbWUgfHwgdXNlci5pbmNvbWU7XG4gIGNvbnN0IGdvYWxDb250cmlidXRpb25TZXR0aW5ncyA9IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZVxuICApO1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgZ29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCB3ZWVrbHlDcm9uU3RyaW5nID0gYGV2ZXJ5ICR7Z29hbENvbnRyaWJ1dGlvblNldHRpbmdzLndlZWtEYXlUb0NvbnRpYnV0ZX1gO1xuICBjb25zdCBtb250aGx5Q3JvblN0cmluZyA9IGBldmVyeSAke2dvYWxDb250cmlidXRpb25TZXR0aW5ncy5tb250aGx5V2Vla30gJHtnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Mud2Vla0RheU9mVGhlTW9udGh9YDtcblxuICBjb25zdCB7IGlzRmV0Y2hpbmc6IGZyZXF1ZW5jeUZldGNoaW5nLCByZWZldGNoOiBnZXRGcmVxdWVuY3lUZXh0IH0gPSB1c2VRdWVyeShcbiAgICBcImZyZXF1ZW5jeS10ZXh0XCIsXG4gICAgKCkgPT5cbiAgICAgIGdldFNjaGVkdWxlRnJlcXVlbmN5VGV4dCh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjcm9uX3N0cmluZzpcbiAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy50YWJJbmRleCA9PT0gMVxuICAgICAgICAgICAgICA/IG1vbnRobHlDcm9uU3RyaW5nXG4gICAgICAgICAgICAgIDogd2Vla2x5Q3JvblN0cmluZyxcbiAgICAgICAgICBzYXZpbmdzX2Ftb3VudDogZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLmNvbnRyaWJ1dGlvbkFtb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmZyZXF1ZW5jeSkge1xuICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRDb250cmlidXRpb25GcmVxdWVuY3kocmVzdWx0LmZyZXF1ZW5jeSk7XG4gICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldENyb25TdHJpbmcoXG4gICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MudGFiSW5kZXggPT09IDFcbiAgICAgICAgICAgICAgPyBtb250aGx5Q3JvblN0cmluZ1xuICAgICAgICAgICAgICA6IHdlZWtseUNyb25TdHJpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5vcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiB0cnVlLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfVxuICApO1xuICAvLyBjb25zdCB7XG4gIC8vICAgaXNGZXRjaGluZzogc2F2ZUNvbnRyaWJ1dGlvbkZldGNoaW5nLFxuICAvLyAgIHJlZmV0Y2g6IHNhdmVDb250cmlidXRpb25TZXR0aW5ncyxcbiAgLy8gfSA9IHVzZVF1ZXJ5KFxuICAvLyAgIFwic2F2ZS1jb250cmlidXRpb24tc2V0dGluZ3NcIixcbiAgLy8gICAoKSA9PlxuICAvLyAgICAgc2F2ZUdvYWxDb250cmlidXRpb25TZXR0aW5ncyh7XG4gIC8vICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gIC8vICAgICAgIGRhdGE6IHtcbiAgLy8gICAgICAgICBjcm9uX3N0cmluZzpcbiAgLy8gICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy50YWJJbmRleCA9PT0gMVxuICAvLyAgICAgICAgICAgICA/IG1vbnRobHlDcm9uU3RyaW5nXG4gIC8vICAgICAgICAgICAgIDogd2Vla2x5Q3JvblN0cmluZyxcbiAgLy8gICAgICAgICBzYXZpbmdzX2Ftb3VudDogZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLmNvbnRyaWJ1dGlvbkFtb3VudCxcbiAgLy8gICAgICAgICBjb250cmlidXRlX2Zyb206IGNvbnZlcnREYXRlKFxuICAvLyAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnN0YXJ0aW5nRnJvbURhdGUudG9TdHJpbmcoKVxuICAvLyAgICAgICAgICksXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIGdvYWxJZDogZ29hbC5jb250cmlidXRpb25TZXR0aW5nc0dvYWxJZCxcbiAgLy8gICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgICBpZiAocmVzdWx0LmZyZXF1ZW5jeSAhPT0gXCJcIikge1xuICAvLyAgICAgICAgIC8vIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRDb250cmlidXRpb25GcmVxdWVuY3kocmVzdWx0LmZyZXF1ZW5jeSk7XG4gIC8vICAgICAgICAgLy8gZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLm9wZW5Db250cmlidXRpb25TZXR0aW5nc0JvdHRvbVNoZWV0KGZhbHNlKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSksXG4gIC8vICAge1xuICAvLyAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IHRydWUsXG4gIC8vICAgICBlbmFibGVkOiBmYWxzZSxcbiAgLy8gICB9XG4gIC8vICk7XG4gIGNvbnN0IHtcbiAgICBpc0ZldGNoaW5nOiB1cGRhdGVDb250cmlidXRpb25GZXRjaGluZyxcbiAgICByZWZldGNoOiB1cGRhdGVDb250cmlidXRpb25TZXR0aW5ncyxcbiAgfSA9IHVzZVF1ZXJ5KFxuICAgIFwidXBkYXRlLWNvbnRyaWJ1dGlvbi1zZXR0aW5nc1wiLFxuICAgICgpID0+XG4gICAgICB1cGRhdGVHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Moe1xuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3Jvbl9zdHJpbmc6XG4gICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MudGFiSW5kZXggPT09IDFcbiAgICAgICAgICAgICAgPyBtb250aGx5Q3JvblN0cmluZ1xuICAgICAgICAgICAgICA6IHdlZWtseUNyb25TdHJpbmcsXG4gICAgICAgICAgc2F2aW5nc19hbW91bnQ6IGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5jb250cmlidXRpb25BbW91bnQsXG4gICAgICAgICAgY29udHJpYnV0ZV9mcm9tOiBjb252ZXJ0RGF0ZShcbiAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zdGFydGluZ0Zyb21EYXRlLnRvU3RyaW5nKClcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICBnb2FsSWQ6IGdvYWwuY29uZmlybWVkR29hbC5pZCxcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmZyZXF1ZW5jeSAhPT0gXCJcIikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5mcmVxdWVuY3kpO1xuICAgICAgICAgIGdvYWwuc2V0R29hbEZyZXF1ZW5jeShyZXN1bHQuZnJlcXVlbmN5KTtcbiAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0Q29udHJpYnV0aW9uRnJlcXVlbmN5KHJlc3VsdC5mcmVxdWVuY3kpO1xuICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5vcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiB0cnVlLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRNYXR1cml0eURhdGUgPSBkZWJvdW5jZShcbiAgICAodmFsdWU6IG51bWJlciwgZnJlcXVlbmN5Pzogc3RyaW5nKSA9PiB7XG4gICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0TWF0dXJpdHlEYXRlVGV4dChcbiAgICAgICAgY2FsY3VsYXRlR29hbE1hdHVyaXR5RGF0ZSh7XG4gICAgICAgICAgZ29hbEFtb3VudDogZ29hbC5nb2FsQW1vdW50LFxuICAgICAgICAgIGNvbnRyaWJ1dGlvbkFtb3VudDogKG1vbnRobHlJbmNvbWVBbW91bnQgKiB2YWx1ZSkgLyAxMDAsXG4gICAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3ksXG4gICAgICAgICAgZGF0ZVN0cjogZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnN0YXJ0aW5nRnJvbURhdGUudG9TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICAxMDAwXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVib3VuY2VkTWF0dXJpdHlEYXRlKFxuICAgICAgZ29hbC5wZXJjZW50YWdlT2ZTYXZpbmdzLFxuICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnRhYkluZGV4ID09PSAwID8gXCJ3ZWVrbHlcIiA6IFwibW9udGhseVwiXG4gICAgKTtcbiAgfSwgW2dvYWxDb250cmlidXRpb25TZXR0aW5ncy5zdGFydGluZ0Zyb21EYXRlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTJcIj5cbiAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tc2Vjb25kYXJ5V2l0aE9wYWNpdHlcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGUgbWItNCBtdC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgSSB3aWxsIGNvbnRyaWJ1dGVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICA8VGFiRmlsdGVyXG4gICAgICAgICAgdGFicz17Y29udHJpYnV0aW9uU2V0dGluZ3NUYWJzfVxuICAgICAgICAgIGFjdGl2ZVRhYj17Z29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnRhYkluZGV4fVxuICAgICAgICAgIG9uQ2xpY2s9eyh0YWI6IGFueSkgPT4ge1xuICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldFRhYkluZGV4KHRhYi50YWJfaWQpO1xuICAgICAgICAgICAgaWYgKHRhYi50YWJfaWQgPT09IDApIHtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldENvbnRyaWJ1dGlvbkFtb3VudChcbiAgICAgICAgICAgICAgICAobW9udGhseUluY29tZUFtb3VudCAqIDUpIC8gMTAwXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGdvYWwuc2V0UGVyY2VudGFnZU9mU2F2aW5ncyg1KTtcbiAgICAgICAgICAgICAgZGVib3VuY2VkTWF0dXJpdHlEYXRlKDUsIFwid2Vla2x5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldENvbnRyaWJ1dGlvbkFtb3VudChcbiAgICAgICAgICAgICAgICAobW9udGhseUluY29tZUFtb3VudCAqIDIwKSAvIDEwMFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBnb2FsLnNldFBlcmNlbnRhZ2VPZlNhdmluZ3MoMjApO1xuICAgICAgICAgICAgICBkZWJvdW5jZWRNYXR1cml0eURhdGUoMjAsIFwibW9udGhseVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIuNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8QW1vdW50IGJhbGFuY2U9e2dvYWxDb250cmlidXRpb25TZXR0aW5ncy5jb250cmlidXRpb25BbW91bnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBweC0xMFwiPlxuICAgICAgICA8UmVhY3RTbGlkZXJcbiAgICAgICAgICB2YWx1ZT17Z29hbC5wZXJjZW50YWdlT2ZTYXZpbmdzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvcml6b250YWwtc2xpZGVyXCJcbiAgICAgICAgICB0aHVtYkNsYXNzTmFtZT1cImV4YW1wbGUtdGh1bWJcIlxuICAgICAgICAgIHRyYWNrQ2xhc3NOYW1lPVwiZXhhbXBsZS10cmFja1wiXG4gICAgICAgICAgbWFya3M9ezIwfVxuICAgICAgICAgIHJlbmRlclRodW1iPXsocHJvcHMsIHN0YXRlKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi5wcm9wc30+e2Ake3N0YXRlLnZhbHVlTm93fSVgfTwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnNldENvbnRyaWJ1dGlvbkFtb3VudChcbiAgICAgICAgICAgICAgKG1vbnRobHlJbmNvbWVBbW91bnQgKiB2YWx1ZSkgLyAxMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnb2FsLnNldFBlcmNlbnRhZ2VPZlNhdmluZ3ModmFsdWUpO1xuICAgICAgICAgICAgZGVib3VuY2VkTWF0dXJpdHlEYXRlKFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnRhYkluZGV4ID09PSAwID8gXCJ3ZWVrbHlcIiA6IFwibW9udGhseVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdGV4dC1za2luLW5ldXRyYWwgdHJhY2tpbmctd2lkZSB0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgIHtgJHtnb2FsLnBlcmNlbnRhZ2VPZlNhdmluZ3N9JSBvZiBteSBtb250aGx5IG5ldCBpbmNvbWVgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1za2luLWJhc2UgdGV4dC1jZW50ZXIgdHJhY2tpbmctdGl0bGUgbWItNVwiPlxuICAgICAgICBvblxuICAgICAgPC9kaXY+XG4gICAgICB7Z29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnRhYkluZGV4ID09PSAxID8gKFxuICAgICAgICA8TW9udGhseUNvbnRyaWJ1dGlvblNlbGVjdG9yIC8+XG4gICAgICApIDogKFxuICAgICAgICA8V2Vla2x5Q29udHJpYnV0aW9uU2VsZWN0b3IgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgIDxCb3R0b21TaGVldEZvb3RlclxuICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5tYXR1cml0eURhdGVUZXh0XG4gICAgICAgICAgICAgID8gZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLnRhYkluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgPyBgU2F2ZSAke2N1cnJlbmN5U3ltYm9sfSR7Z29hbENvbnRyaWJ1dGlvblNldHRpbmdzLmNvbnRyaWJ1dGlvbkFtb3VudC50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgICApfSB3ZWVrbHkgdG8gcmVhY2ggeW91ciBnb2FsIG9uICR7Zm9ybWF0RGF0ZShcbiAgICAgICAgICAgICAgICAgICAgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzLm1hdHVyaXR5RGF0ZVRleHQgPz8gXCJcIlxuICAgICAgICAgICAgICAgICAgKX0uYFxuICAgICAgICAgICAgICAgIDogYFNhdmUgJHtjdXJyZW5jeVN5bWJvbH0ke2dvYWxDb250cmlidXRpb25TZXR0aW5ncy5jb250cmlidXRpb25BbW91bnQudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgIFwiZW4tVVNcIlxuICAgICAgICAgICAgICAgICAgKX0gbW9udGhseSB0byByZWFjaCB5b3VyIGdvYWwgb24gJHtmb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MubWF0dXJpdHlEYXRlVGV4dCA/PyBcIlwiXG4gICAgICAgICAgICAgICAgICApfS5gXG4gICAgICAgICAgICAgIDogXCJDYWxjdWxhdGluZyBnb2FsIG1hdHVyaXR5IGRhdGUuLi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgdXBkYXRpbmdHb2FsID8gdXBkYXRlQ29udHJpYnV0aW9uU2V0dGluZ3MoKSA6IGdldEZyZXF1ZW5jeVRleHQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBsb2FkaW5nPXtmcmVxdWVuY3lGZXRjaGluZyB8fCB1cGRhdGVDb250cmlidXRpb25GZXRjaGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjtcblxuaW1wb3J0IEFjY291bnQgZnJvbSBcImNsaWVudC9tb2RlbHMvQWNjb3VudFwiO1xuXG5jb25zdCB1c2VDcmVhdGVTYXZpbmdzQWNjb3VudFN0b3JlID0gY3JlYXRlKChzZXQpID0+ICh7XG4gIHNhdmluZ3NUeXBlQm90dG9tU2hlZXQ6IGZhbHNlLFxuICBzZWxlY3RlZEFjY291bnRCb3R0b21TaGVldDogZmFsc2UsXG4gIHN1Y2Nlc3NCb3R0b21TaGVldDogZmFsc2UsXG4gIG9wZW5TYXZpbmdzVHlwZUJvdHRvbVNoZWV0OiAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgc2F2aW5nc1R5cGVCb3R0b21TaGVldDogb3BlbixcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgb3BlblNlbGVjdGVkQWNjb3VudEJvdHRvbVNoZWV0OiAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50Qm90dG9tU2hlZXQ6IG9wZW4sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW5TdWNjZXNzQm90dG9tU2hlZXQ6IChvcGVuOiBib29sZWFuKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgICBzdWNjZXNzQm90dG9tU2hlZXQ6IG9wZW4sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNyZWF0ZVNhdmluZ3NBY2NvdW50U3RvcmU7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5cbmNvbnN0IHVzZUN1cnJlbmN5U3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgY3VycmVuY3k6IFwi4oKmXCIsXG4gIHNldEN1cnJlbmN5OiAoY3VycjogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGN1cnJlbmN5OiBjdXJyLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5leHBvcnQgZGVmYXVsdCB1c2VDdXJyZW5jeVN0b3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9