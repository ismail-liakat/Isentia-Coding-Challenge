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
   * makeRestCall(string) - 
   *   - takes tags to be searched as Input string param 
   *   - calls the backend REST api
   *   - returns the JSON object holding the REST API response
   * */
  makeRestCall(tags: string){
    var apiURL = this.apiRoot;
    if(tags.trim().length !== 0){
      apiURL = apiURL+"/"+tags
    }
    return this.http.get(apiURL).pipe(map(response => response.json()));
  }
}