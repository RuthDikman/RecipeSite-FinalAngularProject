import { Component, Input} from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { Recipe } from '../recipe.model';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DurationPipe } from '../duration.pipe';
@Component({
  selector: 'app-small-recipe',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AvatarGroupModule,
    AvatarModule,
    MatIcon,
    DurationPipe
  ],
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent{

  constructor(private route:Router) { }
  @Input() recipe!: Recipe;
  details(){
    const user = localStorage.getItem('user');
    if (user) {
      const serializedUserData = JSON.stringify(this.recipe);
      this.route.navigate(['/recipedetails'], { queryParams: { recipe:serializedUserData } });
    }
    else{
      Swal.fire({
        title: "משתמש יקר",
        text: "אין אפשרות לצפות בפרטי מתכון לפני ביצוע כניסה למערכת",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "כניסה"
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(['/signin']);
        }
      });
    }
  }
}