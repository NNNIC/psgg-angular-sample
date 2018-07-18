import { TestBed, inject } from '@angular/core/testing';

import { StateProgramService } from './state-program.service';

describe('StateProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateProgramService]
    });
  });

  it('should be created', inject([StateProgramService], (service: StateProgramService) => {
    expect(service).toBeTruthy();
  }));
});
