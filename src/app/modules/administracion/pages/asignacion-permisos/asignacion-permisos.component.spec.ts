import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionPermisosComponent } from './asignacion-permisos.component';

describe('AsignacionPermisosComponent', () => {
  let component: AsignacionPermisosComponent;
  let fixture: ComponentFixture<AsignacionPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionPermisosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
