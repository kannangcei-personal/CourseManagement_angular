import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  constructor(private fb:FormBuilder,private courseservice:CourseServiceService,private router:Router,private toastr:ToastrService){}

  addcourseform =this.fb.group({
    title:['',Validators.required],
    description:['',Validators.required],
    author:['',Validators.required],
    cost:['',Validators.required]
  })

  addcourse(){
    console.log(this.addcourseform.value);
    this.courseservice.addcourse(this.addcourseform.value).subscribe(
      response => {
       if(response.status === true){
        this.toastr.success("course added successfully!","Success");
        this.router.navigate(['/courses'])
       }else{
        this.toastr.error("Course not Added!","Error");
       }
      }
      
      
    )
  }

}
