"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ItemController = void 0;
var common_1 = require("@nestjs/common");
var ItemController = /** @class */ (function () {
    function ItemController(itemService) {
        this.itemService = itemService;
    }
    ItemController.prototype.create = function (createItemDto) {
        return this.itemService.create(createItemDto);
    };
    ItemController.prototype.findAll = function () {
        return this.itemService.findAll();
    };
    ItemController.prototype.findOne = function (id) {
        return this.itemService.findOne(id);
    };
    ItemController.prototype.update = function (id, updateItemDto) {
        return this.itemService.update(id, updateItemDto);
    };
    ItemController.prototype.remove = function (id) {
        return this.itemService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ItemController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ItemController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ItemController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemController.prototype, "remove");
    ItemController = __decorate([
        (0, common_1.Controller)('item')
    ], ItemController);
    return ItemController;
}());
exports.ItemController = ItemController;
