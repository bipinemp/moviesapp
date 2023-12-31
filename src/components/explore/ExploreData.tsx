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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ExploreData = ({
  media_type,
  queryKey,
}: {
  media_type: string;
  queryKey: string;
}) => {
  const [sortOption, setSortOption] = useState<string>();
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

  const lastMovieRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: lastMovieRef.current,
    threshold: 1,
  });

  const { fetchNextPage, isFetchingNextPage, data, isLoading, isError, error } =
    useInfiniteQuery<InfiniteMovies>({
      queryKey: [queryKey, sortOption, genreOption],
      queryFn: ({ pageParam = 1 }) =>
        fetchInfiniteData(media_type, pageParam, {
          ...(sortOption && { sort_by: sortOption }),
          ...(genreOption && { with_genres: genreOption }),
        }),
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    });

  const genreLink = GenreFn(media_type);

  const { data: GenreData } = useQuery<Genre>({
    queryKey: ["genres"],
    queryFn: () => fetchData(genreLink),
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
  }

  function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedGenre = e.target.value;
    setGenreOption(Number(selectedGenre));
  }

  return (
    <Container>
      <div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center mt-2 sm:mt-5 mb-5 ml-2">
          <h1 className="text-[1.1rem] md:text-2xl font-semibold tracking-wide">
            {media_type === "movie" ? "Explore Movies" : "Explore TV Shows"} :
          </h1>
          <div className="flex flex-col foot:flex-row gap-2 sm:gap-4">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="text-black py-1 pl-1 text-[0.75rem] sm:text-base rounded-lg cursor-pointer outline-[3px] outline-transparent border-[3px] border-transparent focus:border-[3px] focus:border-primary focus:outline-[3px] focus:outline-primary"
            >
              <option defaultValue="" disabled selected hidden>
                Sort By
              </option>
              {sortbyData &&
                sortbyData.map((val) => (
                  <option value={val.value} key={val.id}>
                    {val.label}
                  </option>
                ))}
            </select>

            <select
              onChange={handleGenreChange}
              className="text-black py-1 pl-1 text-[0.75rem] sm:text-base rounded-lg cursor-pointer outline-[3px] outline-transparent border-[3px] border-transparent focus:border-[3px] focus:border-primary focus:outline-[3px] focus:outline-primary"
            >
              <option defaultValue="" disabled selected hidden>
                Select Genre
              </option>
              {GenreData &&
                GenreData?.genres.length > 0 &&
                GenreData?.genres.map((val, i) => {
                  return (
                    <option value={val.id} key={val.id}>
                      {val.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        {isLoading ? <MoviesLoading /> : null}

        <div className="flex gap-[11px] flex-wrap justify-center">
          {data &&
            data?.pages.map((page) => page.results).flat().length > 0 &&
            data?.pages
              .map((page) => page.results)
              .flat()
              .filter((movie) => movie.id !== 1174030)
              .map((movie, i) => {
                if (
                  i ===
                  data?.pages.map((page) => page.results).flat()?.length - 1
                )
                  return <div key={movie.id} ref={ref}></div>;
                return (
                  <div
                    className="relative transition ease-in-out duration-200 hover:scale-95"
                    key={movie.id}
                  >
                    <Link href={`/movie/${movie.id}`}>
                      <Image
                        src={
                          movie.poster_path !== null
                            ? `https://image.tmdb.org/3/t/p/original/${movie.poster_path}`
                            : PosterFallback
                        }
                        width={150}
                        height={226}
                        alt="movie poster"
                        className="mb-5 rounded-lg bg-gray-500 hover:opacity-70"
                        loading="lazy"
                        quality={20}
                      />
                      <div className="w-9 sm:w-12 absolute bottom-2 transition duration-200 border-[2px] border-white rounded-full">
                        <CircularProgressbar
                          value={movie?.vote_average}
                          maxValue={10}
                          text={`${movie?.vote_average.toFixed(1)}`}
                          background
                          backgroundPadding={4}
                          className="font-bold"
                          styles={buildStyles({
                            pathColor:
                              movie?.vote_average < 5
                                ? "red"
                                : movie?.vote_average < 7
                                ? "orange"
                                : "green",
                            textColor: "black",
                            textSize: "35px",
                            backgroundColor: "white",
                            trailColor: "transparent",
                          })}
                        />
                      </div>
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

export default ExploreData;
