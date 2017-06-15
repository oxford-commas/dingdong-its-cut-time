import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
import { StateService, MessageService } from '../../../services';

@Component({
  selector: 'chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnDestroy {
  constructor(private stateService: StateService, private messageService: MessageService) {}

  @Input() chatHistory;
  @Output() handleSendInputValue = new EventEmitter();
  public inputValue: string = '';
  private alive: boolean = true;

  ngOnDestroy() {
    this.alive = false;
  }

  formatDate(timeDate) {
    return timeDate.toDateString();
  }

  renderMessage() {
    const message = {
      body: this.inputValue,
      sender: this.stateService.retrieveCustomer().name,
      id: this.chatHistory[this.chatHistory.length - 1].id + 1
    };
    this.chatHistory.push(message);
    this.inputValue = null;
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

 postMessage() {
  const message = this.decorateMessage(this.inputValue);
  this.messageService.postMessage(message)
    .takeWhile(() => this.alive)
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this.renderMessage();
  }
}

