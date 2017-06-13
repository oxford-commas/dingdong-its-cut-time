import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {
  RequestService,
  MessageService,
  BookingService,
  StateService,
  StylistStylesService } from '../../../services';

import { IMessage } from '../../interfaces';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist.profile.component.css']
})

export class StylistProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private messageService: MessageService,
    private bookingService: BookingService,
    private stateService: StateService,
    private stylistStylesService: StylistStylesService
  ) {}

  public isProfileFetched: boolean = false;
  public isStylesFetched: boolean = false;
  public stylistProfile: any; // TODO: interface this
  public styles: Array<string>;
  public isShowMessageModal: boolean = false;
  public isShowBookingModal: boolean = false;
  public modalStyle: string = 'none';
  private stylistId: number;

  ngOnInit() {
    this.route.params
      .subscribe(
        params => this.stylistId = +params['id'],
        err => console.log(err)
      );
    this.requestService.getStylistById(this.stylistId)
     .subscribe(
       data => {
        this.stylistProfile = data
        this.requestService.getUserImg(this.stylistProfile.id)
          .subscribe(
            response => {
              this.stylistProfile.image_url = response.url;
            }
          )
      },
       err => console.log(err),
       () => this.isProfileFetched = true
     );

   this.stylistStylesService.fetchStyles(this.stylistId)
     .subscribe(
       data => {this.styles = data;console.log(this.styles);},
       err => console.log(err),
       () => this.isStylesFetched = true
     );
  }

  public toggleMessageModal() {
    this.isShowMessageModal = !this.isShowMessageModal;
  }

  public toggleBookingModal() {
    this.isShowBookingModal = !this.isShowBookingModal;
  }

  public submitBooking(bookingForm) {
    let styles = [];
    for (var key in bookingForm) {
      if (bookingForm[key] === true) {
        styles.push(key);
      }
    }
    const booking = {
      id_users: this.stateService.retrieveCustomer().id,
      id_stylists: this.stylistId,
      isconfirmed: 0,
      isComplete: 0,
      date: bookingForm.date,
      time: bookingForm.time,
      location: bookingForm.location,
      detail: bookingForm.detail,
      styles: styles
    };
    this.bookingService.addBooking(booking)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    this.stateService.updateCustomer(null);
    this.isShowBookingModal = false;
  }

  public getStyle() {
    if (this.isShowMessageModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public getBookingModalStyle() {
    if (this.isShowBookingModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public submitMessage(messageForm) {
    const message = {
      id_sender: this.stateService.retrieveCustomer().id,
      id_recipient: this.stylistId,
      body: messageForm.body
    };
    this.messageService.postMessage(message)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    this.stateService.updateCustomer(null);
    this.isShowMessageModal = false;
  }
}
