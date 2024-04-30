import { Component } from '@angular/core';
import { FormatoDataPipe } from './formato-data.pipe';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
  providers: [FormatoDataPipe]
})
export class ListaProdutosComponent {

  dataRecebida: string = '2022-05-05';

  constructor() { }

}
