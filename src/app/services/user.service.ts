import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //could be placed in an env file
  private url = 'http://127.0.0.1:8000/api/register';

  constructor(private http: HttpClient) {}
  registerUser(userData: {email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.url, userData);
  }

}
