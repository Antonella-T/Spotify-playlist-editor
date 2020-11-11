import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PlaylistsModel } from '../../services/playlist.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  playlists: PlaylistsModel = {};

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.playlists = this.spotifyService.getPlaylists();
  }
}
