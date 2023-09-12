import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  Courses: any;


  constructor(private courseserivce:CourseServiceService){
  }


  enteredstring:string='';

  @Output()
  searchtextchanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchtextchanged.emit(this.enteredstring);
  }
  

}

