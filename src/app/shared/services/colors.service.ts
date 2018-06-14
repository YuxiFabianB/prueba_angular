import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  serviceUrl = "http://localhost:4200/api/";
  colorsPath = "colors";

  constructor(
    private http: HttpClient
  ) { }

  getColors() {
    let url = `${this.serviceUrl + this.colorsPath}`
    return this.http.get(url);
  }
}
