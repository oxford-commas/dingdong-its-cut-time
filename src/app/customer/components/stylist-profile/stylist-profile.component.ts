import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
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

export class StylistProfileComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private messageService: MessageService,
    private bookingService: BookingService,
    private stateService: StateService,
    private stylistStylesService: StylistStylesService
  ) {}

  //form models
  public name;
  public password;
  public email;
  public phonenumber;
  public billingaddress;
  public aboutMe;
  public body;

  public isProfileFetched: boolean = false;
  public isStylesFetched: boolean = false;
  public stylistProfile: any; // TODO: interface this
  public profile; // used if a stylist is logged in
  public allStyles;
  public styles: Array<string>;
  public isShowMessageModal: boolean = false;
  public isShowBookingModal: boolean = false;
  public isShowEditModal: boolean = false;
  public modalStyle: string = 'none';
  private stylistId: number;
  private alive: boolean = true;

  ngOnInit() {
    // if navigated to from close to you
    this.route.params
      .takeWhile(() => this.alive)
      .subscribe(
        params => this.stylistId = +params['id'],
        err => console.log(err)
      );

    // if navigated to as logged in stylist
    this.profile = this.stateService.retrieveCustomer();

    this.requestService.getStylistById(this.stylistId)
     .takeWhile(() => this.alive)
     .subscribe(
       data => {
         console.log('inside stylist profile ', data);
         this.stylistProfile = data;
       },
       err => console.log(err),
       () => this.isProfileFetched = true
     );

   this.stylistStylesService.fetchStyles(this.stylistId)
     .takeWhile(() => this.alive)
     .subscribe(
       data => this.styles = data,
       err => console.log(err),
       () => this.isStylesFetched = true
     );

   this.stylistStylesService.fetchAllStyles()
     .takeWhile(() => this.alive)
     .subscribe(
       data => this.allStyles = data,
       err => console.log(err)
     );
  }

  ngOnDestroy() {
    this.alive = false;
  }

  public toggleMessageModal() {
    this.isShowMessageModal = !this.isShowMessageModal;
  }

  public toggleBookingModal() {
    this.isShowBookingModal = !this.isShowBookingModal;
  }

  public toggleEditModal() {
    this.isShowEditModal = !this.isShowEditModal;
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
      .takeWhile(() => this.alive)
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

  public getEditModalStyle() {
    if (this.isShowEditModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public submitMessage() {
    const message = {
      id_sender: this.stateService.retrieveCustomer().id,
      id_recipient: this.stylistId,
      body: this.body
    };
    this.messageService.postMessage(message)
      .takeWhile(() => this.alive)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
    this.body = null;
    // this.stateService.updateCustomer(null);
    this.isShowMessageModal = false;
  }

  public handleSaveChanges(updateForm) {


    let styles = [];
    for (var key in updateForm) {
      if (updateForm[key] === true) {
        styles.push(key);
      }
    }

    const accountInformation = {
      billingaddress: updateForm.billingaddress || this.stylistProfile.billingaddress,
      email: updateForm.email || this.stylistProfile.email,
      id: this.stylistProfile.id,
      name: updateForm.name || this.stylistProfile.name,
      password: updateForm.password || this.stylistProfile.password,
      phonenumber: updateForm.phonenumber || this.stylistProfile.phonenumber,
      site_url: updateForm.site_url || this.stylistProfile.site_url,
      type: this.stylistProfile.type,
      aboutMe: updateForm.aboutMe || this.stylistProfile.aboutMe,
      styles: styles
    };

    // update the state
    this.stateService.updateCustomer(accountInformation);
    // reflect state changes on page
    this.stylistProfile = this.stateService.retrieveCustomer();
    // update the database
    this.requestService.changeUser(accountInformation)
      .takeWhile(() => this.alive)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
    this.stylistStylesService.fetchStyles(this.stylistId)
     .takeWhile(() => this.alive)
     .subscribe(
       data => this.styles = data,
       err => console.log(err)
     );

    // clear fields
    this.name = '';
    this.password = '';
    this.email = '';
    this.phonenumber = '';
    this.billingaddress = '';
    this.aboutMe = '';

    this.isShowEditModal = false;
  }
}
