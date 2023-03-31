import { Component, OnInit } from '@angular/core';
import { JwtServiceService } from '../jwt-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  
  
  loginCtl: boolean = true;
  usernameLogin: string = '';
  passwordLogin: string = '';
  usernameSignUp: string = '';
  passwordSignUp: string = '';
  confirmPassword: string = '';
  passwordsDoNotMatch: boolean = false;
  isAuthenticated: boolean = false;
  constructor(private userService: UserService, private jwtService: JwtServiceService) { }

  ngOnInit(): void {
    // subscribe to isAuthenticated$ BehaviorSubject to get authentication status
    this.jwtService.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.isAuthenticated = authenticated;
    });
  }

  onChangeValidate(event:Event) {
    if(this.passwordSignUp !== this.confirmPassword){
      this.passwordsDoNotMatch = true
    } else {
      this.passwordsDoNotMatch = false
    }
  }

  submitLogin() {
    this.userService.login(this.usernameLogin, this.passwordLogin)
      .subscribe(res => {
        console.log(res);
        
        if(res.token) {
          this.jwtService.saveToken(res.token)
          this.jwtService.isAuthenticated();

        } else {
          return
        }
      })
  }
  submitSignUp() {
    console.log(this.passwordSignUp);
    if(this.passwordsDoNotMatch) return;
    
    this.userService.signUp(this.usernameSignUp, this.passwordSignUp)
      .subscribe(res => {
        console.log(res);
        
        if(res.token) {
          this.jwtService.saveToken(res.token)
          this.jwtService.isAuthenticated();

        } else {
          return
        }
      })
  }

}
