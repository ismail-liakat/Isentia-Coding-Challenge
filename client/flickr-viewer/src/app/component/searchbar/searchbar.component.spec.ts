import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let service: SearchService;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarComponent ],
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule
      ],
      providers: [
        SearchService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = new SearchService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' Call to onSearchaction should succeed ', () => {
    let searchedTags = "";
    spyOn(component,'onSearchAction');

    component.onSearchAction();

    expect(component.onSearchAction).toHaveBeenCalled();


  });

  it('In the onSearchAction method, the searchedTags string should be reset', () => {
    component.searchedTags = "Test";
    
    component.onSearchAction();

    expect(component.searchedTags).toBe("");
  });

});
