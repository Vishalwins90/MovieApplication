import { Injectable, inject } from '@angular/core';
import { CanActivateFn,CanActivate } from '@angular/router';
import { Router,  ActivatedRouteSnapshot, UrlTree,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
    debugger
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
      if(localStorage.getItem('user')) {
 
       return true
     } else {
      this.router.navigate(['login'])
      return false
      }
   
}
}