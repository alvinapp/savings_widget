"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  [
    "src_client_pages_goal-creation_savings-trigger_CreateGoalSavingsTrigger_tsx",
  ],
  {
    /***/ "./src/client/pages/components/CustomDropDown.tsx":
      /*!********************************************************!*\
  !*** ./src/client/pages/components/CustomDropDown.tsx ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CustomDropDown: () =>
            /* binding */ CustomDropDown,
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

        const CustomDropDown = ({
          dataset,
          icon,
          height,
          onClick,
          exactData,
        }) => {
          const [isOpen, setIsOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
          const ref = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            /**
             * Close dropdown if user clicks outside of component
             */
            const handleClickOutside = (event) => {
              if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
              }
            };
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            // Cleanup the event listener on unmount
            return () => {
              document === null || document === void 0
                ? void 0
                : document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [ref]);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "relative", ref: ref },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "button",
                    Object.assign(
                      {
                        id: "day-dropdown",
                        "aria-expanded": "true",
                        "aria-haspopup": "true",
                        className:
                          "text-skin-base border border-1 border-skin-primary text-base font-custom rounded-3xl px-4 py-2.5 text-center inline-flex items-center",
                        type: "button",
                        onClick: () => setIsOpen(!isOpen),
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "text-skin-neutral text-lg mr-2" },
                              { children: icon }
                            )
                          ),
                          exactData,
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            "div",
                            Object.assign(
                              { className: "text-skin-neutral" },
                              {
                                children: [
                                  " ",
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    "svg",
                                    Object.assign(
                                      {
                                        className: "w-4 h-4 ml-2",
                                        "aria-hidden": "true",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                      {
                                        children: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "path",
                                          {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M19 9l-7 7-7-7",
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
                  ),
                  isOpen && dataset.length > 1
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        Object.assign(
                          {
                            className: `rounded-lg bg-skin-base p-3.5 w-full ${
                              height !== null && height !== void 0
                                ? height
                                : "h-20"
                            } overflow-y-auto shadow-card`,
                          },
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "ul",
                              Object.assign(
                                { className: "" },
                                {
                                  children: dataset.map((data, i) => {
                                    return (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "li",
                                      Object.assign(
                                        {
                                          className:
                                            "text-tiny font-custom font-medium tracking-progress_label block mb-4",
                                          onClick: () => {
                                            if (onClick) {
                                              onClick(data);
                                            }
                                            setIsOpen(false);
                                          },
                                        },
                                        { children: data }
                                      ),
                                      i
                                    );
                                  }),
                                }
                              )
                            ),
                          }
                        )
                      )
                    : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        {}
                      ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/goal-creation/savings-trigger/CreateGoalSavingsTrigger.tsx":
      /*!*************************************************************************************!*\
  !*** ./src/client/pages/goal-creation/savings-trigger/CreateGoalSavingsTrigger.tsx ***!
  \*************************************************************************************/
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
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var _assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../assets/images/savings/goalviewoverlay.svg */ "./src/client/assets/images/savings/goalviewoverlay.svg"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../components/CustomDropDown */ "./src/client/pages/components/CustomDropDown.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var react_slide_button__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-slide-button */ "./node_modules/react-slide-button/build/index.js"
          );
        /* harmony import */ var react_slide_button__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_slide_button__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/savingsTriggerStore */ "./src/client/store/savingsTriggerStore.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! client/assets/images/savings/trigger-success.svg */ "./src/client/assets/images/savings/trigger-success.svg"
          );

        /* @ts-ignore */

        const CreateGoalSavingsTrigger = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (state) => state
          );
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)(
            (state) => state.configuration
          );
          const savingsTriggerStore = (0,
          client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_5__[
            "default"
          ])((state) => state);
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
                                    src: _assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_6__,
                                    className: "absolute object-cover w-screen",
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  {
                                    className:
                                      "absolute top-28 left-0 right-0 flex flex-col items-center",
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
                        className: "mt-6 absolute top-0 right-0 left-0 px-3.5",
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_NavBar__WEBPACK_IMPORTED_MODULE_7__[
                            "default"
                          ],
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "flex flex-row justify-between items-center",
                                },
                                {
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_BackButton__WEBPACK_IMPORTED_MODULE_8__[
                                      "default"
                                    ],
                                    {
                                      background: "bg-skin-base",
                                      onClick: () => {
                                        navigate(-1);
                                        goal.setPercentage(0);
                                        goal.setMerchantName("");
                                      },
                                    }
                                  ),
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
                          "w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-40 bottom-0 px-3.5 pt-12",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "flex flex-row justify-center" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-semibold text-2xl text-skin-base",
                                    },
                                    { children: "Round it up" }
                                  )
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
                                  "flex flex-row justify-center mt-2 mx-12",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-medium text-tiny text-skin-subtitle tracking-listtile_subtitle text-center",
                                    },
                                    {
                                      children:
                                        "Automatically save on your daily spending",
                                    }
                                  )
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className: "flex flex-row justify-center mt-6",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-semibold text-base text-skin-base tracking-title",
                                    },
                                    { children: "I would like to round up by" }
                                  )
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "flex flex-row  mx-4 mt-5" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  react_slider__WEBPACK_IMPORTED_MODULE_9__[
                                    "default"
                                  ],
                                  {
                                    className: "horizontal-slider",
                                    defaultValue: 1,
                                    marks: [1, 2, 5, 10],
                                    markClassName: "example-mark",
                                    min: 0,
                                    max: 10,
                                    thumbClassName: "example-thumb",
                                    trackClassName: "example-track",
                                    renderThumb: (props, state) =>
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        "div",
                                        Object.assign({}, props, {
                                          children: `${state.valueNow}%`,
                                        })
                                      ),
                                    onChange: (value) => {
                                      goal.setPercentage(value);
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
                                className: "flex flex-row justify-center mt-6",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-semibold text-base text-skin-base tracking-title",
                                    },
                                    { children: "every time I transact at" }
                                  )
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className: "mt-4 flex flex-row justify-center",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_10__.CustomDropDown,
                                  {
                                    height: "h-56",
                                    dataset:
                                      savingsTriggerStore.merchants_dataset,
                                    icon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiCreditCard,
                                      {}
                                    ),
                                    onClick: (merchantName) => {
                                      goal.setMerchantName(merchantName);
                                    },
                                    exactData: goal.merchant_name,
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            {
                              className:
                                "border rounded-full bg-skin-divider mt-5.5 mb-4",
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className: "flex flex-row justify-center mt-6",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-semibold text-base text-skin-base tracking-title",
                                    },
                                    { children: "and fund my" }
                                  )
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className: "mt-4 flex flex-row justify-center",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_10__.CustomDropDown,
                                  {
                                    dataset: [`${goal.goalName}`],
                                    icon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiFlag,
                                      {}
                                    ),
                                    height: "h-4",
                                    exactData: `${goal.goalName}`,
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
                                className: "flex flex-row justify-center mt-8",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom font-medium text-xs text-skin-subtitle tracking-listtile_subtitle text-center",
                                    },
                                    { children: "savings goal" }
                                  )
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
                                  "flex flex-row mx-3.5 mt-1 mb-8 font-custom tracking-widest text-skin-primary justify-center",
                              },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  react_slide_button__WEBPACK_IMPORTED_MODULE_1___default(),
                                  {
                                    mainText: "Swipe to activate",
                                    caret: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_11__.FiArrowRight,
                                      {
                                        color: "#ffffff",
                                        className: "absolute",
                                      }
                                    ),
                                    onSlideDone: () => {
                                      navigate(-1);
                                    },
                                    classList: "my-class",
                                    caretClassList: "my-caret-class",
                                    overlayClassList: "my-overlay-class",
                                    overlayWrapperClassList:
                                      "my-overlay-wrapper-class",
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
                          "flex flex-row justify-center items-center absolute left-0 right-0 top-28",
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "h-23 w-23" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "img",
                                {
                                  src: client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_12__,
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
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CreateGoalSavingsTrigger;

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

    /***/ "./src/client/assets/images/savings/goalviewoverlay.svg":
      /*!**************************************************************!*\
  !*** ./src/client/assets/images/savings/goalviewoverlay.svg ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "dccf10d3996baba1adcb.svg";

        /***/
      },

    /***/ "./src/client/assets/images/savings/trigger-success.svg":
      /*!**************************************************************!*\
  !*** ./src/client/assets/images/savings/trigger-success.svg ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "49762eb9521315a5f18a.svg";

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX3NhdmluZ3MtdHJpZ2dlcl9DcmVhdGVHb2FsU2F2aW5nc1RyaWdnZXJfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBUXBELE1BQU0sY0FBYyxHQUFHLENBQUMsRUFDN0IsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sT0FBTyxFQUNQLFNBQVMsR0FDVyxFQUFFLEVBQUU7SUFDeEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLE1BQU0sR0FBRyxHQUFHLDZDQUFNLENBQWlCLElBQUksQ0FBQyxDQUFDO0lBRXpDLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2I7O1dBRUc7UUFDSCxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQy9DLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFjLENBQUMsRUFBRTtnQkFDOUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsMEJBQTBCO1FBQzFCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzRCx3Q0FBd0M7UUFDeEMsT0FBTyxHQUFHLEVBQUU7WUFDVixRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNWLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUNoQyxrRkFDRSxFQUFFLEVBQUMsY0FBYyxtQkFDSCxNQUFNLG1CQUNOLE1BQU0sRUFDcEIsU0FBUyxFQUFDLHdJQUF3SSxFQUNsSixJQUFJLEVBQUMsUUFBUSxFQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBRWpDLDhFQUFLLFNBQVMsRUFBQyxnQ0FBZ0MsZ0JBQUUsSUFBSSxJQUFPLEVBQzNELFNBQVMsRUFDViwrRUFBSyxTQUFTLEVBQUMsbUJBQW1CLGlCQUMvQixHQUFHLEVBQ0osOEVBQ0UsU0FBUyxFQUFDLGNBQWMsaUJBQ1osTUFBTSxFQUNsQixJQUFJLEVBQUMsTUFBTSxFQUNYLE1BQU0sRUFBQyxjQUFjLEVBQ3JCLE9BQU8sRUFBQyxXQUFXLEVBQ25CLEtBQUssRUFBQyw0QkFBNEIsZ0JBRWxDLGlFQUNFLGFBQWEsRUFBQyxPQUFPLEVBQ3JCLGNBQWMsRUFBQyxPQUFPLEVBQ3RCLFdBQVcsRUFBQyxHQUFHLEVBQ2YsQ0FBQyxFQUFDLGdCQUFnQixHQUNaLElBQ0osS0FDRixLQUNDLEVBQ1IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM5Qiw4RUFDRSxTQUFTLEVBQUUsd0NBQ1QsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksTUFDWiw4QkFBOEIsZ0JBRTlCLDZFQUFJLFNBQVMsRUFBQyxFQUFFLGdCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3ZCLE9BQU8sQ0FDTCw2RUFDRSxTQUFTLEVBQUMsdUVBQXVFLEVBRWpGLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osSUFBSSxPQUFPLEVBQUU7b0NBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lDQUNmO2dDQUNELFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxnQkFFQSxJQUFJLEtBUkEsQ0FBQyxDQVNILENBQ04sQ0FBQztvQkFDSixDQUFDLENBQUMsSUFDQyxJQUNELENBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FDRixpRUFBVyxDQUNaLEtBQ0csQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR21EO0FBQ1I7QUFDb0M7QUFDbEM7QUFHa0I7QUFDRztBQUVwRSxnQkFBZ0I7QUFDNkI7QUFDTjtBQUNXO0FBQ29CO0FBR007QUFFRTtBQUM5RSxNQUFNLHdCQUF3QixHQUFHLEdBQUcsRUFBRTtJQUNwQyxNQUFNLFFBQVEsR0FBRyw2REFBVyxFQUFFLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsa0VBQVksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsTUFBTSxhQUFhLEdBQUcsaUZBQXFCLENBQ3pDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN6QixDQUFDO0lBQ2IsTUFBTSxtQkFBbUIsR0FBRyw0RUFBc0IsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUUsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyw0QkFBNEIsaUJBQ3pDLDhFQUFLLFNBQVMsRUFBQyxxQ0FBcUMsZ0JBQ2xELCtFQUFLLFNBQVMsRUFBQyxVQUFVLGlCQUN2QixnRUFDRSxHQUFHLEVBQUUsdUVBQWUsRUFDcEIsU0FBUyxFQUFDLGdDQUFnQyxHQUMxQyxFQUNGLGdFQUFLLFNBQVMsRUFBQywyREFBMkQsR0FBTyxLQUM3RSxJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLDJDQUEyQyxnQkFDeEQsdURBQUMsMERBQU0sSUFDTCxRQUFRLEVBQ04sOEVBQUssU0FBUyxFQUFDLDRDQUE0QyxnQkFDekQsdURBQUMsOERBQVUsSUFDVCxVQUFVLEVBQUMsY0FBYyxFQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzNCLENBQUMsR0FDRCxJQUNFLEdBRVIsSUFDRSxFQUNOLCtFQUFLLFNBQVMsRUFBQywwRkFBMEYsaUJBQ3ZHLDhFQUFLLFNBQVMsRUFBQyw4QkFBOEIsZ0JBQzNDLDhFQUFLLFNBQVMsRUFBQyxxREFBcUQsaUNBRTlELElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMseUNBQXlDLGdCQUN0RCw4RUFBSyxTQUFTLEVBQUMsOEZBQThGLCtEQUV2RyxJQUNGLEVBQ04sOEVBQUssU0FBUyxFQUFDLG1DQUFtQyxnQkFDaEQsOEVBQUssU0FBUyxFQUFDLHFFQUFxRSxpREFFOUUsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQywwQkFBMEIsZ0JBQ3ZDLHVEQUFDLG9EQUFXLElBQ1YsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixZQUFZLEVBQUUsQ0FBQyxFQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNwQixhQUFhLEVBQUMsY0FBYyxFQUM1QixHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxFQUFFLEVBQ1AsY0FBYyxFQUFDLGVBQWUsRUFDOUIsY0FBYyxFQUFDLGVBQWUsRUFDOUIsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDN0IsZ0ZBQVMsS0FBSyxjQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFPLENBQzdDLEVBQ0QsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0NBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzVCLENBQUMsR0FDRCxJQUNFLEVBT04sOEVBQUssU0FBUyxFQUFDLG1DQUFtQyxnQkFDaEQsOEVBQUssU0FBUyxFQUFDLHFFQUFxRSw4Q0FFOUUsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxtQ0FBbUMsZ0JBQ2hELHVEQUFDLHVFQUFjLElBQ2IsTUFBTSxFQUFDLE1BQU0sRUFDYixPQUFPLEVBQUUsbUJBQW1CLENBQUMsaUJBQWlCLEVBQzlDLElBQUksRUFBRSx1REFBQyx5REFBWSxLQUFHLEVBQ3RCLE9BQU8sRUFBRSxDQUFDLFlBQW9CLEVBQUUsRUFBRTtnQ0FDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDckMsQ0FBQyxFQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUM3QixJQUNFLEVBQ04sZ0VBQUssU0FBUyxFQUFDLGlEQUFpRCxHQUFPLEVBQ3ZFLDhFQUFLLFNBQVMsRUFBQyxtQ0FBbUMsZ0JBQ2hELDhFQUFLLFNBQVMsRUFBQyxxRUFBcUUsaUNBRTlFLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsbUNBQW1DLGdCQUNoRCx1REFBQyx1RUFBYyxJQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzdCLElBQUksRUFBRSx1REFBQyxtREFBTSxLQUFHLEVBQ2hCLE1BQU0sRUFBQyxLQUFLLEVBQ1osU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUM3QixJQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLG1DQUFtQyxnQkFDaEQsOEVBQUssU0FBUyxFQUFDLDRGQUE0RixrQ0FFckcsSUFDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyw4RkFBOEYsZ0JBQzNHLHVEQUFDLDJEQUFXLElBQ1YsUUFBUSxFQUFDLG1CQUFtQixFQUM1QixLQUFLLEVBQUUsdURBQUMseURBQVksSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxVQUFVLEdBQUcsRUFDNUQsV0FBVyxFQUFFLEdBQUcsRUFBRTtnQ0FDaEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2YsQ0FBQyxFQUNELFNBQVMsRUFBQyxVQUFVLEVBQ3BCLGNBQWMsRUFBQyxnQkFBZ0IsRUFDL0IsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQ25DLHVCQUF1QixFQUFDLDBCQUEwQixHQUNsRCxJQUNFLEtBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsMEVBQTBFLGdCQUN2Riw4RUFBSyxTQUFTLEVBQUMsV0FBVyxnQkFDeEIsZ0VBQUssR0FBRyxFQUFFLDhFQUFjLEdBQUksSUFDeEIsSUFDRixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkpYO0FBSTdCLE1BQU0sc0JBQXNCLEdBQUcsbURBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxVQUFVLEVBQUUsQ0FBQztJQUNiLGFBQWEsRUFBRSxlQUFlO0lBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsaUJBQWlCLEVBQUU7UUFDakIsZUFBZTtRQUNmLFdBQVc7UUFDWCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZixRQUFRO1FBQ1IsY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsV0FBVztLQUNaO0lBQ0Qsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixxQkFBcUIsRUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLGtCQUFrQixFQUFFLFFBQVE7YUFDN0IsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGFBQWEsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQy9CLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLFVBQVUsRUFBRSxLQUFLO2FBQ2xCLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxlQUFlLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBRztnQkFDZCxhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUyxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUU7UUFDeEIsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSixpRUFBZSxzQkFBc0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0N1c3RvbURyb3BEb3duLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvZ29hbC1jcmVhdGlvbi9zYXZpbmdzLXRyaWdnZXIvQ3JlYXRlR29hbFNhdmluZ3NUcmlnZ2VyLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvc2F2aW5nc1RyaWdnZXJTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG50eXBlIEN1c3RvbURyb3BEb3duUHJvcHMgPSB7XG4gIGRhdGFzZXQ6IEFycmF5PGFueT47XG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhlaWdodD86IHN0cmluZztcbiAgZXhhY3REYXRhPzogYW55O1xuICBvbkNsaWNrPzogKHRhYjogYW55KSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBDdXN0b21Ecm9wRG93biA9ICh7XG4gIGRhdGFzZXQsXG4gIGljb24sXG4gIGhlaWdodCxcbiAgb25DbGljayxcbiAgZXhhY3REYXRhLFxufTogQ3VzdG9tRHJvcERvd25Qcm9wcykgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogQ2xvc2UgZHJvcGRvd24gaWYgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgLy8gQ2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtyZWZdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgcmVmPXtyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cImRheS1kcm9wZG93blwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tYmFzZSBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSB0ZXh0LWJhc2UgZm9udC1wb3BwaW5zIHJvdW5kZWQtM3hsIHB4LTQgcHktMi41IHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLW5ldXRyYWwgdGV4dC1sZyBtci0yXCI+e2ljb259PC9kaXY+XG4gICAgICAgIHtleGFjdERhdGF9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLW5ldXRyYWxcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNPcGVuICYmIGRhdGFzZXQubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgYmctc2tpbi1iYXNlIHAtMy41IHctZnVsbCAke1xuICAgICAgICAgICAgaGVpZ2h0ID8/IFwiaC0yMFwiXG4gICAgICAgICAgfSBvdmVyZmxvdy15LWF1dG8gc2hhZG93LWNhcmRgfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge2RhdGFzZXQubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXRpbnkgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRyYWNraW5nLXByb2dyZXNzX2xhYmVsIGJsb2NrIG1iLTRcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHRyaWdnZXJzT3ZlcmxheSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2dvYWx2aWV3b3ZlcmxheS5zdmdcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJjLXNsaWRlclwiO1xuaW1wb3J0IHsgQ3VzdG9tQW1vdW50QnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tQW1vdW50QnV0dG9uXCI7XG5pbXBvcnQgeyBDdXN0b21Ecm9wRG93biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0N1c3RvbURyb3BEb3duXCI7XG5pbXBvcnQgeyBGaUFycm93UmlnaHQsIEZpQ3JlZGl0Q2FyZCwgRmlGbGFnIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2JlbGwuc3ZnXCI7XG4vKiBAdHMtaWdub3JlICovXG5pbXBvcnQgU2xpZGVCdXR0b24gZnJvbSBcInJlYWN0LXNsaWRlLWJ1dHRvblwiO1xuaW1wb3J0IFJlYWN0U2xpZGVyIGZyb20gXCJyZWFjdC1zbGlkZXJcIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvc2F2aW5nc1RyaWdnZXJTdG9yZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHNhdmVUcmlnZ2VyIH0gZnJvbSBcImNsaWVudC9hcGkvc2F2aW5ncy10cmlnZ2Vyc1wiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBUYWlsU3BpbiB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHN1Y2Nlc3NUcmlnZ2VyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3RyaWdnZXItc3VjY2Vzcy5zdmdcIjtcbmNvbnN0IENyZWF0ZUdvYWxTYXZpbmdzVHJpZ2dlciA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBnb2FsID0gdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB1c2VDb25maWd1cmF0aW9uU3RvcmUoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvbmZpZ3VyYXRpb25cbiAgKSBhcyBJQ29uZmlnO1xuICBjb25zdCBzYXZpbmdzVHJpZ2dlclN0b3JlID0gdXNlU2F2aW5nc1RyaWdnZXJTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLzIgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dHJpZ2dlcnNPdmVybGF5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgb2JqZWN0LWNvdmVyIHctc2NyZWVuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTI4IGxlZnQtMCByaWdodC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgcHgtMy41XCI+XG4gICAgICAgIDxOYXZCYXJcbiAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QmFja0J1dHRvblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLWJhc2VcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKC0xKTtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0UGVyY2VudGFnZSgwKTtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0TWVyY2hhbnROYW1lKFwiXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gcm91bmRlZC10LTN4bCBiZy1za2luLWJhc2UgYWJzb2x1dGUgcmlnaHQtMCBsZWZ0LTAgdG9wLTQwIGJvdHRvbS0wIHB4LTMuNSBwdC0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LXNraW4tYmFzZVwiPlxuICAgICAgICAgICAgUm91bmQgaXQgdXBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC0yIG14LTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC10aW55IHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy1saXN0dGlsZV9zdWJ0aXRsZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgQXV0b21hdGljYWxseSBzYXZlIG9uIHlvdXIgZGFpbHkgc3BlbmRpbmdcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlXCI+XG4gICAgICAgICAgICBJIHdvdWxkIGxpa2UgdG8gcm91bmQgdXAgYnlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgbXgtNCBtdC01XCI+XG4gICAgICAgICAgPFJlYWN0U2xpZGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsLXNsaWRlclwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XG4gICAgICAgICAgICBtYXJrcz17WzEsIDIsIDUsIDEwXX1cbiAgICAgICAgICAgIG1hcmtDbGFzc05hbWU9XCJleGFtcGxlLW1hcmtcIlxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICAgIHRodW1iQ2xhc3NOYW1lPVwiZXhhbXBsZS10aHVtYlwiXG4gICAgICAgICAgICB0cmFja0NsYXNzTmFtZT1cImV4YW1wbGUtdHJhY2tcIlxuICAgICAgICAgICAgcmVuZGVyVGh1bWI9eyhwcm9wcywgc3RhdGUpID0+IChcbiAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvcHN9PntgJHtzdGF0ZS52YWx1ZU5vd30lYH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGdvYWwuc2V0UGVyY2VudGFnZSh2YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG10LTYganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGUgbXItMlwiPlxuICAgICAgICAgICAgb3IgYnlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q3VzdG9tQW1vdW50QnV0dG9uIC8+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGVcIj5cbiAgICAgICAgICAgIGV2ZXJ5IHRpbWUgSSB0cmFuc2FjdCBhdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8Q3VzdG9tRHJvcERvd25cbiAgICAgICAgICAgIGhlaWdodD1cImgtNTZcIlxuICAgICAgICAgICAgZGF0YXNldD17c2F2aW5nc1RyaWdnZXJTdG9yZS5tZXJjaGFudHNfZGF0YXNldH1cbiAgICAgICAgICAgIGljb249ezxGaUNyZWRpdENhcmQgLz59XG4gICAgICAgICAgICBvbkNsaWNrPXsobWVyY2hhbnROYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgZ29hbC5zZXRNZXJjaGFudE5hbWUobWVyY2hhbnROYW1lKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBleGFjdERhdGE9e2dvYWwubWVyY2hhbnRfbmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1mdWxsIGJnLXNraW4tZGl2aWRlciBtdC01LjUgbWItNFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgYW5kIGZ1bmQgbXlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEN1c3RvbURyb3BEb3duXG4gICAgICAgICAgICBkYXRhc2V0PXtbYCR7Z29hbC5nb2FsTmFtZX1gXX1cbiAgICAgICAgICAgIGljb249ezxGaUZsYWcgLz59XG4gICAgICAgICAgICBoZWlnaHQ9XCJoLTRcIlxuICAgICAgICAgICAgZXhhY3REYXRhPXtgJHtnb2FsLmdvYWxOYW1lfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctbGlzdHRpbGVfc3VidGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHNhdmluZ3MgZ29hbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG14LTMuNSBtdC0xIG1iLTggZm9udC1wb3BwaW5zIHRyYWNraW5nLXdpZGVzdCB0ZXh0LXNraW4tcHJpbWFyeSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxTbGlkZUJ1dHRvblxuICAgICAgICAgICAgbWFpblRleHQ9XCJTd2lwZSB0byBhY3RpdmF0ZVwiXG4gICAgICAgICAgICBjYXJldD17PEZpQXJyb3dSaWdodCBjb2xvcj1cIiNmZmZmZmZcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiIC8+fVxuICAgICAgICAgICAgb25TbGlkZURvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTGlzdD1cIm15LWNsYXNzXCJcbiAgICAgICAgICAgIGNhcmV0Q2xhc3NMaXN0PVwibXktY2FyZXQtY2xhc3NcIlxuICAgICAgICAgICAgb3ZlcmxheUNsYXNzTGlzdD1cIm15LW92ZXJsYXktY2xhc3NcIlxuICAgICAgICAgICAgb3ZlcmxheVdyYXBwZXJDbGFzc0xpc3Q9XCJteS1vdmVybGF5LXdyYXBwZXItY2xhc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGFic29sdXRlIGxlZnQtMCByaWdodC0wIHRvcC0yOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjMgdy0yM1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtzdWNjZXNzVHJpZ2dlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVHb2FsU2F2aW5nc1RyaWdnZXI7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5cbmltcG9ydCBBY2NvdW50IGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRcIjtcblxuY29uc3QgdXNlU2F2aW5nc1RyaWdnZXJTdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBwZXJjZW50YWdlOiAxLFxuICBtZXJjaGFudF9uYW1lOiBcIkFsbCBtZXJjaGFudHNcIixcbiAgZ29hbF9pZDogMCxcbiAgbWVyY2hhbnRzX2RhdGFzZXQ6IFtcbiAgICBcIkFsbCBtZXJjaGFudHNcIixcbiAgICBcIkdyb2Nlcmllc1wiLFxuICAgIFwiU2hvcHBpbmdcIixcbiAgICBcIkVhdGluZyBvdXRcIixcbiAgICBcIlRyYW5zcG9ydGF0aW9uXCIsXG4gICAgXCJVdGlsaXRpZXNcIixcbiAgICBcIkhlYWx0aCBjYXJlXCIsXG4gICAgXCJFbnRlcnRhaW5tZW50XCIsXG4gICAgXCJUcmF2ZWxcIixcbiAgICBcIkJpbGxzICYgRmVlc1wiLFxuICAgIFwiUGVyc29uYWwgY2FyZVwiLFxuICAgIFwiSG9tZSBpbXByb3ZlbWVudFwiLFxuICAgIFwiQ2hhcml0eVwiLFxuICAgIFwiQ2FzaCB3aXRoZHJhd2Fsc1wiLFxuICAgIFwiUmVzdGF1cmFudHNcIixcbiAgICBcIkZhc3QgZm9vZFwiLFxuICBdLFxuICBhbGxTYXZpbmdzVHJpZ2dlcnM6IFtdLFxuICBzZXRBbGxTYXZpbmdzVHJpZ2dlcnM6ICh0cmlnZ2VyczogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgICBhbGxTYXZpbmdzVHJpZ2dlcnM6IHRyaWdnZXJzLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZXRQZXJjZW50YWdlOiAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgcGVyY2VudGFnZTogdmFsdWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIHNldE1lcmNoYW50TmFtZTogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgbWVyY2hhbnRfbmFtZTogbmFtZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgc2V0R29hbElkOiAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgZ29hbF9pZDogaWQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
