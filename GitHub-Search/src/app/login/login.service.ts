import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable()
export class LoginService {
  isLoggedIn = false;
  login(username: any, password: any) {
    if (username === 'jason' && password === '123') {
      this.isLoggedIn = true;
      console.log('Making isLoggedIn true');
    } else {
      this.isLoggedIn = false;
      console.log('Making isLoggedIn false');
    }
    return this.isLoggedIn;
  }
  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
