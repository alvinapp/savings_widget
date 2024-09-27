"use strict";
(self["webpackChunksavings_widget"] =
  self["webpackChunksavings_widget"] || []).push([
  ["src_client_pages_goal-creation_CustomImageSelection_tsx"],
  {
    /***/ "./src/client/pages/components/goal-creation/ImageCard.tsx":
      /*!*****************************************************************!*\
  !*** ./src/client/pages/components/goal-creation/ImageCard.tsx ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ImageCard: () => /* binding */ ImageCard,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js"
          );

        const ImageCard = ({ image, onClick }) => {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            Object.assign(
              { className: "h-24 w-24 rounded-lg", onClick: onClick },
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                  src: image,
                  className: "h-24 w-24 rounded-lg object-cover",
                }),
              }
            )
          );
        };

        /***/
      },

    /***/ "./src/client/pages/goal-creation/CustomImageSelection.tsx":
      /*!*****************************************************************!*\
  !*** ./src/client/pages/goal-creation/CustomImageSelection.tsx ***!
  \*****************************************************************/
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
        /* harmony import */ var client_api_goal__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! client/api/goal */ "./src/client/api/goal.ts"
          );
        /* harmony import */ var client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! client/store/goalStore */ "./src/client/store/goalStore.ts"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js"
          );
        /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-query */ "./node_modules/react-query/es/index.js"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../components/BackButton */ "./src/client/pages/components/BackButton.tsx"
          );
        /* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/CloseButton */ "./src/client/pages/components/CloseButton.tsx"
          );
        /* harmony import */ var _components_goal_creation_ImageCard__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/goal-creation/ImageCard */ "./src/client/pages/components/goal-creation/ImageCard.tsx"
          );
        /* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/NavBar */ "./src/client/pages/components/NavBar.tsx"
          );

        const CustomImageSelection = () => {
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
          const goal = (0,
          client_store_goalStore__WEBPACK_IMPORTED_MODULE_5__["default"])(
            (state) => state
          );
          const [search, setSearch] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(goal.goalName); // Initialize with goalName
          const [timer, setTimer] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)();
          // Query to search images
          const {
            data: images,
            isLoading,
            error,
            refetch: searchTheImages,
          } = (0, react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(
            "search-images",
            () =>
              (0, client_api_goal__WEBPACK_IMPORTED_MODULE_6__.searchImages)({
                searchText: search,
              }),
            {
              refetchOnWindowFocus: false,
              enabled: false, // Disabled so it won't run on every render
            }
          );
          // Trigger the search when the component mounts using useEffect
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            if (goal.goalName) {
              searchTheImages(); // Initiate search for goal.goalName on mount
            }
          }, [goal.goalName, searchTheImages]);
          const inputChanged = (e) => {
            setSearch(e.target.value);
            clearTimeout(timer);
            const newTimer = setTimeout(() => {
              searchTheImages();
            }, 700);
            setTimer(newTimer);
          };
          const unSplashImages =
            images !== null && images !== void 0 ? images : [];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            Object.assign(
              { className: "h-screen w-screen bg-skin-base" },
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "shadow-card h-20 flex flex-col items-center justify-center px-3",
                      },
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_NavBar__WEBPACK_IMPORTED_MODULE_7__[
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
                                      _components_BackButton__WEBPACK_IMPORTED_MODULE_8__[
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
                                      "div",
                                      Object.assign(
                                        {
                                          className:
                                            "font-custom text-base text-skin-subtitle font-medium tracking-progress_label w-56 ml-6",
                                        },
                                        {
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            "input",
                                            {
                                              type: "text",
                                              className: "outline-none",
                                              placeholder: `Search ${goal.goalName}`,
                                              value: search,
                                              onChange: inputChanged,
                                            }
                                          ),
                                        }
                                      )
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _components_CloseButton__WEBPACK_IMPORTED_MODULE_9__[
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
                      }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    Object.assign(
                      {
                        className:
                          "pl-3 pr-3 pt-3.5 grid grid-cols-3 gap-x-0 gap-y-5 md:grid-cols-3 lg:grid-cols-4",
                      },
                      {
                        children: isLoading
                          ? (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              Object.assign(
                                {
                                  className:
                                    "flex flex-row justify-center w-screen",
                                },
                                {
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.TailSpin,
                                    {
                                      height: "30",
                                      width: "30",
                                      radius: 2,
                                      color: "#0539ec",
                                      ariaLabel: "tail-spin-loading",
                                      wrapperStyle: {},
                                      wrapperClass: "",
                                      visible: true,
                                    }
                                  ),
                                }
                              )
                            )
                          : unSplashImages.map((image) => {
                              return (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _components_goal_creation_ImageCard__WEBPACK_IMPORTED_MODULE_10__.ImageCard,
                                {
                                  image: image.urls.small,
                                  onClick: () => {
                                    goal.setGoalImageUrl(image.urls.small);
                                    navigate(-1);
                                  },
                                },
                                image.id
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
          CustomImageSelection;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlc19nb2FsLWNyZWF0aW9uX0N1c3RvbUltYWdlU2VsZWN0aW9uX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLTyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBa0IsRUFBRSxFQUFFO0lBQzlELE9BQU8sQ0FDTCw4RUFBSyxTQUFTLEVBQUMsc0JBQXNCLEVBQUMsT0FBTyxFQUFFLE9BQU8sZ0JBQ3BELGdFQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLG1DQUFtQyxHQUFHLElBQzdELENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g2QztBQUNHO0FBQ0M7QUFDSDtBQUNUO0FBQ1E7QUFDRztBQUNFO0FBQ2M7QUFDeEI7QUFFMUMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sSUFBSSxHQUFHLGtFQUFZLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7SUFDaEYsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxFQUFPLENBQUM7SUFFMUMseUJBQXlCO0lBQ3pCLE1BQU0sRUFDSixJQUFJLEVBQUUsTUFBTSxFQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsT0FBTyxFQUFFLGVBQWUsR0FDekIsR0FBRyxxREFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsQ0FBQyw2REFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDeEUsb0JBQW9CLEVBQUUsS0FBSztRQUMzQixPQUFPLEVBQUUsS0FBSyxFQUFFLDJDQUEyQztLQUM1RCxDQUFDLENBQUM7SUFFSCwrREFBK0Q7SUFDL0QsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsZUFBZSxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7U0FDakU7SUFDSCxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFckMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM5QixTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsTUFBTSxRQUFRLEdBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNwQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxjQUFjLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksRUFBRSxDQUFDO0lBRXBDLE9BQU8sQ0FDTCwrRUFBSyxTQUFTLEVBQUMsZ0NBQWdDLGlCQUM3Qyw4RUFBSyxTQUFTLEVBQUMsaUVBQWlFLGdCQUM5RSx1REFBQywwREFBTSxJQUNMLFFBQVEsRUFDTiwrRUFBSyxTQUFTLEVBQUMsNENBQTRDLGlCQUN6RCx1REFBQyw4REFBVSxJQUNULE9BQU8sRUFBRSxHQUFHLEVBQUU7b0NBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsQ0FBQyxHQUNELEVBQ0YsOEVBQUssU0FBUyxFQUFDLHlGQUF5RixnQkFDdEcsa0VBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsY0FBYyxFQUN4QixXQUFXLEVBQUUsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ3RDLEtBQUssRUFBRSxNQUFNLEVBQ2IsUUFBUSxFQUFFLFlBQVksR0FDdEIsSUFDRSxFQUNOLHVEQUFDLCtEQUFXLElBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQ0FDWixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDZixDQUFDLEdBQ0QsS0FDRSxHQUVSLElBQ0UsRUFDTiw4RUFBSyxTQUFTLEVBQUMsaUZBQWlGLGdCQUM3RixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ1gsOEVBQUssU0FBUyxFQUFDLHVDQUF1QyxnQkFDcEQsdURBQUMsMERBQVEsSUFDUCxNQUFNLEVBQUMsSUFBSSxFQUNYLEtBQUssRUFBQyxJQUFJLEVBQ1YsTUFBTSxFQUFFLENBQUMsRUFDVCxLQUFLLEVBQUMsU0FBUyxFQUNmLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsWUFBWSxFQUFFLEVBQUUsRUFDaEIsWUFBWSxFQUFDLEVBQUUsRUFDZixPQUFPLEVBQUUsSUFBSSxHQUNiLElBQ0UsQ0FDUCxDQUFDLENBQUMsQ0FBQyxDQUNGLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtvQkFDaEMsT0FBTyxDQUNMLHVEQUFDLDJFQUFTLElBRVIsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDdkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxJQUxJLEtBQUssQ0FBQyxFQUFFLENBTWIsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUNILElBQ0csS0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0Ly4vc3JjL2NsaWVudC9wYWdlcy9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSW1hZ2VDYXJkLnRzeCIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC8uL3NyYy9jbGllbnQvcGFnZXMvZ29hbC1jcmVhdGlvbi9DdXN0b21JbWFnZVNlbGVjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBJbWFnZUNhcmRQcm9wcyA9IHtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBJbWFnZUNhcmQgPSAoeyBpbWFnZSwgb25DbGljayB9OiBJbWFnZUNhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtbGdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBzZWFyY2hJbWFnZXMgfSBmcm9tIFwiY2xpZW50L2FwaS9nb2FsXCI7XG5pbXBvcnQgdXNlR29hbFN0b3JlIGZyb20gXCJjbGllbnQvc3RvcmUvZ29hbFN0b3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFpbFNwaW4gfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIjtcbmltcG9ydCB7IEltYWdlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dvYWwtY3JlYXRpb24vSW1hZ2VDYXJkXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuXG5jb25zdCBDdXN0b21JbWFnZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBnb2FsID0gdXNlR29hbFN0b3JlKChzdGF0ZTogYW55KSA9PiBzdGF0ZSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShnb2FsLmdvYWxOYW1lKTsgLy8gSW5pdGlhbGl6ZSB3aXRoIGdvYWxOYW1lXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIC8vIFF1ZXJ5IHRvIHNlYXJjaCBpbWFnZXNcbiAgY29uc3Qge1xuICAgIGRhdGE6IGltYWdlcyxcbiAgICBpc0xvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgcmVmZXRjaDogc2VhcmNoVGhlSW1hZ2VzLFxuICB9ID0gdXNlUXVlcnkoXCJzZWFyY2gtaW1hZ2VzXCIsICgpID0+IHNlYXJjaEltYWdlcyh7IHNlYXJjaFRleHQ6IHNlYXJjaCB9KSwge1xuICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICBlbmFibGVkOiBmYWxzZSwgLy8gRGlzYWJsZWQgc28gaXQgd29uJ3QgcnVuIG9uIGV2ZXJ5IHJlbmRlclxuICB9KTtcblxuICAvLyBUcmlnZ2VyIHRoZSBzZWFyY2ggd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyB1c2luZyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZ29hbC5nb2FsTmFtZSkge1xuICAgICAgc2VhcmNoVGhlSW1hZ2VzKCk7IC8vIEluaXRpYXRlIHNlYXJjaCBmb3IgZ29hbC5nb2FsTmFtZSBvbiBtb3VudFxuICAgIH1cbiAgfSwgW2dvYWwuZ29hbE5hbWUsIHNlYXJjaFRoZUltYWdlc10pO1xuXG4gIGNvbnN0IGlucHV0Q2hhbmdlZCA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIGNvbnN0IG5ld1RpbWVyOiBhbnkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNlYXJjaFRoZUltYWdlcygpO1xuICAgIH0sIDcwMCk7XG5cbiAgICBzZXRUaW1lcihuZXdUaW1lcik7XG4gIH07XG5cbiAgY29uc3QgdW5TcGxhc2hJbWFnZXMgPSBpbWFnZXMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGJnLXNraW4tYmFzZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY2FyZCBoLTIwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTNcIj5cbiAgICAgICAgPE5hdkJhclxuICAgICAgICAgIGNoaWxkcmVuPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIHRleHQtYmFzZSB0ZXh0LXNraW4tc3VidGl0bGUgZm9udC1tZWRpdW0gdHJhY2tpbmctcHJvZ3Jlc3NfbGFiZWwgdy01NiBtbC02XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtnb2FsLmdvYWxOYW1lfWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMyBwci0zIHB0LTMuNSBncmlkIGdyaWQtY29scy0zIGdhcC14LTAgZ2FwLXktNSBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlblwiPlxuICAgICAgICAgICAgPFRhaWxTcGluXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgIHJhZGl1cz17Mn1cbiAgICAgICAgICAgICAgY29sb3I9XCIjMDU2NDg5XCJcbiAgICAgICAgICAgICAgYXJpYUxhYmVsPVwidGFpbC1zcGluLWxvYWRpbmdcIlxuICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB1blNwbGFzaEltYWdlcy5tYXAoKGltYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJbWFnZUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZS51cmxzLnNtYWxsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdvYWwuc2V0R29hbEltYWdlVXJsKGltYWdlLnVybHMuc21hbGwpO1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoLTEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUltYWdlU2VsZWN0aW9uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
