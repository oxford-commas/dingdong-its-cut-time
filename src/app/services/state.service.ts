import { Injectable, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
import { MessageService } from './message.service';
import { BookingService } from './booking.service';
import { RequestService } from './request.service';
import { StylistStylesService } from './stylistStyles.service';
let customerProfile;

@Injectable()
export class StateService implements OnDestroy {
  constructor(
    private messageService: MessageService,
    private bookingService: BookingService,
    private requestService: RequestService,
    private stylistStylesService: StylistStylesService
  ) {}

  private fetchMessageIntervalId;
  private fetchDueBookingsIntervalId;
  private fetchConfirmedBookingsIntervalId;
  private fetchPendingBookingsIntervalId;
  private fetchHistoryBookingsIntervalId;
  private alive: boolean = true;

  ngOnDestroy() {
    this.alive = false;
  }

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
      type: stylist.type,
      aboutMe: stylist.aboutMe
    };

    this.stylistStylesService.fetchStyles(stylist.id)
      .subscribe(
        data => customerProfile.styles = data,
        err => console.log(err)
      );

    this.fetchMessageIntervalId = setInterval(() => this.messageTimer(stylist.id), 10000);
    this.fetchDueBookingsIntervalId = setInterval(() => this.dueBookingTimer(stylist.id, stylist.type), 10000);
    this.fetchConfirmedBookingsIntervalId = setInterval(() => this.confirmedBookingTimer(stylist.id, stylist.type), 10000);
    this.fetchPendingBookingsIntervalId = setInterval(() => this.pendingBookingTimer(stylist.id, stylist.type), 10000);
    this.fetchHistoryBookingsIntervalId = setInterval(() => this.historyBookingTimer(stylist.id, stylist.type), 10000);
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
    clearInterval(this.fetchHistoryBookingsIntervalId);
    customerProfile = {};
  }
  messageTimer(id) {
    this.messageService.getMessages(id)
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
  }
  dueBookingTimer(id, type) {
    this.bookingService.fetchDueBookings(id, type)
      .takeWhile(() => this.alive)
      .subscribe(
        data => customerProfile.dueBookings = data,
        err => console.log(err)
      );
  }
  confirmedBookingTimer(id, type) {
    this.bookingService.fetchConfirmedBookings(id, type)
      .takeWhile(() => this.alive)
      .subscribe(
        data => customerProfile.confirmedBookings = data,
        err => console.log(err)
      );
  }
  pendingBookingTimer(id, type) {
    this.bookingService.fetchPendingBookings(id, type)
      .takeWhile(() => this.alive)
      .subscribe(
        data => customerProfile.pendingBookings = data,
        err => console.log(err)
      );
  }
  historyBookingTimer(id, type) {
    this.bookingService.fetchHistoryBookings(id, type)
      .takeWhile(() => this.alive)
      .subscribe(
        data => customerProfile.historyBookings = data,
        err => console.log(err)
      );
  }
}