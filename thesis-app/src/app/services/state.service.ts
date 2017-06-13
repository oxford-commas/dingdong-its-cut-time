import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { BookingService } from './booking.service';
import { RequestService } from './request.service';

let customerProfile;

@Injectable()
export class StateService {

  constructor(
    private messageService: MessageService,
    private bookingService: BookingService,
    private requestService: RequestService
  ) {}

  addCustomer(stylist) {
    console.log('state service initialization: ', stylist);
    customerProfile = {
      billingaddress: stylist.billingaddress,
      email: stylist.email,
      gender: stylist.gender,
      id: stylist.id,
      image_url: 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png',
      latitude: stylist.latitude,
      longitude: stylist.longitude,
      name: stylist.name,
      password: stylist.password,
      phonenumber: stylist.phonenumber,
      site_url: stylist.site_url,
      type: stylist.type,
      aboutMe: stylist.aboutMe
    };

    // this.requestService.getUserImg(stylist.id)
    //   .subscribe(
    //     data => customerProfile.image_url = data.url,
    //     err => console.log(err)
    //   );

    this.messageService.getMessages(stylist.id)
      .subscribe(
        data => customerProfile.messages = data,
        err => console.log(err)
      );

    this.bookingService.fetchDueBookings(stylist.id, stylist.type)
      .subscribe(
        data => customerProfile.dueBookings = data,
        err => console.log(err)
      );

    this.bookingService.fetchConfirmedBookings(stylist.id, stylist.type)
      .subscribe(
        data => customerProfile.confirmedBookings = data,
        err => console.log(err)
      );

    this.bookingService.fetchPendingBookings(stylist.id, stylist.type)
      .subscribe(
        data => customerProfile.pendingBookings = data,
        err => console.log(err)
      );
  }

  retrieveCustomer() {
    return customerProfile;
  }

  updateCustomer(updates) {
    customerProfile = {
      ...customerProfile,
      ...updates
    };
    this.addCustomer(customerProfile);
  }

}