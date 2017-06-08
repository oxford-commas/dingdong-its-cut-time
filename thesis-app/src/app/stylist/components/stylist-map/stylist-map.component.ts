import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LocationService,
  BookingService,
  StateService
  } from '../../../services';

@Component({
  selector: 'stylist-map',
  templateUrl: './stylist-map.component.html',
  styleUrls: [ './stylist-map.component.css' ]
})

export class StylistMapComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private bookingService: BookingService,
    private stateService: StateService,
    private router: Router
  ) {}

  @Input() stylistId;
  @Input() stylistLocation;
  public lng: number;
  public lat: number;
  public zoom: number = 12;
  public customers: any[];
  public customerLat: number;
  public customerLng: number;

  ngOnInit() {
    this.adjustMapViewForStylistLocation(this.stylistLocation);
    this.getConfirmedCustomersForStylist(this.stylistId);
  }

  getConfirmedCustomersForStylist(stylistId: number) {
    this.bookingService.fetchBookingsForStylist(stylistId)
      .subscribe(
        data => {
          this.customers = data;
          this.customers.map(customer => {
            this.getCustomerCoordinates(customer.location, (lat, lng) => {
              customer.latitude = lat;
              customer.longitude = lng;
              customer.label = {
                color: 'black',
                fontWeight: 'bold',
                text: customer.customer,
              }
              console.log(`Customer data object for ${customer.customer}: ${JSON.stringify(customer)}`);
            });
          });
          console.log(`Bookings object with customer coordinates: ${this.customers}`);
      }, err => console.log(err));
  }

  adjustMapViewForStylistLocation(location: string) {
    this.locationService.getCoordinatesFromLocation(location)
      .subscribe(res => {
        this.lat = res.lat;
        this.lng = res.lng;
        console.log(`Latitude is: ${this.lat}, longitude is: ${this.lng}`);
      });
  }

  getCustomerCoordinates(location: string, callback) {
    this.locationService.getCoordinatesFromLocation(location)
      .subscribe(res => {
        this.customerLat = res.lat;
        this.customerLng = res.lng;
        console.log(`Customer latitude: ${this.customerLat}, customer longitude: ${this.customerLng}`);
        callback(this.customerLat, this.customerLng);
      });
  }

}