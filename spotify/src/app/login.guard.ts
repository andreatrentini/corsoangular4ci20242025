import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  if(loginService.loginOk()) {
    return true;
  }
  else {
    router.navigateByUrl('/login');
    return false;
  }
};
