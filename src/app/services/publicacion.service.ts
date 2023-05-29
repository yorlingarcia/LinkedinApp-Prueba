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
      date: this.fecha,
      dateNumber: this.fecha.getTime(),
    },
  ];

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
      this.publicaciones.sort((a, b) => a.dateNumber - b.dateNumber);
    } else {
      this.publicaciones.sort((a, b) => b.dateNumber - a.dateNumber);
    }
    console.log('arreglo ordenado', this.publicaciones);
  }
}
