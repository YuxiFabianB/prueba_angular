import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class Api {

    constructor(
        public http: HttpClient
    ) { }

    get(endpoint: string) {
        return this.http.get(`${environment.backEndUrl}${endpoint}`);
    }

    post(endpoint: string, body: any, reqOpts?: any) {
        return this.http.post(`${environment.backEndUrl}${endpoint}`, body, reqOpts);
    }

    put(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(`${environment.backEndUrl}${endpoint}`, body, reqOpts);
    }

    delete(endpoint: string, reqOpts?: any) {
        return this.http.delete(`${environment.backEndUrl}${endpoint}`, reqOpts);
    }
    
}