import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) { }


  getAllCourse():Observable<any>{
    return this.http.get("http://localhost:8080/api/course");
  }




  addcourse(form:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/course/create",form);
  }


  getCourseByID(url:string):Observable<any>{
    return this.http.get(url);
  }
  


}

export class CourseDTO{

  id!:number;
  title!:String;
  author!:String;
  description!:string;
  cost!:number;
  rateing!:number;

}