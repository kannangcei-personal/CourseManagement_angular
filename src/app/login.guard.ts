import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { LoginauthService } from './loginauth.service';

export const loginGuard: CanActivateFn = (route, state) => {

  if(inject(LoginauthService).getlogin() == true ){
    return true
  }else{
    inject(Router).navigate(['/login']);
    return false
  }
  // return true;
};
