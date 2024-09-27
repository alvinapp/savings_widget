(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_goal-view_GoalView_tsx"],
  {
    /***/ "./node_modules/@ramonak/react-progress-bar/dist/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@ramonak/react-progress-bar/dist/index.js ***!
  \****************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, "__esModule", { value: true });

        var React = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        var PropTypes = __webpack_require__(
          /*! prop-types */ "./node_modules/prop-types/index.js"
        );

        function _interopNamespace(e) {
          if (e && e.__esModule) return e;
          var n = Object.create(null);
          if (e) {
            Object.keys(e).forEach(function (k) {
              if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(
                  n,
                  k,
                  d.get
                    ? d
                    : {
                        enumerable: true,
                        get: function () {
                          return e[k];
                        },
                      }
                );
              }
            });
          }
          n["default"] = e;
          return Object.freeze(n);
        }

        var React__namespace = /*#__PURE__*/ _interopNamespace(React);
        var PropTypes__namespace = /*#__PURE__*/ _interopNamespace(PropTypes);

        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

        var __assign = function () {
          __assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };

        var ProgressBar = function (_a) {
          var bgColor = _a.bgColor,
            completed = _a.completed,
            baseBgColor = _a.baseBgColor,
            height = _a.height,
            width = _a.width,
            margin = _a.margin,
            padding = _a.padding,
            borderRadius = _a.borderRadius,
            labelAlignment = _a.labelAlignment,
            labelColor = _a.labelColor,
            labelSize = _a.labelSize,
            isLabelVisible = _a.isLabelVisible,
            customLabelStyles = _a.customLabelStyles,
            transitionDuration = _a.transitionDuration,
            transitionTimingFunction = _a.transitionTimingFunction,
            className = _a.className,
            dir = _a.dir,
            ariaValuemin = _a.ariaValuemin,
            ariaValuemax = _a.ariaValuemax,
            ariaValuetext = _a.ariaValuetext,
            maxCompleted = _a.maxCompleted,
            customLabel = _a.customLabel,
            animateOnRender = _a.animateOnRender,
            barContainerClassName = _a.barContainerClassName,
            completedClassName = _a.completedClassName,
            labelClassName = _a.labelClassName,
            _b = _a.initCompletedOnAnimation,
            initCompletedOnAnimation = _b === void 0 ? 0 : _b;
          var getAlignment = function (alignmentOption) {
            if (alignmentOption === "left") {
              return "flex-start";
            } else if (alignmentOption === "center") {
              return "center";
            } else if (alignmentOption === "right") {
              return "flex-end";
            } else {
              return null;
            }
          };
          var alignment = getAlignment(labelAlignment);
          var initCompletedOnAnimationStr =
            typeof initCompletedOnAnimation === "number"
              ? "".concat(initCompletedOnAnimation, "%")
              : initCompletedOnAnimation;
          var getFillerWidth = function (maxCompletedValue, completedValue) {
            if (maxCompletedValue) {
              var ratio = Number(completedValue) / maxCompletedValue;
              return ratio > 1 ? "100%" : "".concat(ratio * 100, "%");
            }
            return initCompletedOnAnimationStr;
          };
          var fillerWidth = getFillerWidth(maxCompleted, completed);
          var _c = React__namespace.useState(initCompletedOnAnimationStr),
            initWidth = _c[0],
            setInitWidth = _c[1];
          var containerStyles = {
            height: height,
            background: baseBgColor,
            borderRadius: borderRadius,
            padding: padding,
            width: width,
            margin: margin,
            overflow: "hidden",
          };
          var fillerStyles = {
            height: height,
            width: animateOnRender ? initWidth : fillerWidth,
            background: bgColor,
            transition: "width "
              .concat(transitionDuration || "1s", " ")
              .concat(transitionTimingFunction || "ease-in-out"),
            borderRadius: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent:
              labelAlignment !== "outside" && alignment ? alignment : "normal",
          };
          var labelStyles = __assign(
            {
              padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
              color: labelColor,
              fontWeight: "bold",
              fontSize: labelSize,
              display: !isLabelVisible ? "none" : "initial",
            },
            customLabelStyles
          );
          var outsideStyles = {
            display: labelAlignment === "outside" ? "flex" : "initial",
            alignItems: labelAlignment === "outside" ? "center" : "initial",
          };
          var completedStr =
            typeof completed === "number"
              ? "".concat(completed, "%")
              : "".concat(completed);
          var labelStr = customLabel ? customLabel : completedStr;
          React__namespace.useEffect(
            function () {
              if (animateOnRender) {
                requestAnimationFrame(function () {
                  return setInitWidth(fillerWidth);
                });
              }
            },
            [fillerWidth, animateOnRender]
          );
          return React__namespace.createElement(
            "div",
            {
              style: className ? undefined : outsideStyles,
              className: className,
              dir: dir,
              role: "progressbar",
              "aria-valuenow": parseFloat(labelStr),
              "aria-valuemin": ariaValuemin,
              "aria-valuemax": ariaValuemax,
              "aria-valuetext": "".concat(
                ariaValuetext === null ? labelStr : ariaValuetext
              ),
            },
            React__namespace.createElement(
              "div",
              {
                style: barContainerClassName ? undefined : containerStyles,
                className: barContainerClassName,
              },
              React__namespace.createElement(
                "div",
                {
                  style: completedClassName ? undefined : fillerStyles,
                  className: completedClassName,
                },
                labelAlignment !== "outside" &&
                  React__namespace.createElement(
                    "span",
                    {
                      style: labelClassName ? undefined : labelStyles,
                      className: labelClassName,
                    },
                    labelStr
                  )
              )
            ),
            labelAlignment === "outside" &&
              React__namespace.createElement(
                "span",
                {
                  style: labelClassName ? undefined : labelStyles,
                  className: labelClassName,
                },
                labelStr
              )
          );
        };
        ProgressBar.propTypes = {
          completed: PropTypes__namespace.oneOfType([
            PropTypes__namespace.string,
            PropTypes__namespace.number,
          ]).isRequired,
          bgColor: PropTypes__namespace.string,
          baseBgColor: PropTypes__namespace.string,
          height: PropTypes__namespace.string,
          width: PropTypes__namespace.string,
          borderRadius: PropTypes__namespace.string,
          margin: PropTypes__namespace.string,
          padding: PropTypes__namespace.string,
          labelAlignment: PropTypes__namespace.oneOf([
            "left",
            "center",
            "right",
            "outside",
          ]),
          labelColor: PropTypes__namespace.string,
          labelSize: PropTypes__namespace.string,
          isLabelVisible: PropTypes__namespace.bool,
          className: PropTypes__namespace.string,
          dir: PropTypes__namespace.oneOf(["rtl", "ltr", "auto"]),
          maxCompleted: PropTypes__namespace.number,
          customLabel: PropTypes__namespace.string,
          animateOnRender: PropTypes__namespace.bool,
          barContainerClassName: PropTypes__namespace.string,
          completedClassName: PropTypes__namespace.string,
          labelClassName: PropTypes__namespace.string,
          initCompletedOnAnimation: PropTypes__namespace.oneOfType([
            PropTypes__namespace.string,
            PropTypes__namespace.number,
          ]),
        };
        ProgressBar.defaultProps = {
          bgColor: "#6a1b9a",
          height: "20px",
          width: "100%",
          borderRadius: "50px",
          labelAlignment: "right",
          baseBgColor: "#e0e0de",
          labelColor: "#fff",
          labelSize: "15px",
          isLabelVisible: true,
          dir: "ltr",
          ariaValuemin: 0,
          ariaValuemax: 100,
          ariaValuetext: null,
          maxCompleted: 100,
          animateOnRender: false,
          initCompletedOnAnimation: 0,
        };

        exports["default"] = ProgressBar;

        /***/
      },

    /***/ "./src/client/api/add_funds.ts":
      /*!*************************************!*\
  !*** ./src/client/api/add_funds.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addContributionFunds: () =>
            /* binding */ addContributionFunds,
          /* harmony export */
        });
        /* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @sentry/browser */ "./node_modules/@sentry/core/esm/exports.js"
          );
        /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./api */ "./src/client/api/api.ts");
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

        const addContributionFunds = ({ configuration, data, goalId }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            try {
              const res = yield (0, _api__WEBPACK_IMPORTED_MODULE_0__.postData)(
                {
                  endpoint: `/goals/${goalId}/contribute`,
                  token: configuration.token,
                  data: data,
                }
              );
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

    /***/ "./src/client/api/savings-triggers.ts":
      /*!********************************************!*\
  !*** ./src/client/api/savings-triggers.ts ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
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

    /***/ "./src/client/pages/components/AddFundsButton.tsx":
      /*!********************************************************!*\
  !*** ./src/client/pages/components/AddFundsButton.tsx ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AddFundsButton: () =>
            /* binding */ AddFundsButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_assets_images_savings_add_flag_webp__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/assets/images/savings/add-flag.webp */ "./src/client/assets/images/savings/add-flag.webp"
          );

        const AddFundsButton = ({ onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "button",
            Object.assign(
              {
                className: `rounded-full ${"h-12 w-12"} bg-skin-primary shadow-button flex items-center justify-center`,
                onClick: onClick,
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "div",
                  Object.assign(
                    { className: "p-2.5" },
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "img",
                        {
                          src: client_assets_images_savings_add_flag_webp__WEBPACK_IMPORTED_MODULE_1__,
                        }
                      ),
                    }
                  )
                ),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/MoreButton.tsx":
      /*!****************************************************!*\
  !*** ./src/client/pages/components/MoreButton.tsx ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MoreButton: () => /* binding */ MoreButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const MoreButton = ({ onClick, size }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "button",
            Object.assign(
              {
                className: `rounded-full ${
                  size ? size : "h-14 w-14"
                } border border-1 border-skin-primary text-skin-primary flex items-center justify-center focus:outline-none focus:rounded-full`,
                onClick: onClick,
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "div",
                  Object.assign(
                    { className: "p-2.5" },
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiMoreHorizontal,
                        { size: "1.5rem" }
                      ),
                    }
                  )
                ),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/PauseButton.tsx":
      /*!*****************************************************!*\
  !*** ./src/client/pages/components/PauseButton.tsx ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PauseButton: () => /* binding */ PauseButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const PauseButton = ({ onClick, size }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "button",
            Object.assign(
              {
                className: `rounded-full ${
                  size ? size : "h-14 w-14"
                } border border-1 border-skin-primary text-skin-primary flex items-center justify-center focus:outline-none focus:rounded-full`,
                onClick: onClick,
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "div",
                  Object.assign(
                    { className: "p-2.5" },
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiPause,
                        { size: "1.5rem" }
                      ),
                    }
                  )
                ),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/ProgressBar.tsx":
      /*!*****************************************************!*\
  !*** ./src/client/pages/components/ProgressBar.tsx ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CustomProgressBar: () =>
            /* binding */ CustomProgressBar,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @ramonak/react-progress-bar */ "./node_modules/@ramonak/react-progress-bar/dist/index.js"
          );
        /* harmony import */ var _assets_images_savings_yellow_flag_svg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../assets/images/savings/yellow-flag.svg */ "./src/client/assets/images/savings/yellow-flag.svg"
          );
        /* harmony import */ var _assets_images_savings_attained_flag_svg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../assets/images/savings/attained_flag.svg */ "./src/client/assets/images/savings/attained_flag.svg"
          );
        /* harmony import */ var _assets_images_savings_complete_goal_star_svg__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../assets/images/savings/complete-goal-star.svg */ "./src/client/assets/images/savings/complete-goal-star.svg"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const CustomProgressBar = ({
          progressPercentage,
          isActive = false,
        }) => {
          const knobPosition = progressPercentage * 3;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_1__[
                      "default"
                    ],
                    {
                      completed: progressPercentage,
                      height: "8px",
                      baseBgColor: `${isActive ? "#D6EAD4" : "#F2F5F8"}`,
                      bgColor: `${isActive ? "#85C17F" : "#D0DDEA"}`,
                      isLabelVisible: false,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className: `absolute -top-5`,
                        style: { left: knobPosition },
                      },
                      {
                        children: isActive
                          ? progressPercentage !== 100
                            ? (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "bg-skin-successSecondary border border-1 border-skin-successNeutral w-11 h-11 rounded-full flex items-center justify-center font-custom text-xs text-skin-white font-semibold tracking-tight",
                                  },
                                  { children: `${progressPercentage}%` }
                                )
                              )
                            : (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                {}
                              )
                          : (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "bg-skin-accent shadow-knob w-9 h-9 rounded-full flex items-center justify-center font-custom text-xs font-semibold tracking-tight mt-1 text-skin-primary",
                                },
                                {
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPause,
                                    {}
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
                      { className: "absolute -top-6 right-1" },
                      {
                        children:
                          progressPercentage !== 100
                            ? (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "img",
                                {
                                  src: _assets_images_savings_yellow_flag_svg__WEBPACK_IMPORTED_MODULE_3__,
                                }
                              )
                            : (0,
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
                                          src: _assets_images_savings_attained_flag_svg__WEBPACK_IMPORTED_MODULE_4__,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        "div",
                                        Object.assign(
                                          {
                                            className:
                                              " absolute -top-3 -left-2",
                                          },
                                          {
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "img",
                                              {
                                                src: _assets_images_savings_complete_goal_star_svg__WEBPACK_IMPORTED_MODULE_5__,
                                              }
                                            ),
                                          }
                                        )
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        "div",
                                        Object.assign(
                                          { className: "absolute -top-4" },
                                          {
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "img",
                                              {
                                                src: _assets_images_savings_complete_goal_star_svg__WEBPACK_IMPORTED_MODULE_5__,
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
                                              "absolute -right-2 -top-3",
                                          },
                                          {
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "img",
                                              {
                                                src: _assets_images_savings_complete_goal_star_svg__WEBPACK_IMPORTED_MODULE_5__,
                                              }
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
                  ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/ResumeButton.tsx":
      /*!******************************************************!*\
  !*** ./src/client/pages/components/ResumeButton.tsx ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ResumeButton: () => /* binding */ ResumeButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const ResumeButton = ({ onClick, size }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "button",
            Object.assign(
              {
                className: `rounded-full ${
                  size ? size : "h-14 w-14"
                } border border-1 border-skin-primary text-skin-primary flex items-center justify-center focus:outline-none focus:rounded-full p-2.5 `,
                onClick: onClick,
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiPlay,
                  { size: "1.5rem", color: "#0539ec", fill: "#0539ec" }
                ),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/TransactionCard.tsx":
      /*!*********************************************************!*\
  !*** ./src/client/pages/components/TransactionCard.tsx ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/utils/Formatters */ "./src/client/utils/Formatters.ts"
          );

        const TransactionCard = ({
          id,
          goalName,
          activityName,
          emoji,
          amount,
          transacted_at,
          type,
        }) => {
          const transactedAt = new Date(transacted_at);
          const currencySymbol = "₦";
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              {
                className:
                  "rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2 border-solid border-gray",
                id: "al-transaction-card",
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  Object.assign(
                    { className: "flex flex-row justify-between items-center" },
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            { className: "flex flex-col" },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                "div",
                                Object.assign(
                                  { className: "flex flex-row items-center" },
                                  {
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        "div",
                                        Object.assign(
                                          { className: "flex flex-col mr-3" },
                                          {
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "div",
                                              Object.assign(
                                                { className: "relative" },
                                                {
                                                  children: (0,
                                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                    "div",
                                                    Object.assign(
                                                      {
                                                        className:
                                                          "rounded-full bg-skin-secondaryWithOpacity h-8 w-8 flex justify-center items-center",
                                                      },
                                                      { children: emoji }
                                                    )
                                                  ),
                                                }
                                              )
                                            ),
                                          }
                                        )
                                      ),
                                      (0,
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
                                                      "font-custom text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-40",
                                                    id: "al-transaction-card--merchant-name",
                                                  },
                                                  { children: activityName }
                                                )
                                              ),
                                              (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                "div",
                                                Object.assign(
                                                  {
                                                    className: `font-custom text-xs font-medium ${
                                                      goalName === null
                                                        ? "text-skin-subtitle"
                                                        : "text-skin-subtitle"
                                                    } tracking-wide text-start`,
                                                    id: "al-transaction-card--category-name",
                                                  },
                                                  { children: goalName }
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
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            { className: "flex flex-col" },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom text-sm font-medium text-skin-success text-end text-ellipsis overflow-hidden whitespace-nowrap flex-row",
                                      id: "al-transaction-card--amount",
                                    },
                                    {
                                      children: [
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "span",
                                          {
                                            children: (0,
                                            client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__.checkIfDebitCredit)(
                                              type
                                            ),
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "span",
                                          Object.assign(
                                            {
                                              className:
                                                "font-custom text-sm font-medium text-skin-success mx-1",
                                            },
                                            { children: currencySymbol }
                                          )
                                        ),
                                        Math.round(amount).toLocaleString(
                                          "en-US"
                                        ),
                                      ],
                                    }
                                  )
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "font-custom text-xxxs text-skin-subtitle text-end tracking-wide font-medium",
                                    },
                                    {
                                      children: (0,
                                      client_utils_Formatters__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(
                                        transactedAt
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
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TransactionCard;

        /***/
      },

    /***/ "./src/client/pages/components/TriggerCard.tsx":
      /*!*****************************************************!*\
  !*** ./src/client/pages/components/TriggerCard.tsx ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/assets/images/savings/trigger.png */ "./src/client/assets/images/savings/trigger.png"
          );

        const TriggerCard = ({
          id,
          appliedTo,
          percentage,
          image,
          created_at,
        }) => {
          const createdAt = new Date(created_at);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              {
                className:
                  "rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2 border-solid border-gray",
                id: "al-transaction-card",
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "div",
                  Object.assign(
                    { className: "flex flex-row justify-between items-center" },
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        Object.assign(
                          { className: "flex flex-col" },
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              Object.assign(
                                { className: "flex flex-row items-center" },
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      Object.assign(
                                        {
                                          className:
                                            "flex flex-col mr-3 justify-start",
                                        },
                                        {
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            "div",
                                            Object.assign(
                                              { className: "relative" },
                                              {
                                                children: (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                  "div",
                                                  Object.assign(
                                                    {
                                                      className:
                                                        "rounded-full bg-skin-secondaryWithOpacity h-8 w-8 flex justify-center",
                                                    },
                                                    {
                                                      children: (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                        "img",
                                                        {
                                                          src:
                                                            image !== null &&
                                                            image !== void 0
                                                              ? image
                                                              : client_assets_images_savings_trigger_png__WEBPACK_IMPORTED_MODULE_1__,
                                                        }
                                                      ),
                                                    }
                                                  )
                                                ),
                                              }
                                            )
                                          ),
                                        }
                                      )
                                    ),
                                    (0,
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
                                                    "font-custom text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40",
                                                },
                                                { children: "Round it up" }
                                              )
                                            ),
                                            (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              "div",
                                              Object.assign(
                                                {
                                                  className: `font-custom text-xs font-medium text-skin-subtitle tracking-wide text-start`,
                                                },
                                                {
                                                  children: `x${percentage}%, ${appliedTo}`,
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
                    }
                  )
                ),
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TriggerCard;

        /***/
      },

    /***/ "./src/client/pages/components/goalview/ActionComponent.tsx":
      /*!******************************************************************!*\
  !*** ./src/client/pages/components/goalview/ActionComponent.tsx ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ActionComponent: () =>
            /* binding */ ActionComponent,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );

        const ActionComponent = ({ child, title }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col items-center mx-3.5" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    { children: child }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "mt-2 font-custom text-xs text-skin-primary tracking-longtext font-semibold",
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

    /***/ "./src/client/pages/components/goalview/ActivitiesView.tsx":
      /*!*****************************************************************!*\
  !*** ./src/client/pages/components/goalview/ActivitiesView.tsx ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ActivitiesView: () =>
            /* binding */ ActivitiesView,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var _TransactionCard__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../TransactionCard */ "./src/client/pages/components/TransactionCard.tsx"
          );
        /* harmony import */ var client_pages_goal_view_GoalViewEmptyState__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/pages/goal-view/GoalViewEmptyState */ "./src/client/pages/goal-view/GoalViewEmptyState.tsx"
          );

        const ActivitiesView = ({ activities, goal }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              { className: "overflow-y-auto px-3.5" },
              {
                children:
                  activities.length === 0
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        client_pages_goal_view_GoalViewEmptyState__WEBPACK_IMPORTED_MODULE_1__.GoalViewEmptyState,
                        {}
                      )
                    : activities.map((activity, i) => {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _TransactionCard__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ],
                          {
                            goalName: goal.name,
                            activityName: "Deposit",
                            amount: activity.amount,
                            emoji: "\uD83C\uDFAF",
                            transacted_at: activity.contribution_date,
                          },
                          activity.id
                        );
                      }),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/goalview/AddRuleButton.tsx":
      /*!****************************************************************!*\
  !*** ./src/client/pages/components/goalview/AddRuleButton.tsx ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AddRuleButton: () => /* binding */ AddRuleButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const AddRuleButton = ({ label, onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              {
                className: "flex flex-row items-center ml-4",
                onClick: onClick,
              },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "w-8 h-8 text-skin-primary bg-skin-secondaryWithOpacity rounded-full mr-3 flex items-center justify-center",
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiPlus,
                          { size: "1rem" }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "font-custom font-semibold text-tiny tracking-tab_text text-skin-neutral",
                      },
                      { children: label }
                    )
                  ),
                ],
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/goalview/CustomResumeDateButton.tsx":
      /*!*************************************************************************!*\
  !*** ./src/client/pages/components/goalview/CustomResumeDateButton.tsx ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CustomResumeDateButton: () =>
            /* binding */ CustomResumeDateButton,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/utils/Formatters */ "./src/client/utils/Formatters.ts"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css"
          );
        /* harmony import */ var _CustomDatePicker__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../CustomDatePicker */ "./src/client/pages/components/CustomDatePicker.tsx"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );

        const CustomResumeDateButton = ({ isActive, click }) => {
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_4__.useConfigurationStore)(
            (state) => state.configuration
          );
          const { isFetching: fetchingMaturityDate, refetch: maturiryDate } =
            (0, react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(
              "maturity-date",
              () =>
                (0,
                client_api_goal__WEBPACK_IMPORTED_MODULE_5__.getMaturityDate)({
                  configuration: configuration,
                  data: {
                    date_str: (0,
                    client_utils_Formatters__WEBPACK_IMPORTED_MODULE_6__.rightDateFormat)(
                      goal.resume_at.toString()
                    ),
                  },
                  goalId: goal.confirmedGoal.id,
                }).then((result) => {
                  if (result) {
                    goal.setMaturityDate(result.maturity_date);
                  }
                }),
              { refetchOnWindowFocus: false, enabled: false }
            );
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_7__["default"])(
            (state) => state
          );
          // Get the selected date from the store
          const selectedDate = goal.resume_at;
          // Format the date to 'dd/MM/yyyy'
          const dateString = selectedDate
            ? selectedDate.toLocaleDateString("en-GB")
            : "Custom";
          const ExampleCustomInput = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
            ({ value, onClick }, ref) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "div",
                Object.assign(
                  {
                    className:
                      "rounded-3xl border border-1 border-skin-primary p-px mx-1",
                    onClick: click,
                  },
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      "div",
                      Object.assign(
                        {
                          onClick: onClick,
                          className: `rounded-3xl py-3 px-3.5 flex items-center justify-center ${
                            isActive
                              ? "bg-skin-primary text-white"
                              : "text-skin-neutral bg-skin-base"
                          }`,
                        },
                        {
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "font-custom font-medium text-xs tracking-wide text-center",
                              },
                              { children: isActive ? dateString : "Custom" }
                            )
                          ),
                        }
                      )
                    ),
                  }
                )
              )
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _CustomDatePicker__WEBPACK_IMPORTED_MODULE_8__.CustomDatePicker,
            Object.assign(
              {
                selectedDate: selectedDate,
                onDateChange: (date) => {
                  goal.setResumeAtDate(date);
                  setTimeout(() => {
                    maturiryDate();
                  }, 500);
                },
                minDate: new Date(),
              },
              {
                children: ({ toggleCalendar }) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    ExampleCustomInput,
                    { onClick: toggleCalendar }
                  ),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/components/goalview/DeleteIntro.tsx":
      /*!**************************************************************!*\
  !*** ./src/client/pages/components/goalview/DeleteIntro.tsx ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DeleteIntro: () => /* binding */ DeleteIntro,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );

        const DeleteIntro = ({ deleteGoal, onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col mx-3.5 mt-16 mb-8 relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute -top-16 right-1" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _CloseButton__WEBPACK_IMPORTED_MODULE_1__["default"],
                          {
                            background: "bg-skin-secondaryWithOpacity",
                            onClick: onClick,
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "button",
                    Object.assign(
                      {
                        className:
                          "rounded-lg border border-1 border-skin-danger text-skin-danger py-3.5 mt-3",
                        onClick: deleteGoal,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row justify-center items-center",
                            },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTrash2,
                                  {}
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "text-base font-semibold font-custom tracking-longest_text ml-2",
                                    },
                                    { children: "Delete goal" }
                                  )
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

    /***/ "./src/client/pages/components/goalview/GoalViewBalanceView.tsx":
      /*!**********************************************************************!*\
  !*** ./src/client/pages/components/goalview/GoalViewBalanceView.tsx ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ GoalViewBalanceView: () =>
            /* binding */ GoalViewBalanceView,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! client/utils/Formatters */ "./src/client/utils/Formatters.ts"
          );
        /* harmony import */ var _Amount__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../Amount */ "./src/client/pages/components/Amount.tsx"
          );

        const GoalViewBalanceView = ({ contributedAmount, amount }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row justify-center" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Amount__WEBPACK_IMPORTED_MODULE_1__.Amount,
                          {
                            balance: contributedAmount,
                            textColor: "text-white",
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
                          "flex flex-row text-white/80 font-semibold font-custom text-xs tracking-subtitle justify-center",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mr-1" },
                              { children: "of" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mr-1" },
                              { children: "\uD83C\uDFAF" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mr-1" },
                              {
                                children: (0,
                                client_utils_Formatters__WEBPACK_IMPORTED_MODULE_2__.checkNAN)(
                                  Math.round(amount)
                                ).toLocaleString(),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "span",
                            { children: "saved" }
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

        /***/
      },

    /***/ "./src/client/pages/components/goalview/SelectResumeDate.tsx":
      /*!*******************************************************************!*\
  !*** ./src/client/pages/components/goalview/SelectResumeDate.tsx ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SelectResumeDateButton: () =>
            /* binding */ SelectResumeDateButton,
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
        /* harmony import */ var _CustomResumeDateButton__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./CustomResumeDateButton */ "./src/client/pages/components/goalview/CustomResumeDateButton.tsx"
          );

        const SelectResumeDateButton = ({ label, isActive, onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              {
                className:
                  "rounded-3xl border border-1 border-skin-primary p-px mx-1",
              },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "div",
                  Object.assign(
                    {
                      onClick: onClick,
                      className: `rounded-3xl py-3 px-3.5 flex items-center justify-center ${
                        isActive
                          ? "bg-skin-primary text-white"
                          : "text-skin-neutral bg-skin-base"
                      }`,
                    },
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        Object.assign(
                          {
                            className:
                              "font-custom font-medium text-xs tracking-wide text-center",
                          },
                          { children: label }
                        )
                      ),
                    }
                  )
                ),
              }
            )
          );
        };
        const SelectResumeDate = ({
          title,
          onClick,
          activeOption,
          selectDateOptions,
        }) => {
          const [customButton, selectCustomButton] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row justify-center mb-4" },
                      {
                        children: title
                          ? (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "font-custom text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center",
                                },
                                {
                                  children:
                                    title !== null && title !== void 0
                                      ? title
                                      : "",
                                }
                              )
                            )
                          : (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              {}
                            ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row" },
                      {
                        children: selectDateOptions.map((option, i) => {
                          const active = option.id === activeOption;
                          return (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            {
                              children:
                                i === 1
                                  ? (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _CustomResumeDateButton__WEBPACK_IMPORTED_MODULE_2__.CustomResumeDateButton,
                                      {
                                        isActive: active,
                                        click: () => {
                                          if (onClick) {
                                            onClick(option.id);
                                          }
                                        },
                                      }
                                    )
                                  : (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      SelectResumeDateButton,
                                      {
                                        label: option.title,
                                        isActive: active,
                                        onClick: () => {
                                          if (onClick) {
                                            onClick(option.id);
                                          }
                                        },
                                      },
                                      i
                                    ),
                            },
                            i
                          );
                        }),
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SelectResumeDate;

        /***/
      },

    /***/ "./src/client/pages/components/goalview/TriggersView.tsx":
      /*!***************************************************************!*\
  !*** ./src/client/pages/components/goalview/TriggersView.tsx ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TriggersView: () => /* binding */ TriggersView,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var _TriggerCard__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../TriggerCard */ "./src/client/pages/components/TriggerCard.tsx"
          );
        /* harmony import */ var _AddRuleButton__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./AddRuleButton */ "./src/client/pages/components/goalview/AddRuleButton.tsx"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );

        const TriggersView = ({ triggers }) => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col px-3.5" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    {
                      children: triggers.map((trigger, i) => {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _TriggerCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                          {
                            triggerName: trigger.merchant_name,
                            image: trigger.image,
                            percentage: trigger.round_up_percentage,
                            appliedTo: trigger.merchant_name,
                            created_at: trigger.created_at,
                          },
                          trigger.id
                        );
                      }),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "mt-2" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _AddRuleButton__WEBPACK_IMPORTED_MODULE_3__.AddRuleButton,
                          {
                            label: "Add rule",
                            onClick: () => navigate("/savings-trigger"),
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

        /***/
      },

    /***/ "./src/client/pages/goal-view/AddFunds.tsx":
      /*!*************************************************!*\
  !*** ./src/client/pages/goal-view/AddFunds.tsx ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AddFunds: () => /* binding */ AddFunds,
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
        /* harmony import */ var _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/goal-creation/Input */ "./src/client/pages/components/goal-creation/Input.tsx"
          );
        /* harmony import */ var _components_MainButton__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/MainButton */ "./src/client/pages/components/MainButton.tsx"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var client_store_AddFundsStore__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/AddFundsStore */ "./src/client/store/AddFundsStore.ts"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_api_add_funds__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/api/add_funds */ "./src/client/api/add_funds.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );

        const AddFunds = () => {
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_3__["default"])(
            (state) => state
          );
          const [finalAmount, setFinalAmount] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(
            goal.confirmedGoal.contribution_amount
          );
          const addFundsStore = (0,
          client_store_AddFundsStore__WEBPACK_IMPORTED_MODULE_4__["default"])(
            (state) => state
          );
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)(
            (state) => state.configuration
          );
          const { isFetching: addingFunds, refetch: addTheFunds } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "addfunds",
            () =>
              (0,
              client_api_add_funds__WEBPACK_IMPORTED_MODULE_6__.addContributionFunds)(
                {
                  configuration: configuration,
                  data: {
                    amount: finalAmount,
                  },
                  goalId: goal.confirmedGoal.id,
                }
              ).then((_) => {
                (0,
                client_api_goal__WEBPACK_IMPORTED_MODULE_7__.getConfirmedGoals)(
                  { configuration: configuration }
                ).then((result) => {
                  if (result) {
                    goal.setConfirmedGoals(result);
                    addFundsStore.openAddFundBottomSheet(false);
                  }
                });
              }),
            { refetchOnWindowFocus: false, enabled: false }
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col mx-3.5 items-center relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute top-0 right-1" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_CloseButton__WEBPACK_IMPORTED_MODULE_8__[
                            "default"
                          ],
                          {
                            background: "bg-skin-secondaryWithOpacity",
                            onClick: () => {
                              addFundsStore.openAddFundBottomSheet(false);
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
                          "font-custom text-skin-base text-base font-semibold tracking-title mt-16",
                      },
                      { children: "I would like to fund my goal by depositing" }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "mt-7 mx-3.5 flex flex-row justify-center" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_goal_creation_Input__WEBPACK_IMPORTED_MODULE_9__.AddMonthlyIncomeInput,
                          {
                            addValue: (e) => setFinalAmount(e),
                            value: finalAmount,
                            increment: () => {
                              setFinalAmount(finalAmount + 500);
                            },
                            decrement: () => {
                              if (finalAmount > 0) {
                                setFinalAmount(finalAmount - 500);
                              }
                            },
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "w-full mt-10" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_MainButton__WEBPACK_IMPORTED_MODULE_10__[
                            "default"
                          ],
                          {
                            title: "Fund my goal",
                            click: () => addTheFunds(),
                            loading: addingFunds,
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

        /***/
      },

    /***/ "./src/client/pages/goal-view/DeleteGoal.tsx":
      /*!***************************************************!*\
  !*** ./src/client/pages/goal-view/DeleteGoal.tsx ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DeleteGoal: () => /* binding */ DeleteGoal,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );

        const DeleteGoal = ({ deleteGoal, onClick, keepGoal, goalName }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col mx-3.5 mt-16 mb-8 relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute -top-16 right-1" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_CloseButton__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ],
                          {
                            background: "bg-skin-secondaryWithOpacity",
                            onClick: onClick,
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
                          "flex flex-row justify-start item-start font-medium text-tiny font-custom text-skin-base tracking-subtitle mr-4 mb-8",
                      },
                      {
                        children: `Are you sure you’d like to delete your ${
                          goalName !== null && goalName !== void 0
                            ? goalName
                            : ""
                        } goal?`,
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "button",
                    Object.assign(
                      {
                        className:
                          "rounded-lg text-skin-primary py-3.5 bg-skin-danger",
                        onClick: deleteGoal,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row justify-center items-center",
                            },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "text-base font-semibold font-custom tracking-longest_text ml-2 text-skin-white",
                                  },
                                  { children: "Yes, delete goal" }
                                )
                              ),
                            }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "button",
                    Object.assign(
                      {
                        className: "rounded-lg text-skin-danger py-3.5 mt-3",
                        onClick: keepGoal,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row justify-center items-center",
                            },
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "text-base font-semibold font-custom tracking-longest_text ml-2 text-skin-primary border border-skin-primary w-screen rounded-lg h-14 flex flex-row items-center justify-center",
                                  },
                                  { children: "No, let's keep the goal" }
                                )
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

        /***/
      },

    /***/ "./src/client/pages/goal-view/GoalView.tsx":
      /*!*************************************************!*\
  !*** ./src/client/pages/goal-view/GoalView.tsx ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var client_assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! client/assets/images/savings/goalviewoverlay.svg */ "./src/client/assets/images/savings/goalviewoverlay.svg"
          );
        /* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx"
          );
        /* harmony import */ var _components_SettingsButton__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ../components/SettingsButton */ "./src/client/pages/components/SettingsButton.tsx"
          );
        /* harmony import */ var _assets_images_savings_settings_neutral_svg__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ../../assets/images/savings/settings-neutral.svg */ "./src/client/assets/images/savings/settings-neutral.svg"
          );
        /* harmony import */ var _components_goalview_GoalViewBalanceView__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../components/goalview/GoalViewBalanceView */ "./src/client/pages/components/goalview/GoalViewBalanceView.tsx"
          );
        /* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../components/ProgressBar */ "./src/client/pages/components/ProgressBar.tsx"
          );
        /* harmony import */ var _components_goalview_ActionComponent__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ../components/goalview/ActionComponent */ "./src/client/pages/components/goalview/ActionComponent.tsx"
          );
        /* harmony import */ var _components_PauseButton__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! ../components/PauseButton */ "./src/client/pages/components/PauseButton.tsx"
          );
        /* harmony import */ var _components_MoreButton__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(
            /*! ../components/MoreButton */ "./src/client/pages/components/MoreButton.tsx"
          );
        /* harmony import */ var _components_AddFundsButton__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ../components/AddFundsButton */ "./src/client/pages/components/AddFundsButton.tsx"
          );
        /* harmony import */ var _components_TabFilter__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(
            /*! ../components/TabFilter */ "./src/client/pages/components/TabFilter.tsx"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_goalview_ActivitiesView__WEBPACK_IMPORTED_MODULE_33__ =
          __webpack_require__(
            /*! ../components/goalview/ActivitiesView */ "./src/client/pages/components/goalview/ActivitiesView.tsx"
          );
        /* harmony import */ var _components_goalview_TriggersView__WEBPACK_IMPORTED_MODULE_34__ =
          __webpack_require__(
            /*! ../components/goalview/TriggersView */ "./src/client/pages/components/goalview/TriggersView.tsx"
          );
        /* harmony import */ var react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! react-spring-bottom-sheet */ "./node_modules/react-spring-bottom-sheet/dist/index.es.js"
          );
        /* harmony import */ var _PauseGoal__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! ./PauseGoal */ "./src/client/pages/goal-view/PauseGoal.tsx"
          );
        /* harmony import */ var _PauseDeleteGoal__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(
            /*! ./PauseDeleteGoal */ "./src/client/pages/goal-view/PauseDeleteGoal.tsx"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var _components_ResumeButton__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! ../components/ResumeButton */ "./src/client/pages/components/ResumeButton.tsx"
          );
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );
        /* harmony import */ var _DeleteGoal__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(
            /*! ./DeleteGoal */ "./src/client/pages/goal-view/DeleteGoal.tsx"
          );
        /* harmony import */ var client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/goalContributionSettingsStore */ "./src/client/store/goalContributionSettingsStore.ts"
          );
        /* harmony import */ var client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! client/api/savings-triggers */ "./src/client/api/savings-triggers.ts"
          );
        /* harmony import */ var client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! client/store/bankAccountStore */ "./src/client/store/bankAccountStore.ts"
          );
        /* harmony import */ var _AddFunds__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(
            /*! ./AddFunds */ "./src/client/pages/goal-view/AddFunds.tsx"
          );
        /* harmony import */ var client_store_AddFundsStore__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! client/store/AddFundsStore */ "./src/client/store/AddFundsStore.ts"
          );
        /* harmony import */ var _components_goalview_DeleteIntro__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(
            /*! ../components/goalview/DeleteIntro */ "./src/client/pages/components/goalview/DeleteIntro.tsx"
          );

        const GoalView = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const [tabIndex, setTabIndex] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_5__.useConfigurationStore)(
            (state) => state.configuration
          );
          const goalContributionSettings = (0,
          client_store_goalContributionSettingsStore__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ])((state) => state);
          const goalviewTabs = [
            {
              tab_id: 0,
              name: "Activity",
              icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiActivity,
                {}
              ),
            },
            {
              tab_id: 1,
              name: "Triggers",
              icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiTrendingUp,
                {}
              ),
            },
          ];
          const accountStore = (0,
          client_store_bankAccountStore__WEBPACK_IMPORTED_MODULE_8__[
            "default"
          ])((state) => state);
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_9__["default"])(
            (state) => state
          );
          const addFundsStore = (0,
          client_store_AddFundsStore__WEBPACK_IMPORTED_MODULE_10__["default"])(
            (state) => state
          );
          const currentGoal = goal.confirmedGoals.find(
            (element) => element.id === goal.confirmedGoal.id
          );
          const { refetch: resumeTheGoal } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "resume-goal",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_11__.resumeGoal)({
                configuration: configuration,
                goalId: goal.confirmedGoal.id,
                data: {},
              }).then((result) => {
                if (result) {
                  (0,
                  client_api_goal__WEBPACK_IMPORTED_MODULE_11__.getConfirmedGoals)(
                    { configuration: configuration }
                  ).then((result) => {
                    goal.setConfirmedGoals(result);
                  });
                }
              }),
            { refetchOnWindowFocus: true, enabled: false }
          );
          const { refetch: deleteTheGoal } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "delete goal",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_11__.deleteGoal)({
                configuration: configuration,
                goalId: goal.confirmedGoal.id,
              }).then((result) => {
                if (result) {
                  goal.openDeleteBottomSheet(false);
                  goal.openPauseDeleteBottomSheet(false);
                  (0,
                  client_api_goal__WEBPACK_IMPORTED_MODULE_11__.getConfirmedGoals)(
                    { configuration: configuration }
                  ).then((result) => {
                    goal.setConfirmedGoals(result);
                  });
                }
              }),
            { refetchOnWindowFocus: false, enabled: false }
          );
          const { image_url } = goal.confirmedGoal.image_url;
          const { refetch: fetchTriggers } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "goal-triggers",
            () =>
              (0,
              client_api_savings_triggers__WEBPACK_IMPORTED_MODULE_12__.fetchGoalTriggers)(
                {
                  configuration: configuration,
                  goalId: goal.confirmedGoal.id,
                }
              ).then((result) => {
                if (result) {
                  goal.setGoalSavingsTriggers(result);
                }
              }),
            { refetchOnWindowFocus: false }
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
                                    src: image_url,
                                    className:
                                      "absolute top-0 right-0 left-0 w-screen object-cover h-80",
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "img",
                                  {
                                    src: client_assets_images_savings_goalviewoverlay_svg__WEBPACK_IMPORTED_MODULE_13__,
                                    className:
                                      "absolute top-0 right-0 left-0 object-cover w-screen",
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
                                          _components_goalview_GoalViewBalanceView__WEBPACK_IMPORTED_MODULE_14__.GoalViewBalanceView,
                                          {
                                            contributedAmount:
                                              currentGoal.total,
                                            amount: currentGoal.amount,
                                          }
                                        ),
                                        (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          "div",
                                          Object.assign(
                                            {
                                              className: "mt-8 w-screen px-3.5",
                                            },
                                            {
                                              children: (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                _components_ProgressBar__WEBPACK_IMPORTED_MODULE_15__.CustomProgressBar,
                                                {
                                                  progressPercentage:
                                                    currentGoal.progress,
                                                  isActive:
                                                    currentGoal.is_active,
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
                                                "text-white/80 font-semibold font-custom text-xs tracking-subtitle text-center mt-5",
                                            },
                                            { children: `` }
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
                          _components_NavBar__WEBPACK_IMPORTED_MODULE_16__[
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
                                      _components_BackButton__WEBPACK_IMPORTED_MODULE_17__[
                                        "default"
                                      ],
                                      {
                                        background: "bg-skin-base",
                                        onClick: () => {
                                          goal.setGoalSavingsTriggers([]);
                                          navigate(-1);
                                        },
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_18__[
                                        "default"
                                      ],
                                      {
                                        title: `${goal.confirmedGoal.name}`,
                                        titleColor: "text-white",
                                      }
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_SettingsButton__WEBPACK_IMPORTED_MODULE_19__[
                                        "default"
                                      ],
                                      {
                                        background: "bg-skin-base",
                                        icon: _assets_images_savings_settings_neutral_svg__WEBPACK_IMPORTED_MODULE_20__,
                                        onClick: () => {
                                          goal.setGoalImageUrl(
                                            currentGoal.image_url.image_url
                                          );
                                          goal.setGoalName(currentGoal.name);
                                          goal.setGoalAmount(
                                            currentGoal.amount
                                          );
                                          goal.setGoalFrequency(
                                            currentGoal.frequency_text
                                          );
                                          accountStore.setSavingAccount(
                                            currentGoal.bank_account_details !==
                                              null
                                              ? currentGoal.bank_account_details
                                              : {}
                                          );
                                          goalContributionSettings.setContributionFrequency(
                                            currentGoal.frequency
                                          );
                                          navigate("/update-goal");
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
                          "w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-72 bottom-0 pt-9",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "flex flex-row justify-center px-3.5",
                              },
                              {
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_goalview_ActionComponent__WEBPACK_IMPORTED_MODULE_21__.ActionComponent,
                                    {
                                      child: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_AddFundsButton__WEBPACK_IMPORTED_MODULE_22__.AddFundsButton,
                                        {
                                          onClick: () => {
                                            addFundsStore.openAddFundBottomSheet(
                                              true
                                            );
                                          },
                                        }
                                      ),
                                      title: "Add funds",
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.BottomSheet,
                                    {
                                      onDismiss: () =>
                                        addFundsStore.openAddFundBottomSheet(
                                          false
                                        ),
                                      open: addFundsStore.bottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _AddFunds__WEBPACK_IMPORTED_MODULE_24__.AddFunds,
                                        {}
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_goalview_ActionComponent__WEBPACK_IMPORTED_MODULE_21__.ActionComponent,
                                    {
                                      child: currentGoal.is_active
                                        ? (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            _components_PauseButton__WEBPACK_IMPORTED_MODULE_25__.PauseButton,
                                            {
                                              size: "h-12 w-12",
                                              onClick: () => {
                                                goal.openPauseDeleteBottomSheet(
                                                  true
                                                );
                                              },
                                            }
                                          )
                                        : (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            _components_ResumeButton__WEBPACK_IMPORTED_MODULE_26__.ResumeButton,
                                            {
                                              size: "h-12 w-12",
                                              onClick: () => resumeTheGoal(),
                                            }
                                          ),
                                      title: currentGoal.is_active
                                        ? "Pause goal"
                                        : "Resume goal",
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _components_goalview_ActionComponent__WEBPACK_IMPORTED_MODULE_21__.ActionComponent,
                                    {
                                      child: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_MoreButton__WEBPACK_IMPORTED_MODULE_27__.MoreButton,
                                        {
                                          size: "h-12 w-12",
                                          onClick: () => {
                                            goal.openMoreBottomSheet(true);
                                          },
                                        }
                                      ),
                                      title: "More",
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.BottomSheet,
                                    {
                                      onDismiss: () =>
                                        goal.openMoreBottomSheet(false),
                                      open: goal.moreBottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_goalview_DeleteIntro__WEBPACK_IMPORTED_MODULE_28__.DeleteIntro,
                                        {
                                          deleteGoal: () =>
                                            goal.openDeleteBottomSheet(true),
                                          onClick: () =>
                                            goal.openMoreBottomSheet(false),
                                        }
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.BottomSheet,
                                    {
                                      onDismiss: () =>
                                        goal.openDeleteBottomSheet(false),
                                      open: goal.deleteGoalBottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _DeleteGoal__WEBPACK_IMPORTED_MODULE_29__.DeleteGoal,
                                        {
                                          onClick: () =>
                                            goal.openDeleteBottomSheet(false),
                                          deleteGoal: () => {
                                            navigate("/delete-goal");
                                            deleteTheGoal();
                                          },
                                          goalName: `${goal.confirmedGoal.name}`,
                                        }
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.BottomSheet,
                                    {
                                      open: goal.pauseGoalBottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _PauseGoal__WEBPACK_IMPORTED_MODULE_30__.PauseGoal,
                                        {
                                          onClick: () =>
                                            goal.openPauseGoalBottomSheet(
                                              false
                                            ),
                                          goalName: goal.confirmedGoal.name,
                                        }
                                      ),
                                      defaultSnap: 300,
                                    }
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_spring_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.BottomSheet,
                                    {
                                      onDismiss: () => {
                                        goal.openPauseDeleteBottomSheet(false);
                                      },
                                      open: goal.pauseDeleteBottomSheet,
                                      style: {
                                        borderRadius: 24,
                                      },
                                      children: (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _PauseDeleteGoal__WEBPACK_IMPORTED_MODULE_31__.PauseDeleteGoal,
                                        {
                                          pauseGoal: () =>
                                            goal.openPauseGoalBottomSheet(true),
                                          deleteGoal: () =>
                                            goal.openDeleteBottomSheet(true),
                                          onClick: () =>
                                            goal.openPauseDeleteBottomSheet(
                                              false
                                            ),
                                          isPaused: !currentGoal.is_active,
                                          resumeGoal: () =>
                                            resumeTheGoal().finally(() => {
                                              goal.openPauseGoalBottomSheet(
                                                false
                                              );
                                            }),
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
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            {
                              className:
                                "border rounded-2xl mt-6 bg-skin-divider mx-3.5",
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-4" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _components_TabFilter__WEBPACK_IMPORTED_MODULE_32__[
                                    "default"
                                  ],
                                  {
                                    tabs: goalviewTabs,
                                    activeTab: tabIndex,
                                    onClick: (tab) => setTabIndex(tab.tab_id),
                                  }
                                ),
                              }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "mt-5" },
                              {
                                children:
                                  tabIndex == 0
                                    ? (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_goalview_ActivitiesView__WEBPACK_IMPORTED_MODULE_33__.ActivitiesView,
                                        {
                                          activities: currentGoal.activity,
                                          goal: currentGoal,
                                        }
                                      )
                                    : (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _components_goalview_TriggersView__WEBPACK_IMPORTED_MODULE_34__.TriggersView,
                                        { triggers: goal.goalSavingsTriggers }
                                      ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer,
                    {}
                  ),
                ],
              }
            )
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GoalView;

        /***/
      },

    /***/ "./src/client/pages/goal-view/GoalViewEmptyState.tsx":
      /*!***********************************************************!*\
  !*** ./src/client/pages/goal-view/GoalViewEmptyState.tsx ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ GoalViewEmptyState: () =>
            /* binding */ GoalViewEmptyState,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var client_assets_images_savings_empty_state_svg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! client/assets/images/savings/empty-state.svg */ "./src/client/assets/images/savings/empty-state.svg"
          );

        const GoalViewEmptyState = () => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "mt-3" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row justify-center mb-3" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "img",
                          {
                            src: client_assets_images_savings_empty_state_svg__WEBPACK_IMPORTED_MODULE_1__,
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
                          "flex flex-row justify-center font-custom font-semibold text-base tracking-title text-skin-neutral mb-3",
                      },
                      { children: "No registered savings yet!" }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "flex flex-row justify-center font-custom font-medium text-tiny tracking-listtile_subtitle text-center text-skin-subtitle mx-12",
                      },
                      {
                        children:
                          "Start funding your goal to see recent activity.",
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

    /***/ "./src/client/pages/goal-view/PauseDeleteGoal.tsx":
      /*!********************************************************!*\
  !*** ./src/client/pages/goal-view/PauseDeleteGoal.tsx ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PauseDeleteGoal: () =>
            /* binding */ PauseDeleteGoal,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );

        const PauseDeleteGoal = ({
          pauseGoal,
          deleteGoal,
          onClick,
          resumeGoal,
          isPaused,
        }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col mx-3.5 mt-16 mb-8 relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute -top-16 right-1" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_CloseButton__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ],
                          {
                            background: "bg-skin-secondaryWithOpacity",
                            onClick: onClick,
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "button",
                    Object.assign(
                      {
                        className:
                          "rounded-lg border border-1 border-skin-primary text-skin-primary py-3.5 mt-5",
                        onClick: isPaused ? resumeGoal : pauseGoal,
                      },
                      {
                        children: isPaused
                          ? (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "flex flex-row justify-center items-center",
                                },
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPlayCircle,
                                      {}
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      Object.assign(
                                        {
                                          className:
                                            "text-base font-semibold font-custom tracking-longest_text ml-2",
                                        },
                                        { children: "Resume goal" }
                                      )
                                    ),
                                  ],
                                }
                              )
                            )
                          : (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "flex flex-row justify-center items-center",
                                },
                                {
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPauseCircle,
                                      {}
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      "div",
                                      Object.assign(
                                        {
                                          className:
                                            "text-base font-semibold font-custom tracking-longest_text ml-2",
                                        },
                                        { children: "Pause goal" }
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
                    "button",
                    Object.assign(
                      {
                        className: "rounded-lg text-skin-danger py-3.5 mt-3",
                        onClick: deleteGoal,
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          Object.assign(
                            {
                              className:
                                "flex flex-row justify-center items-center",
                            },
                            {
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTrash2,
                                  {}
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  "div",
                                  Object.assign(
                                    {
                                      className:
                                        "text-base font-semibold font-custom tracking-longest_text ml-2",
                                    },
                                    { children: "Delete goal" }
                                  )
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

    /***/ "./src/client/pages/goal-view/PauseGoal.tsx":
      /*!**************************************************!*\
  !*** ./src/client/pages/goal-view/PauseGoal.tsx ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PauseGoal: () => /* binding */ PauseGoal,
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
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var _components_goal_creation_BottomSheetFooter__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../components/goal-creation/BottomSheetFooter */ "./src/client/pages/components/goal-creation/BottomSheetFooter.tsx"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var _components_goalview_SelectResumeDate__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/goalview/SelectResumeDate */ "./src/client/pages/components/goalview/SelectResumeDate.tsx"
          );
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );
        /* harmony import */ var client_store_configuration__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/store/configuration */ "./src/client/store/configuration.ts"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/utils/Formatters */ "./src/client/utils/Formatters.ts"
          );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs"
          );

        const PauseGoal = ({ onClick, goalName }) => {
          const nextMonth = new Date();
          nextMonth.setMonth(nextMonth.getMonth() + 1);
          const day = nextMonth.getDate();
          const [activeDateOption, setActiveDateOption] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_4__["default"])(
            (state) => state
          );
          const selectDateOptions = [
            {
              id: 0,
              title: `${day}${(0,
              client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.nthNumber)(
                day
              )} next month`,
            },
            { id: 1, title: "Custom" },
          ];
          const showToastMessage = () => {
            (0, react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(
              `Your goal has been paused and i’ll remind you to resume on ${(0,
              client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.dateFormat)(
                goal.resume_at,
                true
              )}`,
              {
                position:
                  react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.POSITION
                    .BOTTOM_RIGHT,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                className: "toast",
                closeButton: false,
              }
            );
          };
          const configuration = (0,
          client_store_configuration__WEBPACK_IMPORTED_MODULE_6__.useConfigurationStore)(
            (state) => state.configuration
          );
          const { isFetching: pausingGoal, refetch: pauseTheGoal } = (0,
          react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
            "pause-goal",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_7__.pauseGoal)({
                configuration: configuration,
                goalId: goal.confirmedGoal.id,
                data: {
                  resume_at: (0,
                  client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.convertDate)(
                    goal.resume_at.toString()
                  ),
                },
              }).then((result) => {
                if (result) {
                  (0,
                  client_api_goal__WEBPACK_IMPORTED_MODULE_7__.getConfirmedGoals)(
                    { configuration: configuration }
                  ).then((result) => {
                    goal.setConfirmedGoals(result);
                    goal.openPauseGoalBottomSheet(false);
                    goal.openPauseDeleteBottomSheet(false);
                    showToastMessage();
                  });
                }
              }),
            { refetchOnWindowFocus: false, enabled: false }
          );
          const { isFetching: fetchingMaturityDate, refetch: maturiryDate } =
            (0, react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
              "maturity-date",
              () =>
                (0,
                client_api_goal__WEBPACK_IMPORTED_MODULE_7__.getMaturityDate)({
                  configuration: configuration,
                  data: {
                    date_str: (0,
                    client_utils_Formatters__WEBPACK_IMPORTED_MODULE_5__.rightDateFormat)(
                      goal.resume_at.toString()
                    ),
                  },
                  goalId: goal.confirmedGoal.id,
                }).then((result) => {
                  if (result) {
                    goal.setMaturityDate(result.maturity_date);
                  }
                })
              // { refetchOnWindowFocus: false, enabled: false }
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col relative" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "absolute top-0 right-2" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_CloseButton__WEBPACK_IMPORTED_MODULE_8__[
                            "default"
                          ],
                          {
                            background: "bg-skin-secondaryWithOpacity",
                            onClick: onClick,
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
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
                                "font-custom text-base font-semibold text-skin-base tracking-title mb-4 mt-3 text-center",
                            },
                            { children: "I will resume" }
                          )
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    Object.assign(
                      {
                        className:
                          " flex flex-row items-center justify-center my-6",
                      },
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              { className: "text-skin-primary mr-3" },
                              {
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiFlag,
                                  {}
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
                                  "font-custom font-semibold text-tiny text-skin-base text-center tracking-title",
                              },
                              { children: `My ${goalName} goal` }
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
                          "font-custom font-semibold text-base text-skin-base text-center tracking-title mb-5",
                      },
                      { children: "On the" }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row justify-center" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_goalview_SelectResumeDate__WEBPACK_IMPORTED_MODULE_10__[
                            "default"
                          ],
                          {
                            activeOption: activeDateOption,
                            onClick: (selected) => {
                              if (selected === 0) {
                                goal.setResumeAtDate(nextMonth);
                                maturiryDate();
                              }
                              setActiveDateOption(selected);
                            },
                            selectDateOptions: selectDateOptions,
                          }
                        ),
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "mt-12" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_goal_creation_BottomSheetFooter__WEBPACK_IMPORTED_MODULE_11__.BottomSheetFooter,
                          {
                            loading: pausingGoal,
                            onClick: () => pauseTheGoal(),
                            title: `${goal.maturityDate}`,
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

        /***/
      },

    /***/ "./src/client/store/AddFundsStore.ts":
      /*!*******************************************!*\
  !*** ./src/client/store/AddFundsStore.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! zustand */ "./node_modules/zustand/esm/index.mjs"
          );

        const useAddFundsStore = (0,
        zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set) => ({
          bottomSheet: false,
          openAddFundBottomSheet: (open) => {
            return set(() => {
              const results = {
                bottomSheet: open,
              };
              return results;
            });
          },
        }));
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          useAddFundsStore;

        /***/
      },

    /***/ "./src/client/assets/images/savings/goalviewoverlay.svg":
      /*!**************************************************************!*\
  !*** ./src/client/assets/images/savings/goalviewoverlay.svg ***!
  \**************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "dccf10d3996baba1adcb.svg";

        /***/
      },

    /***/ "./src/client/assets/images/savings/settings-neutral.svg":
      /*!***************************************************************!*\
  !*** ./src/client/assets/images/savings/settings-neutral.svg ***!
  \***************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "b9989fade5f38b541d0a.svg";

        /***/
      },

    /***/ "./src/client/assets/images/savings/trigger.png":
      /*!******************************************************!*\
  !*** ./src/client/assets/images/savings/trigger.png ***!
  \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "955603989a7c3bd4abea.png";

        /***/
      },

    /***/ "./src/client/assets/images/savings/yellow-flag.svg":
      /*!**********************************************************!*\
  !*** ./src/client/assets/images/savings/yellow-flag.svg ***!
  \**********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "4eb8a68c71a1b0510243.svg";

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLXZpZXdfR29hbFZpZXdfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDTSxlQUFXLEdBQStCLFVBQUMsRUE0QmhEO0FBM0JDLGVBQU8sZUFDUCxTQUFTLGlCQUNULFdBQVcsbUJBQ1gsTUFBTSxjQUNOLEtBQUssYUFDTCxNQUFNLGNBQ04sT0FBTyxlQUNQLFlBQVksb0JBQ1osY0FBYyxzQkFDZCxVQUFVLGtCQUNWLFNBQVMsaUJBQ1QsY0FBYyxzQkFDZCxpQkFBaUIseUJBQ2pCLGtCQUFrQiwwQkFDbEIsd0JBQXdCLGdDQUN4QixTQUFTLGlCQUNULEdBQUcsV0FDSCxZQUFZLG9CQUNaLFlBQVksb0JBQ1osYUFBYSxxQkFDYixZQUFZLG9CQUNaLFdBQVcsbUJBQ1gsZUFBZSx1QkFDZixxQkFBcUIsNkJBQ3JCLGtCQUFrQiwwQkFDbEIsY0FBYyxzQkFDZCxnQ0FBNEIsRUFBNUIsd0JBQXdCLG1CQUFHLENBQUM7SUFFNUIsSUFBTSxZQUFZLEdBQUcsVUFDbkIsZUFBbUQ7UUFFbkQsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO0FBQzlCLG1CQUFPLFlBQVksQ0FBQztBQUNyQjthQUFNLElBQUksZUFBZSxLQUFLLFFBQVEsRUFBRTtBQUN2QyxtQkFBTyxRQUFRLENBQUM7QUFDakI7YUFBTSxJQUFJLGVBQWUsS0FBSyxPQUFPLEVBQUU7QUFDdEMsbUJBQU8sVUFBVSxDQUFDO0FBQ25CO0FBQU07QUFDTCxtQkFBTyxJQUFJLENBQUM7QUFDYjtBQUNILEtBQUMsQ0FBQztBQUVGLFFBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUvQyxRQUFNLDJCQUEyQixHQUMvQixPQUFPLHdCQUF3QixLQUFLLFFBQVE7VUFDeEMsRUFBRyxnQ0FBd0IsRUFBRztVQUM5Qix3QkFBd0IsQ0FBQztBQUUvQixRQUFNLGNBQWMsR0FBRyxVQUNyQixpQkFBbUQsRUFDbkQsY0FBNkM7QUFFN0MsWUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsaUJBQWlCLENBQUM7QUFDekQsbUJBQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRyxhQUFLLEdBQUcsR0FBRyxNQUFHLENBQUM7QUFDL0M7QUFDRCxlQUFPLDJCQUEyQixDQUFDO0FBQ3JDLEtBQUMsQ0FBQztJQUVGLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFdEQsVUFBNEIsR0FBQUEsZ0JBQUssQ0FBQyxRQUFRLENBQzlDLDJCQUEyQixDQUM1QixFQUZNLFNBQVMsVUFBRSxZQUFZLFFBRTdCLENBQUM7QUFFRixRQUFNLGVBQWUsR0FBd0I7QUFDM0MsY0FBTSxFQUFFLE1BQU07QUFDZCxrQkFBVSxFQUFFLFdBQVc7QUFDdkIsb0JBQVksRUFBRSxZQUFZO0FBQzFCLGVBQU8sRUFBRSxPQUFPO0FBQ2hCLGFBQUssRUFBRSxLQUFLO0FBQ1osY0FBTSxFQUFFLE1BQU07QUFDZCxnQkFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQztBQUVGLFFBQU0sWUFBWSxHQUF3QjtBQUN4QyxjQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxlQUFlLEdBQUcsU0FBUyxHQUFHLFdBQVc7QUFDaEQsa0JBQVUsRUFBRSxPQUFPO1FBQ25CLFVBQVUsRUFBRSxnQkFBUyxrQkFBa0IsSUFBSSxJQUFJLEVBQzdDLG9DQUF3QixJQUFJLGFBQWEsQ0FDekM7QUFDRixvQkFBWSxFQUFFLFNBQVM7QUFDdkIsZUFBTyxFQUFFLE1BQU07QUFDZixrQkFBVSxFQUFFLFFBQVE7QUFDcEIsc0JBQWMsRUFDWixjQUFjLEtBQUssU0FBUyxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsUUFBUTtLQUNuRSxDQUFDO0FBRUYsUUFBTSxXQUFXLEdBQ2Ysa0JBQU8sRUFBRSxjQUFjLEtBQUssU0FBUyxHQUFHLFdBQVcsR0FBRyxLQUFLLEVBQzNELEtBQUssRUFBRSxVQUFVLEVBQ2pCLFVBQVUsRUFBRSxNQUFNLEVBQ2xCLFFBQVEsRUFBRSxTQUFTLEVBQ25CLE9BQU8sRUFBRSxDQUFDLGNBQWMsR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUMxQyxtQkFBaUIsQ0FDckIsQ0FBQztBQUVGLFFBQU0sYUFBYSxHQUFHO1FBQ3BCLE9BQU8sRUFBRSxjQUFjLEtBQUssU0FBUyxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQzFELFVBQVUsRUFBRSxjQUFjLEtBQUssU0FBUyxHQUFHLFFBQVEsR0FBRyxTQUFTO0tBQ2hFLENBQUM7QUFFRixRQUFNLFlBQVksR0FDaEIsT0FBTyxTQUFTLEtBQUssUUFBUSxHQUFHLEVBQUcsaUJBQVMsTUFBRyxHQUFHLEVBQUcsaUJBQVMsQ0FBRSxDQUFDO0lBRW5FLElBQU0sUUFBUSxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBRTFEQSxnQkFBSyxDQUFDLFNBQVMsQ0FBQztBQUNkLFlBQUksZUFBZSxFQUFFO1lBQ25CLHFCQUFxQixDQUFDLFlBQU0scUJBQVksQ0FBQyxXQUFXLENBQUMsSUFBQyxDQUFDO0FBQ3hEO0FBQ0gsS0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFbkMsUUFDRUEsd0NBQ0UsS0FBSyxFQUFFLFNBQVMsR0FBRyxTQUFTLEdBQUcsYUFBYSxFQUM1QyxTQUFTLEVBQUUsU0FBUyxFQUNwQixHQUFHLEVBQUUsR0FBRyxFQUNSLElBQUksRUFBQyxhQUFhLG1CQUNILFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFDcEIsNkJBQVksRUFDWiw2QkFBWSxFQUNYLDRCQUFHLGFBQWEsS0FBSyxJQUFJLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBRTtBQUV0RSxRQUFBQSxnQkFBQSx3QkFDRSxLQUFLLEVBQUUscUJBQXFCLEdBQUcsU0FBUyxHQUFHLGVBQWUsRUFDMUQsU0FBUyxFQUFFLHFCQUFxQjtBQUVoQyxZQUFBQSxnQkFBQSx3QkFDRSxLQUFLLEVBQUUsa0JBQWtCLEdBQUcsU0FBUyxHQUFHLFlBQVksRUFDcEQsU0FBUyxFQUFFLGtCQUFrQixJQUU1QixjQUFjLEtBQUssU0FBUyxLQUMzQkEsZ0JBQ0UsOEJBQUssRUFBRSxjQUFjLEdBQUcsU0FBUyxHQUFHLFdBQVcsRUFDL0MsU0FBUyxFQUFFLGNBQWMsSUFFeEIsUUFBUSxDQUNKLENBQ1IsQ0FDRyxDQUNGO1FBQ0wsY0FBYyxLQUFLLFNBQVMsS0FDM0JBLGdCQUFBLHlCQUNFLEtBQUssRUFBRSxjQUFjLEdBQUcsU0FBUyxHQUFHLFdBQVcsRUFDL0MsU0FBUyxFQUFFLGNBQWMsRUFFeEIsVUFBUSxDQUNKLENBQ1IsQ0FDRyxFQUNOO0FBQ0osRUFBRTtBQUVGLFdBQVcsQ0FBQyxTQUFTLEdBQUc7QUFDdEIsYUFBUyxFQUFFQyxvQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDQSxvQkFBUyxDQUFDLE1BQU0sRUFBRUEsb0JBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRSxVQUFVO0lBQ2IsT0FBTyxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDekIsV0FBVyxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDN0IsTUFBTSxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDeEIsS0FBSyxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDdkIsWUFBWSxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDOUIsTUFBTSxFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDeEIsT0FBTyxFQUFFQSxvQkFBUyxDQUFDLE1BQU07QUFDekIsa0JBQWMsRUFBRUEsb0JBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RSxVQUFVLEVBQUVBLG9CQUFTLENBQUMsTUFBTTtJQUM1QixTQUFTLEVBQUVBLG9CQUFTLENBQUMsTUFBTTtJQUMzQixjQUFjLEVBQUVBLG9CQUFTLENBQUMsSUFBSTtJQUM5QixTQUFTLEVBQUVBLG9CQUFTLENBQUMsTUFBTTtBQUMzQixPQUFHLEVBQUVBLG9CQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxZQUFZLEVBQUVBLG9CQUFTLENBQUMsTUFBTTtJQUM5QixXQUFXLEVBQUVBLG9CQUFTLENBQUMsTUFBTTtJQUM3QixlQUFlLEVBQUVBLG9CQUFTLENBQUMsSUFBSTtJQUMvQixxQkFBcUIsRUFBRUEsb0JBQVMsQ0FBQyxNQUFNO0lBQ3ZDLGtCQUFrQixFQUFFQSxvQkFBUyxDQUFDLE1BQU07SUFDcEMsY0FBYyxFQUFFQSxvQkFBUyxDQUFDLE1BQU07QUFDaEMsNEJBQXdCLEVBQUVBLG9CQUFTLENBQUMsU0FBUyxDQUFDO0FBQzVDLFFBQUFBLG9CQUFTLENBQUMsTUFBTTtBQUNoQixRQUFBQSxvQkFBUyxDQUFDLE1BQU07S0FDakIsQ0FBQztDQUNILENBQUM7QUFFRixXQUFXLENBQUMsWUFBWSxHQUFHO0FBQ3pCLFdBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQU0sRUFBRSxNQUFNO0FBQ2QsU0FBSyxFQUFFLE1BQU07QUFDYixnQkFBWSxFQUFFLE1BQU07QUFDcEIsa0JBQWMsRUFBRSxPQUFPO0FBQ3ZCLGVBQVcsRUFBRSxTQUFTO0FBQ3RCLGNBQVUsRUFBRSxNQUFNO0FBQ2xCLGFBQVMsRUFBRSxNQUFNO0FBQ2pCLGtCQUFjLEVBQUUsSUFBSTtBQUNwQixPQUFHLEVBQUUsS0FBSztBQUNWLGdCQUFZLEVBQUUsQ0FBQztBQUNmLGdCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBYSxFQUFFLElBQUk7QUFDbkIsZ0JBQVksRUFBRSxHQUFHO0FBQ2pCLG1CQUFlLEVBQUUsS0FBSztBQUN0Qiw0QkFBd0IsRUFBRSxDQUFDO0NBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hQeUM7QUFHVDtBQUMxQixNQUFNLG9CQUFvQixHQUFHLENBQU8sRUFDekMsYUFBYSxFQUNiLElBQUksRUFDSixNQUFNLEdBS1AsRUFBRSxFQUFFO0lBQ0gsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sOENBQVEsQ0FBQztZQUN6QixRQUFRLEVBQUUsVUFBVSxNQUFNLGFBQWE7WUFDdkMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMEM7QUFDRjtBQUNuQyxNQUFNLFdBQVcsR0FBRyxDQUFPLEVBQ2hDLGFBQWEsRUFDYixJQUFJLEdBSUwsRUFBRSxFQUFFO0lBQ0gsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLDhDQUFRLENBQUM7WUFDbkIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDMUIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFFSyxNQUFNLGlCQUFpQixHQUFHLENBQU8sRUFDdEMsYUFBYSxFQUNiLE1BQU0sR0FJUCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSwrQ0FBUyxDQUFDO1lBQzFCLFFBQVEsRUFBRSxtQ0FBbUMsTUFBTSxFQUFFO1lBQ3JELEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxNQUFXLEVBQUU7UUFDcEIsNkRBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDLEVBQUM7QUFDSyxNQUFNLGdCQUFnQixHQUFHLENBQU8sRUFDckMsYUFBYSxHQUdkLEVBQUUsRUFBRTtJQUNILElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLCtDQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUFDLE9BQU8sTUFBVyxFQUFFO1FBQ3BCLDZEQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURxRTtBQUloRSxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFpQixFQUFFLEVBQUU7SUFDM0QsT0FBTyxDQUNMLGlGQUNFLFNBQVMsRUFBRSxnQkFDVCxXQUNGLGlFQUFpRSxFQUNqRSxPQUFPLEVBQUUsT0FBTyxnQkFFaEIsOEVBQUssU0FBUyxFQUFDLE9BQU8sZ0JBQ3BCLGdFQUFLLEdBQUcsRUFBRSx1RUFBYSxHQUFJLElBQ3ZCLElBQ0MsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIrQztBQU0xQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBbUIsRUFBRSxFQUFFO0lBQy9ELE9BQU8sQ0FDTCxpRkFDRSxTQUFTLEVBQUUsZ0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQ2hCLCtIQUErSCxFQUMvSCxPQUFPLEVBQUUsT0FBTyxnQkFFaEIsOEVBQUssU0FBUyxFQUFDLE9BQU8sZ0JBQ3BCLHVEQUFDLDREQUFnQixJQUFDLElBQUksRUFBQyxRQUFRLEdBQUcsSUFDOUIsSUFDQyxDQUNWLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnVDO0FBTWxDLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFvQixFQUFFLEVBQUU7SUFDakUsT0FBTyxDQUNMLGlGQUNFLFNBQVMsRUFBRSxnQkFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FDaEIsK0hBQStILEVBQy9ILE9BQU8sRUFBRSxPQUFPLGdCQUVoQiw4RUFBSyxTQUFTLEVBQUMsT0FBTyxnQkFDcEIsdURBQUMsbURBQU8sSUFBQyxJQUFJLEVBQUMsUUFBUSxHQUFHLElBQ3JCLElBQ0MsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0Q7QUFDZTtBQUNDO0FBQ0E7QUFDN0I7QUFLbEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQ2hDLGtCQUFrQixFQUNsQixRQUFRLEdBQUcsS0FBSyxHQUNDLEVBQUUsRUFBRTtJQUNyQixNQUFNLFlBQVksR0FBRyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxVQUFVLGlCQUN2Qix1REFBQyxtRUFBVyxJQUNWLFNBQVMsRUFBRSxrQkFBa0IsRUFDN0IsTUFBTSxFQUFDLEtBQUssRUFDWixXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQ2xELE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFDOUMsY0FBYyxFQUFFLEtBQUssR0FDckIsRUFDRiw4RUFBSyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxnQkFDN0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNWLGtCQUFrQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsOEVBQUssU0FBUyxFQUFDLCtMQUErTCxnQkFDM00sR0FBRyxrQkFBa0IsR0FBRyxJQUNyQixDQUNQLENBQUMsQ0FBQyxDQUFDLENBQ0YsaUVBQVcsQ0FDWixDQUNGLENBQUMsQ0FBQyxDQUFDLENBQ0YsOEVBQUssU0FBUyxFQUFDLDJKQUEySixnQkFDeEssdURBQUMsbURBQU8sS0FBRyxJQUNQLENBQ1AsSUFDRyxFQUNOLDhFQUFLLFNBQVMsRUFBQyx5QkFBeUIsZ0JBQ3JDLGtCQUFrQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsZ0VBQUssR0FBRyxFQUFFLG1FQUFVLEdBQUksQ0FDekIsQ0FBQyxDQUFDLENBQUMsQ0FDRiwrRUFBSyxTQUFTLEVBQUMsVUFBVSxpQkFDdkIsZ0VBQUssR0FBRyxFQUFFLHFFQUFTLEdBQUksRUFDdkIsOEVBQUssU0FBUyxFQUFDLDBCQUEwQixnQkFDdkMsZ0VBQUssR0FBRyxFQUFFLDBFQUFJLEdBQUksSUFDZCxFQUNOLDhFQUFLLFNBQVMsRUFBQyxpQkFBaUIsZ0JBQzlCLGdFQUFLLEdBQUcsRUFBRSwwRUFBSSxHQUFJLElBQ2QsRUFDTiw4RUFBSyxTQUFTLEVBQUMsMEJBQTBCLGdCQUN2QyxnRUFBSyxHQUFHLEVBQUUsMEVBQUksR0FBSSxJQUNkLEtBQ0YsQ0FDUCxJQUNHLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RzQztBQU1qQyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBcUIsRUFBRSxFQUFFO0lBQ25FLE9BQU8sQ0FDTCxpRkFDRSxTQUFTLEVBQUUsZ0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQ2hCLHNJQUFzSSxFQUN0SSxPQUFPLEVBQUUsT0FBTyxnQkFFaEIsdURBQUMsa0RBQU0sSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFNBQVMsR0FBRyxJQUNoRCxDQUNWLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnVFO0FBSXpFLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFDdkIsRUFBRSxFQUNGLFFBQVEsRUFDUixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixhQUFhLEVBQ2IsSUFBSSxHQUNBLEVBQUUsRUFBRTtJQUNSLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztJQUMzQixPQUFPLENBQ0wsOEVBQ0UsU0FBUyxFQUFDLGdGQUFnRixFQUMxRixFQUFFLEVBQUMscUJBQXFCLGdCQUV4QiwrRUFBSyxTQUFTLEVBQUMsNENBQTRDLGlCQUN6RCw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsK0VBQUssU0FBUyxFQUFDLDRCQUE0QixpQkFDekMsOEVBQUssU0FBUyxFQUFDLG9CQUFvQixnQkFDakMsOEVBQUssU0FBUyxFQUFDLFVBQVUsZ0JBRXZCLDhFQUFLLFNBQVMsRUFBQyxvRkFBb0YsZ0JBQ2hHLEtBQUssSUFDRixJQUNGLElBQ0YsRUFDTiwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsOEVBQ0UsU0FBUyxFQUFDLDZHQUE2RyxFQUN2SCxFQUFFLEVBQUMsb0NBQW9DLGdCQUV0QyxZQUFZLElBQ1QsRUFDTiw4RUFDRSxTQUFTLEVBQUUsb0NBQ1QsUUFBUSxLQUFLLElBQUk7NENBQ2YsQ0FBQyxDQUFDLG9CQUFvQjs0Q0FDdEIsQ0FBQyxDQUFDLG9CQUNOLDJCQUEyQixFQUMzQixFQUFFLEVBQUMsb0NBQW9DLGdCQUV0QyxRQUFRLElBQ0wsS0FDRixLQUNGLElBQ0YsRUFDTiwrRUFBSyxTQUFTLEVBQUMsZUFBZSxpQkFDNUIsK0VBQ0UsU0FBUyxFQUFDLHNIQUFzSCxFQUNoSSxFQUFFLEVBQUMsNkJBQTZCLGlCQUVoQywyRUFBTywyRUFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBUSxFQUN2QywrRUFBTSxTQUFTLEVBQUMseURBQXlELGdCQUN0RSxjQUFjLElBQ1YsRUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FDdkMsRUFDTiw4RUFBSyxTQUFTLEVBQUMsOEVBQThFLGdCQUMxRixtRUFBVSxDQUFDLFlBQVksQ0FBQyxJQUNyQixLQUNGLEtBQ0YsSUFDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRixpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWdDO0FBQy9ELE1BQU0sV0FBVyxHQUFHLENBQUMsRUFDbkIsRUFBRSxFQUNGLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFVBQVUsR0FDRixFQUFFLEVBQUU7SUFDWixNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV2QyxPQUFPLENBQ0wsOEVBQ0UsU0FBUyxFQUFDLGdGQUFnRixFQUMxRixFQUFFLEVBQUMscUJBQXFCLGdCQUV4Qiw4RUFBSyxTQUFTLEVBQUMsNENBQTRDLGdCQUN6RCw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsK0VBQUssU0FBUyxFQUFDLDRCQUE0QixpQkFDekMsOEVBQUssU0FBUyxFQUFDLGtDQUFrQyxnQkFDL0MsOEVBQUssU0FBUyxFQUFDLFVBQVUsZ0JBRXZCLDhFQUFLLFNBQVMsRUFBQyx1RUFBdUUsZ0JBQ3BGLGdFQUFLLEdBQUcsRUFBRSxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxxRUFBTyxHQUFJLElBQzFCLElBQ0YsSUFDRixFQUNOLCtFQUFLLFNBQVMsRUFBQyxlQUFlLGlCQUM1Qiw4RUFBSyxTQUFTLEVBQUMsaUhBQWlILGlDQUUxSCxFQUNOLDhFQUNFLFNBQVMsRUFBRSw4RUFBOEUsZ0JBRXhGLElBQUksVUFBVSxNQUFNLFNBQVMsRUFBRSxJQUM1QixLQUNGLEtBQ0YsSUFDRixJQUNGLElBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3BCLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFzQixFQUFFLEVBQUU7SUFDdEUsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxtQ0FBbUMsaUJBQ2hELDBFQUFNLEtBQUssR0FBTyxFQUNsQiw4RUFBSyxTQUFTLEVBQUMsNkVBQTZFLGdCQUN6RixLQUFLLElBQ0YsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZCtDO0FBRThCO0FBTXhFLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUF1QixFQUFFLEVBQUU7SUFDMUUsT0FBTyxDQUNMLDhFQUFLLFNBQVMsRUFBQyx3QkFBd0IsZ0JBQ3BDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6Qix1REFBQyx5RkFBa0IsS0FBRyxDQUN2QixDQUFDLENBQUMsQ0FBQyxDQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxDQUNMLHVEQUFDLHdEQUFlLElBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ25CLFlBQVksRUFBQyxTQUFTLEVBRXRCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUN2QixLQUFLLEVBQUMsY0FBSSxFQUNWLGFBQWEsRUFBRSxRQUFRLENBQUMsaUJBQWlCLElBSHBDLFFBQVEsQ0FBQyxFQUFFLENBSWhCLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILElBQ0csQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJzQztBQUtqQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBc0IsRUFBRSxFQUFFO0lBQ3RFLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsaUNBQWlDLEVBQUMsT0FBTyxFQUFFLE9BQU8saUJBQy9ELDhFQUFLLFNBQVMsRUFBQywyR0FBMkcsZ0JBQ3hILHVEQUFDLGtEQUFNLElBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRyxJQUNsQixFQUNOLDhFQUFLLFNBQVMsRUFBQywyRUFBMkUsZ0JBQ3ZGLEtBQUssSUFDRixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJnRDtBQUMwQjtBQUMxQjtBQUNRO0FBQ2hCO0FBQ1U7QUFDRztBQUNoQjtBQVFoQyxNQUFNLHNCQUFzQixHQUFHLENBQUMsRUFDckMsUUFBUSxFQUNSLEtBQUssR0FDdUIsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sYUFBYSxHQUFHLGlGQUFxQixDQUN6QyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDekIsQ0FBQztJQUNiLE1BQU0sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLHFEQUFRLENBQzFFLGVBQWUsRUFDZixHQUFHLEVBQUUsQ0FDSCxnRUFBZSxDQUFDO1FBQ2QsYUFBYSxFQUFFLGFBQWE7UUFDNUIsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFLHdFQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyRDtRQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7S0FDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDLENBQUMsRUFDSixFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQ2hELENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRCx1Q0FBdUM7SUFDdkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUVwQyxrQ0FBa0M7SUFDbEMsTUFBTSxVQUFVLEdBQUcsWUFBWTtRQUM3QixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztRQUMxQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRWIsTUFBTSxrQkFBa0IsR0FBRyxpREFBVSxDQUNuQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBeUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ2xFLDhFQUNFLFNBQVMsRUFBQywyREFBMkQsRUFDckUsT0FBTyxFQUFFLEtBQUssZ0JBRWQsOEVBQ0UsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLDREQUNULFFBQVE7Z0JBQ04sQ0FBQyxDQUFDLDRCQUE0QjtnQkFDOUIsQ0FBQyxDQUFDLGdDQUNOLEVBQUUsZ0JBRUYsOEVBQUssU0FBUyxFQUFDLDREQUE0RCxnQkFDeEUsUUFBUSxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsUUFBUSxJQUMzQixJQUNGLElBQ0YsQ0FDUCxDQUNGLENBQUM7SUFFRixPQUFPLENBQ0wsdURBQUMsK0RBQWdCLGtCQUNmLFlBQVksRUFBRSxZQUFZLEVBQzFCLFlBQVksRUFBRSxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxZQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQ0QsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLGdCQUVsQixDQUFDLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLHVEQUFDLGtCQUFrQixJQUFDLE9BQU8sRUFBRSxjQUFjLEdBQUksQ0FDaEQsSUFDZ0IsQ0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRnVDO0FBQ0M7QUFLbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQXdCLEVBQUUsRUFBRTtJQUMzRSxPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLDBDQUEwQyxpQkFDdkQsOEVBQUssU0FBUyxFQUFDLDBCQUEwQixnQkFDdkMsdURBQUMsb0RBQVcsSUFDVixVQUFVLEVBQUMsOEJBQThCLEVBQ3pDLE9BQU8sRUFBRSxPQUFPLEdBQ2hCLElBQ0UsRUFDTixpRkFDRSxTQUFTLEVBQUMsNEVBQTRFLEVBQ3RGLE9BQU8sRUFBRSxVQUFVLGdCQUVuQiwrRUFBSyxTQUFTLEVBQUMsMkNBQTJDLGlCQUN4RCx1REFBQyxvREFBUSxLQUFHLEVBQ1osOEVBQUssU0FBUyxFQUFDLGlFQUFpRSxpQ0FFMUUsS0FDRixJQUNDLEtBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCaUQ7QUFFaEI7QUFPNUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEVBQ2xDLGlCQUFpQixFQUNqQixNQUFNLEdBQ2lCLEVBQUUsRUFBRTtJQUMzQixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLGVBQWUsaUJBQzVCLDhFQUFLLFNBQVMsRUFBQyw4QkFBOEIsZ0JBQzNDLHVEQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBQyxZQUFZLEdBQUcsSUFDekQsRUFDTiwrRUFBSyxTQUFTLEVBQUMsaUdBQWlHLGlCQUM5Ryw4RUFBSyxTQUFTLEVBQUMsTUFBTSx3QkFBUyxFQUM5Qiw4RUFBSyxTQUFTLEVBQUMsTUFBTSxrQ0FBUyxFQUM5Qiw4RUFBSyxTQUFTLEVBQUMsTUFBTSxnQkFDbEIsaUVBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLElBQzNDLEVBQ04scUZBQWtCLEtBQ2QsS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnNDO0FBQzBCO0FBWTNELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxFQUNyQyxLQUFLLEVBQ0wsUUFBUSxFQUNSLE9BQU8sR0FDcUIsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FDTCw4RUFBSyxTQUFTLEVBQUMsMkRBQTJELGdCQUN4RSw4RUFDRSxPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUUsNERBQ1QsUUFBUTtnQkFDTixDQUFDLENBQUMsNEJBQTRCO2dCQUM5QixDQUFDLENBQUMsZ0NBQ04sRUFBRSxnQkFFRiw4RUFBSyxTQUFTLEVBQUMsNERBQTRELGdCQUN4RSxLQUFLLElBQ0YsSUFDRixJQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxFQUN4QixLQUFLLEVBQ0wsT0FBTyxFQUNQLFlBQVksRUFDWixpQkFBaUIsR0FDSyxFQUFFLEVBQUU7SUFDMUIsTUFBTSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxlQUFlLGlCQUM1Qiw4RUFBSyxTQUFTLEVBQUMsbUNBQW1DLGdCQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1AsOEVBQUssU0FBUyxFQUFDLDJGQUEyRixnQkFDdkcsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxJQUNSLENBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FDRixpRUFBVyxDQUNaLElBQ0csRUFDTiw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDM0IsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQztvQkFDMUMsT0FBTyxDQUNMLDBFQUNHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1QsdURBQUMsMkVBQXNCLElBQ3JCLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0NBQ1YsSUFBSSxPQUFPLEVBQUU7b0NBQ1gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQ0FDcEI7NEJBQ0gsQ0FBQyxHQUNELENBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FDRix1REFBQyxzQkFBc0IsSUFFckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQ25CLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osSUFBSSxPQUFPLEVBQUU7b0NBQ1gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQ0FDcEI7NEJBQ0gsQ0FBQyxJQVBJLENBQUMsQ0FRTixDQUNILElBckJPLENBQUMsQ0FzQkwsQ0FDUCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxJQUNFLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGUztBQUVPO0FBQ0Q7QUFLeEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBcUIsRUFBRSxFQUFFO0lBQzlELE1BQU0sUUFBUSxHQUFHLDZEQUFXLEVBQUUsQ0FBQztJQUMvQixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLHNCQUFzQixpQkFDbkMsMEVBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsT0FBTyxDQUNMLHVEQUFDLG9EQUFXLElBRVYsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUNwQixVQUFVLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixFQUN2QyxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFDaEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBTHpCLE9BQU8sQ0FBQyxFQUFFLENBTWYsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxHQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLE1BQU0sZ0JBQ25CLHVEQUFDLHlEQUFhLElBQ1osS0FBSyxFQUFDLFVBQVUsRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUMzQyxJQUNFLEtBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDc0M7QUFDa0M7QUFDeEI7QUFDRTtBQUNNO0FBQ1I7QUFDWDtBQUNxQjtBQUNnQjtBQUN4QjtBQUU3QyxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDM0IsTUFBTSxJQUFJLEdBQUcsa0VBQVksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRywrQ0FBUSxDQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUN2QyxDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsc0VBQWdCLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxHQUFHLGlGQUFxQixDQUN6QyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDekIsQ0FBQztJQUNiLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxxREFBUSxDQUNoRSxVQUFVLEVBQ1YsR0FBRyxFQUFFLENBQ0gsMEVBQW9CLENBQUM7UUFDbkIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLFdBQVc7U0FDcEI7UUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNaLGtFQUFpQixDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixhQUFhLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxFQUNKLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FDaEQsQ0FBQztJQUNGLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsNENBQTRDLGlCQUN6RCw4RUFBSyxTQUFTLEVBQUMsd0JBQXdCLGdCQUNyQyx1REFBQywrREFBVyxJQUNWLFVBQVUsRUFBQyw4QkFBOEIsRUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWixhQUFhLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLENBQUMsR0FDRCxJQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLDJFQUEyRSxnRUFFcEYsRUFDTiw4RUFBSyxTQUFTLEVBQUMsMENBQTBDLGdCQUN2RCx1REFBQyxrRkFBcUIsSUFDcEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEtBQUssRUFBRSxXQUFXLEVBQ2xCLFNBQVMsRUFBRSxHQUFHLEVBQUU7d0JBQ2QsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFOzRCQUNuQixjQUFjLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQztvQkFDSCxDQUFDLEdBQ0QsSUFDRSxFQUNOLDhFQUFLLFNBQVMsRUFBQyxjQUFjLGdCQUMzQix1REFBQywrREFBVSxJQUNULEtBQUssRUFBQyxjQUFjLEVBQ3BCLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDMUIsT0FBTyxFQUFFLFdBQVcsR0FDcEIsSUFDRSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFa0Q7QUFRN0MsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUN6QixVQUFVLEVBQ1YsT0FBTyxFQUNQLFFBQVEsRUFDUixRQUFRLEdBQ1EsRUFBRSxFQUFFO0lBQ3BCLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsMENBQTBDLGlCQUN2RCw4RUFBSyxTQUFTLEVBQUMsMEJBQTBCLGdCQUN2Qyx1REFBQywrREFBVyxJQUNWLFVBQVUsRUFBQyw4QkFBOEIsRUFDekMsT0FBTyxFQUFFLE9BQU8sR0FDaEIsSUFDRSxFQUNOLDhFQUFLLFNBQVMsRUFBQyxzSEFBc0gsZ0JBQ2xJLDBDQUEwQyxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxFQUFFLFFBQVEsSUFDN0QsRUFDTixpRkFDRSxTQUFTLEVBQUMsb0RBQW9ELEVBQzlELE9BQU8sRUFBRSxVQUFVLGdCQUVuQiw4RUFBSyxTQUFTLEVBQUMsMkNBQTJDLGdCQUN4RCw4RUFBSyxTQUFTLEVBQUMsaUZBQWlGLHNDQUUxRixJQUNGLElBQ0MsRUFDVCxpRkFDRSxTQUFTLEVBQUMseUNBQXlDLEVBQ25ELE9BQU8sRUFBRSxRQUFRLGdCQUVqQiw4RUFBSyxTQUFTLEVBQUMsMkNBQTJDLGdCQUN4RCw4RUFBSyxTQUFTLEVBQUMsaUxBQWlMLDZDQUUxTCxJQUNGLElBQ0MsS0FDTCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NzQztBQUNPO0FBQ0c7QUFDUjtBQUVxQztBQUMzQjtBQUNNO0FBQ29CO0FBQ0c7QUFDbkI7QUFFVztBQUNqQjtBQUNGO0FBQ1E7QUFDZDtBQUNVO0FBQ2E7QUFFSjtBQUNYO0FBQ2hCO0FBQ1k7QUFDRjtBQUNRO0FBQ2tCO0FBQ0E7QUFDckM7QUFDUztBQUNOO0FBQ2dEO0FBQzFCO0FBQ0E7QUFDMUI7QUFDb0I7QUFDTztBQUNqRSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDcEIsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxNQUFNLGFBQWEsR0FBRyxpRkFBcUIsQ0FDekMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7SUFDYixNQUFNLHdCQUF3QixHQUFHLHNGQUFnQyxDQUMvRCxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUN0QixDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUc7UUFDbkI7WUFDRSxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSx1REFBQyxzREFBVSxLQUFHO1NBQ3JCO1FBQ0Q7WUFDRSxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSx1REFBQyx3REFBWSxLQUFHO1NBQ3ZCO0tBQ0YsQ0FBQztJQUNGLE1BQU0sWUFBWSxHQUFHLHlFQUFtQixDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxNQUFNLElBQUksR0FBRyxrRUFBWSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxNQUFNLGFBQWEsR0FBRyx1RUFBZ0IsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzFDLENBQUMsT0FBWSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUN2RCxDQUFDO0lBRUYsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxxREFBUSxDQUN6QyxhQUFhLEVBQ2IsR0FBRyxFQUFFLENBQ0gsNERBQVUsQ0FBQztRQUNULGFBQWEsRUFBRSxhQUFhO1FBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDN0IsSUFBSSxFQUFFLEVBQUU7S0FDVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixtRUFBaUIsQ0FBQyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQyxFQUNKLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FDL0MsQ0FBQztJQUNGLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcscURBQVEsQ0FDekMsYUFBYSxFQUNiLEdBQUcsRUFBRSxDQUNILDREQUFVLENBQUM7UUFDVCxhQUFhLEVBQUUsYUFBYTtRQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsbUVBQWlCLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsRUFDSixFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQ2hELENBQUM7SUFDRixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDbkQsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxxREFBUSxDQUN6QyxlQUFlLEVBQ2YsR0FBRyxFQUFFLENBQ0gsK0VBQWlCLENBQUM7UUFDaEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtLQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDLENBQUMsRUFDSixFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxDQUNoQyxDQUFDO0lBQ0YsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyw0QkFBNEIsaUJBQ3pDLDhFQUFLLFNBQVMsRUFBQyxxQ0FBcUMsZ0JBQ2xELCtFQUFLLFNBQVMsRUFBQyxVQUFVLGlCQUN2QixnRUFDRSxHQUFHLEVBQUUsU0FBUyxFQUNkLFNBQVMsRUFBQywwREFBMEQsR0FDcEUsRUFDRixnRUFDRSxHQUFHLEVBQUUsOEVBQWUsRUFDcEIsU0FBUyxFQUFDLHFEQUFxRCxHQUMvRCxFQUNGLCtFQUFLLFNBQVMsRUFBQywyREFBMkQsaUJBQ3hFLHVEQUFDLDBGQUFtQixJQUNsQixpQkFBaUIsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUNwQyxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FDMUIsRUFDRiw4RUFBSyxTQUFTLEVBQUMsc0JBQXNCLGdCQUNuQyx1REFBQyx1RUFBaUIsSUFDaEIsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFDeEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxTQUFTLEdBQy9CLElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMscUZBQXFGLGdCQUNqRyxFQUFFLElBQ0MsS0FDRixLQUNGLElBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsMkNBQTJDLGdCQUN4RCx1REFBQywyREFBTSxJQUNMLFFBQVEsRUFDTiwrRUFBSyxTQUFTLEVBQUMsNENBQTRDLGlCQUN6RCx1REFBQywrREFBVSxJQUNULFVBQVUsRUFBQyxjQUFjLEVBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0NBQ1osSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO29DQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDZixDQUFDLEdBQ0QsRUFDRix1REFBQyxnRUFBVyxJQUNWLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQ25DLFVBQVUsRUFBQyxZQUFZLEdBQ3ZCLEVBQ0YsdURBQUMsbUVBQWMsSUFDYixVQUFVLEVBQUMsY0FBYyxFQUN6QixJQUFJLEVBQUUseUVBQWMsRUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQ0FDWixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0NBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQ0FDbEQsWUFBWSxDQUFDLGdCQUFnQixDQUMzQixXQUFXLENBQUMsb0JBQW9CLEtBQUssSUFBSTt3Q0FDdkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0I7d0NBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FBQztvQ0FDRix3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FDL0MsV0FBVyxDQUFDLFNBQVMsQ0FDdEIsQ0FBQztvQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7Z0NBQzNCLENBQUMsR0FDRCxLQUNFLEdBRVIsSUFDRSxFQUNOLCtFQUFLLFNBQVMsRUFBQyxrRkFBa0YsaUJBQy9GLCtFQUFLLFNBQVMsRUFBQyxxQ0FBcUMsaUJBQ2xELHVEQUFDLGtGQUFlLElBQ2QsS0FBSyxFQUNILHVEQUFDLHVFQUFjLElBQ2IsT0FBTyxFQUFFLEdBQUcsRUFBRTt3Q0FDWixhQUFhLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQzdDLENBQUMsR0FDRCxFQUVKLEtBQUssRUFBQyxXQUFXLEdBQ2pCLEVBQ0YsdURBQUMsbUVBQVcsSUFDVixTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUM1RCxJQUFJLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFDL0IsS0FBSyxFQUFFO29DQUNMLFlBQVksRUFBRSxFQUFFO2lDQUNqQixFQUNELFFBQVEsRUFBRSx1REFBQyxnREFBUSxLQUFHLEVBQ3RCLFdBQVcsRUFBRSxHQUFHLEdBQ0gsRUFDZix1REFBQyxrRkFBZSxJQUNkLEtBQUssRUFDSCxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUN0Qix1REFBQyxpRUFBVyxJQUNWLElBQUksRUFBQyxXQUFXLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0NBQ1osSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO29DQUN4QyxDQUFDLEdBQ0QsQ0FDSCxDQUFDLENBQUMsQ0FBQyxDQUNGLHVEQUFDLG1FQUFZLElBQ1gsSUFBSSxFQUFDLFdBQVcsRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUM5QixDQUNILEVBRUgsS0FBSyxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUMzRCxFQUNGLHVEQUFDLGtGQUFlLElBQ2QsS0FBSyxFQUNILHVEQUFDLCtEQUFVLElBQ1QsSUFBSSxFQUFDLFdBQVcsRUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRTt3Q0FDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ2pDLENBQUMsR0FDRCxFQUVKLEtBQUssRUFBQyxNQUFNLEdBQ1osRUFDRix1REFBQyxtRUFBVyxJQUNWLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQ2hELElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUMxQixLQUFLLEVBQUU7b0NBQ0wsWUFBWSxFQUFFLEVBQUU7aUNBQ2pCLEVBQ0QsUUFBUSxFQUNOLHVEQUFDLDBFQUFXLElBQ1YsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsR0FDOUMsRUFFSixXQUFXLEVBQUUsR0FBRyxHQUNILEVBQ2YsdURBQUMsbUVBQVcsSUFDVixTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUNoQyxLQUFLLEVBQUU7b0NBQ0wsWUFBWSxFQUFFLEVBQUU7aUNBQ2pCLEVBQ0QsUUFBUSxFQUNOLHVEQUFDLG9EQUFVLElBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFDaEQsVUFBVSxFQUFFLEdBQUcsRUFBRTt3Q0FDZixRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7d0NBQ3pCLGFBQWEsRUFBRSxDQUFDO29DQUNsQixDQUFDLEVBQ0QsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FDdEMsRUFFSixXQUFXLEVBQUUsR0FBRyxHQUNILEVBQ2YsdURBQUMsbUVBQVcsSUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUMvQixLQUFLLEVBQUU7b0NBQ0wsWUFBWSxFQUFFLEVBQUU7aUNBQ2pCLEVBQ0QsUUFBUSxFQUNOLHVEQUFDLGtEQUFTLElBQ1IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFDbkQsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUNqQyxFQUVKLFdBQVcsRUFBRSxHQUFHLEdBQ0gsRUFDZix1REFBQyxtRUFBVyxJQUNWLFNBQVMsRUFBRSxHQUFHLEVBQUU7b0NBQ2QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUN6QyxDQUFDLEVBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFDakMsS0FBSyxFQUFFO29DQUNMLFlBQVksRUFBRSxFQUFFO2lDQUNqQixFQUNELFFBQVEsRUFDTix1REFBQyw4REFBZSxJQUNkLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQ3BELFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEVBQ3JELFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQ2hDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FDZixhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO3dDQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ3ZDLENBQUMsQ0FBQyxHQUVKLEVBRUosV0FBVyxFQUFFLEdBQUcsR0FDSCxLQUNYLEVBQ04sZ0VBQUssU0FBUyxFQUFDLGdEQUFnRCxHQUFPLEVBQ3RFLDhFQUFLLFNBQVMsRUFBQyxNQUFNLGdCQUNuQix1REFBQyw4REFBUyxJQUNSLElBQUksRUFBRSxZQUFZLEVBQ2xCLFNBQVMsRUFBRSxRQUFRLEVBQ25CLE9BQU8sRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FDOUMsSUFDRSxFQUNOLDhFQUFLLFNBQVMsRUFBQyxNQUFNLGdCQUNsQixRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNmLHVEQUFDLGdGQUFjLElBQ2IsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQ2hDLElBQUksRUFBRSxXQUFXLEdBQ2pCLENBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FDRix1REFBQyw0RUFBWSxJQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEdBQUksQ0FDckQsSUFDRyxLQUNGLEVBQ04sdURBQUMsMERBQWMsS0FBRyxLQUNkLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pVeUM7QUFDMUQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDckMsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyxNQUFNLGlCQUNuQiw4RUFBSyxTQUFTLEVBQUMsbUNBQW1DLGdCQUNoRCxnRUFBSyxHQUFHLEVBQUUseUVBQUssR0FBSSxJQUNmLEVBQ04sOEVBQUssU0FBUyxFQUFDLDBHQUEwRyxnREFFbkgsRUFDTiw4RUFBSyxTQUFTLEVBQUMsa0lBQWtJLHFFQUUzSSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcUU7QUFDbkI7QUFTN0MsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUM5QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU8sRUFDUCxVQUFVLEVBQ1YsUUFBUSxHQUNhLEVBQUUsRUFBRTtJQUN6QixPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLDBDQUEwQyxpQkFDdkQsOEVBQUssU0FBUyxFQUFDLDBCQUEwQixnQkFDdkMsdURBQUMsK0RBQVcsSUFDVixVQUFVLEVBQUMsOEJBQThCLEVBQ3pDLE9BQU8sRUFBRSxPQUFPLEdBQ2hCLElBQ0UsRUFDTixpRkFDRSxTQUFTLEVBQUMsOEVBQThFLEVBQ3hGLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxnQkFFekMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNWLCtFQUFLLFNBQVMsRUFBQywyQ0FBMkMsaUJBQ3hELHVEQUFDLHdEQUFZLEtBQUcsRUFDaEIsOEVBQUssU0FBUyxFQUFDLGlFQUFpRSxpQ0FFMUUsS0FDRixDQUNQLENBQUMsQ0FBQyxDQUFDLENBQ0YsK0VBQUssU0FBUyxFQUFDLDJDQUEyQyxpQkFDeEQsdURBQUMseURBQWEsS0FBRyxFQUNqQiw4RUFBSyxTQUFTLEVBQUMsaUVBQWlFLGdDQUUxRSxLQUNGLENBQ1AsSUFDTSxFQUNULGlGQUNFLFNBQVMsRUFBQyx5Q0FBeUMsRUFDbkQsT0FBTyxFQUFFLFVBQVUsZ0JBRW5CLCtFQUFLLFNBQVMsRUFBQywyQ0FBMkMsaUJBQ3hELHVEQUFDLG9EQUFRLEtBQUcsRUFDWiw4RUFBSyxTQUFTLEVBQUMsaUVBQWlFLGlDQUUxRSxLQUNGLElBQ0MsS0FDTCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEK0I7QUFDTztBQUNZO0FBQzhCO0FBQ2hDO0FBQ3FCO0FBQ1M7QUFDSjtBQUNyQztBQU1OO0FBQ007QUFLaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQWtCLEVBQUUsRUFBRTtJQUNqRSxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRywrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELE1BQU0sSUFBSSxHQUFHLGtFQUFZLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELE1BQU0saUJBQWlCLEdBQUc7UUFDeEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRyxrRUFBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7UUFDdEQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7S0FDM0IsQ0FBQztJQUNGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzVCLHFEQUFLLENBQ0gsOERBQThELG1FQUFVLENBQ3RFLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUNMLEVBQUUsRUFDSDtZQUNFLFFBQVEsRUFBRSx1RUFBMkI7WUFDckMsZUFBZSxFQUFFLElBQUk7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsaUZBQXFCLENBQ3pDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN6QixDQUFDO0lBRWIsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLHFEQUFRLENBQ2pFLFlBQVksRUFDWixHQUFHLEVBQUUsQ0FDSCwwREFBUyxDQUFDO1FBQ1IsYUFBYSxFQUFFLGFBQWE7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUM3QixJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsb0VBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xEO0tBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFO1lBQ1Ysa0VBQWlCLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxDQUFDLEVBQ0osRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUNoRCxDQUFDO0lBQ0YsTUFBTSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcscURBQVEsQ0FDMUUsZUFBZSxFQUNmLEdBQUcsRUFBRSxDQUNILGdFQUFlLENBQUM7UUFDZCxhQUFhLEVBQUUsYUFBYTtRQUM1QixJQUFJLEVBQUU7WUFDSixRQUFRLEVBQUUsd0VBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JEO1FBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtLQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUMsQ0FBQztJQUNKLGtEQUFrRDtLQUNuRCxDQUFDO0lBQ0YsT0FBTyxDQUNMLCtFQUFLLFNBQVMsRUFBQyx3QkFBd0IsaUJBQ3JDLDhFQUFLLFNBQVMsRUFBQyx3QkFBd0IsZ0JBQ3JDLHVEQUFDLCtEQUFXLElBQ1YsVUFBVSxFQUFDLDhCQUE4QixFQUN6QyxPQUFPLEVBQUUsT0FBTyxHQUNoQixJQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLDhCQUE4QixnQkFDM0MsOEVBQUssU0FBUyxFQUFDLDJGQUEyRixtQ0FFcEcsSUFDRixFQUNOLCtFQUFLLFNBQVMsRUFBQyxpREFBaUQsaUJBQzlELDhFQUFLLFNBQVMsRUFBQyx3QkFBd0IsZ0JBQ3JDLHVEQUFDLGtEQUFNLEtBQUcsSUFDTixFQUNOLDhFQUFLLFNBQVMsRUFBQyxpRkFBaUYsZ0JBQzdGLE1BQU0sUUFBUSxPQUFPLElBQ2xCLEtBQ0YsRUFDTiw4RUFBSyxTQUFTLEVBQUMsc0ZBQXNGLDRCQUUvRixFQUNOLDhFQUFLLFNBQVMsRUFBQyw4QkFBOEIsZ0JBQzNDLHVEQUFDLDhFQUFnQixJQUNmLFlBQVksRUFBRSxnQkFBZ0IsRUFDOUIsT0FBTyxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFO3dCQUM1QixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQ2hDLFlBQVksRUFBRSxDQUFDO3lCQUNoQjt3QkFDRCxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxFQUNELGlCQUFpQixFQUFFLGlCQUFpQixHQUNwQyxJQUNFLEVBQ04sOEVBQUssU0FBUyxFQUFDLE9BQU8sZ0JBQ3BCLHVEQUFDLDJGQUFpQixJQUNoQixPQUFPLEVBQUUsV0FBVyxFQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQzdCLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FDN0IsSUFDRSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySTJCO0FBSTdCLE1BQU0sZ0JBQWdCLEdBQUcsbURBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxXQUFXLEVBQUUsS0FBSztJQUNsQixzQkFBc0IsRUFBRSxDQUFDLElBQWEsRUFBRSxFQUFFO1FBQ3hDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sT0FBTyxHQUFHO2dCQUNkLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMsQ0FBQztBQUVKLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9ub2RlX21vZHVsZXMvQHJhbW9uYWsvcmVhY3QtcHJvZ3Jlc3MtYmFyL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L2FwaS9hZGRfZnVuZHMudHMiLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L2FwaS9zYXZpbmdzLXRyaWdnZXJzLnRzIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL0FkZEZ1bmRzQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9Nb3JlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9QYXVzZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL1Jlc3VtZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9UcmlnZ2VyQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbHZpZXcvQWN0aW9uQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvY29tcG9uZW50cy9nb2Fsdmlldy9BY3Rpdml0aWVzVmlldy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbHZpZXcvQWRkUnVsZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbHZpZXcvQ3VzdG9tUmVzdW1lRGF0ZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvZ29hbHZpZXcvRGVsZXRlSW50cm8udHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWx2aWV3L0dvYWxWaWV3QmFsYW5jZVZpZXcudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWx2aWV3L1NlbGVjdFJlc3VtZURhdGUudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWx2aWV3L1RyaWdnZXJzVmlldy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2dvYWwtdmlldy9BZGRGdW5kcy50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2dvYWwtdmlldy9EZWxldGVHb2FsLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvZ29hbC12aWV3L0dvYWxWaWV3LnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvZ29hbC12aWV3L0dvYWxWaWV3RW1wdHlTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2dvYWwtdmlldy9QYXVzZURlbGV0ZUdvYWwudHN4Iiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9nb2FsLXZpZXcvUGF1c2VHb2FsLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvc3RvcmUvQWRkRnVuZHNTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBQcm9ncmVzc0JhclByb3BzID0ge1xuICBjb21wbGV0ZWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYmdDb2xvcj86IHN0cmluZztcbiAgYmFzZUJnQ29sb3I/OiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgd2lkdGg/OiBzdHJpbmc7XG4gIGJvcmRlclJhZGl1cz86IHN0cmluZztcbiAgbWFyZ2luPzogc3RyaW5nO1xuICBwYWRkaW5nPzogc3RyaW5nO1xuICBsYWJlbEFsaWdubWVudD86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiB8IFwib3V0c2lkZVwiO1xuICBsYWJlbENvbG9yPzogc3RyaW5nO1xuICBsYWJlbFNpemU/OiBzdHJpbmc7XG4gIGN1c3RvbUxhYmVsU3R5bGVzPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgaXNMYWJlbFZpc2libGU/OiBib29sZWFuO1xuICB0cmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbj86XG4gICAgfCBcImVhc2VcIlxuICAgIHwgXCJsaW5lYXJcIlxuICAgIHwgXCJlYXNlLWluXCJcbiAgICB8IFwiZWFzZS1vdXRcIlxuICAgIHwgXCJlYXNlLWluLW91dFwiO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGRpcj86IFwibHRyXCIgfCBcInJ0bFwiIHwgXCJhdXRvXCI7XG4gIGFyaWFWYWx1ZW1pbj86IG51bWJlcjtcbiAgYXJpYVZhbHVlbWF4PzogbnVtYmVyO1xuICBhcmlhVmFsdWV0ZXh0PzogbnVtYmVyIHwgbnVsbDtcbiAgbWF4Q29tcGxldGVkPzogbnVtYmVyO1xuICBjdXN0b21MYWJlbD86IHN0cmluZztcbiAgYW5pbWF0ZU9uUmVuZGVyPzogYm9vbGVhbjtcbiAgYmFyQ29udGFpbmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBjb21wbGV0ZWRDbGFzc05hbWU/OiBzdHJpbmc7XG4gIGxhYmVsQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBpbml0Q29tcGxldGVkT25BbmltYXRpb24/OiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG5jb25zdCBQcm9ncmVzc0JhcjogUmVhY3QuRkM8UHJvZ3Jlc3NCYXJQcm9wcz4gPSAoe1xuICBiZ0NvbG9yLFxuICBjb21wbGV0ZWQsXG4gIGJhc2VCZ0NvbG9yLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBtYXJnaW4sXG4gIHBhZGRpbmcsXG4gIGJvcmRlclJhZGl1cyxcbiAgbGFiZWxBbGlnbm1lbnQsXG4gIGxhYmVsQ29sb3IsXG4gIGxhYmVsU2l6ZSxcbiAgaXNMYWJlbFZpc2libGUsXG4gIGN1c3RvbUxhYmVsU3R5bGVzLFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcbiAgY2xhc3NOYW1lLFxuICBkaXIsXG4gIGFyaWFWYWx1ZW1pbixcbiAgYXJpYVZhbHVlbWF4LFxuICBhcmlhVmFsdWV0ZXh0LFxuICBtYXhDb21wbGV0ZWQsXG4gIGN1c3RvbUxhYmVsLFxuICBhbmltYXRlT25SZW5kZXIsXG4gIGJhckNvbnRhaW5lckNsYXNzTmFtZSxcbiAgY29tcGxldGVkQ2xhc3NOYW1lLFxuICBsYWJlbENsYXNzTmFtZSxcbiAgaW5pdENvbXBsZXRlZE9uQW5pbWF0aW9uID0gMCxcbn0pID0+IHtcbiAgY29uc3QgZ2V0QWxpZ25tZW50ID0gKFxuICAgIGFsaWdubWVudE9wdGlvbjogUHJvZ3Jlc3NCYXJQcm9wc1tcImxhYmVsQWxpZ25tZW50XCJdXG4gICkgPT4ge1xuICAgIGlmIChhbGlnbm1lbnRPcHRpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnRPcHRpb24gPT09IFwiY2VudGVyXCIpIHtcbiAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50T3B0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQobGFiZWxBbGlnbm1lbnQpO1xuXG4gIGNvbnN0IGluaXRDb21wbGV0ZWRPbkFuaW1hdGlvblN0ciA9XG4gICAgdHlwZW9mIGluaXRDb21wbGV0ZWRPbkFuaW1hdGlvbiA9PT0gXCJudW1iZXJcIlxuICAgICAgPyBgJHtpbml0Q29tcGxldGVkT25BbmltYXRpb259JWBcbiAgICAgIDogaW5pdENvbXBsZXRlZE9uQW5pbWF0aW9uO1xuXG4gIGNvbnN0IGdldEZpbGxlcldpZHRoID0gKFxuICAgIG1heENvbXBsZXRlZFZhbHVlOiBQcm9ncmVzc0JhclByb3BzW1wibWF4Q29tcGxldGVkXCJdLFxuICAgIGNvbXBsZXRlZFZhbHVlOiBQcm9ncmVzc0JhclByb3BzW1wiY29tcGxldGVkXCJdXG4gICkgPT4ge1xuICAgIGlmIChtYXhDb21wbGV0ZWRWYWx1ZSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBOdW1iZXIoY29tcGxldGVkVmFsdWUpIC8gbWF4Q29tcGxldGVkVmFsdWU7XG4gICAgICByZXR1cm4gcmF0aW8gPiAxID8gXCIxMDAlXCIgOiBgJHtyYXRpbyAqIDEwMH0lYDtcbiAgICB9XG4gICAgcmV0dXJuIGluaXRDb21wbGV0ZWRPbkFuaW1hdGlvblN0cjtcbiAgfTtcblxuICBjb25zdCBmaWxsZXJXaWR0aCA9IGdldEZpbGxlcldpZHRoKG1heENvbXBsZXRlZCwgY29tcGxldGVkKTtcblxuICBjb25zdCBbaW5pdFdpZHRoLCBzZXRJbml0V2lkdGhdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcbiAgICBpbml0Q29tcGxldGVkT25BbmltYXRpb25TdHJcbiAgKTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZXM6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgYmFja2dyb3VuZDogYmFzZUJnQ29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIH07XG5cbiAgY29uc3QgZmlsbGVyU3R5bGVzOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiBhbmltYXRlT25SZW5kZXIgPyBpbml0V2lkdGggOiBmaWxsZXJXaWR0aCxcbiAgICBiYWNrZ3JvdW5kOiBiZ0NvbG9yLFxuICAgIHRyYW5zaXRpb246IGB3aWR0aCAke3RyYW5zaXRpb25EdXJhdGlvbiB8fCBcIjFzXCJ9ICR7XG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gfHwgXCJlYXNlLWluLW91dFwiXG4gICAgfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgbGFiZWxBbGlnbm1lbnQgIT09IFwib3V0c2lkZVwiICYmIGFsaWdubWVudCA/IGFsaWdubWVudCA6IFwibm9ybWFsXCIsXG4gIH07XG5cbiAgY29uc3QgbGFiZWxTdHlsZXM6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgcGFkZGluZzogbGFiZWxBbGlnbm1lbnQgPT09IFwib3V0c2lkZVwiID8gXCIwIDAgMCA1cHhcIiA6IFwiNXB4XCIsXG4gICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgZm9udFNpemU6IGxhYmVsU2l6ZSxcbiAgICBkaXNwbGF5OiAhaXNMYWJlbFZpc2libGUgPyBcIm5vbmVcIiA6IFwiaW5pdGlhbFwiLFxuICAgIC4uLmN1c3RvbUxhYmVsU3R5bGVzLFxuICB9O1xuXG4gIGNvbnN0IG91dHNpZGVTdHlsZXMgPSB7XG4gICAgZGlzcGxheTogbGFiZWxBbGlnbm1lbnQgPT09IFwib3V0c2lkZVwiID8gXCJmbGV4XCIgOiBcImluaXRpYWxcIixcbiAgICBhbGlnbkl0ZW1zOiBsYWJlbEFsaWdubWVudCA9PT0gXCJvdXRzaWRlXCIgPyBcImNlbnRlclwiIDogXCJpbml0aWFsXCIsXG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVkU3RyID1cbiAgICB0eXBlb2YgY29tcGxldGVkID09PSBcIm51bWJlclwiID8gYCR7Y29tcGxldGVkfSVgIDogYCR7Y29tcGxldGVkfWA7XG5cbiAgY29uc3QgbGFiZWxTdHIgPSBjdXN0b21MYWJlbCA/IGN1c3RvbUxhYmVsIDogY29tcGxldGVkU3RyO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGVPblJlbmRlcikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldEluaXRXaWR0aChmaWxsZXJXaWR0aCkpO1xuICAgIH1cbiAgfSwgW2ZpbGxlcldpZHRoLCBhbmltYXRlT25SZW5kZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtjbGFzc05hbWUgPyB1bmRlZmluZWQgOiBvdXRzaWRlU3R5bGVzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBkaXI9e2Rpcn1cbiAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICBhcmlhLXZhbHVlbm93PXtwYXJzZUZsb2F0KGxhYmVsU3RyKX1cbiAgICAgIGFyaWEtdmFsdWVtaW49e2FyaWFWYWx1ZW1pbn1cbiAgICAgIGFyaWEtdmFsdWVtYXg9e2FyaWFWYWx1ZW1heH1cbiAgICAgIGFyaWEtdmFsdWV0ZXh0PXtgJHthcmlhVmFsdWV0ZXh0ID09PSBudWxsID8gbGFiZWxTdHIgOiBhcmlhVmFsdWV0ZXh0fWB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17YmFyQ29udGFpbmVyQ2xhc3NOYW1lID8gdW5kZWZpbmVkIDogY29udGFpbmVyU3R5bGVzfVxuICAgICAgICBjbGFzc05hbWU9e2JhckNvbnRhaW5lckNsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXtjb21wbGV0ZWRDbGFzc05hbWUgPyB1bmRlZmluZWQgOiBmaWxsZXJTdHlsZXN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wbGV0ZWRDbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxBbGlnbm1lbnQgIT09IFwib3V0c2lkZVwiICYmIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIHN0eWxlPXtsYWJlbENsYXNzTmFtZSA/IHVuZGVmaW5lZCA6IGxhYmVsU3R5bGVzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWxTdHJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsYWJlbEFsaWdubWVudCA9PT0gXCJvdXRzaWRlXCIgJiYgKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXtsYWJlbENsYXNzTmFtZSA/IHVuZGVmaW5lZCA6IGxhYmVsU3R5bGVzfVxuICAgICAgICAgIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxTdHJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIGNvbXBsZXRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgLmlzUmVxdWlyZWQsXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhc2VCZ0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib3JkZXJSYWRpdXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1hcmdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFkZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxBbGlnbm1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJvdXRzaWRlXCJdKSxcbiAgbGFiZWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0xhYmVsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlyOiBQcm9wVHlwZXMub25lT2YoW1wicnRsXCIsIFwibHRyXCIsIFwiYXV0b1wiXSksXG4gIG1heENvbXBsZXRlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgY3VzdG9tTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFuaW1hdGVPblJlbmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGJhckNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29tcGxldGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5pdENvbXBsZXRlZE9uQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICBiZ0NvbG9yOiBcIiM2YTFiOWFcIixcbiAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxuICBsYWJlbEFsaWdubWVudDogXCJyaWdodFwiLFxuICBiYXNlQmdDb2xvcjogXCIjZTBlMGRlXCIsXG4gIGxhYmVsQ29sb3I6IFwiI2ZmZlwiLFxuICBsYWJlbFNpemU6IFwiMTVweFwiLFxuICBpc0xhYmVsVmlzaWJsZTogdHJ1ZSxcbiAgZGlyOiBcImx0clwiLFxuICBhcmlhVmFsdWVtaW46IDAsXG4gIGFyaWFWYWx1ZW1heDogMTAwLFxuICBhcmlhVmFsdWV0ZXh0OiBudWxsLFxuICBtYXhDb21wbGV0ZWQ6IDEwMCxcbiAgYW5pbWF0ZU9uUmVuZGVyOiBmYWxzZSxcbiAgaW5pdENvbXBsZXRlZE9uQW5pbWF0aW9uOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBwb3N0RGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0IGNvbnN0IGFkZENvbnRyaWJ1dGlvbkZ1bmRzID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbiAgZGF0YSxcbiAgZ29hbElkLFxufToge1xuICBjb25maWd1cmF0aW9uOiBJQ29uZmlnO1xuICBkYXRhOiBhbnk7XG4gIGdvYWxJZDogbnVtYmVyO1xufSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKHtcbiAgICAgIGVuZHBvaW50OiBgL2dvYWxzLyR7Z29hbElkfS9jb250cmlidXRlYCxcbiAgICAgIHRva2VuOiBjb25maWd1cmF0aW9uLnRva2VuLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhLCBwb3N0RGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L2Jyb3dzZXJcIjtcbmV4cG9ydCBjb25zdCBzYXZlVHJpZ2dlciA9IGFzeW5jICh7XG4gIGNvbmZpZ3VyYXRpb24sXG4gIGRhdGEsXG59OiB7XG4gIGNvbmZpZ3VyYXRpb246IElDb25maWc7XG4gIGRhdGE/OiBhbnk7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gcG9zdERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGAvc2F2aW5nc190cmlnZ2VyX2VuZHBvaW50cy9gLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKHJlYXNvbjogYW55KSB7XG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVhc29uKTtcbiAgICBjb25zb2xlLmRlYnVnKHJlYXNvbik7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdvYWxUcmlnZ2VycyA9IGFzeW5jICh7XG4gIGNvbmZpZ3VyYXRpb24sXG4gIGdvYWxJZCxcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbiAgZ29hbElkOiBudW1iZXI7XG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKHtcbiAgICAgIGVuZHBvaW50OiBgL3NhdmluZ3NfdHJpZ2dlcl9lbmRwb2ludHMvZ29hbC8ke2dvYWxJZH1gLFxuICAgICAgdG9rZW46IGNvbmZpZ3VyYXRpb24udG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAocmVhc29uOiBhbnkpIHtcbiAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZWFzb24pO1xuICAgIGNvbnNvbGUuZGVidWcocmVhc29uKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBmZXRjaEFsbFRyaWdnZXJzID0gYXN5bmMgKHtcbiAgY29uZmlndXJhdGlvbixcbn06IHtcbiAgY29uZmlndXJhdGlvbjogSUNvbmZpZztcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEoe1xuICAgICAgZW5kcG9pbnQ6IGAvc2F2aW5nc190cmlnZ2VyX2VuZHBvaW50c2AsXG4gICAgICB0b2tlbjogY29uZmlndXJhdGlvbi50b2tlbixcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChyZWFzb246IGFueSkge1xuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFkZEJ1dHRvbkZsYWcgZnJvbSBcImNsaWVudC9hc3NldHMvaW1hZ2VzL3NhdmluZ3MvYWRkLWZsYWcud2VicFwiO1xudHlwZSBBZGRGdW5kc1Byb3BzID0ge1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgQWRkRnVuZHNCdXR0b24gPSAoeyBvbkNsaWNrIH06IEFkZEZ1bmRzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgJHtcbiAgICAgICAgXCJoLTEyIHctMTJcIlxuICAgICAgfSBiZy1za2luLXByaW1hcnkgc2hhZG93LWJ1dHRvbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjVcIj5cbiAgICAgICAgPGltZyBzcmM9e2FkZEJ1dHRvbkZsYWd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBGaU1vcmVIb3Jpem9udGFsfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxudHlwZSBNb3JlQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBzaXplPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBNb3JlQnV0dG9uID0gKHsgb25DbGljaywgc2l6ZSB9OiBNb3JlQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgJHtcbiAgICAgICAgc2l6ZSA/IHNpemUgOiBcImgtMTQgdy0xNFwiXG4gICAgICB9IGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IHRleHQtc2tpbi1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLWZ1bGxgfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41XCI+XG4gICAgICAgIDxGaU1vcmVIb3Jpem9udGFsIHNpemU9XCIxLjVyZW1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRmlQYXVzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG50eXBlIFBhdXNlQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBzaXplPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBQYXVzZUJ1dHRvbiA9ICh7IG9uQ2xpY2ssIHNpemUgfTogUGF1c2VCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCAke1xuICAgICAgICBzaXplID8gc2l6ZSA6IFwiaC0xNCB3LTE0XCJcbiAgICAgIH0gYm9yZGVyIGJvcmRlci0xIGJvcmRlci1za2luLXByaW1hcnkgdGV4dC1za2luLXByaW1hcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJvdW5kZWQtZnVsbGB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjVcIj5cbiAgICAgICAgPEZpUGF1c2Ugc2l6ZT1cIjEuNXJlbVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkByYW1vbmFrL3JlYWN0LXByb2dyZXNzLWJhclwiO1xuaW1wb3J0IHllbGxvd0ZsYWcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy95ZWxsb3ctZmxhZy5zdmdcIjtcbmltcG9ydCBncmVlbkZsYWcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9hdHRhaW5lZF9mbGFnLnN2Z1wiO1xuaW1wb3J0IHN0YXIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9jb21wbGV0ZS1nb2FsLXN0YXIuc3ZnXCI7XG5pbXBvcnQgeyBGaVBhdXNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG50eXBlIEN1c3RvbVByb2dlc3NCYXIgPSB7XG4gIHByb2dyZXNzUGVyY2VudGFnZTogbnVtYmVyO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59O1xuZXhwb3J0IGNvbnN0IEN1c3RvbVByb2dyZXNzQmFyID0gKHtcbiAgcHJvZ3Jlc3NQZXJjZW50YWdlLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxufTogQ3VzdG9tUHJvZ2Vzc0JhcikgPT4ge1xuICBjb25zdCBrbm9iUG9zaXRpb24gPSBwcm9ncmVzc1BlcmNlbnRhZ2UgKiAzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICBjb21wbGV0ZWQ9e3Byb2dyZXNzUGVyY2VudGFnZX1cbiAgICAgICAgaGVpZ2h0PVwiOHB4XCJcbiAgICAgICAgYmFzZUJnQ29sb3I9e2Ake2lzQWN0aXZlID8gXCIjRDZFQUQ0XCIgOiBcIiNGMkY1RjhcIn1gfVxuICAgICAgICBiZ0NvbG9yPXtgJHtpc0FjdGl2ZSA/IFwiIzg1QzE3RlwiIDogXCIjRDBEREVBXCJ9YH1cbiAgICAgICAgaXNMYWJlbFZpc2libGU9e2ZhbHNlfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgLXRvcC01YH0gc3R5bGU9e3sgbGVmdDoga25vYlBvc2l0aW9uIH19PlxuICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgcHJvZ3Jlc3NQZXJjZW50YWdlICE9PSAxMDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNraW4tc3VjY2Vzc1NlY29uZGFyeSBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tc3VjY2Vzc05ldXRyYWwgdy0xMSBoLTExIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXBvcHBpbnMgdGV4dC14cyB0ZXh0LXNraW4td2hpdGUgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICB7YCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2tpbi1hY2NlbnQgc2hhZG93LWtub2Igdy05IGgtOSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1wb3BwaW5zIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCBtdC0xIHRleHQtc2tpbi1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8RmlQYXVzZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNiByaWdodC0xXCI+XG4gICAgICAgIHtwcm9ncmVzc1BlcmNlbnRhZ2UgIT09IDEwMCA/IChcbiAgICAgICAgICA8aW1nIHNyYz17eWVsbG93RmxhZ30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17Z3JlZW5GbGFnfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgLXRvcC0zIC1sZWZ0LTJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3N0YXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC00XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1yaWdodC0yIC10b3AtM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17c3Rhcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRmlQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbnR5cGUgUmVzdW1lQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBzaXplPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBSZXN1bWVCdXR0b24gPSAoeyBvbkNsaWNrLCBzaXplIH06IFJlc3VtZUJ1dHRvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsICR7XG4gICAgICAgIHNpemUgPyBzaXplIDogXCJoLTE0IHctMTRcIlxuICAgICAgfSBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSB0ZXh0LXNraW4tcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cm91bmRlZC1mdWxsIHAtMi41IGB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxGaVBsYXkgc2l6ZT1cIjEuNXJlbVwiIGNvbG9yPVwiIzA1NjQ4OVwiIGZpbGw9XCIjMDU2NDg5XCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjaGVja0lmRGViaXRDcmVkaXQsIGRhdGVGb3JtYXQgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50c1wiO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gXCJjbGllbnQvbW9kZWxzL1RyYW5zYWN0aW9uXCI7XG5cbmNvbnN0IFRyYW5zYWN0aW9uQ2FyZCA9ICh7XG4gIGlkLFxuICBnb2FsTmFtZSxcbiAgYWN0aXZpdHlOYW1lLFxuICBlbW9qaSxcbiAgYW1vdW50LFxuICB0cmFuc2FjdGVkX2F0LFxuICB0eXBlLFxufTogYW55KSA9PiB7XG4gIGNvbnN0IHRyYW5zYWN0ZWRBdCA9IG5ldyBEYXRlKHRyYW5zYWN0ZWRfYXQpO1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IFwi4oKmXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy13aGl0ZSBweC00IHB5LTMgdy1hdXRvIHNoYWRvdy1jYXJkIG1iLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5XCJcbiAgICAgIGlkPVwiYWwtdHJhbnNhY3Rpb24tY2FyZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5IGgtOCB3LTggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtlbW9qaX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibGFjayB0ZXh0LXN0YXJ0IHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwIHctNDBcIlxuICAgICAgICAgICAgICAgIGlkPVwiYWwtdHJhbnNhY3Rpb24tY2FyZC0tbWVyY2hhbnQtbmFtZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aXZpdHlOYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyB0ZXh0LXhzIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAgICAgICBnb2FsTmFtZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1za2luLXN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtc2tpbi1zdWJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgfSB0cmFja2luZy13aWRlIHRleHQtc3RhcnRgfVxuICAgICAgICAgICAgICAgIGlkPVwiYWwtdHJhbnNhY3Rpb24tY2FyZC0tY2F0ZWdvcnktbmFtZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Z29hbE5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNraW4tc3VjY2VzcyB0ZXh0LWVuZCB0ZXh0LWVsbGlwc2lzIG92ZXJmbG93LWhpZGRlbiB3aGl0ZXNwYWNlLW5vd3JhcCBmbGV4LXJvd1wiXG4gICAgICAgICAgICBpZD1cImFsLXRyYW5zYWN0aW9uLWNhcmQtLWFtb3VudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+e2NoZWNrSWZEZWJpdENyZWRpdCh0eXBlKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNraW4tc3VjY2VzcyBteC0xXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeVN5bWJvbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKGFtb3VudCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyB0ZXh0LXh4eHMgdGV4dC1za2luLXN1YnRpdGxlIHRleHQtZW5kIHRyYWNraW5nLXdpZGUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIHtkYXRlRm9ybWF0KHRyYW5zYWN0ZWRBdCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25DYXJkO1xuIiwiaW1wb3J0IHsgY2hlY2tJZkRlYml0Q3JlZGl0LCBkYXRlRm9ybWF0IH0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgdXNlQWNjb3VudFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvYmFua0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRzIGZyb20gXCJjbGllbnQvbW9kZWxzL0FjY291bnRzXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSBcImNsaWVudC9tb2RlbHMvVHJhbnNhY3Rpb25cIjtcbmltcG9ydCBUcmlnZ2VyIGZyb20gXCJjbGllbnQvbW9kZWxzL1RyaWdnZXJcIjtcbmltcG9ydCB0cmlnZ2VyIGZyb20gXCJjbGllbnQvYXNzZXRzL2ltYWdlcy9zYXZpbmdzL3RyaWdnZXIucG5nXCI7XG5jb25zdCBUcmlnZ2VyQ2FyZCA9ICh7XG4gIGlkLFxuICBhcHBsaWVkVG8sXG4gIHBlcmNlbnRhZ2UsXG4gIGltYWdlLFxuICBjcmVhdGVkX2F0LFxufTogVHJpZ2dlcikgPT4ge1xuICBjb25zdCBjcmVhdGVkQXQgPSBuZXcgRGF0ZShjcmVhdGVkX2F0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctd2hpdGUgcHgtNCBweS0zIHctYXV0byBzaGFkb3ctY2FyZCBtYi0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheVwiXG4gICAgICBpZD1cImFsLXRyYW5zYWN0aW9uLWNhcmRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0zIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5IGgtOCB3LTggZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlID8/IHRyaWdnZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNraW4tYmFzZSB0ZXh0LXN0YXJ0IHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwIHctNDBcIj5cbiAgICAgICAgICAgICAgICBSb3VuZCBpdCB1cFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtcG9wcGlucyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc2tpbi1zdWJ0aXRsZSB0cmFja2luZy13aWRlIHRleHQtc3RhcnRgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2B4JHtwZXJjZW50YWdlfSUsICR7YXBwbGllZFRvfWB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlckNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG50eXBlIEFjdGlvblNlY3Rpb25Qcm9wcyA9IHtcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5leHBvcnQgY29uc3QgQWN0aW9uQ29tcG9uZW50ID0gKHsgY2hpbGQsIHRpdGxlIH06IEFjdGlvblNlY3Rpb25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXgtMy41XCI+XG4gICAgICA8ZGl2PntjaGlsZH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmb250LXBvcHBpbnMgdGV4dC14cyB0ZXh0LXNraW4tcHJpbWFyeSB0cmFja2luZy1sb25ndGV4dCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4uL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gXCJjbGllbnQvbW9kZWxzL1RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FsVmlld0VtcHR5U3RhdGUgfSBmcm9tIFwiY2xpZW50L3BhZ2VzL2dvYWwtdmlldy9Hb2FsVmlld0VtcHR5U3RhdGVcIjtcblxudHlwZSBBY3Rpdml0aWVzVmlld1Byb3BzID0ge1xuICBhY3Rpdml0aWVzOiBBcnJheTxUcmFuc2FjdGlvbj47XG4gIGdvYWw6IGFueTtcbn07XG5leHBvcnQgY29uc3QgQWN0aXZpdGllc1ZpZXcgPSAoeyBhY3Rpdml0aWVzLCBnb2FsIH06IEFjdGl2aXRpZXNWaWV3UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBweC0zLjVcIj5cbiAgICAgIHthY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPEdvYWxWaWV3RW1wdHlTdGF0ZSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgYWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5OiBhbnksIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRyYW5zYWN0aW9uQ2FyZFxuICAgICAgICAgICAgICBnb2FsTmFtZT17Z29hbC5uYW1lfVxuICAgICAgICAgICAgICBhY3Rpdml0eU5hbWU9XCJEZXBvc2l0XCJcbiAgICAgICAgICAgICAga2V5PXthY3Rpdml0eS5pZH1cbiAgICAgICAgICAgICAgYW1vdW50PXthY3Rpdml0eS5hbW91bnR9XG4gICAgICAgICAgICAgIGVtb2ppPVwi8J+Or1wiXG4gICAgICAgICAgICAgIHRyYW5zYWN0ZWRfYXQ9e2FjdGl2aXR5LmNvbnRyaWJ1dGlvbl9kYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbnR5cGUgQWRkUnVsZUJ1dHRvblByb3BzID0ge1xuICBsYWJlbD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IEFkZFJ1bGVCdXR0b24gPSAoeyBsYWJlbCwgb25DbGljayB9OiBBZGRSdWxlQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1sLTRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXNraW4tcHJpbWFyeSBiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5IHJvdW5kZWQtZnVsbCBtci0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxGaVBsdXMgc2l6ZT1cIjFyZW1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd29ya1NhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LXRpbnkgdHJhY2tpbmctdGFiX3RleHQgdGV4dC1za2luLW5ldXRyYWxcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0TWF0dXJpdHlEYXRlIH0gZnJvbSBcImNsaWVudC9hcGkvZ29hbFwiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgeyByaWdodERhdGVGb3JtYXQgfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyc7XG5pbXBvcnQgeyBDdXN0b21EYXRlUGlja2VyIH0gZnJvbSBcIi4uL0N1c3RvbURhdGVQaWNrZXJcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbnR5cGUgQ3VzdG9tUmVzdW1lRGF0ZUJ1dHRvblByb3BzID0ge1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgY2xpY2s/OiAoKSA9PiB2b2lkO1xuICBvblNlbGVjdGVkT3V0c2lkZT86ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tUmVzdW1lRGF0ZUJ1dHRvbiA9ICh7XG4gIGlzQWN0aXZlLFxuICBjbGljayxcbn06IEN1c3RvbVJlc3VtZURhdGVCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcbiAgY29uc3QgeyBpc0ZldGNoaW5nOiBmZXRjaGluZ01hdHVyaXR5RGF0ZSwgcmVmZXRjaDogbWF0dXJpcnlEYXRlIH0gPSB1c2VRdWVyeShcbiAgICBcIm1hdHVyaXR5LWRhdGVcIixcbiAgICAoKSA9PlxuICAgICAgZ2V0TWF0dXJpdHlEYXRlKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGRhdGVfc3RyOiByaWdodERhdGVGb3JtYXQoZ29hbC5yZXN1bWVfYXQudG9TdHJpbmcoKSksXG4gICAgICAgIH0sXG4gICAgICAgIGdvYWxJZDogZ29hbC5jb25maXJtZWRHb2FsLmlkLFxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnb2FsLnNldE1hdHVyaXR5RGF0ZShyZXN1bHQubWF0dXJpdHlfZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLCBlbmFibGVkOiBmYWxzZSB9XG4gICk7XG4gIGNvbnN0IGdvYWwgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcblxuICAvLyBHZXQgdGhlIHNlbGVjdGVkIGRhdGUgZnJvbSB0aGUgc3RvcmVcbiAgY29uc3Qgc2VsZWN0ZWREYXRlID0gZ29hbC5yZXN1bWVfYXQ7XG5cbiAgLy8gRm9ybWF0IHRoZSBkYXRlIHRvICdkZC9NTS95eXl5J1xuICBjb25zdCBkYXRlU3RyaW5nID0gc2VsZWN0ZWREYXRlXG4gICAgPyBzZWxlY3RlZERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicpXG4gICAgOiAnQ3VzdG9tJztcblxuICBjb25zdCBFeGFtcGxlQ3VzdG9tSW5wdXQgPSBmb3J3YXJkUmVmKFxuICAgICh7IHZhbHVlLCBvbkNsaWNrIH06IHsgdmFsdWU/OiBhbnk7IG9uQ2xpY2s/OiAoKSA9PiB2b2lkIH0sIHJlZikgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tcHJpbWFyeSBwLXB4IG14LTFcIlxuICAgICAgICBvbkNsaWNrPXtjbGlja31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC0zeGwgcHktMyBweC0zLjUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICAgID8gXCJiZy1za2luLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIDogXCJ0ZXh0LXNraW4tbmV1dHJhbCBiZy1za2luLWJhc2VcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdGV4dC14cyB0cmFja2luZy13aWRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICB7aXNBY3RpdmU/IGRhdGVTdHJpbmc6IFwiQ3VzdG9tXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEN1c3RvbURhdGVQaWNrZXJcbiAgICAgIHNlbGVjdGVkRGF0ZT17c2VsZWN0ZWREYXRlfVxuICAgICAgb25EYXRlQ2hhbmdlPXsoZGF0ZTogRGF0ZSkgPT4ge1xuICAgICAgICBnb2FsLnNldFJlc3VtZUF0RGF0ZShkYXRlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWF0dXJpcnlEYXRlKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9fVxuICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cbiAgICA+XG4gICAgICB7KHsgdG9nZ2xlQ2FsZW5kYXIgfSkgPT4gKFxuICAgICAgICA8RXhhbXBsZUN1c3RvbUlucHV0IG9uQ2xpY2s9e3RvZ2dsZUNhbGVuZGFyfSAvPlxuICAgICAgKX1cbiAgICA8L0N1c3RvbURhdGVQaWNrZXI+XG4gICk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEZpVHJhc2gyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG50eXBlIFBhdXNlRGVsZXRlR29hbFByb3BzID0ge1xuICBkZWxldGVHb2FsPzogKCkgPT4gdm9pZDtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IERlbGV0ZUludHJvID0gKHsgZGVsZXRlR29hbCwgb25DbGljayB9OiBQYXVzZURlbGV0ZUdvYWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC0zLjUgbXQtMTYgbWItOCByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTE2IHJpZ2h0LTFcIj5cbiAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tc2Vjb25kYXJ5V2l0aE9wYWNpdHlcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLXNraW4tZGFuZ2VyIHRleHQtc2tpbi1kYW5nZXIgcHktMy41IG10LTNcIlxuICAgICAgICBvbkNsaWNrPXtkZWxldGVHb2FsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPEZpVHJhc2gyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ2VzdF90ZXh0IG1sLTJcIj5cbiAgICAgICAgICAgIERlbGV0ZSBnb2FsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY2hlY2tOQU4gfSBmcm9tIFwiY2xpZW50L3V0aWxzL0Zvcm1hdHRlcnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFtb3VudCB9IGZyb20gXCIuLi9BbW91bnRcIjtcblxudHlwZSBHb2FsQ3JlYXRpb25JbnRyb1Byb3BzID0ge1xuICBjb250cmlidXRlZEFtb3VudD86IG51bWJlcjtcbiAgYW1vdW50PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IEdvYWxWaWV3QmFsYW5jZVZpZXcgPSAoe1xuICBjb250cmlidXRlZEFtb3VudCxcbiAgYW1vdW50LFxufTogR29hbENyZWF0aW9uSW50cm9Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxBbW91bnQgYmFsYW5jZT17Y29udHJpYnV0ZWRBbW91bnR9IHRleHRDb2xvcj1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC13aGl0ZS84MCBmb250LXNlbWlib2xkIGZvbnQtcG9wcGlucyB0ZXh0LXhzIHRyYWNraW5nLXN1YnRpdGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiPm9mPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiPvCfjq88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+XG4gICAgICAgICAge2NoZWNrTkFOKE1hdGgucm91bmQoYW1vdW50ISkpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj5zYXZlZDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB1c2VHb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2dvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEN1c3RvbVJlc3VtZURhdGVCdXR0b24gfSBmcm9tIFwiLi9DdXN0b21SZXN1bWVEYXRlQnV0dG9uXCI7XG50eXBlIFNlbGVjdFJlc3VtZURhdGVQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGFjdGl2ZU9wdGlvbjogbnVtYmVyO1xuICBzZWxlY3REYXRlT3B0aW9uczogQXJyYXk8YW55PjtcbiAgb25DbGljaz86ICh0YWI6IGFueSkgPT4gdm9pZDtcbn07XG50eXBlIFNlbGVjdFJlc3VtZURhdGVCdXR0b25Qcm9wcyA9IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGNvbnN0IFNlbGVjdFJlc3VtZURhdGVCdXR0b24gPSAoe1xuICBsYWJlbCxcbiAgaXNBY3RpdmUsXG4gIG9uQ2xpY2ssXG59OiBTZWxlY3RSZXN1bWVEYXRlQnV0dG9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IHAtcHggbXgtMVwiPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTN4bCBweS0zIHB4LTMuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICA/IFwiYmctc2tpbi1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgOiBcInRleHQtc2tpbi1uZXV0cmFsIGJnLXNraW4tYmFzZVwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcG9wcGlucyBmb250LW1lZGl1bSB0ZXh0LXhzIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgU2VsZWN0UmVzdW1lRGF0ZSA9ICh7XG4gIHRpdGxlLFxuICBvbkNsaWNrLFxuICBhY3RpdmVPcHRpb24sXG4gIHNlbGVjdERhdGVPcHRpb25zLFxufTogU2VsZWN0UmVzdW1lRGF0ZVByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXN0b21CdXR0b24sIHNlbGVjdEN1c3RvbUJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICB7dGl0bGUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1iLTQgbXQtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge3RpdGxlID8/IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIHtzZWxlY3REYXRlT3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IG9wdGlvbi5pZCA9PT0gYWN0aXZlT3B0aW9uO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgIHtpID09PSAxID8gKFxuICAgICAgICAgICAgICAgIDxDdXN0b21SZXN1bWVEYXRlQnV0dG9uXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrKG9wdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0UmVzdW1lRGF0ZUJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljayhvcHRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFJlc3VtZURhdGU7XG4iLCJpbXBvcnQgVHJpZ2dlckNhcmQgZnJvbSBcIi4uL1RyaWdnZXJDYXJkXCI7XG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwiY2xpZW50L21vZGVscy9UcmlnZ2VyXCI7XG5pbXBvcnQgeyBBZGRSdWxlQnV0dG9uIH0gZnJvbSBcIi4vQWRkUnVsZUJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG50eXBlIFRyaWdnZXJzVmlld1Byb3BzID0ge1xuICB0cmlnZ2VyczogQXJyYXk8VHJpZ2dlcj47XG59O1xuZXhwb3J0IGNvbnN0IFRyaWdnZXJzVmlldyA9ICh7IHRyaWdnZXJzIH06IFRyaWdnZXJzVmlld1Byb3BzKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtMy41XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dHJpZ2dlcnMubWFwKCh0cmlnZ2VyOiBhbnksIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRyaWdnZXJDYXJkXG4gICAgICAgICAgICAgIGtleT17dHJpZ2dlci5pZH1cbiAgICAgICAgICAgICAgdHJpZ2dlck5hbWU9e3RyaWdnZXIubWVyY2hhbnRfbmFtZX1cbiAgICAgICAgICAgICAgaW1hZ2U9e3RyaWdnZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3RyaWdnZXIucm91bmRfdXBfcGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgYXBwbGllZFRvPXt0cmlnZ2VyLm1lcmNoYW50X25hbWV9XG4gICAgICAgICAgICAgIGNyZWF0ZWRfYXQ9e3RyaWdnZXIuY3JlYXRlZF9hdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICA8QWRkUnVsZUJ1dHRvblxuICAgICAgICAgIGxhYmVsPVwiQWRkIHJ1bGVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL3NhdmluZ3MtdHJpZ2dlclwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWRkTW9udGhseUluY29tZUlucHV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbC1jcmVhdGlvbi9JbnB1dFwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XG5pbXBvcnQgdXNlQWRkRnVuZHNTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL0FkZEZ1bmRzU3RvcmVcIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBhZGRDb250cmlidXRpb25GdW5kcyB9IGZyb20gXCJjbGllbnQvYXBpL2FkZF9mdW5kc1wiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBnZXRDb25maXJtZWRHb2FscyB9IGZyb20gXCJjbGllbnQvYXBpL2dvYWxcIjtcblxuZXhwb3J0IGNvbnN0IEFkZEZ1bmRzID0gKCkgPT4ge1xuICBjb25zdCBnb2FsID0gdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IFtmaW5hbEFtb3VudCwgc2V0RmluYWxBbW91bnRdID0gdXNlU3RhdGUoXG4gICAgZ29hbC5jb25maXJtZWRHb2FsLmNvbnRyaWJ1dGlvbl9hbW91bnRcbiAgKTtcbiAgY29uc3QgYWRkRnVuZHNTdG9yZSA9IHVzZUFkZEZ1bmRzU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IHsgaXNGZXRjaGluZzogYWRkaW5nRnVuZHMsIHJlZmV0Y2g6IGFkZFRoZUZ1bmRzIH0gPSB1c2VRdWVyeShcbiAgICBcImFkZGZ1bmRzXCIsXG4gICAgKCkgPT5cbiAgICAgIGFkZENvbnRyaWJ1dGlvbkZ1bmRzKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGFtb3VudDogZmluYWxBbW91bnQsXG4gICAgICAgIH0sXG4gICAgICAgIGdvYWxJZDogZ29hbC5jb25maXJtZWRHb2FsLmlkLFxuICAgICAgfSkudGhlbigoXykgPT4ge1xuICAgICAgICBnZXRDb25maXJtZWRHb2Fscyh7IGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24gfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZ29hbC5zZXRDb25maXJtZWRHb2FscyhyZXN1bHQpO1xuICAgICAgICAgICAgYWRkRnVuZHNTdG9yZS5vcGVuQWRkRnVuZEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgeyByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsIGVuYWJsZWQ6IGZhbHNlIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtMy41IGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0xXCI+XG4gICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhZGRGdW5kc1N0b3JlLm9wZW5BZGRGdW5kQm90dG9tU2hlZXQoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyB0ZXh0LXNraW4tYmFzZSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aXRsZSBtdC0xNlwiPlxuICAgICAgICBJIHdvdWxkIGxpa2UgdG8gZnVuZCBteSBnb2FsIGJ5IGRlcG9zaXRpbmdcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC03IG14LTMuNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxBZGRNb250aGx5SW5jb21lSW5wdXRcbiAgICAgICAgICBhZGRWYWx1ZT17KGUpID0+IHNldEZpbmFsQW1vdW50KGUpfVxuICAgICAgICAgIHZhbHVlPXtmaW5hbEFtb3VudH1cbiAgICAgICAgICBpbmNyZW1lbnQ9eygpID0+IHtcbiAgICAgICAgICAgIHNldEZpbmFsQW1vdW50KGZpbmFsQW1vdW50ICsgNTAwKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRlY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbmFsQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgICBzZXRGaW5hbEFtb3VudChmaW5hbEFtb3VudCAtIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMTBcIj5cbiAgICAgICAgPE1haW5CdXR0b25cbiAgICAgICAgICB0aXRsZT1cIkZ1bmQgbXkgZ29hbFwiXG4gICAgICAgICAgY2xpY2s9eygpID0+IGFkZFRoZUZ1bmRzKCl9XG4gICAgICAgICAgbG9hZGluZz17YWRkaW5nRnVuZHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbnR5cGUgRGVsZXRlR29hbFByb3BzID0ge1xuICBrZWVwR29hbD86ICgpID0+IHZvaWQ7XG4gIGRlbGV0ZUdvYWw/OiAoKSA9PiB2b2lkO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgZ29hbE5hbWU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgRGVsZXRlR29hbCA9ICh7XG4gIGRlbGV0ZUdvYWwsXG4gIG9uQ2xpY2ssXG4gIGtlZXBHb2FsLFxuICBnb2FsTmFtZSxcbn06IERlbGV0ZUdvYWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC0zLjUgbXQtMTYgbWItOCByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTE2IHJpZ2h0LTFcIj5cbiAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tc2Vjb25kYXJ5V2l0aE9wYWNpdHlcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW0tc3RhcnQgZm9udC1tZWRpdW0gdGV4dC10aW55IGZvbnQtcG9wcGlucyB0ZXh0LXNraW4tYmFzZSB0cmFja2luZy1zdWJ0aXRsZSBtci00IG1iLThcIj5cbiAgICAgICAge2BBcmUgeW91IHN1cmUgeW914oCZZCBsaWtlIHRvIGRlbGV0ZSB5b3VyICR7Z29hbE5hbWUgPz8gXCJcIn0gZ29hbD9gfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdGV4dC1za2luLXByaW1hcnkgcHktMy41IGJnLXNraW4tZGFuZ2VyXCJcbiAgICAgICAgb25DbGljaz17ZGVsZXRlR29hbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgZm9udC1wb3BwaW5zIHRyYWNraW5nLWxvbmdlc3RfdGV4dCBtbC0yIHRleHQtc2tpbi13aGl0ZVwiPlxuICAgICAgICAgICAgWWVzLCBkZWxldGUgZ29hbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHRleHQtc2tpbi1kYW5nZXIgcHktMy41IG10LTNcIlxuICAgICAgICBvbkNsaWNrPXtrZWVwR29hbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgZm9udC1wb3BwaW5zIHRyYWNraW5nLWxvbmdlc3RfdGV4dCBtbC0yIHRleHQtc2tpbi1wcmltYXJ5IGJvcmRlciBib3JkZXItc2tpbi1wcmltYXJ5IHctc2NyZWVuIHJvdW5kZWQtbGcgaC0xNCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgTm8sIGxldCdzIGtlZXAgdGhlIGdvYWxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgb3ZlcmxheSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9vdmVybGF5LnN2Z1wiO1xuaW1wb3J0IGdvYWx2aWV3T3ZlcmxheSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9nb2Fsdmlld292ZXJsYXkuc3ZnXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXR0aW5nc0J1dHRvblwiO1xuaW1wb3J0IHNldHRpbmdOZXV0cmFsIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NhdmluZ3Mvc2V0dGluZ3MtbmV1dHJhbC5zdmdcIjtcbmltcG9ydCB7IEdvYWxWaWV3QmFsYW5jZVZpZXcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2Fsdmlldy9Hb2FsVmlld0JhbGFuY2VWaWV3XCI7XG5pbXBvcnQgeyBDdXN0b21Qcm9ncmVzc0JhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBBZGRHb2FsQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkR29hbEJ1dHRvblwiO1xuaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ29hbHZpZXcvQWN0aW9uQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYXVzZUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BhdXNlQnV0dG9uXCI7XG5pbXBvcnQgeyBNb3JlQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9yZUJ1dHRvblwiO1xuaW1wb3J0IHsgQWRkRnVuZHNCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRGdW5kc0J1dHRvblwiO1xuaW1wb3J0IFRhYkZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJGaWx0ZXJcIjtcbmltcG9ydCB7IEZpQWN0aXZpdHksIEZpVHJlbmRpbmdVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQWN0aXZpdGllc1ZpZXcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2Fsdmlldy9BY3Rpdml0aWVzVmlld1wiO1xuaW1wb3J0IHsgYWN0aXZpdGllcywgdHJpZ2dlcnMgfSBmcm9tIFwiY2xpZW50L3V0aWxzL01vY2tEYXRhXCI7XG5pbXBvcnQgeyBUcmlnZ2Vyc1ZpZXcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2Fsdmlldy9UcmlnZ2Vyc1ZpZXdcIjtcbmltcG9ydCB7IEJvdHRvbVNoZWV0IH0gZnJvbSBcInJlYWN0LXNwcmluZy1ib3R0b20tc2hlZXRcIjtcbmltcG9ydCB7IFBhdXNlR29hbCB9IGZyb20gXCIuL1BhdXNlR29hbFwiO1xuaW1wb3J0IHsgUGF1c2VEZWxldGVHb2FsIH0gZnJvbSBcIi4vUGF1c2VEZWxldGVHb2FsXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgeyBSZXN1bWVCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXN1bWVCdXR0b25cIjtcbmltcG9ydCB7IGRlbGV0ZUdvYWwsIGdldENvbmZpcm1lZEdvYWxzLCByZXN1bWVHb2FsIH0gZnJvbSBcImNsaWVudC9hcGkvZ29hbFwiO1xuaW1wb3J0IHsgSUNvbmZpZywgdXNlQ29uZmlndXJhdGlvblN0b3JlIH0gZnJvbSBcImNsaWVudC9zdG9yZS9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IERlbGV0ZUdvYWwgfSBmcm9tIFwiLi9EZWxldGVHb2FsXCI7XG5pbXBvcnQgdXNlR29hbENvbnRyaWJ1dGlvblNldHRpbmdzU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsQ29udHJpYnV0aW9uU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hHb2FsVHJpZ2dlcnMgfSBmcm9tIFwiY2xpZW50L2FwaS9zYXZpbmdzLXRyaWdnZXJzXCI7XG5pbXBvcnQgdXNlQmFua0FjY291bnRTdG9yZSBmcm9tIFwiY2xpZW50L3N0b3JlL2JhbmtBY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7IEFkZEZ1bmRzIH0gZnJvbSBcIi4vQWRkRnVuZHNcIjtcbmltcG9ydCB1c2VBZGRGdW5kc1N0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvQWRkRnVuZHNTdG9yZVwiO1xuaW1wb3J0IHsgRGVsZXRlSW50cm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nb2Fsdmlldy9EZWxldGVJbnRyb1wiO1xuY29uc3QgR29hbFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW3RhYkluZGV4LCBzZXRUYWJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHVzZUNvbmZpZ3VyYXRpb25TdG9yZShcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29uZmlndXJhdGlvblxuICApIGFzIElDb25maWc7XG4gIGNvbnN0IGdvYWxDb250cmlidXRpb25TZXR0aW5ncyA9IHVzZUdvYWxDb250cmlidXRpb25TZXR0aW5nc1N0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZVxuICApO1xuICBjb25zdCBnb2Fsdmlld1RhYnMgPSBbXG4gICAge1xuICAgICAgdGFiX2lkOiAwLFxuICAgICAgbmFtZTogXCJBY3Rpdml0eVwiLFxuICAgICAgaWNvbjogPEZpQWN0aXZpdHkgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0YWJfaWQ6IDEsXG4gICAgICBuYW1lOiBcIlRyaWdnZXJzXCIsXG4gICAgICBpY29uOiA8RmlUcmVuZGluZ1VwIC8+LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGFjY291bnRTdG9yZSA9IHVzZUJhbmtBY2NvdW50U3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3QgZ29hbCA9IHVzZUdvYWxTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBhZGRGdW5kc1N0b3JlID0gdXNlQWRkRnVuZHNTdG9yZSgoc3RhdGU6IGFueSkgPT4gc3RhdGUpO1xuICBjb25zdCBjdXJyZW50R29hbCA9IGdvYWwuY29uZmlybWVkR29hbHMuZmluZChcbiAgICAoZWxlbWVudDogYW55KSA9PiBlbGVtZW50LmlkID09PSBnb2FsLmNvbmZpcm1lZEdvYWwuaWRcbiAgKTtcblxuICBjb25zdCB7IHJlZmV0Y2g6IHJlc3VtZVRoZUdvYWwgfSA9IHVzZVF1ZXJ5KFxuICAgIFwicmVzdW1lLWdvYWxcIixcbiAgICAoKSA9PlxuICAgICAgcmVzdW1lR29hbCh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGdvYWxJZDogZ29hbC5jb25maXJtZWRHb2FsLmlkLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgZ2V0Q29uZmlybWVkR29hbHMoeyBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgZ29hbC5zZXRDb25maXJtZWRHb2FscyhyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICB7IHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiB0cnVlLCBlbmFibGVkOiBmYWxzZSB9XG4gICk7XG4gIGNvbnN0IHsgcmVmZXRjaDogZGVsZXRlVGhlR29hbCB9ID0gdXNlUXVlcnkoXG4gICAgXCJkZWxldGUgZ29hbFwiLFxuICAgICgpID0+XG4gICAgICBkZWxldGVHb2FsKHtcbiAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgZ29hbElkOiBnb2FsLmNvbmZpcm1lZEdvYWwuaWQsXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGdvYWwub3BlbkRlbGV0ZUJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICBnb2FsLm9wZW5QYXVzZURlbGV0ZUJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICBnZXRDb25maXJtZWRHb2Fscyh7IGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24gfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBnb2FsLnNldENvbmZpcm1lZEdvYWxzKHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIHsgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLCBlbmFibGVkOiBmYWxzZSB9XG4gICk7XG4gIGNvbnN0IHsgaW1hZ2VfdXJsIH0gPSBnb2FsLmNvbmZpcm1lZEdvYWwuaW1hZ2VfdXJsO1xuICBjb25zdCB7IHJlZmV0Y2g6IGZldGNoVHJpZ2dlcnMgfSA9IHVzZVF1ZXJ5KFxuICAgIFwiZ29hbC10cmlnZ2Vyc1wiLFxuICAgICgpID0+XG4gICAgICBmZXRjaEdvYWxUcmlnZ2Vycyh7XG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGdvYWxJZDogZ29hbC5jb25maXJtZWRHb2FsLmlkLFxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnb2FsLnNldEdvYWxTYXZpbmdzVHJpZ2dlcnMocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgeyByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UgfVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLzIgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfdXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgdy1zY3JlZW4gb2JqZWN0LWNvdmVyIGgtODBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtnb2Fsdmlld092ZXJsYXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGxlZnQtMCBvYmplY3QtY292ZXIgdy1zY3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjggbGVmdC0wIHJpZ2h0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxHb2FsVmlld0JhbGFuY2VWaWV3XG4gICAgICAgICAgICAgIGNvbnRyaWJ1dGVkQW1vdW50PXtjdXJyZW50R29hbC50b3RhbH1cbiAgICAgICAgICAgICAgYW1vdW50PXtjdXJyZW50R29hbC5hbW91bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHctc2NyZWVuIHB4LTMuNVwiPlxuICAgICAgICAgICAgICA8Q3VzdG9tUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1BlcmNlbnRhZ2U9e2N1cnJlbnRHb2FsLnByb2dyZXNzfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyZW50R29hbC5pc19hY3RpdmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84MCBmb250LXNlbWlib2xkIGZvbnQtcG9wcGlucyB0ZXh0LXhzIHRyYWNraW5nLXN1YnRpdGxlIHRleHQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAge2BgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgcHgtMy41XCI+XG4gICAgICAgIDxOYXZCYXJcbiAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QmFja0J1dHRvblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLWJhc2VcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0R29hbFNhdmluZ3NUcmlnZ2VycyhbXSk7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE5hdkJhclRpdGxlXG4gICAgICAgICAgICAgICAgdGl0bGU9e2Ake2dvYWwuY29uZmlybWVkR29hbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cInRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2V0dGluZ3NCdXR0b25cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmctc2tpbi1iYXNlXCJcbiAgICAgICAgICAgICAgICBpY29uPXtzZXR0aW5nTmV1dHJhbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBnb2FsLnNldEdvYWxJbWFnZVVybChjdXJyZW50R29hbC5pbWFnZV91cmwuaW1hZ2VfdXJsKTtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0R29hbE5hbWUoY3VycmVudEdvYWwubmFtZSk7XG4gICAgICAgICAgICAgICAgICBnb2FsLnNldEdvYWxBbW91bnQoY3VycmVudEdvYWwuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0R29hbEZyZXF1ZW5jeShjdXJyZW50R29hbC5mcmVxdWVuY3lfdGV4dCk7XG4gICAgICAgICAgICAgICAgICBhY2NvdW50U3RvcmUuc2V0U2F2aW5nQWNjb3VudChcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEdvYWwuYmFua19hY2NvdW50X2RldGFpbHMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRHb2FsLmJhbmtfYWNjb3VudF9kZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGdvYWxDb250cmlidXRpb25TZXR0aW5ncy5zZXRDb250cmlidXRpb25GcmVxdWVuY3koXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHb2FsLmZyZXF1ZW5jeVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL3VwZGF0ZS1nb2FsXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gcm91bmRlZC10LTN4bCBiZy1za2luLWJhc2UgYWJzb2x1dGUgcmlnaHQtMCBsZWZ0LTAgdG9wLTcyIGJvdHRvbS0wIHB0LTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIHB4LTMuNVwiPlxuICAgICAgICAgIDxBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgIGNoaWxkPXtcbiAgICAgICAgICAgICAgPEFkZEZ1bmRzQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYWRkRnVuZHNTdG9yZS5vcGVuQWRkRnVuZEJvdHRvbVNoZWV0KHRydWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT1cIkFkZCBmdW5kc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm90dG9tU2hlZXRcbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gYWRkRnVuZHNTdG9yZS5vcGVuQWRkRnVuZEJvdHRvbVNoZWV0KGZhbHNlKX1cbiAgICAgICAgICAgIG9wZW49e2FkZEZ1bmRzU3RvcmUuYm90dG9tU2hlZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXs8QWRkRnVuZHMgLz59XG4gICAgICAgICAgICBkZWZhdWx0U25hcD17MzAwfVxuICAgICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgICAgIDxBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgIGNoaWxkPXtcbiAgICAgICAgICAgICAgY3VycmVudEdvYWwuaXNfYWN0aXZlID8gKFxuICAgICAgICAgICAgICAgIDxQYXVzZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImgtMTIgdy0xMlwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdvYWwub3BlblBhdXNlRGVsZXRlQm90dG9tU2hlZXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFJlc3VtZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImgtMTIgdy0xMlwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXN1bWVUaGVHb2FsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9e2N1cnJlbnRHb2FsLmlzX2FjdGl2ZSA/IFwiUGF1c2UgZ29hbFwiIDogXCJSZXN1bWUgZ29hbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFjdGlvbkNvbXBvbmVudFxuICAgICAgICAgICAgY2hpbGQ9e1xuICAgICAgICAgICAgICA8TW9yZUJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJoLTEyIHctMTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdvYWwub3Blbk1vcmVCb3R0b21TaGVldCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9XCJNb3JlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBnb2FsLm9wZW5Nb3JlQm90dG9tU2hlZXQoZmFsc2UpfVxuICAgICAgICAgICAgb3Blbj17Z29hbC5tb3JlQm90dG9tU2hlZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgICAgPERlbGV0ZUludHJvXG4gICAgICAgICAgICAgICAgZGVsZXRlR29hbD17KCkgPT4gZ29hbC5vcGVuRGVsZXRlQm90dG9tU2hlZXQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29hbC5vcGVuTW9yZUJvdHRvbVNoZWV0KGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRTbmFwPXszMDB9XG4gICAgICAgICAgPjwvQm90dG9tU2hlZXQ+XG4gICAgICAgICAgPEJvdHRvbVNoZWV0XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IGdvYWwub3BlbkRlbGV0ZUJvdHRvbVNoZWV0KGZhbHNlKX1cbiAgICAgICAgICAgIG9wZW49e2dvYWwuZGVsZXRlR29hbEJvdHRvbVNoZWV0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICAgIDxEZWxldGVHb2FsXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29hbC5vcGVuRGVsZXRlQm90dG9tU2hlZXQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGRlbGV0ZUdvYWw9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL2RlbGV0ZS1nb2FsXCIpO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlVGhlR29hbCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ29hbE5hbWU9e2Ake2dvYWwuY29uZmlybWVkR29hbC5uYW1lfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0U25hcD17MzAwfVxuICAgICAgICAgID48L0JvdHRvbVNoZWV0PlxuICAgICAgICAgIDxCb3R0b21TaGVldFxuICAgICAgICAgICAgb3Blbj17Z29hbC5wYXVzZUdvYWxCb3R0b21TaGVldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjQsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgICAgICA8UGF1c2VHb2FsXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29hbC5vcGVuUGF1c2VHb2FsQm90dG9tU2hlZXQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGdvYWxOYW1lPXtnb2FsLmNvbmZpcm1lZEdvYWwubmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRTbmFwPXszMDB9XG4gICAgICAgICAgPjwvQm90dG9tU2hlZXQ+XG4gICAgICAgICAgPEJvdHRvbVNoZWV0XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgZ29hbC5vcGVuUGF1c2VEZWxldGVCb3R0b21TaGVldChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3Blbj17Z29hbC5wYXVzZURlbGV0ZUJvdHRvbVNoZWV0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGlsZHJlbj17XG4gICAgICAgICAgICAgIDxQYXVzZURlbGV0ZUdvYWxcbiAgICAgICAgICAgICAgICBwYXVzZUdvYWw9eygpID0+IGdvYWwub3BlblBhdXNlR29hbEJvdHRvbVNoZWV0KHRydWUpfVxuICAgICAgICAgICAgICAgIGRlbGV0ZUdvYWw9eygpID0+IGdvYWwub3BlbkRlbGV0ZUJvdHRvbVNoZWV0KHRydWUpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvYWwub3BlblBhdXNlRGVsZXRlQm90dG9tU2hlZXQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGlzUGF1c2VkPXshY3VycmVudEdvYWwuaXNfYWN0aXZlfVxuICAgICAgICAgICAgICAgIHJlc3VtZUdvYWw9eygpID0+XG4gICAgICAgICAgICAgICAgICByZXN1bWVUaGVHb2FsKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdvYWwub3BlblBhdXNlR29hbEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdFNuYXA9ezMwMH1cbiAgICAgICAgICA+PC9Cb3R0b21TaGVldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtMnhsIG10LTYgYmctc2tpbi1kaXZpZGVyIG14LTMuNVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8VGFiRmlsdGVyXG4gICAgICAgICAgICB0YWJzPXtnb2Fsdmlld1RhYnN9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3RhYkluZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KHRhYjogYW55KSA9PiBzZXRUYWJJbmRleCh0YWIudGFiX2lkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAge3RhYkluZGV4ID09IDAgPyAoXG4gICAgICAgICAgICA8QWN0aXZpdGllc1ZpZXdcbiAgICAgICAgICAgICAgYWN0aXZpdGllcz17Y3VycmVudEdvYWwuYWN0aXZpdHl9XG4gICAgICAgICAgICAgIGdvYWw9e2N1cnJlbnRHb2FsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRyaWdnZXJzVmlldyB0cmlnZ2Vycz17Z29hbC5nb2FsU2F2aW5nc1RyaWdnZXJzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHb2FsVmlldztcbiIsImltcG9ydCBpbWFnZSBmcm9tIFwiY2xpZW50L2Fzc2V0cy9pbWFnZXMvc2F2aW5ncy9lbXB0eS1zdGF0ZS5zdmdcIjtcbmV4cG9ydCBjb25zdCBHb2FsVmlld0VtcHR5U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWItM1wiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRyYWNraW5nLXRpdGxlIHRleHQtc2tpbi1uZXV0cmFsIG1iLTNcIj5cbiAgICAgICAgTm8gcmVnaXN0ZXJlZCBzYXZpbmdzIHlldCFcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGZvbnQtd29ya1NhbnMgZm9udC1tZWRpdW0gdGV4dC10aW55IHRyYWNraW5nLWxpc3R0aWxlX3N1YnRpdGxlIHRleHQtY2VudGVyIHRleHQtc2tpbi1zdWJ0aXRsZSBteC0xMlwiPlxuICAgICAgICBTdGFydCBmdW5kaW5nIHlvdXIgZ29hbCB0byBzZWUgcmVjZW50IGFjdGl2aXR5LlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlQYXVzZUNpcmNsZSwgRmlQbGF5Q2lyY2xlLCBGaVRyYXNoMiB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XG50eXBlIFBhdXNlRGVsZXRlR29hbFByb3BzID0ge1xuICBwYXVzZUdvYWw/OiAoKSA9PiB2b2lkO1xuICBkZWxldGVHb2FsPzogKCkgPT4gdm9pZDtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIHJlc3VtZUdvYWw/OiAoKSA9PiB2b2lkO1xuICBpc1BhdXNlZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgUGF1c2VEZWxldGVHb2FsID0gKHtcbiAgcGF1c2VHb2FsLFxuICBkZWxldGVHb2FsLFxuICBvbkNsaWNrLFxuICByZXN1bWVHb2FsLFxuICBpc1BhdXNlZCxcbn06IFBhdXNlRGVsZXRlR29hbFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LTMuNSBtdC0xNiBtYi04IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMTYgcmlnaHQtMVwiPlxuICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmctc2tpbi1zZWNvbmRhcnlXaXRoT3BhY2l0eVwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItMSBib3JkZXItc2tpbi1wcmltYXJ5IHRleHQtc2tpbi1wcmltYXJ5IHB5LTMuNSBtdC01XCJcbiAgICAgICAgb25DbGljaz17aXNQYXVzZWQgPyByZXN1bWVHb2FsIDogcGF1c2VHb2FsfVxuICAgICAgPlxuICAgICAgICB7aXNQYXVzZWQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEZpUGxheUNpcmNsZSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ2VzdF90ZXh0IG1sLTJcIj5cbiAgICAgICAgICAgICAgUmVzdW1lIGdvYWxcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxGaVBhdXNlQ2lyY2xlIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGZvbnQtcG9wcGlucyB0cmFja2luZy1sb25nZXN0X3RleHQgbWwtMlwiPlxuICAgICAgICAgICAgICBQYXVzZSBnb2FsXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHRleHQtc2tpbi1kYW5nZXIgcHktMy41IG10LTNcIlxuICAgICAgICBvbkNsaWNrPXtkZWxldGVHb2FsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPEZpVHJhc2gyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnMgdHJhY2tpbmctbG9uZ2VzdF90ZXh0IG1sLTJcIj5cbiAgICAgICAgICAgIERlbGV0ZSBnb2FsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpRmxhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XG5pbXBvcnQgeyBCb3R0b21TaGVldEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vQm90dG9tU2hlZXRGb290ZXJcIjtcbmltcG9ydCB1c2VHb2FsU3RvcmUgZnJvbSBcImNsaWVudC9zdG9yZS9nb2FsU3RvcmVcIjtcbmltcG9ydCBTZWxlY3RSZXN1bWVEYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWx2aWV3L1NlbGVjdFJlc3VtZURhdGVcIjtcbmltcG9ydCB7IGdldENvbmZpcm1lZEdvYWxzLCBnZXRNYXR1cml0eURhdGUsIHBhdXNlR29hbCB9IGZyb20gXCJjbGllbnQvYXBpL2dvYWxcIjtcbmltcG9ydCB7IElDb25maWcsIHVzZUNvbmZpZ3VyYXRpb25TdG9yZSB9IGZyb20gXCJjbGllbnQvc3RvcmUvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7XG4gIGNvbnZlcnREYXRlLFxuICBkYXRlRm9ybWF0LFxuICBudGhOdW1iZXIsXG4gIHJpZ2h0RGF0ZUZvcm1hdCxcbn0gZnJvbSBcImNsaWVudC91dGlscy9Gb3JtYXR0ZXJzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xudHlwZSBQYXVzZUdvYWxQcm9wcyA9IHtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGdvYWxOYW1lPzogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBQYXVzZUdvYWwgPSAoeyBvbkNsaWNrLCBnb2FsTmFtZSB9OiBQYXVzZUdvYWxQcm9wcykgPT4ge1xuICBjb25zdCBuZXh0TW9udGggPSBuZXcgRGF0ZSgpO1xuICBuZXh0TW9udGguc2V0TW9udGgobmV4dE1vbnRoLmdldE1vbnRoKCkgKyAxKTtcbiAgY29uc3QgZGF5ID0gbmV4dE1vbnRoLmdldERhdGUoKTtcbiAgY29uc3QgW2FjdGl2ZURhdGVPcHRpb24sIHNldEFjdGl2ZURhdGVPcHRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGdvYWwgPSB1c2VHb2FsU3RvcmUoKHN0YXRlOiBhbnkpID0+IHN0YXRlKTtcbiAgY29uc3Qgc2VsZWN0RGF0ZU9wdGlvbnMgPSBbXG4gICAgeyBpZDogMCwgdGl0bGU6IGAke2RheX0ke250aE51bWJlcihkYXkpfSBuZXh0IG1vbnRoYCB9LFxuICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkN1c3RvbVwiIH0sXG4gIF07XG4gIGNvbnN0IHNob3dUb2FzdE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgdG9hc3QoXG4gICAgICBgWW91ciBnb2FsIGhhcyBiZWVuIHBhdXNlZCBhbmQgaeKAmWxsIHJlbWluZCB5b3UgdG8gcmVzdW1lIG9uICR7ZGF0ZUZvcm1hdChcbiAgICAgICAgZ29hbC5yZXN1bWVfYXQsXG4gICAgICAgIHRydWVcbiAgICAgICl9YCxcbiAgICAgIHtcbiAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLkJPVFRPTV9SSUdIVCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcInRvYXN0XCIsXG4gICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgIH1cbiAgICApO1xuICB9O1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gdXNlQ29uZmlndXJhdGlvblN0b3JlKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb25maWd1cmF0aW9uXG4gICkgYXMgSUNvbmZpZztcblxuICBjb25zdCB7IGlzRmV0Y2hpbmc6IHBhdXNpbmdHb2FsLCByZWZldGNoOiBwYXVzZVRoZUdvYWwgfSA9IHVzZVF1ZXJ5KFxuICAgIFwicGF1c2UtZ29hbFwiLFxuICAgICgpID0+XG4gICAgICBwYXVzZUdvYWwoe1xuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICBnb2FsSWQ6IGdvYWwuY29uZmlybWVkR29hbC5pZCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJlc3VtZV9hdDogY29udmVydERhdGUoZ29hbC5yZXN1bWVfYXQudG9TdHJpbmcoKSksXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGdldENvbmZpcm1lZEdvYWxzKHsgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbiB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGdvYWwuc2V0Q29uZmlybWVkR29hbHMocmVzdWx0KTtcbiAgICAgICAgICAgIGdvYWwub3BlblBhdXNlR29hbEJvdHRvbVNoZWV0KGZhbHNlKTtcbiAgICAgICAgICAgIGdvYWwub3BlblBhdXNlRGVsZXRlQm90dG9tU2hlZXQoZmFsc2UpO1xuICAgICAgICAgICAgc2hvd1RvYXN0TWVzc2FnZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICB7IHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSwgZW5hYmxlZDogZmFsc2UgfVxuICApO1xuICBjb25zdCB7IGlzRmV0Y2hpbmc6IGZldGNoaW5nTWF0dXJpdHlEYXRlLCByZWZldGNoOiBtYXR1cmlyeURhdGUgfSA9IHVzZVF1ZXJ5KFxuICAgIFwibWF0dXJpdHktZGF0ZVwiLFxuICAgICgpID0+XG4gICAgICBnZXRNYXR1cml0eURhdGUoe1xuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0ZV9zdHI6IHJpZ2h0RGF0ZUZvcm1hdChnb2FsLnJlc3VtZV9hdC50b1N0cmluZygpKSxcbiAgICAgICAgfSxcbiAgICAgICAgZ29hbElkOiBnb2FsLmNvbmZpcm1lZEdvYWwuaWQsXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGdvYWwuc2V0TWF0dXJpdHlEYXRlKHJlc3VsdC5tYXR1cml0eV9kYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAvLyB7IHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSwgZW5hYmxlZDogZmFsc2UgfVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0yXCI+XG4gICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgIGJhY2tncm91bmQ9XCJiZy1za2luLXNlY29uZGFyeVdpdGhPcGFjaXR5XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtc2tpbi1iYXNlIHRyYWNraW5nLXRpdGxlIG1iLTQgbXQtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIEkgd2lsbCByZXN1bWVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNraW4tcHJpbWFyeSBtci0zXCI+XG4gICAgICAgICAgPEZpRmxhZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdvcmtTYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC10aW55IHRleHQtc2tpbi1iYXNlIHRleHQtY2VudGVyIHRyYWNraW5nLXRpdGxlXCI+XG4gICAgICAgICAge2BNeSAke2dvYWxOYW1lfSBnb2FsYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13b3JrU2FucyBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LXNraW4tYmFzZSB0ZXh0LWNlbnRlciB0cmFja2luZy10aXRsZSBtYi01XCI+XG4gICAgICAgIE9uIHRoZVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPFNlbGVjdFJlc3VtZURhdGVcbiAgICAgICAgICBhY3RpdmVPcHRpb249e2FjdGl2ZURhdGVPcHRpb259XG4gICAgICAgICAgb25DbGljaz17KHNlbGVjdGVkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gMCkge1xuICAgICAgICAgICAgICBnb2FsLnNldFJlc3VtZUF0RGF0ZShuZXh0TW9udGgpO1xuICAgICAgICAgICAgICBtYXR1cmlyeURhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEFjdGl2ZURhdGVPcHRpb24oc2VsZWN0ZWQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgc2VsZWN0RGF0ZU9wdGlvbnM9e3NlbGVjdERhdGVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgIDxCb3R0b21TaGVldEZvb3RlclxuICAgICAgICAgIGxvYWRpbmc9e3BhdXNpbmdHb2FsfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhdXNlVGhlR29hbCgpfVxuICAgICAgICAgIHRpdGxlPXtgJHtnb2FsLm1hdHVyaXR5RGF0ZX1gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiY2xpZW50L21vZGVscy9BY2NvdW50XCI7XG5cbmNvbnN0IHVzZUFkZEZ1bmRzU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4gKHtcbiAgYm90dG9tU2hlZXQ6IGZhbHNlLFxuICBvcGVuQWRkRnVuZEJvdHRvbVNoZWV0OiAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBzZXQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IHtcbiAgICAgICAgYm90dG9tU2hlZXQ6IG9wZW4sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSk7XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFkZEZ1bmRzU3RvcmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiXSwic291cmNlUm9vdCI6IiJ9
