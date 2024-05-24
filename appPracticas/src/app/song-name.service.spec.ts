import { TestBed } from '@angular/core/testing';

import { SongNameService } from './service/song-name.service';

describe('SongNameService', () => {
  let service: SongNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
