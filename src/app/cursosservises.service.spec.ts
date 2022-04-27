import { TestBed } from '@angular/core/testing';

import { CursosservisesService } from './cursosservises.service';

describe('CursosservisesService', () => {
  let service: CursosservisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosservisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
