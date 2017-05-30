import { Component, Input } from '@angular/core';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html'
})
export class StylistProfileComponent {
  constructor() {
    console.log('make GET request for this stylist with stylist ID', this.stylistId, ' and assign to stylistProfile', this.stylistProfile);
  }

  @Input() private stylistId: number;

  public stylistProfile: any; // TODO: interface this

  handleRequestCut() {

  }
}