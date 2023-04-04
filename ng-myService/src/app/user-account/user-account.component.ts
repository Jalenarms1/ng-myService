import { Component, OnInit } from '@angular/core';
import { JwtServiceService } from '../jwt-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(public jwt: JwtServiceService, public userService: UserService) { }

  ngOnInit(): void {
  }

}
