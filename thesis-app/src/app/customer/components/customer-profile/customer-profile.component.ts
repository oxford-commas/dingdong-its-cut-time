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
  // public showView: boolean = true;

  ngOnInit() {
    this.profile = this.stateService.retrieveCustomer();
    console.log(this.profile, 'here')
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
    this.requestService.changeUser({});
  }
}

// app.put('/api/userstylist/:id', function (req, res) {
//   var id = req.params.id;
//   var type = req.body.type;
//   var name = req.body.name;
//   var password = req.body.password;
//   var billingaddress = req.body.billingaddress;
//   var phonenumber = req.body.phonenumber;
//   var email = req.body.email;
//   var site_url = req.body.site_url;
//   var gender = req.body.gender;
//   var image_url = req.body.image_url;
//   var location = req.body.location;
//   helpers.updateProfile(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, id, function() {
//     res.send('Got a PUT request at /api/userstylist/' + req.params.id);
//   });
// });