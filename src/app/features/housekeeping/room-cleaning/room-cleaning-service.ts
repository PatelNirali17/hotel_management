import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomCleaningService {

  constructor(private http: HttpClient) { }

  GetRoomCleaningDetails(): Observable<any> {
    return this.http.get<any>('json/room-cleaning.json')
  }

}
