import { effect, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ICredentials } from './i-credentials';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginOk: WritableSignal<boolean> = signal<boolean>(false);
  loginOk: Signal<boolean> = this._loginOk.asReadonly();

  private _errorFeedback: WritableSignal<boolean> = signal(false);
  errorFeedback: Signal<boolean> = this._errorFeedback.asReadonly();

  router: Router = inject(Router);

  constructor() { 
    /* effect(() => {
      if(this.errorFeedback()) {
        timer(3000).subscribe(() => {
          this._errorFeedback.set(false);
        })
      }
    }) */
  }

  // Sistema fake di login

  login(credenziali: ICredentials) {
    if(credenziali.username == 'pippo' && credenziali.password == 'cisco') {
      // login ok
      this._loginOk.set(true);
      this._errorFeedback.set(false);
      this.router.navigateByUrl('/');
    }
    else {
      this._errorFeedback.set(true);
      timer(3000).subscribe(() => {
        this._errorFeedback.set(false);
      })
    }
  }

  logout(): void {
    this._loginOk.set(false);
    this.router.navigateByUrl('/');
  }
}
