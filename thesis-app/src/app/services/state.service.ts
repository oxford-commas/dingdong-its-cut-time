import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  customerProfile = [
  ];

  constructor() {}

  addCustomer(stylist: any) {
    this.customerProfile.push({
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
    });
  }

}