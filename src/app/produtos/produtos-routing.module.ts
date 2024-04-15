import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecoesComponent } from './secoes/secoes.component';

const routes: Routes = [
  { path: '', component: SecoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
