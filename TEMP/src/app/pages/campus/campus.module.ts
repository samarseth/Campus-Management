import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus.component';
import {DropdownModule} from 'primeng/primeng'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {TooltipModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {CollegeYearService} from '../../services/college-year/college-year.service';
import {HttpModule} from '@angular/http';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    TooltipModule,
    DialogModule,
    HttpModule,
    GrowlModule
  ],
  declarations: [CampusComponent],
  providers: [CollegeYearService]
})
export class CampusModule { }
