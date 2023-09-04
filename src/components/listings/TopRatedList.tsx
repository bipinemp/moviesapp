"use client";

import { ApiResponse } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { useQuery } from "@tanstack/react-query";
import Container from "../containers/Container";
import Carousel from "./carousel/Carousel";
import { useState } from "react";
import { TopRated } from "@/utils/resource/links";
import CarouselLoading from "./loading/CarouselLoading";

export default function TopRatedList() {
  const [active, setActive] = useState<string>("movie");

  const link: string = TopRated(active);
  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ["toprated", link],
    queryFn: () => fetchData(link),
  });

  const trendingData: ApiResponse = data || {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  function handleClick(state: string) {
    setActive(state);
  }

  return (
    <Container>
      <section className="flex h-[310px] flex-col gap-3 rounded-lg mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl opacity-80 tracking-wide  text-light">
            Top Rated
          </h1>

          <div className="relative flex gap-3 p-1 border-[2px] border-white rounded-full">
            <span
              className={`w-[48%] h-full absolute ${
                active === "movie" ? "translate-x-0" : "translate-x-full"
              } transition duration-200 ease-in-out top-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full z-0`}
            ></span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleClick("movie");
              }}
              className={`z-20 py-1 px-5 font-bold tracking-wide ${
                active === "movie" ? "bg-primarydark" : ""
              }`}
            >
              movie
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleClick("tv");
              }}
              className={`z-20 py-1 px-5 font-bold tracking-wide ${
                active === "tv" ? "bg-primarydark" : ""
              }`}
            >
              series
            </button>
          </div>
        </div>
        {isLoading ? (
          <CarouselLoading />
        ) : (
          <Carousel data={trendingData} media={active} />
        )}
      </section>
    </Container>
  );
}
