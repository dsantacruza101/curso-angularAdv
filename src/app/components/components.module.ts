import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [IncrementadorComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [IncrementadorComponent]
})
export class ComponentsModule { }
