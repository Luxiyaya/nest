"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cat_controller_1 = require("./cat/cat.controller");
const dog_controller_1 = require("./dog/dog.controller");
const create_cat_dto_controller_1 = require("./create-cat-dto/create-cat-dto.controller");
const dog_service_1 = require("./dog/dog.service");
const cat_module_1 = require("./cat/cat.module");
const dog_module_1 = require("./dog/dog.module");
const log_middleware_1 = require("./common/middleware/log.middleware");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(log_middleware_1.log, logger_middleware_1.LoggerMiddleware)
            .forRoutes(dog_controller_1.DogController, cat_controller_1.CatController);
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cat_module_1.CatModule, dog_module_1.DogModule],
        controllers: [app_controller_1.AppController, cat_controller_1.CatController, dog_controller_1.DogController, create_cat_dto_controller_1.CreateCatDtoController],
        providers: [app_service_1.AppService, dog_service_1.DogService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map