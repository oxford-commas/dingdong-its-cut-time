import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent,
  SignUpButtonComponent
} from './components';


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent,
    SignUpButtonComponent
  ],
  exports: [
    SignInFormComponent
  ]
})

export class RegistrationModule {

}