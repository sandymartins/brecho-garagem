import { NgModule } from '@angular/core';
import { TesteComponent } from './teste.component';
import { CommonModule } from '@angular/common';
import { TesteRoutingModule } from './teste-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule,
    SharedModule
  ],
  exports : [ TesteComponent ]
})
export class TesteModule { }
