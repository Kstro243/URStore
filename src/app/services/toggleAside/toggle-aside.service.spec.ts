import { TestBed } from '@angular/core/testing';

import { ToggleAsideService } from './toggle-aside.service';

describe('ToggleAsideService', () => {
  let service: ToggleAsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleAsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
