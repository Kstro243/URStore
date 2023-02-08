import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateUserDTO, Usuario } from 'src/app/models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  APIurl = 'https://api.escuelajs.co/api/v1/users/';

  constructor(
    private http: HttpClient
  ) { }

  createUser(dto: CreateUserDTO) {
    return this.http.post<CreateUserDTO>(this.APIurl, dto)
  }

  getAllUsers() {
    return this.http.get<Usuario[]>(this.APIurl)
  }
}
