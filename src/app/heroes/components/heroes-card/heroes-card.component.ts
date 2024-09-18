// Angular
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// Interfaces
import { Hero } from '../../interfaces/hero.interface';
// Angular Material
import { MaterialModule } from '../../../material/material/material.module';
import { HeroimagePipe } from '../../pipes/heroimage.pipe';

@Component({
  selector: 'heroes-hero-card',
  standalone: true,
  imports: [
    //Angular
    CommonModule,
    RouterLink,
    //Angular Material
    MaterialModule,
    //Pipes
    HeroimagePipe,
  ],
  templateUrl: './heroes-card.component.html',
})
export class HeroesCardComponent implements OnInit {

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero poperty is required');
  }

}
