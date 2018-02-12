import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    RecipesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}