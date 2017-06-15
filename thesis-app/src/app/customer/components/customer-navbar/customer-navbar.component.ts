import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../services';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  constructor(private stateService: StateService, private router: Router) {}
  public fullImagePath = './assets/logo.png';
  
  handleLogout() {
    this.stateService.logout();
    this.router.navigate(['/login']);
  }
}