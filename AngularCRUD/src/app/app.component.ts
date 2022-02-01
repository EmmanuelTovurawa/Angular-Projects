import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularCRUD';
  isLoggedIn!: Observable<boolean>;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getCurrentUser();
    this.isLoggedIn = this.loginService.isLoggedIn;
  }

  onLogout() {
    this.loginService.logout();
  }
}
