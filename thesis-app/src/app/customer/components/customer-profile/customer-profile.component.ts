import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { RequestService, DeletionService, StateService } from '../../../services';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private deletionService: DeletionService,
    private stateService: StateService,
    private router: Router
  ) {}

  public profile: any; // TODO: INTERFACE THIS
  public showView: boolean = true;

  ngOnInit() {
    this.profile = this.stateService.retrieveCustomer();
  }

  public showAccountView() {
    this.showView = true;
  }

  public showPaymentView() {
    this.showView = false;
  }

  public handleDeleteAccount() {
    this.deletionService.deleteAccount(this.profile.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => this.router.navigate(["/login"])
      );
  }

  public handleSaveChanges() {
    console.log('TODO: PUT the changes');
  }
}