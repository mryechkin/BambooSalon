import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  pageData = <any>{};

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

  openLink(url) {
    window.open(url, '_blank');
    return false;
  }

}
