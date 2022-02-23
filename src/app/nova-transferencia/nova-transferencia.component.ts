import { Estado } from './../models/estado.model';
import { Transferencia } from './../models/transferencia.model';

import { Component, EventEmitter, Output, SimpleChanges } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  transferencia: Transferencia = {
    valor: undefined,
    destino: undefined,
    telefone: undefined,
    cpf: undefined,
    uf: undefined
  };

  valor: number | undefined;
  destino: number | undefined;


  estados: string[];
  estadoSelecionado: Estado | undefined;

  //DynamicDialogRef responsável por fechar o modal ( dentro de ref tem um close ou onClose() )
  //DynamicDialogConfig Não sei direito mas acho que traz os dados de um modal como heigth, width, data ...

  constructor(private service: TransferenciaService, private router: Router, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {

    this.estados = [

      'SC',
      'SP',
      'RS',


    ];

  }

  ngOnInit(): void {

    if (this.config?.data?.transferencia) {
      this.transferencia = this.config.data.transferencia;

    }
  }

  transferir() {

    if (this.transferencia.id) {

      this.editar();

    } else {
      this.novaTransferencia();
    }

  }

  novaTransferencia() {

    // const idEstado = this.estadoSelecionado?.id;
    // const valor = this.transferencia.valor;
    // const cpf = this.transferencia.cpf;
    // const telefone = this.transferencia.telefone;
    // const destino = this.transferencia.destino;

    // this.transferencia = {
    //   "cpf": cpf,
    //   "valor": valor,
    //   "telefone": telefone,
    //   "destino": destino,
    //   "uf": idEstado
    // }


    console.log(this.transferencia, "transferencia aqui");

    // this.transferencia = {
    //   "id": undefined
    // }

    this.service.adicionar(this.transferencia).subscribe(resultado => {
      console.log(resultado);

      this.router.navigateByUrl('extrato2');
      this.ref.close();

    },

      (error) => console.error(error)

    );
  }

  editar() {

    this.service.editar(this.transferencia).subscribe(resultado => {

      this.router.navigateByUrl('extrato2');
      this.ref.close();
    },

      (error) => console.error(error)

    );
  }
}


// meuObjeto = {
//   nome:
//   estado: {

//   }
// }

// meuObjeto.estado.
