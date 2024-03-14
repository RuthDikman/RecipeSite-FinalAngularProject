import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule, SmallRecipeComponent,KnobModule,FormsModule,DropdownModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit {
  value: string | undefined;
  value2: string | undefined;
  selectedCategory!: string;
  recipes!: Recipe[];
  tempRecipes!:Recipe[];
  Category!:number;
  constructor(private _recipeservice: RecipeService) {}
  recipes_init: Recipe[] = [
    {
      id: 1,
      name: "עוף עם ירקות",
      categoryId: 5,
      preparationTimeInMinutes:130,
      difficultyLevel: 4,
      dateAdded: new Date(2000, 0, 1),
      ingredients: [ "Ingredient 1", "Ingredient 2" ],
      preparationMethod: "Method for preparing recipe 1",
      userId:7,
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
      userId: 4,
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
      userId: 3,
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
      userId: 7,
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
      userId:0,
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
      userId: 5,
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
      userId: 9,
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
      userId: 63,
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
      userId: 7,
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
      userId: 9,
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
      userId: 2,
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
      userId:10,
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
      userId: 20,
     image: "../../assets/food/15.jpg"
    }
  ]
  ngOnInit() {
    this._recipeservice.getRecipes().subscribe({
      next: (res) => {
        if(res.length === 0) {
          this.addRecipes()
          this.recipes=this.recipes_init;
          this.tempRecipes=this.recipes
          console.log(this.tempRecipes)
        }
        else
         this.recipes=res;
         this.tempRecipes=this.recipes
         console.log(this.tempRecipes);

      },
      error: (err) => {
        console.log('Error:', err);
      }
    });
   
  }
  public categories: { id: number, name: string }[] = [
    { id: 1, name: 'עוגות' },
    { id: 2, name: 'עוגיות' },
    { id: 3, name: 'מנות ראשונות' },
    { id: 4, name: 'מנות אחרונות' },
    { id: 5, name: 'מנות עיקריות' },
    { id: 6, name: 'שונות' },
    { id: 7, name: 'תוספות' },
    { id: 8, name: 'פשטידות' }
  ];
  onCategoryChange(){
    this.tempRecipes=[]
   const c= this.categories.find(u=>u.name==this.selectedCategory)
   if(c){
    console.log(c.name)
    this.recipes.forEach(recipe => {
      if(recipe.categoryId==c.id){
        this.tempRecipes.push(recipe)
      }
    });
   }
  }
  onNameChange(){
    if(this.value2==""){
     this.tempRecipes=this.recipes
    }
    else{
          this.tempRecipes=[]
    this.recipes.forEach(recipe => {
      if(recipe.name==this.value2){
        this.tempRecipes.push(recipe)
      }
    });
    }
  }
  handleKnobChange(newValue: number) {
    if(newValue==0){
      this.tempRecipes=this.recipes
     }
     else{
           this.tempRecipes=[]
     this.recipes.forEach(recipe => {
       if(recipe.preparationTimeInMinutes==newValue){
         this.tempRecipes.push(recipe)
       }
     });
     }
  }
  addRecipes(): void {
    this.recipes_init.map((recipe)=>
    this._recipeservice.addRecipe(recipe)
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