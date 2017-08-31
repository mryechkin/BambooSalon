import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pageData = {};

  bannerSlidesConfig = {
    accessibility: false,
    arrows: false,
    autoplay: true,
    fade: true
  };
  bannerSlides = [
    { img: 'assets/images/products1.jpg' },
    { img: 'assets/images/products2.jpg' },
    { img: 'assets/images/products3.jpg' }
  ];

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/products.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

}
