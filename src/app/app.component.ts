import { Component } from '@angular/core';
import {ModelService } from './services/model.service';

@Component({
    selector: 'my-app',
    template: `    
        <h1>{{appTitle}}</h1>    
        <nav>
            <a routerLink = "/product" routerLinkActive="active" > Product Details</a>
            <a routerLink = "/model" routerLinkActive="active" > Model Details</a>
            <a routerLink = "/service" routerLinkActive="active" > Service Details</a>
            <a routerLink = "/" routerLinkActive="active" > Home</a>
            <a routerLink = "/product" routerLinkActive="active" > Home Poduct</a>
        </nav>
         <router-outlet></router-outlet>
    `,
    providers: [ModelService]
})
/*<h1>{{appTitle}}</h1>    
    <product-info> </product-info><br/>
    <model-info> </model-info>
    <service-model-info></service-model-info> */
export class AppComponent {
    appTitle = "Product Information";
}