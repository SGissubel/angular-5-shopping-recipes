import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingList: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    debugger;
    const ingValue = form.value;
    const newIngredient = new Ingredient(ingValue.name, ingValue.amount);
    this.shoppingListService.onIngredientAdded(newIngredient);
    
  }

}
