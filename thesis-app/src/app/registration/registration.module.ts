import { NgModule } from '@angular/core';

import {
  SignInFormComponent,
  SignInInputComponent,
  UsernamePasswordComponent
} from './components';


@NgModule({
  declarations: [
    SignInFormComponent,
    SignInInputComponent,
    UsernamePasswordComponent
  ],
  exports: [
    SignInFormComponent
  ]
})

export class RegistrationModule {

}