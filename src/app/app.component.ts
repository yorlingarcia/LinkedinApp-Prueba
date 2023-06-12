import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ItemsNavBar } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnicaImagineApp';
  private roter = inject(Router);
  private selectedLanguage = 'es';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  modalSwitch: boolean = false;
  homeReady: boolean = true;
  // Carga el splash screen inicial
  ngOnInit(): void {
    this.roter.navigateByUrl('/feed');
    setTimeout(() => {
      this.homeReady = false;
    }, 2500);
  }

  itemsNavBar: ItemsNavBar[] = [
    {
      label: 'page.home.navBar.inicio',
      svgUrl: './assets/svg/iconoInicio.svg',
      routUrlGlobal: 'inicio',
      altImg: 'Boton de Inicio',
      badgeNumber: 0,
    },
    {
      label: 'page.home.navBar.miRed',
      svgUrl: './assets/svg/iconoMiRed.svg',
      routUrlGlobal: 'miRed',
      altImg: 'Boton de mi red',
    },
    {
      label: 'page.home.navBar.empleos',
      svgUrl: './assets/svg/iconoEmpleos.svg',
      routUrlGlobal: 'empleos',
      altImg: 'Boton de empleos',
    },
    {
      label: 'page.home.navBar.mensajes',
      svgUrl: './assets/svg/iconoMensajes.svg',
      routUrlGlobal: 'mensajes',
      altImg: 'Boton de mensajes',
      badgeNumber: 3,
    },
    {
      label: 'page.home.navBar.notificaciones',
      svgUrl: './assets/svg/iconoNotificaciones.svg',
      routUrlGlobal: 'notificaciones',
      altImg: 'Boton de notificaciones',
      badgeNumber: 5,
    },
  ];
}
