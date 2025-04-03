import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { splashGuard } from './splash.guard';

describe('splashGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => splashGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
