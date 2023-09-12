import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { LoginAuthService } from '../login-auth.service';
import { Router } from '@angular/router';
import { LoginauthService } from '../loginauth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent {

  loginForm = this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",Validators.required]
  })


  constructor(private fb:FormBuilder, private loginservice: LoginAuthService, private router:Router,private loginServiceGurd :LoginauthService,private toastr:ToastrService){
  }

  submitted:boolean = false;

  onSubmit(){

  
    console.log(this.loginForm);
    this.loginservice.authenticate(this.loginForm.value).subscribe(
      response => {
        console.log((response));
        if(response.body.status === true){
        
          this.toastr.success("Login Successfully","Success",{closeButton:true,timeOut:3000});
        

          this.loginServiceGurd.loginsuccess();
          this.router.navigate(['/homepage'])

        }else{
           this.toastr.error("Login Failed","Error",{closeButton:true});

        }

      }
    )
  
}


get loginController() {
  return this.loginForm.controls;
}

}
