import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIurl = 'https://api.escuelajs.co/api/v1/auth';

  constructor(
    private http: HttpClient
  ) { }

  Userlogin(email: string, password: string) {
    return this.http.post<Auth>(`${this.APIurl}/login`, {email, password});
  }

  Userprofile(token: string) {
    return this.http.get(`${this.APIurl}/profile`)
  }
}
