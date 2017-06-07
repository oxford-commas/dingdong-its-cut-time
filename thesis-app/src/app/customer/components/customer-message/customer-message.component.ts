import { Component, Input, OnInit } from '@angular/core';
import { StateService, MessageService } from '../../../services';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  constructor(private stateService: StateService, private messageService: MessageService) {
  }

  @Input() messages: IMessage;
  public currentChat;

  ngOnInit() {
    this.messages = this.stateService.retrieveCustomer().messages;
  }

  setCurrentChat(conversation) {
    this.currentChat = conversation;
  }

  deleteChat(conversation) {
    const messageIds = conversation.map(message => {
      return message.id;
    });
    this.messageService.deleteChatHistory(messageIds)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}