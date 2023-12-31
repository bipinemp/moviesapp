import React from "react";
import CarouselItem from "./CarouselItem";
import PosterFallback from "@/assets/no-poster.png";
import { ApiResponse, SimilarType } from "@/types/types";

function Carousel<T>({ data, media }: { data: T; media: string }) {
  return (
    <div className="flex gap-3 pl-2 overflow-x-auto no-scrollbar space-x-1">
      {(data as ApiResponse | SimilarType)?.results?.map((item) => {
        let url = "https://image.tmdb.org/3/t/p/original";
        let posterUrl =
          item.poster_path !== null ? url + item.poster_path : PosterFallback;
        return (
          <CarouselItem
            key={item.id}
            id={item.id}
            mediaType={item.media_type}
            media={media}
            posterUrl={posterUrl}
            rating={item.vote_average}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
