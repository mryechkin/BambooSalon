import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  pageData = <any>{};
  position = [];

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/contact.json').subscribe(
      (res) => {
        this.pageData = res;
        if (this.pageData) {
          this.position = [this.pageData.lat, this.pageData.lng];
        }
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

}
