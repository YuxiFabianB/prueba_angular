import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  secondsToRedirect: number;

  constructor(
    private auth: AuthService
  ) {
    debugger;
    this.secondsToRedirect = 3;
  }

  ngOnInit() {
    this.counter();
  }

  counter() {
    setTimeout(() => {
      if (this.secondsToRedirect <= 0) {
        this.auth.logout();
        this.auth.login();
      } else {
        this.secondsToRedirect--;
        this.counter();
      }
    }, 1000);
  }

}
