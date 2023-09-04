"use client";

import Container from "@/components/containers/Container";
import PosterFallback from "@/assets/no-poster.png";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";
import { fetchInfiniteData } from "@/utils/apis/queries";
import { useRef, useEffect, useState } from "react";
import { InfiniteMovies } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import MoviesLoading from "@/components/details/loading/MoviesLoading";

const Page = () => {
  const [img, setImg] = useState<boolean>(true);
  const lastMovieRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: lastMovieRef.current,
    threshold: 0.6,
  });

  const { fetchNextPage, isFetchingNextPage, data, isLoading, isError, error } =
    useInfiniteQuery<InfiniteMovies>({
      queryKey: ["infiniteMovies"],
      queryFn: ({ pageParam = 1 }) => fetchInfiniteData("movie", pageParam),
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry]);

  if (isLoading) {
    return <MoviesLoading />;
  }

  const movies = data?.pages.map((page) => page.results).flat();

  return (
    <Container>
      <div>
        <div className="flex gap-3 flex-wrap justify-center">
          {movies?.map((movie, i) => {
            if (i === movies?.length - 1)
              return <div key={movie.id} ref={ref}></div>;
            return (
              <div className="relative w-[180px] h-[270px]" key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path !== null
                        ? `https://image.tmdb.org/3/t/p/original/${movie.poster_path}`
                        : PosterFallback
                    }
                    fill
                    alt="movie poster"
                    className={`mb-5 rounded-lg bg-gray-500${
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
