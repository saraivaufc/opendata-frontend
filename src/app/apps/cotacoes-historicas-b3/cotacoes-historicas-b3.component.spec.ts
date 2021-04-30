import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacoesHistoricasB3Component } from './cotacoes-historicas-b3.component';

describe('CotacoesHistoricasB3Component', () => {
  let component: CotacoesHistoricasB3Component;
  let fixture: ComponentFixture<CotacoesHistoricasB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacoesHistoricasB3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacoesHistoricasB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
