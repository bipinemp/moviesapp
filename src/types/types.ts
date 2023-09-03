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

// Trending | What's Popular | Top Rated all types
export interface Movie {
  title: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
  media_type?: string;
}

export interface TVShow {
  name: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
  media_type?: string;
}

export interface ApiResponse {
  page: number;
  results: (Movie | TVShow)[];
  total_pages: number;
  total_results: number;
}

// movie/tv details Type
export interface DetailsResponse {
  id: number;
  poster_path: string;
  original_title: string;
  title: string;
  name: string;
  tagline: string;
  genres: Genres[];
  vote_average: number;
  overview: string;
  status: string;
  release_date: string;
  runtime: number;
}

interface Genres {
  id: number;
  name: string;
}

// movie/tv Casts details Type
export interface CastType {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

interface Cast {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}

interface Crew {
  id: number;
  department: string;
  job: string;
  name: string;
  original_name: string;
  profile_path: string;
}

// Videos Type
export interface VideoType {
  id: number;
  results: Video[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: true;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

// Similar types and Recommendation types are same :)
export interface SimilarType {
  page: number;
  results: Similar[];
  total_pages: number;
  total_results: number;
}

export interface Similar {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  media_type?: string;
}
