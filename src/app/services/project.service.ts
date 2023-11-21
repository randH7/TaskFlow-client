import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly baseUrl = 'http://localhost:8082/api/projects'; 

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    const options = {
      headers: this.getAuthHeader(),
    };
    const url = `${this.baseUrl}`;
    return this.http.get(url, options);
  }

  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem("authToken");
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

}
