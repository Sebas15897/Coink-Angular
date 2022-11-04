import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.formLogin = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
      remindme: [false]
    });
  }

  login() {
    this.router.navigate(['/admin/']);
  }

  get invalidForm(): boolean {
    return this.formLogin.invalid;
  }
}
