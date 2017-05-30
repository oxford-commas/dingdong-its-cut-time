import { Component, Input } from '@angular/core';

import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'customer-inbox',
  templateUrl: './customer-inbox.component.html'
})
export class CustomerInboxComponent {
  @Input() messages: Array<ICustomerMessage>;
}