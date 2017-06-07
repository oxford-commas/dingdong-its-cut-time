import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-inbox',
  templateUrl: './customer-inbox.component.html',
  styleUrls: ['./customer-inbox.component.css']
})
export class CustomerInboxComponent {

  @Input() public messages: Array<IMessage>;
  @Output() public openHistory = new EventEmitter();
  @Output() public deleteChat = new EventEmitter();
}