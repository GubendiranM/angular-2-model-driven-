import { Component, Input } from '@angular/core';
// normal formal control
//import {FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
//using Form Builder 
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'model-info',
    templateUrl: './app/model.driven/model.component.html',
    styles:[`
        input.ng-valid{
            border-left: 5px solid green;
        }
        input.ng-invalid{
            border-left: 5px solid red;
        }
    `]
})

export class  ModelComponent implements OnInit {

    //======================== model driven forms with Form control ============= Start =========================
    // model = new FormGroup({
    //     id: new FormControl("default_id", Validators.required),
    //     name: new FormControl("default_name", [ Validators.required, Validators.minLength(3), Validators.maxLength(30)] ),
    //     address: new FormGroup({
    //         doorNo: new FormControl(),
    //         street: new FormControl()
    //     })
    // });
    //======================== model driven forms with Form controla ============== End ==========================



     //======================= model driven forms with FormBuilder Class ========= Start =========================
    model: FormGroup;
    constructor(private _formBuilder: FormBuilder){        
    }
    
    ngOnInit( ){
        this.model = this._formBuilder.group({
            id: ["default-id",[Validators.required]],
            name: ["default Name", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            address: this._formBuilder.group({
                doorNo: [],
                street: []
            })
        })
    }
   
    //======================= model driven forms with FormBuilder Class =========== End =========================  
    onSubmit(){
        console.log('produt: '+this.model.value);
    }
}


