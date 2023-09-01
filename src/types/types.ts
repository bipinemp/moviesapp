// Banner
export interface Banner {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface BannerType {
  dates: Dates;
  page: number;
  results: Banner[];
  total_pages: number;
  total_results: number;
}

// Trending types
export interface Movie {
  title: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
}

export interface TVShow {
  name: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
}

export interface ApiResponse {
  page: number;
  results: (Movie | TVShow)[];
  total_pages: number;
  total_results: number;
}
