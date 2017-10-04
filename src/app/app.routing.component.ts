import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-dtail.component';
import { ModelComponent } from './model.driven/model.component';
import { ServiceComponent } from './service.test/model.service.component'



 const routes = [
    { path: "product", component: ProductComponent  },
    { path: "product/:id", component: ProductDetailComponent  },
    { path: "product/:id/:id2", component: ProductDetailComponent  },
    { path: "model", component: ModelComponent  },
    { path: "service", component: ServiceComponent  }
 ];

 
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouterComponent{

}
export const routingComponents = [ 
    ProductComponent,
    ModelComponent,
    ServiceComponent,
    ProductDetailComponent
];