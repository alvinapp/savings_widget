"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_settings_Settings_tsx"],
  {
    /***/ "./src/client/api/accounts.ts":
      /*!************************************!*\
  !*** ./src/client/api/accounts.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getCheckingAccounts: () =>
            /* binding */ getCheckingAccounts,
          /* harmony export */ getMyAccounts: () => /* binding */ getMyAccounts,
          /* harmony export */ getSavingsAccounts: () =>
            /* binding */ getSavingsAccounts,
          /* harmony export */ linkBankAccount: () =>
            /* binding */ linkBankAccount,
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

        const linkBankAccount = ({ configuration, data }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.postData)({
                endpoint: `/bank_accounts/goal_bank_accounts/create`,
                token: configuration.token,
                data: data,
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
        //Get a list of bank accounts
        const getBankAccounts = (configuration) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: "/bank_accounts/",
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
        //Get list of checking accounts
        const getCheckingAccounts = (configuration) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: "/bank_accounts/checking_accounts",
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
        const getSavingsAccounts = (configuration) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: "/bank_accounts/savings_accounts",
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
        //get my total accounts
        const getMyAccounts = (configuration) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              client_api_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: "/bank_accounts/my_acounts",
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
          getBankAccounts;

        /***/
      },

    /***/ "./src/client/api/savings-triggers.ts":
      /*!********************************************!*\
  !*** ./src/client/api/savings-triggers.ts ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ fetchAllTriggers: () =>
            /* binding */ fetchAllTriggers,
          /* harmony export */ fetchGoalTriggers: () =>
            /* binding */ fetchGoalTriggers,
          /* harmony export */ saveTrigger: () => /* binding */ saveTrigger,
          /* harmony export */
        });
        /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
        /* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js"
          );
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

        const saveTrigger = ({ configuration, data }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = (0, _api__WEBPACK_IMPORTED_MODULE_0__.postData)({
                endpoint: `/savings_trigger_endpoints/`,
                token: configuration.token,
                data: data,
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
        const fetchGoalTriggers = ({ configuration, goalId }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              _api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/savings_trigger_endpoints/goal/${goalId}`,
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
        const fetchAllTriggers = ({ configuration }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0,
              _api__WEBPACK_IMPORTED_MODULE_0__.fetchData)({
                endpoint: `/savings_trigger_endpoints`,
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

        /***/
      },

    /***/ "./src/client/pages/components/settings/SettingsCard.tsx":
      /*!***************************************************************!*\
  !*** ./src/client/pages/components/settings/SettingsCard.tsx ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SettingsCard: () => /* binding */ SettingsCard,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );

        const SettingsCard = ({
          iconBackground,
          leading,
          trailing,
          title,
          subtitle,
          iconColor,
          trailingColor,
          onClick,
        }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              {
                className:
                  "shadow-card flex flex-row items-center pt-4.5 pb-3.5 pr-4 pl-3 rounded-lg relative",
                onClick: onClick,
              },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-col items-center mr-3" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className: `h-10 w-10 rounded-full flex items-center justify-center ${iconBackground} ${iconColor}`,
                            },
                            { children: leading }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-col" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "flex flex-row" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                "div",
                                Object.assign(
                                  { className: "flex flex-col" },
                                  {
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        "div",
                                        Object.assign(
                                          {
                                            className:
                                              " font-custom font-medium text-tiny text-skin-base tracking-listtile_subtitle",
                                          },
                                          { children: title }
                                        )
                                      ),
                                      subtitle
                                        ? (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            "div",
                                            Object.assign(
                                              {
                                                className:
                                                  " font-custom font-medium text-xs text-skin-subtitle tracking-listtile_subtitle",
                                              },
                                              { children: subtitle }
                                            )
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
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute right-2 top-1/3" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: `${trailingColor}` },
                            { children: trailing }
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

    /***/ "./src/client/pages/settings/Settings.tsx":
      /*!************************************************!*\
  !*** ./src/client/pages/settings/Settings.tsx ***!
  \************************************************/
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
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var client_store_userStore__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/userStore */ "./src/client/store/userStore.ts"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx"
          );
        /* harmony import */ var _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../components/settings/SettingsCard */ "./src/client/pages/components/settings/SettingsCard.tsx"
          );
        /* harmony import */ var client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/savingsTriggerStore */ "./src/client/store/savingsTriggerStore.ts"
          );
        /* harmony import */ var client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/api/savings-triggers */ "./src/client/api/savings-triggers.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! client/store/monthlyIncome */ "./src/client/store/monthlyIncome.ts"
          );
        /* harmony import */ var client_api_accounts__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! client/api/accounts */ "./src/client/api/accounts.ts"
          );
        /* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts"
          );

        const Settings = () => {
          var _a;
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
          const user = (0,
          client_store_userStore__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (state) => state.user
          );
          const goalStore = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__["default"])(
            (state) => state
          );
          const savingsTriggerStore = (0,
          client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_5__[
            "default"
          ])((state) => state);
          const accountSavingsStore = (0,
          client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ])((state) => state);
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_7__.useConfigurationStore)(
            (state) => state.configuration
          );
          const currencySymbol = "₦";
          const { isFetching: fetchingTriggers } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
            "goal-triggers",
            () =>
              (0,
              client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_8__.fetchAllTriggers)(
                {
                  configuration: configuration,
                }
              ).then((result) => {
                if (result) {
                  savingsTriggerStore.setAllSavingsTriggers(result);
                }
              }),
            { refetchOnWindowFocus: false }
          );
          const { isFetching: fetchingMyAccounts } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
            "my-accounts",
            () =>
              (0,
              client_api_accounts__WEBPACK_IMPORTED_MODULE_9__.getMyAccounts)(
                configuration
              ).then((result) => {
                if (result) {
                  accountSavingsStore.setMyAccountsCount(
                    result.total_linked_accounts
                  );
                }
              }),
            { refetchOnWindowFocus: false }
          );
          const monthlyIncomeStore = (0,
          client_store_monthlyIncome__WEBPACK_IMPORTED_MODULE_10__["default"])(
            (state) => state
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "pt-6 flex flex-col h-screen w-screen" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_NavBar__WEBPACK_IMPORTED_MODULE_11__["default"],
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "div",
                        Object.assign(
                          {
                            className:
                              "flex flex-row items-center justify-between mr-3.5",
                          },
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  { className: "flex flex-col" },
                                  {
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_BackButton__WEBPACK_IMPORTED_MODULE_12__[
                                        "default"
                                      ],
                                      {
                                        background: "bg-skin-base",
                                        onClick: () => navigate(-1),
                                      }
                                    ),
                                  }
                                )
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  { className: "flex flex-col" },
                                  {
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_13__[
                                        "default"
                                      ],
                                      { title: "Settings" }
                                    ),
                                  }
                                )
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  { className: "flex flex-col" },
                                  {
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      Object.assign(
                                        { className: "" },
                                        {
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            "div",
                                            {
                                              className:
                                                "rounded-full h-10 w-10",
                                            }
                                          ),
                                        }
                                      )
                                    ),
                                  }
                                )
                              ),
                            ],
                          }
                        )
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      { className: "mt-6 mx-3.5" },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "font-custom font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle",
                              },
                              { children: "Finance" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                            {
                              title: "Monthly income",
                              subtitle: `${currencySymbol} ${
                                (_a = user.income) !== null && _a !== void 0
                                  ? _a
                                  : monthlyIncomeStore.monthlyIncome
                              }`,
                              leading: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiBriefcase,
                                {}
                              ),
                              iconBackground: "bg-skin-iconPrimary",
                              iconColor: "text-skin-successTertiary",
                              trailing: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                {}
                              ),
                              onClick: () =>
                                navigate("/settings-monthly-income"),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-2" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                                  {
                                    title: "Accounts",
                                    subtitle: `${
                                      accountSavingsStore.myAccountsCount
                                    } ${
                                      accountSavingsStore.myAccountsCount === 1
                                        ? "account"
                                        : "accounts"
                                    }`,
                                    leading: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiBriefcase,
                                      {}
                                    ),
                                    iconBackground: "bg-skin-iconPrimary",
                                    iconColor: "text-skin-successTertiary",
                                    trailing: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                      {}
                                    ),
                                  }
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      { className: "mt-6 mx-3.5" },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "font-custom font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle",
                              },
                              { children: "Savings preference" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                            {
                              title: "Goals",
                              subtitle: `${
                                goalStore.confirmedGoals.length > 0
                                  ? goalStore.confirmedGoals.length
                                  : 0
                              } ${
                                goalStore.confirmedGoals.length === 1
                                  ? "goal"
                                  : "goals"
                              }`,
                              leading: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiFlag,
                                {}
                              ),
                              iconBackground: "bg-skin-iconSecondary",
                              iconColor: "text-skin-iconSecondaryy",
                              trailing: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                {}
                              ),
                              onClick: () => navigate("/goal-settings"),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-2" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                                  {
                                    title: "Savings triggers",
                                    subtitle: `${
                                      savingsTriggerStore.allSavingsTriggers
                                        .length > 0
                                        ? savingsTriggerStore.allSavingsTriggers
                                            .length
                                        : 0
                                    } active`,
                                    leading: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiTrendingUp,
                                      {}
                                    ),
                                    iconBackground: "bg-skin-iconSecondary",
                                    iconColor: "text-skin-iconSecondary",
                                    trailing: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                      {}
                                    ),
                                    onClick: () =>
                                      navigate("/savings-triggers-settings"),
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-2" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                                  {
                                    title: "Notifications",
                                    leading: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiBell,
                                      {}
                                    ),
                                    iconBackground: "bg-skin-iconSecondary",
                                    iconColor: "text-skin-iconSecondary",
                                    trailing: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                      {}
                                    ),
                                    onClick: () =>
                                      navigate("/notification-settings"),
                                  }
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      { className: "mt-6 mx-3.5" },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "font-custom font-semibold tracking-tab_text text-tiny mb-3 text-skin-subtitle",
                              },
                              { children: "More" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                            {
                              title: "Terms of use",
                              leading: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiFileText,
                                {}
                              ),
                              iconBackground: "bg-skin-iconTertiary",
                              iconColor: "text-skin-iconTertiary",
                              trailing: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                {}
                              ),
                              onClick: () => navigate("/terms-of-use"),
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-2 mb-8" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_settings_SettingsCard__WEBPACK_IMPORTED_MODULE_14__.SettingsCard,
                                  {
                                    title: "Privacy policy",
                                    leading: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiFileText,
                                      {}
                                    ),
                                    iconBackground: "bg-skin-iconTertiary",
                                    iconColor: "text-skin-iconTertiary",
                                    trailing: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiChevronRight,
                                      {}
                                    ),
                                    onClick: () => navigate("/terms-of-use"),
                                  }
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          Settings;

        /***/
      },

    /***/ "./src/client/store/savingsTriggerStore.ts":
      /*!*************************************************!*\
  !*** ./src/client/store/savingsTriggerStore.ts ***!
  \*************************************************/
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
        /* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! zustand */ "./node_modules/zustand/esm/index.mjs"
          );

        const useSavingsTriggerStore = (0,
        zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
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
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          useSavingsTriggerStore;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zZXR0aW5nc19TZXR0aW5nc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUdXO0FBRTlDLE1BQU0sZUFBZSxHQUFHLENBQU8sRUFDcEMsYUFBYSxFQUNiLElBQUksR0FJTCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSx3REFBUSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBQ0YsNkJBQTZCO0FBQzdCLE1BQU0sZUFBZSxHQUFHLENBQU8sYUFBc0IsRUFBRSxFQUFFO0lBQ3ZELElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHlEQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBQ0YsK0JBQStCO0FBRXhCLE1BQU0sbUJBQW1CLEdBQUcsQ0FBTyxhQUFzQixFQUFFLEVBQUU7SUFDbEUsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0seURBQVMsQ0FBQztZQUMxQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFFSyxNQUFNLGtCQUFrQixHQUFHLENBQU8sYUFBc0IsRUFBRSxFQUFFO0lBQ2pFLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHlEQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBRUYsdUJBQXVCO0FBQ2hCLE1BQU0sYUFBYSxHQUFHLENBQU8sYUFBc0IsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLHlEQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBRUYsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZhO0FBQ0Y7QUFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBTyxFQUNoQyxhQUFhLEVBQ2IsSUFBSSxHQUlMLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyw4Q0FBUSxDQUFDO1lBQ25CLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFPLEVBQ3RDLGFBQWEsRUFDYixNQUFNLEdBSVAsRUFBRSxFQUFFO0lBQ0gsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sK0NBQVMsQ0FBQztZQUMxQixRQUFRLEVBQUUsbUNBQW1DLE1BQU0sRUFBRTtZQUNyRCxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDO0FBQ0ssTUFBTSxnQkFBZ0IsR0FBRyxDQUFPLEVBQ3JDLGFBQWEsR0FHZCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSwrQ0FBUyxDQUFDO1lBQzFCLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFBQyxPQUFPLE1BQVcsRUFBRTtRQUNwQiw2REFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREssTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUMzQixjQUFjLEVBQ2QsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxhQUFhLEVBQ2IsT0FBTyxFQUNVLEVBQUUsRUFBRTtJQUNyQixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLG9GQUFvRixFQUFDLE9BQU8sRUFBRSxPQUFPLGlCQUNsSCw4RUFBSyxTQUFTLEVBQUMsaUNBQWlDLGdCQUM5Qyw4RUFDRSxTQUFTLEVBQUUsMkRBQTJELGNBQWMsSUFBSSxTQUFTLEVBQUUsZ0JBRWxHLE9BQU8sSUFDSixJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLDhFQUFLLFNBQVMsRUFBQyxlQUFlLGdCQUM1QiwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsOEVBQUssU0FBUyxFQUFDLCtFQUErRSxnQkFDM0YsS0FBSyxJQUNGLEVBQ0wsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNWLDhFQUFLLFNBQVMsRUFBQyxpRkFBaUYsZ0JBQzdGLFFBQVEsSUFDTCxDQUNQLENBQUMsQ0FBQyxDQUFDLENBQ0YsaUVBQVcsQ0FDWixLQUNHLElBQ0YsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQywwQkFBMEIsZ0JBQ3ZDLDhFQUFLLFNBQVMsRUFBRSxHQUFHLGFBQWEsRUFBRSxnQkFBRyxRQUFRLElBQU8sSUFDaEQsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRnRDtBQUNBO0FBUzFCO0FBQ3VCO0FBQ0c7QUFDUjtBQUNVO0FBQ2U7QUFDRztBQUNQO0FBQ3hCO0FBQ3FDO0FBQ2I7QUFDWDtBQUNZO0FBRWhFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTs7SUFDcEIsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sSUFBSSxHQUFHLGtFQUFZLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxNQUFNLFNBQVMsR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxNQUFNLG1CQUFtQixHQUFHLDRFQUFzQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxNQUFNLG1CQUFtQixHQUFHLHlFQUFtQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RSxNQUFNLGFBQWEsR0FBRyxpRkFBcUIsQ0FDekMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7SUFDYixNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7SUFDM0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLHFEQUFRLENBQy9DLGVBQWUsRUFDZixHQUFHLEVBQUUsQ0FDSCw2RUFBZ0IsQ0FBQztRQUNmLGFBQWEsRUFBRSxhQUFhO0tBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqQixJQUFJLE1BQU0sRUFBRTtZQUNWLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQyxDQUFDLEVBQ0osRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FDaEMsQ0FBQztJQUVGLE1BQU0sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxxREFBUSxDQUNqRCxhQUFhLEVBQ2IsR0FBRyxFQUFFLENBQ0gsa0VBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMzQyxJQUFJLE1BQU0sRUFBRTtZQUNWLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQyxDQUFDLEVBQ0osRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FDaEMsQ0FBQztJQUNGLE1BQU0sa0JBQWtCLEdBQUcsdUVBQXFCLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhFLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsc0NBQXNDLGlCQUNuRCx1REFBQywyREFBTSxJQUNMLFFBQVEsRUFDTiwrRUFBSyxTQUFTLEVBQUMsbURBQW1ELGlCQUNoRSw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsdURBQUMsK0RBQVUsSUFDVCxVQUFVLEVBQUMsY0FBYyxFQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQzNCLElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsdURBQUMsZ0VBQVcsSUFBQyxLQUFLLEVBQUMsVUFBVSxHQUFHLElBQzVCLEVBQ04sOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLDhFQUFLLFNBQVMsRUFBQyxFQUFFLGdCQUNmLGdFQUFLLFNBQVMsRUFBQyx3QkFBd0IsR0FBTyxJQUMxQyxJQUNGLEtBQ0YsR0FFUixFQUNGLCtFQUFLLFNBQVMsRUFBQyxhQUFhLGlCQUMxQiw4RUFBSyxTQUFTLEVBQUMsaUZBQWlGLDZCQUUxRixFQUNOLHVEQUFDLDRFQUFZLElBQ1gsS0FBSyxFQUFDLGdCQUFnQixFQUN0QixRQUFRLEVBQUUsR0FBRyxjQUFjLElBQ3pCLFVBQUksQ0FBQyxNQUFNLG1DQUFJLGtCQUFrQixDQUFDLGFBQ3BDLEVBQUUsRUFDRixPQUFPLEVBQUUsdURBQUMsd0RBQVcsS0FBRyxFQUN4QixjQUFjLEVBQUUscUJBQXFCLEVBQ3JDLFNBQVMsRUFBQywyQkFBMkIsRUFDckMsUUFBUSxFQUFFLHVEQUFDLDJEQUFjLEtBQUcsRUFDNUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxHQUNuRCxFQUNGLDhFQUFLLFNBQVMsRUFBQyxNQUFNLGdCQUNuQix1REFBQyw0RUFBWSxJQUNYLEtBQUssRUFBQyxVQUFVLEVBQ2hCLFFBQVEsRUFBRSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsSUFDOUMsbUJBQW1CLENBQUMsZUFBZSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUMxRCxFQUFFLEVBQ0YsT0FBTyxFQUFFLHVEQUFDLHdEQUFXLEtBQUcsRUFDeEIsY0FBYyxFQUFFLHFCQUFxQixFQUNyQyxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLFFBQVEsRUFBRSx1REFBQywyREFBYyxLQUFHLEdBQzVCLElBQ0UsS0FDRixFQUNOLCtFQUFLLFNBQVMsRUFBQyxhQUFhLGlCQUMxQiw4RUFBSyxTQUFTLEVBQUMsaUZBQWlGLHdDQUUxRixFQUNOLHVEQUFDLDRFQUFZLElBQ1gsS0FBSyxFQUFDLE9BQU8sRUFDYixRQUFRLEVBQUUsR0FDUixTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNOzRCQUNqQyxDQUFDLENBQUMsQ0FDTixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDOUQsT0FBTyxFQUFFLHVEQUFDLG1EQUFNLEtBQUcsRUFDbkIsY0FBYyxFQUFFLHVCQUF1QixFQUN2QyxTQUFTLEVBQUMsMEJBQTBCLEVBQ3BDLFFBQVEsRUFBRSx1REFBQywyREFBYyxLQUFHLEVBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FDekMsRUFDRiw4RUFBSyxTQUFTLEVBQUMsTUFBTSxnQkFDbkIsdURBQUMsNEVBQVksSUFDWCxLQUFLLEVBQUMsa0JBQWtCLEVBQ3hCLFFBQVEsRUFBRSxHQUNSLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDO2dDQUMvQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTTtnQ0FDL0MsQ0FBQyxDQUFDLENBQ04sU0FBUyxFQUNULE9BQU8sRUFBRSx1REFBQyx5REFBWSxLQUFHLEVBQ3pCLGNBQWMsRUFBRSx1QkFBdUIsRUFDdkMsU0FBUyxFQUFDLHlCQUF5QixFQUNuQyxRQUFRLEVBQUUsdURBQUMsMkRBQWMsS0FBRyxFQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLEdBQ3JELElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsTUFBTSxnQkFDbkIsdURBQUMsNEVBQVksSUFDWCxLQUFLLEVBQUMsZUFBZSxFQUNyQixPQUFPLEVBQUUsdURBQUMsbURBQU0sS0FBRyxFQUNuQixjQUFjLEVBQUUsdUJBQXVCLEVBQ3ZDLFNBQVMsRUFBQyx5QkFBeUIsRUFDbkMsUUFBUSxFQUFFLHVEQUFDLDJEQUFjLEtBQUcsRUFDNUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUNqRCxJQUNFLEtBQ0YsRUFDTiwrRUFBSyxTQUFTLEVBQUMsYUFBYSxpQkFDMUIsOEVBQUssU0FBUyxFQUFDLGlGQUFpRiwwQkFFMUYsRUFDTix1REFBQyw0RUFBWSxJQUNYLEtBQUssRUFBQyxjQUFjLEVBQ3BCLE9BQU8sRUFBRSx1REFBQyx1REFBVSxLQUFHLEVBQ3ZCLGNBQWMsRUFBRSxzQkFBc0IsRUFDdEMsU0FBUyxFQUFDLHdCQUF3QixFQUNsQyxRQUFRLEVBQUUsdURBQUMsMkRBQWMsS0FBRyxFQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUN4QyxFQUNGLDhFQUFLLFNBQVMsRUFBQyxXQUFXLGdCQUN4Qix1REFBQyw0RUFBWSxJQUNYLEtBQUssRUFBQyxnQkFBZ0IsRUFDdEIsT0FBTyxFQUFFLHVEQUFDLHVEQUFVLEtBQUcsRUFDdkIsY0FBYyxFQUFFLHNCQUFzQixFQUN0QyxTQUFTLEVBQUMsd0JBQXdCLEVBQ2xDLFFBQVEsRUFBRSx1REFBQywyREFBYyxLQUFHLEVBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQ3hDLElBQ0UsS0FDRixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMSztBQUk3QixNQUFNLHNCQUFzQixHQUFHLG1EQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsVUFBVSxFQUFFLENBQUM7SUFDYixhQUFhLEVBQUUsZUFBZTtJQUM5QixPQUFPLEVBQUUsQ0FBQztJQUNWLGlCQUFpQixFQUFFO1FBQ2pCLGVBQWU7UUFDZixXQUFXO1FBQ1gsVUFBVTtRQUNWLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGFBQWE7UUFDYixlQUFlO1FBQ2YsUUFBUTtRQUNSLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFdBQVc7S0FDWjtJQUNELGtCQUFrQixFQUFFLEVBQUU7SUFDdEIscUJBQXFCLEVBQUUsQ0FBQyxRQUFhLEVBQUUsRUFBRTtRQUN2QyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBRztnQkFDZCxrQkFBa0IsRUFBRSxRQUFRO2FBQzdCLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxhQUFhLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUMvQixPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBRztnQkFDZCxVQUFVLEVBQUUsS0FBSzthQUNsQixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsZUFBZSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDaEMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsYUFBYSxFQUFFLElBQUk7YUFDcEIsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLE9BQU8sRUFBRSxFQUFFO2FBQ1osQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUosaUVBQWUsc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvYXBpL2FjY291bnRzLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9hcGkvc2F2aW5ncy10cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9zZXR0aW5ncy9TZXR0aW5nc0NhcmQudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3N0b3JlL3NhdmluZ3NUcmlnZ2VyU3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcblxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhLCBwb3N0RGF0YSB9IGZyb20gXCJjbGllbnQvYXBpL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgbGlua0JhbmtBY2NvdW50ID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZGF0YSxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgZGF0YTogYW55O1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBgL2JhbmtfYWNjb3VudHMvZ29hbF9iYW5rX2FjY291bnRzL2NyZWF0ZWAsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcbi8vR2V0IGEgbGlzdCBvZiBiYW5rIGFjY291bnRzXG5jb25zdCBnZXRCYW5rQWNjb3VudHMgPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvYmFua19hY2NvdW50cy9cIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG4vL0dldCBsaXN0IG9mIGNoZWNraW5nIGFjY291bnRzXG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja2luZ0FjY291bnRzID0gYXN5bmMgKGNvbmZpZ3VyYXRpb246IElDb25maWcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IFwiL2JhbmtfYWNjb3VudHMvY2hlY2tpbmdfYWNjb3VudHNcIixcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTYXZpbmdzQWNjb3VudHMgPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvYmFua19hY2NvdW50cy9zYXZpbmdzX2FjY291bnRzXCIsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuXG4vL2dldCBteSB0b3RhbCBhY2NvdW50c1xuZXhwb3J0IGNvbnN0IGdldE15QWNjb3VudHMgPSBhc3luYyAoY29uZmlndXJhdGlvbjogSUNvbmZpZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogXCIvYmFua19hY2NvdW50cy9teV9hY291bnRzXCIsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRCYW5rQWNjb3VudHM7XG4iLCJpbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEsIHBvc3REYXRhIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IHNhdmVUcmlnZ2VyID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZGF0YSxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgZGF0YT86IGFueTtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBwb3N0RGF0YSh7XG4gICAgICBlbmRwb2ludDogYC9zYXZpbmdzX3RyaWdnZXJfZW5kcG9pbnRzL2AsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR29hbFRyaWdnZXJzID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZ29hbElkLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBnb2FsSWQ6IG51bWJlcjtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGAvc2F2aW5nc190cmlnZ2VyX2VuZHBvaW50cy9nb2FsLyR7Z29hbElkfWAsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IGZldGNoQWxsVHJpZ2dlcnMgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogYC9zYXZpbmdzX3RyaWdnZXJfZW5kcG9pbnRzYCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG50eXBlIFNldHRpbmdDYXJkUHJvcHMgPSB7XG4gIGljb25CYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBpY29uQ29sb3I/OiBzdHJpbmc7XG4gIGxlYWRpbmc/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRyYWlsaW5nPzogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIHRyYWlsaW5nQ29sb3I/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBTZXR0aW5nc0NhcmQgPSAoe1xuICBpY29uQmFja2dyb3VuZCxcbiAgbGVhZGluZyxcbiAgdHJhaWxpbmcsXG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgaWNvbkNvbG9yLFxuICB0cmFpbGluZ0NvbG9yLFxuICBvbkNsaWNrXG59OiBTZXR0aW5nQ2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwdC00LjUgcGItMy41IHByLTQgcGwtMyByb3VuZGVkLWxnIHJlbGF0aXZlXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1yLTNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtpY29uQmFja2dyb3VuZH0gJHtpY29uQ29sb3J9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsZWFkaW5nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQtdGlueSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy1saXN0dGlsZV9zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzdWJ0aXRsZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIHRvcC0xLzNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RyYWlsaW5nQ29sb3J9YH0+e3RyYWlsaW5nfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxTdG9yZVwiO1xuaW1wb3J0IHVzZVVzZXJTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL3VzZXJTdG9yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRmlCZWxsLFxuICBGaUJyaWVmY2FzZSxcbiAgRmlDaGV2cm9uUmlnaHQsXG4gIEZpRmlsZVRleHQsXG4gIEZpRmxhZyxcbiAgRmlUcmVuZGluZ1VwLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcbmltcG9ydCB7IFNldHRpbmdzQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NldHRpbmdzL1NldHRpbmdzQ2FyZFwiO1xuaW1wb3J0IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9zYXZpbmdzVHJpZ2dlclN0b3JlXCI7XG5pbXBvcnQgeyBmZXRjaEFsbFRyaWdnZXJzIH0gZnJvbSBcImNsaWVudC9hcGkvc2F2aW5ncy10cmlnZ2Vyc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHVzZU1vbnRobHlJbmNvbWVTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL21vbnRobHlJbmNvbWVcIjtcbmltcG9ydCB7IGdldE15QWNjb3VudHMgfSBmcm9tIFwiY2xpZW50L2FwaS9hY2NvdW50c1wiO1xuaW1wb3J0IHVzZUJhbmtBY2NvdW50U3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9iYW5rQWNjb3VudFN0b3JlXCI7XG5cbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBnb2FsU3RvcmUgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3Qgc2F2aW5nc1RyaWdnZXJTdG9yZSA9IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgYWNjb3VudFNhdmluZ3NTdG9yZSA9IHVzZUJhbmtBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gXCLigqZcIjtcbiAgY29uc3QgeyBpc0ZldGNoaW5nOiBmZXRjaGluZ1RyaWdnZXJzIH0gPSB1c2VRdWVyeShcbiAgICBcImdvYWwtdHJpZ2dlcnNcIixcbiAgICAoKSA9PlxuICAgICAgZmV0Y2hBbGxUcmlnZ2Vycyh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHNhdmluZ3NUcmlnZ2VyU3RvcmUuc2V0QWxsU2F2aW5nc1RyaWdnZXJzKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlIH1cbiAgKTtcblxuICBjb25zdCB7IGlzRmV0Y2hpbmc6IGZldGNoaW5nTXlBY2NvdW50cyB9ID0gdXNlUXVlcnkoXG4gICAgXCJteS1hY2NvdW50c1wiLFxuICAgICgpID0+XG4gICAgICBnZXRNeUFjY291bnRzKGNvbmZpZ3VyYXRpb24pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgYWNjb3VudFNhdmluZ3NTdG9yZS5zZXRNeUFjY291bnRzQ291bnQocmVzdWx0LnRvdGFsX2xpbmtlZF9hY2NvdW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlIH1cbiAgKTtcbiAgY29uc3QgbW9udGhseUluY29tZVN0b3JlID0gdXNlTW9udGhseUluY29tZVN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgPE5hdkJhclxuICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXItMy41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmctc2tpbi1iYXNlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8TmF2QmFyVGl0bGUgdGl0bGU9XCJTZXR0aW5nc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTAgdy0xMFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IG14LTMuNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0cmFja2luZy10YWJfdGV4dCB0ZXh0LXRpbnkgbWItMyB0ZXh0LXNraW4tc3VidGl0bGVcIj5cbiAgICAgICAgICBGaW5hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2V0dGluZ3NDYXJkXG4gICAgICAgICAgdGl0bGU9XCJNb250aGx5IGluY29tZVwiXG4gICAgICAgICAgc3VidGl0bGU9e2Ake2N1cnJlbmN5U3ltYm9sfSAke1xuICAgICAgICAgICAgdXNlci5pbmNvbWUgPz8gbW9udGhseUluY29tZVN0b3JlLm1vbnRobHlJbmNvbWVcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBsZWFkaW5nPXs8RmlCcmllZmNhc2UgLz59XG4gICAgICAgICAgaWNvbkJhY2tncm91bmQ9e1wiYmctc2tpbi1pY29uUHJpbWFyeVwifVxuICAgICAgICAgIGljb25Db2xvcj1cInRleHQtc2tpbi1zdWNjZXNzVGVydGlhcnlcIlxuICAgICAgICAgIHRyYWlsaW5nPXs8RmlDaGV2cm9uUmlnaHQgLz59XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvc2V0dGluZ3MtbW9udGhseS1pbmNvbWVcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxTZXR0aW5nc0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQWNjb3VudHNcIlxuICAgICAgICAgICAgc3VidGl0bGU9e2Ake2FjY291bnRTYXZpbmdzU3RvcmUubXlBY2NvdW50c0NvdW50fSAke1xuICAgICAgICAgICAgICBhY2NvdW50U2F2aW5nc1N0b3JlLm15QWNjb3VudHNDb3VudCA9PT0gMSA/IFwiYWNjb3VudFwiIDogXCJhY2NvdW50c1wiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGxlYWRpbmc9ezxGaUJyaWVmY2FzZSAvPn1cbiAgICAgICAgICAgIGljb25CYWNrZ3JvdW5kPXtcImJnLXNraW4taWNvblByaW1hcnlcIn1cbiAgICAgICAgICAgIGljb25Db2xvcj1cInRleHQtc2tpbi1zdWNjZXNzVGVydGlhcnlcIlxuICAgICAgICAgICAgdHJhaWxpbmc9ezxGaUNoZXZyb25SaWdodCAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IG14LTMuNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0cmFja2luZy10YWJfdGV4dCB0ZXh0LXRpbnkgbWItMyB0ZXh0LXNraW4tc3VidGl0bGVcIj5cbiAgICAgICAgICBTYXZpbmdzIHByZWZlcmVuY2VcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZXR0aW5nc0NhcmRcbiAgICAgICAgICB0aXRsZT1cIkdvYWxzXCJcbiAgICAgICAgICBzdWJ0aXRsZT17YCR7XG4gICAgICAgICAgICBnb2FsU3RvcmUuY29uZmlybWVkR29hbHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGdvYWxTdG9yZS5jb25maXJtZWRHb2Fscy5sZW5ndGhcbiAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgfSAke2dvYWxTdG9yZS5jb25maXJtZWRHb2Fscy5sZW5ndGggPT09IDEgPyBcImdvYWxcIiA6IFwiZ29hbHNcIn1gfVxuICAgICAgICAgIGxlYWRpbmc9ezxGaUZsYWcgLz59XG4gICAgICAgICAgaWNvbkJhY2tncm91bmQ9e1wiYmctc2tpbi1pY29uU2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgaWNvbkNvbG9yPVwidGV4dC1za2luLWljb25TZWNvbmRhcnl5XCJcbiAgICAgICAgICB0cmFpbGluZz17PEZpQ2hldnJvblJpZ2h0IC8+fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL2dvYWwtc2V0dGluZ3NcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxTZXR0aW5nc0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiU2F2aW5ncyB0cmlnZ2Vyc1wiXG4gICAgICAgICAgICBzdWJ0aXRsZT17YCR7XG4gICAgICAgICAgICAgIHNhdmluZ3NUcmlnZ2VyU3RvcmUuYWxsU2F2aW5nc1RyaWdnZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHNhdmluZ3NUcmlnZ2VyU3RvcmUuYWxsU2F2aW5nc1RyaWdnZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgfSBhY3RpdmVgfVxuICAgICAgICAgICAgbGVhZGluZz17PEZpVHJlbmRpbmdVcCAvPn1cbiAgICAgICAgICAgIGljb25CYWNrZ3JvdW5kPXtcImJnLXNraW4taWNvblNlY29uZGFyeVwifVxuICAgICAgICAgICAgaWNvbkNvbG9yPVwidGV4dC1za2luLWljb25TZWNvbmRhcnlcIlxuICAgICAgICAgICAgdHJhaWxpbmc9ezxGaUNoZXZyb25SaWdodCAvPn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL3NhdmluZ3MtdHJpZ2dlcnMtc2V0dGluZ3NcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxTZXR0aW5nc0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgICBsZWFkaW5nPXs8RmlCZWxsIC8+fVxuICAgICAgICAgICAgaWNvbkJhY2tncm91bmQ9e1wiYmctc2tpbi1pY29uU2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICBpY29uQ29sb3I9XCJ0ZXh0LXNraW4taWNvblNlY29uZGFyeVwiXG4gICAgICAgICAgICB0cmFpbGluZz17PEZpQ2hldnJvblJpZ2h0IC8+fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgbXgtMy41XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRyYWNraW5nLXRhYl90ZXh0IHRleHQtdGlueSBtYi0zIHRleHQtc2tpbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgIE1vcmVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZXR0aW5nc0NhcmRcbiAgICAgICAgICB0aXRsZT1cIlRlcm1zIG9mIHVzZVwiXG4gICAgICAgICAgbGVhZGluZz17PEZpRmlsZVRleHQgLz59XG4gICAgICAgICAgaWNvbkJhY2tncm91bmQ9e1wiYmctc2tpbi1pY29uVGVydGlhcnlcIn1cbiAgICAgICAgICBpY29uQ29sb3I9XCJ0ZXh0LXNraW4taWNvblRlcnRpYXJ5XCJcbiAgICAgICAgICB0cmFpbGluZz17PEZpQ2hldnJvblJpZ2h0IC8+fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL3Rlcm1zLW9mLXVzZVwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLThcIj5cbiAgICAgICAgICA8U2V0dGluZ3NDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIlByaXZhY3kgcG9saWN5XCJcbiAgICAgICAgICAgIGxlYWRpbmc9ezxGaUZpbGVUZXh0IC8+fVxuICAgICAgICAgICAgaWNvbkJhY2tncm91bmQ9e1wiYmctc2tpbi1pY29uVGVydGlhcnlcIn1cbiAgICAgICAgICAgIGljb25Db2xvcj1cInRleHQtc2tpbi1pY29uVGVydGlhcnlcIlxuICAgICAgICAgICAgdHJhaWxpbmc9ezxGaUNoZXZyb25SaWdodCAvPn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL3Rlcm1zLW9mLXVzZVwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50XCI7XG5cbmNvbnN0IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgcGVyY2VudGFnZTogMSxcbiAgbWVyY2hhbnRfbmFtZTogXCJBbGwgbWVyY2hhbnRzXCIsXG4gIGdvYWxfaWQ6IDAsXG4gIG1lcmNoYW50c19kYXRhc2V0OiBbXG4gICAgXCJBbGwgbWVyY2hhbnRzXCIsXG4gICAgXCJHcm9jZXJpZXNcIixcbiAgICBcIlNob3BwaW5nXCIsXG4gICAgXCJFYXRpbmcgb3V0XCIsXG4gICAgXCJUcmFuc3BvcnRhdGlvblwiLFxuICAgIFwiVXRpbGl0aWVzXCIsXG4gICAgXCJIZWFsdGggY2FyZVwiLFxuICAgIFwiRW50ZXJ0YWlubWVudFwiLFxuICAgIFwiVHJhdmVsXCIsXG4gICAgXCJCaWxscyAmIEZlZXNcIixcbiAgICBcIlBlcnNvbmFsIGNhcmVcIixcbiAgICBcIkhvbWUgaW1wcm92ZW1lbnRcIixcbiAgICBcIkNoYXJpdHlcIixcbiAgICBcIkNhc2ggd2l0aGRyYXdhbHNcIixcbiAgICBcIlJlc3RhdXJhbnRzXCIsXG4gICAgXCJGYXN0IGZvb2RcIixcbiAgXSxcbiAgYWxsU2F2aW5nc1RyaWdnZXJzOiBbXSxcbiAgc2V0QWxsU2F2aW5nc1RyaWdnZXJzOiAodHJpZ2dlcnM6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgYWxsU2F2aW5nc1RyaWdnZXJzOiB0cmlnZ2VycyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgc2V0UGVyY2VudGFnZTogKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IHZhbHVlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZXRNZXJjaGFudE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIG1lcmNoYW50X25hbWU6IG5hbWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIHNldEdvYWxJZDogKGlkOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgIGdvYWxfaWQ6IGlkLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
