import { Component, Input } from '@angular/core';

import { RequestService } from '../../../services';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html'
})
export class StylistProfileComponent {
  constructor(private _requestService: RequestService) {
    this.stylistProfile = _requestService.getStylistById(this.stylistId).subscribe();
    console.log('initializing stylistProfile: ', this.stylistProfile);
  }

  @Input() private stylistId: number;

  public stylistProfile: any; // TODO: interface this

  handleRequestCut() {

  }
}