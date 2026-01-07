import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSalaryService {

  constructor(private http: HttpClient) { }

  GetAllEmployeeSalarySlip(): Observable<any> {
    return this.http.get<any>('json/payroll-generate.json')
  }
}
