import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllGuestService {

  constructor(private http: HttpClient) { }

  GetAllGuestsList(): Observable<any> {
    return this.http.get<any>('json/guests-list.json')
  }
  GetAllNationalityList(): Observable<any> {
    return this.http.get<any>('json/nationality-list.json')
  }
  GetAllIDTypeList(): Observable<any> {
    return this.http.get<any>('json/ID-type-list.json')
  }

}
