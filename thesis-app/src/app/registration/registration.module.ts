import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

import { StateService } from '../services';

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
    FormBuilder,
    StateService
  ]
})

export class RegistrationModule {}