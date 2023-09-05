"use client";

import Container from "@/components/containers/Container";
import PosterFallback from "@/assets/no-poster.png";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";
import { fetchData, fetchInfiniteData } from "@/utils/apis/queries";
import { useRef, useEffect, useState } from "react";
import { Genre, InfiniteMovies } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import MoviesLoading from "@/components/details/loading/MoviesLoading";
import { GenreFn } from "@/utils/resource/links";

const Page = () => {
  const [sortOption, setSortOption] = useState<string>("popularity.desc");
  const [genreOption, setGenreOption] = useState<number>();

  const sortbyData = [
    { id: 1, value: "popularity.desc", label: "Popularity Descending" },
    { id: 2, value: "popularity.asc", label: "Popularity Ascending" },
    { id: 3, value: "vote_average.desc", label: "Rating Descending" },
    { id: 4, value: "vote_average.asc", label: "Rating Ascending" },
    {
      id: 5,
      value: "primary_release_date.desc",
      label: "Release Date Descending",
    },
    {
      id: 6,
      value: "primary_release_date.asc",
      label: "Release Date Ascending",
    },
    { id: 7, value: "original_title.asc", label: "Title (A-Z)" },
    { id: 8, value: "revenue.asc", label: "Box Office Ascending" },
    { id: 9, value: "revenue.desc", label: "Box Office Descending" },
    { id: 10, value: "runtime.asc", label: "Shortest Runtime" },

    { id: 11, value: "runtime.desc", label: "Longest Runtime" },
  ];

  const [img, setImg] = useState<boolean>(true);
  const lastMovieRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: lastMovieRef.current,
    threshold: 1,
  });

  const { fetchNextPage, isFetchingNextPage, data, isLoading, isError, error } =
    useInfiniteQuery<InfiniteMovies>({
      queryKey: ["infiniteMovies", sortOption],
      queryFn: ({ pageParam = 1 }) =>
        fetchInfiniteData("movie", pageParam, {
          sort_by: sortOption,
        }),
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    });

  const genreLink = GenreFn("movie");

  const { data: GenreData } = useQuery<Genre>({
    queryKey: ["genres"],
    queryFn: () => fetchData(genreLink),
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry]);

  if (isLoading) {
    return <MoviesLoading />;
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
  }

  return (
    <Container>
      <div>
        <div className="flex gap-10 items-center mt-5 mb-5 ml-2">
          <h1 className="text-2xl font-semibold tracking-wide">
            Explore Movies :
          </h1>
          <div className="flex gap-4">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="text-black py-1 pl-2 pr-9 rounded-lg cursor-pointer"
            >
              <option value="popularity.desc" disabled selected hidden>
                Sort By
              </option>
              {sortbyData &&
                sortbyData.map((val) => (
                  <option value={val.value} key={val.id}>
                    {val.label}
                  </option>
                ))}
            </select>

            <select className="text-black py-1 pl-2 pr-9 rounded-lg cursor-pointer">
              <option value="" disabled selected hidden>
                Select Genre
              </option>
              {GenreData &&
                GenreData?.genres.length > 0 &&
                GenreData?.genres.map((val, i) => {
                  return (
                    <option value={val.name} key={val.id}>
                      {val.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {data &&
            data?.pages.map((page) => page.results).flat().length > 0 &&
            data?.pages
              .map((page) => page.results)
              .flat()
              .filter((movie) => movie.id !== 1174030)
              .filter((movie) => movie.poster_path !== null)
              .map((movie, i) => {
                if (
                  i ===
                  data?.pages.map((page) => page.results).flat()?.length - 1
                )
                  return <div key={movie.id} ref={ref}></div>;
                return (
                  <div className="" key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>
                      <Image
                        src={`https://image.tmdb.org/3/t/p/original/${movie.poster_path}`}
                        width={150}
                        height={200}
                        alt="movie poster"
                        className={`mb-5 rounded-lg bg-gray-500 transition ease-in-out duration-200 hover:opacity-70 hover:scale-95${
                          img ? "bg-gray-500 animate-pulse" : ""
                        }`}
                        loading="lazy"
                        onLoadingComplete={() => setImg(false)}
                        quality={20}
                      />
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
};

export default Page;
