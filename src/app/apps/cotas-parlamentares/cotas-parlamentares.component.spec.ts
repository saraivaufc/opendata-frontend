import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotasParlamentaresComponent } from './cotas-parlamentares.component';

describe('CotasParlamentaresComponent', () => {
  let component: CotasParlamentaresComponent;
  let fixture: ComponentFixture<CotasParlamentaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotasParlamentaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotasParlamentaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
