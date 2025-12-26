import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignationMasterService {

  constructor(private http: HttpClient) { }

  GetDesignationDetails(): Observable<any> {
    return this.http.get<any>('json/designation-master.json')
  }
}
