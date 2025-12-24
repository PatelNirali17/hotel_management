import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomTypeService {

  constructor(private http: HttpClient) { }

  GetRoomTypes(): Observable<any> {
    return this.http.get<any>('json/room-type.json')
  }

}
