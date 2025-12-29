import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabListService {

  constructor(private http: HttpClient) { }

  GetAllCabList(): Observable<any> {
    return this.http.get<any>('json/cab-list.json')
  }

}
