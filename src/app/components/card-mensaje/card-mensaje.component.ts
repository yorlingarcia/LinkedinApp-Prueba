import { Component } from '@angular/core';
import { CardMensaje, MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-card-mensaje',
  templateUrl: './card-mensaje.component.html',
  styleUrls: ['./card-mensaje.component.scss'],
})
export class CardMensajeComponent {
  bodyCardEneable: boolean = false;
  mostrarCampoMensaje: boolean = false;
  currentValue: number = 1;
  changeState() {
    this.bodyCardEneable = !this.bodyCardEneable;
  }

  CardsMensaje: CardMensaje[] = [
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

  menuItems: MenuItem[] = [
    {
      label: 'component.mensaje.config.archivados',
    },
    {
      label: 'component.mensaje.config.misContactos',
    },
    {
      label: 'component.mensaje.config.marcados',
    },
    {
      label: 'component.mensaje.config.noLeidos',
    },
    {
      label: 'component.mensaje.config.mensajesInMail',
    },
    {
      label: 'component.mensaje.config.noDeseados',
    },
  ];

  menuItemsCard: MenuItem[] = [
    {
      label: 'component.mensaje.card.opciones.moverOtros',
    },
    {
      label: 'component.mensaje.card.opciones.marcarFavorito',
    },
    {
      label: 'component.mensaje.card.opciones.archivar',
    },
    {
      label: 'component.mensaje.card.opciones.eliminar',
    },
    {
      label: 'component.mensaje.card.opciones.marcarNoLeido',
    },
    {
      label: 'component.mensaje.card.opciones.silenciar',
    },
  ];

  onFocus() {
    this.mostrarCampoMensaje = true;
  }

  onBlur() {
    this.mostrarCampoMensaje = false;
  }

  onValueindex(value: number) {
    this.currentValue = value;
  }
}
