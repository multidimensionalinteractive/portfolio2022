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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar SKILL_STYLES = {\n    SECTION: \"w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center\",\n    SKILL_TITLE: \"section-title-sm mb-4 seq\"\n};\nvar SkillsSection = function() {\n    _s();\n    var targetSection = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), willChange = ref[0], setwillChange = ref[1];\n    var initRevealAnimation = function(targetSection) {\n        var revealTl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n            defaults: {\n                ease: gsap__WEBPACK_IMPORTED_MODULE_4__.Linear.easeNone\n            }\n        });\n        revealTl.from(targetSection.current.querySelectorAll(\".seq\"), {\n            opacity: 0,\n            duration: 0.5,\n            stagger: 0.5\n        }, \"<\");\n        return gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.create({\n            trigger: targetSection.current.querySelector(\".skills-wrapper\"),\n            start: \"100px bottom\",\n            end: \"center center\",\n            animation: revealTl,\n            scrub: 0,\n            onToggle: function(self) {\n                return setwillChange(self.isActive);\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var revealAnimationRef = initRevealAnimation(targetSection);\n        return revealAnimationRef.kill;\n    }, [\n        targetSection\n    ]);\n    var renderSectionTitle = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"section-title-sm seq\",\n                    children: \"SKILLS\"\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"section-heading seq mt-2\",\n                    children: \"My Skills\"\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl md:max-w-2xl w-full seq mt-2\",\n                    children: [\n                        \"I bridge the gap between design and development.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, _this),\n                        \"I like to craft an aesthetic user interface and UX using modern best practices.\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, _this);\n    };\n    var renderBackgroundPattern = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/pattern-r.svg\",\n                        loading: \"lazy\",\n                        height: 700,\n                        width: 320,\n                        alt: \"pattern\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/pattern-l.svg\",\n                        loading: \"lazy\",\n                        height: 335,\n                        width: 140,\n                        alt: \"pattern\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    var renderSkillColumn = function(title, skills) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: SKILL_STYLES.SKILL_TITLE,\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap seq \".concat(willChange ? \"will-change-opacity\" : \"\"),\n                    children: skills.map(function(skill) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/skills/\".concat(skill, \".svg\"),\n                            alt: skill,\n                            width: 76,\n                            height: 76,\n                            className: \"skill\"\n                        }, skill, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative\",\n        children: [\n            renderBackgroundPattern(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: SKILL_STYLES.SECTION,\n                id: _constants__WEBPACK_IMPORTED_MODULE_1__.MENULINKS[2].ref,\n                ref: targetSection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col skills-wrapper\",\n                    children: [\n                        renderSectionTitle(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10\",\n                            children: renderSkillColumn(\"FRONTEND DEVELOPMENT\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.frontend)\n                        }, void 0, false, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap mt-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-6 mb-6\",\n                                    children: renderSkillColumn(\"User Interface, User Experience Design\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.userInterface)\n                                }, void 0, false, {\n                                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: renderSkillColumn(\"Other Skills\", _constants__WEBPACK_IMPORTED_MODULE_1__.SKILLS.other)\n                                }, void 0, false, {\n                                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/boh/Seagate Expansion Drive/FCLIENTS/ZTM/fullstack/folio26/folio/components/home/skills.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this);\n};\n_s(SkillsSection, \"J1WPc/nVmMBeUpttznvdFPNe/0c=\");\n_c = SkillsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsSection);\nvar _c;\n$RefreshReg$(_c, \"SkillsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lDQUN2RDtzQ0FDTiw4REFBQ3dDLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzhDQUNuQyw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7OENBQ3ZCVyxpQkFBaUIsQ0FDaEIsd0NBQXdDLEVBQ3hDcEQsNERBQW9CLENBQ3JCOzs7Ozt5Q0FDRzs4Q0FDTiw4REFBQ3dDLEtBQUc7OENBQUVZLGlCQUFpQixDQUFDLGNBQWMsRUFBRXBELG9EQUFZLENBQUM7Ozs7O3lDQUFPOzs7Ozs7aUNBQ3hEOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFDRSxDQUNWO0FBQ0osQ0FBQztHQXBIS1csYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBc0huQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9za2lsbHMudHN4PzIwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUVOVUxJTktTLCBTS0lMTFMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCwgTGluZWFyIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcblxuY29uc3QgU0tJTExfU1RZTEVTID0ge1xuICBTRUNUSU9OOlxuICAgIFwidy1mdWxsIHJlbGF0aXZlIHNlbGVjdC1ub25lIG1iLTI0IHNlY3Rpb24tY29udGFpbmVyIHB5LTEyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIixcbiAgU0tJTExfVElUTEU6IFwic2VjdGlvbi10aXRsZS1zbSBtYi00IHNlcVwiLFxufTtcblxuY29uc3QgU2tpbGxzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0U2VjdGlvbjogTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt3aWxsQ2hhbmdlLCBzZXR3aWxsQ2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpbml0UmV2ZWFsQW5pbWF0aW9uID0gKFxuICAgIHRhcmdldFNlY3Rpb246IE11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+XG4gICk6IFNjcm9sbFRyaWdnZXIgPT4ge1xuICAgIGNvbnN0IHJldmVhbFRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOiB7IGVhc2U6IExpbmVhci5lYXNlTm9uZSB9IH0pO1xuICAgIHJldmVhbFRsLmZyb20oXG4gICAgICB0YXJnZXRTZWN0aW9uLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXFcIiksXG4gICAgICB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuNSB9LFxuICAgICAgXCI8XCJcbiAgICApO1xuXG4gICAgcmV0dXJuIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHRhcmdldFNlY3Rpb24uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy13cmFwcGVyXCIpLFxuICAgICAgc3RhcnQ6IFwiMTAwcHggYm90dG9tXCIsXG4gICAgICBlbmQ6IGBjZW50ZXIgY2VudGVyYCxcbiAgICAgIGFuaW1hdGlvbjogcmV2ZWFsVGwsXG4gICAgICBzY3J1YjogMCxcbiAgICAgIG9uVG9nZ2xlOiAoc2VsZikgPT4gc2V0d2lsbENoYW5nZShzZWxmLmlzQWN0aXZlKSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJldmVhbEFuaW1hdGlvblJlZiA9IGluaXRSZXZlYWxBbmltYXRpb24odGFyZ2V0U2VjdGlvbik7XG5cbiAgICByZXR1cm4gcmV2ZWFsQW5pbWF0aW9uUmVmLmtpbGw7XG4gIH0sIFt0YXJnZXRTZWN0aW9uXSk7XG5cbiAgY29uc3QgcmVuZGVyU2VjdGlvblRpdGxlID0gKCk6IFJlYWN0LlJlYWN0Tm9kZSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLXNtIHNlcVwiPlNLSUxMUzwvcD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgc2VxIG10LTJcIj5NeSBTa2lsbHM8L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOm1heC13LTJ4bCB3LWZ1bGwgc2VxIG10LTJcIj5cbiAgICAgIEkgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiBkZXNpZ24gYW5kIGRldmVsb3BtZW50LiBcbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgSSBsaWtlIHRvIGNyYWZ0IGFuIGFlc3RoZXRpYyB1c2VyIGludGVyZmFjZSBhbmQgVVggdXNpbmcgbW9kZXJuIGJlc3QgcHJhY3RpY2VzLntcIiBcIn1cbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyQmFja2dyb3VuZFBhdHRlcm4gPSAoKTogUmVhY3QuUmVhY3ROb2RlID0+IChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIC1ib3R0b20tMS8zIHctMS81IG1heC13LXhzIG1kOmZsZXggaGlkZGVuIGp1c3RpZnktZW5kXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9wYXR0ZXJuLXIuc3ZnXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgaGVpZ2h0PXs3MDB9XG4gICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICBhbHQ9XCJwYXR0ZXJuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0zLjUgdy0xLzEyIG1heC13LXhzIG1kOmJsb2NrIGhpZGRlblwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvcGF0dGVybi1sLnN2Z1wiXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIGhlaWdodD17MzM1fVxuICAgICAgICAgIHdpZHRoPXsxNDB9XG4gICAgICAgICAgYWx0PVwicGF0dGVyblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCByZW5kZXJTa2lsbENvbHVtbiA9IChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHNraWxsczogc3RyaW5nW11cbiAgKTogUmVhY3QuUmVhY3ROb2RlID0+IChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT17U0tJTExfU1RZTEVTLlNLSUxMX1RJVExFfT57dGl0bGV9PC9oMz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgc2VxICR7XG4gICAgICAgICAgd2lsbENoYW5nZSA/IFwid2lsbC1jaGFuZ2Utb3BhY2l0eVwiIDogXCJcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAge3NraWxscy5tYXAoKHNraWxsKSA9PiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBrZXk9e3NraWxsfVxuICAgICAgICAgICAgc3JjPXtgL3NraWxscy8ke3NraWxsfS5zdmdgfVxuICAgICAgICAgICAgYWx0PXtza2lsbH1cbiAgICAgICAgICAgIHdpZHRoPXs3Nn1cbiAgICAgICAgICAgIGhlaWdodD17NzZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICB7cmVuZGVyQmFja2dyb3VuZFBhdHRlcm4oKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtTS0lMTF9TVFlMRVMuU0VDVElPTn1cbiAgICAgICAgaWQ9e01FTlVMSU5LU1syXS5yZWZ9XG4gICAgICAgIHJlZj17dGFyZ2V0U2VjdGlvbn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNraWxscy13cmFwcGVyXCI+XG4gICAgICAgICAge3JlbmRlclNlY3Rpb25UaXRsZSgpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgIHtyZW5kZXJTa2lsbENvbHVtbihcIkZST05URU5EIERFVkVMT1BNRU5UXCIsIFNLSUxMUy5mcm9udGVuZCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtdC0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci02IG1iLTZcIj5cbiAgICAgICAgICAgICAge3JlbmRlclNraWxsQ29sdW1uKFxuICAgICAgICAgICAgICAgIFwiVXNlciBJbnRlcmZhY2UsIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25cIixcbiAgICAgICAgICAgICAgICBTS0lMTFMudXNlckludGVyZmFjZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntyZW5kZXJTa2lsbENvbHVtbihcIk90aGVyIFNraWxsc1wiLCBTS0lMTFMub3RoZXIpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxsc1NlY3Rpb247XG4iXSwibmFtZXMiOlsiTUVOVUxJTktTIiwiU0tJTExTIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImdzYXAiLCJMaW5lYXIiLCJTY3JvbGxUcmlnZ2VyIiwiU0tJTExfU1RZTEVTIiwiU0VDVElPTiIsIlNLSUxMX1RJVExFIiwiU2tpbGxzU2VjdGlvbiIsInRhcmdldFNlY3Rpb24iLCJ3aWxsQ2hhbmdlIiwic2V0d2lsbENoYW5nZSIsImluaXRSZXZlYWxBbmltYXRpb24iLCJyZXZlYWxUbCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJlYXNlIiwiZWFzZU5vbmUiLCJmcm9tIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiY3JlYXRlIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsImVuZCIsImFuaW1hdGlvbiIsInNjcnViIiwib25Ub2dnbGUiLCJzZWxmIiwiaXNBY3RpdmUiLCJyZXZlYWxBbmltYXRpb25SZWYiLCJraWxsIiwicmVuZGVyU2VjdGlvblRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwiaDIiLCJiciIsInJlbmRlckJhY2tncm91bmRQYXR0ZXJuIiwic3JjIiwibG9hZGluZyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwicmVuZGVyU2tpbGxDb2x1bW4iLCJ0aXRsZSIsInNraWxscyIsImgzIiwibWFwIiwic2tpbGwiLCJzZWN0aW9uIiwiaWQiLCJyZWYiLCJmcm9udGVuZCIsInVzZXJJbnRlcmZhY2UiLCJvdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/skills.tsx\n"));

/***/ })

});