import { TestBed } from '@angular/core/testing';

import { PeliculasDBService } from './peliculas-db.service';

describe('PeliculasDBService', () => {
  let service: PeliculasDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
