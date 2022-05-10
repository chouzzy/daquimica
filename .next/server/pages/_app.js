"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,50];
exports.modules = {

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./styles/theme.ts

const theme = (0,react_.extendTheme)({
    fonts: {
        heading: "Andes",
        body: "Andes "
    },
    colors: {
        datBlue: "#55808c",
        datGreen: "#a5d320",
        datGray: "#d1d3d4"
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "white",
                color: "gray.900"
            },
            // styles for the `a`
            a: {
                // color: 'teal.500',
                _hover: {
                    textDecoration: "none"
                }
            }
        }
    }
});

// EXTERNAL MODULE: ./src/pages/Fonts.tsx
var Fonts = __webpack_require__(216);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Fonts["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [216], () => (__webpack_exec__(927)));
module.exports = __webpack_exports__;

})();