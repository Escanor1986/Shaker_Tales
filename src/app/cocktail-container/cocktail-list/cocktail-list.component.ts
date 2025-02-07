import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[] | null;
  @Output() private readonly changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(indexCocktail: number | null): void {
    if (indexCocktail !== null) {
      console.log(indexCocktail);
      this.changeCocktail.emit(indexCocktail);
    }
  }
}
