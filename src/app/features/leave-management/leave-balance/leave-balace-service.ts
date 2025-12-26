import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveBalaceService {

  constructor(private http: HttpClient) { }

  GetLeaveBalance(): Observable<any> {
    return this.http.get<any>('json/leave-balance.json')
  }
}
