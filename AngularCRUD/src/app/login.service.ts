import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  login(username: string, password: string) {
    if (username === 'jason' && password === '123') return true;
    else return false;
  }
}
