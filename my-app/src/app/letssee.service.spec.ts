import { TestBed } from '@angular/core/testing';

import { LetsseeService } from './letssee.service';

describe('LetsseeService', () => {
  let service: LetsseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetsseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
