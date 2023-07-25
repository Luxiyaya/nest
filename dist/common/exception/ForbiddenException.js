"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const common_1 = require("@nestjs/common");
class ForbiddenException extends common_1.HttpException {
    constructor() {
        console.log('1...自定义异常类');
        super('自定义异常', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=ForbiddenException.js.map