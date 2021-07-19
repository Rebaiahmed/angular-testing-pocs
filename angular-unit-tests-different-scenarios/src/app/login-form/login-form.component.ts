import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  template: `
    <form (ngSubmit)="login()" [formGroup]="form">
      <label>Email</label>
      <input type="email" formControlName="email" /> (3)
      <label>Password</label>
      <input type="password" formControlName="password" /> (3)
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginFormComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(this.form.value.email, this.form.value.password)
      );
    }
  }
}
