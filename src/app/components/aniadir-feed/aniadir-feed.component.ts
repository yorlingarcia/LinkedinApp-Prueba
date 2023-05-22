import { Component, Input } from '@angular/core';
import { CardSeguir } from 'src/app/interfaces/card-seguir.interface';

@Component({
  selector: 'app-aniadir-feed',
  templateUrl: './aniadir-feed.component.html',
  styleUrls: ['./aniadir-feed.component.scss'],
})
export class AniadirFeedComponent {
  @Input() listItem: CardSeguir[] = [];
}
