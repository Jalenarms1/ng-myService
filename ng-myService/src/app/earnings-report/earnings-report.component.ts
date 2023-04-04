import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-earnings-report',
  templateUrl: './earnings-report.component.html',
  styleUrls: ['./earnings-report.component.css']
})
export class EarningsReportComponent implements OnInit {
  showModal: boolean = false;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
    
    
  }

  toggleModal() {
    this.showModal = !this.showModal
  }

}
