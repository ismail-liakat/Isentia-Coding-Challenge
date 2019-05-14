import { Component, OnInit } from '@angular/core';
import { FlickrRestService } from '../../service/flickr-rest.service';
import { Observable, observable } from 'rxjs';
import { Picture } from '../../model/picture.model';
import { SearchService } from '../../service/search.service';
import { map } from 'rxjs/operators';
import { error } from 'util';

@Component({
  selector: 'pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.less']
})

/**
 * The Pictures component - To display the picture grid
 */
export class PicturesComponent implements OnInit{
  
  // picture object is observable to auto update the UI when search is invoked
  private pictures$: Observable<Picture[]>;

  private responseCode$: Observable<number>;

  private searchedTags: string = "";

  private apiResponse:any[];

  private tagsToDisplay: string;
  private shouldShow: string="no";
  constructor(private flickrService: FlickrRestService, private searchService : SearchService) {}

  ngOnInit() {
    // Subscriber to get the tags passed on by the searchbar component
    this.searchService.search.subscribe(searchedTags => {
      this.searchedTags = searchedTags;

      // Sanitize  the tag string and save to temp to display in UI if necessary
      this.tagsToDisplay = this.searchedTags.replace(/\+/g, ' ');

      // Invoke the backend call during the search event
      this.doSearchV2();
    });

    // Invoke the backend call on page load
    this.doSearchV2();  
  }

  /**
   * Invokes the backend call via the service
   * Passess the response to a method to handle the response object
   */
  doSearchV2(){
    this.flickrService.makeRestCall(this.searchedTags)
    .subscribe(response => {this.updatePicture(response), this.updateResponseCode(response)}, error=>{this.errorHandler()});
  }

  /**
   * @param jsonData
   * Handle the response object
   *   - Modify the observable fields to update the view
   */
  updatePicture(jsonData){
    
    // picture$ is used to refresh the Picture Grid
    this.pictures$ = Observable.create((observer) => {
      observer.next(jsonData.pictures.map(picture => { // Create Picture objects from JSON
        return new Picture(
          picture.title,
          picture.link,
          picture.media.m
        );
      }));
    });


  }
  updateResponseCode(jsonData){
    // responseCode is used to update the view based on error code
    this.responseCode$ = Observable.create((observer) => {
      observer.next(jsonData.returnCode);
    });
  }

  errorHandler(){
    // returnCode is always 1 from backend for failures
    this.updateResponseCode({returnCode:1});
  }

}
