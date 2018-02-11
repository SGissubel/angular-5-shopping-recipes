import { Component, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';


@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})

export class HeaderComponent {
	isOpen: boolean = false;
  @Output() viewChange = new EventEmitter<string>();

  constructor(private dataStorage: DataStorageService) {}

  changeView(view: string) {
    this.viewChange.emit(view);
  }

  onSaveData() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (res: Response) => {
          console.log(res)
        }
    );
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

}
