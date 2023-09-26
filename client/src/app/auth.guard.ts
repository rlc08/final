import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService , private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    // Use your authentication logic here
    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  };
}
