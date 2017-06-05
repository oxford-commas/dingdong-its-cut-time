import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-history',
  templateUrl: './chat-history.component.html'
})
export class ChatHistoryComponent {
  @Input() chatHistory;
}