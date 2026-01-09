import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDashboardService {

  constructor(private http: HttpClient) { }

  GetEmployeeWorkingHistory(): Observable<any> {
    return this.http.get<any>('json/employee-working-history.json')
  }
}
