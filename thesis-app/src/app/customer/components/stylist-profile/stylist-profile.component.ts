import { Component, Input } from '@angular/core';

import { RequestService } from '../../../services';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html'
})
export class StylistProfileComponent {
  constructor(private _requestService: RequestService) {
    // this.stylistProfile = _requestService.getStylistById(this.stylistId).subscribe();
    this.stylistProfile = { // example stylist data
      id: 0,
      type: 0,
      name: 'Momo',
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

  public showModal() {
    this.isShowModal = true;
  }

  public hideModal() {
    this.isShowModal = false;
  }
}

// `id` INTEGER NOT NULL AUTO_INCREMENT,
//   `type` INTEGER NOT NULL,
//   `name` VARCHAR(35) NOT NULL,
//   `password` VARCHAR(35) NOT NULL,
//   `billingaddress` TEXT DEFAULT NULL,
//   `phonenumber` VARCHAR(30) DEFAULT NULL,
//   `email` VARCHAR(30) DEFAULT NULL,
//   `longitude` DOUBLE DEFAULT NULL,
//   `latitude` DOUBLE DEFAULT NULL,
//   `site_url` VARCHAR(35) DEFAULT NULL,
//   `gender` VARCHAR(8) DEFAULT NULL,
//   `image_url` VARCHAR(45) DEFAULT NULL,