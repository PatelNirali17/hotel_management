import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLeaveBalanceService {

  constructor(private http: HttpClient) { }

  GetEmployeeLeaveBalance(): Observable<any> {
    return this.http.get<any>('json/employee-leave-balance.json')
  }

}
