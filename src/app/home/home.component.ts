import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageData = {};

  bannerSlidesConfig = {
    accessibility: false,
    arrows: false,
    autoplay: true,
    fade: true
  };
  reviewSlidesConfig = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  };
  bannerSlides = [
    { img: 'assets/images/banner1.jpg' },
    { img: 'assets/images/banner2.jpg' },
    { img: 'assets/images/banner3.jpg' },
    { img: 'assets/images/banner4.jpg' },
    { img: 'assets/images/banner5.jpg' },
    { img: 'assets/images/banner6.jpg' },
    { img: 'assets/images/banner7.jpg' }
  ];

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/home.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {}

  Array(len) {
    return Array(len);
  }
}
