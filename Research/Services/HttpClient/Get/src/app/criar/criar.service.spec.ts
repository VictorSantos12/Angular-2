import { TestBed } from '@angular/core/testing';

import { CriarService } from './criar.service';

describe('CriarService', () => {
  let service: CriarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
