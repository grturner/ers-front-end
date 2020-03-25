import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReimbursementAdapter, Reimbursement } from '../_model/reimbursement';
import { User } from '../_model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  private API_URL = 'http://localhost:8080/project1';

  constructor(private httpClient: HttpClient, private adapter: ReimbursementAdapter) { }

  createReimbursement(reimbursement: Reimbursement) {
    return this.httpClient.post(`${this.API_URL}/reimbursements`, reimbursement);
  }

  getReimbursementsByUser(user: User): Observable<Reimbursement[]> {
    return this.httpClient.get(`${this.API_URL}/reimbursements/${user.userId}`)
      .pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }

  getAllReimbursements(): Observable<Reimbursement[]> {
    return this.httpClient.get(`${this.API_URL}/reimbursements`)
      .pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }

  updateReimbursement(reimbursement: Reimbursement) {
    this.httpClient.put(`${this.API_URL}/reimbursements`, reimbursement).subscribe();
  }

  getByStatus(status: String): Observable<Reimbursement[]> {
    return this.httpClient.get(`${this.API_URL}/reimbursements/${status}`)
      .pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }
}

