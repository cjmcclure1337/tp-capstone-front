import { TestBed } from '@angular/core/testing';

import { PortfolioAPIService } from './portfolio-api.service';

describe('PortfolioAPIService', () => {
  let service: PortfolioAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
