import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService, DeletionService, StateService } from '../../../services';


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
    private router: Router
  ) {}

  public profile: any; // TODO: INTERFACE THIS
  public modalStyle: string = 'none';
  public showModal: boolean = false;

  ngOnInit() {
    this.profile = this.stateService.retrieveCustomer();
    this.requestService.getUserImg(this.profile.id)
      .subscribe(
        response => {
          this.profile.image_url = response.url;
        }
      )
  }

  public handleDeleteAccount() {
    this.deletionService.deleteAccount(this.profile.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => this.router.navigate(["/login"])
      );
  }

  public handleSaveChanges(form: NgForm) {
    console.log(this.profile, form.value);
    const newObj = {
      name: form.value.username || this.profile.name,
      password: form.value.password || this.profile.password,
      billingaddress: form.value.address || this.profile.billingaddress,
      image_url: form.value.image || this.profile.image_url,
      email: form.value.email || this.profile.email,
      phonenumber: form.value.phonenumber || this.profile.phonenumber,
      site_url: form.value.website || this.profile.site_url,
      id: this.profile.id,
      type: 1
    }
    this.requestService.changeUser(newObj)
      .subscribe(
        data => {
          console.log(data);
        }
      )
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

