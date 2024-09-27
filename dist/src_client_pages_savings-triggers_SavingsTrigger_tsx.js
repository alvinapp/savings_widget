"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_savings-triggers_SavingsTrigger_tsx"],
  {
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

    /***/ "./src/client/pages/savings-triggers/SavingsTrigger.tsx":
      /*!**************************************************************!*\
  !*** ./src/client/pages/savings-triggers/SavingsTrigger.tsx ***!
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
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var _assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../assets/images/savings/goalviewoverlay.svg */ "./src/client/assets/images/savings/goalviewoverlay.svg"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/CustomDropDown */ "./src/client/pages/components/CustomDropDown.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_14__ =
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
        /* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/store/savingsTriggerStore */ "./src/client/store/savingsTriggerStore.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/api/savings-triggers */ "./src/client/api/savings-triggers.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js"
          );
        /* harmony import */ var client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! client/assets/images/savings/trigger-success.svg */ "./src/client/assets/images/savings/trigger-success.svg"
          );

        /* @ts-ignore */

        const SavingsTrigger = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (state) => state
          );
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_6__.useConfigurationStore)(
            (state) => state.configuration
          );
          const savingsTriggerStore = (0,
          client_store_savingsTriggerStore__WEBPACK_IMPORTED_MODULE_7__[
            "default"
          ])((state) => state);
          const { isFetching: savingTrigger, refetch: saveTheTrigger } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "save-trigger",
            () =>
              (0,
              client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_8__.saveTrigger)(
                {
                  configuration: configuration,
                  data: {
                    round_up_percentage: savingsTriggerStore.percentage,
                    merchant_name: savingsTriggerStore.merchant_name,
                    goal_id: goal.confirmedGoal.id,
                  },
                }
              ).then((result) => {
                if (result) {
                  navigate("/savings-triggers-success");
                }
              }),
            { refetchOnWindowFocus: false, enabled: false }
          );
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
                                    src: _assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_9__,
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
                          _components_NavBar__WEBPACK_IMPORTED_MODULE_10__[
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
                                    _components_BackButton__WEBPACK_IMPORTED_MODULE_11__[
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
                                  react_slider__WEBPACK_IMPORTED_MODULE_12__[
                                    "default"
                                  ],
                                  {
                                    defaultValue: 1,
                                    className: "horizontal-slider",
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
                                      savingsTriggerStore.setPercentage(value);
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
                                  _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_13__.CustomDropDown,
                                  {
                                    height: "h-56",
                                    dataset:
                                      savingsTriggerStore.merchants_dataset,
                                    icon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiCreditCard,
                                      {}
                                    ),
                                    onClick: (merchantName) => {
                                      savingsTriggerStore.setMerchantName(
                                        merchantName
                                      );
                                    },
                                    exactData:
                                      savingsTriggerStore.merchant_name,
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
                                  _components_CustomDropDown__WEBPACK_IMPORTED_MODULE_13__.CustomDropDown,
                                  {
                                    dataset: [`${goal.confirmedGoal.name}`],
                                    icon: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiFlag,
                                      {}
                                    ),
                                    height: "h-4",
                                    exactData: `${goal.confirmedGoal.name}`,
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
                                children: savingTrigger
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.TailSpin,
                                      {
                                        height: "30",
                                        width: "30",
                                        color: "#0539ec",
                                        ariaLabel: "tail-spin-loading",
                                        wrapperStyle: {},
                                        wrapperClass: "",
                                        visible: true,
                                      }
                                    )
                                  : (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_slide_button__WEBPACK_IMPORTED_MODULE_1___default(),
                                      {
                                        mainText: "Swipe to activate",
                                        caret: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiArrowRight,
                                          {
                                            color: "#ffffff",
                                            className: "absolute",
                                          }
                                        ),
                                        onSlideDone: () => saveTheTrigger(),
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
                                  src: client_assets_images_savings_trigger_success_svg__WEBPACK_IMPORTED_MODULE_15__,
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
          SavingsTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zYXZpbmdzLXRyaWdnZXJzX1NhdmluZ3NUcmlnZ2VyX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNGO0FBQ25DLE1BQU0sV0FBVyxHQUFHLENBQU8sRUFDaEMsYUFBYSxFQUNiLElBQUksR0FJTCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsOENBQVEsQ0FBQztZQUNuQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztZQUMxQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFBQyxPQUFPLE1BQVcsRUFBRTtRQUNwQiw2REFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsRUFBQztBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxFQUN0QyxhQUFhLEVBQ2IsTUFBTSxHQUlQLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLCtDQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFLG1DQUFtQyxNQUFNLEVBQUU7WUFDckQsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFBQyxPQUFPLE1BQVcsRUFBRTtRQUNwQiw2REFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsRUFBQztBQUNLLE1BQU0sZ0JBQWdCLEdB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Q0wsQ0FBQztJQUNELFNBQVMsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLE9BQU8sRUFBRSxFQUFFO2FBQ1osQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUosaUVBQWUsc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvYXBpL3NhdmluZ3MtdHJpZ2dlcnMudHMiLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvQ3VzdG9tRHJvcERvd24udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9zYXZpbmdzLXRyaWdnZXJzL1NhdmluZ3NUcmlnZ2VyLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvc2F2aW5nc1RyaWdnZXJTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBmZXRjaERhdGEsIHBvc3REYXRhIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IHNhdmVUcmlnZ2VyID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZGF0YSxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgZGF0YT86IGFueTtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBwb3N0RGF0YSh7XG4gICAgICBlbmRwb2ludDogYC9zYXZpbmdzX3RyaWdnZXJfZW5kcG9pbnRzL2AsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR29hbFRyaWdnZXJzID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZ29hbElkLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBnb2FsSWQ6IG51bWJlcjtcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGAvc2F2aW5nc190cmlnZ2VyX2VuZHBvaW50cy9nb2FsLyR7Z29hbElkfWAsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IGZldGNoQWxsVHJpZ2dlcnMgPSBhc3luYyAoe1xuICBjb25maWd1cmF0aW9uLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh7XG4gICAgICBlbmRwb2ludDogYC9zYXZpbmdzX3RyaWdnZXJfZW5kcG9pbnRzYCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG50eXBlIEN1c3RvbURyb3BEb3duUHJvcHMgPSB7XG4gIGRhdGFzZXQ6IEFycmF5PGFueT47XG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhlaWdodD86IHN0cmluZztcbiAgZXhhY3REYXRhPzogYW55O1xuICBvbkNsaWNrPzogKHRhYjogYW55KSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBDdXN0b21Ecm9wRG93biA9ICh7XG4gIGRhdGFzZXQsXG4gIGljb24sXG4gIGhlaWdodCxcbiAgb25DbGljayxcbiAgZXhhY3REYXRhLFxufTogQ3VzdG9tRHJvcERvd25Qcm9wcykgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogQ2xvc2UgZHJvcGRvd24gaWYgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgLy8gQ2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtyZWZdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgcmVmPXtyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cImRheS1kcm9wZG93blwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tYmFzZSBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSB0ZXh0LWJhc2UgZm9udC1wb3BwaW5zIHJvdW5kZWQtM3hsIHB4LTQgcHktMi41IHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLW5ldXRyYWwgdGV4dC1sZyBtci0yXCI+e2ljb259PC9kaXY+XG4gICAgICAgIHtleGFjdERhdGF9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1za2luLW5ldXRyYWxcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNPcGVuICYmIGRhdGFzZXQubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgYmctc2tpbi1iYXNlIHAtMy41IHctZnVsbCAke1xuICAgICAgICAgICAgaGVpZ2h0ID8/IFwiaC0yMFwiXG4gICAgICAgICAgfSBvdmVyZmxvdy15LWF1dG8gc2hhZG93LWNhcmRgfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge2RhdGFzZXQubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXRpbnkgZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRyYWNraW5nLXByb2dyZXNzX2xhYmVsIGJsb2NrIG1iLTRcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHRyaWdnZXJzT3ZlcmxheSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2dvYWx2aWV3b3ZlcmxheS5zdmdcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJjLXNsaWRlclwiO1xuaW1wb3J0IHsgQ3VzdG9tQW1vdW50QnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3VzdG9tQW1vdW50QnV0dG9uXCI7XG5pbXBvcnQgeyBDdXN0b21Ecm9wRG93biB9IGZyb20gXCIuLi9jb21wb25lbnRzL0N1c3RvbURyb3BEb3duXCI7XG5pbXBvcnQgeyBGaUFycm93UmlnaHQsIEZpQ3JlZGl0Q2FyZCwgRmlGbGFnIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZpbmdzL2JlbGwuc3ZnXCI7XG4vKiBAdHMtaWdub3JlICovXG5pbXBvcnQgU2xpZGVCdXR0b24gZnJvbSBcInJlYWN0LXNsaWRlLWJ1dHRvblwiO1xuaW1wb3J0IFJlYWN0U2xpZGVyIGZyb20gXCJyZWFjdC1zbGlkZXJcIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvc2F2aW5nc1RyaWdnZXJTdG9yZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHNhdmVUcmlnZ2VyIH0gZnJvbSBcImNsaWVudC9hcGkvc2F2aW5ncy10cmlnZ2Vyc1wiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBUYWlsU3BpbiB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHN1Y2Nlc3NUcmlnZ2VyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3RyaWdnZXItc3VjY2Vzcy5zdmdcIjtcbmNvbnN0IFNhdmluZ3NUcmlnZ2VyID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGdvYWwgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IHNhdmluZ3NUcmlnZ2VyU3RvcmUgPSB1c2VTYXZpbmdzVHJpZ2dlclN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHsgaXNGZXRjaGluZzogc2F2aW5nVHJpZ2dlciwgcmVmZXRjaDogc2F2ZVRoZVRyaWdnZXIgfSA9IHVzZVF1ZXJ5KFxuICAgIFwic2F2ZS10cmlnZ2VyXCIsXG4gICAgKCkgPT5cbiAgICAgIHNhdmVUcmlnZ2VyKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJvdW5kX3VwX3BlcmNlbnRhZ2U6IHNhdmluZ3NUcmlnZ2VyU3RvcmUucGVyY2VudGFnZSxcbiAgICAgICAgICBtZXJjaGFudF9uYW1lOiBzYXZpbmdzVHJpZ2dlclN0b3JlLm1lcmNoYW50X25hbWUsXG4gICAgICAgICAgZ29hbF9pZDogZ29hbC5jb25maXJtZWRHb2FsLmlkLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBuYXZpZ2F0ZShcIi9zYXZpbmdzLXRyaWdnZXJzLXN1Y2Nlc3NcIik7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLCBlbmFibGVkOiBmYWxzZSB9XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvMiBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0cmlnZ2Vyc092ZXJsYXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvYmplY3QtY292ZXIgdy1zY3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjggbGVmdC0wIHJpZ2h0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGxlZnQtMCBweC0zLjVcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIHJvdW5kZWQtdC0zeGwgYmctc2tpbi1iYXNlIGFic29sdXRlIHJpZ2h0LTAgbGVmdC0wIHRvcC00MCBib3R0b20tMCBweC0zLjUgcHQtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgdGV4dC1za2luLWJhc2VcIj5cbiAgICAgICAgICAgIFJvdW5kIGl0IHVwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtMiBteC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIGZvbnQtbWVkaXVtIHRleHQtdGlueSB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctbGlzdHRpbGVfc3VidGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIEF1dG9tYXRpY2FsbHkgc2F2ZSBvbiB5b3VyIGRhaWx5IHNwZW5kaW5nXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy10aXRsZVwiPlxuICAgICAgICAgICAgSSB3b3VsZCBsaWtlIHRvIHJvdW5kIHVwIGJ5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgIG14LTQgbXQtNVwiPlxuICAgICAgICAgIDxSZWFjdFNsaWRlclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1zbGlkZXJcIlxuICAgICAgICAgICAgbWFya3M9e1sxLCAyLCA1LCAxMF19XG4gICAgICAgICAgICBtYXJrQ2xhc3NOYW1lPVwiZXhhbXBsZS1tYXJrXCJcbiAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgIG1heD17MTB9XG4gICAgICAgICAgICB0aHVtYkNsYXNzTmFtZT1cImV4YW1wbGUtdGh1bWJcIlxuICAgICAgICAgICAgdHJhY2tDbGFzc05hbWU9XCJleGFtcGxlLXRyYWNrXCJcbiAgICAgICAgICAgIHJlbmRlclRodW1iPXsocHJvcHMsIHN0YXRlKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgey4uLnByb3BzfT57YCR7c3RhdGUudmFsdWVOb3d9JWB9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICBzYXZpbmdzVHJpZ2dlclN0b3JlLnNldFBlcmNlbnRhZ2UodmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtdC02IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1yLTJcIj5cbiAgICAgICAgICAgIG9yIGJ5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEN1c3RvbUFtb3VudEJ1dHRvbiAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlXCI+XG4gICAgICAgICAgICBldmVyeSB0aW1lIEkgdHJhbnNhY3QgYXRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEN1c3RvbURyb3BEb3duXG4gICAgICAgICAgICBoZWlnaHQ9XCJoLTU2XCJcbiAgICAgICAgICAgIGRhdGFzZXQ9e3NhdmluZ3NUcmlnZ2VyU3RvcmUubWVyY2hhbnRzX2RhdGFzZXR9XG4gICAgICAgICAgICBpY29uPXs8RmlDcmVkaXRDYXJkIC8+fVxuICAgICAgICAgICAgb25DbGljaz17KG1lcmNoYW50TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHNhdmluZ3NUcmlnZ2VyU3RvcmUuc2V0TWVyY2hhbnROYW1lKG1lcmNoYW50TmFtZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZXhhY3REYXRhPXtzYXZpbmdzVHJpZ2dlclN0b3JlLm1lcmNoYW50X25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtZnVsbCBiZy1za2luLWRpdmlkZXIgbXQtNS41IG1iLTRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1za2luLWJhc2UgdHJhY2tpbmctdGl0bGVcIj5cbiAgICAgICAgICAgIGFuZCBmdW5kIG15XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxDdXN0b21Ecm9wRG93blxuICAgICAgICAgICAgZGF0YXNldD17W2Ake2dvYWwuY29uZmlybWVkR29hbC5uYW1lfWBdfVxuICAgICAgICAgICAgaWNvbj17PEZpRmxhZyAvPn1cbiAgICAgICAgICAgIGhlaWdodD1cImgtNFwiXG4gICAgICAgICAgICBleGFjdERhdGE9e2Ake2dvYWwuY29uZmlybWVkR29hbC5uYW1lfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0ZXh0LXNraW4tc3VidGl0bGUgdHJhY2tpbmctbGlzdHRpbGVfc3VidGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHNhdmluZ3MgZ29hbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG14LTMuNSBtdC0xIG1iLTggZm9udC1wb3BwaW5zIHRyYWNraW5nLXdpZGVzdCB0ZXh0LXNraW4tcHJpbWFyeSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtzYXZpbmdUcmlnZ2VyID8gKFxuICAgICAgICAgICAgPFRhaWxTcGluXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzA1NjQ4OVwiXG4gICAgICAgICAgICAgIGFyaWFMYWJlbD1cInRhaWwtc3Bpbi1sb2FkaW5nXCJcbiAgICAgICAgICAgICAgd3JhcHBlclN0eWxlPXt7fX1cbiAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTbGlkZUJ1dHRvblxuICAgICAgICAgICAgICBtYWluVGV4dD1cIlN3aXBlIHRvIGFjdGl2YXRlXCJcbiAgICAgICAgICAgICAgY2FyZXQ9ezxGaUFycm93UmlnaHQgY29sb3I9XCIjZmZmZmZmXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIiAvPn1cbiAgICAgICAgICAgICAgb25TbGlkZURvbmU9eygpID0+IHNhdmVUaGVUcmlnZ2VyKCl9XG4gICAgICAgICAgICAgIGNsYXNzTGlzdD1cIm15LWNsYXNzXCJcbiAgICAgICAgICAgICAgY2FyZXRDbGFzc0xpc3Q9XCJteS1jYXJldC1jbGFzc1wiXG4gICAgICAgICAgICAgIG92ZXJsYXlDbGFzc0xpc3Q9XCJteS1vdmVybGF5LWNsYXNzXCJcbiAgICAgICAgICAgICAgb3ZlcmxheVdyYXBwZXJDbGFzc0xpc3Q9XCJteS1vdmVybGF5LXdyYXBwZXItY2xhc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCB0b3AtMjhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIzIHctMjNcIj5cbiAgICAgICAgICA8aW1nIHNyYz17c3VjY2Vzc1RyaWdnZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2F2aW5nc1RyaWdnZXI7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5cbmltcG9ydCBBY2NvdW50IGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRcIjtcblxuY29uc3QgdXNlU2F2aW5nc1RyaWdnZXJTdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBwZXJjZW50YWdlOiAxLFxuICBtZXJjaGFudF9uYW1lOiBcIkFsbCBtZXJjaGFudHNcIixcbiAgZ29hbF9pZDogMCxcbiAgbWVyY2hhbnRzX2RhdGFzZXQ6IFtcbiAgICBcIkFsbCBtZXJjaGFudHNcIixcbiAgICBcIkdyb2Nlcmllc1wiLFxuICAgIFwiU2hvcHBpbmdcIixcbiAgICBcIkVhdGluZyBvdXRcIixcbiAgICBcIlRyYW5zcG9ydGF0aW9uXCIsXG4gICAgXCJVdGlsaXRpZXNcIixcbiAgICBcIkhlYWx0aCBjYXJlXCIsXG4gICAgXCJFbnRlcnRhaW5tZW50XCIsXG4gICAgXCJUcmF2ZWxcIixcbiAgICBcIkJpbGxzICYgRmVlc1wiLFxuICAgIFwiUGVyc29uYWwgY2FyZVwiLFxuICAgIFwiSG9tZSBpbXByb3ZlbWVudFwiLFxuICAgIFwiQ2hhcml0eVwiLFxuICAgIFwiQ2FzaCB3aXRoZHJhd2Fsc1wiLFxuICAgIFwiUmVzdGF1cmFudHNcIixcbiAgICBcIkZhc3QgZm9vZFwiLFxuICBdLFxuICBhbGxTYXZpbmdzVHJpZ2dlcnM6IFtdLFxuICBzZXRBbGxTYXZpbmdzVHJpZ2dlcnM6ICh0cmlnZ2VyczogYW55KSA9PiB7XG4gICAgcmV0dXJuIHNldCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0ge1xuICAgICAgICBhbGxTYXZpbmdzVHJpZ2dlcnM6IHRyaWdnZXJzLFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pO1xuICB9LFxuICBzZXRQZXJjZW50YWdlOiAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgcGVyY2VudGFnZTogdmFsdWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG4gIHNldE1lcmNoYW50TmFtZTogKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgbWVyY2hhbnRfbmFtZTogbmFtZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfSxcbiAgc2V0R29hbElkOiAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgZ29hbF9pZDogaWQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNhdmluZ3NUcmlnZ2VyU3RvcmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
