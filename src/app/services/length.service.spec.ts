/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LengthService } from './length.service';

describe('LengthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LengthService]
    });
  });

  it('should ...', inject([LengthService], (service: LengthService) => {
    expect(service).toBeTruthy();
  }));
});
