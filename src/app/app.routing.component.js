"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_component_1 = require("./product/product.component");
var product_dtail_component_1 = require("./product/product-dtail.component");
var model_component_1 = require("./model.driven/model.component");
var model_service_component_1 = require("./service.test/model.service.component");
var routes = [
    { path: "product", component: product_component_1.ProductComponent },
    { path: "product/:id", component: product_dtail_component_1.ProductDetailComponent },
    { path: "product/:id/:id2", component: product_dtail_component_1.ProductDetailComponent },
    { path: "model", component: model_component_1.ModelComponent },
    { path: "service", component: model_service_component_1.ServiceComponent }
];
var AppRouterComponent = (function () {
    function AppRouterComponent() {
    }
    return AppRouterComponent;
}());
AppRouterComponent = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRouterComponent);
exports.AppRouterComponent = AppRouterComponent;
exports.routingComponents = [
    product_component_1.ProductComponent,
    model_component_1.ModelComponent,
    model_service_component_1.ServiceComponent,
    product_dtail_component_1.ProductDetailComponent
];
//# sourceMappingURL=app.routing.component.js.map