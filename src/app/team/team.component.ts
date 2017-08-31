import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  pageData = {};

  teamSlidesConfig = {
    accessibility: false,
    arrows: false,
    autoplay: true,
    fade: true
  };

  constructor(private dataService: DataService) {
    this.dataService.getDataFromUrl('assets/data/team.json').subscribe(
      (res) => {
        this.pageData = res;
      },
      (error) => console.log('Error fetching page data: ' + error)
    )
  }

  ngOnInit() {
  }

}
