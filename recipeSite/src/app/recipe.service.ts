import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://localhost:7156/api/Recipe';
  constructor(private http:HttpClient) { }
  
  getRecipeByName(name: string):Observable <Recipe> {
    console.log(name)
    return this.http.get<Recipe>(`${this.apiUrl}/${name}`)
  }
  getRecipes():Observable <Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}`)
  }
  addRecipe(recipe: Recipe):Observable <Recipe[]>{
    return this.http.post<Recipe[]>(this.apiUrl, recipe)
    }
    updateRecipe(id:number,recipe: Recipe):Observable <Recipe[]>{
      return this.http.put<Recipe[]>(`${this.apiUrl}/${id}`, recipe)
      }
}
