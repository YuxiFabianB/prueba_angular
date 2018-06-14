import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceUrl = "http://localhost:4200/api/";
  employeePath = "employees";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees() {
    let url = `${this.serviceUrl + this.employeePath}`
    return this.http.get(url);
  }

  getEmployee(employeeId: number) {
    let url = `${this.serviceUrl + this.employeePath + "/" + employeeId}`
    return this.http.get(url);
  }

  deleteEmployee(employeeId: number) {
    let url = `${this.serviceUrl + this.employeePath + "/" + employeeId}`
    return this.http.delete(url);
  }

  updateCreateEmployee(employee: Employee) {
    if (employee.id) {
      let url = `${this.serviceUrl + this.employeePath + "/" + employee.id}`
      return this.http.put(url, employee);
    } else {
      let url = `${this.serviceUrl + this.employeePath}`
      return this.http.post(url, employee);
    }
  }

}
