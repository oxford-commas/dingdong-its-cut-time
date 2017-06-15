import { Component, Input } from '@angular/core';

@Component({
  selector: 'registration-header',
  templateUrl: './registration-header.component.html',
  styleUrls: ['./registration-header.component.css']
})
export class RegistrationHeaderComponent {
  @Input() public headerText: string;
  @Input() public logo: string;
}