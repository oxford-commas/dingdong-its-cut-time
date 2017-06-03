import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  stylistProfile = [
  ];

  constructor() {}

  addStylist(
    billingaddress: string,
    email: string,
    gender: any,
    id: number,
    image_url: string,
    latitude: number,
    longitude: number,
    name: string,
    password: string,
    phonenumber: string,
    site_url: string,
    type: number
    ) {
    this.stylistProfile.push({
      billingaddress: billingaddress,
      email: email,
      gender: gender,
      id: id,
      image_url: image_url,
      latitude: latitude,
      longitude: longitude,
      name: name,
      password: password,
      phonenumber: phonenumber,
      site_url: site_url,
      type: type
    });
  }

}