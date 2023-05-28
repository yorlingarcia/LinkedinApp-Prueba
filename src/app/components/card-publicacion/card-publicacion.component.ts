import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-card-publicacion',
  templateUrl: './card-publicacion.component.html',
  styleUrls: ['./card-publicacion.component.scss'],
})
export class CardPublicacionComponent {
  //fecha: string = '2023-05-27T22:25:00';
  publicaciones: Publicacion[] = [];
  constructor(private publicacionService: PublicacionService) {
    this.publicaciones = this.publicacionService.getPublicaiones();
  }

  obeterTiempo(tiempoActual: number): string {
    return this.publicacionService.calcularTiempoEstimado(tiempoActual);
  }
}
