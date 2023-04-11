import { TestBed } from '@angular/core/testing';

import { PenteadoService } from './penteado.service';

describe('PenteadoService', () => {
  let service: PenteadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenteadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
