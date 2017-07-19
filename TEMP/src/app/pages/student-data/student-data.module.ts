import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data.component';
import {DataTableModule, InputTextModule, ButtonModule, OverlayPanelModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

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
  ],
  declarations: [StudentDataComponent]
})
export class StudentDataModule { }
