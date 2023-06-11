import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MiRedComponent } from './mi-red/mi-red.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'feed',
    component: HomeComponent,
  },
  {
    path: 'miRed',
    component: MiRedComponent,
  },
  {
    path: 'empleos',
    component: EmpleosComponent,
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
  },
  {
    path: 'notificaciones',
    component: NotificacionesComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: '**',
    redirectTo: 'feed',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
