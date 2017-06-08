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
    private messageService: MessageService) {}

  public conversations = this.stateService.retrieveCustomer().messages;
  public currentChat;

  setCurrentChat(senderId) {
    this.currentChat = this.conversations.find(conversation => conversation.sender_id === senderId).messages;
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

}