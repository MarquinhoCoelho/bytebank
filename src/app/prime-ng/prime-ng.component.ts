import { Component, OnInit } from '@angular/core';

import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.scss']
})
export class PrimeNGComponent implements OnInit {


  public listaTransferencias: Transferencia[] = [];

  public selecionado1: Transferencia[] = [];





  constructor(
    private transferenciaService: TransferenciaService


  ) { }

  ngOnInit(): void {

    this.transferenciaService.todas().subscribe(
      (retorno) => {
        this.listaTransferencias = retorno;
      }


    );
  }





  selectProduct(product: Transferencia) {
    console.log({ severity: 'info', summary: 'Product Selected', detail: product.valor })
  }


  onRowSelect(event: any) {
    console.log({ severity: 'info', summary: 'Product Selected', detail: event.data });

    console.log(this.selecionado1);

  }

  onRowUnselect(event: any) {
    console.log({ severity: 'info', summary: 'Product Unselected', detail: event.data });
  }





}
