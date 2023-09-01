export function Trending(type: string, format: string) {
  return `/trending/${type}/${format}?language=en-US`;
}

export const trendingBanner = "/trending/all/day?language=en-US";

export const upcoming = "/movie/upcoming?language=en-US&page=1";

export const image = "https://image.tmdb.org/3/t/p/original";
