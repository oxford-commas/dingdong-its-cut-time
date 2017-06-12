import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StateService } from '../../../services';

@Component({
  selector: 'chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  constructor(private stateService: StateService) {}

  @Input() chatHistory;
  @Output() handleSendInputValue = new EventEmitter();
  public inputValue: string = '';

  formatDate(timeDate) {
    return timeDate.toDateString();
  }

  renderMessage() {
    const message = {
      body: this.inputValue,
      sender: this.stateService.retrieveCustomer().name
    };
    console.log('add message to history:', this.chatHistory);
    this.chatHistory.push(message);
    this.handleSendInputValue.emit(this.inputValue);
    this.inputValue = null;
  }
}

