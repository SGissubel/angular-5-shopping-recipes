import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
	authState: Observable<fromAuth.State>;
  isOpen: boolean = false;

  constructor(private dataStorage: DataStorageService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.authState = this.store.select('auth');
    debugger;
  }

  onSaveData() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (res) => {
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
