import { Component } from '@angular/core';

import { ModalToggleService } from 'src/app/services/modal-toggle.service';

@Component({
  selector: 'app-modal-publicar',
  templateUrl: './modal-publicar.component.html',
  styleUrls: ['./modal-publicar.component.scss'],
})
export class ModalPublicarComponent {
  constructor(private modalToggleService: ModalToggleService) {}
  close() {
    this.modalToggleService.modal$.emit(false);
  }
}
