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

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// user defined modules
import { AppComponent }  from './app.component';
import { AppRouterComponent, routingComponents  }  from './app.routing.component';


@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  HttpModule, 
                  AppRouterComponent
                ],
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent, routingComponents ]
})
 
export class AppModule { }

