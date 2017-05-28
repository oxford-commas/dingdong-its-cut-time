import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signin-input',
  template: `
    <div>{{headerText}}</div>
    <input
      #input
      (change)="onInputChange.emit(input.value)"
    />
  `
})
export class SignInInputComponent {
  @Input() public headerText: string;
  @Output() public onInputChange = new EventEmitter();
}