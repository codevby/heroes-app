import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  private http = inject(HttpClient);

  get currentUser():User | undefined {
    if ( !this.user ) return undefined;
    return structuredClone( this.user ); // Evitar que pase por referencia el objeto y se modifique el user
  }

  login( email: string, password: string ):Observable<User>{

    //http.post('login, {email, password}');

    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem( 'token', user.id.toString() ) ),
      );
  }

  checkAutentication():Observable<boolean> {

    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      )

  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}
