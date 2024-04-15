import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  list(): Produto[] {
    return [
      { _id: '1', nome: 'Polo', categoria: 'camiseta' }
    ];
  }
}
