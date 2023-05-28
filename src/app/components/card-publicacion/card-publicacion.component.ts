import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-publicacion',
  templateUrl: './card-publicacion.component.html',
  styleUrls: ['./card-publicacion.component.scss'],
})
export class CardPublicacionComponent implements OnInit {
  //fecha: string = '2023-05-27T22:25:00';
  fecha: Date;
  constructor() {
    this.fecha = new Date();
  }

  tiempoEstimado: string = '';

  ngOnInit() {
    this.calcularTiempoEstimado();
  }

  calcularTiempoEstimado() {
    const fechaPublicacion = new Date(this.fecha);
    const tiempoActual = new Date();
    const diferenciaTiempo = Math.abs(
      tiempoActual.getTime() - fechaPublicacion.getTime()
    );

    const minutos = Math.floor(diferenciaTiempo / (1000 * 60));
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (dias > 0) {
      this.tiempoEstimado = `${dias} días atrás`;
    } else if (horas > 0) {
      this.tiempoEstimado = `${horas} horas atrás`;
    } else {
      this.tiempoEstimado = `${minutos} minutos atrás`;
    }
  }
}
