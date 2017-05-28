import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './root.routes';

import { RegistrationModule } from '../registration/registration.module';

import { RootComponent } from './components';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    RegistrationModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
