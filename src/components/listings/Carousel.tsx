"use client";

import { ApiResponse } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { Trending } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import CarouselItem from "./CarouselItem";
import PosterFallback from "@/assets/no-poster.png";
import Container from "../Container";

export default function Carousel() {
  const link: string = Trending("movie");
  const { data } = useQuery<ApiResponse>({
    queryKey: ["lists"],
    queryFn: () => fetchData(link),
  });

  return (
    <Container>
      <section className="flex flex-col gap-3 rounded-lg text-light">
        <h1 className="font-bold text-2xl opacity-80 tracking-wide">
          Trending
        </h1>
        <div className="flex gap-2 overflow-x-auto no-scrollbar space-x-1">
          {data?.results.map((item) => {
            let url = "https://image.tmdb.org/3/t/p/original";
            let posterUrl = item.poster_path
              ? url + item.poster_path
              : PosterFallback;
            return <CarouselItem key={item.id} posterUrl={posterUrl} />;
          })}
        </div>
      </section>
    </Container>
  );
}
