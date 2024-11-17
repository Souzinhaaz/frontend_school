import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protegidoGuard } from './protegido.guard';

describe('protegidoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protegidoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
