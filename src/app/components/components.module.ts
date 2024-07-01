import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { SharedModule } from '../shared/shared.module';
import { DonaComponent } from './dona/dona.component';




@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
  ]
})
export class ComponentsModule { }
