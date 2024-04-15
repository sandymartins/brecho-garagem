import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutosService } from './../services/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secoes',
  templateUrl: './secoes.component.html',
  styleUrls: ['./secoes.component.scss']
})

export class SecoesComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = ['nome', 'categoria'];

  //  produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {
    // this.produtos = [];
    // this.produtosService = new ProdutosService();
  }

  ngOnInit(): void {
    this.produtos = this.produtosService.list();
  }
}
