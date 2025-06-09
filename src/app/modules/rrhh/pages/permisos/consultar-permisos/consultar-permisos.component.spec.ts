import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPermisosComponent } from './consultar-permisos.component';

describe('ConsultarPermisosComponent', () => {
  let component: ConsultarPermisosComponent;
  let fixture: ComponentFixture<ConsultarPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarPermisosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
