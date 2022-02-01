import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  id: string = '';
  form!: FormGroup;
  title: string = '';
  user = {
    name: '',
    email: '',
  };
  userDoc!: AngularFirestoreDocument<User>;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private afs: AngularFirestore,
    private _route: ActivatedRoute,
    private _loginService: LoginService
  ) {
    this.form = _fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (!this.id) {
      this.title = 'New User';
    } else {
      this.title = 'Edit User';
      this.userDoc = this.afs.doc(
        'users/' + this._loginService.loggedInUser + '/clients/' + this.id
      );
      this.userDoc.valueChanges().subscribe((user) => {
        this.form.get('username')!.setValue(user!.name);
        this.form.get('email')!.setValue(user!.email);
      });
    }
  }
  submit() {
    if (this.id) {
      this.afs
        .doc('users/' + this._loginService.loggedInUser + '/clients/' + this.id)
        .update({
          name: this.user.name,
          email: this.user.email,
        });
    } else {
      this.afs
        .collection('users')
        .doc(this._loginService.loggedInUser)
        .collection('clients')
        .add({
          name: this.user.name,
          email: this.user.email,
        });
    }
    this._router.navigate(['']);
  }
}
