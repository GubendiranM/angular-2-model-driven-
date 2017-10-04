import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
    template: `    
        <h1>Product Details</h1>    
        Selected product id : {{selectedProductId}}<br/>
        Selected product id2 : {{anotherId}}<br/>
        <a (click) = "goPrevious()" class="btn btn-primary"> << Previous</a>
        <a (click) = "goNext()" class="btn btn-primary"> >> Next </a>
        <button (click)="goBack()" > Back </button>
    `
})
/*<h1>{{appTitle}}</h1>    
    <product-info> </product-info><br/>
    <model-info> </model-info>
    <service-model-info></service-model-info> */
export class ProductDetailComponent implements OnInit {
    public selectedProductId: number;
    public anotherId: number;
    constructor(private route: ActivatedRoute, private router: Router){

    }

    // ngOnInit(){
    //     this.selectedProductId = this.route.snapshot.params['id'];
    // }

    ngOnInit(){
        this.route.params.subscribe((params: Params) =>{
            this.selectedProductId = parseInt(params['id']);
            this.anotherId = parseInt(params['id2'])
        }
            
        )
    }

    goPrevious(){
        
        this.router.navigate(["/product", this.selectedProductId - 1]);
    }

    goNext(){
        this.router.navigate(["/product", this.selectedProductId + 1]);
    }

    goBack(){
        this.router.navigate(["/product", {id:this.selectedProductId}]);
    }

}