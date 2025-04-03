import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

let splashShown = false;

export const splashGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!splashShown) {
    splashShown = true;
    return router.createUrlTree(['/splash'], {
      queryParams: { redirectTo: state.url }
    });
  }

  return true;
};
