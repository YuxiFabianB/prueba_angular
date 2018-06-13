import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private auth: AuthService
  ) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {    
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/main']);
    }else{
      this.auth.logout();
    }
  }  

}
