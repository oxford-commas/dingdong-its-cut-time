import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  @Input() chatHistory;
  @Output() handleSendMessage = new EventEmitter();

  formatDate(timeDate) {
    return timeDate.toDateString();
  }
}

