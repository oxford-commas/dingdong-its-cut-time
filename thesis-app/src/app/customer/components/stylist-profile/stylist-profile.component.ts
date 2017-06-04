import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService, MessageService } from '../../../services';
import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist.profile.component.css']
})
export class StylistProfileComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

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
        console.log(this.stylistProfile)
      },
       err => console.log(err),
       () => this.isProfileFetched = true
     );
  }

  public isProfileFetched: boolean = false;
  public stylistProfile: any; // TODO: interface this
  public isShowModal: boolean = false;
  public modalStyle: string = 'none';
  private stylistId: number;

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

  public decorateSenderAndRecipient(message: ICustomerMessage) {
    message = {
      ...message,
     id_sender: 1, //hardcoded logged in user
     id_recipient: this.stylistId
   };
   return message;
  }

  public submitMessage(message: ICustomerMessage) {
    message = this.decorateSenderAndRecipient(message);
    this.messageService.postMessage(message)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}

// | 55 |    1 | dnalounge         | dnalounge         | 375 11th St, San Francisco, CA

 // 56 |    0 | castro            | castro            | 429 Castro St, San Francisco, CA                      | 415-621-6120 | castrotheatre@gmail.com     | -122.4347591 | 37.7620333 | castrotheatre.com      | NULL   | update me |


