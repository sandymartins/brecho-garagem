import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecoesComponent } from './produtos/secoes/secoes.component';

const routes: Routes = [
  {path: 'secoes', component: SecoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
