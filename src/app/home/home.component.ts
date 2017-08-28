import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services = void 0;
  reviews = void 0;

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
    { img: 'assets/images/banner2.jpg' },
    { img: 'assets/images/banner3.jpg' },
    { img: 'assets/images/banner1.jpg' }
  ];

  constructor(private dataService: DataService) {

    this.dataService.getServicesOverview().subscribe(
      (res) => {
        this.services = res;
      },
      (error) => console.log('Error fetching services: ' + error)
    )

    this.dataService.getReviews().subscribe(
      (res) => {
        this.reviews = res;
      },
      (error) => console.log('Error fetching reviews: ' + error)
    )
  }

  ngOnInit() {}

  Array(len) {
    return Array(len);
  }
}
