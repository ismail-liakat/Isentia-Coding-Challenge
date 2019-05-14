import { TestBed } from '@angular/core/testing';

import { FlickrRestService } from './flickr-rest.service';

describe('FlickrRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrRestService = TestBed.get(FlickrRestService);
    expect(service).toBeTruthy();
  });
});
