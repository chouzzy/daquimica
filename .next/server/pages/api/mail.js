"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mail = __webpack_require__(139);
mail.setApiKey(process.env.SENDGRID_API_KEY);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    const body = JSON.parse(req.body);
    const message = `
   Nome/Empresa:${body.Empresa}\r\n
   Assunto: ${body.Assunto}\r\n
   Messagem: ${body.Mensagem}
   `;
    const data = {
        to: "mathfernando@hotmail.com",
        from: "matheus@awer.co",
        subject: `${body.Assunto}`,
        text: message,
        html: message.replace(/\r\n/g, "<br>")
    };
    mail.send(data);
    res.status(200).json({
        status: "Ok"
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(602));
module.exports = __webpack_exports__;

})();