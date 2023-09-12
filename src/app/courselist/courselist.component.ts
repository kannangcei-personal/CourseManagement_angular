import { Component, Input, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{



  constructor(private courseservice: CourseServiceService){}


  Courses!: any[] ;  
  ngOnInit(): void {
   this.getAllCourses()
   
  }

  @Input() maxRating: number = 5;
  @Input() rating: number =4.5;

  get stars(): number[] {
    return Array.from({ length: this.maxRating }, (_, index) => index + 1);
  }

  searchText:string ='';


  
  onSearchTextEntered(searchvalue:string){

    this.searchText = searchvalue.toLowerCase();
  }



  getAllCourses(){
    this.courseservice.getAllCourse().subscribe(
    response => {
    this.Courses = response;
    }
    )

  }

  selectedCourseName!:string;


  sendcoursename(coursename:any){
    this.selectedCourseName =coursename
    console.log(this.selectedCourseName);
  }



}
