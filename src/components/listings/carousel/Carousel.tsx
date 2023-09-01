import React from "react";
import CarouselItem from "./CarouselItem";
import PosterFallback from "@/assets/no-poster.png";
import { ApiResponse } from "@/types/types";

function Carousel({ data }: { data: ApiResponse }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar space-x-1">
      {data?.results?.map((item) => {
        let url = "https://image.tmdb.org/3/t/p/original";
        let posterUrl = item.poster_path
          ? url + item.poster_path
          : PosterFallback;
        return <CarouselItem key={item.id} posterUrl={posterUrl} />;
      })}
    </div>
  );
}

export default Carousel;
