import { Component, OnInit } from '@angular/core';
import { ModelService } from './../services/model.service'
@Component({
    selector: 'service-model-info',
    templateUrl: './app/service.test/service.component.html',
    styles:[`
        input.ng-valid{
            border-left: 5px solid green;
        }
        input.ng-invalid{
            border-left: 5px solid red;
        }
    `],
    providers: [ModelService]
})

export class  ServiceComponent implements OnInit {
    errorMsg: string;
    serviceModels: any;
    serviceModelsUsingHttp: any;
    constructor( private modelService: ModelService ){        
    }
    
    ngOnInit(){
        this.serviceModels = this.modelService.getModelService();
        this.modelService.geModelUsingHttp()
            .subscribe( resModel =>  this.serviceModelsUsingHttp = resModel,
                errMsg => this.errorMsg = errMsg);

    }

    
}




