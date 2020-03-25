import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserAdapter } from '../_model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080/project1';

  constructor(private httpClient: HttpClient, private adapter: UserAdapter) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get(`${this.API_URL}/users/`).pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }

  getUserByName(username: string): Observable<User> {
    return this.httpClient.get(`${this.API_URL}/users/${username}`).pipe(map(data => this.adapter.adapt(data)));
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get(`${this.API_URL}/users/${userId}`).pipe(map(data => this.adapter.adapt(data)));
  }

  createUser(user: User) {
    return this.httpClient.post(`${this.API_URL}/users`, user);
  }
}
