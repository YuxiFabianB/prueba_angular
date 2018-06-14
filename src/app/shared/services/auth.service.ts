// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  public userProfile: any;

  auth0 = new auth0.WebAuth(environment.auth0Config);

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  // ...
  public handleAuthentication(): Observable<any> {
    return new Observable(observable => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          observable.next("successful");
        } else

          if (err) {
            console.log(err);
            observable.next("error");
          }
        observable.next("not-logged");
      });
    });

  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    //this.router.navigate(['/login']);
    this.login();
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return expiresAt ? new Date().getTime() < expiresAt : false;
  }

}
