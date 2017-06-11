import { Component } from '@angular/core';

import { StateService } from '../../../services';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(private stateService: StateService) {
    console.log('lanidng component init: ', this.profile);
  }

  public profile = this.stateService.retrieveCustomer();
}