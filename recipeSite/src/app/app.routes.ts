import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'signin', pathMatch: 'full',loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: 'signup', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)},
    { path: '', loadComponent: () => import('./all-recipes/all-recipes.component').then(c => c.AllRecipesComponent)},
    { path: 'smallrecipe', loadComponent: () => import('./small-recipe/small-recipe.component').then(c => c.SmallRecipeComponent)},
    { path: 'addrecipe', loadComponent: () => import('./add-recipe/add-recipe.component').then(c => c.AddRecipeComponent)},
    { path: 'signout', loadComponent: () => import('./sign-out/sign-out.component').then(c => c.SignOutComponent)},
    { path: 'recipedetails', loadComponent: () => import('./recipedetails/recipedetails.component').then(c => c.RecipedetailsComponent)},

    // { path: '**', component: NotFoundComponent }
]
