import { Component, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
import { StateService, MessageService } from '../../../services';
import { IMessage } from '../../interfaces';

@Component({
  selector: 'customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css']
})
export class CustomerMessageComponent implements OnDestroy{
  constructor(
    private stateService: StateService,
    private messageService: MessageService
  ) {}

  public conversations = this.stateService.retrieveCustomer().messages;
  public currentChat;
  public currentChatName;
  private alive: boolean = true;

  ngOnDestroy() {
    this.alive = false;
  }

  setCurrentChat(senderId) {
    this.currentChat = this.conversations.find(conversation => conversation.sender_id === senderId).messages;
    console.log('asdfasdf', this.currentChat);
    if (!!this.currentChat) {
      this.currentChatName = this.currentChat[0].recipient;
    }
    this.stateService.retrieveCustomer().chatSenderId = Number(senderId);
  }

  deleteChat(senderId) {
    const conversationIndex = this.conversations.findIndex(conversation => conversation.sender_id === senderId);
    const messageIds = this.conversations[conversationIndex].messages.map(message => message.id);
    this.messageService.deleteChatHistory(messageIds)
      .takeWhile(() => this.alive)
      .subscribe(
        res => {
          this.conversations.splice(conversationIndex, 1);
          this.currentChat = [];
        },
        err => console.log(err)
      );
  }

}