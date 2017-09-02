import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  pageData = <any>{};
  bookingData = <any>{};

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/appointments.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )

    this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(
      (res) => {
        this.bookingData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

}
