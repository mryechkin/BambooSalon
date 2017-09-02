import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-thebaldbarber',
  templateUrl: './thebaldbarber.component.html',
  styleUrls: ['./thebaldbarber.component.scss']
})
export class ThebaldbarberComponent implements OnInit {

  pageData = <any>{};
  imagesLeft = [
    'assets/images/thebaldbarber/thebaldbarber1.jpg',
    'assets/images/thebaldbarber/thebaldbarber2.jpg',
    'assets/images/thebaldbarber/thebaldbarber3.jpg',
    'assets/images/thebaldbarber/thebaldbarber5.jpg'
  ];
  imagesRight = [
    'assets/images/thebaldbarber/thebaldbarber6.jpg',
    'assets/images/thebaldbarber/thebaldbarber7.jpg',
    'assets/images/thebaldbarber/thebaldbarber8.jpg',
    'assets/images/thebaldbarber/thebaldbarber9.jpg'
  ];

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/thebaldbarber.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

}
