import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAusenciaComponent } from './solicitar-ausencia.component';

describe('SolicitarAusenciaComponent', () => {
  let component: SolicitarAusenciaComponent;
  let fixture: ComponentFixture<SolicitarAusenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarAusenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
