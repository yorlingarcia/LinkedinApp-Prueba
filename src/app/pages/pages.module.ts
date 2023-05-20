import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar/navbar.component';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, PagesRoutingModule, AngularMaterialModule],
})
export class PagesModule {}
