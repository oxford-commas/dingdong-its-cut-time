import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../../services';
import { StateService } from '../../../services';

@Component({
  selector: 'stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist.profile.component.css']
})
export class StylistProfileComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        params => this.stylistId = +params['id'],
        err => console.log(err)
      );
    this.requestService.getStylistById(this.stylistId)
     .subscribe(
       data => {
        this.stylistProfile = data
        this.stateService.addStylist(this.stylistProfile);
        console.log(this.stateService, 'sp')
      },
       err => console.log(err),
       () => this.isProfileFetched = true
     );
  }

  public isProfileFetched: boolean = false;
  public stylistProfile: any; // TODO: interface this
  public isShowModal: boolean = false;
  public modalStyle: string = 'none';
  private stylistId: number;

  public toggleModal() {
    this.isShowModal = !this.isShowModal;
  }

  public getStyle() {
    if (this.isShowModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public submitMessage(message: {}) {
    console.log('submit message ', message);
  }
}

// | 55 |    1 | dnalounge         | dnalounge         | 375 11th St, San Francisco, CA

 // 56 |    0 | castro            | castro            | 429 Castro St, San Francisco, CA                      | 415-621-6120 | castrotheatre@gmail.com     | -122.4347591 | 37.7620333 | castrotheatre.com      | NULL   | update me |


