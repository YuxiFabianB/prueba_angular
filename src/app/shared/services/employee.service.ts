import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceUrl = "http://localhost:4200/api/";
  employeePath = "employees";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(){
    let url = `${this.serviceUrl + this.employeePath}`
    return this.http.get(url);
  }
}
