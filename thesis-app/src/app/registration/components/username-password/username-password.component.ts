import { Component, Output, EventEmitter } from '@angular/core';
import { IUserInformationData } from '../../interfaces';

@Component({
  selector: 'username-password',
  templateUrl: './username-password.component.html'
})
export class UsernamePasswordComponent {
  @Output() public onInputsChange = new EventEmitter<IUserInformationData>();

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