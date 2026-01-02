import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaryMasterService {

  constructor(private http: HttpClient) { }

  GetAllSalary(): Observable<any> {
    return this.http.get<any>('json/salary-master.json')
  }

}
