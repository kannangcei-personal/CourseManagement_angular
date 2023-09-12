import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginAuthService } from './login-auth.service';
import { HttpClientModule} from '@angular/common/http';
import { NavicationHomeComponent } from './homepage/navication-home/navication-home.component';
import { CourselistComponent } from './courselist/courselist.component';
import { AddcourseComponent } from './courselist/addcourse/addcourse.component';
import { SearchComponent } from './courselist/search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectedcourseComponent } from './courselist/selectedcourse/selectedcourse.component';
import { QuizComponent } from './courselist/quiz/quiz.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { ContactComponent } from './contact/contact.component';
import { loginGuard } from './login.guard';
import { GenerateCertComponent } from './generate-cert/generate-cert.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const approute : Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginpageComponent},
  {path:'home',component:AppComponent},
  {path:'signup',component:SignupComponent},
  {path:'homepage',component:HomepageComponent,canActivate:[loginGuard]},
  {path:'courses',component:CourselistComponent,canActivate:[loginGuard]},
  {path:'addcourse',component:AddcourseComponent,canActivate:[loginGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[loginGuard]},
  {path:'selectcourse/:id',component:SelectedcourseComponent},
  {path:'selectcourse',component:SelectedcourseComponent},
  {path:'quiz',component:QuizComponent},
  {path:'board',component:WhiteboardComponent},
  {path:'contact',component:ContactComponent},
  {path:'certificate',component:GenerateCertComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    NavbarComponent,
    SignupComponent,
    HomepageComponent,
    NavicationHomeComponent,
    CourselistComponent,
    AddcourseComponent,
    SearchComponent,
    ProfileComponent,
    SelectedcourseComponent,
    QuizComponent,
    WhiteboardComponent,
    ContactComponent,
    GenerateCertComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(approute),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
