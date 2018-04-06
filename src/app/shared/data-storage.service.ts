import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-5a824.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() { 
    // const token = this.authService.getToken();

    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-5a824.firebaseio.com/recipes.json')
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-5a824.firebaseio.com/recipes.json', {
    //   observe: 'response',
    //   responseType: 'json'
    // })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);          
        }
      );
  }

}
