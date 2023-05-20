import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { SplashScreenComponent } from '../components/splash-screen/splash-screen.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, SplashScreenComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterialModule,
    TranslateModule,
  ],
})
export class PagesModule {}
