import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/auth'; 

  constructor(private http: HttpClient) {}

  signUp(user: any, userType: string): Observable<any> {
    const url = `${this.baseUrl}/sign-up?userType=${userType}`;
    return this.http.post(url, user, { responseType: 'text' });
  }

  login(userLoginDTO: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, userLoginDTO);
  }
  
}
