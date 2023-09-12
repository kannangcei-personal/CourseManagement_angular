import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDTO, CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent implements OnInit {


  constructor(private acroute:ActivatedRoute,private courseService:CourseServiceService){}

  courseID!:any;

  value:boolean= false;
  

  // course values
  coursetitle!:string;
  courseDescription!:string;


  ngOnInit(): void {
  
    this.acroute.paramMap.subscribe(
      (router) => {
        this.courseID =router.get('id')
      }
    )

    console.log(this.courseID);
   
    this.courseService.getCourseByID("http://localhost:8080/api/course/"+this.courseID).subscribe(
      response =>{
        console.log(response);
        console.log(response.title);
        this.coursetitle = response.title;
        this.courseDescription = response.description;
      }
    )

  }

  selectedItem: any | null = null;
  @Input()
  course:any;

  selectItem(item: any) {
    this.selectedItem = item;
      this.value = true;
      
  }


  


   listmodules =[
    {id:1, name:"Introduction"},
    {id:2, name:"Overall Modules"},
    {id:3, name:"Install tools"},
    {id:4, name:"Project"}
  ]


}
