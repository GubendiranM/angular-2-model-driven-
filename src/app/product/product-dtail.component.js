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
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    // ngOnInit(){
    //     this.selectedProductId = this.route.snapshot.params['id'];
    // }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedProductId = parseInt(params['id']);
            _this.anotherId = parseInt(params['id2']);
        });
    };
    ProductDetailComponent.prototype.goPrevious = function () {
        this.router.navigate(["/product", this.selectedProductId - 1]);
    };
    ProductDetailComponent.prototype.goNext = function () {
        this.router.navigate(["/product", this.selectedProductId + 1]);
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.router.navigate(["/product", { id: this.selectedProductId }]);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        template: "    \n        <h1>Product Details</h1>    \n        Selected product id : {{selectedProductId}}<br/>\n        Selected product id2 : {{anotherId}}<br/>\n        <a (click) = \"goPrevious()\" class=\"btn btn-primary\"> << Previous</a>\n        <a (click) = \"goNext()\" class=\"btn btn-primary\"> >> Next </a>\n        <button (click)=\"goBack()\" > Back </button>\n    "
    })
    /*<h1>{{appTitle}}</h1>
        <product-info> </product-info><br/>
        <model-info> </model-info>
        <service-model-info></service-model-info> */
    ,
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-dtail.component.js.map