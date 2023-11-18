"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aws-amplify";
exports.ids = ["vendor-chunks/aws-amplify"];
exports.modules = {

/***/ "(rsc)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/aws-amplify/dist/esm/initSingleton.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultAmplify: () => (/* binding */ DefaultAmplify)\n/* harmony export */ });\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ \"(rsc)/./node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs\");\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/core */ \"(rsc)/./node_modules/@aws-amplify/core/dist/esm/storage/CookieStorage.mjs\");\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/core */ \"(rsc)/./node_modules/@aws-amplify/core/dist/esm/storage/index.mjs\");\n/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core/internals/utils */ \"(rsc)/./node_modules/@aws-amplify/core/dist/esm/parseAWSExports.mjs\");\n/* harmony import */ var _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth/cognito */ \"(rsc)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/index.mjs\");\n/* harmony import */ var _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/auth/cognito */ \"(rsc)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs\");\n\n\n\n// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nconst DefaultAmplify = {\n    configure (resourceConfig, libraryOptions) {\n        let resolvedResourceConfig;\n        if (Object.keys(resourceConfig).some((key)=>key.startsWith(\"aws_\"))) {\n            resolvedResourceConfig = (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__.parseAWSExports)(resourceConfig);\n        } else {\n            resolvedResourceConfig = resourceConfig;\n        }\n        // If no Auth config is provided, no special handling will be required, configure as is.\n        // Otherwise, we can assume an Auth config is provided from here on.\n        if (!resolvedResourceConfig.Auth) {\n            return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure(resolvedResourceConfig, libraryOptions);\n        }\n        // If Auth options are provided, always just configure as is.\n        // Otherwise, we can assume no Auth libraryOptions were provided from here on.\n        if (libraryOptions?.Auth) {\n            return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure(resolvedResourceConfig, libraryOptions);\n        }\n        // If no Auth libraryOptions were previously configured, then always add default providers.\n        if (!_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.libraryOptions.Auth) {\n            _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_2__.cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);\n            _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_2__.cognitoUserPoolsTokenProvider.setKeyValueStorage(// TODO: allow configure with a public interface\n            libraryOptions?.ssr ? new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__.CookieStorage({\n                sameSite: \"lax\"\n            }) : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.defaultStorage);\n            return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure(resolvedResourceConfig, {\n                ...libraryOptions,\n                Auth: {\n                    tokenProvider: _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_2__.cognitoUserPoolsTokenProvider,\n                    credentialsProvider: _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__.cognitoCredentialsProvider\n                }\n            });\n        }\n        // At this point, Auth libraryOptions would have been previously configured and no overriding\n        // Auth options were given, so we should preserve the currently configured Auth libraryOptions.\n        if (libraryOptions) {\n            // If ssr is provided through libraryOptions, we should respect the intentional reconfiguration.\n            if (libraryOptions.ssr !== undefined) {\n                _aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_2__.cognitoUserPoolsTokenProvider.setKeyValueStorage(// TODO: allow configure with a public interface\n                libraryOptions.ssr ? new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__.CookieStorage({\n                    sameSite: \"lax\"\n                }) : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.defaultStorage);\n            }\n            return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure(resolvedResourceConfig, {\n                Auth: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.libraryOptions.Auth,\n                ...libraryOptions\n            });\n        }\n        // Finally, if there were no libraryOptions given at all, we should simply not touch the currently\n        // configured libraryOptions.\n        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure(resolvedResourceConfig);\n    },\n    getConfig () {\n        return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Amplify.getConfig();\n    }\n};\n //# sourceMappingURL=initSingleton.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYXdzLWFtcGxpZnkvZGlzdC9lc20vaW5pdFNpbmdsZXRvbi5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRTtBQUNQO0FBQ2tDO0FBRXRHLHFFQUFxRTtBQUNyRSxzQ0FBc0M7QUFDdEMsTUFBTU0saUJBQWlCO0lBQ25CQyxXQUFVQyxjQUFjLEVBQUVDLGNBQWM7UUFDcEMsSUFBSUM7UUFDSixJQUFJQyxPQUFPQyxJQUFJLENBQUNKLGdCQUFnQkssSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxVQUFVLENBQUMsVUFBVTtZQUNqRUwseUJBQXlCUCxrRkFBZUEsQ0FBQ0s7UUFDN0MsT0FDSztZQUNERSx5QkFBeUJGO1FBQzdCO1FBQ0Esd0ZBQXdGO1FBQ3hGLG9FQUFvRTtRQUNwRSxJQUFJLENBQUNFLHVCQUF1Qk0sSUFBSSxFQUFFO1lBQzlCLE9BQU9oQixzREFBT0EsQ0FBQ08sU0FBUyxDQUFDRyx3QkFBd0JEO1FBQ3JEO1FBQ0EsNkRBQTZEO1FBQzdELDhFQUE4RTtRQUM5RSxJQUFJQSxnQkFBZ0JPLE1BQU07WUFDdEIsT0FBT2hCLHNEQUFPQSxDQUFDTyxTQUFTLENBQUNHLHdCQUF3QkQ7UUFDckQ7UUFDQSwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDVCxzREFBT0EsQ0FBQ1MsY0FBYyxDQUFDTyxJQUFJLEVBQUU7WUFDOUJaLG9GQUE2QkEsQ0FBQ2EsYUFBYSxDQUFDUCx1QkFBdUJNLElBQUk7WUFDdkVaLG9GQUE2QkEsQ0FBQ2Msa0JBQWtCLENBQ2hELGdEQUFnRDtZQUNoRFQsZ0JBQWdCVSxNQUNWLElBQUlsQiw0REFBYUEsQ0FBQztnQkFBRW1CLFVBQVU7WUFBTSxLQUNwQ2xCLDZEQUFjQTtZQUNwQixPQUFPRixzREFBT0EsQ0FBQ08sU0FBUyxDQUFDRyx3QkFBd0I7Z0JBQzdDLEdBQUdELGNBQWM7Z0JBQ2pCTyxNQUFNO29CQUNGSyxlQUFlakIsb0ZBQTZCQTtvQkFDNUNrQixxQkFBcUJqQixpRkFBMEJBO2dCQUNuRDtZQUNKO1FBQ0o7UUFDQSw2RkFBNkY7UUFDN0YsK0ZBQStGO1FBQy9GLElBQUlJLGdCQUFnQjtZQUNoQixnR0FBZ0c7WUFDaEcsSUFBSUEsZUFBZVUsR0FBRyxLQUFLSSxXQUFXO2dCQUNsQ25CLG9GQUE2QkEsQ0FBQ2Msa0JBQWtCLENBQ2hELGdEQUFnRDtnQkFDaERULGVBQWVVLEdBQUcsR0FDWixJQUFJbEIsNERBQWFBLENBQUM7b0JBQUVtQixVQUFVO2dCQUFNLEtBQ3BDbEIsNkRBQWNBO1lBQ3hCO1lBQ0EsT0FBT0Ysc0RBQU9BLENBQUNPLFNBQVMsQ0FBQ0csd0JBQXdCO2dCQUM3Q00sTUFBTWhCLHNEQUFPQSxDQUFDUyxjQUFjLENBQUNPLElBQUk7Z0JBQ2pDLEdBQUdQLGNBQWM7WUFDckI7UUFDSjtRQUNBLGtHQUFrRztRQUNsRyw2QkFBNkI7UUFDN0JULHNEQUFPQSxDQUFDTyxTQUFTLENBQUNHO0lBQ3RCO0lBQ0FjO1FBQ0ksT0FBT3hCLHNEQUFPQSxDQUFDd0IsU0FBUztJQUM1QjtBQUNKO0FBRTBCLENBQzFCLDBDQUEwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VnZ3NseS8uL25vZGVfbW9kdWxlcy9hd3MtYW1wbGlmeS9kaXN0L2VzbS9pbml0U2luZ2xldG9uLm1qcz80MzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFtcGxpZnksIENvb2tpZVN0b3JhZ2UsIGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgcGFyc2VBV1NFeHBvcnRzIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUvaW50ZXJuYWxzL3V0aWxzJztcbmltcG9ydCB7IGNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyLCBjb2duaXRvQ3JlZGVudGlhbHNQcm92aWRlciB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoL2NvZ25pdG8nO1xuXG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5jb25zdCBEZWZhdWx0QW1wbGlmeSA9IHtcbiAgICBjb25maWd1cmUocmVzb3VyY2VDb25maWcsIGxpYnJhcnlPcHRpb25zKSB7XG4gICAgICAgIGxldCByZXNvbHZlZFJlc291cmNlQ29uZmlnO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzb3VyY2VDb25maWcpLnNvbWUoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdhd3NfJykpKSB7XG4gICAgICAgICAgICByZXNvbHZlZFJlc291cmNlQ29uZmlnID0gcGFyc2VBV1NFeHBvcnRzKHJlc291cmNlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVkUmVzb3VyY2VDb25maWcgPSByZXNvdXJjZUNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBBdXRoIGNvbmZpZyBpcyBwcm92aWRlZCwgbm8gc3BlY2lhbCBoYW5kbGluZyB3aWxsIGJlIHJlcXVpcmVkLCBjb25maWd1cmUgYXMgaXMuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIGFzc3VtZSBhbiBBdXRoIGNvbmZpZyBpcyBwcm92aWRlZCBmcm9tIGhlcmUgb24uXG4gICAgICAgIGlmICghcmVzb2x2ZWRSZXNvdXJjZUNvbmZpZy5BdXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gQW1wbGlmeS5jb25maWd1cmUocmVzb2x2ZWRSZXNvdXJjZUNvbmZpZywgbGlicmFyeU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIEF1dGggb3B0aW9ucyBhcmUgcHJvdmlkZWQsIGFsd2F5cyBqdXN0IGNvbmZpZ3VyZSBhcyBpcy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gYXNzdW1lIG5vIEF1dGggbGlicmFyeU9wdGlvbnMgd2VyZSBwcm92aWRlZCBmcm9tIGhlcmUgb24uXG4gICAgICAgIGlmIChsaWJyYXJ5T3B0aW9ucz8uQXV0aCkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGxpZnkuY29uZmlndXJlKHJlc29sdmVkUmVzb3VyY2VDb25maWcsIGxpYnJhcnlPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBBdXRoIGxpYnJhcnlPcHRpb25zIHdlcmUgcHJldmlvdXNseSBjb25maWd1cmVkLCB0aGVuIGFsd2F5cyBhZGQgZGVmYXVsdCBwcm92aWRlcnMuXG4gICAgICAgIGlmICghQW1wbGlmeS5saWJyYXJ5T3B0aW9ucy5BdXRoKSB7XG4gICAgICAgICAgICBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRBdXRoQ29uZmlnKHJlc29sdmVkUmVzb3VyY2VDb25maWcuQXV0aCk7XG4gICAgICAgICAgICBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRLZXlWYWx1ZVN0b3JhZ2UoXG4gICAgICAgICAgICAvLyBUT0RPOiBhbGxvdyBjb25maWd1cmUgd2l0aCBhIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAgICAgICAgIGxpYnJhcnlPcHRpb25zPy5zc3JcbiAgICAgICAgICAgICAgICA/IG5ldyBDb29raWVTdG9yYWdlKHsgc2FtZVNpdGU6ICdsYXgnIH0pXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0U3RvcmFnZSk7XG4gICAgICAgICAgICByZXR1cm4gQW1wbGlmeS5jb25maWd1cmUocmVzb2x2ZWRSZXNvdXJjZUNvbmZpZywge1xuICAgICAgICAgICAgICAgIC4uLmxpYnJhcnlPcHRpb25zLFxuICAgICAgICAgICAgICAgIEF1dGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5Qcm92aWRlcjogY29nbml0b1VzZXJQb29sc1Rva2VuUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzUHJvdmlkZXI6IGNvZ25pdG9DcmVkZW50aWFsc1Byb3ZpZGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBBdXRoIGxpYnJhcnlPcHRpb25zIHdvdWxkIGhhdmUgYmVlbiBwcmV2aW91c2x5IGNvbmZpZ3VyZWQgYW5kIG5vIG92ZXJyaWRpbmdcbiAgICAgICAgLy8gQXV0aCBvcHRpb25zIHdlcmUgZ2l2ZW4sIHNvIHdlIHNob3VsZCBwcmVzZXJ2ZSB0aGUgY3VycmVudGx5IGNvbmZpZ3VyZWQgQXV0aCBsaWJyYXJ5T3B0aW9ucy5cbiAgICAgICAgaWYgKGxpYnJhcnlPcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBJZiBzc3IgaXMgcHJvdmlkZWQgdGhyb3VnaCBsaWJyYXJ5T3B0aW9ucywgd2Ugc2hvdWxkIHJlc3BlY3QgdGhlIGludGVudGlvbmFsIHJlY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgIGlmIChsaWJyYXJ5T3B0aW9ucy5zc3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyLnNldEtleVZhbHVlU3RvcmFnZShcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhbGxvdyBjb25maWd1cmUgd2l0aCBhIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAgICAgICAgICAgICBsaWJyYXJ5T3B0aW9ucy5zc3JcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgQ29va2llU3RvcmFnZSh7IHNhbWVTaXRlOiAnbGF4JyB9KVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRTdG9yYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBBbXBsaWZ5LmNvbmZpZ3VyZShyZXNvbHZlZFJlc291cmNlQ29uZmlnLCB7XG4gICAgICAgICAgICAgICAgQXV0aDogQW1wbGlmeS5saWJyYXJ5T3B0aW9ucy5BdXRoLFxuICAgICAgICAgICAgICAgIC4uLmxpYnJhcnlPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluYWxseSwgaWYgdGhlcmUgd2VyZSBubyBsaWJyYXJ5T3B0aW9ucyBnaXZlbiBhdCBhbGwsIHdlIHNob3VsZCBzaW1wbHkgbm90IHRvdWNoIHRoZSBjdXJyZW50bHlcbiAgICAgICAgLy8gY29uZmlndXJlZCBsaWJyYXJ5T3B0aW9ucy5cbiAgICAgICAgQW1wbGlmeS5jb25maWd1cmUocmVzb2x2ZWRSZXNvdXJjZUNvbmZpZyk7XG4gICAgfSxcbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiBBbXBsaWZ5LmdldENvbmZpZygpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBEZWZhdWx0QW1wbGlmeSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pdFNpbmdsZXRvbi5tanMubWFwXG4iXSwibmFtZXMiOlsiQW1wbGlmeSIsIkNvb2tpZVN0b3JhZ2UiLCJkZWZhdWx0U3RvcmFnZSIsInBhcnNlQVdTRXhwb3J0cyIsImNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyIiwiY29nbml0b0NyZWRlbnRpYWxzUHJvdmlkZXIiLCJEZWZhdWx0QW1wbGlmeSIsImNvbmZpZ3VyZSIsInJlc291cmNlQ29uZmlnIiwibGlicmFyeU9wdGlvbnMiLCJyZXNvbHZlZFJlc291cmNlQ29uZmlnIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJrZXkiLCJzdGFydHNXaXRoIiwiQXV0aCIsInNldEF1dGhDb25maWciLCJzZXRLZXlWYWx1ZVN0b3JhZ2UiLCJzc3IiLCJzYW1lU2l0ZSIsInRva2VuUHJvdmlkZXIiLCJjcmVkZW50aWFsc1Byb3ZpZGVyIiwidW5kZWZpbmVkIiwiZ2V0Q29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\n");

/***/ })

};
;