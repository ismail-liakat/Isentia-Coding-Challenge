import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesComponent } from './pictures.component';
import { SearchService } from 'src/app/service/search.service';
import { FlickrRestService } from 'src/app/service/flickr-rest.service';
import { HttpModule } from '@angular/http';

describe('PicturesComponent', () => {
  let component: PicturesComponent;
  let fixture: ComponentFixture<PicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ PicturesComponent ], 
      providers: [
        SearchService, 
        FlickrRestService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
