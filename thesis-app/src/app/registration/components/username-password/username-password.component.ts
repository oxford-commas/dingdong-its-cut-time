import { Component, Output, EventEmitter } from '@angular/core';

import { IAccountInformation } from '../../interfaces/registration-data';

@Component({
  selector: 'username-password',
  templateUrl: './username-password.component.html'
})
export class UsernamePasswordComponent {
  @Output() public onInputsChange = new EventEmitter<IAccountInformation>();

  private name: string;
  private password: string;

  public emitInputChange() {
    this.onInputsChange.emit({
      name: this.name,
      password: this.password
    });
  }

  public emitUsernameInputChange(name: string) {
    this.name = name;
    this.emitInputChange();
  }

  public emitPasswordInputChange(password: string) {
    this.password = password;
    this.emitInputChange();
  }

}