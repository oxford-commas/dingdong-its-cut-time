import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../services';
import { ICustomerMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  @Input() messages: Array<ICustomerMessage>;

  ngOnInit() {
    this.messageService.getMessages(1)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}