import { TestBed, inject } from '@angular/core/testing';

import { CollegeYearService } from './college-year.service';

describe('CollegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollegeYearService]
    });
  });

  it('should be created', inject([CollegeYearService], (service: CollegeYearService) => {
    expect(service).toBeTruthy();
  }));
});
