import { Component, Input } from '@angular/core';

import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent {
  constructor() {
    console.log('Stretch goal: GET and POST messages');
  }

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
}