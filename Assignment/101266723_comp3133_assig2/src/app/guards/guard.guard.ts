import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url = state.url;
      let val = localStorage.getItem('isValidUser')

      if(val != null && val == 'true'){
        if(url == '/login'){
          return this.router.navigate(['/home']);
        }else{
          return true;
        }
      }else{
          return this.router.navigate(['/login']);
      }
  }
  
}
