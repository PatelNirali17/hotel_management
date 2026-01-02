import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneratePayrollService {

  constructor(private http: HttpClient) { }

  GetAllGeneratePayroll(): Observable<any> {
    return this.http.get<any>('json/payroll-generate.json')
  }

}
