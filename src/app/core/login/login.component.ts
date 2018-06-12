import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string;
  password: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  login() {
    if (this.loginService.login()) {
      this.router.navigate(['/main']);
    }
  }

}
