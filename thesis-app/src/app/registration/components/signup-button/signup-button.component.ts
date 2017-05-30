import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signin-button',
  template: `<button (click)="handleClick.emit($event)">{{buttonText}}</button>`
})
export class SignUpButtonComponent {
  @Input() public buttonText: string;
  @Output() public handleClick = new EventEmitter();
}