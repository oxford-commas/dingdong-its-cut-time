import { Component, Output, EventEmitter } from '@angular/core';

import { IAccountInformation } from '../../interfaces/registration-data';

@Component({
  selector: 'username-password',
  templateUrl: './username-password.component.html'
})
export class UsernamePasswordComponent {
  @Output() public onInputsChange = new EventEmitter<IAccountInformation>();

  private username: string;
  private password: string;

  public emitInputChange() {
    this.onInputsChange.emit({
      username: this.username,
      password: this.password
    });
  }

  public emitUsernameInputChange(username: string) {
    this.username = username;
    this.emitInputChange();
  }

  public emitPasswordInputChange(password: string) {
    this.password = password;
    this.emitInputChange();
  }

}