import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {
  RequestService,
  MessageService,
  BookingService,
  StateService } from '../../../services';

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
    private stateService: StateService
  ) {}

  public isProfileFetched: boolean = false;
  public stylistProfile: any; // TODO: interface this
  public isShowModal: boolean = false;
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
        // this.requestService.getUserImg(this.stylistProfile.id)
        //   .subscribe(
        //     response => {
        //       console.log(response, 'here')
        //     }
        //   )
      },
       err => console.log(err),
       () => this.isProfileFetched = true
     );
  }

  public toggleModal() {
    this.isShowModal = !this.isShowModal;
  }

  public getStyle() {
    if (this.isShowModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public decorateSenderAndRecipient(message: IMessage) {
    message = {
      ...message,
     id_sender: 1, //hardcoded logged in user
     id_recipient: this.stylistId
   };
   return message;
  }

  public submitMessage(ngForm: NgForm) {
    const message = {
      id_sender: this.stateService.retrieveCustomer().id,
      id_recipient: this.stylistProfile.id,
      subjectHeading: ngForm.value.subjectHeading,
      body: ngForm.value.body,
      time: ngForm.value.time,
      location: ngForm.value.location,
      isconfirmed: 0,
      isComplete: 0
    }
    this.messageService.postMessage(message)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    this.bookingService.addBooking(message)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
