import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Picture } from '../model/picture.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class FlickrRestService {
  apiRoot: string = environment.restApiBaseURL;
  constructor(private http: Http) {}

  /**
   * getPictures(string) - 
   *   - takes tags to be searched as Input string param 
   *   - calls the backend REST api
   *   - converts json to Picture model
   *   - returns an observable object of type Picture[]
   * */
  getPictures(tags: string): Observable<Picture[]> {
    var apiURL = this.apiRoot;
    if(tags.trim().length > 0){
      apiURL = apiURL+"/"+tags
    }
    return this.http.get(apiURL).pipe( // Call the backend api
      map(res => { // Convert response body to JSON
        return res.json().pictures.map(picture => { // Create Picture objects from JSON
          return new Picture(
            picture.title,
            picture.link,
            picture.media.m
          );
        });
      })
    );
  }

  makeRestCall(tags: string){
    var apiURL = this.apiRoot;
    if(tags.trim().length !== 0){
      apiURL = apiURL+"/"+tags
    }
    return this.http.get(apiURL).pipe(map(response => response.json()));
  }
}