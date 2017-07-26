import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data.component';
import {DataTableModule, InputTextModule, ButtonModule, OverlayPanelModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {ServiceUtilsService} from '../../utils/services/service-utils/service-utils.service';
import {CollegeService} from '../../services/college/college.service';
import {StudentService} from '../../services/student/student.service';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DataTableModule,
    FormsModule,
    ButtonModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    DropdownModule,
    ToggleButtonModule,
    CheckboxModule
  ],
  declarations: [StudentDataComponent],
  providers: [ServiceUtilsService, CollegeService, StudentService]
})
export class StudentDataModule { }
