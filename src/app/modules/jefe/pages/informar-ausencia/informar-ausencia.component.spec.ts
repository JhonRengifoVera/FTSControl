import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarAusenciaComponent } from './informar-ausencia.component';

describe('InformarAusenciaComponent', () => {
  let component: InformarAusenciaComponent;
  let fixture: ComponentFixture<InformarAusenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformarAusenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformarAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
