import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUserResponse, Earning, Service, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUser: User = {} as User
  myServices: Service[] = [];
  myEarnings: Earning[] = [];
  topServices: Service[] = []
  totalEarnings: number = 0;
  availableEarnings: number = 0
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
    return this.http.get<User>(`${this.apiUrl}/user`).subscribe(res => {
      console.log("res", res);
      
      this.myServices = res.services
      this.myUser = res
      this.totalEarnings = 0;
      this.availableEarnings = 0
      res.earnings.forEach(item => {
        if(item.cashedOut){
          this.totalEarnings = this.totalEarnings + item.amount
        } else if(!item.cashedOut) {
          this.totalEarnings += item.amount
          this.availableEarnings += item.amount
        }
      })
      this.myEarnings = res.earnings
      this.topServices = res.services.sort((a,b) => b.price -a.price).slice(0, 3)
    })
  }
}
