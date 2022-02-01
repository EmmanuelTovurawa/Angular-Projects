import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../passwordValidator';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  invalidLoginMessage: string = '';

  constructor(
    fb: FormBuilder,
    private _loginService: LoginService,
    private _route: ActivatedRoute
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          PasswordValidator.cannotContainSpace,
        ]),
      ],
    });
  }

  onSignup() {
    var result = this._loginService.signup(
      this.form.controls['username'].value,
      this.form.controls['password'].value
    );
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.invalidLoginMessage = params['invalidLoginMessage'];
    });
  }
}

/*
  form = new FormGroup({
    username: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  });
  */
