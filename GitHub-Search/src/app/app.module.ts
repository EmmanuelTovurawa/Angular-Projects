import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home.component';
import { OwnComponent } from './own.component';
import { GitHubComponent } from './github.component';
import { routing } from './app.routing';
import { GitHubUserComponent } from './githubuser.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { GitHubService } from './github.service';
import { PasswordValidator } from './passwordValidator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    OwnComponent,
    GitHubUserComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, routing],
  exports: [],
  providers: [AuthGuard, LoginService, GitHubService, PasswordValidator],
  bootstrap: [AppComponent],
})
export class AppModule {}
