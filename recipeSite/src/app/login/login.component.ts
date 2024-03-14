import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user.model';
import { UserService } from '../user.service';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
    CommonModule,
    ButtonModule,
    MessageModule,
    MessagesModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent{
public user!:User
constructor(private _userService:UserService, private route:Router) { }


checkUserExists(username: string ,userpassword: string){
  if(!username || username.trim() === ''||!userpassword || userpassword.trim() === ''){
    Swal.fire("חובה למלא את כל השדות");
  }
  else{
    this._userService.getUser(username).subscribe({
      next: (res)=>{
        if(res&&res.name){
          this.user=res;
        if(this.user.password==userpassword){
          localStorage.setItem("user",JSON.stringify({name:username,id:this.user.id}))
          this.route.navigate([''])
        }
        else{
          Swal.fire({
            icon: "error",
            text: "סיסמה שגויה",
          });
        }
        console.log(this.user)}
      else{
        this.route.navigate(['/signup'], { queryParams: { name: username } })
      }},
      error:(err)=>{
        console.log(username)
      }
  });
  }
}
signin(){
  this.route.navigate(['/signup']);
}
add(){
  this.route.navigate(['/addrecipe']);
}
}