import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxilioEmergencialComponent } from './auxilio-emergencial.component';

describe('AuxilioEmergencialComponent', () => {
  let component: AuxilioEmergencialComponent;
  let fixture: ComponentFixture<AuxilioEmergencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxilioEmergencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxilioEmergencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
