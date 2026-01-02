import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeShiftService {

  constructor(private http: HttpClient) { }

  GetEmployeeShift(): Observable<any> {
    return this.http.get<any>('json/employee-shift.json')
  }

}
