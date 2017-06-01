import { Component, Input } from '@angular/core';

@Component({
  selector: 'registration-header',
  template: `
    <h1>Ding Dong: It's Cut Time</h1>
    <div class="page-header">
      <h2>Please Log in</h2>
    </div>
  `
})
export class RegistrationHeaderComponent {
  @Input() public headerText: string;
  @Input() public logo: string;
}