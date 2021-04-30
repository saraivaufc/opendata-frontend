import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CotacoesHistoricasB3Module } from './apps/cotacoes-historicas-b3/cotacoes-historicas-b3.module';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './base/footer/footer.component';
import { HeaderComponent } from './base/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloaderComponent } from './base/preloader/preloader.component';
import { ScrollupComponent } from './base/scrollup/scrollup.component';
import { ServiceComponent } from './components/service/service.component';
import { SliderComponent } from './base/slider/slider.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ServiceComponent,
    PreloaderComponent,
    ScrollupComponent,
    FeatureComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    // Apps
    CotacoesHistoricasB3Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
