import { Component } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-linea-divisora',
  templateUrl: './linea-divisora.component.html',
  styleUrls: ['./linea-divisora.component.scss'],
})
export class LineaDivisoraComponent {
  metodoValue: string = 'principal';

  constructor(private publicacionService: PublicacionService) {}

  eleccionDeOrden(value: string, orden: string) {
    this.metodoValue = value;
    this.publicacionService.ordernarArreglo(orden);
  }
}
