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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ModelService = (function () {
    function ModelService(_http) {
        this._http = _http;
        this._url = './app/data/employee_data.json';
    }
    ModelService.prototype.getModelService = function () {
        return [
            { "id": "id-1", "name": "name-1" },
            { "id": "id-2", "name": "name-2" },
            { "id": "id-3", "name": "name-3" },
            { "id": "id-4", "name": "name-4" },
            { "id": "id-5", "name": "name-5" }
        ];
    };
    ModelService.prototype.geModelUsingHttp = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    ModelService.prototype._errorHandler = function (err) {
        console.error("Error: " + err);
        return Observable_1.Observable.throw(err || "Server Error");
    };
    return ModelService;
}());
ModelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map