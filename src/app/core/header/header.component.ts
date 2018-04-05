import { Component, Output, EventEmitter } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})

export class HeaderComponent {
	isOpen: boolean = false;
  @Output() viewChange = new EventEmitter<string>();

  constructor(private dataStorage: DataStorageService,
              private authService: AuthService) {}


  onSaveData() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (res: HttpEvent<Object>) => {
          console.log(res)
        }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

}
