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
