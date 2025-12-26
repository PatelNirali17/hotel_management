import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaundryService {

  constructor(private http: HttpClient) { }

  GetLaundryDetails(): Observable<any> {
    return this.http.get<any>('json/laundry-services.json')
  }

}
