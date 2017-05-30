import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './root.routes';

import { RegistrationModule } from '../registration/registration.module';
import { CustomerModule } from '../customer/customer.module';

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
    RegistrationModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
