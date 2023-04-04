import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EarningService } from '../earning.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cashout-modal',
  templateUrl: './cashout-modal.component.html',
  styleUrls: ['./cashout-modal.component.css']
})
export class CashoutModalComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<void>()
  
  constructor(private earningService: EarningService, public userService: UserService) { }

  ngOnInit(): void {
    
  }

  closeModal() {
    this.toggleModal.emit()
  }

  confirmCashOut() {
    const idArr = this.userService.myEarnings.map(item => item.id)

    this.earningService.cashOut(idArr).subscribe(res => {
      console.log(res);
      this.closeModal()
      this.userService.availableEarnings = 0
    })
  }

}
