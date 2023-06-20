import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // seleccion del lenguaje
  languageSelected: string = 'es';

  constructor() {}

  accionMenu(opcion: string) {
    console.log(opcion);

    if (opcion.includes('es')) {
      this.languageSelected = 'es';
    } else if (opcion.includes('en')) {
      this.languageSelected = 'en';
    }
  }
}
