"use strict";
// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // user defined modules
// import { ProductComponent }  from './product/product.component';
// import { ModelComponent}  from './model.driven/model.component';
// import { AppComponent }  from './app.component';
// import { ServiceComponent } from './service.test/model.service.component'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @NgModule({
//   imports:      [ 
//                   BrowserModule, 
//                   FormsModule, 
//                   ReactiveFormsModule, 
//                   HttpModule,
//                   RouterModule.forRoot([
//                     { path: "product", component: ProductComponent  },
//                     { path: "model", component: ModelComponent  },
//                     { path: "service", component: ServiceComponent  }
//                   ])
//                 ],
//   declarations: [ AppComponent, ProductComponent, ModelComponent, ServiceComponent ],
//   bootstrap:    [ AppComponent, ProductComponent, ModelComponent, ServiceComponent ]
// })
// export class AppModule { }
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// user defined modules
var app_component_1 = require("./app.component");
var app_routing_component_1 = require("./app.routing.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_component_1.AppRouterComponent
        ],
        declarations: [app_component_1.AppComponent, app_routing_component_1.routingComponents],
        bootstrap: [app_component_1.AppComponent, app_routing_component_1.routingComponents]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map