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

  ngOnInit() {

    // this.route.params.subscribe(params =>
    //   this.customerId = +params['id']
    // );
    this.customerId = this.stateService.customerProfile[0].id;

    this.requestService.getStylistById(this.customerId)
      .subscribe(
        data => this.customerProfile = data,
        err => console.log(err),
        () => this.isProfileFetched = true
      );
  }

  public isProfileFetched: boolean = false;
  public customerProfile: any; // TODO: INTERFACE THIS
  public customerId: number;
  public showView: boolean = true;

  public showAccountView() {
    this.showView = true;
  }

  public showPaymentView() {
    this.showView = false;
  }

  public handleDeleteAccount() {
    this.deletionService.deleteAccount(this.customerId)
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