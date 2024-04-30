import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  produtosMenuVisible = false;

  toggleProdutosMenu() {
    this.produtosMenuVisible = !this.produtosMenuVisible;
  }
  title = 'brecho-garagem';

  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }

  produtos = [
    { nome: 'Verão', rota: '/verao' },
    { nome: 'Inverno', rota: '/inverno' },
    { nome: 'Infantil', rota: '/infantil' },
    { nome: 'Produtos', rota: '/listaProdutos' }
  ];

}
