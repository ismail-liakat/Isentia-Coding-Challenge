import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { from } from 'rxjs';

describe('SearchService', () => {
    var service: SearchService;
  
  beforeEach(() =>{
    service = new SearchService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should raise search event when invokeSearch method is called', () => {
    let tags = "";  
    spyOn(service.search,'emit');
    service.search.subscribe(searchedTag => tags=searchedTag);

    service.invokeSearch(tags);

    expect(service.search.emit).toHaveBeenCalled();
  });
});