import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserVerifyDTO } from '../models/user-verify.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject = new BehaviorSubject<any>(null); 

  private readonly baseUrl = 'http://localhost:8082/auth'; 

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token: string | null = localStorage.getItem('authToken');
    return token !== null;
  }

  isManager(): boolean {
    const currentUserString: string | null = localStorage.getItem('currentUser');

    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      return currentUser.role === "ROLE_MANAGER";
    }

    return false;
  }

  isEmploy(): boolean {
    const currentUserString: string | null = localStorage.getItem('currentUser');

    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      return currentUser.role === "ROLE_EMPLOY";
    }

    return false;
  }

  signUp(user: any, userType: string): Observable<any> {
    const url = `${this.baseUrl}/sign-up?userType=${userType}`;
    return this.http.post(url, user, { responseType: 'text' });
  }

  login(userLoginDTO: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, userLoginDTO);
  }
  
  verifyToken(): Observable<UserVerifyDTO> {

    const storedToken: string | null = localStorage.getItem('authToken');

    if (storedToken === null) {
      throw null;
    }

    // Create the Authorization header
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${storedToken}`
      })
    };

    const url = `${this.baseUrl}/verify`;
    return this.http.get<UserVerifyDTO>(url, options);
  }

  
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  }
  
}
