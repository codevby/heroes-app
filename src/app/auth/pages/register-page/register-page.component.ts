//Angular
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//Angular Material
import { MaterialModule } from '../../../material/material/material.module';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    // Angular
    RouterLink,
    //Angular Material
    MaterialModule,
  ],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

}
