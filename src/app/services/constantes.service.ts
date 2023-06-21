import { Injectable } from '@angular/core';
import { CardMensaje } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConstantesService {
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

  cardsMensajeOtros: CardMensaje[] = [
    {
      nombre: 'Yorlin Garcia',
      srcImg: './assets/img/perfil.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut volutpat quam, a tincidunt diam.',
      date: '12 abr',
    },
  ];

  constructor() {}
}
