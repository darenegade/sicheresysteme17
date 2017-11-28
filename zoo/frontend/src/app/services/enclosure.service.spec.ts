import { TestBed, inject } from '@angular/core/testing';

import { EnclosureService } from './enclosure.service';

describe('EnclosureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnclosureService]
    });
  });

  it('should be created', inject([EnclosureService], (service: EnclosureService) => {
    expect(service).toBeTruthy();
  }));
});
