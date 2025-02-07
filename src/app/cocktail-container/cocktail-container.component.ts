import { Component } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  public cocktails: Cocktail[] = [];

  public selectedCocktail: Cocktail | null = null;

  constructor(private readonly cocktailService: CocktailService) {
    this.cocktails = this.cocktailService.cocktails.value;
    this.selectedCocktail = this.cocktailService.selectedCocktail.value;
  }

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktails(indexCocktail: number): void {
    this.selectedCocktail = this.cocktails[indexCocktail];
  }
}
