export interface PlaylistsModel {
  href?: string;
  items?: PlaylistModel[];
  limit?: number;
  next?: number;
  offset?: number;
  previous?: number;
  total?: number;
}

export interface PlaylistModel {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ImageModel[];
  name: string;
  owner: OwnerModel;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface ImageModel {
    height: number;
    url: string;
    width: number;
}

export interface OwnerModel {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
}