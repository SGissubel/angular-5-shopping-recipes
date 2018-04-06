import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
    
  constructor(private shoppingList: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    // this.recipeService.addIngredientsToShoppingList(ingredients);
    debugger;
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    // this.shoppingList.onAddToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }

}
