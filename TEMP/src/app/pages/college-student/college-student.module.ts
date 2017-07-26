import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule, DataTableModule, InputTextModule, ButtonModule, OverlayPanelModule, TooltipModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/primeng';
import { CollegeYearService } from '../../services/college-year/college-year.service';
import { CollegeStudentComponent } from './college-student.component';
import { AbstractService } from '../../services/abstract/abstract.service';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DataTableModule,
    CalendarModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    TooltipModule
  ],
  declarations: [CollegeStudentComponent],
  providers : [CollegeYearService]
})
export class CollegeStudentModule { }
