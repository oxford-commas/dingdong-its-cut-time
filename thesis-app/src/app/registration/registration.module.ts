import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent,
  RegistrationHeaderComponent,
  SignUpStylistFormComponent,
  SignUpFormComponent
} from './components';


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent,
    RegistrationHeaderComponent,
    SignUpStylistFormComponent,
    SignUpFormComponent
  ],
  providers: [
    FormBuilder
  ]
})

export class RegistrationModule {}