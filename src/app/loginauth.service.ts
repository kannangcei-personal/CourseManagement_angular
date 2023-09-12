import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {

  constructor() { 
  }

  private login:boolean=false;


  loginsuccess(){
  
    localStorage.setItem('login','true')
  }
   getlogin() : boolean{
    if(localStorage.getItem('login') == null){
      return false
    }else{
      return true
    }
  }

  logoutSuccess(){
    localStorage.removeItem('login');
  }
  

}
