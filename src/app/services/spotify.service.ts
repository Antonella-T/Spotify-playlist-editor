import { Injectable } from '@angular/core';
import { PlaylistsModel } from './playlist.model';

@Injectable()
export class SpotifyService {

  getPlaylists(): PlaylistsModel {
    return {
      href: "https://api.spotify.com/v1/users/gon_nofx/playlists?offset=0&limit=20",
      items: [
        {
          collaborative: false,
          description: "",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/4rFlqBX4X57PHnGr96ID5u"
          },
          href: "https://api.spotify.com/v1/playlists/4rFlqBX4X57PHnGr96ID5u",
          id: "4rFlqBX4X57PHnGr96ID5u",
          images: [],
          name: "test2",
          owner: {
            display_name: "gon_nofx",
            external_urls: {
              spotify: "https://open.spotify.com/user/gon_nofx"
            },
            href: "https://api.spotify.com/v1/users/gon_nofx",
            id: "gon_nofx",
            type: "user",
            uri: "spotify:user:gon_nofx"
          },
          primary_color: null,
          public: false,
          snapshot_id: "MSxlNDdjYTc4NTg5MmRhNDM2ZGI1ZmMyMWIwMGRmNzFlNWFmYmI5NTY1",
          tracks: {
            href: "https://api.spotify.com/v1/playlists/4rFlqBX4X57PHnGr96ID5u/tracks",
            total: 0
          },
          type: "playlist",
          uri: "spotify:playlist:4rFlqBX4X57PHnGr96ID5u"
        },
        {
          collaborative: false,
          description: "",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/3HwjSYpC3W9JT9i5GsonDJ"
          },
          href: "https://api.spotify.com/v1/playlists/3HwjSYpC3W9JT9i5GsonDJ",
          id: "3HwjSYpC3W9JT9i5GsonDJ",
          images: [
            {
              height: 640,
              url: "https://mosaic.scdn.co/640/ab67616d0000b2734a8168a723a90d7e187e3a5fab67616d0000b273530db954283883866bc21a95ab67616d0000b2736983bc9d98d9ae5d858fb46dab67616d0000b273f5f40f1013cd62539fac2e18",
              width: 640
            },
            {
              height: 300,
              url: "https://mosaic.scdn.co/300/ab67616d0000b2734a8168a723a90d7e187e3a5fab67616d0000b273530db954283883866bc21a95ab67616d0000b2736983bc9d98d9ae5d858fb46dab67616d0000b273f5f40f1013cd62539fac2e18",
              width: 300
            },
            {
              height: 60,
              url: "https://mosaic.scdn.co/60/ab67616d0000b2734a8168a723a90d7e187e3a5fab67616d0000b273530db954283883866bc21a95ab67616d0000b2736983bc9d98d9ae5d858fb46dab67616d0000b273f5f40f1013cd62539fac2e18",
              width: 60
            }
          ],
          name: "Test",
          owner: {
            display_name: "gon_nofx",
            external_urls: {
              spotify: "https://open.spotify.com/user/gon_nofx"
            },
            href: "https://api.spotify.com/v1/users/gon_nofx",
            id: "gon_nofx",
            type: "user",
            uri: "spotify:user:gon_nofx"
          },
          primary_color: null,
          public: true,
          snapshot_id: "MTM4LDEyYTk5NDdmNzMxNzllYzA0MzVkZjZhMDQyNjhiNTVhNDgxZDg2YWE=",
          tracks: {
            href: "https://api.spotify.com/v1/playlists/3HwjSYpC3W9JT9i5GsonDJ/tracks",
            total: 7
          },
          type: "playlist",
          uri: "spotify:playlist:3HwjSYpC3W9JT9i5GsonDJ"
        },
        {
          collaborative: false,
          description: "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZEVXcUcpfKpC6CDk"
          },
          href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcUcpfKpC6CDk",
          id: "37i9dQZEVXcUcpfKpC6CDk",
          images: [
            {
              height: null,
              url: "https://newjams-images.scdn.co/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default",
              width: null
            }
          ],
          name: "Discover Weekly",
          owner: {
            display_name: "Spotify",
            external_urls: {
              spotify: "https://open.spotify.com/user/spotify"
            },
            href: "https://api.spotify.com/v1/users/spotify",
            id: "spotify",
            type: "user",
            uri: "spotify:user:spotify"
          },
          primary_color: null,
          public: false,
          snapshot_id: "MjY1MDYwODAsMDAwMDAwMDA4ODFlZDMwNmFlYWViNjQ0ODNmYjM2ZTRmMWFjMmYyZA==",
          tracks: {
            href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcUcpfKpC6CDk/tracks",
            total: 30
          },
          type: "playlist",
          uri: "spotify:playlist:37i9dQZEVXcUcpfKpC6CDk"
        }
      ],
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 3
    }
  }
}