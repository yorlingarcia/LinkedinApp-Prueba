import { Injectable } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  //fecha: string = '2023-05-27T22:25:00';
  fecha: Date = new Date();
  publicaciones: Publicacion[] = [];
  tiempoEstimado: string = '';

  publicaciones$: Publicacion[] = [
    {
      name: 'Yorlin Garcia',
      descripcion: 'Buenas noches, input de prueba para la descripcion',
      date: new Date().getTime(),
    },
  ];

  constructor() {}

  guardarPublicacion(publicacion: Publicacion): void {
    this.publicaciones$.push(publicacion);
  }

  getPublicaiones(): Publicacion[] {
    return this.publicaciones$;
  }

  calcularTiempoEstimado(tiempoActual: number): string {
    const fechaPublicacion = new Date(this.fecha);
    const diferenciaTiempo = Math.abs(
      tiempoActual - fechaPublicacion.getTime()
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
    return this.tiempoEstimado;
  }
}
