import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  constructor(private router: Router){}

  isHomePage():boolean{
    // console.log(this.router.url == '/home');
    return this.router.url == '/home';
  }
  

}
