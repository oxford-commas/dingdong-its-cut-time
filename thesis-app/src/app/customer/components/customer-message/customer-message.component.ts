import { Component, Input, OnInit } from '@angular/core';
import { MessageService, StateService } from '../../../services';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html'
})
export class CustomerMessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  @Input() messages: Array<Array<IMessage>>;
  public currentChat;

  ngOnInit() {
    this.messageService.getMessages(1)
      .subscribe(
        data => this.messages = data,
        err => console.log(err)
      );
  }

  setCurrentChat(conversation) {
    this.currentChat = conversation;
    console.log('setting current chat...', conversation);
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