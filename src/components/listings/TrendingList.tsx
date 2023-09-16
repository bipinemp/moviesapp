"use client";

import { ApiResponse } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { Trending } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Container from "../containers/Container";
import Carousel from "./carousel/Carousel";
import { useState } from "react";
import CarouselLoading from "./loading/CarouselLoading";

export default function TrendingList() {
  const [active, setActive] = useState<string>("day");

  const type = "movie";

  const link: string = Trending("movie", active);
  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ["trending", active],
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
      <section className="flex h-[310px] flex-col gap-3 rounded-lg mt-16">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl sm:text-2xl opacity-80 tracking-wide  text-light">
            Trending
          </h1>

          <div className="relative flex gap-3 p-1 border-[2px] border-white rounded-full">
            <span
              className={`w-[48%] h-full absolute ${
                active === "day" ? "translate-x-0" : "translate-x-full"
              } transition duration-200 ease-in-out top-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full z-0`}
            ></span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleClick("day");
              }}
              className="select-none bg-transparent active:bg-gray-600/60 rounded-full z-20 text-sm sm:text-base py-1 px-2 sm:px-5 font-semibold tracking-wide"
            >
              Day
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleClick("week");
              }}
              className="select-none bg-transparent active:bg-gray-600/60 rounded-full z-20 text-sm sm:text-base py-1 px-2 sm:px-5 font-semibold tracking-wide"
            >
              week
            </button>
          </div>
        </div>

        {isLoading ? (
          <CarouselLoading />
        ) : (
          <Carousel data={trendingData} media={type} />
        )}
      </section>
    </Container>
  );
}
