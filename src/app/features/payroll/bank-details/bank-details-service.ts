import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankDetailsService {

  constructor(private http: HttpClient) { }

  GetAllBankDetails(): Observable<any> {
    return this.http.get<any>('json/bank-details.json')
  }

}
