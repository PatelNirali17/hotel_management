import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypeService {

  constructor(private http: HttpClient) { }

  GetLeaveType(): Observable<any> {
    return this.http.get<any>('json/leave-types.json')
  }
}
