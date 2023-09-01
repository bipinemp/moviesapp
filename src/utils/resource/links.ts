export function Trending(type: string) {
  return `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`;
}

export const trendingBanner = "trending/all/day?language=en-US";

export const upcoming = "/movie/upcoming?language=en-US&page=1";

export const image = "https://image.tmdb.org/3/t/p/original";
