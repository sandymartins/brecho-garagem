import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProdutosRoutingModule } from './lista-produtos-routing.module';
import { ListaProdutosComponent } from './lista-produtos.component';
import { FormatoDataPipe } from './formato-data.pipe';


@NgModule({
  declarations: [
    ListaProdutosComponent,
    FormatoDataPipe
  ],
  imports: [
    CommonModule,
    ListaProdutosRoutingModule
  ],
  exports: [
    ListaProdutosComponent
  ]
})
export class ListaProdutosModule { }
