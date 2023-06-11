import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { SplashScreenComponent } from '../components/splash-screen/splash-screen.component';
import { AniadirFeedComponent } from '../components/aniadir-feed/aniadir-feed.component';
import { CardMensajeComponent } from '../components/card-mensaje/card-mensaje.component';
import { CardPublicacionComponent } from '../components/card-publicacion/card-publicacion.component';
import { InfoAppComponent } from '../components/info-app/info-app.component';
import { PerfilBienvenidaComponent } from '../components/perfil-bienvenida/perfil-bienvenida.component';
import { CrearPublicacionComponent } from '../components/crear-publicacion/crear-publicacion.component';
import { ModalPublicarComponent } from '../components/modal-publicar/modal-publicar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LineaDivisoraComponent } from '../components/linea-divisora/linea-divisora.component';
import { GruposComponent } from '../components/grupos/grupos.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MiRedComponent } from './mi-red/mi-red.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SplashScreenComponent,
    PerfilBienvenidaComponent,
    AniadirFeedComponent,
    CardMensajeComponent,
    InfoAppComponent,
    CardPublicacionComponent,
    CrearPublicacionComponent,
    ModalPublicarComponent,
    LineaDivisoraComponent,
    GruposComponent,
    MenuComponent,
    MiRedComponent,
    EmpleosComponent,
    MensajesComponent,
    NotificacionesComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
