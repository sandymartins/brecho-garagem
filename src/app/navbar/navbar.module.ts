import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
