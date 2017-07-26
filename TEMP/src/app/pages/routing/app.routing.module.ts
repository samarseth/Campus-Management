import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollegeStudentComponent } from '../college-student/college-student.component';
import { CampusComponent } from '../campus/campus.component';
import { StudentComponent } from '../student/student.component';
import {CampusCollegesComponent} from '../campus-colleges/campus-colleges.component';
import {StudentDataComponent} from '../student-data/student-data.component';

const appRoutes: Routes = [

  { path: 'campusmaintenance', component: CampusComponent },
  { path: 'collegestudent', component: CollegeStudentComponent },
  { path: 'collegestudent/:token', component: CollegeStudentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'campuscollege', component: CampusCollegesComponent },
  { path: 'studentdata', component: StudentDataComponent }
  //   {
  //     path: 'heroes',
  //     component: HeroListComponent,
  //     data: { title: 'Heroes List' }
  //   },
  //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
