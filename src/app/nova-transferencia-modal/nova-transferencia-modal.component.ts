import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia-modal',
  templateUrl: './nova-transferencia-modal.component.html',
  styleUrls: ['./nova-transferencia-modal.component.scss']
})
export class NovaTransferenciaModalComponent implements OnInit {

  public displayNovaTransferencia:boolean = false;


  constructor() { }

  ngOnInit(): void {

  }


  cancelar(){

    this.displayNovaTransferencia = false;

  }



}
