import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
