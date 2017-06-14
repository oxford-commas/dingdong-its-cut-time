import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signin-input',
  template: `
    <h2>{{headerText}}</h2>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">@</span>
      <input
        class="form-control"
        #input
        (change)="onInputChange.emit(input.value)"
      />
    </div>
  `
})
export class SignInInputComponent {
  @Input() public headerText: string;
  @Output() public onInputChange = new EventEmitter();
}