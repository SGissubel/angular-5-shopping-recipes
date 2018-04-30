import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
// import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // constructor(private authService: AuthService) {}
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.append('', '')});
    // const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    
    return this.store.select('auth')
      .take(1)
      //only get this value once
      .switchMap((authState: fromAuth.State) => {
        //switchmap to extract the value of the observable (the validation status in this case)
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)}); //clone the req - assign token - access synchronously because we're inside the observable handler
        return next.handle(copiedReq); // return new observable - take advantage of new req. 
      })
  }
}