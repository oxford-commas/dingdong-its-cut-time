import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../services';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  @Input() messages: Array<Array<IMessage>>;

  ngOnInit() {
    this.messageService.getMessages(1)
      .subscribe(
        data => {
          this.messages = this.convertToArray(data);
          console.log('....',this.messages);
        },
        err => console.log(err)
      );
  }

  showHistory(conversation) {
    console.log('show history', conversation);
  }

  convertToArray(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
}