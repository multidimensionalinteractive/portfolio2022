"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/skills.tsx":
/*!************************************!*\
  !*** ./components/home/skills.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar SKILL_STYLES = {\n    SECTION: \"w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center\",\n    SKILL_TITLE: \"section-title-sm mb-4 seq\"\n};\nvar SkillsSection = function() {\n    _s();\n    var targetSection = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), willChange = ref[0], setwillChange = ref[1];\n    var initRevealAnimation = function(targetSection) {\n        var revealTl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n            defaults: {\n                ease: gsap__WEBPACK_IMPORTED_MODULE_4__.Linear.easeNone\n            }\n        });\n        revealTl.from(targetSection.current.querySelectorAll(\".seq\"), {\n            opacity: 0,\n            duration: 0.5,\n            stagger: 0.5\n        }, \"<\");\n        return gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({\n            trigger: targetSection.current.querySelector(\".skills-wrapper\"),\n            start: \"100px bottom\",\n            end: \"center center\",\n            animation: revealTl,\n            scrub: 0,\n            onToggle: function(self) {\n                return setwillChange(self.isActive);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var revealAnimationRef = initRevealAnimation(targetSection);\n        return revealAnimationRef.kill;\n    }, [\n        targetSection\n    ]);\n    var renderSectionTitle = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"section-title-sm seq\",\n                    children: \"SKILLS\"\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"section-heading seq mt-2\",\n                    children: \"My Skills\"\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl md:max-w-2xl w-full seq mt-2\",\n                    children: [\n                        \"I bridge the gap between design and development. I like to craft an aesthetic user interface and UX using modern best practices.\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Lately I have been studying more about backend frameworks. Currently learning more JAVA, Python, GO, & Node.js. \"\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, _this);\n    };\n    var renderBackgroundPattern = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/pattern-r.svg\",\n                        loading: \"lazy\",\n                        height: 700,\n                        width: 320,\n                        alt: \"pattern\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/pattern-l.svg\",\n                        loading: \"lazy\",\n                        height: 335,\n                        width: 140,\n                        alt: \"pattern\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    var renderSkillColumn = function(title, skills) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: SKILL_STYLES.SKILL_TITLE,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap seq \".concat(willChange ? \"will-change-opacity\" : \"\"),\n                    children: skills.map(function(skill) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/skills/\".concat(skill, \".svg\"),\n                            alt: skill,\n                            width: 76,\n                            height: 76,\n                            className: \"skill\"\n                        }, skill, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative\",\n        children: [\n            renderBackgroundPattern(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: SKILL_STYLES.SECTION,\n                id: _constants__WEBPACK_IMPORTED_MODULE_1__.MENULINKS[2].ref,\n                ref: targetSection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col skills-wrapper\",\n                    children: [\n                        renderSectionTitle(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10\",\n                            children: renderSkillColumn(\"FRONTEND DEVELOPMENT\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.frontend)\n                        }, void 0, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap mt-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-6 mb-6\",\n                                    children: renderSkillColumn(\"User Interface, User Experience Design\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.userInterface)\n                                }, void 0, false, {\n                                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: renderSkillColumn(\"Other Skills\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.other)\n                                }, void 0, false, {\n                                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this);\n};\n_s(SkillsSection, \"J1WPc/nVmMBeUpttznvdFPNe/0c=\");\n_c = SkillsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsSection);\nvar _c;\n$RefreshReg$(_c, \"SkillsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzs4Q0FDbkMsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxXQUFXOzhDQUN2QlUsaUJBQWlCLENBQ2hCLHdDQUF3QyxFQUN4Q25ELDREQUFvQixDQUNyQjs7Ozs7eUNBQ0c7OENBQ04sOERBQUN3QyxLQUFHOzhDQUFFVyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUVuRCxvREFBWSxDQUFDOzs7Ozt5Q0FBTzs7Ozs7O2lDQUN4RDs7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7O2FBQ0UsQ0FDVjtBQUNKLENBQUM7R0FwSEtXLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQXNIbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvc2tpbGxzLnRzeD8yMDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1FTlVMSU5LUywgU0tJTExTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAsIExpbmVhciB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmNvbnN0IFNLSUxMX1NUWUxFUyA9IHtcbiAgU0VDVElPTjpcbiAgICBcInctZnVsbCByZWxhdGl2ZSBzZWxlY3Qtbm9uZSBtYi0yNCBzZWN0aW9uLWNvbnRhaW5lciBweS0xMiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCIsXG4gIFNLSUxMX1RJVExFOiBcInNlY3Rpb24tdGl0bGUtc20gbWItNCBzZXFcIixcbn07XG5cbmNvbnN0IFNraWxsc1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHRhcmdldFNlY3Rpb246IE11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbd2lsbENoYW5nZSwgc2V0d2lsbENoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaW5pdFJldmVhbEFuaW1hdGlvbiA9IChcbiAgICB0YXJnZXRTZWN0aW9uOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxuICApOiBTY3JvbGxUcmlnZ2VyID0+IHtcbiAgICBjb25zdCByZXZlYWxUbCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czogeyBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSB9KTtcbiAgICByZXZlYWxUbC5mcm9tKFxuICAgICAgdGFyZ2V0U2VjdGlvbi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VxXCIpLFxuICAgICAgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBzdGFnZ2VyOiAwLjUgfSxcbiAgICAgIFwiPFwiXG4gICAgKTtcblxuICAgIHJldHVybiBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiB0YXJnZXRTZWN0aW9uLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHMtd3JhcHBlclwiKSxcbiAgICAgIHN0YXJ0OiBcIjEwMHB4IGJvdHRvbVwiLFxuICAgICAgZW5kOiBgY2VudGVyIGNlbnRlcmAsXG4gICAgICBhbmltYXRpb246IHJldmVhbFRsLFxuICAgICAgc2NydWI6IDAsXG4gICAgICBvblRvZ2dsZTogKHNlbGYpID0+IHNldHdpbGxDaGFuZ2Uoc2VsZi5pc0FjdGl2ZSksXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXZlYWxBbmltYXRpb25SZWYgPSBpbml0UmV2ZWFsQW5pbWF0aW9uKHRhcmdldFNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIHJldmVhbEFuaW1hdGlvblJlZi5raWxsO1xuICB9LCBbdGFyZ2V0U2VjdGlvbl0pO1xuXG4gIGNvbnN0IHJlbmRlclNlY3Rpb25UaXRsZSA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS1zbSBzZXFcIj5TS0lMTFM8L3A+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nIHNlcSBtdC0yXCI+TXkgU2tpbGxzPC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDptYXgtdy0yeGwgdy1mdWxsIHNlcSBtdC0yXCI+XG4gICAgICBJIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gZGVzaWduIGFuZCBkZXZlbG9wbWVudC5cbiAgICAgIEkgbGlrZSB0byBjcmFmdCBhbiBhZXN0aGV0aWMgdXNlciBpbnRlcmZhY2UgYW5kIFVYIHVzaW5nIG1vZGVybiBiZXN0IHByYWN0aWNlcy57XCIgXCJ9XG4gICAgICA8L2gyPlxuICAgICAgPGgyPkxhdGVseSBJIGhhdmUgYmVlbiBzdHVkeWluZyBtb3JlIGFib3V0IGJhY2tlbmQgZnJhbWV3b3Jrcy4gQ3VycmVudGx5IGxlYXJuaW5nIG1vcmUgSkFWQSwgUHl0aG9uLCBHTywgJiBOb2RlLmpzLiA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IHJlbmRlckJhY2tncm91bmRQYXR0ZXJuID0gKCk6IFJlYWN0LlJlYWN0Tm9kZSA9PiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCAtYm90dG9tLTEvMyB3LTEvNSBtYXgtdy14cyBtZDpmbGV4IGhpZGRlbiBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvcGF0dGVybi1yLnN2Z1wiXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIGhlaWdodD17NzAwfVxuICAgICAgICAgIHdpZHRoPXszMjB9XG4gICAgICAgICAgYWx0PVwicGF0dGVyblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMy41IHctMS8xMiBtYXgtdy14cyBtZDpibG9jayBoaWRkZW5cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL3BhdHRlcm4tbC5zdmdcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBoZWlnaHQ9ezMzNX1cbiAgICAgICAgICB3aWR0aD17MTQwfVxuICAgICAgICAgIGFsdD1cInBhdHRlcm5cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyU2tpbGxDb2x1bW4gPSAoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBza2lsbHM6IHN0cmluZ1tdXG4gICk6IFJlYWN0LlJlYWN0Tm9kZSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMyBjbGFzc05hbWU9e1NLSUxMX1NUWUxFUy5TS0lMTF9USVRMRX0+e3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIHNlcSAke1xuICAgICAgICAgIHdpbGxDaGFuZ2UgPyBcIndpbGwtY2hhbmdlLW9wYWNpdHlcIiA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHtza2lsbHMubWFwKChza2lsbCkgPT4gKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAga2V5PXtza2lsbH1cbiAgICAgICAgICAgIHNyYz17YC9za2lsbHMvJHtza2lsbH0uc3ZnYH1cbiAgICAgICAgICAgIGFsdD17c2tpbGx9XG4gICAgICAgICAgICB3aWR0aD17NzZ9XG4gICAgICAgICAgICBoZWlnaHQ9ezc2fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAge3JlbmRlckJhY2tncm91bmRQYXR0ZXJuKCl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17U0tJTExfU1RZTEVTLlNFQ1RJT059XG4gICAgICAgIGlkPXtNRU5VTElOS1NbMl0ucmVmfVxuICAgICAgICByZWY9e3RhcmdldFNlY3Rpb259XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBza2lsbHMtd3JhcHBlclwiPlxuICAgICAgICAgIHtyZW5kZXJTZWN0aW9uVGl0bGUoKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICB7cmVuZGVyU2tpbGxDb2x1bW4oXCJGUk9OVEVORCBERVZFTE9QTUVOVFwiLCBTS0lMTFMuZnJvbnRlbmQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNiBtYi02XCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJTa2lsbENvbHVtbihcbiAgICAgICAgICAgICAgICBcIlVzZXIgSW50ZXJmYWNlLCBVc2VyIEV4cGVyaWVuY2UgRGVzaWduXCIsXG4gICAgICAgICAgICAgICAgU0tJTExTLnVzZXJJbnRlcmZhY2VcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57cmVuZGVyU2tpbGxDb2x1bW4oXCJPdGhlciBTa2lsbHNcIiwgU0tJTExTLm90aGVyKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHNTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIk1FTlVMSU5LUyIsIlNLSUxMUyIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJnc2FwIiwiTGluZWFyIiwiU2Nyb2xsVHJpZ2dlciIsIlNLSUxMX1NUWUxFUyIsIlNFQ1RJT04iLCJTS0lMTF9USVRMRSIsIlNraWxsc1NlY3Rpb24iLCJ0YXJnZXRTZWN0aW9uIiwid2lsbENoYW5nZSIsInNldHdpbGxDaGFuZ2UiLCJpbml0UmV2ZWFsQW5pbWF0aW9uIiwicmV2ZWFsVGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZWFzZSIsImVhc2VOb25lIiwiZnJvbSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3BhY2l0eSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImNyZWF0ZSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJlbmQiLCJhbmltYXRpb24iLCJzY3J1YiIsIm9uVG9nZ2xlIiwic2VsZiIsImlzQWN0aXZlIiwicmV2ZWFsQW5pbWF0aW9uUmVmIiwia2lsbCIsInJlbmRlclNlY3Rpb25UaXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoMSIsImgyIiwicmVuZGVyQmFja2dyb3VuZFBhdHRlcm4iLCJzcmMiLCJsb2FkaW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJyZW5kZXJTa2lsbENvbHVtbiIsInRpdGxlIiwic2tpbGxzIiwiaDMiLCJtYXAiLCJza2lsbCIsInNlY3Rpb24iLCJpZCIsInJlZiIsImZyb250ZW5kIiwidXNlckludGVyZmFjZSIsIm90aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/skills.tsx\n"));

/***/ })

});