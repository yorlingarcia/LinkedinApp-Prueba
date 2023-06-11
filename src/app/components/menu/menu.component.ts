import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items!: MenuItem[];
  @ViewChild('menu', { static: true }) menu!: TemplateRef<any>;
  hasChildren(item: MenuItem) {
    return item.children && item.children.length > 0;
  }

  constructor(private translateService: TranslateService) {}

  cambiarLenguaje(lang: string) {
    const lenguajeSeleccionado = lang.split('.').pop()!.toString();
    this.translateService.setDefaultLang(lenguajeSeleccionado);
    this.translateService.use(lenguajeSeleccionado);
  }
}