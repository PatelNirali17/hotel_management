import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentMasterService {

  constructor(private http: HttpClient) { }

  GetDepartmentDetails(): Observable<any> {
    return this.http.get<any>('json/department-master.json')
  }
}
