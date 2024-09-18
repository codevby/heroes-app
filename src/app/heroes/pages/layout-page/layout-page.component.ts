//Angular
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
//Angular Material
import { MaterialModule } from '../../../material/material/material.module';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';


@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    //Angular
    RouterOutlet,
    RouterLink,
    //Angular Material
    MaterialModule,
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  private authService = inject(AuthService);
  private router      = inject(Router);

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
