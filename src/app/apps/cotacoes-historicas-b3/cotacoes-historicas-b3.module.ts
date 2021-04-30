import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { CotacoesHistoricasB3Component } from './cotacoes-historicas-b3.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    CotacoesHistoricasB3Component
  ],
  imports: [
    CommonModule,
    AgGridModule .withComponents([]),
  ]
})
export class CotacoesHistoricasB3Module { }
