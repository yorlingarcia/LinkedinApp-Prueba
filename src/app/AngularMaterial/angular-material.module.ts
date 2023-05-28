import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AngularMaterialModule {}
