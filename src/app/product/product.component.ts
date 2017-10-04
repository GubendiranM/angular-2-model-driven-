import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'product-info',
    templateUrl: './app/product/product.component.html',
    styles:[`
        input.ng-valid{
            border-left: 5px solid green;
        }
        input.ng-invalid{
            border-left: 5px solid red;
        }
    `]
})

export class  ProductComponent {
    public selectedProductId: number;
    constructor(private router: Router, private route: ActivatedRoute){
        this.products = [
            { "id": 1, "name": "name-1", "category": "category-1", "price": 10.5, "qty": 10},
            { "id": 2, "name": "name-1", "category": "category-2", "price": 11.5, "qty": 11},
            { "id": 3, "name": "name-1", "category": "category-3", "price": 12.5, "qty": 12},
            { "id": 4, "name": "name-1", "category": "category-1", "price": 13.5, "qty": 13},
            { "id": 5, "name": "name-1", "category": "category-2", "price": 14.5, "qty": 14}
        ];
    }
    public products: any;    
    public onSubmit(product: any){
        this.products.push(product);
        console.log('produt: '+product);
    }

    ngOnInit(){
        this.route.params.subscribe((params: Params) =>{
            this.selectedProductId = parseInt(params['id']);            
        }
            
        )
    }

    public onSelect(product: any){
        this.router.navigate(["/product", product.id, product.id+1]);
    }

    public isSelected(product:any){         
        let flag = product.id === this.selectedProductId;
        return flag;
    }
}


