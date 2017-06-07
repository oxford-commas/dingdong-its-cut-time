import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  @Input() chatHistory;

  constructor() {
    console.log(this.chatHistory)
  }
}