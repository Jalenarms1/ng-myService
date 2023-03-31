import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUserResponse, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string): Observable<AuthUserResponse> {
    const signupDto = { username, password};

    return this.http.post<AuthUserResponse>(`${this.apiUrl}/user/new`, signupDto);
  }

  login(username: string, password: string): Observable<AuthUserResponse> {
    const loginInput = { username, password };

    return this.http.post<AuthUserResponse>(`${this.apiUrl}/user/auth`, loginInput);
  }

  getMe() {
    return this.http.get<User>(`${this.apiUrl}/user`)
  }
}
