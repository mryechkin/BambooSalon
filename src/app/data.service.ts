import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getServicesOverview = (): Observable<Response> => {
    return this.http.get('assets/data/home.services.json').map(res => res.json());
  }

  getReviews = (): Observable<Response> => {
    return this.http.get('assets/data/home.reviews.json').map(res => res.json());
  }
}
