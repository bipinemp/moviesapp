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
      <section className="flex h-[310px] flex-col gap-3 rounded-lg mt-16">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl opacity-80 tracking-wide  text-light">
            Trending
          </h1>
          <div className="relative flex gap-3 p-1 border-[2px] border-white rounded-full">
            <span
              className={`w-[48%] h-full absolute ${
                active === "day" ? "translate-x-0" : "translate-x-full"
              } transition duration-200 ease-in-out top-0 bg-gradient-to-r from-darkprimary to-primary rounded-full z-0`}
            ></span>
            <button
              type="button"
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
              type="button"
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
