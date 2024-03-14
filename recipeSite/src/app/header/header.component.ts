import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {AvatarModule} from 'primeng/avatar'
import {ButtonModule} from 'primeng/button';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule,AvatarModule,ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
dialogRef!: MatDialogRef<RegisterComponent>;
constructor(private route:Router,public dialog:MatDialog) {}

toAllRecipes(){
  this.route.navigate(['']);
}
toAddRecipe(){
  this.route.navigate(['/addrecipe']);
}
toSignin(){
this.route.navigate(['/signin']);
}
toSignup(){
  this.dialogRef=this.dialog.open(RegisterComponent, {
    maxWidth: '800px',
    maxHeight:'800px',
    data:{name:''}
 })   
}
logout(){
  Swal.fire({
    text: "לאחר היציאה לא תוכל עוד לבצע שינויים באתר",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#df7f7f",
    cancelButtonColor: "#787878",
    confirmButtonText: "יציאה"
  }).then((result) => {
    if (result.isConfirmed) {
      this.route.navigate(['']);
      const user = localStorage.getItem('user');
      if (user) {
        localStorage.removeItem('user');
      }
    }
  });
}
}