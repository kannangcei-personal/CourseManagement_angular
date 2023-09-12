import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { signup } from './signup/signup.component';
import { Observable } from 'rxjs';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }


   

    Storedetails(form:any):Observable<any>{
      // console.log(form);

     const headers = new HttpHeaders();
     headers.append('Content-Type', 'application/json');
     return this.http.post("http://localhost:8080/api/signup",form,{headers:headers,observe:"response"});    

    }

    emailexistcheck(form:any):Observable<any>{

      return this.http.post('http://localhost:8080/api/emailcheck',form);

    }


    authenticate(form:any):Observable<any>{
      console.log("Authenticate");
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post("http://localhost:8080/api/login",form,{headers:headers,observe:"response"});
    }

    getUserInfo():Observable<any>{
      console.log("Calling user info");
      return this.http.get<UserInfo>('http://localhost:8080/api/getuserinfo');
    }

    updateProfile(userform:any):Observable<any>{
      return this.http.put('http://localhost:8080/api/updateprofile',userform);
    }

    updatepassword(passwordForm:any):Observable<any>{
      return this.http.post('http://localhost:8080/api/changepassword',passwordForm);
    }


    saveContactForm(contactFrom:any):Observable<any>{
     return this.http.post('http://localhost:8080/api/contact',contactFrom);
    }



    //toast


    showToast(toast: toastPayload) {
      this.toastr.show(
        toast.message,
        toast.title,
        toast.ic,
        'toast-' + toast.type
      );
}

  }

  export interface UserInfo{

    firstName:string;
    lastName:string;
    email:String;
    address:string;
    hobbies:string;
    job:String;
    skill:String;
  }
  export interface toastPayload {
    message: string;
    title: string;
    ic: IndividualConfig;
    type: string;
  }



