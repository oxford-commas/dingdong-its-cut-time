import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  customerProfile = [
  ];

  // currentCustomerProfile: number;

  constructor() {}

  addCustomer(stylist: any)
  // (
  //   billingaddress: string,
  //   email: string,
  //   gender: any,
  //   id: number,
  //   image_url: string,
  //   latitude: number,
  //   longitude: number,
  //   name: string,
  //   password: string,
  //   phonenumber: string,
  //   site_url: string,
  //   type: number
  //   )
  {
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