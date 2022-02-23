import { Transferencia } from './../models/transferencia.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {


  private listaTransferecia: any[] = [];
  private url = 'http://localhost:3000/transferencias';
  id: string | number | undefined;


  constructor(private httpClient: HttpClient) {

    this.listaTransferecia = [];

  }

  get transferencias() {
    return this.listaTransferecia;

  }

  //busca tudo no db.json
  todas(): Observable<Transferencia[]> {

    return this.httpClient.get<Transferencia[]>(this.url);

  }

  //adiciona no db.json
  adicionar(transferencia: Transferencia): Observable<Transferencia> {

    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);

  }

  // edita uma transferencia pelo id
  editar(transferencia: Transferencia): Observable<Transferencia> {

    //o put precisa de uma url e um corpo, ou seja, preciso passar a url que irá fazer o put e também passar o objeto

    return this.httpClient.put<Transferencia>(`${this.url}/${transferencia.id}`, transferencia);

  }


  //deleta do db.json
  deletar(transferencia: Transferencia): Observable<Transferencia> {

    return this.httpClient.delete(`${this.url}/${transferencia.id}`);

  }


  /*

  se fosse por rota seria mais ou menos assim:

  deletar(id: string): Observable<Transferencia> {

    const baseUrl = `${this.url}/${id}`;
    return this.httpClient.delete<Transferencia>(baseUrl);
  }

  lerPorId(id:string):Observable<Transferencia> {

    const baseUrl = `${this.url}/${id}`;
    return this.httpClient.get<Transferencia>(baseUrl);
  }

  editar(transferencia: Transferencia): Observable<Transferencia>{

    const baseUrl = `${this.url}/${transferencia.id}`;
    return this.httpClient.put<Transferencia>(baseUrl, transferencia);
  }

*/

  private hidratar(transferencia: any) {

    transferencia.data = new Date();

  }

}
