import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then(m => m.TesteModule)
  },
  { path: '', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
