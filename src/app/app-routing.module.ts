import { RouterModule, Routes } from '@angular/router';

import { CotacoesHistoricasB3Component } from './apps/cotacoes-historicas-b3/cotacoes-historicas-b3.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'cotacoes-historicas-b3',
    component: CotacoesHistoricasB3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
