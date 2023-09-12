import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginAuthService, toastPayload } from '../login-auth.service';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  signupForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[ Validators.required]],
    confirmPassword: ['', [Validators.required,this.matchingPasswordsValidator]]
  });
 

  submiited = false;

  constructor(private fb: FormBuilder,private loginservice :LoginAuthService ,private router: Router,private toastr: ToastrService ) {
    
  

  }


  responseRegister:any;
  emailexits:any;
  
    matchingPasswordsValidator(_control: FormControl){
      const password = _control.root.get('password')?.value;
      const confirmPassword = _control.value;
      
    if (password != confirmPassword) {
      return { 'passwordsMismatch': true };
    }
     return null;
    }
  

    get SignupFormController(){
      return this.signupForm.controls;
    }
    noSpaceAllowed(control:FormControl){
      if(control.value != null && control.value.indexOf(' ')!=-1){
        return{noSpaceAllowed:true};
      }
       return null;
    }



  OnRegister(){
    
    if(this.signupForm.valid){
     
      this.loginservice.emailexistcheck(this.signupForm.value).subscribe(
        response => {console.log(response)
          
        this.emailexits=response;
        if(this.emailexits){
          this.toastr.error("Email Already Exist","Error",{closeButton:true});
        }else{
          this.loginservice.Storedetails(this.signupForm.value).subscribe(response =>
            {
              const res1= response.body.status;          
              if (res1 === true) {
                this.toastr.success("Register Successfully!","Success",{closeButton:true});
      
                // 3 sec after that moves to login
                setTimeout(() => {
                  this.router.navigate(['/login']); 
                }, 3000);
                
              } else {
                this.router.navigate(['/signup']);
                this.toastr.error("Register failed","Error",{closeButton:true});
              }
            });
        } 

        }
        
      )

    
    }
    else{
      this.toastr.error("Register failed","Error",{closeButton:true});
    }
    
    
  }

}
export interface signup{

  firstName:string;
  lastName:string;
  email:string;
  password:string
}
