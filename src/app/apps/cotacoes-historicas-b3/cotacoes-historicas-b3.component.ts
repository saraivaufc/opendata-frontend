import { Component, OnInit } from '@angular/core';

import { CotacoesHistoricasB3ListModel } from './cotacoes-historicas.model';
import { CotacoesHistoricasB3Service } from './cotacoes-historicas-b3.service';

@Component({
  selector: 'app-cotacoes-historicas-b3',
  templateUrl: './cotacoes-historicas-b3.component.html',
  styleUrls: [
    './cotacoes-historicas-b3.component.scss'
  ]
})
export class CotacoesHistoricasB3Component implements OnInit {
  cotacoesHistoricasB3List: CotacoesHistoricasB3ListModel

  public columnDefs;
  public rowData: [];
  public defaultColDef;
  public paginationPageSize;
  
  constructor(private cotacoesHistoricasB3Service: CotacoesHistoricasB3Service) { 
    this.columnDefs = [
      {
        headerName: 'DATA DO PREGÃO',
        field: 'datpre',
        filter: true
      },
      {
        headerName: 'CÓDIGO DE NEGOCIAÇÃO',
        field: 'codneg',
        filter: true
      },
      {
        headerName: 'NOME EMPRESA EMISSORA',
        field: 'nomres'
      },
      {
        headerName: 'MOEDA DE REFERÊNCIA',
        field: 'modref'
      },
      {
        headerName: 'PREÇO DE ABERTURA',
        field: 'preabe'
      },
      {
        headerName: 'PREÇO DE MÁXIMO',
        field: 'premax'
      },
      {
        headerName: 'PREÇO DE MÍNIMO',
        field: 'premin'
      },
      {
        headerName: 'PREÇO DE MÉDIO',
        field: 'premed'
      },
    ];

    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      floatingFilter: true,
      resizable: true,
    };
  }

  ngOnInit(): void {
    this.cotacoesHistoricasB3Service.getListCotacoesHistoricasB3()
      .subscribe((val) => {
        this.rowData = val['results'];
      });   
  }

}
