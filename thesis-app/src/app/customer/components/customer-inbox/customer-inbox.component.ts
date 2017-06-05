import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'customer-inbox',
  templateUrl: './customer-inbox.component.html'
})
export class CustomerInboxComponent implements OnInit{

  @Input() public messages: Array<ICustomerMessage>;
  @Output() public openHistory = new EventEmitter();

}