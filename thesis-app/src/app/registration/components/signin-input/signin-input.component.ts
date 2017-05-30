import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signin-input',
  template: `
    <div>{{header}}</div>
    <input
      #input
      (change)="onInputChange.emit(input.value)"
    />
  `
})
export class SignInInputComponent {
  @Input() public header: string;
  @Output() public onInputChange = new EventEmitter();
}