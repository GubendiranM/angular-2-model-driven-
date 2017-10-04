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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(router, route) {
        this.router = router;
        this.route = route;
        this.products = [
            { "id": 1, "name": "name-1", "category": "category-1", "price": 10.5, "qty": 10 },
            { "id": 2, "name": "name-1", "category": "category-2", "price": 11.5, "qty": 11 },
            { "id": 3, "name": "name-1", "category": "category-3", "price": 12.5, "qty": 12 },
            { "id": 4, "name": "name-1", "category": "category-1", "price": 13.5, "qty": 13 },
            { "id": 5, "name": "name-1", "category": "category-2", "price": 14.5, "qty": 14 }
        ];
    }
    ProductComponent.prototype.onSubmit = function (product) {
        this.products.push(product);
        console.log('produt: ' + product);
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedProductId = parseInt(params['id']);
        });
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.router.navigate(["/product", product.id, product.id + 1]);
    };
    ProductComponent.prototype.isSelected = function (product) {
        var flag = product.id === this.selectedProductId;
        return flag;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product-info',
        templateUrl: './app/product/product.component.html',
        styles: ["\n        input.ng-valid{\n            border-left: 5px solid green;\n        }\n        input.ng-invalid{\n            border-left: 5px solid red;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map