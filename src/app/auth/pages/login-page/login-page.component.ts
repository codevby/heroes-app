//Angular
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
//Angular Material
import { MaterialModule } from '../../../material/material/material.module';
// Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    // Angular
    RouterLink,
    //Angular Material
    MaterialModule,
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private router      = inject(Router);

  onLogin(): void {
    this.authService.login('fernando@gmail.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/']);
      } );
  }

}
