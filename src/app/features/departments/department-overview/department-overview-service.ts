import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentOverviewService {

  constructor(private http: HttpClient) { }

  GetDepartmentOverviewDetails(): Observable<any> {
    return this.http.get<any>('json/department-overview.json')
  }
}
