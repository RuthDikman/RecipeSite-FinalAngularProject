import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, input, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ScrollerModule } from 'primeng/scroller';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Category } from '../category.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,CommonModule,FormsModule,ScrollerModule,],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  constructor(public dialogRef: MatDialogRef<EditRecipeComponent>,private _recipeService:RecipeService,@Inject(MAT_DIALOG_DATA) public data: { recipe: Recipe },private route:Router) {}

  ingredients: string[] = [""];
  public categories: { id: number, name: string }[] = [
    { id: 1, name: 'Cakes' },
    { id: 2, name: 'Cookies' },
    { id: 3, name: 'First Dishes' },
    { id: 4, name: 'Last Dishes' },
    { id: 5, name: 'Miscellaneous' },
    { id: 6, name: 'Toppings' },
    { id: 7, name: 'Pies' }
  ];
  categoryName!:string
  ngOnInit(): void {
    if (this.data.recipe.image) {
      const matchResult = this.data.recipe.image.match(/\d+/);
      if (matchResult && matchResult.length > 0) {
        this.iconNumber = parseInt(matchResult[0]);
    }}
    const category = this.categories.find(category => category.id === this.data.recipe.categoryId);
    if (category) {
      this.categoryName = category.name;
    } else {
      this.categoryName = 'Category not found';
    }
  console.log(this.data.recipe)
  }

  iconNumber!: number
  
  onInputChange(i:number,con:string) {
    this.data.recipe.ingredients[i]=con;
    if(this.data.recipe.ingredients[i].length==1||i==this.ingredients.length-1)
    this.ingredients.push("")
  console.log(this.data.recipe)
  }
  onTextAreaChange(con:string){
    this.data.recipe.preparationMethod=con
    console.log(this.data.recipe)
    console.log(this.iconNumber)

  }
  saveRecipe(){
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const id = user.id;
      this.data.recipe.userId=id}
  this.data.recipe.dateAdded=new Date()
  this.iconNumber === 4 ? this.data.recipe.image = "../../assets/food/60.png" : null;
  this.iconNumber === 5 ? this.data.recipe.image = "../../assets/food/50.png" : null;
  this.iconNumber === 6 ? this.data.recipe.image = "../../assets/food/70.png" : null;
    this._recipeService.updateRecipe(this.data.recipe.id,this.data.recipe).subscribe({
      next: (res) => {
        console.log('Response:', res);
        Swal.fire({
          title: "Good job!",
          text: "!המתכון התעדכן בהצלחה",
          icon: "success",
          customClass: {
            icon: 'custom-icon-color'
          }
        });
        this.route.navigate(['/recipedetails'], { queryParams: { recipe:res } });

      },
      error: (err) => {
        console.log('Error:', err);
      }
    });
  }
  steps = ['Step 1', 'Step 2', 'Step 3'];
  currentStep = 'Step 1';
  nextStep() {
    const currentIndex = this.steps.indexOf(this.currentStep);
    if (currentIndex < this.steps.length - 1) {
      this.currentStep = this.steps[currentIndex + 1];
    }
  }
  prevStep() {
    const currentIndex = this.steps.indexOf(this.currentStep);
    if (currentIndex > 0) {
      this.currentStep = this.steps[currentIndex - 1];
    }
  }
  setCurrentStep(step: string) {
    this.currentStep = step;
  }
}