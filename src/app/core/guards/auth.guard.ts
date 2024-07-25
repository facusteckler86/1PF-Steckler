import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);


  return authService
  .verifyToken()
  .pipe(
    map((isAutenticated) =>
    isAutenticated ? true : router.createUrlTree(["auth", "login" ]))
  )
};
