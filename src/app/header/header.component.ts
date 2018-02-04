import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})

export class HeaderComponent {
	isOpen: boolean = false;
  @Output() viewChange = new EventEmitter<string>();

  changeView(view: string) {
    this.viewChange.emit(view);
  }

}
