"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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
        datBlue: "#516BA5",
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

// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(805);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




// import Fonts from './Fonts'
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.Global, {
                    styles: `
               /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

               /* latin */
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('fonts/AndesBook.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url('fonts/AndesMedium.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'Andes';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url('fonts/AndesBold.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               `
                }),
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
var __webpack_exports__ = (__webpack_exec__(927));
module.exports = __webpack_exports__;

})();