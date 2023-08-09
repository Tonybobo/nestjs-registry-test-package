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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("./test.service");
const test_dto_1 = require("./test.dto");
let TestController = exports.TestController = class TestController {
    service;
    getTest(id) {
        return this.service.getTest(id);
    }
    createTest(body) {
        return this.service.createTest(body);
    }
};
__decorate([
    (0, common_1.Inject)(test_service_1.TestService),
    __metadata("design:type", test_service_1.TestService)
], TestController.prototype, "service", void 0);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getTest", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [test_dto_1.CreateTestDto]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "createTest", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)('test')
], TestController);
//# sourceMappingURL=test.controller.js.map