import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'bwm-rental-edit',
  templateUrl: './rental-edit.component.html',
  styleUrls: ['./rental-edit.component.scss']
})
export class RentalEditComponent implements OnInit {

  rental: Rental;

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private auth: AuthService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalService
        .getRentalById(params['rentalId'])
        .subscribe(rental => {
          this.rental = rental;
        })
    })
  }

  updateRental(rentalEvent: any) {
    alert(JSON.stringify(rentalEvent.data));
  }

  get rentalLocation(): string {
    return `${this.rental.city}, ${this.rental.street}`
  }

}
