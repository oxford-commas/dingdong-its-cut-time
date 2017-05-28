import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signup-button',
  template: `<button>{{buttonText}}</button>`
})
export class SignUpButtonComponent {
  @Input() public buttonText: string;
  @Output() public handleClick = new EventEmitter();
}