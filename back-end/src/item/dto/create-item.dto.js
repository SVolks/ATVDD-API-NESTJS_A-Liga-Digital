"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateItemDto = /** @class */ (function () {
    function CreateItemDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Bananas' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateItemDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ example: 'Cavendish bananas', description: 'Optional description of the item' }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateItemDto.prototype, "description");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 5, description: 'Needed quantity' }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1)
    ], CreateItemDto.prototype, "quantity");
    return CreateItemDto;
}());
exports.CreateItemDto = CreateItemDto;
