import { Component, EventEmitter, Output } from '@angular/core';
import { ModalToggleService } from 'src/app/services/modal-toggle.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss'],
})
export class CrearPublicacionComponent {
  constructor(private modalToggleService: ModalToggleService) {}

  // funcion para abrir el modal
  open() {
    this.modalToggleService.modal$.emit(true);
  }
}
