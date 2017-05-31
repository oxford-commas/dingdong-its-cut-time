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

  public onSelect(item) {
    this.selected = item;
    console.log(this.selected);
    switch (this.selected){
      case "Home":
        this.router.navigate(["/home"]);
        break;
      case "Messages":
        console.log('router', this.router)
        this.router.navigate(["/messages"]);
        break;
      case "Settings":
        this.router.navigate(["/customerProfile"]);
        break;
      case "Logout":
        this.router.navigate(["/login"]);
        break;
    }
  }
}