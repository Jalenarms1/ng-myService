import { Component, OnInit } from '@angular/core';
import { JwtServiceService } from '../jwt-service.service';
import { User } from '../models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = {} as User;
  constructor(public userService: UserService, public jwt: JwtServiceService) {
    this.userService.getMe()
   }

  ngOnInit(): void {
    
  }

}
