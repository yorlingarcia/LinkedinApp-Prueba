import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // seleccion del lenguaje
  languageSelected: string = 'es';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.languageSelected);
    this.translateService.use(this.languageSelected);
  }

  accionMenu(opcion: string) {
    if (opcion.includes('es')) {
      this.translateService.use('es');
    } else if (opcion.includes('en')) {
      this.translateService.use('en');
    }
  }
}
