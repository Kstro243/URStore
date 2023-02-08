import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StoreAPI';

  constructor(
    private Auth: AuthService,
    private User: UsersService
  ) {}

  crearUsuario() {
    this.User.createUser({
      name: 'Juan',
      email: 'juan@juanito.com',
      password: '12345',
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867'
    })
    .subscribe(rta => {
      console.log(rta)
    })
  }

  loginUser() {
    this.Auth.Userlogin('juan@juanito.com', '12345')
    .subscribe(rta => {
      console.log(rta.access_token)
    })
  }
}
