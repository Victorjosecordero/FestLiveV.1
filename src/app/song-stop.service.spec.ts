import { TestBed } from '@angular/core/testing';

import { SongStopService } from './service/song-stop.service';

describe('SongStopService', () => {
  let service: SongStopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongStopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
