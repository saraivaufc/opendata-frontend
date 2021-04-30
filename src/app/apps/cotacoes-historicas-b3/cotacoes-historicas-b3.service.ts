import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { CotacoesHistoricasB3ListModel } from './cotacoes-historicas.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotacoesHistoricasB3Service {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  
  constructor(private httpClient: HttpClient) { }

  getListCotacoesHistoricasB3(){
    const params = new HttpParams()
      // .set('codes', codes.join(','))

    return this.httpClient.get(
      `${environment.apiURL}/cotacoes_historicas_b3`, 
      {headers: this.httpOptions.headers, params })
  }
  
}
