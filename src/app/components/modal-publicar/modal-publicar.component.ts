import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalToggleService } from 'src/app/services/modal-toggle.service';

@Component({
  selector: 'app-modal-publicar',
  templateUrl: './modal-publicar.component.html',
  styleUrls: ['./modal-publicar.component.scss'],
})
export class ModalPublicarComponent {
  @Input() dateNow: any;

  constructor(
    private modalToggleService: ModalToggleService,
    private fb: FormBuilder
  ) {}

  miFormulario: FormGroup = this.fb.group({
    descripcion: ['', Validators.required],
  });

  close() {
    this.modalToggleService.modal$.emit(false);
  }

  guardar() {
    console.log(
      'fecha de guardado: ',
      this.dateNow,
      'Entrada: ',
      this.miFormulario.value
    );
  }
}
