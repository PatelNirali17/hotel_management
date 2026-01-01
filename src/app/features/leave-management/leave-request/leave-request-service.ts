import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }

  GetLeaveRequests(): Observable<any> {
    return this.http.get<any>('json/leave-request.json')
  }

}
