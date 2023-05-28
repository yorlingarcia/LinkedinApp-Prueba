import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalToggleService } from 'src/app/services/modal-toggle.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-modal-publicar',
  templateUrl: './modal-publicar.component.html',
  styleUrls: ['./modal-publicar.component.scss'],
})
export class ModalPublicarComponent {
  @Input() dateNow: any;

  constructor(
    private modalToggleService: ModalToggleService,
    private fb: FormBuilder,
    private publicacionService: PublicacionService
  ) {}

  miFormulario: FormGroup = this.fb.group({
    descripcion: ['', Validators.required],
  });

  close() {
    this.modalToggleService.modal$.emit(false);
  }

  guardar() {
    this.publicacionService.guardarPublicacion({
      name: 'Yorlin Garcia',
      descripcion: this.miFormulario.value.descripcion,
      date: new Date().toDateString(),
    });
    this.close();
  }
}
