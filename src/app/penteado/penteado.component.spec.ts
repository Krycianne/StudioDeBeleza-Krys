import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenteadoComponent } from './penteado.component';

describe('PenteadoComponent', () => {
  let component: PenteadoComponent;
  let fixture: ComponentFixture<PenteadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenteadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenteadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
