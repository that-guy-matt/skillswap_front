"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.js":
/*!*******************************!*\
  !*** ./src/app/login/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api */ \"(app-pages-browser)/./src/app/Api.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.js */ \"(app-pages-browser)/./src/app/components/Header.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst apiUrl = \"\".concat(\"http://localhost:3000\", \"/login\");\nconst LoginPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // state to hold form input values\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // function to handle form input\n    const handleSubmit = (event)=>{\n        _Api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Auth.login(email, password).then((response)=>{\n            const { token } = response.data;\n            localStorage.setItem(\"Auth-Token\", token);\n            setMessage(\"Success\");\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Login failed: \", error);\n            setMessage(\"An error occurred during login\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 col-lg-4 mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card text-center shadow p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"card-title\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mb-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"form-label\",\n                                                    children: \"Email:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"email\",\n                                                    id: \"email\",\n                                                    placeholder: \"email@example.com\",\n                                                    className: \"form-control\",\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value),\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mb-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"password\",\n                                                    className: \"form-label\",\n                                                    children: \"Password:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"password\",\n                                                    id: \"password\",\n                                                    className: \"form-control\",\n                                                    placeholder: \"Password\",\n                                                    value: password,\n                                                    onChange: (e)=>setPassword(e.target.value),\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-primary w-75\",\n                                            onClick: handleSubmit,\n                                            children: \"Log In\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-3\",\n                                            children: message\n                                        }, void 0, false, {\n                                            fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matthew/projects/skillswap_front/src/app/login/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"yjxb0oYCt9QaqZk7cW5dAambX04=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFDUDtBQUNEO0FBQ21CO0FBQ0M7QUFFN0MsTUFBTUssU0FBUyxHQUFtQyxPQUFoQ0MsdUJBQStCLEVBQUM7QUFFbEQsTUFBTUcsWUFBWTs7SUFDaEIsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLGtDQUFrQztJQUNsQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFdkMsZ0NBQWdDO0lBQ2hDLE1BQU1pQixlQUFlLENBQUNDO1FBQ3BCaEIsNENBQUdBLENBQUNpQixJQUFJLENBQUNDLEtBQUssQ0FBQ1QsT0FBT0UsVUFBVVEsSUFBSSxDQUFDQyxDQUFBQTtZQUNuQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRCxTQUFTRSxJQUFJO1lBQy9CQyxhQUFhQyxPQUFPLENBQUMsY0FBY0g7WUFDbkNQLFdBQVc7WUFDWE4sT0FBT2lCLElBQUksQ0FBQztRQUNkLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDUEMsUUFBUUQsS0FBSyxDQUFDLGtCQUFrQkE7WUFDaENiLFdBQVc7UUFDYjtJQUNGO0lBR0EscUJBQ0UsOERBQUNlOzswQkFDQyw4REFBQzNCLDZEQUFNQTs7Ozs7MEJBRVAsOERBQUM0QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDQzt3Q0FBR0QsV0FBVTtrREFBYTs7Ozs7Ozs7Ozs7OENBRTdCLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBR2IsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0U7b0RBQU1DLFNBQVE7b0RBQVFILFdBQVU7OERBQWE7Ozs7Ozs4REFDOUMsOERBQUNJO29EQUNDQyxNQUFLO29EQUNMQyxJQUFHO29EQUNIQyxhQUFZO29EQUNaUCxXQUFVO29EQUNWUSxPQUFPOUI7b0RBQ1ArQixVQUFVLENBQUNDLElBQU0vQixTQUFTK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29EQUN4Q0ksUUFBUTs7Ozs7Ozs7Ozs7O3NEQUlaLDhEQUFDYjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNFO29EQUFNQyxTQUFRO29EQUFXSCxXQUFVOzhEQUFhOzs7Ozs7OERBQ2pELDhEQUFDSTtvREFDQ0MsTUFBSztvREFDTEMsSUFBRztvREFDSE4sV0FBVTtvREFDVk8sYUFBWTtvREFDWkMsT0FBTzVCO29EQUNQNkIsVUFBVSxDQUFDQyxJQUFNN0IsWUFBWTZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvREFDM0NJLFFBQVE7Ozs7Ozs7Ozs7OztzREFJWiw4REFBQ0M7NENBQU9iLFdBQVU7NENBQXVCYyxTQUFTOUI7c0RBQWM7Ozs7Ozt3Q0FFL0RGLHlCQUFXLDhEQUFDaUM7NENBQUVmLFdBQVU7c0RBQVFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pEO0dBeEVNTjs7UUFDV04sc0RBQVNBOzs7S0FEcEJNO0FBMEVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcz80OGI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL0FwaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIuanNcIjtcblxuY29uc3QgYXBpVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vbG9naW5gO1xuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBzdGF0ZSB0byBob2xkIGZvcm0gaW5wdXQgdmFsdWVzXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIGlucHV0XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIEFwaS5BdXRoLmxvZ2luKGVtYWlsLCBwYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBdXRoLVRva2VuXCIsIHRva2VuKTtcbiAgICAgIHNldE1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZmFpbGVkOiBcIiwgZXJyb3IpO1xuICAgICAgc2V0TWVzc2FnZShcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBsb2dpblwiKTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LWNlbnRlciBzaGFkb3cgcC0yXCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TG9naW48L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItNFwiPkxvZ2luPC9oMT4gKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VtYWlsQGV4YW1wbGUuY29tJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LTc1XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5Mb2cgSW48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cIm10LTNcIj57bWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiQXBpIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJMb2dpblBhZ2UiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJBdXRoIiwibG9naW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2tlbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});