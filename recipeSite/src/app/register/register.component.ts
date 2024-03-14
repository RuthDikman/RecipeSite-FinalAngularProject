import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Note the change to MatFormFieldModule
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Dialog } from '@material-ui/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
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
    ToastModule,
    ConfirmDialogModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public name!:string;
 public user!:User
  constructor(private route: ActivatedRoute,private router: Router,private _userservice:UserService,private dialogRef: MatDialogRef<RegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    const tempname = this.data.name;
    this.name=tempname!==null?tempname:'';
    console.log('Name:', tempname);
}
ngOnInit(): void {
}
  confirm(username: string ,userpassword: string,useremail:string,useraddres:string) {
    if(!username || username.trim() === ''||!userpassword || userpassword.trim() === ''||!useremail || useremail.trim() === ''||!useraddres || useraddres.trim() === ''){
      Swal.fire("!לא מולאו שדות חובה");
    }
    else{
    this.user={name:username, password:userpassword,email:useremail,address:useraddres , id:0}
    this._userservice.getUser(username).subscribe({
      next: (res)=>{
        if(res&&res.name){
          Swal.fire({
            icon: "error",
            text: "השם מופיע במערכת, לא ניתן להרשם שנית",
          });
        }
      else{
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
          title: "שמירה",
          text: "?האם אתה בטוח שברצונך לשמור את הפרטים במערכת",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#df7f7f",
          cancelButtonColor: "#787878",
          confirmButtonText: "שמירה",
          cancelButtonText: "ביטול",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "שמירה",
              text: "הפרטים נשמרים במערכת",
              icon: "success",
              timer:1000,
            });
            this._userservice.adduser(this.user).subscribe({
              next: (res) => {
                if(res&&res.id!=null)
                localStorage.setItem("user",JSON.stringify({name:username,id:res.id}))
              },
              error: (err) => {
                console.log('Error:', err);
              }
            });
            this.router.navigate([''])
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "ביטול",
              text: "הפרטים לא נשמרו במערכת",
              icon: "error"
            });
            this.router.navigate([''])
          }
        });
        this.dialogRef.close();
      }},

      error:(err)=>{
        console.log(username)
      }
  });
  }
}
}