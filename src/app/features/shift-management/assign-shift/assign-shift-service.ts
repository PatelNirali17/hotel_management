import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignShiftService {

  constructor(private http: HttpClient) { }

  GetAssignShift(): Observable<any> {
    return this.http.get<any>('json/assign-shift.json')
  }

}
