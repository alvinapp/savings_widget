"use strict";
(self["webpackChunksavings_widget"] = self["webpackChunksavings_widget"] || []).push([["src_client_pages_components_CustomDatePicker_tsx-src_client_pages_components_goal-creation_Bo-11d085"],{

/***/ "./src/client/pages/components/CustomDatePicker.tsx":
/*!**********************************************************!*\
  !*** ./src/client/pages/components/CustomDatePicker.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDatePicker": () => (/* binding */ CustomDatePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");





const ModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const CalendarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  height: 330px;
  position: relative;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #455a64;
  padding-bottom: 16px;
`;
const WeekDays = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: flex;
  justify-content: space-between;
  color: #90a4ae;
  font-size: 14px;
  padding-bottom: 8px;
`;
const WeekDay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  flex: 1;
  text-align: center;
  font-weight: 500;
`;
const DatesGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  display: flex;
  flex-wrap: wrap;
`;
const DateCell = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? "#076489" : "transparent")};
  color: ${({ isSelected, isCurrentMonth, isDisabled }) => isDisabled ? "#ccc" : isSelected ? "white" : isCurrentMonth ? "#455a64" : "#90a4ae"};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isSelected, isDisabled }) => (!isSelected && !isDisabled ? "#e6f0ff" : undefined)};
  }
`;
const CustomDatePicker = ({ selectedDate, onDateChange, minDate, children, }) => {
    const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedDate || new Date());
    const [showCalendar, setShowCalendar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isManualNavigation, setIsManualNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Track manual navigation
    // Scroll to selected date's month when the calendar is first opened
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!isManualNavigation && selectedDate && !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedDate, currentMonth)) {
            setCurrentMonth(selectedDate);
        }
    }, [selectedDate, showCalendar]); // Run when calendar opens or selected date changes
    const handlePrevMonth = () => {
        setCurrentMonth((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(currentMonth, 1));
        setIsManualNavigation(true); // Mark that user is manually navigating
    };
    const handleNextMonth = () => {
        setCurrentMonth((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(currentMonth, 1));
        setIsManualNavigation(true); // Mark that user is manually navigating
    };
    const handleDateClick = (day) => {
        onDateChange(day);
        setShowCalendar(false); // Close calendar after selecting a date
        setIsManualNavigation(false); // Reset manual navigation tracking
    };
    const renderHeader = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ onClick: handlePrevMonth }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiChevronLeft, {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(currentMonth, "MMMM yyyy") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ onClick: handleNextMonth }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiChevronRight, {}) }))] }));
    const renderDays = () => {
        const days = [];
        const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(startDate, i);
            days.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WeekDay, { children: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(day, "EEE").substring(0, 2) }, i));
        }
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WeekDays, { children: days });
    };
    const renderCells = () => {
        const monthStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(currentMonth);
        const monthEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(currentMonth);
        const startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(monthStart, { weekStartsOn: 1 });
        const endDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(monthEnd, { weekStartsOn: 1 });
        const rows = [];
        let days = [];
        let day = startDate;
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(day, "d");
                const cloneDay = day;
                const isCurrentMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(day, monthStart);
                const isSelected = selectedDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(day, selectedDate);
                const isDisabled = minDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(minDate, day); // Disable days before `minDate`
                days.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DateCell, Object.assign({ isCurrentMonth: isCurrentMonth || false, isSelected: isSelected || false, isDisabled: isDisabled || false, onClick: () => !isDisabled && handleDateClick(cloneDay) }, { children: formattedDate }), day.toString()));
                day = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(day, 1);
            }
            rows.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatesGrid, { children: days }, day.toString()));
            days = [];
        }
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: rows });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [children({ toggleCalendar: () => {
                    setShowCalendar(!showCalendar);
                    setIsManualNavigation(false); // Reset manual navigation when calendar toggles
                } }), showCalendar && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalOverlay, Object.assign({ onClick: () => setShowCalendar(false) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CalendarContainer, Object.assign({ onClick: (e) => e.stopPropagation() }, { children: [renderHeader(), renderDays(), renderCells()] })) })))] }));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/BottomSheetFooter.tsx":
/*!*************************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/BottomSheetFooter.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomSheetFooter": () => (/* binding */ BottomSheetFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var client_assets_images_savings_running_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/assets/images/savings/running.svg */ "./src/client/assets/images/savings/running.svg");
/* harmony import */ var client_assets_images_savings_tree1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/assets/images/savings/tree1.svg */ "./src/client/assets/images/savings/tree1.svg");
/* harmony import */ var client_assets_images_savings_tree2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/assets/images/savings/tree2.svg */ "./src/client/assets/images/savings/tree2.svg");
/* harmony import */ var client_assets_images_savings_success_flag_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/assets/images/savings/success-flag.svg */ "./src/client/assets/images/savings/success-flag.svg");
/* harmony import */ var client_assets_images_savings_star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/assets/images/savings/star.svg */ "./src/client/assets/images/savings/star.svg");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");








const BottomSheetFooter = ({ title, onClick, loading, }) => {
    const fullTitle = title ? title : "Calculating...";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "bg-bottomSheetFooterBg bg-cover bg-no-repeat h-1/2 relative pb-5 pt-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "absolute -top-5 right-0 left-0 flex flex-row justify-between items-center mx-3.5" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_running_svg__WEBPACK_IMPORTED_MODULE_2__ }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_tree1_svg__WEBPACK_IMPORTED_MODULE_3__ }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_tree2_svg__WEBPACK_IMPORTED_MODULE_4__ }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SuccessFlag, {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col items-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "font-semibold text-1.5xl font-workSans tracking-title text-skin-primary mb-5 mt-6 text-center mx-2" }, { children: fullTitle !== null && fullTitle !== void 0 ? fullTitle : "" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "rounded-full shadow-button bg-skin-primary h-14 w-14 flex items-center justify-center text-white mb-6", onClick: loading ? () => { } : onClick }, { children: loading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.TailSpin, { height: "25", width: "25", color: "#ffffff", ariaLabel: "tail-spin-loading", wrapperStyle: {}, wrapperClass: "", visible: true })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCheck, { size: "1.5rem" })) }))] }))] })));
};
const SuccessFlag = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_star_svg__WEBPACK_IMPORTED_MODULE_6__, className: "absolute -top-6" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_star_svg__WEBPACK_IMPORTED_MODULE_6__, className: "absolute left-2 -top-4" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_star_svg__WEBPACK_IMPORTED_MODULE_6__, className: "absolute right-2 -top-4" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: client_assets_images_savings_success_flag_svg__WEBPACK_IMPORTED_MODULE_7__ })] })));
};


/***/ }),

/***/ "./src/client/pages/components/goal-creation/Input.tsx":
/*!*************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/Input.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMonthlyIncomeInput": () => (/* binding */ AddMonthlyIncomeInput),
/* harmony export */   "TextInput": () => (/* binding */ TextInput),
/* harmony export */   "TextInputWithPopup": () => (/* binding */ TextInputWithPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");




const AddMonthlyIncomeInput = ({ value = 0, increment, decrement, addValue, }) => {
    const currencySymbol = (0,client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state.currencySymbol);
    // Helper function to format numbers with commas
    const formatNumberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary cursor-pointer", onClick: decrement }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMinus, { color: "#6F89A5" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "relative rounded-full py-3.5 px-12 bg-skin-input mx-2 flex flex-row justify-center items-center", style: {
                    minWidth: "14rem"
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-row items-center justify-center w-full" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "text-l font-semibold" }, { children: currencySymbol })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "bg-transparent font-workSans text-xl tracking-title text-skin-base font-semibold w-full focus:border-none focus:outline-none", style: {
                                padding: 0,
                                textAlign: "center",
                                // make the width of the input dynamic based on the length of the value
                                width: `${value.toString().length * 15}px`
                            }, type: "text", value: formatNumberWithCommas(value || 0), onChange: (e) => {
                                const unformattedValue = e.target.value.replace(/,/g, "");
                                addValue(parseInt(unformattedValue));
                            } })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary cursor-pointer", onClick: increment }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiPlus, { color: "#04506e" }) }))] })));
};
const TextInput = ({ label, leadingIcon, value, hasValue = true, onClick, addValue, placeHolder, type = "text", hasCurrencySymbol = false, clearInput, isLoading = false, }) => {
    const handleClearInput = (event) => {
        event.stopPropagation();
        clearInput();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins font-medium text-xs tracking-subtitle mb-2 text-skin-base` }, { children: label })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `rounded flex flex-row items-center  pl-3.5 w-screen ${hasValue
                        ? "border border-1 border-skin-base py-2"
                        : "shadow-input py-3"}` }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex flex-col ${hasValue ? "text-skin-secondary" : "text-skin-inputDisabled"}` }, { children: leadingIcon })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `font-medium font-poppins text-base tracking-progress_label flex flex-row justify-center items-center ${hasValue ? "text-skin-base" : "text-skin-inputDisabled"}` }, { children: [hasCurrencySymbol ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "translate-x-12" }, { children: hasValue ? "₦ " : "" }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { disabled: hasValue ? false : true, type: type, placeholder: placeHolder, value: value, className: `w-64 outline-none text-center`, onChange: (e) => {
                                        addValue(e.target.value);
                                    } })] })), hasValue ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "rounded-full flex items-center bg-skin-secondary p-2 absolute right-2", onClick: handleClearInput }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX, { color: "#4E6783" }) }))) : isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.TailSpin, { height: "20", width: "20", color: "#056489", ariaLabel: "tail-spin-loading", wrapperStyle: {}, wrapperClass: "", visible: true })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })) }))] })));
};
const TextInputWithPopup = ({ label, leadingIcon, value, hasValue = true, onClick, addValue, placeHolder, type = "text", hasCurrencySymbol = false, clearInput, isLoading = false, }) => {
    const handleClearInput = (event) => {
        event.stopPropagation();
        clearInput();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "flex flex-col", onClick: hasValue ? () => { } : onClick }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-poppins font-medium text-xs tracking-subtitle mb-2 text-skin-base` }, { children: label })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "flex flex-row relative" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: `rounded flex flex-row items-center  pl-3.5 w-screen ${hasValue
                        ? "border border-1 border-skin-base py-2"
                        : "shadow-input py-3"}` }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `flex flex-col h-8 w-8 justify-center ${hasValue ? "text-skin-secondary" : "text-skin-inputDisabled"}` }, { children: leadingIcon })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: `font-medium font-poppins text-base tracking-progress_label flex flex-row justify-center items-center ${hasValue ? "text-skin-base" : "text-skin-inputDisabled"}` }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "w-64 outline-none text-center" }, { children: [hasCurrencySymbol && hasValue ? "₦ " : "", value ? value : placeHolder] })) })), hasValue ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "rounded-full flex items-center bg-skin-secondary p-2 absolute right-2", onClick: handleClearInput }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX, { color: "#4E6783" }) }))) : isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.TailSpin, { height: "20", width: "20", color: "#056489", ariaLabel: "tail-spin-loading", wrapperStyle: {}, wrapperClass: "", visible: true })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}))] })) }))] })));
};


/***/ }),

/***/ "./src/client/store/goalContributionSettingsStore.ts":
/*!***********************************************************!*\
  !*** ./src/client/store/goalContributionSettingsStore.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useGoalContributionSettingsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
    contributionAmount: 0,
    weekDayToContibute: "",
    monthlyWeek: "",
    weekDayOfTheMonth: "",
    startingFromDate: new Date(),
    openContributionSettingsSheet: false,
    contributionFrequency: "",
    maturityDateText: "",
    tabIndex: 0,
    goalAmount: 0,
    cron_string: "",
    setCronString: (cron) => {
        return set(() => {
            const result = {
                cron_string: cron,
            };
            return result;
        });
    },
    setGoalAmount: (amount) => {
        return set(() => {
            const result = {
                goalAmount: amount,
            };
            return result;
        });
    },
    setMaturityDateText: (text) => {
        return set(() => {
            const result = {
                maturityDateText: text,
            };
            return result;
        });
    },
    setTabIndex: (index) => {
        return set(() => {
            const result = {
                tabIndex: index,
            };
            return result;
        });
    },
    setContributionAmount: (amount) => {
        return set((state) => {
            const result = {
                contributionAmount: amount,
            };
            return result;
        });
    },
    setWeekDayToContribute: (dayOfTheWeek) => {
        return set((state) => {
            const result = {
                weekDayToContibute: dayOfTheWeek,
            };
            return result;
        });
    },
    setMonthlyWeek: (weekOfTheMonth) => {
        return set((state) => {
            const result = {
                monthlyWeek: weekOfTheMonth,
            };
            return result;
        });
    },
    setWeekDayOfTheMonth: (dayOfTheWeekOfMonth) => {
        return set((state) => {
            const result = {
                weekDayOfTheMonth: dayOfTheWeekOfMonth,
            };
            return result;
        });
    },
    setStartFromDate: (startingFromDate) => {
        return set((state) => {
            const result = {
                startingFromDate: startingFromDate,
            };
            return result;
        });
    },
    openContributionSettingsBottomSheet: (openBottomSheet) => {
        return set((state) => {
            const result = {
                openContributionSettingsSheet: openBottomSheet,
            };
            return result;
        });
    },
    setContributionFrequency: (frequencyText) => {
        return set((state) => {
            const result = {
                contributionFrequency: frequencyText,
            };
            return result;
        });
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGoalContributionSettingsStore);


/***/ }),

/***/ "./src/client/assets/images/savings/running.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/images/savings/running.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47f070f05bd02488827f.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/star.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/images/savings/star.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "832b99a18ff44a4fed27.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/success-flag.svg":
/*!***********************************************************!*\
  !*** ./src/client/assets/images/savings/success-flag.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51a734bb92b189ba396f.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/tree1.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/images/savings/tree1.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18d653828843528eb94d.svg";

/***/ }),

/***/ "./src/client/assets/images/savings/tree2.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/images/savings/tree2.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b45aac40f54ec5ba22f.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19jb21wb25lbnRzX0N1c3RvbURhdGVQaWNrZXJfdHN4LXNyY19jbGllbnRfcGFnZXNfY29tcG9uZW50c19nb2FsLWNyZWF0aW9uX0JvLTExZDA4NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUN3QjtBQWE3QztBQUVsQixNQUFNLFlBQVksR0FBRyw2REFBVTs7Ozs7Ozs7Ozs7Q0FXOUIsQ0FBQztBQUVGLE1BQU0saUJBQWlCLEdBQUcsNkRBQVU7Ozs7Ozs7O0NBUW5DLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyw2REFBVTs7Ozs7OztDQU94QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsNkRBQVU7Ozs7OztDQU0xQixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsNkRBQVU7Ozs7Q0FJekIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLDZEQUFVOzs7Q0FHM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLDZEQUFVLENBQXVFOzs7Ozs7OztzQkFRNUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7V0FDdkUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUN0RCxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNFLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOzs7O3dCQUloRCxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Q0FFM0csQ0FBQztBQVNLLE1BQU0sZ0JBQWdCLEdBQW9DLENBQUMsRUFDaEUsWUFBWSxFQUNaLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxHQUNULEVBQUUsRUFBRTtJQUNILE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMEJBQTBCO0lBRS9GLG9FQUFvRTtJQUNwRSxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxZQUFZLElBQUksQ0FBQyxvREFBVyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNuRixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1EQUFtRDtJQUVyRixNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7UUFDM0IsZUFBZSxDQUFDLG9EQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7SUFDdkUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLGVBQWUsQ0FBQyxvREFBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0NBQXdDO0lBQ3ZFLENBQUMsQ0FBQztJQUVGLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBUyxFQUFFLEVBQUU7UUFDcEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUNoRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztJQUNuRSxDQUFDLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUN6Qix3REFBQyxNQUFNLGVBQ0wsaUZBQVEsT0FBTyxFQUFFLGVBQWUsZ0JBQzlCLHVEQUFDLHlEQUFhLEtBQUcsSUFDVixFQUNULDBFQUFNLG9EQUFNLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxHQUFPLEVBQzlDLGlGQUFRLE9BQU8sRUFBRSxlQUFlLGdCQUM5Qix1REFBQywwREFBYyxLQUFHLElBQ1gsSUFDRixDQUNWLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLG9EQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLEdBQUcsR0FBRyxvREFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVEQUFDLE9BQU8sY0FBVSxvREFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUF0QyxDQUFDLENBQWdELENBQUMsQ0FBQztTQUM1RTtRQUNELE9BQU8sdURBQUMsUUFBUSxjQUFFLElBQUksR0FBWSxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtRQUN2QixNQUFNLFVBQVUsR0FBRyxxREFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLHFEQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsTUFBTSxTQUFTLEdBQUcsb0RBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxxREFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpELE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFFcEIsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLE1BQU0sYUFBYSxHQUFHLG9EQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLE1BQU0sY0FBYyxHQUFHLG9EQUFXLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLFVBQVUsR0FBRyxZQUFZLElBQUkscURBQVMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sVUFBVSxHQUFHLE9BQU8sSUFBSSxxREFBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztnQkFFckYsSUFBSSxDQUFDLElBQUksQ0FDUCx1REFBQyxRQUFRLGtCQUVQLGNBQWMsRUFBRSxjQUFjLElBQUksS0FBSyxFQUN2QyxVQUFVLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFDL0IsVUFBVSxFQUFFLFVBQVUsSUFBSSxLQUFLLEVBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLGdCQUV0RCxhQUFhLEtBTlQsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQU9WLENBQ1osQ0FBQztnQkFDRixHQUFHLEdBQUcsb0RBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHVEQUFDLFNBQVMsY0FBdUIsSUFBSSxJQUFyQixHQUFHLENBQUMsUUFBUSxFQUFFLENBQW9CLENBQUMsQ0FBQztZQUM5RCxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLDBFQUFNLElBQUksR0FBTyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCw4SEFDRyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFO29CQUMvQixlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0IscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnREFBZ0Q7Z0JBQ2hGLENBQUMsRUFBRSxDQUFDLEVBQ0gsWUFBWSxJQUFJLENBQ2YsdURBQUMsWUFBWSxrQkFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxnQkFDakQsd0RBQUMsaUJBQWlCLGtCQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxpQkFDbkQsWUFBWSxFQUFFLEVBQ2QsVUFBVSxFQUFFLEVBQ1osV0FBVyxFQUFFLEtBQ0ksSUFDUCxDQUNoQixJQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU11QztBQUN5QjtBQUNQO0FBQ0E7QUFDYTtBQUNmO0FBQ0s7QUFPdkQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQ2hDLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxHQUNnQixFQUFFLEVBQUU7SUFDM0IsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsdUVBQXVFLGlCQUNwRiwrRUFBSyxTQUFTLEVBQUMsa0ZBQWtGLGlCQUMvRixnRUFBSyxHQUFHLEVBQUUscUVBQVUsR0FBSSxFQUN4QixnRUFBSyxHQUFHLEVBQUUsbUVBQUssR0FBSSxFQUNuQixnRUFBSyxHQUFHLEVBQUUsbUVBQUssR0FBSSxFQUNuQix1REFBQyxXQUFXLEtBQUcsS0FDWCxFQUNOLCtFQUFLLFNBQVMsRUFBQyw0QkFBNEIsaUJBQ3pDLDhFQUFLLFNBQVMsRUFBQyxvR0FBb0csZ0JBQ2hILFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLEVBQUUsSUFDWixFQUNOLGlGQUNFLFNBQVMsRUFBQyx1R0FBdUcsRUFDakgsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLGdCQUVwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ1QsdURBQUMsMERBQVEsSUFDUCxNQUFNLEVBQUMsSUFBSSxFQUNYLEtBQUssRUFBQyxJQUFJLEVBQ1YsS0FBSyxFQUFDLFNBQVMsRUFDZixTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLFlBQVksRUFBRSxFQUFFLEVBQ2hCLFlBQVksRUFBQyxFQUFFLEVBQ2YsT0FBTyxFQUFFLElBQUksR0FDYixDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsdURBQUMsbURBQU8sSUFBQyxJQUFJLEVBQUMsUUFBUSxHQUFHLENBQzFCLElBQ00sS0FDTCxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLFVBQVUsaUJBQ3ZCLGdFQUFLLEdBQUcsRUFBRSxrRUFBSSxFQUFFLFNBQVMsRUFBQyxpQkFBaUIsR0FBRyxFQUM5QyxnRUFBSyxHQUFHLEVBQUUsa0VBQUksRUFBRSxTQUFTLEVBQUMsd0JBQXdCLEdBQUcsRUFDckQsZ0VBQUssR0FBRyxFQUFFLGtFQUFJLEVBQUUsU0FBUyxFQUFDLHlCQUF5QixHQUFHLEVBQ3RELGdFQUFLLEdBQUcsRUFBRSwwRUFBVyxHQUFJLEtBQ3JCLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlENkQ7QUFFVDtBQUNOO0FBUXpDLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxFQUNwQyxLQUFLLEdBQUcsQ0FBQyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxHQUNtQixFQUFFLEVBQUU7SUFDL0IsTUFBTSxjQUFjLEdBQUcsc0VBQXFCLENBQzFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUNyQyxDQUFDO0lBRUYsZ0RBQWdEO0lBQ2hELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUM3QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQywyQ0FBMkMsaUJBQ3hELDhFQUNFLFNBQVMsRUFBQyx3R0FBd0csRUFDbEgsT0FBTyxFQUFFLFNBQVMsZ0JBRWxCLHVEQUFDLG1EQUFPLElBQUMsS0FBSyxFQUFDLFNBQVMsR0FBRyxJQUN2QixFQUNOLDhFQUFLLFNBQVMsRUFBQyxpR0FBaUcsRUFBQyxLQUFLLEVBQUU7b0JBQ3RILFFBQVEsRUFBRSxPQUFPO2lCQUNsQixnQkFFQywrRUFBSyxTQUFTLEVBQUMsa0RBQWtELGlCQUUvRCwrRUFDRSxTQUFTLEVBQUMsc0JBQXNCLGdCQUUvQixjQUFjLElBQ1YsRUFDUCxrRUFDRSxTQUFTLEVBQUMsOEhBQThILEVBQ3hJLEtBQUssRUFBRTtnQ0FDTCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsUUFBUTtnQ0FDbkIsdUVBQXVFO2dDQUN2RSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSTs2QkFDM0MsRUFDRCxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQ3pDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dDQUNkLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDMUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLENBQUMsR0FDRCxLQUNFLElBQ0YsRUFDTiw4RUFDRSxTQUFTLEVBQUMsc0dBQXNHLEVBQ2hILE9BQU8sRUFBRSxTQUFTLGdCQUVsQix1REFBQyxrREFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEdBQUcsSUFDdEIsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFpQkssTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUN4QixLQUFLLEVBQ0wsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEdBQUcsSUFBSSxFQUNmLE9BQU8sRUFDUCxRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksR0FBRyxNQUFNLEVBQ2IsaUJBQWlCLEdBQUcsS0FBSyxFQUN6QixVQUFVLEVBQ1YsU0FBUyxHQUFHLEtBQUssR0FDRixFQUFFLEVBQUU7SUFDbkIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1FBQ3RDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixVQUFVLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLDhFQUNFLFNBQVMsRUFBRSx3RUFBd0UsZ0JBRWxGLEtBQUssSUFDRixJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLHdCQUF3QixnQkFDckMsK0VBQ0UsU0FBUyxFQUFFLHVEQUNULFFBQVE7d0JBQ04sQ0FBQyxDQUFDLHVDQUF1Qzt3QkFDekMsQ0FBQyxDQUFDLG1CQUNOLEVBQUUsaUJBRUYsOEVBQ0UsU0FBUyxFQUFFLGlCQUNULFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHlCQUNyQyxFQUFFLGdCQUVELFdBQVcsSUFDUixFQUNOLCtFQUNFLFNBQVMsRUFBRSx3R0FDVCxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx5QkFDaEMsRUFBRSxpQkFFRCxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FDbkIsOEVBQUssU0FBUyxFQUFDLGdCQUFnQixnQkFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFPLENBQzdELENBQUMsQ0FBQyxDQUFDLENBQ0YsaUVBQVcsQ0FDWixFQUNELGtFQUNFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNqQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLEtBQUssRUFBRSxLQUFLLEVBQ1osU0FBUyxFQUFFLCtCQUErQixFQUMxQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3Q0FDZCxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDM0IsQ0FBQyxHQUNELEtBQ0UsRUFDTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ1YsaUZBQ0UsU0FBUyxFQUFDLHVFQUF1RSxFQUNqRixPQUFPLEVBQUUsZ0JBQWdCLGdCQUV6Qix1REFBQywrQ0FBRyxJQUFDLEtBQUssRUFBQyxTQUFTLEdBQUcsSUFDaEIsQ0FDVixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ2QsdURBQUMsMERBQVEsSUFDUCxNQUFNLEVBQUMsSUFBSSxFQUNYLEtBQUssRUFBQyxJQUFJLEVBQ1YsS0FBSyxFQUFDLFNBQVMsRUFDZixTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLFlBQVksRUFBRSxFQUFFLEVBQ2hCLFlBQVksRUFBQyxFQUFFLEVBQ2YsT0FBTyxFQUFFLElBQUksR0FDYixDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsaUVBQVcsQ0FDWixLQUNHLElBQ0YsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFpQkssTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQ2pDLEtBQUssRUFDTCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsR0FBRyxJQUFJLEVBQ2YsT0FBTyxFQUNQLFFBQVEsRUFDUixXQUFXLEVBQ1gsSUFBSSxHQUFHLE1BQU0sRUFDYixpQkFBaUIsR0FBRyxLQUFLLEVBQ3pCLFVBQVUsRUFDVixTQUFTLEdBQUcsS0FBSyxHQUNPLEVBQUUsRUFBRTtJQUM1QixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDdEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLGlCQUNuRSw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsOEVBQ0UsU0FBUyxFQUFFLHdFQUF3RSxnQkFFbEYsS0FBSyxJQUNGLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsd0JBQXdCLGdCQUNyQywrRUFDRSxTQUFTLEVBQUUsdURBQ1QsUUFBUTt3QkFDTixDQUFDLENBQUMsdUNBQXVDO3dCQUN6QyxDQUFDLENBQUMsbUJBQ04sRUFBRSxpQkFFRiw4RUFDRSxTQUFTLEVBQUUsd0NBQ1QsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMseUJBQ3JDLEVBQUUsZ0JBRUQsV0FBVyxJQUNSLEVBQ04sOEVBQ0UsU0FBUyxFQUFFLHdHQUNULFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHlCQUNoQyxFQUFFLGdCQWlCRiwrRUFBSyxTQUFTLEVBQUMsK0JBQStCLGlCQUMzQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUN6QyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUN4QixJQUNGLEVBQ0wsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNWLGlGQUNFLFNBQVMsRUFBQyx1RUFBdUUsRUFDakYsT0FBTyxFQUFFLGdCQUFnQixnQkFFekIsdURBQUMsK0NBQUcsSUFBQyxLQUFLLEVBQUMsU0FBUyxHQUFHLElBQ2hCLENBQ1YsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNkLHVEQUFDLDBEQUFRLElBQ1AsTUFBTSxFQUFDLElBQUksRUFDWCxLQUFLLEVBQUMsSUFBSSxFQUNWLEtBQUssRUFBQyxTQUFTLEVBQ2YsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixZQUFZLEVBQUUsRUFBRSxFQUNoQixZQUFZLEVBQUMsRUFBRSxFQUNmLE9BQU8sRUFBRSxJQUFJLEdBQ2IsQ0FDSCxDQUFDLENBQUMsQ0FBQyxDQUNGLGlFQUFXLENBQ1osS0FDRyxJQUNGLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeFIyQjtBQUc3QixNQUFNLGdDQUFnQyxHQUFHLG1EQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixnQkFBZ0IsRUFBRSxJQUFJLElBQUksRUFBRTtJQUM1Qiw2QkFBNkIsRUFBRSxLQUFLO0lBQ3BDLHFCQUFxQixFQUFFLEVBQUU7SUFDekIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixRQUFRLEVBQUUsQ0FBQztJQUNYLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLEVBQUU7SUFDZixhQUFhLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUM5QixPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRztnQkFDYixXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYSxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7UUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsVUFBVSxFQUFFLE1BQU07YUFDbkIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG1CQUFtQixFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDcEMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFCQUFxQixFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7UUFDeEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRztnQkFDYixrQkFBa0IsRUFBRSxNQUFNO2FBQzNCLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxDQUFDLFlBQWlCLEVBQUUsRUFBRTtRQUM1QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLGtCQUFrQixFQUFFLFlBQVk7YUFDakMsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWMsRUFBRSxDQUFDLGNBQW1CLEVBQUUsRUFBRTtRQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLFdBQVcsRUFBRSxjQUFjO2FBQzVCLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvQkFBb0IsRUFBRSxDQUFDLG1CQUF3QixFQUFFLEVBQUU7UUFDakQsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRztnQkFDYixpQkFBaUIsRUFBRSxtQkFBbUI7YUFDdkMsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdCQUFnQixFQUFFLENBQUMsZ0JBQXNCLEVBQUUsRUFBRTtRQUMzQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLGdCQUFnQixFQUFFLGdCQUFnQjthQUNuQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUNBQW1DLEVBQUUsQ0FBQyxlQUF3QixFQUFFLEVBQUU7UUFDaEUsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRztnQkFDYiw2QkFBNkIsRUFBRSxlQUFlO2FBQy9DLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx3QkFBd0IsRUFBRSxDQUFDLGFBQXFCLEVBQUUsRUFBRTtRQUNsRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLHFCQUFxQixFQUFFLGFBQWE7YUFDckMsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osaUVBQWUsZ0NBQWdDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9DdXN0b21EYXRlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0JvdHRvbVNoZWV0Rm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0lucHV0LnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0LCBGaUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0LFxuICBhZGRNb250aHMsXG4gIHN1Yk1vbnRocyxcbiAgc3RhcnRPZldlZWssXG4gIGVuZE9mV2VlayxcbiAgc3RhcnRPZk1vbnRoLFxuICBlbmRPZk1vbnRoLFxuICBhZGREYXlzLFxuICBpc1NhbWVNb250aCxcbiAgaXNTYW1lRGF5LFxuICBpc0FmdGVyLFxufSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgTW9kYWxPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogVHJhbnNwYXJlbnQgZGFyayBiYWNrZ3JvdW5kICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG5gO1xuXG5jb25zdCBDYWxlbmRhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDMzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDU1YTY0O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbmA7XG5cbmNvbnN0IFdlZWtEYXlzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzkwYTRhZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuYDtcblxuY29uc3QgV2Vla0RheSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmNvbnN0IERhdGVzR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cbmNvbnN0IERhdGVDZWxsID0gc3R5bGVkLmRpdjx7IGlzQ3VycmVudE1vbnRoOiBib29sZWFuOyBpc1NlbGVjdGVkOiBib29sZWFuOyBpc0Rpc2FibGVkOiBib29sZWFuIH0+YFxuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgaXNTZWxlY3RlZCB9KSA9PiAoaXNTZWxlY3RlZCA/IFwiIzA3NjQ4OVwiIDogXCJ0cmFuc3BhcmVudFwiKX07XG4gIGNvbG9yOiAkeyh7IGlzU2VsZWN0ZWQsIGlzQ3VycmVudE1vbnRoLCBpc0Rpc2FibGVkIH0pID0+XG4gICAgaXNEaXNhYmxlZCA/IFwiI2NjY1wiIDogaXNTZWxlY3RlZCA/IFwid2hpdGVcIiA6IGlzQ3VycmVudE1vbnRoID8gXCIjNDU1YTY0XCIgOiBcIiM5MGE0YWVcIn07XG4gIGN1cnNvcjogJHsoeyBpc0Rpc2FibGVkIH0pID0+IChpc0Rpc2FibGVkID8gXCJub3QtYWxsb3dlZFwiIDogXCJwb2ludGVyXCIpfTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBpc1NlbGVjdGVkLCBpc0Rpc2FibGVkIH0pID0+ICghaXNTZWxlY3RlZCAmJiAhaXNEaXNhYmxlZCA/IFwiI2U2ZjBmZlwiIDogdW5kZWZpbmVkKX07XG4gIH1cbmA7XG5cbnR5cGUgQ3VzdG9tRGF0ZVBpY2tlclByb3BzID0ge1xuICBzZWxlY3RlZERhdGU6IERhdGUgfCBudWxsO1xuICBvbkRhdGVDaGFuZ2U6IChkYXRlOiBEYXRlKSA9PiB2b2lkO1xuICBtaW5EYXRlPzogRGF0ZTsgLy8gQWRkIHByb3AgZm9yIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlXG4gIGNoaWxkcmVuOiAocHJvcHM6IHsgdG9nZ2xlQ2FsZW5kYXI6ICgpID0+IHZvaWQgfSkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IEN1c3RvbURhdGVQaWNrZXI6IFJlYWN0LkZDPEN1c3RvbURhdGVQaWNrZXJQcm9wcz4gPSAoe1xuICBzZWxlY3RlZERhdGUsXG4gIG9uRGF0ZUNoYW5nZSxcbiAgbWluRGF0ZSxcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50TW9udGgsIHNldEN1cnJlbnRNb250aF0gPSB1c2VTdGF0ZShzZWxlY3RlZERhdGUgfHwgbmV3IERhdGUoKSk7XG4gIGNvbnN0IFtzaG93Q2FsZW5kYXIsIHNldFNob3dDYWxlbmRhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc01hbnVhbE5hdmlnYXRpb24sIHNldElzTWFudWFsTmF2aWdhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFRyYWNrIG1hbnVhbCBuYXZpZ2F0aW9uXG5cbiAgLy8gU2Nyb2xsIHRvIHNlbGVjdGVkIGRhdGUncyBtb250aCB3aGVuIHRoZSBjYWxlbmRhciBpcyBmaXJzdCBvcGVuZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzTWFudWFsTmF2aWdhdGlvbiAmJiBzZWxlY3RlZERhdGUgJiYgIWlzU2FtZU1vbnRoKHNlbGVjdGVkRGF0ZSwgY3VycmVudE1vbnRoKSkge1xuICAgICAgc2V0Q3VycmVudE1vbnRoKHNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWREYXRlLCBzaG93Q2FsZW5kYXJdKTsgLy8gUnVuIHdoZW4gY2FsZW5kYXIgb3BlbnMgb3Igc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG5cbiAgY29uc3QgaGFuZGxlUHJldk1vbnRoID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRNb250aChzdWJNb250aHMoY3VycmVudE1vbnRoLCAxKSk7XG4gICAgc2V0SXNNYW51YWxOYXZpZ2F0aW9uKHRydWUpOyAvLyBNYXJrIHRoYXQgdXNlciBpcyBtYW51YWxseSBuYXZpZ2F0aW5nXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dE1vbnRoID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRNb250aChhZGRNb250aHMoY3VycmVudE1vbnRoLCAxKSk7XG4gICAgc2V0SXNNYW51YWxOYXZpZ2F0aW9uKHRydWUpOyAvLyBNYXJrIHRoYXQgdXNlciBpcyBtYW51YWxseSBuYXZpZ2F0aW5nXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGF0ZUNsaWNrID0gKGRheTogRGF0ZSkgPT4ge1xuICAgIG9uRGF0ZUNoYW5nZShkYXkpO1xuICAgIHNldFNob3dDYWxlbmRhcihmYWxzZSk7IC8vIENsb3NlIGNhbGVuZGFyIGFmdGVyIHNlbGVjdGluZyBhIGRhdGVcbiAgICBzZXRJc01hbnVhbE5hdmlnYXRpb24oZmFsc2UpOyAvLyBSZXNldCBtYW51YWwgbmF2aWdhdGlvbiB0cmFja2luZ1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IChcbiAgICA8SGVhZGVyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2TW9udGh9PlxuICAgICAgICA8RmlDaGV2cm9uTGVmdCAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2Pntmb3JtYXQoY3VycmVudE1vbnRoLCBcIk1NTU0geXl5eVwiKX08L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dE1vbnRofT5cbiAgICAgICAgPEZpQ2hldnJvblJpZ2h0IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0hlYWRlcj5cbiAgKTtcblxuICBjb25zdCByZW5kZXJEYXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzdGFydE9mV2VlayhjdXJyZW50TW9udGgsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkYXkgPSBhZGREYXlzKHN0YXJ0RGF0ZSwgaSk7XG4gICAgICBkYXlzLnB1c2goPFdlZWtEYXkga2V5PXtpfT57Zm9ybWF0KGRheSwgXCJFRUVcIikuc3Vic3RyaW5nKDAsIDIpfTwvV2Vla0RheT4pO1xuICAgIH1cbiAgICByZXR1cm4gPFdlZWtEYXlzPntkYXlzfTwvV2Vla0RheXM+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNlbGxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgoY3VycmVudE1vbnRoKTtcbiAgICBjb25zdCBtb250aEVuZCA9IGVuZE9mTW9udGgoY3VycmVudE1vbnRoKTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzdGFydE9mV2Vlayhtb250aFN0YXJ0LCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbiAgICBjb25zdCBlbmREYXRlID0gZW5kT2ZXZWVrKG1vbnRoRW5kLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcblxuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICBsZXQgZGF5cyA9IFtdO1xuICAgIGxldCBkYXkgPSBzdGFydERhdGU7XG5cbiAgICB3aGlsZSAoZGF5IDw9IGVuZERhdGUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoZGF5LCBcImRcIik7XG4gICAgICAgIGNvbnN0IGNsb25lRGF5ID0gZGF5O1xuICAgICAgICBjb25zdCBpc0N1cnJlbnRNb250aCA9IGlzU2FtZU1vbnRoKGRheSwgbW9udGhTdGFydCk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZERhdGUgJiYgaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBkYXkpOyAvLyBEaXNhYmxlIGRheXMgYmVmb3JlIGBtaW5EYXRlYFxuXG4gICAgICAgIGRheXMucHVzaChcbiAgICAgICAgICA8RGF0ZUNlbGxcbiAgICAgICAgICAgIGtleT17ZGF5LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICBpc0N1cnJlbnRNb250aD17aXNDdXJyZW50TW9udGggfHwgZmFsc2V9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkIHx8IGZhbHNlfVxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZCB8fCBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0Rpc2FibGVkICYmIGhhbmRsZURhdGVDbGljayhjbG9uZURheSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Zvcm1hdHRlZERhdGV9XG4gICAgICAgICAgPC9EYXRlQ2VsbD5cbiAgICAgICAgKTtcbiAgICAgICAgZGF5ID0gYWRkRGF5cyhkYXksIDEpO1xuICAgICAgfVxuICAgICAgcm93cy5wdXNoKDxEYXRlc0dyaWQga2V5PXtkYXkudG9TdHJpbmcoKX0+e2RheXN9PC9EYXRlc0dyaWQ+KTtcbiAgICAgIGRheXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+e3Jvd3N9PC9kaXY+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjaGlsZHJlbih7IHRvZ2dsZUNhbGVuZGFyOiAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDYWxlbmRhcighc2hvd0NhbGVuZGFyKTtcbiAgICAgICAgc2V0SXNNYW51YWxOYXZpZ2F0aW9uKGZhbHNlKTsgLy8gUmVzZXQgbWFudWFsIG5hdmlnYXRpb24gd2hlbiBjYWxlbmRhciB0b2dnbGVzXG4gICAgICB9IH0pfVxuICAgICAge3Nob3dDYWxlbmRhciAmJiAoXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhbGVuZGFyKGZhbHNlKX0+XG4gICAgICAgICAgPENhbGVuZGFyQ29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cbiAgICAgICAgICAgIHtyZW5kZXJEYXlzKCl9XG4gICAgICAgICAgICB7cmVuZGVyQ2VsbHMoKX1cbiAgICAgICAgICA8L0NhbGVuZGFyQ29udGFpbmVyPlxuICAgICAgICA8L01vZGFsT3ZlcmxheT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBydW5uaW5nTWFuIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3J1bm5pbmcuc3ZnXCI7XG5pbXBvcnQgdHJlZTEgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvdHJlZTEuc3ZnXCI7XG5pbXBvcnQgdHJlZTIgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvdHJlZTIuc3ZnXCI7XG5pbXBvcnQgc3VjY2Vzc0ZsYWcgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3Mvc3VjY2Vzcy1mbGFnLnN2Z1wiO1xuaW1wb3J0IHN0YXIgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3Mvc3Rhci5zdmdcIjtcbmltcG9ydCB7IEJhbGxUcmlhbmdsZSwgVGFpbFNwaW4gfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbnR5cGUgQm90dG9tU2hlZXRGb290ZXJQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgQm90dG9tU2hlZXRGb290ZXIgPSAoe1xuICB0aXRsZSxcbiAgb25DbGljayxcbiAgbG9hZGluZyxcbn06IEJvdHRvbVNoZWV0Rm9vdGVyUHJvcHMpID0+IHtcbiAgY29uc3QgZnVsbFRpdGxlID0gdGl0bGUgPyB0aXRsZSA6IFwiQ2FsY3VsYXRpbmcuLi5cIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJvdHRvbVNoZWV0Rm9vdGVyQmcgYmctY292ZXIgYmctbm8tcmVwZWF0IGgtMS8yIHJlbGF0aXZlIHBiLTUgcHQtM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTUgcmlnaHQtMCBsZWZ0LTAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG14LTMuNVwiPlxuICAgICAgICA8aW1nIHNyYz17cnVubmluZ01hbn0gLz5cbiAgICAgICAgPGltZyBzcmM9e3RyZWUxfSAvPlxuICAgICAgICA8aW1nIHNyYz17dHJlZTJ9IC8+XG4gICAgICAgIDxTdWNjZXNzRmxhZyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTEuNXhsIGZvbnQtd29ya1NhbnMgdHJhY2tpbmctdGl0bGUgdGV4dC1za2luLXByaW1hcnkgbWItNSBtdC02IHRleHQtY2VudGVyIG14LTJcIj5cbiAgICAgICAgICB7ZnVsbFRpdGxlID8/IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHNoYWRvdy1idXR0b24gYmctc2tpbi1wcmltYXJ5IGgtMTQgdy0xNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIG1iLTZcIlxuICAgICAgICAgIG9uQ2xpY2s9e2xvYWRpbmcgPyAoKSA9PiB7fSA6IG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RmlDaGVjayBzaXplPVwiMS41cmVtXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IFN1Y2Nlc3NGbGFnID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxpbWcgc3JjPXtzdGFyfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTZcIiAvPlxuICAgICAgPGltZyBzcmM9e3N0YXJ9IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiAtdG9wLTRcIiAvPlxuICAgICAgPGltZyBzcmM9e3N0YXJ9IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgLXRvcC00XCIgLz5cbiAgICAgIDxpbWcgc3JjPXtzdWNjZXNzRmxhZ30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgR29hbCBmcm9tIFwiY2xpZW50L21vZGVscy9Hb2FsXCI7XG5pbXBvcnQgdXNlTW9udGhseUluY29tZVN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvbW9udGhseUluY29tZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaU1pbnVzLCBGaVBsdXMsIEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgVGFpbFNwaW4gfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbnR5cGUgQWRkTW9udGhseUluY29tZUlucHV0UHJvcHMgPSB7XG4gIGluY3JlbWVudD86ICgpID0+IHZvaWQ7XG4gIGRlY3JlbWVudD86ICgpID0+IHZvaWQ7XG4gIHZhbHVlPzogbnVtYmVyO1xuICBhZGRWYWx1ZTogKGU6IGFueSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBZGRNb250aGx5SW5jb21lSW5wdXQgPSAoe1xuICB2YWx1ZSA9IDAsXG4gIGluY3JlbWVudCxcbiAgZGVjcmVtZW50LFxuICBhZGRWYWx1ZSxcbn06IEFkZE1vbnRobHlJbmNvbWVJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gdXNlTW9udGhseUluY29tZVN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jdXJyZW5jeVN5bWJvbFxuICApO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgbnVtYmVycyB3aXRoIGNvbW1hc1xuICBjb25zdCBmb3JtYXROdW1iZXJXaXRoQ29tbWFzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0zLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17ZGVjcmVtZW50fVxuICAgICAgPlxuICAgICAgICA8RmlNaW51cyBjb2xvcj1cIiM2Rjg5QTVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweS0zLjUgcHgtMTIgYmctc2tpbi1pbnB1dCBteC0yIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgc3R5bGU9e3tcbiAgICAgICAgbWluV2lkdGg6IFwiMTRyZW1cIlxuICAgICAgfX0+XG4gICAgICAgIHsvKiBGbGV4IGNvbnRhaW5lciBmb3IgYm90aCBzeW1ib2wgYW5kIHZhbHVlIHRvIGVuc3VyZSB0aGV5J3JlIGNlbnRlcmVkIHRvZ2V0aGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuICAgICAgICAgIHsvKiBDdXJyZW5jeSBzeW1ib2wgYW5kIHZhbHVlIGluc2lkZSBhIHNpbmdsZSBmbGV4IGNvbnRhaW5lciAqL31cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBmb250LXdvcmtTYW5zIHRleHQteGwgdHJhY2tpbmctdGl0bGUgdGV4dC1za2luLWJhc2UgZm9udC1zZW1pYm9sZCB3LWZ1bGwgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsIC8vIFJlbW92ZSBwYWRkaW5nIHRvIGVuc3VyZSBhbGlnbm1lbnRcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCAvLyBDZW50ZXIgdGV4dCB3aXRoaW4gdGhlIGlucHV0XG4gICAgICAgICAgICAgIC8vIG1ha2UgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBkeW5hbWljIGJhc2VkIG9uIHRoZSBsZW5ndGggb2YgdGhlIHZhbHVlXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt2YWx1ZS50b1N0cmluZygpLmxlbmd0aCAqIDE1fXB4YFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXJXaXRoQ29tbWFzKHZhbHVlIHx8IDApfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHVuZm9ybWF0dGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpO1xuICAgICAgICAgICAgICBhZGRWYWx1ZShwYXJzZUludCh1bmZvcm1hdHRlZFZhbHVlKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBwLTQgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXtpbmNyZW1lbnR9XG4gICAgICA+XG4gICAgICAgIDxGaVBsdXMgY29sb3I9XCIjMDQ1MDZlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy9UZXh0IGlucHV0IGZpZWxkXG5cbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsZWFkaW5nSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmFsdWU/OiBhbnk7XG4gIGhhc1ZhbHVlPzogYm9vbGVhbjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGFkZFZhbHVlOiAoZTogYW55KSA9PiB2b2lkO1xuICBwbGFjZUhvbGRlcj86IHN0cmluZztcbiAgdHlwZT86IGFueTtcbiAgaGFzQ3VycmVuY3lTeW1ib2w/OiBib29sZWFuO1xuICBjbGVhcklucHV0PzogYW55O1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufTtcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQgPSAoe1xuICBsYWJlbCxcbiAgbGVhZGluZ0ljb24sXG4gIHZhbHVlLFxuICBoYXNWYWx1ZSA9IHRydWUsXG4gIG9uQ2xpY2ssXG4gIGFkZFZhbHVlLFxuICBwbGFjZUhvbGRlcixcbiAgdHlwZSA9IFwidGV4dFwiLFxuICBoYXNDdXJyZW5jeVN5bWJvbCA9IGZhbHNlLFxuICBjbGVhcklucHV0LFxuICBpc0xvYWRpbmcgPSBmYWxzZSxcbn06IFRleHRJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsZWFySW5wdXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsZWFySW5wdXQoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdHJhY2tpbmctc3VidGl0bGUgbWItMiB0ZXh0LXNraW4tYmFzZWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgIHBsLTMuNSB3LXNjcmVlbiAke1xuICAgICAgICAgICAgaGFzVmFsdWVcbiAgICAgICAgICAgICAgPyBcImJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1iYXNlIHB5LTJcIlxuICAgICAgICAgICAgICA6IFwic2hhZG93LWlucHV0IHB5LTNcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA/IFwidGV4dC1za2luLXNlY29uZGFyeVwiIDogXCJ0ZXh0LXNraW4taW5wdXREaXNhYmxlZFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVhZGluZ0ljb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gZm9udC1wb3BwaW5zIHRleHQtYmFzZSB0cmFja2luZy1wcm9ncmVzc19sYWJlbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAke1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA/IFwidGV4dC1za2luLWJhc2VcIiA6IFwidGV4dC1za2luLWlucHV0RGlzYWJsZWRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0N1cnJlbmN5U3ltYm9sID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zbGF0ZS14LTEyXCI+e2hhc1ZhbHVlID8gXCLigqYgXCIgOiBcIlwifTwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2hhc1ZhbHVlID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2VIb2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy02NCBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXJgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGJnLXNraW4tc2Vjb25kYXJ5IHAtMiBhYnNvbHV0ZSByaWdodC0yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJJbnB1dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM0RTY3ODNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiMwNTY0ODlcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vL1RleHQgZmllbGQgd2l0aCBwb3B1cFxuXG50eXBlIFRleHRJbnB1dFdpdGhQb3B1cFByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgbGVhZGluZ0ljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhbHVlPzogYW55O1xuICBoYXNWYWx1ZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBhZGRWYWx1ZTogKGU6IGFueSkgPT4gdm9pZDtcbiAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XG4gIHR5cGU/OiBhbnk7XG4gIGhhc0N1cnJlbmN5U3ltYm9sPzogYm9vbGVhbjtcbiAgY2xlYXJJbnB1dD86IGFueTtcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgVGV4dElucHV0V2l0aFBvcHVwID0gKHtcbiAgbGFiZWwsXG4gIGxlYWRpbmdJY29uLFxuICB2YWx1ZSxcbiAgaGFzVmFsdWUgPSB0cnVlLFxuICBvbkNsaWNrLFxuICBhZGRWYWx1ZSxcbiAgcGxhY2VIb2xkZXIsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgaGFzQ3VycmVuY3lTeW1ib2wgPSBmYWxzZSxcbiAgY2xlYXJJbnB1dCxcbiAgaXNMb2FkaW5nID0gZmFsc2UsXG59OiBUZXh0SW5wdXRXaXRoUG9wdXBQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVDbGVhcklucHV0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25DbGljaz17aGFzVmFsdWUgPyAoKSA9PiB7fSA6IG9uQ2xpY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0cmFja2luZy1zdWJ0aXRsZSBtYi0yIHRleHQtc2tpbi1iYXNlYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciAgcGwtMy41IHctc2NyZWVuICR7XG4gICAgICAgICAgICBoYXNWYWx1ZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLWJhc2UgcHktMlwiXG4gICAgICAgICAgICAgIDogXCJzaGFkb3ctaW5wdXQgcHktM1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGgtOCB3LTgganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1zZWNvbmRhcnlcIiA6IFwidGV4dC1za2luLWlucHV0RGlzYWJsZWRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlYWRpbmdJY29ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIGZvbnQtcG9wcGlucyB0ZXh0LWJhc2UgdHJhY2tpbmctcHJvZ3Jlc3NfbGFiZWwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1iYXNlXCIgOiBcInRleHQtc2tpbi1pbnB1dERpc2FibGVkXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiB7aGFzQ3VycmVuY3lTeW1ib2wgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNsYXRlLXgtMTJcIj57aGFzVmFsdWUgPyBcIuKCpiBcIiA6IFwiXCJ9PC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtoYXNWYWx1ZSA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNjQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyYH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtoYXNDdXJyZW5jeVN5bWJvbCAmJiBoYXNWYWx1ZSA/IFwi4oKmIFwiIDogXCJcIn1cbiAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiBwbGFjZUhvbGRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGJnLXNraW4tc2Vjb25kYXJ5IHAtMiBhYnNvbHV0ZSByaWdodC0yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJJbnB1dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM0RTY3ODNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiMwNTY0ODlcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY2FsY3VsYXRlR29hbE1hdHVyaXR5RGF0ZSB9IGZyb20gXCJjbGllbnQvdXRpbHMvRm9ybWF0dGVyc1wiO1xuaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiLi9nb2FsU3RvcmVcIjtcblxuY29uc3QgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgY29udHJpYnV0aW9uQW1vdW50OiAwLFxuICB3ZWVrRGF5VG9Db250aWJ1dGU6IFwiXCIsXG4gIG1vbnRobHlXZWVrOiBcIlwiLFxuICB3ZWVrRGF5T2ZUaGVNb250aDogXCJcIixcbiAgc3RhcnRpbmdGcm9tRGF0ZTogbmV3IERhdGUoKSxcbiAgb3BlbkNvbnRyaWJ1dGlvblNldHRpbmdzU2hlZXQ6IGZhbHNlLFxuICBjb250cmlidXRpb25GcmVxdWVuY3k6IFwiXCIsXG4gIG1hdHVyaXR5RGF0ZVRleHQ6IFwiXCIsXG4gIHRhYkluZGV4OiAwLFxuICBnb2FsQW1vdW50OiAwLFxuICBjcm9uX3N0cmluZzogXCJcIixcbiAgc2V0Q3JvblN0cmluZzogKGNyb246IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBjcm9uX3N0cmluZzogY3JvbixcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRHb2FsQW1vdW50OiAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgZ29hbEFtb3VudDogYW1vdW50LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldE1hdHVyaXR5RGF0ZVRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgbWF0dXJpdHlEYXRlVGV4dDogdGV4dCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRUYWJJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgdGFiSW5kZXg6IGluZGV4LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldENvbnRyaWJ1dGlvbkFtb3VudDogKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBjb250cmlidXRpb25BbW91bnQ6IGFtb3VudCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRXZWVrRGF5VG9Db250cmlidXRlOiAoZGF5T2ZUaGVXZWVrOiBhbnkpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHdlZWtEYXlUb0NvbnRpYnV0ZTogZGF5T2ZUaGVXZWVrLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldE1vbnRobHlXZWVrOiAod2Vla09mVGhlTW9udGg6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgbW9udGhseVdlZWs6IHdlZWtPZlRoZU1vbnRoLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldFdlZWtEYXlPZlRoZU1vbnRoOiAoZGF5T2ZUaGVXZWVrT2ZNb250aDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICB3ZWVrRGF5T2ZUaGVNb250aDogZGF5T2ZUaGVXZWVrT2ZNb250aCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRTdGFydEZyb21EYXRlOiAoc3RhcnRpbmdGcm9tRGF0ZTogRGF0ZSkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgc3RhcnRpbmdGcm9tRGF0ZTogc3RhcnRpbmdGcm9tRGF0ZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBvcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldDogKG9wZW5Cb3R0b21TaGVldDogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgb3BlbkNvbnRyaWJ1dGlvblNldHRpbmdzU2hlZXQ6IG9wZW5Cb3R0b21TaGVldCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRDb250cmlidXRpb25GcmVxdWVuY3k6IChmcmVxdWVuY3lUZXh0OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGNvbnRyaWJ1dGlvbkZyZXF1ZW5jeTogZnJlcXVlbmN5VGV4dCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxufSkpO1xuZXhwb3J0IGRlZmF1bHQgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=