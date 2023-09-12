import { Component, Input } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  title:string = "Home page"

    constructor(private service:LoginAuthService){

    }


    auhors = [
      {name:"Jone Doe",description:"Testing",totalCourse:10,followers:500,image:"author-1.jpg"},
      {name:"Jony ",description:"Testing",totalCourse:20,followers:700,image:"author-2.jpg"},
      {name:"Jane Smith",description:"Testing",totalCourse:30,followers:600,image:"author-3.png"},
      {name:"Mike Johnson",description:"Testing",totalCourse:10,followers:500,image:"author-4.jpg"}
    ]


    

}
