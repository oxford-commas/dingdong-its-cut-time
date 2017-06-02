import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../../services';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.customerId = +params['id']
    );

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
    console.log('TODO: DELETE account');
  }

  public handleSaveChanges() {
    console.log('TODO: PUT the changes');
  }
}