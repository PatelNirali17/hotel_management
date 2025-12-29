import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShiftReportService {

  constructor(private http: HttpClient) { }

  GetShiftReport(): Observable<any> {
    return this.http.get<any>('json/shift-report.json')
  }

}
