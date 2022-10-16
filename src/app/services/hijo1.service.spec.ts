import { TestBed } from '@angular/core/testing';

import { Hijo1Service } from './hijo1.service';

describe('Hijo1Service', () => {
  let service: Hijo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hijo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
