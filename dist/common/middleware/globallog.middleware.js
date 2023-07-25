"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G_LOG = void 0;
function G_LOG(req, res, next) {
    console.log('global中间件。。req');
    next();
    console.log('global中间件。。洋葱处理');
}
exports.G_LOG = G_LOG;
//# sourceMappingURL=globallog.middleware.js.map