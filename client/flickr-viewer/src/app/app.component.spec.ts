import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { PicturesComponent } from './component/pictures/pictures.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from './service/search.service';
import { FlickrRestService } from './service/flickr-rest.service';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      declarations: [
        AppComponent,
        SearchbarComponent,
        PicturesComponent
      ],
      providers: [
        SearchService, 
        FlickrRestService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  TestBed.configureTestingModule({
    imports: [
      HttpModule,
    ],
    providers: [Http, SearchService, 
      FlickrRestService]
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
