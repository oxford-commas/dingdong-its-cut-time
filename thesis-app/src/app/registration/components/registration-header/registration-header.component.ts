import { Component, Input } from '@angular/core';

@Component({
  selector: 'registration-header',
  template: `
    <h1>{{headerText}}</h1>
    <div>{{logo}}</div>
  `
})
export class RegistrationHeaderComponent {
  @Input() public headerText: string;
  @Input() public logo: string;
}