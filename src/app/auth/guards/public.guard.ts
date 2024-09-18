import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  private authService = inject(AuthService);
  private router = inject(Router);

  private checkAuthStatus():boolean | Observable<boolean> {
    return this.authService.checkAutentication()
      .pipe(
        tap( isAuthenticated => {
          if( isAuthenticated ) this.router.navigate(['./heroes/list'])
         } ),
         map( isAuthenticated => !isAuthenticated )
      )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log('CanActivate PublicGard: ');
    console.log({ route, state });

    return this.checkAuthStatus();
  }



}
