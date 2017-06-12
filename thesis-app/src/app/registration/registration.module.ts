import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

import { StateService } from '../services';

import {
  ErrorFormsComponent,
  RegistrationHeaderComponent,
  SignInFormComponent,
  SignInInputComponent,
  SignUpStylistFormComponent,
  SignUpFormComponent,
  SignupUserComponent,
  SignupStylistComponent,
  UsernamePasswordComponent
} from './components';


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ErrorFormsComponent,
    RegistrationHeaderComponent,
    SignInFormComponent,
    SignInInputComponent,
    SignUpStylistFormComponent,
    SignUpFormComponent,
    SignupUserComponent,
    SignupStylistComponent,
    UsernamePasswordComponent
  ],
  providers: [
    FormBuilder,
    StateService
  ]
})

export class RegistrationModule {}