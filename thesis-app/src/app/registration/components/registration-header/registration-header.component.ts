import { Component, Input } from '@angular/core';

@Component({
  selector: 'registration-header',
  template: `
    <div class="pageHeader">
      <h1>It's Cut Time</h1>
    </div>
  `,
  styleUrls: ['./registration-header.component.css']
})
export class RegistrationHeaderComponent {
  @Input() public headerText: string;
  @Input() public logo: string;
}