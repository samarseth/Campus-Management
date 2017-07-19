import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './pages/routing/app.routing.module';
import { CollegeStudentModule } from './pages/college-student/college-student.module';
import {ButtonModule} from 'primeng/primeng';
import {RouterModule, Routes} from '@angular/router';
import {CampusComponent} from './pages/campus/campus.component';
import {CampusModule} from './pages/campus/campus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CollegeStudentComponent} from './pages/college-student/college-student.component';
import {StudentComponent} from './pages/student/student.component';
import {StudentModule} from './pages/student/student.module';
import { StudentDataComponent } from './pages/student-data/student-data.component';
import {StudentDataModule} from './pages/student-data/student-data.module'


const appRoutes: Routes = [
  { path: 'campusmaintenance', component: CampusComponent },
  { path: 'collegestudent', component: CollegeStudentComponent },
  { path: 'student', component: StudentComponent },
  {path: 'studentdata', component: StudentDataComponent}
];






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeStudentModule,
    BrowserAnimationsModule,
    StudentModule,
    CampusModule,
    ButtonModule,
    StudentDataModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
