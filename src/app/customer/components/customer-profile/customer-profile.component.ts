import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService, DeletionService, StateService, StylistStylesService } from '../../../services';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private deletionService: DeletionService,
    private stateService: StateService,
    private router: Router,
    private stylistStylesService: StylistStylesService
  ) {}

  ngOnInit() {
    this.stylistStylesService.fetchAllStyles()
     .subscribe(
       data => this.styles = data,
       err => console.log(err)
     );
  }

  public profile = this.stateService.retrieveCustomer();
  // Form ngModels
  public name;
  public password;
  public email;
  public phonenumber;
  public site_url;
  public billingaddress;
  public image_url;
  public aboutMe;
  //
  public modalStyle: string = 'none';
  public showModal: boolean = false;
  public styles;

  public handleDeleteAccount() {
    this.deletionService.deleteAccount(this.profile.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => this.router.navigate(["/login"])
      );
  }

  public handleSaveChanges(updateForm) {
    let styles = [];
    for (var key in updateForm) {
      if (updateForm[key] === true) {
        styles.push(Number(key));
      }
    }
    const accountInformation = {
      billingaddress: updateForm.billingaddress || this.profile.billingaddress,
      email: updateForm.email || this.profile.email,
      id: this.profile.id,
      image_url: updateForm.image_url || this.profile.image_url,
      name: updateForm.name || this.profile.name,
      password: updateForm.password || this.profile.password,
      phonenumber: updateForm.phonenumber || this.profile.phonenumber,
      site_url: updateForm.site_url || this.profile.site_url,
      type: this.profile.type,
      aboutMe: updateForm.aboutMe || this.profile.aboutMe,
      styles: styles
    };

    this.requestService.changeUser(accountInformation)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );

    // update the state
    this.stateService.updateCustomer(accountInformation);
    // refresh page state to reflect changes to user
    this.profile = this.stateService.retrieveCustomer();

    // clear fields
    this.name = '';
    this.password = '';
    this.email = '';
    this.phonenumber = '';
    this.billingaddress = '';
    this.aboutMe = '';
    this.showModal = false;
  }

  public getStyle() {
    if (this.showModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public toggleModal() {
    this.showModal = !this.showModal;
  }

}

