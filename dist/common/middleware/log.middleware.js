"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(req, res, next) {
    console.log('log  。。。 request');
    next();
    console.log('log ... 洋葱模型处理');
}
exports.log = log;
//# sourceMappingURL=log.middleware.js.map