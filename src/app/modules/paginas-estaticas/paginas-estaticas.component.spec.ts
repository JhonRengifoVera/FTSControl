import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasEstaticasComponent } from './paginas-estaticas.component';

describe('PaginasEstaticasComponent', () => {
  let component: PaginasEstaticasComponent;
  let fixture: ComponentFixture<PaginasEstaticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginasEstaticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginasEstaticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
