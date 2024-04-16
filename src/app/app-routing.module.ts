import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste/teste.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  { path: 'teste', component: TesteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  produtosMenuVisible = false;

  toggleProdutosMenu() {
    this.produtosMenuVisible = !this.produtosMenuVisible;
  }

}
