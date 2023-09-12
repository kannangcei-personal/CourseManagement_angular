import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginAuthService } from '../login-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {



  constructor(private fb:FormBuilder,private loginservice:LoginAuthService,private toastr:ToastrService){}

  contactform = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phoneNo:['',Validators.required],
    subject:[''],
    message:['',Validators.required]
  })


  contactFormStatus:any;


  sendContactForm(){

    console.log(this.contactform.value);
    this.loginservice.saveContactForm(this.contactform.value).subscribe(
      res => {
        this.contactFormStatus=res;
        if(this.contactFormStatus){
          this.toastr.success("Form Submitted!","Success",{closeButton:true});
          this.toastr.info("we will reach out to you shortly!");
        }else{
          this.toastr.error("Form not Submitted !","Failed",{closeButton:true});
        }
      }
    )

  }

}
