import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularCRUD';
  constructor(private afs: AngularFirestore, private _router: Router) {
    console.log(afs);
  }
  add() {
    this._router.navigate(['add']);
  }
}
