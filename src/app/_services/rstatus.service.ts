import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RstatusAdapter, Rstatus } from '../_model/rstatus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RstatusService {
  private API_URL = 'http://localhost:8080/project1'

  constructor(private httpClient: HttpClient, private adapter: RstatusAdapter) { }

  getAllStatus(): Observable<Rstatus[]> {
    return this.httpClient.get(`${this.API_URL}/reimbursements/status`).pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }
}
