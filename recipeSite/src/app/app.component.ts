import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RegisterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipeSite';
  recipes: Recipe[] = [
      {
        id: 1,
        name: "עוף עם ירקות",
        categoryId: 5,
        preparationTimeInMinutes:130,
        difficultyLevel: 4,
        dateAdded: new Date(2000, 0, 1),
        ingredients: [ "Ingredient 1", "Ingredient 2" ],
        preparationMethod: "Method for preparing recipe 1",
        userId: 0,
        image: "../../assets/food/1.jpg"
      },
      {
        id: 2,
        name: "פיצה",
        categoryId: 6,
        preparationTimeInMinutes: 40,
        difficultyLevel: 2,
        dateAdded: new Date(2000, 0, 1),
        ingredients: [ "Ingredient 3", "Ingredient 4" ],
        preparationMethod: "Method for preparing recipe 2",
        userId: 0,
        image: "../../assets/food/2.jpg"
      },
      {
        id: 3,
        name: "סופלה שושנת קצפת",
       categoryId: 1,
        preparationTimeInMinutes:30,
       difficultyLevel: 2,
       dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
       preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/3.jpg"
      },
      {
       id: 3,
       name: "עוגת הדובדבן שבקצפת",
        categoryId: 1,
       preparationTimeInMinutes: 30,
       difficultyLevel: 3,
       dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/4.jpg"
      },
      {
        id: 3,
        name: "עוף אפוי",
       categoryId: 5,
        preparationTimeInMinutes: 150,
        difficultyLevel: 2,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/5.jpg"
      },
      {
        id: 3,
        name: "סופלה בצבעים",
       categoryId: 1,
        preparationTimeInMinutes: 160,
        difficultyLevel: 5,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/6.jpg"
      },
      {
        id: 3,
        name: "אצבעות שניצל",
       categoryId: 5,
        preparationTimeInMinutes: 40,
        difficultyLevel: 4,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/7.jpg"
      },
      {
        id: 3,
        name: "סלט ברוקולי",
       categoryId: 6,
        preparationTimeInMinutes: 25,
        difficultyLevel: 2,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/8.jpg"
      },
      {
        id: 3,
        name: "מרק ירקות",
       categoryId: 7,
        preparationTimeInMinutes: 45,
        difficultyLevel: 2,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/9.jpg"
      },
      {
        id: 3,
        name: "נשיקות",
       categoryId: 6,
        preparationTimeInMinutes: 30,
        difficultyLevel: 1,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/10.jpg"
      },
      {
        id: 3,
        name: "עוגת רולדה מעוטרת",
       categoryId: 1,
        preparationTimeInMinutes: 50,
        difficultyLevel: 2,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/11.jpg"
      },
      {
        id: 3,
        name: "עוגיות שוקו צי'פס'",
       categoryId: 2,
        preparationTimeInMinutes:40,
        difficultyLevel: 1,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/12.jpg"
      },
      {
        id: 3,
        name: "פשטידה עם ריבה",
       categoryId: 8,
        preparationTimeInMinutes: 140,
        difficultyLevel: 5,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/13.jpg"
      },
      {
        id: 3,
        name: "כדורי שוקולד",
       categoryId: 1,
        preparationTimeInMinutes:20,
        difficultyLevel: 1,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/14.jpg"
      },
      {
        id: 3,
        name: "סלט חלבי",
       categoryId: 6,
        preparationTimeInMinutes:20,
        difficultyLevel: 1,
          dateAdded: new Date(2000, 0, 1),
       ingredients: [ "Ingredient 5", "Ingredient 6" ],
        preparationMethod: "Method for preparing recipe 3",
        userId: 0,
       image: "../../assets/food/15.jpg"
      }
    ]
  constructor(private recipeService: RecipeService) {}
 
  ngOnInit(): void {
  }

  addRecipes(): void {
    this.recipes.map((recipe)=>
    this.recipeService.addRecipe(recipe)
      .subscribe(
        response => {
          console.log('Recipes added successfully:', response);
        },
        error => {
          console.error('Error adding recipes:', error);
        }
      )
    )
  }
}
