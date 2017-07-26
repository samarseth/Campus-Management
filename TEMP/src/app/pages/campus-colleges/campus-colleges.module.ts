import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusCollegesComponent } from './campus-colleges.component';
import {DataTableModule, InputTextModule, ButtonModule, OverlayPanelModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
import {CollegeYearService} from '../../services/college-year/college-year.service';
import {ServiceUtilsService} from '../../utils/services/service-utils/service-utils.service';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DataTableModule,
    FormsModule,
    ButtonModule,
    SharedModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    DropdownModule
  ],
  declarations: [CampusCollegesComponent],
  providers: [CollegeYearService, ServiceUtilsService]
})
export class CampusCollegesModule { }
