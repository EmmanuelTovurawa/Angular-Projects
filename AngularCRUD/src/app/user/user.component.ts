import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '../user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  usersCol!: AngularFirestoreCollection<User>;
  users: any;

  constructor(private afs: AngularFirestore, private _router: Router) {}

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

  delete(userId: string, name: string) {
    if (confirm('Are you sure you want to delete ' + name + '?')) {
      this.afs.doc('users/' + userId).delete();
    }
  }

  add() {
    this._router.navigate(['add']);
  }
}
