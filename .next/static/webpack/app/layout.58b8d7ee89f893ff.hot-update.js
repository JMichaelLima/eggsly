"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9e8b810f0d11\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzczYzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5ZThiODEwZjBkMTFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst navLinks = [\n    {\n        linkText: \"Home\",\n        linkUrl: \"/\"\n    },\n    {\n        linkText: \"About\",\n        linkUrl: \"/about\"\n    },\n    {\n        linkText: \"Contact\",\n        linkUrl: \"/contact\"\n    }\n];\nconst Nav = ()=>{\n    const itemVariants = {\n        hidden: {\n            scale: 0,\n            opacity: 0\n        },\n        visible: (i)=>({\n                scale: 1,\n                opacity: 0.8,\n                transition: {\n                    delay: i * 0.2\n                }\n            })\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"container mx-auto p-4 bg-sky-900 bg-opacity-10 max-w-max rounded-xl shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {\n                        className: \"inline-block m-2\",\n                        variants: itemVariants,\n                        initial: \"hidden\",\n                        animate: \"visible\",\n                        custom: index,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: link.linkUrl,\n                            className: \"text-sky-50 cursor-pointer flex justify-center items-center px-1\",\n                            children: link.linkText\n                        }, void 0, false, {\n                            fileName: \"/Users/jmlima/Desktop/Code/Web/eggsly/components/nav.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/jmlima/Desktop/Code/Web/eggsly/components/nav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jmlima/Desktop/Code/Web/eggsly/components/nav.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jmlima/Desktop/Code/Web/eggsly/components/nav.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jmlima/Desktop/Code/Web/eggsly/components/nav.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN1QztBQUNiO0FBQ0c7QUFFN0IsTUFBTUcsV0FBVztJQUNmO1FBQUVDLFVBQVU7UUFBUUMsU0FBUztJQUFJO0lBQ2pDO1FBQUVELFVBQVU7UUFBU0MsU0FBUztJQUFTO0lBQ3ZDO1FBQUVELFVBQVU7UUFBV0MsU0FBUztJQUFXO0NBQzVDO0FBRUQsTUFBTUMsTUFBZ0I7SUFDcEIsTUFBTUMsZUFBZTtRQUNuQkMsUUFBUTtZQUFFQyxPQUFPO1lBQUdDLFNBQVM7UUFBRTtRQUMvQkMsU0FBUyxDQUFDQyxJQUFlO2dCQUN2QkgsT0FBTztnQkFDUEMsU0FBUztnQkFDVEcsWUFBWTtvQkFDVkMsT0FBT0YsSUFBSTtnQkFDYjtZQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1osaURBQU1BLENBQUNlLEdBQUc7UUFBQ0MsV0FBVTtrQkFDcEIsNEVBQUNoQixpREFBTUEsQ0FBQ2lCLEdBQUc7WUFBQ0QsV0FBVTtzQkFDcEIsNEVBQUNFOzBCQUNFZixTQUFTZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ3JCLGlEQUFNQSxDQUFDc0IsRUFBRTt3QkFFUk4sV0FBVTt3QkFDVk8sVUFBVWhCO3dCQUNWaUIsU0FBUTt3QkFDUkMsU0FBUTt3QkFDUkMsUUFBUUw7a0NBRVIsNEVBQUNuQixrREFBSUE7NEJBQ0h5QixNQUFNUCxLQUFLZixPQUFPOzRCQUNsQlcsV0FBVTtzQ0FFVEksS0FBS2hCLFFBQVE7Ozs7Ozt1QkFYWGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbkI7S0FyQ01mO0FBdUNOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LnRzeD9kNGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbGlua1RleHQ6IFwiSG9tZVwiLCBsaW5rVXJsOiBcIi9cIiB9LFxuICB7IGxpbmtUZXh0OiBcIkFib3V0XCIsIGxpbmtVcmw6IFwiL2Fib3V0XCIgfSxcbiAgeyBsaW5rVGV4dDogXCJDb250YWN0XCIsIGxpbmtVcmw6IFwiL2NvbnRhY3RcIiB9LFxuXTtcblxuY29uc3QgTmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbVZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBzY2FsZTogMCwgb3BhY2l0eTogMCB9LFxuICAgIHZpc2libGU6IChpOiBudW1iZXIpID0+ICh7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZGVsYXk6IGkgKiAwLjIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00IGJnLXNreS05MDAgYmctb3BhY2l0eS0xMCBtYXgtdy1tYXggcm91bmRlZC14bCBzaGFkb3dcIj5cbiAgICAgIDxtb3Rpb24ubmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtLTJcIlxuICAgICAgICAgICAgICB2YXJpYW50cz17aXRlbVZhcmlhbnRzfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICAgICAgICBjdXN0b209e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNreS01MCBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaW5rLmxpbmtUZXh0fVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbW90aW9uLm5hdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJMaW5rIiwibmF2TGlua3MiLCJsaW5rVGV4dCIsImxpbmtVcmwiLCJOYXYiLCJpdGVtVmFyaWFudHMiLCJoaWRkZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwiaSIsInRyYW5zaXRpb24iLCJkZWxheSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibWFwIiwibGluayIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiY3VzdG9tIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/nav.tsx\n"));

/***/ })

});