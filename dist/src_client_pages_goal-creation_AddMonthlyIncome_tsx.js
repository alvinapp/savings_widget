"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_goal-creation_AddMonthlyIncome_tsx"],
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

    /***/ "./src/client/pages/goal-creation/AddMonthlyIncome.tsx":
      /*!*************************************************************!*\
  !*** ./src/client/pages/goal-creation/AddMonthlyIncome.tsx ***!
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
        /* harmony import */ var client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/pages/components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! client/pages/components/MainButton */ "./src/client/pages/components/MainButton.tsx"
          );
        /* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! client/pages/components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var _components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/goal-creation/Header */ "./src/client/pages/components/goal-creation/Header.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../components/goal-creation/Input */ "./src/client/pages/components/goal-creation/Input.tsx"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_api_monthly_income__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/api/monthly-income */ "./src/client/api/monthly-income.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts"
          );

        const AddMonthlyIncome = () => {
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_3__.useConfigurationStore)(
            (state) => state.configuration
          );
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          // Set initial income to 200000
          const [finalAmount, setFinalAmount] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(200000);
          const monthlyIncome = (0,
          client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (state) => state
          );
          const saveIncome = () => {
            (0,
            client_api_monthly_income__WEBPACK_IMPORTED_MODULE_6__["default"])({
              configuration: configuration,
              amount: finalAmount,
            }).then((result) => {
              if (result) {
                result.income;
                monthlyIncome.setMonthlyIncome(result.income);
              }
              navigate("/create-savings-goal");
            });
          };
          const { data, refetch } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            ["saveIncome"],
            () => saveIncome,
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
                            client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[
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
                                        client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_8__[
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
                                        client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_9__[
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
                                  _components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_10__.Header,
                                  {
                                    title:
                                      "What\u2019s your take-home monthly income?",
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiBriefcase,
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
                                  _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_12__.AddMonthlyIncomeInput,
                                  {
                                    addValue: (e) => setFinalAmount(e),
                                    value: finalAmount,
                                    increment: () => {
                                      setFinalAmount(finalAmount + 1000);
                                    },
                                    decrement: () => {
                                      // Prevent decrementing below 1000
                                      if (finalAmount > 1000) {
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
                          client_pages_components_MainButton__WEBPACK_IMPORTED_MODULE_13__[
                            "default"
                          ],
                          {
                            title: "Continue",
                            click: () => refetch(),
                            isDisabled: finalAmount === 0,
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
          AddMonthlyIncome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0FkZE1vbnRobHlJbmNvbWVfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUdBO0FBRTFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxFQUMvQixhQUFhLEVBQ2IsTUFBTSxHQUlQLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHdEQUFRLENBQUM7WUFDekIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQ3hCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFFRixpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekIwQjtBQU1wRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWUsRUFBRSxFQUFFO0lBQ25FLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsK0VBQUssU0FBUyxFQUFDLGlEQUFpRCxpQkFDOUQsOEVBQUssU0FBUyxFQUFDLGdIQUFnSCxnQkFDNUgsUUFBUSxJQUNMLEVBQ04sOEVBQUssU0FBUyxFQUFDLE1BQU0sZ0JBQ25CLGdFQUFLLEdBQUcsRUFBRSxtRUFBSyxHQUFJLElBQ2YsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyx3RUFBd0UsZ0JBQ3BGLEtBQUssSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyw0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QyxFQUM3QyxRQUFRLEVBQUUsdURBQUMsd0RBQVcsSUFBQyxLQUFLLEVBQUMsU0FBUyxHQUFHLEdBQ3pDLElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsMkNBQTJDLGdCQUN4RCx1REFBQyxtRkFBcUIsSUFDcEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEtBQUssRUFBRSxXQUFXLEVBQ2xCLFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0NBQ2QsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQzs0QkFDckMsQ0FBQyxFQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0NBQ2Qsa0NBQWtDO2dDQUNsQyxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUU7b0NBQ3RCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7aUNBQ3BDOzRCQUNILENBQUMsR0FDRCxJQUNFLEtBQ0YsRUFFTiw4RUFBSyxTQUFTLEVBQUMsc0NBQXNDLGdCQUVuRCx1REFBQywyRUFBVSxJQUNULEtBQUssRUFBQyxVQUFVLEVBQ2hCLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDdEIsVUFBVSxFQUFFLFdBQVcsS0FBSyxDQUFDLEdBQzdCLElBQ0UsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9hcGkvbW9udGhseS1pbmNvbWUudHMiLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9IZWFkZXIudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSW5wdXQudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLWNyZWF0aW9uL0FkZE1vbnRobHlJbmNvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9icm93c2VyXCI7XG5cbmltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSBcImNsaWVudC9hcGkvYXBpXCI7XG5cbmNvbnN0IHNhdmVNb250aGx5SW5jb21lID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgYW1vdW50LFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBhbW91bnQ6IG51bWJlcjtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvdXNlcnMvaW5jb21lL1wiLFxuICAgICAgZGF0YTogeyBhbW91bnQ6IGFtb3VudCB9LFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2F2ZU1vbnRobHlJbmNvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xvdWQgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvY2xvdWQucG5nXCI7XG50eXBlIEhlYWRlclByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIHN1YnRpdGxlIH06IEhlYWRlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMSB3LTExIHJvdW5kZWQtZnVsbCBiZy1za2luLXRlcnRpYXJ5IGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1zZWNvbmRhcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y2xvdWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1za2luLWJhc2UgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpdGxlIG1iLTRcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVzdCBmb250LXBvcHBpbnMgdGV4dC1za2luLXNlY29uZGFyeSB0ZXh0LXh4eHNcIj5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IEdvYWwgZnJvbSBcImNsaWVudC9tb2RlbHMvR29hbFwiO1xuaW1wb3J0IHVzZU1vbnRobHlJbmNvbWVTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL21vbnRobHlJbmNvbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlNaW51cywgRmlQbHVzLCBGaVggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IFRhaWxTcGluIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG50eXBlIEFkZE1vbnRobHlJbmNvbWVJbnB1dFByb3BzID0ge1xuICBpbmNyZW1lbnQ/OiAoKSA9PiB2b2lkO1xuICBkZWNyZW1lbnQ/OiAoKSA9PiB2b2lkO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgYWRkVmFsdWU6IChlOiBhbnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQWRkTW9udGhseUluY29tZUlucHV0ID0gKHtcbiAgdmFsdWUgPSAwLFxuICBpbmNyZW1lbnQsXG4gIGRlY3JlbWVudCxcbiAgYWRkVmFsdWUsXG59OiBBZGRNb250aGx5SW5jb21lSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IHVzZU1vbnRobHlJbmNvbWVTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY3VycmVuY3lTeW1ib2xcbiAgKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IG51bWJlcnMgd2l0aCBjb21tYXNcbiAgY29uc3QgZm9ybWF0TnVtYmVyV2l0aENvbW1hcyA9IChudW06IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMy41IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlbWVudH1cbiAgICAgID5cbiAgICAgICAgPEZpTWludXMgY29sb3I9XCIjNkY4OUE1XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWZ1bGwgcHktMy41IHB4LTEyIGJnLXNraW4taW5wdXQgbXgtMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7XG4gICAgICAgIG1pbldpZHRoOiBcIjE0cmVtXCJcbiAgICAgIH19PlxuICAgICAgICB7LyogRmxleCBjb250YWluZXIgZm9yIGJvdGggc3ltYm9sIGFuZCB2YWx1ZSB0byBlbnN1cmUgdGhleSdyZSBjZW50ZXJlZCB0b2dldGhlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICB7LyogQ3VycmVuY3kgc3ltYm9sIGFuZCB2YWx1ZSBpbnNpZGUgYSBzaW5nbGUgZmxleCBjb250YWluZXIgKi99XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3VycmVuY3lTeW1ib2x9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgZm9udC13b3JrU2FucyB0ZXh0LXhsIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1iYXNlIGZvbnQtc2VtaWJvbGQgdy1mdWxsIGZvY3VzOmJvcmRlci1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLCAvLyBSZW1vdmUgcGFkZGluZyB0byBlbnN1cmUgYWxpZ25tZW50XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgLy8gQ2VudGVyIHRleHQgd2l0aGluIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAvLyBtYWtlIHRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgZHluYW1pYyBiYXNlZCBvbiB0aGUgbGVuZ3RoIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICB3aWR0aDogYCR7dmFsdWUudG9TdHJpbmcoKS5sZW5ndGggKiAxNX1weGBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybWF0TnVtYmVyV2l0aENvbW1hcyh2YWx1ZSB8fCAwKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB1bmZvcm1hdHRlZFZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgYWRkVmFsdWUocGFyc2VJbnQodW5mb3JtYXR0ZWRWYWx1ZSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcC00IGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17aW5jcmVtZW50fVxuICAgICAgPlxuICAgICAgICA8RmlQbHVzIGNvbG9yPVwiIzA0NTA2ZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vVGV4dCBpbnB1dCBmaWVsZFxuXG50eXBlIFRleHRJbnB1dFByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgbGVhZGluZ0ljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhbHVlPzogYW55O1xuICBoYXNWYWx1ZT86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBhZGRWYWx1ZTogKGU6IGFueSkgPT4gdm9pZDtcbiAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XG4gIHR5cGU/OiBhbnk7XG4gIGhhc0N1cnJlbmN5U3ltYm9sPzogYm9vbGVhbjtcbiAgY2xlYXJJbnB1dD86IGFueTtcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn07XG5leHBvcnQgY29uc3QgVGV4dElucHV0ID0gKHtcbiAgbGFiZWwsXG4gIGxlYWRpbmdJY29uLFxuICB2YWx1ZSxcbiAgaGFzVmFsdWUgPSB0cnVlLFxuICBvbkNsaWNrLFxuICBhZGRWYWx1ZSxcbiAgcGxhY2VIb2xkZXIsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgaGFzQ3VycmVuY3lTeW1ib2wgPSBmYWxzZSxcbiAgY2xlYXJJbnB1dCxcbiAgaXNMb2FkaW5nID0gZmFsc2UsXG59OiBUZXh0SW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVDbGVhcklucHV0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhzIHRyYWNraW5nLXN1YnRpdGxlIG1iLTIgdGV4dC1za2luLWJhc2VgfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyICBwbC0zLjUgdy1zY3JlZW4gJHtcbiAgICAgICAgICAgIGhhc1ZhbHVlXG4gICAgICAgICAgICAgID8gXCJib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tYmFzZSBweS0yXCJcbiAgICAgICAgICAgICAgOiBcInNoYWRvdy1pbnB1dCBweS0zXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1zZWNvbmRhcnlcIiA6IFwidGV4dC1za2luLWlucHV0RGlzYWJsZWRcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlYWRpbmdJY29ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIGZvbnQtcG9wcGlucyB0ZXh0LWJhc2UgdHJhY2tpbmctcHJvZ3Jlc3NfbGFiZWwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPyBcInRleHQtc2tpbi1iYXNlXCIgOiBcInRleHQtc2tpbi1pbnB1dERpc2FibGVkXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNDdXJyZW5jeVN5bWJvbCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteC0xMlwiPntoYXNWYWx1ZSA/IFwi4oKmIFwiIDogXCJcIn08L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtoYXNWYWx1ZSA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNjQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyYH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aGFzVmFsdWUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1za2luLXNlY29uZGFyeSBwLTIgYWJzb2x1dGUgcmlnaHQtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFySW5wdXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGaVggY29sb3I9XCIjNEU2NzgzXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8VGFpbFNwaW5cbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMDU2NDg5XCJcbiAgICAgICAgICAgICAgYXJpYUxhYmVsPVwidGFpbC1zcGluLWxvYWRpbmdcIlxuICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy9UZXh0IGZpZWxkIHdpdGggcG9wdXBcblxudHlwZSBUZXh0SW5wdXRXaXRoUG9wdXBQcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxlYWRpbmdJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xuICB2YWx1ZT86IGFueTtcbiAgaGFzVmFsdWU/OiBib29sZWFuO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgYWRkVmFsdWU6IChlOiBhbnkpID0+IHZvaWQ7XG4gIHBsYWNlSG9sZGVyPzogc3RyaW5nO1xuICB0eXBlPzogYW55O1xuICBoYXNDdXJyZW5jeVN5bWJvbD86IGJvb2xlYW47XG4gIGNsZWFySW5wdXQ/OiBhbnk7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59O1xuZXhwb3J0IGNvbnN0IFRleHRJbnB1dFdpdGhQb3B1cCA9ICh7XG4gIGxhYmVsLFxuICBsZWFkaW5nSWNvbixcbiAgdmFsdWUsXG4gIGhhc1ZhbHVlID0gdHJ1ZSxcbiAgb25DbGljayxcbiAgYWRkVmFsdWUsXG4gIHBsYWNlSG9sZGVyLFxuICB0eXBlID0gXCJ0ZXh0XCIsXG4gIGhhc0N1cnJlbmN5U3ltYm9sID0gZmFsc2UsXG4gIGNsZWFySW5wdXQsXG4gIGlzTG9hZGluZyA9IGZhbHNlLFxufTogVGV4dElucHV0V2l0aFBvcHVwUHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xlYXJJbnB1dCA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xlYXJJbnB1dCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uQ2xpY2s9e2hhc1ZhbHVlID8gKCkgPT4ge30gOiBvbkNsaWNrfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdHJhY2tpbmctc3VidGl0bGUgbWItMiB0ZXh0LXNraW4tYmFzZWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgIHBsLTMuNSB3LXNjcmVlbiAke1xuICAgICAgICAgICAgaGFzVmFsdWVcbiAgICAgICAgICAgICAgPyBcImJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1iYXNlIHB5LTJcIlxuICAgICAgICAgICAgICA6IFwic2hhZG93LWlucHV0IHB5LTNcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBoLTggdy04IGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlID8gXCJ0ZXh0LXNraW4tc2Vjb25kYXJ5XCIgOiBcInRleHQtc2tpbi1pbnB1dERpc2FibGVkXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWFkaW5nSWNvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW1lZGl1bSBmb250LXBvcHBpbnMgdGV4dC1iYXNlIHRyYWNraW5nLXByb2dyZXNzX2xhYmVsIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlID8gXCJ0ZXh0LXNraW4tYmFzZVwiIDogXCJ0ZXh0LXNraW4taW5wdXREaXNhYmxlZFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Lyoge2hhc0N1cnJlbmN5U3ltYm9sID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zbGF0ZS14LTEyXCI+e2hhc1ZhbHVlID8gXCLigqYgXCIgOiBcIlwifTwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgey8qIDxpbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZD17aGFzVmFsdWUgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTY0IG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlcmB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7aGFzQ3VycmVuY3lTeW1ib2wgJiYgaGFzVmFsdWUgPyBcIuKCpiBcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogcGxhY2VIb2xkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aGFzVmFsdWUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1za2luLXNlY29uZGFyeSBwLTIgYWJzb2x1dGUgcmlnaHQtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFySW5wdXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGaVggY29sb3I9XCIjNEU2NzgzXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8VGFpbFNwaW5cbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMDU2NDg5XCJcbiAgICAgICAgICAgICAgYXJpYUxhYmVsPVwidGFpbC1zcGluLWxvYWRpbmdcIlxuICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9NYWluQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSGVhZGVyXCI7XG5pbXBvcnQgeyBGaUJyaWVmY2FzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQWRkTW9udGhseUluY29tZUlucHV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBzYXZlTW9udGhseUluY29tZSBmcm9tIFwiY2xpZW50L2FwaS9tb250aGx5LWluY29tZVwiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgdXNlTW9udGhseUluY29tZVN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvbW9udGhseUluY29tZVwiO1xuXG5jb25zdCBBZGRNb250aGx5SW5jb21lID0gKCkgPT4ge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBcbiAgLy8gU2V0IGluaXRpYWwgaW5jb21lIHRvIDIwMDAwMFxuICBjb25zdCBbZmluYWxBbW91bnQsIHNldEZpbmFsQW1vdW50XSA9IHVzZVN0YXRlKDIwMDAwMCk7XG4gIFxuICBjb25zdCBtb250aGx5SW5jb21lID0gdXNlTW9udGhseUluY29tZVN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG5cbiAgY29uc3Qgc2F2ZUluY29tZSA9ICgpID0+IHtcbiAgICBzYXZlTW9udGhseUluY29tZSh7XG4gICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgYW1vdW50OiBmaW5hbEFtb3VudCxcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmluY29tZTtcbiAgICAgICAgbW9udGhseUluY29tZS5zZXRNb250aGx5SW5jb21lKHJlc3VsdC5pbmNvbWUpO1xuICAgICAgfVxuICAgICAgbmF2aWdhdGUoXCIvY3JlYXRlLXNhdmluZ3MtZ29hbFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB7IGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFtcInNhdmVJbmNvbWVcIl0sICgpID0+IHNhdmVJbmNvbWUsIHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1cnZlZEJnIHB0LTQgYmctbm8tcmVwZWF0IGgtNjQgYmctY292ZXJcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMuNSBwdC02IHBiLTRcIj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICB0aXRsZT1cIldoYXTigJlzIHlvdXIgdGFrZS1ob21lIG1vbnRobHkgaW5jb21lP1wiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEZpQnJpZWZjYXNlIGNvbG9yPVwiIzZGODlBNVwiIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTI0IG14LTMuNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEFkZE1vbnRobHlJbmNvbWVJbnB1dFxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBzZXRGaW5hbEFtb3VudChlKX1cbiAgICAgICAgICAgIHZhbHVlPXtmaW5hbEFtb3VudH1cbiAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaW5hbEFtb3VudChmaW5hbEFtb3VudCArIDEwMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlY3JlbWVudGluZyBiZWxvdyAxMDAwXG4gICAgICAgICAgICAgIGlmIChmaW5hbEFtb3VudCA+IDEwMDApIHtcbiAgICAgICAgICAgICAgICBzZXRGaW5hbEFtb3VudChmaW5hbEFtb3VudCAtIDEwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTIgcmlnaHQtMCBsZWZ0LTAgcHgtMy41XCI+XG4gICAgICAgIHsvKiBEaXNhYmxlIHRoZSBidXR0b24gaWYgZmluYWxBbW91bnQgaXMgMCAqL31cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICB0aXRsZT1cIkNvbnRpbnVlXCJcbiAgICAgICAgICBjbGljaz17KCkgPT4gcmVmZXRjaCgpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2ZpbmFsQW1vdW50ID09PSAwfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRNb250aGx5SW5jb21lOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
