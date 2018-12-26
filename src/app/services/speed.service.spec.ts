/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeedService } from './speed.service';

describe('SpeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedService]
    });
  });

  it('should ...', inject([SpeedService], (service: SpeedService) => {
    expect(service).toBeTruthy();
  }));
});
