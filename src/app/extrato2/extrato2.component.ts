import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-extrato2',
  templateUrl: './extrato2.component.html',
  styleUrls: ['./extrato2.component.scss']
})
export class Extrato2Component implements OnInit {

  public listaTransferencias: Transferencia[] = [];


  // Cada checkbox que for selecionado vai entrar aqui
  public selecionado1: Transferencia[] = [];
  public soma: number = 0;

  constructor(

    private transferenciaService: TransferenciaService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {

    this.buscarTransferencias();

  }



  confirm(transferencia: Transferencia): void {

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {

        this.excluir(transferencia);

      }
    });
  }

  confirmDeletarTudo(): void {

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir todos os itens Selecionados?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {

        this.excluirMultiplos(this.selecionado1);

      }
    });

  }

  total() {

    const transferencias = this.listaTransferencias;

    const lista = transferencias.map(elemento => {
      return {

        "valor": elemento.valor

      }

    });

    this.soma = lista.reduce((prevVal, elem) => prevVal + Number(elem.valor), 0)
  }


  excluirMultiplos(listaId: Transferencia[]): void {

    listaId.forEach(elemento => {

      this.excluir(elemento)

    });
    setTimeout(() => { this.buscarTransferencias(); }, 500);

    return;
  }

  //Atualiza a tabela e o Total
  buscarTransferencias() {
    this.transferenciaService.todas().subscribe((retorno) => {

      this.listaTransferencias = retorno;
      this.total();
    });

  }

  //isso é dos checkbox
  onRowSelect(event: any) {

    console.log(this.selecionado1);

  }


  //isso é dos checkbox
  onRowUnselect(product: Transferencia) {

    console.log(this.selecionado1);

  }

  refresh(): void {
    this.buscarTransferencias();

  }

  //exclui o item que foi selecionado
  async excluir(transferencia: Transferencia): Promise<void> {

    return new Promise<void>(async (resolve, reject) => {

      this.transferenciaService.deletar(transferencia).subscribe(retorno => {

        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado' });
        resolve()
        this.buscarTransferencias();
      },

        error => {

          alert('Não foi possível deletar')
          reject()

        }
      );
    });


  }

  //Adiciona uma nova Transferencia
  novaTransferencia() {

    this.dialogService.open(NovaTransferenciaComponent, {

      width: '800px',

      header: 'Nova Transferencia'

    }).onClose.subscribe((data) => {

      this.buscarTransferencias();
    });
  }

  //chama o modal Editar
  modalEditar(transferencia: Transferencia): void {

    this.dialogService.open(NovaTransferenciaComponent, {


      header: 'Editar Transferencia',

      data: {

        // Object.assign faz com que uma cópia do objeto transferencia seja gerada para que não altere em tempo real a variavel na tela

        transferencia: Object.assign({}, transferencia)
      }

    }).onClose.subscribe((data) => {

      this.buscarTransferencias();

    });


  }
}
