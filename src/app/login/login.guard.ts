import { CanActivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import AuthService from '../core/auth'

@Injectable({
  providedIn: 'root'
})
export default class LoginGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate([ 'entrar' ])
    }

    return true
  }
}