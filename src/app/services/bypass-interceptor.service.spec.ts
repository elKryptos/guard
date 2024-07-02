import { TestBed } from '@angular/core/testing';

import { BypassInterceptorService } from './bypass-interceptor.service';

describe('BypassInterceptorService', () => {
  let service: BypassInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BypassInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
