import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../services';
import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  constructor() {
    console.log('Stretch goal: GET and POST messages');
  }

  @Input() messages: Array<ICustomerMessage>;

  ngOnInit() {

  }
}