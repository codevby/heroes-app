// Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material
import { MaterialModule } from '../../../material/material/material.module';
// Interfaces
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    //Angular
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    //Angular Material
    MaterialModule,
    //Pipes
  ],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  constructor( private heroesService: HeroesService ) {}

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions( value )
      .subscribe( heroes => {
        this.heroes = heroes;
      } );

  }

}
