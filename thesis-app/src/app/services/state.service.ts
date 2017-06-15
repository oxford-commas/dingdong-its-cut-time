import { Injectable, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
import { MessageService } from './message.service';
import { BookingService } from './booking.service';
import { RequestService } from './request.service';

let customerProfile;

@Injectable()
export class StateService implements OnDestroy {

  constructor(
    private messageService: MessageService,
    private bookingService: BookingService,
    private requestService: RequestService
  ) {}

  private fetchMessageIntervalId;
  private fetchDueBookingsIntervalId;
  private fetchConfirmedBookingsIntervalId;
  private fetchPendingBookingsIntervalId;
  private alive: boolean = true;

  ngOnDestroy() {
    this.alive = false;
  }

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

    this.fetchMessageIntervalId = setInterval(() => {
      this.messageService.getMessages(stylist.id)
        .takeWhile(() => this.alive)
        .subscribe(
          data => {
            if (data[0]) {
              data[0].messages = data[0].messages.sort((a, b) => a.id - b.id);
            }
            customerProfile.messages = data;
          },
          err => console.log(err)
        );
      }, 2000);

    this.fetchDueBookingsIntervalId = setInterval(() => {
      this.bookingService.fetchDueBookings(stylist.id, stylist.type)
        .takeWhile(() => this.alive)
        .subscribe(
          data => customerProfile.dueBookings = data,
          err => console.log(err)
        );
      }, 2000);

    this.fetchConfirmedBookingsIntervalId = setInterval(() => {
      this.bookingService.fetchConfirmedBookings(stylist.id, stylist.type)
        .takeWhile(() => this.alive)
        .subscribe(
          data => customerProfile.confirmedBookings = data,
          err => console.log(err)
        );
      }, 2000);

    this.fetchPendingBookingsIntervalId = setInterval(() => {
      this.bookingService.fetchPendingBookings(stylist.id, stylist.type)
        .takeWhile(() => this.alive)
        .subscribe(
          data => customerProfile.pendingBookings = data,
          err => console.log(err)
        );
      }, 2000);
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

  logout() {
    clearInterval(this.fetchMessageIntervalId);
    clearInterval(this.fetchDueBookingsIntervalId);
    clearInterval(this.fetchConfirmedBookingsIntervalId);
    clearInterval(this.fetchPendingBookingsIntervalId);
    customerProfile = null;
  }

}