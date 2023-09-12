import { Component, OnInit } from '@angular/core';
import { LoginAuthService, UserInfo } from '../login-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginauthService } from '../loginauth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{




  edit:boolean = false;
  changepwd:boolean=true;
  responseStatus!:boolean;


  ngOnInit(): void {

    this.userinfoservice.getUserInfo().subscribe((userInfo: UserInfo) => {
      this.currentuser = userInfo; // Assign the fetched user info to currentuser
     });
    console.log(this.currentuser)


  }


  profileForm!: FormGroup;
  



  constructor(private fb: FormBuilder,private userinfoservice:LoginAuthService,private router:Router,private loginservice:LoginauthService,private toastr:ToastrService) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      hobbies: [''],
      job: [''],
      skill: [''],
    });
  }

  
  passwordchange = this.fb.group({
    currentpassword:['',Validators.required],
    newpassword:['',Validators.required]
  });

  

    onsubmitpasschange(){
      console.log(this.passwordchange.value);

      this.userinfoservice.updatepassword(this.passwordchange.value).subscribe(
        response =>{
          console.log(response);
         this.responseStatus=response.status;
         console.log(this.responseStatus);

        
         if(this.responseStatus == true){
          this.toastr.success("Password Changed!","Success",{closeButton:true});

          setTimeout(() => {
            window.location.reload();
          }, 3000);

         }else{
            this.toastr.error("Current Password is not Matched!","Error",{closeButton:true});
         }
      

        }
      )
      
    }


  currentuser!:UserInfo;

  loadagain():void{
    this.userinfoservice.getUserInfo().subscribe((userInfo: UserInfo) => {
      this.currentuser = userInfo; // Assign the fetched user info to currentuser
     });
    console.log(this.currentuser)
  }


  editenable(){
    this.edit = true;
  }
  changepass(){
    this.changepwd=false;
  }


  onSubmit(){
    console.log(this.profileForm.value);

    this.userinfoservice.updateProfile(this.profileForm.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success("Profile Updated Successfully","Success");
        window.location.reload();
      }
    )
  }

  logout(){

    this.toastr.success("Logout Successfully !","Success",{closeButton:true});
    
    this.router.navigate(["/login"]);
    this.loginservice.logoutSuccess();

  }


  



}
