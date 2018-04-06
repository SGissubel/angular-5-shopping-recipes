import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingListItem') shoppingListItem: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
      this.subscription = this.shoppingListService.startedEditing
       .subscribe(
         (index: number) => {
           this.editItemIndex = index;
           this.editMode = true;
           this.editingItem = this.shoppingListService.getIngredient(index);
           this.shoppingListItem.setValue({
             name: this.editingItem.name,
             amount: this.editingItem.amount
           })
         }
       );
  }

  onAddItem(form: NgForm) {
    const ingValue = form.value;
    const newIngredient = new Ingredient(ingValue.name, ingValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);  
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      // this.shoppingListService.onIngredientAdded(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListItem.reset();
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
