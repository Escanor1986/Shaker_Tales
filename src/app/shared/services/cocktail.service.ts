import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([
    {
      name: 'Mojito',
      img: 'https://cdn.pixabay.com/photo/2016/07/05/22/55/mojito-1499549_1280.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Cosmopolitan',
      img: 'https://media.istockphoto.com/id/1148976658/photo/red-cocktail-on-glass-table-cityscape-background-daylight.jpg?s=1024x1024&w=is&k=20&c=b558O3E1Gk0cG3nFamutqWTZn56fw38jnlBfL-sfT6U=',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    },
    {
      name: 'Mai Tai',
      img: 'https://cdn.pixabay.com/photo/2015/07/01/22/50/cocktail-828168_1280.jpg',
      description:
        'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
    },
  ]);

  // .value contains the current value of the BehaviorSubject
  public selectedCocktail: BehaviorSubject<Cocktail | null> = new BehaviorSubject<Cocktail | null>(this.cocktails.value[0]); 


  constructor() { }
}
