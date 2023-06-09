import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenHandler } from '../tokenHandler';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private tokenHandler: TokenHandler,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.tokenHandler.getToken();
    if (token != null) {
      var role: string = this.tokenHandler.getRoleFromToken()
      var mainroute = state.url.split('/')
      if (role.toLowerCase() == mainroute[1]) {
        return true;
      }
    }

    this.router.navigateByUrl('/');
    return false;
  }

}
