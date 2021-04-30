import { CotacoesHistoricasB3Service } from './cotacoes-historicas-b3.service';
import { TestBed } from '@angular/core/testing';

describe('CotacoesHistoricasB3Service', () => {
  let service: CotacoesHistoricasB3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotacoesHistoricasB3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
