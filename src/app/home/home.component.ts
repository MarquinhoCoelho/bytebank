import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  public listaTransferencias: Transferencia[] = [];

  public listaEstados: string[] = ["SC", "SP", "RS", "PR", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "RR", "PE", "PI", "RJ", "RN", "RO", "SE", "TO"];

  public listaAgrupada: any[] = [];


  constructor(

    private transferenciaService: TransferenciaService

  ) { }

  ngOnInit(): void {

    this.buscarTransferencias();

  }

  buscarTransferencias() {
    this.transferenciaService.todas().subscribe((retorno) => {

      this.listaTransferencias = retorno;


      retorno.forEach((t) => {
        var grupo = this.listaAgrupada.filter((el) => { return el.uf == t.uf });

        if (grupo.length > 0) {
          grupo.find(g => g.uf = t.uf).valor += t.valor;
        } else {
          this.listaAgrupada.push({ "uf": t.uf, "valor": t.valor });
        }

      });

    },
      (err) => { },
      () => {
        console.log(this.listaAgrupada);
        console.log(this.listaTransferencias);
        this.graficoPizza();
      });

  }


  graficoPizza() {

    this.data = {
      labels:this.listaAgrupada.map( e => { return e.uf}),
      datasets: [
        {

          data: this.listaAgrupada.map( e => { return e.valor}  ),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#137",
            "green",
            "red",
            "#000",
            "#990E71",
            "#1877F2",
            "#430251",
            "#00ffff",
            "#ff00e5",
            "#00ff21",
            "#013516",
            "#ff970f",
            "#feff49",
            "#bfd8bf",
            "#7700ff",
            "#490000",
            "#0000ff",
            "#FA1567",
            "#34C966",
            "#00ffc3",
            "#afaf00",
            "#ff5000",
            "#ff9696",
            "#00ff94",
            "#ececec"
          ],
        },

      ]
    }
  }



}
