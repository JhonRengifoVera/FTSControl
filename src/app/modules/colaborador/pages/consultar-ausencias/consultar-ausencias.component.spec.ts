import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAusenciasComponent } from './consultar-ausencias.component';

describe('ConsultarAusenciasComponent', () => {
  let component: ConsultarAusenciasComponent;
  let fixture: ComponentFixture<ConsultarAusenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAusenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarAusenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
