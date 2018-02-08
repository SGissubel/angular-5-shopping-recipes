import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  
  
  private recipes: Recipe[] = [
    new Recipe(
      'Burger Bacon Pancake', 
      'This is a test maybe', 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Ham', 1),
        new Ingredient('Bacon', 39)
      ]),
    new Recipe(
      'Red Onion Pear Soup', 
      'This is a test YES', 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Onion', 100),
        new Ingredient('Pears', 3),
        new Ingredient('Hummus', 30)
      ]
      )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}