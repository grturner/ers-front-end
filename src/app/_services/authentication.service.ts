import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserAdapter } from '../_model/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Login } from '../_model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = 'http://localhost:8080/project1';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private adapter: UserAdapter
  ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

 login(username: string, password: string) {
  const login = new Login;
  login.username = username;
  login.password = password;
  this.httpClient.post<boolean>(`http://localhost:8080/project1/users/${username}`, login).pipe(map( data => {
      if (data) {
        this.httpClient.get<User>(`http://localhost:8080/project1/users/${username}`)
        .pipe(map((data: any) => {
          this.adapter.adapt(data);
          localStorage.setItem('currentUser', JSON.stringify(this.adapter.adapt(data)));
          this.currentUserSubject.next(this.adapter.adapt(data));
          this.router.navigate(["/users/view-ticket"]).then();
      })).subscribe();
    }
  }
  )).subscribe();
}

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(["/landing"]).then();
  }
}
