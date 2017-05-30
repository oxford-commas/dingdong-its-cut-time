import { Routes } from '@angular/router';

import { registrationRoutes } from '../registration/registration.routes';

// import routes a module's routes file and deconstruct here
export const rootRoutes: Routes = [
  ...registrationRoutes
]