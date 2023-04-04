import { Component, OnInit } from '@angular/core';
import { Service } from '../models';
import { ServicesService } from '../services.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    
  }

}
