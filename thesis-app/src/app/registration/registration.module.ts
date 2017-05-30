import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent,
  SignUpButtonComponent,
  SignUpCustomerFormComponent,
  RegistrationHeaderComponent,
  SignUpStylistFormComponent
} from './components';


@NgModule({
  imports: [
    RouterModule,
    FormsModule
  ],
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent,
    SignUpButtonComponent,
    SignUpCustomerFormComponent,
    RegistrationHeaderComponent,
    SignUpStylistFormComponent
  ],
  exports: [
    SignInFormComponent
  ]
})

export class RegistrationModule {

}