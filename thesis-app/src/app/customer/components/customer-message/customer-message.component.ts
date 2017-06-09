import { Component } from '@angular/core';
import { StateService, MessageService } from '../../../services';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css']
})
export class CustomerMessageComponent {
  constructor(
    private stateService: StateService,
    private messageService: MessageService
  ) {}

  public conversations = this.stateService.retrieveCustomer().messages;
  public currentChat;

  setCurrentChat(senderId) {
    this.currentChat = this.conversations.find(conversation => conversation.sender_id === senderId).messages;
    this.stateService.retrieveCustomer().chatSenderId = Number(senderId);
  }

  deleteChat(senderId) {
    const conversationIndex = this.conversations.findIndex(conversation => conversation.sender_id === senderId);
    const messageIds = this.conversations[conversationIndex].messages.map(message => message.id);
    this.messageService.deleteChatHistory(messageIds)
      .subscribe(
        res => {
          this.conversations.splice(conversationIndex, 1);
          this.currentChat = [];
        },
        err => console.log(err)
      );
  }

  postMessage(body) {
    const message = this.decorateMessage(body);
    this.messageService.postMessage(message)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  decorateMessage(body) {
    const message = {
      id_sender: this.stateService.retrieveCustomer().id,
      id_recipient: this.stateService.retrieveCustomer().chatSenderId,
      subjectHeading: '',
      body: body,
      time: 2,
      location: ''
    };
    console.log('decorating.. ', message);
    return message;
  }

}