"use client";

import Container from "@/components/containers/Container";
import PosterFallback from "@/assets/no-poster.png";
import MoviesLoading from "@/components/details/loading/MoviesLoading";

import { ApiResponse } from "@/types/types";
import { fetchInfiniteSearchResults } from "@/utils/apis/queries";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function page() {
  const [img, setImg] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const lastResultRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: lastResultRef.current,
    threshold: 1,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch();
  }

  const { data, fetchNextPage, isFetchingNextPage, isLoading, refetch } =
    useInfiniteQuery<ApiResponse>({
      queryKey: ["search"],
      queryFn: ({ pageParam = 1 }) =>
        fetchInfiniteSearchResults(searchInput, pageParam),
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      enabled: false,
    });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container>
      <div className="mt-5 flex flex-col gap-5">
        <form
          onSubmit={handleSearchSubmit}
          className="flex w-[500px] mx-auto border-[2px] rounded-xl"
        >
          <input
            value={searchInput}
            onChange={handleChange}
            type="text"
            className="w-full bg-transparent py-3 pl-3 text-white/70 pr-5 focus:outline-none tracking-wider placeholder:text-[0.85rem]"
            placeholder="Enter Movie/Show to Search..."
          />
          <button className="px-5 bg-gradient-to-r from-red-500 rounded-r-[0.6rem] to-orange-500">
            Search
          </button>
        </form>
        {/* {isLoading ? <MoviesLoading /> : null} */}
        <p className="text-2xl text-center mt-10 text-primary tracking-wider font-semibold">
          {data && data?.pages?.map((page) => page.results).flat().length > 0
            ? ""
            : "Nothing to Show please search :)"}
        </p>
        <div className="flex gap-[11px] flex-wrap justify-center">
          {data &&
            data?.pages
              .map((page) => page.results)
              .flat()
              .filter(
                (result) =>
                  result.media_type === "movie" || result.media_type === "tv"
              )
              .map((result, i) => {
                if (
                  i ===
                  data?.pages.map((page) => page.results).flat()?.length - 1
                )
                  return <div key={result.id} ref={ref}></div>;
                return (
                  <div
                    key={result.id}
                    className="reltive transition ease-in-out duration-200 hover:scale-95"
                  >
                    <Link href={`${result.media_type}/${result.id}`}>
                      <Image
                        src={
                          result.poster_path !== null
                            ? `https://image.tmdb.org/3/t/p/original/${result.poster_path}`
                            : PosterFallback
                        }
                        width={150}
                        height={200}
                        alt="result poster"
                        className={`mb-5 rounded-lg bg-gray-500 hover:opacity-70 ${
                          img ? "bg-gray-500 animate-pulse" : ""
                        }`}
                        loading="lazy"
                        onLoadingComplete={() => setImg(false)}
                        quality={20}
                      />
                      {/* <div className="w-10 absolute bottom-3 -left-1 border-[2px] border-white rounded-full">
                        {result.vote_average ? (
                          <CircularProgressbar
                            value={result.vote_average}
                            maxValue={10}
                            text={`${result.vote_average.toFixed(1)}`}
                            background
                            backgroundPadding={4}
                            className="font-bold"
                            styles={buildStyles({
                              pathColor:
                                result.vote_average < 5
                                  ? "red"
                                  : result.vote_average < 7
                                  ? "orange"
                                  : "green",
                              textColor: "black",
                              textSize: "35px",
                              backgroundColor: "white",
                              trailColor: "transparent",
                            })}
                          />
                        ) : null}
                      </div> */}
                    </Link>
                  </div>
                );
              })}
          <span className="relative w-full text-center text-xl m-2">
            {isFetchingNextPage ? (
              <div
                className="text-center m-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-darkprimary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            ) : null}
          </span>
        </div>
      </div>
    </Container>
  );
}
