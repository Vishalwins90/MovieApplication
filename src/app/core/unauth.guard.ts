import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class unauthguard implements CanActivate {
  constructor(private router: Router) {
    debugger
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('user')) {
      this.router.navigate(['dashboard']); 
      return false;
    } else {
      return true;
    }
  }
}







