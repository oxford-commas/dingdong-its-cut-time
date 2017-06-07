import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

let customerProfile;

@Injectable()
export class StateService {

  constructor(private messageService: MessageService) {}

  addCustomer(stylist) {
    customerProfile = {
      billingaddress: stylist.billingaddress,
      email: stylist.email,
      gender: stylist.gender,
      id: stylist.id,
      image_url: stylist.image_url,
      latitude: stylist.latitude,
      longitude: stylist.longitude,
      name: stylist.name,
      password: stylist.password,
      phonenumber: stylist.phonenumber,
      site_url: stylist.site_url,
      type: stylist.type
    };

    this.messageService.getMessages(stylist.id)
      .subscribe(
        data => customerProfile.messages = data,
        err => console.log(err)
      );
  }

  retrieveCustomer() {
    return customerProfile;
  }

}