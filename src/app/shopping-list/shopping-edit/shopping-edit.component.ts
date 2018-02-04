import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
    // this.ingredientAdded.emit({
    //   ingredientName: name.value,
    //   recipeAmount: this.amountInput.nativeElement.value
    // });
  }

}
