import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user-model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  private authToken = '';
  private userId = '';

// userUrl ='http://localhost:3000/api/user';


  constructor(private httpClient:HttpClient, private router: Router) { }

  createUser(email: string, password: string,firstname:string, lastname:string) {
    return this.httpClient.post<{ message: string }>('http://localhost:5000/api/user/register', {email: email, password: password, firstname:firstname,lastname:lastname});
  }

//   public createUser(user:User): Observable<User>{
//     return this.httpClient.post(`${this.userUrl}/signup`, user, { withCredentials: true, observe: 'response' })
//     .pipe(catchError(err => {
//       return of(err);
//     }));
// }
getToken() {
  return this.authToken;
}
getUserId() {
  return this.userId;
}
loginUser(email: string, password: string) {
  return this.httpClient.post<{ userId: string, token: string }>('http://localhost:3000/api/auth/login', {email: email, password: password}).pipe(
    tap(({ userId, token }) => {
      this.userId = userId;
      this.authToken = token;
      this.isAuth$.next(true);
    })
  );
}
logout() {
  this.authToken = '';
  this.userId = '';
  this.isAuth$.next(false);
  this.router.navigate(['login']);
}
}
