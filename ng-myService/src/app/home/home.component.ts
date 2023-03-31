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
  constructor(private userService: UserService, public jwt: JwtServiceService) { }

  ngOnInit(): void {
    this.userService.getMe().subscribe(res => {
      console.log(res);
      
      this.user = res
    })
  }

}
