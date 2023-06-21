import { Component, Input } from '@angular/core';
import { CardMensaje, MenuItem } from 'src/app/interfaces';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-mensaje-card-info',
  templateUrl: './mensaje-card-info.component.html',
  styleUrls: ['./mensaje-card-info.component.scss'],
})
export class MensajeCardInfoComponent {
  @Input() cardsMensaje: CardMensaje[] = [];
  @Input() menuItemsCard: MenuItem[] = [];

  constructor(private menu: MenuService) {}

  actualizarIndice(index: number) {
    this.menu.indiceArray = index;
  }
}
