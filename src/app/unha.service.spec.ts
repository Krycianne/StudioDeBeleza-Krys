import { TestBed } from '@angular/core/testing';

import { UnhaService } from './unha.service';

describe('UnhaService', () => {
  let service: UnhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
