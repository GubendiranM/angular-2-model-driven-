"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var model_service_1 = require("./services/model.service");
var AppComponent = (function () {
    function AppComponent() {
        this.appTitle = "Product Information";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "    \n        <h1>{{appTitle}}</h1>    \n        <nav>\n            <a routerLink = \"/product\" routerLinkActive=\"active\" > Product Details</a>\n            <a routerLink = \"/model\" routerLinkActive=\"active\" > Model Details</a>\n            <a routerLink = \"/service\" routerLinkActive=\"active\" > Service Details</a>\n            <a routerLink = \"/\" routerLinkActive=\"active\" > Home</a>\n            <a routerLink = \"/product\" routerLinkActive=\"active\" > Home Poduct</a>\n        </nav>\n         <router-outlet></router-outlet>\n    ",
        providers: [model_service_1.ModelService]
    })
    /*<h1>{{appTitle}}</h1>
        <product-info> </product-info><br/>
        <model-info> </model-info>
        <service-model-info></service-model-info> */
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map