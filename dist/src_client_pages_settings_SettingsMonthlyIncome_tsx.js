"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_settings_SettingsMonthlyIncome_tsx"],
  {
    /***/ "./src/client/api/monthly-income.ts":
      /*!******************************************!*\
  !*** ./src/client/api/monthly-income.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js"
          );
        /* harmony import */ var client_api_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! client/api/api */ "./src/client/api/api.ts");
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };

        const saveMonthlyIncome = ({ configuration, amount }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
                endpoint: "/users/income/",
                data: { amount: amount },
                token: configuration.token,
              });
              return res;
            } catch (reason) {
              _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(
                reason
              );
              console.debug(reason);
              return Promise.reject(reason);
            }
          });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          saveMonthlyIncome;

        /***/
      },

    /***/ "./src/client/pages/components/goal-creation/Header.tsx":
      /*!**************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/Header.tsx ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Header: () => /* binding */ Header,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_assets_images_savings_cloud_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/assets/images/savings/cloud.png */ "./src/client/assets/images/savings/cloud.png"
          );

        const Header = ({ children, title, subtitle }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "flex flex-row justify-between items-center pb-4",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "h-11 w-11 rounded-full bg-skin-tertiary border border-1 border-skin-secondary flex justify-center items-center",
                              },
                              { children: children }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "w-28" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "img",
                                  {
                                    src: client_assets_images_savings_cloud_png__WEBPACK_IMPORTED_MODULE_1__,
                                  }
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "font-custom text-skin-base text-xl font-semibold tracking-title mb-4",
                      },
                      { children: title }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "tracking-widest font-custom text-skin-secondary text-xxxs",
                      },
                      { children: subtitle }
                    )
                  ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/goal-creation/Input.tsx":
      /*!*************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/Input.tsx ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AddMonthlyIncomeInput: () =>
            /* binding */ AddMonthlyIncomeInput,
          /* harmony export */ TextInput: () => /* binding */ TextInput,
          /* harmony export */ TextInputWithPopup: () =>
            /* binding */ TextInputWithPopup,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js"
          );

        const AddMonthlyIncomeInput = ({
          value = 0,
          increment,
          decrement,
          addValue,
        }) => {
          const currencySymbol = (0,
          client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (state) => state.currencySymbol
          );
          // Helper function to format numbers with commas
          const formatNumberWithCommas = (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-row items-center justify-center" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary cursor-pointer",
                        onClick: decrement,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMinus,
                          { color: "#6F89A5" }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "relative rounded-full py-3.5 px-12 bg-skin-input mx-2 flex flex-row justify-center items-center",
                        style: {
                          minWidth: "14rem",
                        },
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row items-center justify-center w-full",
                            },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "span",
                                  Object.assign(
                                    { className: "text-l font-semibold" },
                                    { children: currencySymbol }
                                  )
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "input",
                                  {
                                    className:
                                      "bg-transparent font-custom text-xl tracking-title text-skin-base font-semibold w-full focus:border-none focus:outline-none",
                                    style: {
                                      padding: 0,
                                      textAlign: "center",
                                      // make the width of the input dynamic based on the length of the value
                                      width: `${
                                        value.toString().length * 15
                                      }px`,
                                    },
                                    type: "text",
                                    value: formatNumberWithCommas(value || 0),
                                    onChange: (e) => {
                                      const unformattedValue =
                                        e.target.value.replace(/,/g, "");
                                      addValue(parseInt(unformattedValue));
                                    },
                                  }
                                ),
                              ],
                            }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary cursor-pointer",
                        onClick: increment,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiPlus,
                          { color: "#04506e" }
                        ),
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
        const TextInput = ({
          label,
          leadingIcon,
          value,
          hasValue = true,
          onClick,
          addValue,
          placeHolder,
          type = "text",
          hasCurrencySymbol = false,
          clearInput,
          isLoading = false,
        }) => {
          const handleClearInput = (event) => {
            event.stopPropagation();
            clearInput();
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className: `font-custom font-medium text-xs tracking-subtitle mb-2 text-skin-base`,
                            },
                            { children: label }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row relative" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            {
                              className: `rounded flex flex-row items-center  pl-3.5 w-screen ${
                                hasValue
                                  ? "border border-1 border-skin-base py-2"
                                  : "shadow-input py-3"
                              }`,
                            },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className: `flex flex-col ${
                                        hasValue
                                          ? "text-skin-secondary"
                                          : "text-skin-inputDisabled"
                                      }`,
                                    },
                                    { children: leadingIcon }
                                  )
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  "div",
                                  Object.assign(
                                    {
                                      className: `font-medium font-custom text-base tracking-progress_label flex flex-row justify-center items-center ${
                                        hasValue
                                          ? "text-skin-base"
                                          : "text-skin-inputDisabled"
                                      }`,
                                    },
                                    {
                                      children: [
                                        hasCurrencySymbol
                                          ? (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "div",
                                              Object.assign(
                                                { className: "translate-x-12" },
                                                {
                                                  children: hasValue
                                                    ? "₦ "
                                                    : "",
                                                }
                                              )
                                            )
                                          : (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "div",
                                              {}
                                            ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "input",
                                          {
                                            disabled: hasValue ? false : true,
                                            type: type,
                                            placeholder: placeHolder,
                                            value: value,
                                            className: `w-64 outline-none text-center`,
                                            onChange: (e) => {
                                              addValue(e.target.value);
                                            },
                                          }
                                        ),
                                      ],
                                    }
                                  )
                                ),
                                hasValue
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "button",
                                      Object.assign(
                                        {
                                          className:
                                            "rounded-full flex items-center bg-skin-secondary p-2 absolute right-2",
                                          onClick: handleClearInput,
                                        },
                                        {
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX,
                                            { color: "#4E6783" }
                                          ),
                                        }
                                      )
                                    )
                                  : isLoading
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.TailSpin,
                                      {
                                        height: "20",
                                        width: "20",
                                        color: "#0539ec",
                                        ariaLabel: "tail-spin-loading",
                                        wrapperStyle: {},
                                        wrapperClass: "",
                                        visible: true,
                                      }
                                    )
                                  : (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      {}
                                    ),
                              ],
                            }
                          )
                        ),
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
        const TextInputWithPopup = ({
          label,
          leadingIcon,
          value,
          hasValue = true,
          onClick,
          addValue,
          placeHolder,
          type = "text",
          hasCurrencySymbol = false,
          clearInput,
          isLoading = false,
        }) => {
          const handleClearInput = (event) => {
            event.stopPropagation();
            clearInput();
          };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              {
                className: "flex flex-col",
                onClick: hasValue ? () => {} : onClick,
              },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className: `font-custom font-medium text-xs tracking-subtitle mb-2 text-skin-base`,
                            },
                            { children: label }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row relative" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            {
                              className: `rounded flex flex-row items-center  pl-3.5 w-screen ${
                                hasValue
                                  ? "border border-1 border-skin-base py-2"
                                  : "shadow-input py-3"
                              }`,
                            },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className: `flex flex-col h-8 w-8 justify-center ${
                                        hasValue
                                          ? "text-skin-secondary"
                                          : "text-skin-inputDisabled"
                                      }`,
                                    },
                                    { children: leadingIcon }
                                  )
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className: `font-medium font-custom text-base tracking-progress_label flex flex-row justify-center items-center ${
                                        hasValue
                                          ? "text-skin-base"
                                          : "text-skin-inputDisabled"
                                      }`,
                                    },
                                    {
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                        "div",
                                        Object.assign(
                                          {
                                            className:
                                              "w-64 outline-none text-center",
                                          },
                                          {
                                            children: [
                                              hasCurrencySymbol && hasValue
                                                ? "₦ "
                                                : "",
                                              value ? value : placeHolder,
                                            ],
                                          }
                                        )
                                      ),
                                    }
                                  )
                                ),
                                hasValue
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "button",
                                      Object.assign(
                                        {
                                          className:
                                            "rounded-full flex items-center bg-skin-secondary p-2 absolute right-2",
                                          onClick: handleClearInput,
                                        },
                                        {
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX,
                                            { color: "#4E6783" }
                                          ),
                                        }
                                      )
                                    )
                                  : isLoading
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.TailSpin,
                                      {
                                        height: "20",
                                        width: "20",
                                        color: "#0539ec",
                                        ariaLabel: "tail-spin-loading",
                                        wrapperStyle: {},
                                        wrapperClass: "",
                                        visible: true,
                                      }
                                    )
                                  : (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      {}
                                    ),
                              ],
                            }
                          )
                        ),
                      }
                    )
                  ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/settings/SettingsMonthlyIncome.tsx":
      /*!*************************************************************!*\
  !*** ./src/client/pages/settings/SettingsMonthlyIncome.tsx ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! client/pages/components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! client/pages/components/MainButton */ "./src/client/pages/components/MainButton.tsx"
          );
        /* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! client/pages/components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var _components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/goal-creation/Header */ "./src/client/pages/components/goal-creation/Header.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/goal-creation/Input */ "./src/client/pages/components/goal-creation/Input.tsx"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_api_monthly_income__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/api/monthly-income */ "./src/client/api/monthly-income.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts"
          );
        /* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/userStore */ "./src/client/store/userStore.ts"
          );

        const SettingsMonthlyIncome = () => {
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)(
            (state) => state.configuration
          );
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const user = (0,
          client_store_userStore__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (state) => state.user
          );
          const [finalAmount, setFinalAmount] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.income);
          const monthlyIncome = (0,
          client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_6__["default"])(
            (state) => state
          );
          const {
            isFetching: savingsMonthlyIncome,
            data,
            refetch,
          } = (0, react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            ["saveIncome"],
            () =>
              (0,
              client_api_monthly_income__WEBPACK_IMPORTED_MODULE_7__[
                "default"
              ])({
                configuration: configuration,
                amount: finalAmount,
              }).then((result) => {
                if (result) {
                  monthlyIncome.setMonthlyIncome(result.income);
                  navigate("/");
                }
              }),
            {
              enabled: false,
            }
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "h-screen w-screen relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "bg-curvedBg pt-4 bg-no-repeat h-64 bg-cover",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_8__[
                              "default"
                            ],
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "flex flex-row justify-between items-center",
                                  },
                                  {
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_9__[
                                          "default"
                                        ],
                                        {
                                          onClick: () => {
                                            navigate(-1);
                                          },
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_10__[
                                          "default"
                                        ],
                                        {
                                          onClick: () => {
                                            navigate(-3);
                                          },
                                        }
                                      ),
                                    ],
                                  }
                                )
                              ),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "px-3.5 pt-6 pb-4" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_11__.Header,
                                  {
                                    title:
                                      "What\u2019s your take-home monthly income?",
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_12__.FiBriefcase,
                                      { color: "#6F89A5" }
                                    ),
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "mt-24 mx-3.5 flex flex-row justify-center",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__.AddMonthlyIncomeInput,
                                  {
                                    addValue: (e) => setFinalAmount(e),
                                    value: finalAmount,
                                    increment: () => {
                                      setFinalAmount(finalAmount + 1000);
                                    },
                                    decrement: () => {
                                      if (finalAmount > 0) {
                                        setFinalAmount(finalAmount - 1000);
                                      }
                                    },
                                  }
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "fixed bottom-2 right-0 left-0 px-3.5" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_14__[
                            "default"
                          ],
                          {
                            title: "Save",
                            click: () => refetch(),
                            loading: savingsMonthlyIncome,
                          }
                        ),
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SettingsMonthlyIncome;

        /***/
      },

    /***/ "./src/client/assets/images/savings/cloud.png":
      /*!****************************************************!*\
  !*** ./src/client/assets/images/savings/cloud.png ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "ac962698708f7c85d442.png";

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zZXR0aW5nc19TZXR0aW5nc01vbnRobHlJbmNvbWVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUdBO0FBRTFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxFQUMvQixhQUFhLEVBQ2IsTUFBTSxHQUlQLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHdEQUFRLENBQUM7WUFDekIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQ3hCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFFRixpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekIwQjtBQU1wRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWUsRUFBRSxFQUFFO0lBQ25FLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsK0VBQUssU0FBUyxFQUFDLGlEQUFpRCxpQkFDOUQsOEVBQUssU0FBUyxFQUFDLGdIQUFnSCxnQkFDNUgsUUFBUSxJQUNMLEVBQ04sOEVBQUssU0FBUyxFQUFDLE1BQU0sZ0JBQ25CLGdFQUFLLEdBQUcsRUFBRSxtRUFBSyxHQUFJLElBQ2YsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyx3RUFBd0UsZ0JBQ3BGLEtBQUssSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyw0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LEtBQUssRUFBQyw0Q0FBdUMsRUFDN0MsUUFBUSxFQUFFLHVEQUFDLHdEQUFXLElBQUMsS0FBSyxFQUFDLFNBQVMsR0FBRyxHQUN6QyxJQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLDJDQUEyQyxnQkFDeEQsdURBQUMsbUZBQXFCLElBQ3BCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUNsQyxLQUFLLEVBQUUsV0FBVyxFQUNsQixTQUFTLEVBQUUsR0FBRyxFQUFFO2dDQUNkLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7NEJBQ3JDLENBQUMsRUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO2dDQUNkLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtvQ0FDbkIsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztpQ0FDcEM7NEJBQ0gsQ0FBQyxHQUNELElBQ0UsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxzQ0FBc0MsZ0JBQ25ELHVEQUFDLDJFQUFVLElBQ1QsS0FBSyxFQUFDLE1BQU0sRUFDWixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ3RCLE9BQU8sRUFBRSxvQkFBb0IsR0FDN0IsSUFDRSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLHFCQUFxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L2FwaS9tb250aGx5LWluY29tZS50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL3NldHRpbmdzL1NldHRpbmdzTW9udGhseUluY29tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcblxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tIFwiY2xpZW50L2FwaS9hcGlcIjtcblxuY29uc3Qgc2F2ZU1vbnRobHlJbmNvbWUgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxuICBhbW91bnQsXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG4gIGFtb3VudDogbnVtYmVyO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBcIi91c2Vycy9pbmNvbWUvXCIsXG4gICAgICBkYXRhOiB7IGFtb3VudDogYW1vdW50IH0sXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlTW9udGhseUluY29tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbG91ZCBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9jbG91ZC5wbmdcIjtcbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgc3VidGl0bGUgfTogSGVhZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHBiLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTExIHctMTEgcm91bmRlZC1mdWxsIGJnLXNraW4tdGVydGlhcnkgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXNlY29uZGFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yOFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtjbG91ZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LXNraW4tYmFzZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGl0bGUgbWItNFwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXN0IGZvbnQtcG9wcGlucyB0ZXh0LXNraW4tc2Vjb25kYXJ5IHRleHQteHh4c1wiPlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgR29hbCBmcm9tIFwiY2xpZW50L21vZGVscy9Hb2FsXCI7XG5pbXBvcnQgdXNlTW9udGhseUluY29tZVN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvbW9udGhseUluY29tZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaU1pbnVzLCBGaVBsdXMsIEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgVGFpbFNwaW4gfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbnR5cGUgQWRkTW9udGhseUluY29tZUlucHV0UHJvcHMgPSB7XG4gIGluY3JlbWVudD86ICgpID0+IHZvaWQ7XG4gIGRlY3JlbWVudD86ICgpID0+IHZvaWQ7XG4gIHZhbHVlPzogbnVtYmVyO1xuICBhZGRWYWx1ZTogKGU6IGFueSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBZGRNb250aGx5SW5jb21lSW5wdXQgPSAoe1xuICB2YWx1ZSA9IDAsXG4gIGluY3JlbWVudCxcbiAgZGVjcmVtZW50LFxuICBhZGRWYWx1ZSxcbn06IEFkZE1vbnRobHlJbmNvbWVJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gdXNlTW9udGhseUluY29tZVN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jdXJyZW5jeVN5bWJvbFxuICApO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgbnVtYmVycyB3aXRoIGNvbW1hc1xuICBjb25zdCBmb3JtYXROdW1iZXJXaXRoQ29tbWFzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0zLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17ZGVjcmVtZW50fVxuICAgICAgPlxuICAgICAgICA8RmlNaW51cyBjb2xvcj1cIiM2Rjg5QTVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweS0zLjUgcHgtMTIgYmctc2tpbi1pbnB1dCBteC0yIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgc3R5bGU9e3tcbiAgICAgICAgbWluV2lkdGg6IFwiMTRyZW1cIlxuICAgICAgfX0+XG4gICAgICAgIHsvKiBGbGV4IGNvbnRhaW5lciBmb3IgYm90aCBzeW1ib2wgYW5kIHZhbHVlIHRvIGVuc3VyZSB0aGV5J3JlIGNlbnRlcmVkIHRvZ2V0aGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuICAgICAgICAgIHsvKiBDdXJyZW5jeSBzeW1ib2wgYW5kIHZhbHVlIGluc2lkZSBhIHNpbmdsZSBmbGV4IGNvbnRhaW5lciAqL31cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBmb250LXdvcmtTYW5zIHRleHQteGwgdHJhY2tpbmctdGl0bGUgdGV4dC1za2luLWJhc2UgZm9udC1zZW1pYm9sZCB3LWZ1bGwgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsIC8vIFJlbW92ZSBwYWRkaW5nIHRvIGVuc3VyZSBhbGlnbm1lbnRcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCAvLyBDZW50ZXIgdGV4dCB3aXRoaW4gdGhlIGlucHV0XG4gICAgICAgICAgICAgIC8vIG1ha2UgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBkeW5hbWljIGJhc2VkIG9uIHRoZSBsZW5ndGggb2YgdGhlIHZhbHVlXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt2YWx1ZS50b1N0cmluZygpLmxlbmd0aCAqIDE1fXB4YFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXJXaXRoQ29tbWFzKHZhbHVlIHx8IDApfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHVuZm9ybWF0dGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpO1xuICAgICAgICAgICAgICBhZGRWYWx1ZShwYXJzZUludCh1bmZvcm1hdHRlZFZhbHVlKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBwLTQgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXByaW1hcnkgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXtpbmNyZW1lbnR9XG4gICAgICA+XG4gICAgICAgIDxGaVBsdXMgY29sb3I9XCIjMDQ1MDZlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy9UZXh0IGlucHV0IGZpZWxkXG5cbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsZWFkaW5nSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmFsdWU/OiBhbnk7XG4gIGhhc1ZhbHVlPzogYm9vbGVhbjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGFkZFZhbHVlOiAoZTogYW55KSA9PiB2b2lkO1xuICBwbGFjZUhvbGRlcj86IHN0cmluZztcbiAgdHlwZT86IGFueTtcbiAgaGFzQ3VycmVuY3lTeW1ib2w/OiBib29sZWFuO1xuICBjbGVhcklucHV0PzogYW55O1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufTtcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQgPSAoe1xuICBsYWJlbCxcbiAgbGVhZGluZ0ljb24sXG4gIHZhbHVlLFxuICBoYXNWYWx1ZSA9IHRydWUsXG4gIG9uQ2xpY2ssXG4gIGFkZFZhbHVlLFxuICBwbGFjZUhvbGRlcixcbiAgdHlwZSA9IFwidGV4dFwiLFxuICBoYXNDdXJyZW5jeVN5bWJvbCA9IGZhbHNlLFxuICBjbGVhcklucHV0LFxuICBpc0xvYWRpbmcgPSBmYWxzZSxcbn06IFRleHRJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsZWFySW5wdXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsZWFySW5wdXQoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdHJhY2tpbmctc3VidGl0bGUgbWItMiB0ZXh0LXNraW4tYmFzZWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgIHBsLTMuNSB3LXNjcmVlbiAke1xuICAgICAgICAgICAgaGFzVmFsdWVcbiAgICAgICAgICAgICAgPyBcImJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1iYXNlIHB5LTJcIlxuICAgICAgICAgICAgICA6IFwic2hhZG93LWlucHV0IHB5LTNcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA/IFwidGV4dC1za2luLXNlY29uZGFyeVwiIDogXCJ0ZXh0LXNraW4taW5wdXREaXNhYmxlZFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVhZGluZ0ljb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gZm9udC1wb3BwaW5zIHRleHQtYmFzZSB0cmFja2luZy1wcm9ncmVzc19sYWJlbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAke1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA/IFwidGV4dC1za2luLWJhc2VcIiA6IFwidGV4dC1za2luLWlucHV0RGlzYWJsZWRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0N1cnJlbmN5U3ltYm9sID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zbGF0ZS14LTEyXCI+e2hhc1ZhbHVlID8gXCLigqYgXCIgOiBcIlwifTwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2hhc1ZhbHVlID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2VIb2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy02NCBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXJgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGJnLXNraW4tc2Vjb25kYXJ5IHAtMiBhYnNvbHV0ZSByaWdodC0yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJJbnB1dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM0RTY3ODNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiMwNTY0ODlcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vL1RleHQgZmllbGQgd2l0aCBwb3B1cFxuXG50eXBlIFRleHRJbnB1dFdpdGhQb3B1cFByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgbGVhZGluZ0ljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhbHVlPzogYW55O1xuICBoYXNWYWx1ZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBhZGRWYWx1ZTogKGU6IGFueSkgPT4gdm9pZDtcbiAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XG4gIHR5cGU/OiBhbnk7XG4gIGhhc0N1cnJlbmN5U3ltYm9sPzogYm9vbGVhbjtcbiAgY2xlYXJJbnB1dD86IGFueTtcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgVGV4dElucHV0V2l0aFBvcHVwID0gKHtcbiAgbGFiZWwsXG4gIGxlYWRpbmdJY29uLFxuICB2YWx1ZSxcbiAgaGFzVmFsdWUgPSB0cnVlLFxuICBvbkNsaWNrLFxuICBhZGRWYWx1ZSxcbiAgcGxhY2VIb2xkZXIsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgaGFzQ3VycmVuY3lTeW1ib2wgPSBmYWxzZSxcbiAgY2xlYXJJbnB1dCxcbiAgaXNMb2FkaW5nID0gZmFsc2UsXG59OiBUZXh0SW5wdXRXaXRoUG9wdXBQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVDbGVhcklucHV0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25DbGljaz17aGFzVmFsdWUgPyAoKSA9PiB7fSA6IG9uQ2xpY2t9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0cmFja2luZy1zdWJ0aXRsZSBtYi0yIHRleHQtc2tpbi1iYXNlYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciAgcGwtMy41IHctc2NyZWVuICR7XG4gICAgICAgICAgICBoYXNWYWx1ZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLWJhc2UgcHktMlwiXG4gICAgICAgICAgICAgIDogXCJzaGFkb3ctaW5wdXQgcHktM1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGgtOCB3LTgganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1zZWNvbmRhcnlcIiA6IFwidGV4dC1za2luLWlucHV0RGlzYWJsZWRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlYWRpbmdJY29ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIGZvbnQtcG9wcGlucyB0ZXh0LWJhc2UgdHJhY2tpbmctcHJvZ3Jlc3NfbGFiZWwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1iYXNlXCIgOiBcInRleHQtc2tpbi1pbnB1dERpc2FibGVkXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiB7aGFzQ3VycmVuY3lTeW1ib2wgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNsYXRlLXgtMTJcIj57aGFzVmFsdWUgPyBcIuKCpiBcIiA6IFwiXCJ9PC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtoYXNWYWx1ZSA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNjQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyYH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtoYXNDdXJyZW5jeVN5bWJvbCAmJiBoYXNWYWx1ZSA/IFwi4oKmIFwiIDogXCJcIn1cbiAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiBwbGFjZUhvbGRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGJnLXNraW4tc2Vjb25kYXJ5IHAtMiBhYnNvbHV0ZSByaWdodC0yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJJbnB1dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM0RTY3ODNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiMwNTY0ODlcIlxuICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL01haW5CdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9DbG9zZUJ1dHRvblwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9IZWFkZXJcIjtcbmltcG9ydCB7IEZpQnJpZWZjYXNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBBZGRNb250aGx5SW5jb21lSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0lucHV0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHNhdmVNb250aGx5SW5jb21lIGZyb20gXCJjbGllbnQvYXBpL21vbnRobHktaW5jb21lXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VNb250aGx5SW5jb21lU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9tb250aGx5SW5jb21lXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvdXNlclN0b3JlXCI7XG5jb25zdCBTZXR0aW5nc01vbnRobHlJbmNvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZmluYWxBbW91bnQsIHNldEZpbmFsQW1vdW50XSA9IHVzZVN0YXRlKHVzZXIuaW5jb21lKTtcbiAgY29uc3QgbW9udGhseUluY29tZSA9IHVzZU1vbnRobHlJbmNvbWVTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuXG4gIGNvbnN0IHtcbiAgICBpc0ZldGNoaW5nOiBzYXZpbmdzTW9udGhseUluY29tZSxcbiAgICBkYXRhLFxuICAgIHJlZmV0Y2gsXG4gIH0gPSB1c2VRdWVyeShcbiAgICBbXCJzYXZlSW5jb21lXCJdLFxuICAgICgpID0+XG4gICAgICBzYXZlTW9udGhseUluY29tZSh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGFtb3VudDogZmluYWxBbW91bnQsXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIG1vbnRobHlJbmNvbWUuc2V0TW9udGhseUluY29tZShyZXN1bHQuaW5jb21lKTtcbiAgICAgICAgICBuYXZpZ2F0ZShcIi9cIik7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1cnZlZEJnIHB0LTQgYmctbm8tcmVwZWF0IGgtNjQgYmctY292ZXJcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMuNSBwdC02IHBiLTRcIj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICB0aXRsZT1cIldoYXTigJlzIHlvdXIgdGFrZS1ob21lIG1vbnRobHkgaW5jb21lP1wiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEZpQnJpZWZjYXNlIGNvbG9yPVwiIzZGODlBNVwiIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTI0IG14LTMuNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEFkZE1vbnRobHlJbmNvbWVJbnB1dFxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBzZXRGaW5hbEFtb3VudChlKX1cbiAgICAgICAgICAgIHZhbHVlPXtmaW5hbEFtb3VudH1cbiAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaW5hbEFtb3VudChmaW5hbEFtb3VudCArIDEwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZmluYWxBbW91bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0RmluYWxBbW91bnQoZmluYWxBbW91bnQgLSAxMDAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMiByaWdodC0wIGxlZnQtMCBweC0zLjVcIj5cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICB0aXRsZT1cIlNhdmVcIlxuICAgICAgICAgIGNsaWNrPXsoKSA9PiByZWZldGNoKCl9XG4gICAgICAgICAgbG9hZGluZz17c2F2aW5nc01vbnRobHlJbmNvbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc01vbnRobHlJbmNvbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
