import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.less']
})

/**
 * The Searchbar component
 */
export class SearchbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchedTags:string = "";
  onSearchAction(){
    // To handle multiple keywords separated by spaces
    // - trim the spaces around the edges
    // - replace multiple spaces between words with single space
    // - replace spaces with the + char
    this.searchedTags  = this.searchedTags.trim().replace(/\s\s+/g, ' ').replace(/\s/g, '+');
    
    // Call the search service to pass the tag to the pictures component
    this.searchService.invokeSearch(this.searchedTags);

    // Reset string to clear the search box
    this.searchedTags = "";
  }
}
