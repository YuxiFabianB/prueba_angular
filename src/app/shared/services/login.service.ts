import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceUrl = "http://localhost:4200/api/";
  employeePath = "users";

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    let url = `${this.serviceUrl + this.employeePath + "/" + user.id}`
    return this.http.get(url);
  }

  saveUser(user: User) {
    let url = `${this.serviceUrl + this.employeePath + "/" + user.id}`
    return this.http.put(url, user);    
  }

  logout(user: User) {
    return false;
  }

  isUserLoggedIn(user: User) {
    return true;
  }

}
