import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LoginService } from '../../shared/services/login.service';

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
  }

  ngOnInit() {
    this.auth.handleAuthentication().subscribe(data => {
      if (this.auth.isAuthenticated()) {
        this.router.navigate(['/main']);
      } else {
        this.auth.logout();
        this.auth.login();
      }
    });
  }

}
