import { TestBed } from '@angular/core/testing';

import { AsideInfoService } from './aside-info.service';

describe('AsideInfoService', () => {
  let service: AsideInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
