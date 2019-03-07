import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hlist: Hero[];
  selectedHero: Hero;
  

  
  constructor(
    private heroesApi: HeroService
  ) { 
  }

  ngOnInit() {
      this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroesApi.getHeroes()
        .subscribe(heroes => this.hlist = heroes);
  }
}



