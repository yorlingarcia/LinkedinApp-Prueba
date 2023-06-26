import { Component } from '@angular/core';
import { CardMensaje, MenuItem } from 'src/app/interfaces';
import { ConstantesService } from 'src/app/services/constantes.service';

@Component({
  selector: 'app-card-mensaje',
  templateUrl: './card-mensaje.component.html',
  styleUrls: ['./card-mensaje.component.scss'],
})
export class CardMensajeComponent {
  bodyCardEneable: boolean = false;
  mostrarCampoMensaje: boolean = false;
  currentValue: number = 1;
  cardsMensaje: CardMensaje[] = [];
  cardsMensajeOtros: CardMensaje[] = [];
  constructor(private constante: ConstantesService) {
    this.cardsMensaje = this.constante.getCardsMensaje();
    this.cardsMensajeOtros = this.constante.getCardsMensajeOtros();
  }

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

  menuItems2: MenuItem[] = [
    {
      label: 'component.mensaje.tresPuntos.gestionarConversaciones',
    },
    {
      label: 'component.mensaje.tresPuntos.configuracionMensajes',
    },
    {
      label: 'component.mensaje.tresPuntos.mensajeAusencia',
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

  menuItemsCardOtros: MenuItem[] = [
    {
      label: 'component.mensaje.card.opciones.moverPrioritarios',
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
  ];

  onFocus() {
    this.mostrarCampoMensaje = true;
  }

  onBlur() {
    this.mostrarCampoMensaje = false;
  }

  onValueindex(value: number) {
    this.currentValue = value;
    this.constante.setCurrentValue(value);
  }
}
