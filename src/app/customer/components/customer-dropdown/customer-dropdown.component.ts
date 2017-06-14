import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DropdownItem } from './dropdown-item';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'customer-dropdown',
  templateUrl: './customer-dropdown.component.html'
})

export class CustomerDropDownComponent {
  selected: string;
  open: boolean;

  items = [
    { value: 'Home' },
    { value: 'Messages' },
    { value: 'Settings' },
    { value: 'Logout' },
  ];

  constructor(private router: Router) {}

  @Input() customerId: number;

  public onSelect(item) {
    this.selected = item;
    switch (this.selected){
      case "Home":
        this.router.navigate(["/home"]);
        break;
      case "Messages":
        console.log('router', this.router)
        this.router.navigate(["/messages"]);
        break;
      case "Settings":
        this.router.navigate(["/customerProfile", this.customerId]);
        break;
      case "Logout":
        this.router.navigate(["/login"]);
        break;
    }
  }
}