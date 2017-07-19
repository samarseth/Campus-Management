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
    DialogModule
  ],
  declarations: [CampusComponent]
})
export class CampusModule { }
