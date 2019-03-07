import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './constants/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
     // TODO: send the message _after_ fetching the heroes
  this.messageService.add('Hero Service is fetching heroes');
    return of(HEROES);
  }
  
}
