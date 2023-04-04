import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../models';
import { ServicesService } from '../services.service';
import {render} from "creditcardpayments/creditCardPayments";

@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {
  serviceId: string = ''
  service: Service = {} as Service
  constructor(private route: ActivatedRoute, private servicesService: ServicesService, ) { 
    // render(
    //   {
    //     id: '#paypal-buttons-container',
    //     currency: 'USD',
    //     value: `${this.service.price}`,
    //     onApprove: (res) => {
    //       console.log(res);
          
    //     }
    //   }
    // )
  }

  async ngOnInit(): Promise<void> {
    
    
    this.serviceId = this.route.snapshot.params['id']
    this.servicesService.getService(this.serviceId).subscribe(service => {
      this.service = service;
      render({
        id: '#paypal-buttons-container',
        currency: 'USD',
        value: `${this.service.price}`,
        onApprove: (res) => {
          this.servicesService.onPaymentForService(this.service).subscribe(res => {
            location.reload()
            
          })
          // render({
          //   id: '#paypal-buttons-container',
          //   currency: 'USD',
          //   value: `${this.service.price}`,
          //   onApprove: (res) => {
          //     console.log(res);
          //   }
          // });
        }
      });
    });
  }

    

}
