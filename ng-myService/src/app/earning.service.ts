import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EarningService {
  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  cashOut(earningIds: string[]) {
    return this.http.post(`${this.apiUrl}/earnings`,  earningIds )
  }
}
