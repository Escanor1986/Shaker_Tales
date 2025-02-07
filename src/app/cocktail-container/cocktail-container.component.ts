import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail | null = null;
  public subscription: Subscription = new Subscription();

  constructor(private readonly cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription?.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
    this.subscription?.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail | null) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public selectCocktail(index: number): void {
    if (this.cocktails && this.cocktails[index]) {
      this.cocktailService.selectedCocktail$.next(this.cocktails[index]);
      console.log('Cocktail sélectionné :', this.cocktails[index]);
    }
  }
}
