import { Component, Input } from '@angular/core';
import { CardMensaje, MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-mensaje-card-info',
  templateUrl: './mensaje-card-info.component.html',
  styleUrls: ['./mensaje-card-info.component.scss'],
})
export class MensajeCardInfoComponent {
  @Input() cardsMensaje: CardMensaje[] = [];

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
}
