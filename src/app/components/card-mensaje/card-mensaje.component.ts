import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-card-mensaje',
  templateUrl: './card-mensaje.component.html',
  styleUrls: ['./card-mensaje.component.scss'],
})
export class CardMensajeComponent {
  bodyCardEneable: boolean = false;
  changeState() {
    this.bodyCardEneable = !this.bodyCardEneable;
  }

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
}
