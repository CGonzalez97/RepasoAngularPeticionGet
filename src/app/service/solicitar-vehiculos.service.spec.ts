import { TestBed } from '@angular/core/testing';

import { SolicitarVehiculosService } from './solicitar-vehiculos.service';

describe('SolicitarVehiculosService', () => {
  let service: SolicitarVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
