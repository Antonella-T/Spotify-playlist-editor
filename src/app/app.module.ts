import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaylistContentComponent } from './components/playlist-content/playlist-content.component';
import { PlaylistResultsComponent } from './components/playlist-results/playlist-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistContentComponent,
    PlaylistResultsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
