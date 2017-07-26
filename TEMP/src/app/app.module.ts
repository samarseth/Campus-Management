import { TokenManager } from './utils/token-manager';
import { AbstractService } from './services/abstract/abstract.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './pages/routing/app.routing.module';
import { CollegeStudentModule } from './pages/college-student/college-student.module';
import {ButtonModule} from 'primeng/primeng';
// import {RouterModule, Routes} from '@angular/router';
import {CampusModule} from './pages/campus/campus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StudentModule} from './pages/student/student.module';
// import {CollegeYearService} from './services/college-year/college-year.service';
import {CampusCollegesModule} from './pages/campus-colleges/campus-colleges.module';
import {StudentDataModule} from './pages/student-data/student-data.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeStudentModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentModule,
    CampusModule,
    ButtonModule,
    CampusCollegesModule,
    StudentDataModule
  ],
  providers: [AbstractService, TokenManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
