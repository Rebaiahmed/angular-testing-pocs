import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  template: `<a>
    <span *ngIf="needsLogin()">Login</span>
    <span *ngIf="!needsLogin()">Logout</span>
  </a> `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit(): void {}

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}
