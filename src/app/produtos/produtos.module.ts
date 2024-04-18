import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { SecoesComponent } from './secoes/secoes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SecoesComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ]
})
export class ProdutosModule { }
