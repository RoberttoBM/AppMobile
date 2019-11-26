import { Injectable } from '@angular/core';
import{ Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot): boolean{
    return this.auth.isAuthenticated();
  }

}
