import { Injectable } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  //fecha: string = '2023-05-27T22:25:00';
  fecha: Date = new Date();
  tiempoEstimado: string = '';

  publicaciones: Publicacion[] = [
    {
      name: 'Yorlin Garcia',
      descripcion: 'Buenas noches, input de prueba para la descripcion',
      date: new Date(),
    },
  ];

  private publicacionesAuxiliar = [...this.publicaciones];

  constructor() {}

  guardarPublicacion(publicacion: Publicacion): void {
    this.publicaciones.push(publicacion);
  }

  getPublicaiones(): Publicacion[] {
    return this.publicaciones;
  }

  ordernarArreglo(orden: string) {
    console.log('Entrada a ordenar', this.publicaciones);
    if (orden === 'ascendente') {
      this.publicaciones.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else {
      this.publicaciones.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    console.log('arreglo ordenado', this.publicaciones);
  }

  // calcularTiempoEstimado(tiempoActual: number): string {
  //   const fechaPublicacion = new Date(this.fecha);
  //   const diferenciaTiempo = Math.abs(
  //     tiempoActual - fechaPublicacion.getTime()
  //   );

  //   const minutos = Math.floor(diferenciaTiempo / (1000 * 60));
  //   const horas = Math.floor(minutos / 60);
  //   const dias = Math.floor(horas / 24);

  //   if (dias > 0) {
  //     this.tiempoEstimado = `${dias} días atrás`;
  //   } else if (horas > 0) {
  //     this.tiempoEstimado = `${horas} horas atrás`;
  //   } else {
  //     this.tiempoEstimado = `${minutos} minutos atrás`;
  //   }
  //   return this.tiempoEstimado;
  // }
}
