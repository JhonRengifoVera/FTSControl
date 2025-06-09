import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAreaComponent } from './gestion-area.component';

describe('GestionAreaComponent', () => {
  let component: GestionAreaComponent;
  let fixture: ComponentFixture<GestionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
