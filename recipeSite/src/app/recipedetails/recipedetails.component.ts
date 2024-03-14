import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import {MatDialog,} from '@angular/material/dialog';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import {MatButtonModule} from '@angular/material/button';
import { DurationPipe } from '../duration.pipe';
@Component({
    selector: 'app-recipedetails',
    standalone: true,
    templateUrl: './recipedetails.component.html',
    styleUrls: ['./recipedetails.component.css'],
    imports: [
        MatCardModule,
        RatingModule,
        FormsModule,
        MatIcon,
        CommonModule,
        AvatarModule,
        MatButtonModule,
        DurationPipe
    ]
})
export class RecipedetailsComponent {
  
  recipeDetails: Recipe = {
    id: 0,
    name: "",
    categoryId: 0,
    preparationTimeInMinutes: 0,
    difficultyLevel: 0,
    dateAdded: new Date(2000, 0, 1),
    ingredients: [],
    preparationMethod: "",
    userId: 0,
    image: ""
  };

  constructor(
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
    private _recipeservice: RecipeService,
    public dialog:MatDialog
  ) {
    const serializedRecipe = this.route.snapshot.queryParamMap.get('recipe');
    if (serializedRecipe) {
      try {
        this.recipeDetails = JSON.parse(serializedRecipe);
      } catch (error) {
        console.error('Error parsing recipe object:', error);
      }
    }
  }
  openDialog(recipe:Recipe,enterAnimationDuration: string, exitAnimationDuration: string): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const id = user.id;
     if(id==recipe.userId) {
      this.dialog.open(EditRecipeComponent, {
        maxWidth: '800px',
        maxHeight:'600px',
        data: { recipe },
        enterAnimationDuration,
        exitAnimationDuration,
      });
     }
    }
    
  }
}