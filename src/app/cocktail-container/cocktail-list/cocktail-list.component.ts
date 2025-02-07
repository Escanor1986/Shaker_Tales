import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[] | null;
  @Input() public selectedCocktail!: Cocktail | null;
  @Output() private readonly changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.cocktails);
  }

  public selectCocktail(indexCocktail: number): void {
    if (this.cocktails && this.cocktails[indexCocktail]) {
      this.changeCocktail.emit(indexCocktail);
    }
  }
}
