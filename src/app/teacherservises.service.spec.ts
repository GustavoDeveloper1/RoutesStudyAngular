import { TestBed } from '@angular/core/testing';

import { CursosservisesService } from './teacherservises.service';

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
