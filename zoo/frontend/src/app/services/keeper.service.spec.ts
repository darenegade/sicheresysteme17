import { TestBed, inject } from '@angular/core/testing';

import { KeeperService } from './keeper.service';

describe('KeeperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeeperService]
    });
  });

  it('should be created', inject([KeeperService], (service: KeeperService) => {
    expect(service).toBeTruthy();
  }));
});
