import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent,
  SignUpButtonComponent,
  SignUpCustomerFormComponent,
  RegistrationHeaderComponent
} from './components';


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent,
    SignUpButtonComponent,
    SignUpCustomerFormComponent,
    RegistrationHeaderComponent
  ],
  exports: [
    SignInFormComponent
  ]
})

export class RegistrationModule {

}