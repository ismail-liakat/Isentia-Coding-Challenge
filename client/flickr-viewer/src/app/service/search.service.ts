import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()

/**
 * This service is used to pass the tags entered in the searchbar component to the pictures component
 */
export class SearchService{
    

    @Output() search: EventEmitter<string> = new EventEmitter();

    invokeSearch(searchedTags:string){
        this.search.emit(searchedTags);
    }
}