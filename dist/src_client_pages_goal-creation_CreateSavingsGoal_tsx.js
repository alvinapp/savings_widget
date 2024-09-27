"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_goal-creation_CreateSavingsGoal_tsx"],
  {
    /***/ "./src/client/pages/components/goal-creation/BuildGoalCard.tsx":
      /*!*********************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/BuildGoalCard.tsx ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ BuildGoalCard: () => /* binding */ BuildGoalCard,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );

        const BuildGoalCard = ({ title, click }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              {
                className:
                  "rounded-lg bg-skin-base flex flex-row shadow-card p-3.5 items-center",
                onClick: click,
              },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    {
                      className:
                        "rounded-full h-10 w-10 bg-skin-secondaryWithOpacity mr-3",
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "font-custom font-semibold text-sm text-skin-primary tracking-tab_text",
                      },
                      { children: title }
                    )
                  ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/goal-creation/CreateGoalCard.tsx":
      /*!**********************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/CreateGoalCard.tsx ***!
  \**********************************************************************/
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

        const CreateGoalCard = ({ goalImage, goalName, onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              {
                className: "rounded-lg shadow-card w-40",
                onClick: onClick,
                style: {
                  width: "100%",
                  height: "100%",
                },
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  Object.assign(
                    { className: "flex flex-col " },
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "h-32" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "img",
                                {
                                  src:
                                    goalImage !== null && goalImage !== void 0
                                      ? goalImage
                                      : "",
                                  className: "h-32 w-40 rounded-t-lg",
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                  },
                                }
                              ),
                            }
                          )
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row px-2.5 py-2 font-custom font-medium text-xs -tracking-tight text-skin-primary",
                            },
                            { children: goalName }
                          )
                        ),
                      ],
                    }
                  )
                ),
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CreateGoalCard;

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

    /***/ "./src/client/pages/goal-creation/CreateSavingsGoal.tsx":
      /*!**************************************************************!*\
  !*** ./src/client/pages/goal-creation/CreateSavingsGoal.tsx ***!
  \**************************************************************/
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
        /* harmony import */ var client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/pages/components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/pages/components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/pages/components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var client_pages_components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! client/pages/components/goal-creation/Header */ "./src/client/pages/components/goal-creation/Header.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_goal_creation_BuildGoalCard__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/goal-creation/BuildGoalCard */ "./src/client/pages/components/goal-creation/BuildGoalCard.tsx"
          );
        /* harmony import */ var client_utils_MockData__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! client/utils/MockData */ "./src/client/utils/MockData.tsx"
          );
        /* harmony import */ var _components_goal_creation_CreateGoalCard__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/goal-creation/CreateGoalCard */ "./src/client/pages/components/goal-creation/CreateGoalCard.tsx"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts"
          );

        const CreateSavingsGoal = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
          const goalStore = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_2__["default"])(
            (state) => state
          );
          const goalContributionSettings = (0,
          client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ])((state) => state);
          const setChosenGoal = goalStore.setGoal;
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)(
            (state) => state.configuration
          );
          const accountStore = (0,
          client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_5__[
            "default"
          ])((state) => state);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              { className: "h-screen w-screen relative" },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  Object.assign(
                    {
                      className: "bg-curvedBg pt-6 bg-no-repeat h-64 bg-cover",
                    },
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          client_pages_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[
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
                                      client_pages_components_BackButton__WEBPACK_IMPORTED_MODULE_7__[
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
                                      client_pages_components_CloseButton__WEBPACK_IMPORTED_MODULE_8__[
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
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "px-3.5 pt-6 pb-4" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                client_pages_components_goal_creation_Header__WEBPACK_IMPORTED_MODULE_9__.Header,
                                {
                                  title: "Create a savings goal.",
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiFlag,
                                    { color: "#6F89A5" }
                                  ),
                                  subtitle:
                                    "Select a popular goal or create your own",
                                }
                              ),
                            }
                          )
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "mt-16 mx-3.5" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_goal_creation_BuildGoalCard__WEBPACK_IMPORTED_MODULE_11__.BuildGoalCard,
                                {
                                  title: "Let's build one together",
                                  click: () => {
                                    goalStore.setGoalImageUrl(
                                      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                                    );
                                    goalStore.setGoalName("");
                                    goalStore.setGoalAmount("");
                                    goalStore.setPercentage(0);
                                    goalStore.setMerchantName("");
                                    accountStore.setSavingAccount({});
                                    setChosenGoal({});
                                    navigate("/add-goal-details");
                                  },
                                }
                              ),
                            }
                          )
                        ),
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            { className: "mx-3.5 mt-6" },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom text-skin-base text-sm font-semibold tracking-title mb-3",
                                    },
                                    {
                                      children:
                                        "Tailored inspirations just for you",
                                    }
                                  )
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "tracking-widest font-custom text-skin-secondary text-xxxs",
                                    },
                                    {
                                      children:
                                        "We'll help you get to whatever your dream is",
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
                            { className: " mt-4.5 mx-3.5" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4",
                                  },
                                  {
                                    children:
                                      client_utils_MockData__WEBPACK_IMPORTED_MODULE_12__.predefinedGoals.map(
                                        (goal, i) => {
                                          return (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            "div",
                                            Object.assign(
                                              { className: "mb-4" },
                                              {
                                                children: (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                  _components_goal_creation_CreateGoalCard__WEBPACK_IMPORTED_MODULE_13__[
                                                    "default"
                                                  ],
                                                  {
                                                    goalImage: goal.imageUrl,
                                                    goalName: goal.name,
                                                    onClick: () => {
                                                      goalStore.setGoalImageUrl(
                                                        goal.imageUrl
                                                      );
                                                      goalStore.setGoalName(
                                                        goal.name
                                                      );
                                                      goalStore.setGoalAmount(
                                                        goal.amount
                                                      );
                                                      goalStore.setPercentage(
                                                        0
                                                      );
                                                      goalStore.setMerchantName(
                                                        ""
                                                      );
                                                      accountStore.setSavingAccount(
                                                        {}
                                                      );
                                                      setChosenGoal(goal);
                                                      navigate(
                                                        "/add-goal-details"
                                                      );
                                                    },
                                                  },
                                                  i
                                                ),
                                              }
                                            )
                                          );
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
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CreateSavingsGoal;

        /***/
      },

    /***/ "./src/client/store/goalContributionSettingsStore.ts":
      /*!***********************************************************!*\
  !*** ./src/client/store/goalContributionSettingsStore.ts ***!
  \***********************************************************/
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

        const useGoalContributionSettingsStore = (0,
        zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
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
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          useGoalContributionSettingsStore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0NyZWF0ZVNhdmluZ3NHb2FsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLTyxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBaUIsRUFBRSxFQUFFO0lBQy9ELE9BQU8sQ0FDTCwrRUFDRSxTQUFTLEVBQUMsc0VBQXNFLEVBQ2hGLE9BQU8sRUFBRSxLQUFLLGlCQUVkLGdFQUFLLFNBQVMsRUFBQywwREFBMEQsR0FBTyxFQUNoRiw4RUFBSyxTQUFTLEVBQUMseUVBQXlFLGdCQUNyRixLQUFLLElBQ0YsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUN0QixTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sR0FDYSxFQUFFLEVBQUU7SUFDeEIsT0FBTyxDQUNMLDhFQUFLLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtZQUNwRSxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2YsZ0JBQ0MsK0VBQUssU0FBUyxFQUFDLGdCQUFnQixpQkFDN0IsOEVBQUssU0FBUyxFQUFDLE1BQU0sZ0JBQ25CLGdFQUFLLEdBQUcsRUFBRSxTQUFTLGFBQVQsU0FBUyxjQUFULFNBQVMsR0FBSSxFQUFFLEVBQUUsU0FBUyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBRTs0QkFDbkUsS0FBSyxFQUFFLE1BQU07NEJBQ2IsTUFBTSxFQUFFLE1BQU07eUJBQ2YsR0FBSSxJQUNELEVBQ04sOEVBQUssU0FBUyxFQUFDLDhGQUE4RixnQkFDMUcsUUFBUSxJQUNMLEtBQ0YsSUFDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNkI7QUFNcEQsTUFBTSxNQUFNLEdBQUcs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O2FBQ25DLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtQ0FBbUMsRUFBRSxDQUFDLGVBQXdCLEVBQUUsRUFBRTtRQUNoRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLDZCQUE2QixFQUFFLGVBQWU7YUFDL0MsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdCQUF3QixFQUFFLENBQUMsYUFBcUIsRUFBRSxFQUFFO1FBQ2xELE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEIsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IscUJBQXFCLEVBQUUsYUFBYTthQUNyQyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixpRUFBZSxnQ0FBZ0MsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vQnVpbGRHb2FsQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9DcmVhdGVHb2FsQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9IZWFkZXIudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLWNyZWF0aW9uL0NyZWF0ZVNhdmluZ3NHb2FsLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBCdWlsZEdvYWxDYXJkID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBCdWlsZEdvYWxDYXJkID0gKHsgdGl0bGUsIGNsaWNrIH06IEJ1aWxkR29hbENhcmQpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXNraW4tYmFzZSBmbGV4IGZsZXgtcm93IHNoYWRvdy1jYXJkIHAtMy41IGl0ZW1zLWNlbnRlclwiXG4gICAgICBvbkNsaWNrPXtjbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eSBtci0zXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtc2tpbi1wcmltYXJ5IHRyYWNraW5nLXRhYl90ZXh0XCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnR5cGUgQ3JlYXRlR29hbENhcmRQcm9wcyA9IHtcbiAgZ29hbEltYWdlPzogc3RyaW5nO1xuICBnb2FsTmFtZT86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuY29uc3QgQ3JlYXRlR29hbENhcmQgPSAoe1xuICBnb2FsSW1hZ2UsXG4gIGdvYWxOYW1lLFxuICBvbkNsaWNrLFxufTogQ3JlYXRlR29hbENhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctY2FyZCB3LTQwXCIgb25DbGljaz17b25DbGlja30gc3R5bGU9e3tcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMzJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Z29hbEltYWdlID8/IFwiXCJ9IGNsYXNzTmFtZT1cImgtMzIgdy00MCByb3VuZGVkLXQtbGdcIiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBweC0yLjUgcHktMiBmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyAtdHJhY2tpbmctdGlnaHQgdGV4dC1za2luLXByaW1hcnlcIj5cbiAgICAgICAgICB7Z29hbE5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlR29hbENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xvdWQgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvY2xvdWQucG5nXCI7XG50eXBlIEhlYWRlclByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIHN1YnRpdGxlIH06IEhlYWRlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMSB3LTExIHJvdW5kZWQtZnVsbCBiZy1za2luLXRlcnRpYXJ5IGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1zZWNvbmRhcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17Y2xvdWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgdGV4dC1za2luLWJhc2UgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpdGxlIG1iLTRcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVzdCBmb250LXBvcHBpbnMgdGV4dC1za2luLXNlY29uZGFyeSB0ZXh0LXh4eHNcIj5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCJjbGllbnQvcGFnZXMvY29tcG9uZW50cy9DbG9zZUJ1dHRvblwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcImNsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSGVhZGVyXCI7XG5pbXBvcnQgeyBGaUZsYWcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IEJ1aWxkR29hbENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0J1aWxkR29hbENhcmRcIjtcbmltcG9ydCB7IHByZWRlZmluZWRHb2FscyB9IGZyb20gXCJjbGllbnQvdXRpbHMvTW9ja0RhdGFcIjtcbmltcG9ydCBHb2FsIGZyb20gXCJjbGllbnQvbW9kZWxzL0dvYWxcIjtcbmltcG9ydCBDcmVhdGVHb2FsQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL0NyZWF0ZUdvYWxDYXJkXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IGRlZmF1bHRGcmVxdWVuY3kgfSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgeyBJQ29uZmlnLCB1c2VDb25maWd1cmF0aW9uU3RvcmUgfSBmcm9tIFwiY2xpZW50L3N0b3JlL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB1c2VCYW5rQWNjb3VudFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvYmFua0FjY291bnRTdG9yZVwiO1xuXG5jb25zdCBDcmVhdGVTYXZpbmdzR29hbCA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBnb2FsU3RvcmUgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzID0gdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlXG4gICk7XG4gIGNvbnN0IHNldENob3NlbkdvYWwgPSBnb2FsU3RvcmUuc2V0R29hbDtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGFjY291bnRTdG9yZSA9IHVzZUJhbmtBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY3VydmVkQmcgcHQtNiBiZy1uby1yZXBlYXQgaC02NCBiZy1jb3ZlclwiPlxuICAgICAgICA8TmF2QmFyXG4gICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMy41IHB0LTYgcGItNFwiPlxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIGEgc2F2aW5ncyBnb2FsLlwiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEZpRmxhZyBjb2xvcj1cIiM2Rjg5QTVcIiAvPn1cbiAgICAgICAgICAgIHN1YnRpdGxlPVwiU2VsZWN0IGEgcG9wdWxhciBnb2FsIG9yIGNyZWF0ZSB5b3VyIG93blwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgbXgtMy41XCI+XG4gICAgICAgICAgPEJ1aWxkR29hbENhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiTGV0J3MgYnVpbGQgb25lIHRvZ2V0aGVyXCJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRHb2FsSW1hZ2VVcmwoXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1OTI1NzgzMTM0OC1mMGNkZDM1OTIzNWY/Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZpdD1tYXgmZm09anBnJml4aWQ9TVh3eGZEQjhNWHhoYkd4OGZIeDhmSHg4ZkEmaXhsaWI9cmItMS4yLjEmcT04MCZ3PTEwODAmdXRtX3NvdXJjZT11bnNwbGFzaF9zb3VyY2UmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249YXBpLWNyZWRpdFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRHb2FsTmFtZShcIlwiKTtcbiAgICAgICAgICAgICAgZ29hbFN0b3JlLnNldEdvYWxBbW91bnQoXCJcIik7XG4gICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRQZXJjZW50YWdlKDApO1xuICAgICAgICAgICAgICBnb2FsU3RvcmUuc2V0TWVyY2hhbnROYW1lKFwiXCIpO1xuICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2V0U2F2aW5nQWNjb3VudCh7fSk7XG4gICAgICAgICAgICAgIHNldENob3NlbkdvYWwoe30pO1xuICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9hZGQtZ29hbC1kZXRhaWxzXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zLjUgbXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LXNraW4tYmFzZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGl0bGUgbWItM1wiPlxuICAgICAgICAgICAgVGFpbG9yZWQgaW5zcGlyYXRpb25zIGp1c3QgZm9yIHlvdVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXN0IGZvbnQtcG9wcGlucyB0ZXh0LXNraW4tc2Vjb25kYXJ5IHRleHQteHh4c1wiPlxuICAgICAgICAgICAgV2UnbGwgaGVscCB5b3UgZ2V0IHRvIHdoYXRldmVyIHlvdXIgZHJlYW0gaXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTQuNSBteC0zLjVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgIHtwcmVkZWZpbmVkR29hbHMubWFwKChnb2FsOiBHb2FsLCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxDcmVhdGVHb2FsQ2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGdvYWxJbWFnZT17Z29hbC5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgZ29hbE5hbWU9e2dvYWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRHb2FsSW1hZ2VVcmwoZ29hbC5pbWFnZVVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgZ29hbFN0b3JlLnNldEdvYWxOYW1lKGdvYWwubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgZ29hbFN0b3JlLnNldEdvYWxBbW91bnQoZ29hbC5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRQZXJjZW50YWdlKDApO1xuICAgICAgICAgICAgICAgICAgICAgIGdvYWxTdG9yZS5zZXRNZXJjaGFudE5hbWUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgYWNjb3VudFN0b3JlLnNldFNhdmluZ0FjY291bnQoe30pO1xuICAgICAgICAgICAgICAgICAgICAgIHNldENob3NlbkdvYWwoZ29hbCk7XG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvYWRkLWdvYWwtZGV0YWlsc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTYXZpbmdzR29hbDtcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUdvYWxNYXR1cml0eURhdGUgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcIi4vZ29hbFN0b3JlXCI7XG5cbmNvbnN0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlID0gY3JlYXRlKChzZXQpID0+ICh7XG4gIGNvbnRyaWJ1dGlvbkFtb3VudDogMCxcbiAgd2Vla0RheVRvQ29udGlidXRlOiBcIlwiLFxuICBtb250aGx5V2VlazogXCJcIixcbiAgd2Vla0RheU9mVGhlTW9udGg6IFwiXCIsXG4gIHN0YXJ0aW5nRnJvbURhdGU6IG5ldyBEYXRlKCksXG4gIG9wZW5Db250cmlidXRpb25TZXR0aW5nc1NoZWV0OiBmYWxzZSxcbiAgY29udHJpYnV0aW9uRnJlcXVlbmN5OiBcIlwiLFxuICBtYXR1cml0eURhdGVUZXh0OiBcIlwiLFxuICB0YWJJbmRleDogMCxcbiAgZ29hbEFtb3VudDogMCxcbiAgY3Jvbl9zdHJpbmc6IFwiXCIsXG4gIHNldENyb25TdHJpbmc6IChjcm9uOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgY3Jvbl9zdHJpbmc6IGNyb24sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0R29hbEFtb3VudDogKGFtb3VudDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGdvYWxBbW91bnQ6IGFtb3VudCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRNYXR1cml0eURhdGVUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG1hdHVyaXR5RGF0ZVRleHQ6IHRleHQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0VGFiSW5kZXg6IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHRhYkluZGV4OiBpbmRleCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRDb250cmlidXRpb25BbW91bnQ6IChhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgY29udHJpYnV0aW9uQW1vdW50OiBhbW91bnQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0V2Vla0RheVRvQ29udHJpYnV0ZTogKGRheU9mVGhlV2VlazogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICB3ZWVrRGF5VG9Db250aWJ1dGU6IGRheU9mVGhlV2VlayxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRNb250aGx5V2VlazogKHdlZWtPZlRoZU1vbnRoOiBhbnkpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG1vbnRobHlXZWVrOiB3ZWVrT2ZUaGVNb250aCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LFxuICBzZXRXZWVrRGF5T2ZUaGVNb250aDogKGRheU9mVGhlV2Vla09mTW9udGg6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXQoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgd2Vla0RheU9mVGhlTW9udGg6IGRheU9mVGhlV2Vla09mTW9udGgsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0U3RhcnRGcm9tRGF0ZTogKHN0YXJ0aW5nRnJvbURhdGU6IERhdGUpID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHN0YXJ0aW5nRnJvbURhdGU6IHN0YXJ0aW5nRnJvbURhdGUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgb3BlbkNvbnRyaWJ1dGlvblNldHRpbmdzQm90dG9tU2hlZXQ6IChvcGVuQm90dG9tU2hlZXQ6IGJvb2xlYW4pID0+IHtcbiAgICByZXR1cm4gc2V0KChzdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG9wZW5Db250cmlidXRpb25TZXR0aW5nc1NoZWV0OiBvcGVuQm90dG9tU2hlZXQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbiAgc2V0Q29udHJpYnV0aW9uRnJlcXVlbmN5OiAoZnJlcXVlbmN5VGV4dDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHNldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBjb250cmlidXRpb25GcmVxdWVuY3k6IGZyZXF1ZW5jeVRleHQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
