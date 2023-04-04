import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Service } from '../models';

@Component({
  selector: 'app-confirm-charge-modal',
  templateUrl: './confirm-charge-modal.component.html',
  styleUrls: ['./confirm-charge-modal.component.css']
})
export class ConfirmChargeModalComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<void>()
  @Output() submitNewService = new EventEmitter<void>()
  @Input() service: Service = {} as Service;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.toggleModal.emit()
  }

  confirmSubmit() {
    this.submitNewService.emit()
  }

}
