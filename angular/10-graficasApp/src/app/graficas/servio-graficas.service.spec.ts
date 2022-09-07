import { TestBed } from '@angular/core/testing';

import { ServioGraficasService } from './servio-graficas.service';

describe('ServioGraficasService', () => {
  let service: ServioGraficasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServioGraficasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
