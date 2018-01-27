import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curView: string = 'recipe';

  changeView(view) {
     console.log(this.curView);
    this.curView = view;
  }
}