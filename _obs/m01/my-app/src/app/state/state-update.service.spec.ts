import { TestBed, inject } from '@angular/core/testing';

import { StateUpdateService } from './state-update.service';

describe('StateUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateUpdateService]
    });
  });

  it('should be created', inject([StateUpdateService], (service: StateUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
