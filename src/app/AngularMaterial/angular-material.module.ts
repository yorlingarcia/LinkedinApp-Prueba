import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    CdkMenuModule,
    MatTreeModule,
  ],
})
export class AngularMaterialModule {}
