"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_settings_NotificationSettings_tsx"],
  {
    /***/ "./src/client/pages/components/settings/NotificationsSettingsCard.tsx":
      /*!****************************************************************************!*\
  !*** ./src/client/pages/components/settings/NotificationsSettingsCard.tsx ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ NotificationsSettingsCard: () =>
            /* binding */ NotificationsSettingsCard,
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
        /* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-switch */ "./node_modules/react-switch/dist/index.dev.mjs"
          );

        const NotificationsSettingsCard = () => {
          const [enableNotification, setEnableNotification] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-row justify-between" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
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
                                  "tracking-listtile_subtitle font-custom text-tiny text-skin-base font-medium",
                              },
                              { children: "Smart savings" }
                            )
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "div",
                            Object.assign(
                              {
                                className:
                                  "tracking-subtitle font-custom text-xs text-skin-subtitle font-medium mt-2 text-start mr-10",
                              },
                              {
                                children:
                                  "Stay on top of your savings journey without having to check the app.",
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
                      { className: "flex flex-col" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          react_switch__WEBPACK_IMPORTED_MODULE_2__["default"],
                          {
                            onChange: () =>
                              setEnableNotification(!enableNotification),
                            checked: enableNotification,
                            uncheckedIcon: false,
                            checkedIcon: false,
                            onColor: "#0539ec",
                            offColor: "#878787",
                            boxShadow: "#ffffff",
                            activeBoxShadow: "#ffffff",
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

    /***/ "./src/client/pages/settings/NotificationSettings.tsx":
      /*!************************************************************!*\
  !*** ./src/client/pages/settings/NotificationSettings.tsx ***!
  \************************************************************/
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
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );
        /* harmony import */ var _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../components/NavBarTitle */ "./src/client/pages/components/NavBarTitle.tsx"
          );
        /* harmony import */ var _components_settings_NotificationsSettingsCard__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../components/settings/NotificationsSettingsCard */ "./src/client/pages/components/settings/NotificationsSettingsCard.tsx"
          );

        const NotificationSettings = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "flex flex-col relative pt-6 w-screen h-screen" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"],
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
                                      _components_BackButton__WEBPACK_IMPORTED_MODULE_3__[
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
                                      _components_NavBarTitle__WEBPACK_IMPORTED_MODULE_4__[
                                        "default"
                                      ],
                                      { title: "Notifications" }
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
                                      { className: "rounded-full h-10 w-10" }
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
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      { className: "flex flex-row mx-3.5 mt-7" },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_settings_NotificationsSettingsCard__WEBPACK_IMPORTED_MODULE_5__.NotificationsSettingsCard,
                          {}
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
          NotificationSettings;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19zZXR0aW5nc19Ob3RpZmljYXRpb25TZXR0aW5nc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDM0IsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxPQUFPLENBQ0wsK0VBQUssU0FBUyxFQUFDLCtCQUErQixpQkFDNUMsK0VBQUssU0FBUyxFQUFDLGVBQWUsaUJBQzVCLDhFQUFLLFNBQVMsRUFBQyw4RUFBOEUsbUNBRXZGLEVBQ04sOEVBQUssU0FBUyxFQUFDLDZGQUE2RiwwRkFFdEcsS0FDRixFQUNOLDhFQUFLLFNBQVMsRUFBQyxlQUFlLGdCQUM1Qix1REFBQyxvREFBTSxJQUNMLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFDM0IsYUFBYSxFQUFFLEtBQUssRUFDcEIsV0FBVyxFQUFFLEtBQUssRUFDbEIsT0FBTyxFQUFDLFNBQVMsRUFDakIsUUFBUSxFQUFDLFNBQVMsRUFDbEIsU0FBUyxFQUFDLFNBQVMsRUFDbkIsZUFBZSxFQUFDLFNBQVMsR0FDekIsSUFDRSxLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCNkM7QUFDRztBQUNSO0FBQ1U7QUFDeUM7QUFFN0YsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsK0NBQStDLGlCQUM1RCx1REFBQywwREFBTSxJQUNMLFFBQVEsRUFDTiwrRUFBSyxTQUFTLEVBQUMsbURBQW1ELGlCQUNoRSw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsdURBQUMsOERBQVUsSUFDVCxVQUFVLEVBQUMsY0FBYyxFQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQzNCLElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsZUFBZSxnQkFDNUIsdURBQUMsK0RBQVcsSUFBQyxLQUFLLEVBQUMsZUFBZSxHQUFHLElBQ2pDLEVBQ04sOEVBQUssU0FBUyxFQUFDLGVBQWUsZ0JBQzVCLGdFQUFLLFNBQVMsRUFBQyx3QkFBd0IsR0FBTyxJQUMxQyxLQUNGLEdBRVIsRUFDRiw4RUFBSyxTQUFTLEVBQUMsMkJBQTJCLGdCQUN4Qyx1REFBQyxxR0FBeUIsS0FBRyxJQUN6QixLQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvc2V0dGluZ3MvTm90aWZpY2F0aW9uc1NldHRpbmdzQ2FyZC50c3giLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvY2xpZW50L3BhZ2VzL3NldHRpbmdzL05vdGlmaWNhdGlvblNldHRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnNTZXR0aW5nc0NhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbmFibGVOb3RpZmljYXRpb24sIHNldEVuYWJsZU5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tpbmctbGlzdHRpbGVfc3VidGl0bGUgZm9udC1wb3BwaW5zIHRleHQtdGlueSB0ZXh0LXNraW4tYmFzZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIFNtYXJ0IHNhdmluZ3NcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tpbmctc3VidGl0bGUgZm9udC1wb3BwaW5zIHRleHQteHMgdGV4dC1za2luLXN1YnRpdGxlIGZvbnQtbWVkaXVtIG10LTIgdGV4dC1zdGFydCBtci0xMFwiPlxuICAgICAgICAgIFN0YXkgb24gdG9wIG9mIHlvdXIgc2F2aW5ncyBqb3VybmV5IHdpdGhvdXQgaGF2aW5nIHRvIGNoZWNrIHRoZSBhcHAuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRFbmFibGVOb3RpZmljYXRpb24oIWVuYWJsZU5vdGlmaWNhdGlvbil9XG4gICAgICAgICAgY2hlY2tlZD17ZW5hYmxlTm90aWZpY2F0aW9ufVxuICAgICAgICAgIHVuY2hlY2tlZEljb249e2ZhbHNlfVxuICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX1cbiAgICAgICAgICBvbkNvbG9yPVwiIzA1NjQ4OVwiXG4gICAgICAgICAgb2ZmQ29sb3I9XCIjODc4Nzg3XCJcbiAgICAgICAgICBib3hTaGFkb3c9XCIjZmZmZmZmXCJcbiAgICAgICAgICBhY3RpdmVCb3hTaGFkb3c9XCIjZmZmZmZmXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgTmF2QmFyVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyVGl0bGVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXR0aW5nc0NhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZXR0aW5ncy9Ob3RpZmljYXRpb25zU2V0dGluZ3NDYXJkXCI7XG5cbmNvbnN0IE5vdGlmaWNhdGlvblNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHB0LTYgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgY2hpbGRyZW49e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1yLTMuNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJnLXNraW4tYmFzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPE5hdkJhclRpdGxlIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEwIHctMTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG14LTMuNSBtdC03XCI+XG4gICAgICAgIDxOb3RpZmljYXRpb25zU2V0dGluZ3NDYXJkIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25TZXR0aW5ncztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
