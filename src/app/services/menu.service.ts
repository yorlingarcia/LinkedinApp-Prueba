import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConstantesService } from './constantes.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  //variable del indice
  indiceArray: number = 0;
  // seleccion del lenguaje
  languageSelected: string = 'es';
  constructor(
    private translateService: TranslateService,
    private constantes: ConstantesService
  ) {
    this.translateService.setDefaultLang(this.languageSelected);
    this.translateService.use(this.languageSelected);
  }

  accionMenu(opcion: string) {
    if (opcion.includes('es')) {
      this.translateService.use('es');
    } else if (opcion.includes('en')) {
      this.translateService.use('en');
    }
    //validacion para eliminar el componente
    if (opcion.includes('eliminar')) {
      console.log('Entrada a eliminar');
      this.eliminar();
    }
  }

  eliminar() {
    if (this.constantes.currentValue === 1) {
      this.constantes.eliminarCardsMensaje(this.indiceArray);
    } else if (this.constantes.currentValue === 2) {
      this.constantes.eliminarCardsMensajeOtros(this.indiceArray);
    }
    console.log(this.constantes.cardsMensaje);
  }
}
