import { TestBed } from '@angular/core/testing';

import { FlickrRestService } from './flickr-rest.service';
import { HttpModule } from '@angular/http';

describe('FlickrRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpModule
    ],providers: [
      FlickrRestService
    ]
  }));

  it('should be created', () => {
    const service: FlickrRestService = TestBed.get(FlickrRestService);
    expect(service).toBeTruthy();
  });
});
