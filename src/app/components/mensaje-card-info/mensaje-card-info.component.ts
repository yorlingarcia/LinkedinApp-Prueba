import { Component, Input } from '@angular/core';
import { CardMensaje, MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-mensaje-card-info',
  templateUrl: './mensaje-card-info.component.html',
  styleUrls: ['./mensaje-card-info.component.scss'],
})
export class MensajeCardInfoComponent {
  @Input() cardsMensaje: CardMensaje[] = [];
  @Input() menuItemsCard: MenuItem[] = [];
}
