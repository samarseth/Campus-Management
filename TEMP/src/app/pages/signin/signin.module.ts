import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin.component';
import {InputTextModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule, InputTextModule, FormsModule, PasswordModule, TooltipModule, ButtonModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
