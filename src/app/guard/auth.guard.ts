import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const getUser = localStorage.getItem('email');
  const router = inject(Router);

  if (getUser != null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
