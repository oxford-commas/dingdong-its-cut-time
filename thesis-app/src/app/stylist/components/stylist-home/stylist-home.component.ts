import { Component, Input } from '@angular/core';

@Component({
   selector: 'stylist-home',
   templateUrl: './stylist-home.component.html'
})
export class StylistHomeComponent {
  @Input() stylistProfile
}