"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const globallog_middleware_1 = require("./common/middleware/globallog.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    app.use(globallog_middleware_1.G_LOG);
    await app.listen(9000);
}
bootstrap();
//# sourceMappingURL=main.js.map