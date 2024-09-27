"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_update-goal_UpdateGoal_tsx"],
  {
    /***/ "./src/client/pages/update-goal/UpdateGoal.tsx":
      /*!*****************************************************!*\
  !*** ./src/client/pages/update-goal/UpdateGoal.tsx ***!
  \*****************************************************/
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
        /* harmony import */ var client_assets_images_savings_overlay_svg__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/assets/images/savings/overlay.svg */ "./src/client/assets/images/savings/overlay.svg"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var _components_AddPhotoButton__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/AddPhotoButton */ "./src/client/pages/components/AddPhotoButton.tsx"
          );
        /* harmony import */ var _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/goal-creation/Input */ "./src/client/pages/components/goal-creation/Input.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx"
          );
        /* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts"
          );
        /* harmony import */ var _goal_creation_AddContributionSettings__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../goal-creation/AddContributionSettings */ "./src/client/pages/goal-creation/AddContributionSettings.tsx"
          );
        /* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! client/utils/Formatters */ "./src/client/utils/Formatters.ts"
          );
        /* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts"
          );
        /* harmony import */ var _components_goal_creation_SelectBank__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ../components/goal-creation/SelectBank */ "./src/client/pages/components/goal-creation/SelectBank.tsx"
          );

        const UpdateGoalDetails = () => {
          var _a, _b, _c;
          const goalContributionSettings = (0,
          client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ])((state) => state);
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (state) => state
          );
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)(
            (state) => state.configuration
          );
          const accountStore = (0,
          client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ])((state) => state);
          const { isLoading, refetch: updateGoals } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
            "update-goals",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_7__.updateGoal)({
                configuration: configuration,
                goalId: goal.confirmedGoal.id,
                data: {
                  extern_id: "",
                  name: goal.goalName,
                  title: "",
                  amount: parseFloat(goal.goalAmount),
                  contribute_from: "",
                  is_customized: false,
                },
              })
                .then((result) => {
                  if (result.id) {
                    goal.setContributionSettingsGoalId(result.id);
                    //update bank account
                    // if (accountStore.account) {
                    //   updateGoalBankAccount({
                    //     configuration: configuration,
                    //     data: {
                    //       goal_id: result.id,
                    //       bank_account_id:
                    //         accountStore.savingAccount.savings_account?.id,
                    //     },
                    //   });
                    // }
                  }
                })
                .finally(() => {
                  navigate(-2);
                }),
            {
              refetchOnWindowFocus: false,
              enabled: false,
            }
          );
          const { data: saveImage } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
            "save-goal-image",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_7__.saveGoalImage)({
                configuration: configuration,
                data: {
                  image_url: goal.goalImageUrl,
                },
                goalId: goal.confirmedGoal.id,
              }),
            {
              refetchOnWindowFocus: false,
              enabled: !!goal.confirmedGoal.id,
            }
          );
          const valid =
            !!goal.goalAmount &&
            goal.goalName &&
            accountStore.savingAccount.savings_account;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "h-screen w-screen relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "h-1/2 absolute top-0 left-0 right-0" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            { className: "relative" },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "img",
                                  {
                                    src: goal.goalImageUrl
                                      ? goal.goalImageUrl
                                      : "",
                                    className:
                                      "absolute top-0 right-0 left-0 w-screen h-72",
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "img",
                                  {
                                    src: client_assets_images_savings_overlay_svg__WEBPACK_IMPORTED_MODULE_8__,
                                    className:
                                      "absolute object-cover w-screen h-72",
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "absolute top-28 left-0 right-0 flex flex-col items-center",
                                    },
                                    {
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "div",
                                          Object.assign(
                                            { className: "mb-3" },
                                            {
                                              children: (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                _components_AddPhotoButton__WEBPACK_IMPORTED_MODULE_9__.AddPhotoButton,
                                                {
                                                  onClick: () => {
                                                    // navigate("/image-selection");
                                                  },
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
                                                "font-custom font-medium text-xs text-white tracking-subtitle",
                                            },
                                            {
                                              children:
                                                "Tap to personalize cover photo",
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
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className: "mt-6 absolute top-0 right-0 left-0 px-3.5",
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_NavBar__WEBPACK_IMPORTED_MODULE_10__[
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
                                      _components_BackButton__WEBPACK_IMPORTED_MODULE_11__[
                                        "default"
                                      ],
                                      {
                                        background: "bg-skin-base",
                                        onClick: () => {
                                          // unconfirmedGoals();
                                          navigate(-1);
                                        },
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_CloseButton__WEBPACK_IMPORTED_MODULE_12__[
                                        "default"
                                      ],
                                      {
                                        background: "bg-skin-base",
                                        onClick: () => {
                                          // unconfirmedGoals();
                                          navigate(-1);
                                        },
                                      }
                                    ),
                                  ],
                                }
                              )
                            ),
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mb-6" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__.TextInput,
                                  {
                                    placeHolder: "Add goal name",
                                    label: "Let\u2019s name your goal",
                                    value: goal.goalName ? goal.goalName : "",
                                    leadingIcon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiFlag,
                                      { size: "1.375rem" }
                                    ),
                                    addValue: (e) => goal.setGoalName(e),
                                    clearInput: () => {
                                      goal.setGoalName("");
                                    },
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mb-6" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__.TextInput,
                                  {
                                    hasCurrencySymbol: true,
                                    type: "number",
                                    placeHolder: "Add target amount",
                                    label: "What\u2019s your target amount?",
                                    value: goal.goalAmount
                                      ? goal.goalAmount
                                      : "",
                                    leadingIcon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiTarget,
                                      { size: "1.375rem" }
                                    ),
                                    addValue: (e) => goal.setGoalAmount(e),
                                    clearInput: () => goal.setGoalAmount(""),
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            "div",
                            Object.assign(
                              { className: "mb-6" },
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__.TextInputWithPopup,
                                    {
                                      type: "button",
                                      placeHolder: "Add contribution",
                                      value: `${
                                        goal === null || goal === void 0
                                          ? void 0
                                          : goal.goalContributionFrequency
                                      }`,
                                      leadingIcon: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiPocket,
                                        { size: "1.375rem" }
                                      ),
                                      hasValue:
                                        !!goal.goalContributionFrequency,
                                      onClick: () =>
                                        goalContributionSettings.openContributionSettingsBottomSheet(
                                          true
                                        ),
                                      addValue: (e) => e,
                                      clearInput: () =>
                                        goal.setGoalFrequency(""),
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.BottomSheet,
                                    {
                                      open: goalContributionSettings.openContributionSettingsSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _goal_creation_AddContributionSettings__WEBPACK_IMPORTED_MODULE_16__.AddContributionSettings,
                                        {
                                          updatingGoal: true,
                                          onClick: () => {
                                            goalContributionSettings.openContributionSettingsBottomSheet(
                                              false
                                            );
                                            goalContributionSettings.setContributionAmount(
                                              0
                                            );
                                          },
                                        }
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                ],
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            "div",
                            Object.assign(
                              { className: "mb-6" },
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_13__.TextInputWithPopup,
                                    {
                                      placeHolder: "Link bank or wallet",
                                      label:
                                        "Link an account and track savings with ease",
                                      value:
                                        Object.keys(accountStore.savingAccount)
                                          .length !== 0
                                          ? `${
                                              accountStore.savingAccount
                                                .savings_account
                                                .savings_account_details
                                                .bank_name === undefined
                                                ? ""
                                                : (_a =
                                                    accountStore.savingAccount
                                                      .savings_account
                                                      .savings_account_details) ===
                                                    null || _a === void 0
                                                ? void 0
                                                : _a.bank_name
                                            },${
                                              accountStore.savingAccount
                                                .savings_account
                                                .savings_account_details
                                                .account_number === undefined
                                                ? ""
                                                : (0,
                                                  client_utils_Formatters__WEBPACK_IMPORTED_MODULE_17__.maskCreditCardNumber)(
                                                    (_b =
                                                      accountStore.savingAccount
                                                        .savings_account
                                                        .savings_account_details) ===
                                                      null || _b === void 0
                                                      ? void 0
                                                      : _b.account_number.toString()
                                                  )
                                            }`
                                          : "",
                                      hasValue:
                                        Object.keys(accountStore.savingAccount)
                                          .length !== 0
                                          ? !!((_c =
                                              accountStore.savingAccount
                                                .savings_account
                                                .savings_account_details) ===
                                              null || _c === void 0
                                              ? void 0
                                              : _c.bank_name)
                                          : false,
                                      leadingIcon: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiPocket,
                                        { size: "1.375rem" }
                                      ),
                                      addValue: (e) => e,
                                      onClick: () => {
                                        // accountStore.openUpdateAccountBottomSheet(true);
                                      },
                                      clearInput: () => {
                                        // accountStore.setSavingAccount({});
                                      },
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.BottomSheet,
                                    {
                                      onDismiss: () =>
                                        accountStore.openUpdateAccountBottomSheet(
                                          false
                                        ),
                                      open: accountStore.updateAccountBottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_goal_creation_SelectBank__WEBPACK_IMPORTED_MODULE_18__.SelectBank,
                                        { updateBank: true }
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                ],
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_MainButton__WEBPACK_IMPORTED_MODULE_19__[
                              "default"
                            ],
                            {
                              title: "Save changes",
                              click: () => updateGoals(),
                              loading: isLoading,
                              isDisabled: !valid,
                            }
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
          UpdateGoalDetails;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc191cGRhdGUtZ29hbF9VcGRhdGVHb2FsX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytEO0FBQ3JCO0FBQ1E7QUFDRTtBQUNVO0FBSW5CO0FBQytCO0FBQ3hCO0FBQ007QUFDVDtBQUNHO0FBRVg7QUFPZDtBQUNtRDtBQUNjO0FBRVA7QUFDcEI7QUFDQztBQUNJO0FBQ3BFLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFOztJQUM3QixNQUFNLHdCQUF3QixHQUFHLHNGQUFnQyxDQUMvRCxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUN0QixDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsa0VBQVksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakQsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sYUFBYSxHQUFHLGlGQUFxQixDQUN6QyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDekIsQ0FBQztJQUNiLE1BQU0sWUFBWSxHQUFHLHlFQUFtQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxxREFBUSxDQUNsRCxjQUFjLEVBQ2QsR0FBRyxFQUFFLENBQ0gsMkRBQVUsQ0FBQztRQUNULGFBQWEsRUFBRSxhQUFhO1FBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDN0IsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDbkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsZUFBZSxFQUFF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QUNsQixVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQ2xCLEtBQ0UsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy91cGRhdGUtZ29hbC9VcGRhdGVHb2FsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBvdmVybGF5IGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL292ZXJsYXkuc3ZnXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XG5pbXBvcnQgeyBBZGRQaG90b0J1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZFBob3RvQnV0dG9uXCI7XG5pbXBvcnQge1xuICBUZXh0SW5wdXQsXG4gIFRleHRJbnB1dFdpdGhQb3B1cCxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9JbnB1dFwiO1xuaW1wb3J0IHsgRmlGbGFnLCBGaVRhcmdldCwgRmlQb2NrZXQsIEZpVHJlbmRpbmdVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xuaW1wb3J0IHsgQm90dG9tU2hlZXQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nLWJvdHRvbS1zaGVldFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHVzZUdvYWxTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxTdG9yZVwiO1xuaW1wb3J0IHVzZU1vbnRobHlJbmNvbWVTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL21vbnRobHlJbmNvbWVcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQge1xuICBjb25maXJtR29hbCxcbiAgc2F2ZUFHb2FsLFxuICBzYXZlR29hbEltYWdlLFxuICB1cGRhdGVHb2FsLFxuICB1cGRhdGVHb2FsQmFua0FjY291bnQsXG59IGZyb20gXCJjbGllbnQvYXBpL2dvYWxcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBkZWxldGVVbmNvbmZpcm1lZCBmcm9tIFwiY2xpZW50L2FwaS9kZWxldGUtdW5jb25maXJtZWQtZ29hbHNcIjtcbmltcG9ydCB7IEFkZENvbnRyaWJ1dGlvblNldHRpbmdzIH0gZnJvbSBcIi4uL2dvYWwtY3JlYXRpb24vQWRkQ29udHJpYnV0aW9uU2V0dGluZ3NcIjtcbmltcG9ydCB7IG1hc2tDcmVkaXRDYXJkTnVtYmVyIH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgdXNlQmFua0FjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7IFNlbGVjdEJhbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2FsLWNyZWF0aW9uL1NlbGVjdEJhbmtcIjtcbmNvbnN0IFVwZGF0ZUdvYWxEZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3MgPSB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGVcbiAgKTtcbiAgY29uc3QgZ29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGFjY291bnRTdG9yZSA9IHVzZUJhbmtBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHJlZmV0Y2g6IHVwZGF0ZUdvYWxzIH0gPSB1c2VRdWVyeShcbiAgICBcInVwZGF0ZS1nb2Fsc1wiLFxuICAgICgpID0+XG4gICAgICB1cGRhdGVHb2FsKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZ29hbElkOiBnb2FsLmNvbmZpcm1lZEdvYWwuaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBleHRlcm5faWQ6IFwiXCIsXG4gICAgICAgICAgbmFtZTogZ29hbC5nb2FsTmFtZSxcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoZ29hbC5nb2FsQW1vdW50KSxcbiAgICAgICAgICBjb250cmlidXRlX2Zyb206IFwiXCIsXG4gICAgICAgICAgaXNfY3VzdG9taXplZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5pZCkge1xuICAgICAgICAgICAgZ29hbC5zZXRDb250cmlidXRpb25TZXR0aW5nc0dvYWxJZChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgLy91cGRhdGUgYmFuayBhY2NvdW50XG4gICAgICAgICAgICAvLyBpZiAoYWNjb3VudFN0b3JlLmFjY291bnQpIHtcbiAgICAgICAgICAgIC8vICAgdXBkYXRlR29hbEJhbmtBY2NvdW50KHtcbiAgICAgICAgICAgIC8vICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgLy8gICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgICAgIGdvYWxfaWQ6IHJlc3VsdC5pZCxcbiAgICAgICAgICAgIC8vICAgICAgIGJhbmtfYWNjb3VudF9pZDpcbiAgICAgICAgICAgIC8vICAgICAgICAgYWNjb3VudFN0b3JlLnNhdmluZ0FjY291bnQuc2F2aW5nc19hY2NvdW50Py5pZCxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0ZSgtMik7XG4gICAgICAgIH0pLFxuICAgIHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgeyBkYXRhOiBzYXZlSW1hZ2UgfSA9IHVzZVF1ZXJ5KFxuICAgIFwic2F2ZS1nb2FsLWltYWdlXCIsXG4gICAgKCkgPT5cbiAgICAgIHNhdmVHb2FsSW1hZ2Uoe1xuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaW1hZ2VfdXJsOiBnb2FsLmdvYWxJbWFnZVVybCxcbiAgICAgICAgfSxcbiAgICAgICAgZ29hbElkOiBnb2FsLmNvbmZpcm1lZEdvYWwuaWQsXG4gICAgICB9KSxcbiAgICB7XG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICBlbmFibGVkOiAhIWdvYWwuY29uZmlybWVkR29hbC5pZCxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgdmFsaWQgPVxuICAgICEhZ29hbC5nb2FsQW1vdW50ICYmXG4gICAgZ29hbC5nb2FsTmFtZSAmJlxuICAgIGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50LnNhdmluZ3NfYWNjb3VudDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS8yIGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2dvYWwuZ29hbEltYWdlVXJsID8gZ29hbC5nb2FsSW1hZ2VVcmwgOiBcIlwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgdy1zY3JlZW4gaC03MlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nIHNyYz17b3ZlcmxheX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgb2JqZWN0LWNvdmVyIHctc2NyZWVuIGgtNzJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTI4IGxlZnQtMCByaWdodC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgPEFkZFBob3RvQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGUoXCIvaW1hZ2Utc2VsZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQteHMgdGV4dC13aGl0ZSB0cmFja2luZy1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICBUYXAgdG8gcGVyc29uYWxpemUgY292ZXIgcGhvdG9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbGVmdC0wIHB4LTMuNVwiPlxuICAgICAgICA8TmF2QmFyXG4gICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmctc2tpbi1iYXNlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyB1bmNvbmZpcm1lZEdvYWxzKCk7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gdW5jb25maXJtZWRHb2FscygpO1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gcm91bmRlZC10LTN4bCBiZy1za2luLWJhc2UgYWJzb2x1dGUgcmlnaHQtMCBsZWZ0LTAgdG9wLTQ4IGJvdHRvbS0wIHB4LTMuNSBwdC05XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwiQWRkIGdvYWwgbmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxldOKAmXMgbmFtZSB5b3VyIGdvYWxcIlxuICAgICAgICAgICAgdmFsdWU9e2dvYWwuZ29hbE5hbWUgPyBnb2FsLmdvYWxOYW1lIDogXCJcIn1cbiAgICAgICAgICAgIGxlYWRpbmdJY29uPXs8RmlGbGFnIHNpemU9XCIxLjM3NXJlbVwiIC8+fVxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBnb2FsLnNldEdvYWxOYW1lKGUpfVxuICAgICAgICAgICAgY2xlYXJJbnB1dD17KCkgPT4ge1xuICAgICAgICAgICAgICBnb2FsLnNldEdvYWxOYW1lKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgaGFzQ3VycmVuY3lTeW1ib2w9e3RydWV9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwiQWRkIHRhcmdldCBhbW91bnRcIlxuICAgICAgICAgICAgbGFiZWw9XCJXaGF04oCZcyB5b3VyIHRhcmdldCBhbW91bnQ/XCJcbiAgICAgICAgICAgIHZhbHVlPXtnb2FsLmdvYWxBbW91bnQgPyBnb2FsLmdvYWxBbW91bnQgOiBcIlwifVxuICAgICAgICAgICAgbGVhZGluZ0ljb249ezxGaVRhcmdldCBzaXplPVwiMS4zNzVyZW1cIiAvPn1cbiAgICAgICAgICAgIGFkZFZhbHVlPXsoZSkgPT4gZ29hbC5zZXRHb2FsQW1vdW50KGUpfVxuICAgICAgICAgICAgY2xlYXJJbnB1dD17KCkgPT4gZ29hbC5zZXRHb2FsQW1vdW50KFwiXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8VGV4dElucHV0V2l0aFBvcHVwXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwiQWRkIGNvbnRyaWJ1dGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17YCR7Z29hbD8uZ29hbENvbnRyaWJ1dGlvbkZyZXF1ZW5jeX1gfVxuICAgICAgICAgICAgbGVhZGluZ0ljb249ezxGaVBvY2tldCBzaXplPVwiMS4zNzVyZW1cIiAvPn1cbiAgICAgICAgICAgIGhhc1ZhbHVlPXshIWdvYWwuZ29hbENvbnRyaWJ1dGlvbkZyZXF1ZW5jeX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5vcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldCh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBlfVxuICAgICAgICAgICAgY2xlYXJJbnB1dD17KCkgPT4gZ29hbC5zZXRHb2FsRnJlcXVlbmN5KFwiXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvdHRvbVNoZWV0XG4gICAgICAgICAgICBvcGVuPXtnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Mub3BlbkNvbnRyaWJ1dGlvblNldHRpbmdzU2hlZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgICAgPEFkZENvbnRyaWJ1dGlvblNldHRpbmdzXG4gICAgICAgICAgICAgICAgdXBkYXRpbmdHb2FsPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5vcGVuQ29udHJpYnV0aW9uU2V0dGluZ3NCb3R0b21TaGVldChcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBnb2FsQ29udHJpYnV0aW9uU2V0dGluZ3Muc2V0Q29udHJpYnV0aW9uQW1vdW50KDApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0U25hcD17MzAwfVxuICAgICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPFRleHRJbnB1dFdpdGhQb3B1cFxuICAgICAgICAgICAgcGxhY2VIb2xkZXI9XCJMaW5rIGJhbmsgb3Igd2FsbGV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGluayBhbiBhY2NvdW50IGFuZCB0cmFjayBzYXZpbmdzIHdpdGggZWFzZVwiXG4gICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50KS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICA/IGAke1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudC5zYXZpbmdzX2FjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAuc2F2aW5nc19hY2NvdW50X2RldGFpbHMuYmFua19uYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50LnNhdmluZ3NfYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2F2aW5nc19hY2NvdW50X2RldGFpbHM/LmJhbmtfbmFtZVxuICAgICAgICAgICAgICAgICAgfSwke1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudC5zYXZpbmdzX2FjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAuc2F2aW5nc19hY2NvdW50X2RldGFpbHMuYWNjb3VudF9udW1iZXIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIDogbWFza0NyZWRpdENhcmROdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRTdG9yZS5zYXZpbmdBY2NvdW50LnNhdmluZ3NfYWNjb3VudC5zYXZpbmdzX2FjY291bnRfZGV0YWlscz8uYWNjb3VudF9udW1iZXIudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhc1ZhbHVlPXtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWNjb3VudFN0b3JlLnNhdmluZ0FjY291bnQpLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICAgID8gISFhY2NvdW50U3RvcmUuc2F2aW5nQWNjb3VudC5zYXZpbmdzX2FjY291bnRcbiAgICAgICAgICAgICAgICAgICAgLnNhdmluZ3NfYWNjb3VudF9kZXRhaWxzPy5iYW5rX25hbWVcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWFkaW5nSWNvbj17PEZpUG9ja2V0IHNpemU9XCIxLjM3NXJlbVwiIC8+fVxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAvLyBhY2NvdW50U3RvcmUub3BlblVwZGF0ZUFjY291bnRCb3R0b21TaGVldCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGVhcklucHV0PXsoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGFjY291bnRTdG9yZS5zZXRTYXZpbmdBY2NvdW50KHt9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm90dG9tU2hlZXRcbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gYWNjb3VudFN0b3JlLm9wZW5VcGRhdGVBY2NvdW50Qm90dG9tU2hlZXQoZmFsc2UpfVxuICAgICAgICAgICAgb3Blbj17YWNjb3VudFN0b3JlLnVwZGF0ZUFjY291bnRCb3R0b21TaGVldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjQsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49ezxTZWxlY3RCYW5rIHVwZGF0ZUJhbms9e3RydWV9IC8+fVxuICAgICAgICAgICAgZGVmYXVsdFNuYXA9ezMwMH1cbiAgICAgICAgICA+PC9Cb3R0b21TaGVldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFdpdGhQb3B1cFxuICAgICAgICAgICAgcGxhY2VIb2xkZXI9XCJBcHBseSBzYXZpbmdzIHJ1bGVcIlxuICAgICAgICAgICAgaGFzVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgbGFiZWw9XCJCb29zdCB5b3VyIHNhdmluZ3Mgam91cm5leSB3aXRoIHJ1bGVzXCJcbiAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgIGxlYWRpbmdJY29uPXs8RmlUcmVuZGluZ1VwIHNpemU9XCIxLjM3NXJlbVwiIC8+fVxuICAgICAgICAgICAgYWRkVmFsdWU9eyhlKSA9PiBlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICB0aXRsZT1cIlNhdmUgY2hhbmdlc1wiXG4gICAgICAgICAgY2xpY2s9eygpID0+IHVwZGF0ZUdvYWxzKCl9XG4gICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9eyF2YWxpZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUdvYWxEZXRhaWxzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
