import { TestBed } from '@angular/core/testing';

import { CarcardService } from './carcard.service';

describe('CarcardService', () => {
  let service: CarcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
