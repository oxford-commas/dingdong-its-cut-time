import { Component } from '@angular/core';

import { StateService } from '../../../services';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  constructor(private stateService: StateService) {}
}