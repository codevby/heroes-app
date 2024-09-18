import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material/material.module';
import { HeroimagePipe } from '../../pipes/heroimage.pipe';

@Component({
  selector: 'app-hero-page',
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
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroService.getHeroById( id ) ),
      ).subscribe( hero => {
        if ( !hero ) return this.router.navigate([ 'heroes/list' ]);

        this.hero = hero;
        return;

      } )
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list');
  }

}
