import { Component, Input, OnInit } from '@angular/core';

import { ICustomerMessage } from '../../interfaces';

import { StateService } from '../../../services';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  @Input() messages: Array<ICustomerMessage> = [{
    customer: 'Andrew',
    stylist: 'Jojo',
    subjectHeading: 'this is a subject heading',
    body: 'cut my hair bro',
    time: 1900
  },
  {
    customer: 'Andrew',
    stylist: 'Mama',
    subjectHeading: 'this is a another subject heading',
    body: 'give me a fade sir',
    time: 800
  }];

  constructor(private stateService: StateService) {
    console.log('Stretch goal: GET and POST messages');
  }

  ngOnInit() {
    console.log(this.stateService)
  }

}