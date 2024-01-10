import { TestBed } from '@angular/core/testing';

import { Web3connectService } from './web3connect.service';

describe('Web3connectService', () => {
  let service: Web3connectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3connectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
