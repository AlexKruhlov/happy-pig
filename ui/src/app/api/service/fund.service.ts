import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { URL } from '../requestPath';
import { Fund } from '../../models/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  private subject = new Subject<any>();

  constructor( private http: HttpClient ) {
  }

  getAll(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${URL}/fund/all`);
  }

  getById( id: string ): Observable<Fund> {
    return this.http.get<Fund>(`${URL}/fund/${id}`);
  }

  update(fund: Fund): Observable<Fund> {
     return this.http.post<Fund>(`${URL}/fund/update`, fund);
  }

  deleteItem(itemId: string, fundId: string): Observable<Fund> {
    return this.http.post<Fund>(`${URL}/item/delete`, {itemId, fundId});
  }

  create(fund: any): void {
    this.http.post(`${URL}/fund/create`, fund)
      .subscribe(res => {
        this.saveFundsToSubject(res);
      });
  }

  saveFundsToSubject(res): void {
    this.subject.next({ fund: res });
  }

  getNew(): Observable<any> {
    return this.subject.asObservable();
  }
}
