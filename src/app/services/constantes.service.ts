import { Injectable } from '@angular/core';
import { CardMensaje } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConstantesService {
  //valor para la seccion de mensajes 1 -> prioritarios, 2 -> Otros
  currentValue: number = 1;
  getCurrentValue() {
    return this.currentValue;
  }
  setCurrentValue(value: number) {
    this.currentValue = value;
  }
  cardsMensaje: CardMensaje[] = [
    {
      nombre: 'Yorlin Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '12 abr',
    },
    {
      nombre: 'Yorlin Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '11 abr',
    },
    {
      nombre: 'Osney Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '19 jul 2022',
    },
    {
      nombre: 'Garcia Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '5 ene 2022',
    },
    {
      nombre: 'Sierra Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '13 dic 2021',
    },
  ];

  getCardsMensaje() {
    return this.cardsMensaje;
  }

  eliminarCardsMensaje(index: number) {
    this.cardsMensaje.splice(index, 1);
  }

  cardsMensajeOtros: CardMensaje[] = [
    {
      nombre: 'Yorlin Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '12 abr',
    },
  ];

  getCardsMensajeOtros() {
    return this.cardsMensajeOtros;
  }

  eliminarCardsMensajeOtros(index: number) {
    this.cardsMensajeOtros.splice(index, 1);
  }

  constructor() {}
}
