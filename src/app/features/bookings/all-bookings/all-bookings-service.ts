import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllBookingsService {

  constructor(private http: HttpClient) { }

  GetBookingsDetails(): Observable<any> {
    return this.http.get<any>('json/bookings-details.json')
  }
}
