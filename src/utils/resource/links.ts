export function Trending(type: string, format: string) {
  return `/trending/${type}/${format}?language=en-US`;
}

export const trendingBanner = "/trending/all/day?language=en-US";

export const upcoming = "/movie/upcoming?language=en-US&page=1";

export function Popular(type: string) {
  return `/${type}/popular?language=en-US&page=1`;
}

export function TopRated(type: string) {
  return `/${type}/top_rated?language=en-US&page=1`;
}

export const image = "https://image.tmdb.org/3/t/p/original";

export const details =
  "https://api.themoviedb.org/3/tv/1396?api_key=c3913f726cde9ba73b0b7211ecfc40b9";

export function CastsFn(type: string | number, id: number | string) {
  return `/${type}/${id}/credits`;
}
// /mediatype/id/videos
// /mediatype/id/credits
