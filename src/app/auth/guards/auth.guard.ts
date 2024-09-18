import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  private authService = inject(AuthService);
  private router = inject(Router);

  private checkAuthStatus():boolean | Observable<boolean> {
    return this.authService.checkAutentication()
      .pipe(
        tap( isAuthenticated => {
          if( !isAuthenticated ) this.router.navigate(['./auth/login'])
         } )
      )
  }

  canMatch(route: Route, segments: UrlSegment[]):boolean | Observable<boolean> {
    console.log('CanMatch: ');
    console.log({ route, segments });

    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log('CanActivate: ');
    console.log({ route, state });

    return this.checkAuthStatus();
  }



}
