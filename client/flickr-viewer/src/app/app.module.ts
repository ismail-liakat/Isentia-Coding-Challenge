import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { PicturesComponent } from './component/pictures/pictures.component';
import { FlickrRestService } from './service/flickr-rest.service';
import { SearchService } from './service/search.service';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FlickrRestService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
