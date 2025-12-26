import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllStaffService {

  constructor(private http: HttpClient) { }

  GetStaffDetails(): Observable<any> {
    return this.http.get<any>('json/staff-details.json')
  }

}
