import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollegeStudentComponent } from '../college-student/college-student.component';

const appRoutes: Routes = [
  { path: 'college_student', component: CollegeStudentComponent }
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
