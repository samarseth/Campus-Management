import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeStudentComponent } from './college-student.component';
import {DataTableModule, InputTextModule, ButtonModule, OverlayPanelModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DataTableModule,
    FormsModule,
    ButtonModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  declarations: [CollegeStudentComponent]
})
export class CollegeStudentModule { }
