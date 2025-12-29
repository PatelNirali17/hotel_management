import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllEventService {

  constructor(private http: HttpClient) { }

  GetAllEventList(): Observable<any> {
    return this.http.get<any>('json/event-list.json')
  }
}
