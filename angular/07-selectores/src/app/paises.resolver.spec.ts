import { TestBed } from '@angular/core/testing';

import { PaisesResolver } from './paises.resolver';

describe('PaisesResolver', () => {
  let resolver: PaisesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PaisesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
