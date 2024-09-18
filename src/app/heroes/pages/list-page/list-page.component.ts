// Angular
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';
// Angular Material
import { MaterialModule } from '../../../material/material/material.module';
// Components
import { HeroesCardComponent } from '../../components/heroes-card/heroes-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    //Angular
    CommonModule,
    // Angular Material
    MaterialModule,
    //Components
    HeroesCardComponent,
  ],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }

}
