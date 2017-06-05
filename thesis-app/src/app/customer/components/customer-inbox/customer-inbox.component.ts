import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-inbox',
  templateUrl: './customer-inbox.component.html'
})
export class CustomerInboxComponent {

  @Input() public messages: Array<IMessage>;
  @Output() public openHistory = new EventEmitter();

}