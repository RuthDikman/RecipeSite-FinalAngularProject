import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ScrollerModule } from 'primeng/scroller';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  ScrollerModule,
  ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent{
  constructor(private _recipeService:RecipeService, private route:Router) {
  }
  ingredients: string[] = [""];
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
  categoryName!:string
  icon: string = '';
  userId!: number
  recipe:Recipe={
    id:0,
    name:"",
    categoryId:0,
    preparationTimeInMinutes:0,
    difficultyLevel:0,
    dateAdded: new Date(2000, 0, 1),
    ingredients:[],
    preparationMethod:"",
    userId:0,
    image:""
  }
  onInputChange(i:number,con:string) {
    this.recipe.ingredients[i]=con;
    if(this.recipe.ingredients[i].length==0){
      this.recipe.ingredients=this.recipe.ingredients.slice(0, -1);
     }
    if(this.recipe.ingredients[i].length==1&&i==this.ingredients.length-1){
      this.ingredients.push("")
    }
  }
  onTextAreaChange(con:string){
    this.recipe.preparationMethod=con
    console.log(this.icon)
  }
  saveRecipe(){
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const id = user.id;
      this.recipe.userId=id
    console.log(this.recipe.userId)}
    
  this.recipe.dateAdded=new Date();
  this.icon === '4' ? this.recipe.image = "../../assets/food/60.png" : null;
  this.icon === '5' ? this.recipe.image = "../../assets/food/50.png" : null;
  this.icon === '6' ? this.recipe.image = "../../assets/food/70.png" : null;
  const category = this.categories.find(category => category.name === this.categoryName);
  if(category){
    this.recipe.categoryId=category.id
  }
  if(!this.recipe.name || this.recipe.name.trim() === ''||!this.recipe.categoryId || this.recipe.categoryId ===0||!this.recipe.ingredients || this.recipe.ingredients.length==0||!this.icon|| this.icon==''||!this.recipe.preparationMethod || this.recipe.preparationMethod.trim() === ''){
    Swal.fire("!לא מולאו שדות חובה");
  }  
  else{
  this._recipeService.addRecipe(this.recipe).subscribe({
      next: (res) => {
        console.log('Response:', res);
        Swal.fire({
          title: "Good job!",
          text: "!המתכון נשמר בהצלחה",
          icon: "success",
          customClass: {
            icon: 'custom-icon-color' 
          }
        });
        this.route.navigate(['']);
      },
      error: (err) => {
        console.log('Error:', err);
      }
    });
  }
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