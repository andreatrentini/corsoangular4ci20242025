import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const logoutGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
    const router: Router = inject(Router);
  
    if(!loginService.loginOk()) {
      return true;
    }
    else {
      router.navigateByUrl('/logout');
      return false;
    }
};
