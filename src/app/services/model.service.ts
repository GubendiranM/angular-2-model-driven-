import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"


@Injectable()
export class ModelService  {
    public getModelService(){
        return [
            { "id": "id-1", "name": "name-1"},
            { "id": "id-2", "name": "name-2"},
            { "id": "id-3", "name": "name-3"},
            { "id": "id-4", "name": "name-4"},
            { "id": "id-5", "name": "name-5"}
        ];
    }
    constructor(private _http: Http){}
    private _url:string = './app/data/employee_data.json';
    public geModelUsingHttp(){
        return this._http.get(this._url)
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }
    public _errorHandler(err: Response){
        console.error("Error: "+err);
        return Observable.throw( err || "Server Error");
    }

} 