import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon";
import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste/teste.component';
import { MatBadgeModule } from "@angular/material/badge"
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule,
    MatBadgeModule,
    AppMaterialModule,
    MatIconModule
  ],
  exports : [ TesteComponent ]
})
export class TesteModule { }
