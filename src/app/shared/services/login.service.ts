import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceUrl = "http://localhost:4200/api/";
  userPath = "users";

  constructor(
    private http: HttpClient
  ) { }

  login(userName: string):Observable<any> {
    /*let url = `${this.serviceUrl + this.userPath + "/userName?" + userName}`
    this.http.get(url).subscribe( (response) => {
      this.http.put(url, this.buildUser).subscribe( (response) => {
        return true;
      });
    });*/

    

    /*return new Observable(observer => {
      let url = `${this.serviceUrl + this.userPath + "/?userName={" + userName + "}"}`
      this.http.get(url).subscribe((response) => {
        this.http.put(url, this.buildUser).subscribe((response) => {
          observer.next(true);
        });
      });
    })*/
    
    return this.getByUserName(userName);    

  }

  

  getByUserName(userName: string){
    let url = `${this.serviceUrl + this.userPath + "/?userName=" + userName + ""}`
    return this.http.get(url);
  }

  saveUser(user: User) {
    let url = `${this.serviceUrl + this.userPath + "/" + user.id}`
    return this.http.put(url, user);
  }

  logout(user: User) {
    user.token = "";
    return this.saveUser(user);
  }

  isUserLoggedIn(user: User) {
    return true;
  }

  buildUser(userName: string, password: string) {
    let user = new User();
    user.userName = userName;
    user.password = password;
    user.token = this.generateToken()
    return user;
  }

  //This function must be in the back-end.
  generateToken() {
    return Math.random().toString(36).substr(2);
  }

}
