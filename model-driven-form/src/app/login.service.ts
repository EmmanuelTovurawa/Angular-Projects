import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
  login(username: any, password: any) {
    if (username === 'jason' && password === '123') return true;
    else return false;
  }
}
