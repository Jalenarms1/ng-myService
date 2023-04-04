import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Service } from '../models';
import { ServicesService } from '../services.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-charge-form',
  templateUrl: './charge-form.component.html',
  styleUrls: ['./charge-form.component.css']
})
export class ChargeFormComponent implements OnInit {
  showModal: boolean = false;
  submitError: boolean = false;
  service: Service = {} as Service;
  constructor(private billService: ServicesService, private userService: UserService) { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal
  }

  submitNewService() {
    this.toggleModal()
    
    if((this.service.title == '' || !this.service.title) || (this.service.description == '' || !this.service.description) || (this.service.price == 0 || !this.service.price) || (this.service.customerEmail == '' || !this.service.customerEmail) || (this.service.customerName == '' || !this.service.customerName)) {
      
      this.submitError = true;
      return 
    }

    this.billService.newService(this.service).pipe(catchError((err)  => {
      this.submitError = true;
      return throwError(() => new Error(err))     
      
    })).subscribe(res => {
      // resets input to clear form
      this.service = {} as Service
      console.log(res);
      
    })

    this.userService.getMe()
  }

}
