import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RtypeAdapter, Rtype } from '../_model/rtype';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RtypeService {
  private API_URL = 'http://localhost:8080/project1'

  constructor(private httpClient: HttpClient, private adapter: RtypeAdapter) { }

  getAllTypes(): Observable<Rtype[]> {
      return this.httpClient.get(`${this.API_URL}/reimbursements/types`).pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }
}
