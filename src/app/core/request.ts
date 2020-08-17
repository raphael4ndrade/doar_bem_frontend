import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response, ResponseOptions, RequestOptionsArgs } from '@angular/http'
import { Observable } from 'rxjs'
import AuthService from './auth'
import api from './api'

const login = {
  user: 'SubZero',
  password: 'Zenit Polar'
}

@Injectable({
  providedIn: 'root'
})
export default class Request {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': window.location.origin,
  })

  constructor(
    private http: Http,
    private auth: AuthService
  ) {
    if (this.auth.isLoggedIn)
      this.handshake()
  }

  private handshake() {
    this.http.post(
      api.handshake,
      JSON.stringify(login),
      new RequestOptions({ headers: this.headers })
    ).subscribe(resp => {
      const { accessToken } = resp.json().obj

      this.headers.append('Authorization', `Bear ${accessToken}`)
    })
  }

  get(path: string): Observable<Response> {
    return this.http.get(path, new RequestOptions({ headers: this.headers }))
  }

  post(path: string, data: object): Observable<Response> {
    return this.http.post(path, JSON.stringify(data), new RequestOptions({ headers: this.headers }))
  }

  delete(path: string): Observable<Response> {
    return this.http.delete(path, new ResponseOptions({ headers: this.headers }))
  }
}