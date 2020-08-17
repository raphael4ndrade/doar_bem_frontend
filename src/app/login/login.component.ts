import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import AuthService from '../core/auth'

@Component({
  selector: 'app-login',
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export default class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [ Validators.required ]),
      password: this.formBuilder.control('', [ Validators.required ])
    })
  }

  doLogin() {
    const { email, password } = this.loginForm.value

    this.auth.onSignIn(email, password)
  }

  signUp() {
    const { email, password } = this.loginForm.value

    this.auth.onSignUp(email, password)
  }

  forgotPassword() {
    const { email } = this.loginForm.value

    this.auth.onForgotPassword(email)
  }
}
