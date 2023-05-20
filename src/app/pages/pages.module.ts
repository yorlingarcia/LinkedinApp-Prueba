import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterialModule,
    TranslateModule,
  ],
})
export class PagesModule {}
