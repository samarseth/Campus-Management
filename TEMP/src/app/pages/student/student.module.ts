import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {InputTextModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms'
import {FileUploadModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule, InputTextModule, DropdownModule, FormsModule, FileUploadModule, RadioButtonModule
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
