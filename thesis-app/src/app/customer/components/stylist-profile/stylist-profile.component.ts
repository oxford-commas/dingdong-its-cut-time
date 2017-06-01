import { Component, Input } from '@angular/core';

import { RequestService } from '../../../services';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist.profile.component.css']
})
export class StylistProfileComponent {
  constructor(private _requestService: RequestService) {
    // this.stylistProfile = _requestService.getStylistById(this.stylistId).subscribe();
    this.stylistProfile = { // example stylist data
      id: 0,
      type: 0,
      name: 'Andrew',
      password: 'lol',
      billingaddress: '123 main street',
      phonenumber: '999 999 9999',
      email: 'momo@hotmail.com',
      longitude: 3,
      latitude: 3,
      site_url: 'www.mysite.com',
      gender: 'female',
      image_url: 'https://qph.ec.quoracdn.net/main-qimg-3b0b70b336bbae35853994ce0aa25013-c'
    };
    console.log('initializing stylistProfile: ', this.stylistProfile);
  }

  @Input() private stylistId: number;

  public stylistProfile: any; // TODO: interface this
  public isShowModal: boolean = false;

  public toggleModal() {
    console.log(this.isShowModal, 'here')
    this.isShowModal = !this.isShowModal;
  }

  public submitMessage(message) {
    console.log('submit message ', message);
  }
}