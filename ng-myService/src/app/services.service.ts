import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Service } from './models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  myServices: Service[] = [];
  constructor(private http: HttpClient) { }

  newService(service: Service) {
    return this.http.post<Service>(`${environment.apiUrl}/service`, service)
  }

  onPaymentForService(service: Service) {
    return this.http.post<Service>(`${environment.apiUrl}/service/payment-submitted`, service)
  }

  getService(id: string) {
    return this.http.get<Service>(`${environment.apiUrl}/service/${id}`)
  }

  getMyServices() {
    this.http.get<Service[]>(`${environment.apiUrl}/service/my-services`).subscribe(res => {
      this.myServices = res
    })
  }
}
