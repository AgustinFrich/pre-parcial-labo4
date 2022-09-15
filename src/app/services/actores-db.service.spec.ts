import { TestBed } from '@angular/core/testing';

import { ActoresDbService } from './actores-db.service';

describe('ActoresDbService', () => {
  let service: ActoresDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoresDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
