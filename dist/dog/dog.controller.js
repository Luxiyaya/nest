"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const create_dog_dto_1 = require("./create.dog.dto");
const dog_service_1 = require("./dog.service");
const app_service_1 = require("./../app.service");
const ForbiddenException_1 = require("./../common/exception/ForbiddenException");
const http_exception_filter_1 = require("../common/exception/http-exception.filter");
let DogController = exports.DogController = class DogController {
    constructor(dogService, appService) {
        this.dogService = dogService;
        this.appService = appService;
    }
    findAll(request) {
        console.log(request);
        return 'This action returns all cats';
    }
    findA() {
        return "这个动作返回了一只狗！";
    }
    findB() {
        return "通配符匹配";
    }
    findC() {
        return "POST请求";
    }
    findD(params) {
        console.log(params.id);
        return "query请求参数";
    }
    async findE() {
        return [];
    }
    findF() {
        return (0, rxjs_1.of)([]);
    }
    async findG(createDogDto) {
        console.log(createDogDto);
        return 'This action adds a new dog';
    }
    create(res) {
        res.status(common_1.HttpStatus.OK);
        return [];
    }
    findH(res) {
        res.status(common_1.HttpStatus.OK).json([]);
    }
    async createddd(createDogDto) {
        this.dogService.create(createDogDto);
    }
    async findeF() {
        return this.dogService.findAll();
    }
    findY() {
        return this.appService.getHello();
    }
    setUser(req) {
        console.log(req.query);
        const { query } = req;
        const { user } = query;
        this.appService.setUser(user);
        return 'success成功';
    }
    getUser() {
        return this.appService.getUser();
    }
    getException() {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.AMBIGUOUS,
            error: 'This is a custom message',
        }, common_1.HttpStatus.FORBIDDEN);
    }
    getCustom() {
        throw new ForbiddenException_1.ForbiddenException();
    }
    getFilter() {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.AMBIGUOUS,
            error: 'This is a custom message',
        }, common_1.HttpStatus.FORBIDDEN);
    }
    getOtherException() {
        console.log(333);
        throw new common_1.HttpException({
            status: common_1.HttpStatus.AMBIGUOUS,
            error: 'This is a custom message',
        }, common_1.HttpStatus.FORBIDDEN);
    }
    async getPipe(id) {
        return this.dogService.getHello();
    }
    async getPipes(sdfsdfdsf) {
        console.log(sdfsdfdsf);
        throw new common_1.HttpException({
            status: common_1.HttpStatus.AMBIGUOUS,
            error: 'This is a custom message',
        }, common_1.HttpStatus.FORBIDDEN);
        return this.dogService.getHello();
    }
    getPipesQuery(id) {
        console.log(id);
        return this.dogService.getHello();
    }
    async findOne(uuid) {
        console.log('...', uuid);
        return this.dogService.getHello();
    }
};
__decorate([
    (0, common_1.Get)('/breed'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogController.prototype, "findA", null);
__decorate([
    (0, common_1.Get)('abc*f'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogController.prototype, "findB", null);
__decorate([
    (0, common_1.Get)('/a'),
    (0, common_1.Redirect)('https://nestjs.com', 301),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogController.prototype, "findC", null);
__decorate([
    (0, common_1.Get)('/query/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DogController.prototype, "findD", null);
__decorate([
    (0, common_1.Get)('async'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findE", null);
__decorate([
    (0, common_1.Get)('rx'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], DogController.prototype, "findF", null);
__decorate([
    (0, common_1.Post)('body1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_dto_1.CreateDogDto]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findG", null);
__decorate([
    (0, common_1.Post)('spec'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('cc'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "findH", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_dto_1.CreateDogDto]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "createddd", null);
__decorate([
    (0, common_1.Post)('findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findeF", null);
__decorate([
    (0, common_1.Get)('/app'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogController.prototype, "findY", null);
__decorate([
    (0, common_1.Get)('/set'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "setUser", null);
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/yichang'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getException", null);
__decorate([
    (0, common_1.Get)('/custom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getCustom", null);
__decorate([
    (0, common_1.Get)('/filter'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getFilter", null);
__decorate([
    (0, common_1.Get)('/otheryc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getOtherException", null);
__decorate([
    (0, common_1.Get)('/pipe/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getPipe", null);
__decorate([
    (0, common_1.Get)('/pips/:ids'),
    __param(0, (0, common_1.Param)('ids', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getPipes", null);
__decorate([
    (0, common_1.Get)('/pipsl/q'),
    __param(0, (0, common_1.Query)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getPipesQuery", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findOne", null);
exports.DogController = DogController = __decorate([
    (0, common_1.Controller)('dog'),
    __metadata("design:paramtypes", [dog_service_1.DogService, app_service_1.AppService])
], DogController);
//# sourceMappingURL=dog.controller.js.map