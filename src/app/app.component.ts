import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  curView: string = 'recipe';

  changeView(view) {
    this.curView = view;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC17GXj8ravUXzx4gzKSW9VaqWdlSOnR_E",
      authDomain: "ng-recipe-book-5a824.firebaseapp.com"
    });
  }
}
