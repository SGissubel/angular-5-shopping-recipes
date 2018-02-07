import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
  
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
    
  constructor(private shoppingList: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  sendToShoppingList() {
    this.shoppingList.onAddToShoppingList(this.recipe.ingredients);
  }

}
