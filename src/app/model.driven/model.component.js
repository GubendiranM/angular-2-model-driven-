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
//using Form Builder 
var forms_1 = require("@angular/forms");
var ModelComponent = (function () {
    function ModelComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ModelComponent.prototype.ngOnInit = function () {
        this.model = this._formBuilder.group({
            id: ["default-id", [forms_1.Validators.required]],
            name: ["default Name", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            address: this._formBuilder.group({
                doorNo: [],
                street: []
            })
        });
    };
    //======================= model driven forms with FormBuilder Class =========== End =========================  
    ModelComponent.prototype.onSubmit = function () {
        console.log('produt: ' + this.model.value);
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    core_1.Component({
        selector: 'model-info',
        templateUrl: './app/model.driven/model.component.html',
        styles: ["\n        input.ng-valid{\n            border-left: 5px solid green;\n        }\n        input.ng-invalid{\n            border-left: 5px solid red;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ModelComponent);
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=model.component.js.map