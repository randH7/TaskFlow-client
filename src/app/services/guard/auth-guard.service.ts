import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    // Check if user is not authenticated
    if (!this.auth.isAuthenticated()) {
      // redirect to home
      this.router.navigate(["/"]);
      return false;
    }
    // Access granted
    return true;
  }

}
