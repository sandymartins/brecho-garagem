import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produtosMenuVisible = false;

  toggleProdutosMenu() {
    this.produtosMenuVisible = !this.produtosMenuVisible;
  }
  title = 'brecho-garagem';

  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }

}
