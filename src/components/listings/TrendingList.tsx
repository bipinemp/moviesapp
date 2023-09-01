"use client";

import { ApiResponse } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { Trending } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Container from "../Container";
import Carousel from "./carousel/Carousel";
import { useState } from "react";

export default function TrendingList() {
  const [active, setActive] = useState<string>("day");

  const link: string = Trending("movie", active);
  const { data } = useQuery<ApiResponse>({
    queryKey: ["lists", active],
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
      <section className="flex flex-col gap-3 rounded-lg mt-16">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl opacity-80 tracking-wide  text-light">
            Trending
          </h1>
          <div className="relative transition-all ease-in-out duration-300 flex gap-3 p-1 border-[2px] border-white rounded-full">
            <span
              className={`w-[100px] h-full absolute ${
                active === "day" ? "left-0" : "right-0"
              } top-0 bg-blue-500 rounded-full z-0`}
            ></span>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("day");
              }}
              className={`z-20 py-1 px-5 font-bold tracking-wide ${
                active === "day" ? "bg-primarydark" : ""
              }`}
            >
              Day
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("week");
              }}
              className={`z-20 py-1 px-5 font-bold tracking-wide ${
                active === "week" ? "bg-primarydark" : ""
              }`}
            >
              week
            </button>
          </div>
        </div>
        <Carousel data={trendingData} />
      </section>
    </Container>
  );
}
