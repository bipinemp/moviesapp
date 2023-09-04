"use client";

import Container from "@/components/containers/Container";
import {
  CastType,
  DetailsResponse,
  SimilarType,
  VideoType,
} from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import {
  RecommendationFn,
  SimilarFn,
  VideoFn,
  image,
} from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CastsFn } from "@/utils/resource/links";
import Crews from "@/components/details/Crews";
import Casts from "@/components/details/Casts";
import DetailsLoading from "@/components/loading/DetailsLoading";
import Videos from "@/components/videos/Videos";
import Similar from "@/components/details/Similar";
import Recommedation from "@/components/details/Recommedation";
import PosterFallback from "@/assets/no-poster.png";
import { useState } from "react";

export default function Page({
  params,
}: {
  params: { slug: string[] | number[] };
}) {
  // movie console.log(params.slug[0]);
  // id  console.log(params.slug[1]);
  const [img, setImg] = useState<boolean>(true);

  const media = params.slug[0];
  const id = params.slug[1];

  const link: string = CastsFn(media, id);

  const { data, isLoading, isSuccess } = useQuery<DetailsResponse>({
    queryKey: ["details", params.slug[1]],
    queryFn: () =>
      fetchData(
        `/${params.slug[0]}/${params.slug[1]}?api_key=${process.env.NEXT_PUBLIC_IMDB_KEY}`
      ),
  });

  const {
    data: CastsCrews,
    isLoading: castsLoading,
    isSuccess: castsSuccess,
  } = useQuery<CastType>({
    queryKey: ["casts", params.slug[1]],
    enabled: isSuccess,
    queryFn: () => fetchData(link),
  });

  const videolink: string = VideoFn(media, id);
  const { data: VideosData, isLoading: videosLoading } = useQuery<VideoType>({
    queryKey: ["videos", params.slug[1]],
    enabled: castsSuccess,
    queryFn: () => fetchData(videolink),
  });

  const similarlink: string = SimilarFn(media, id);
  const { data: SimilarData, isLoading: similarLoading } =
    useQuery<SimilarType>({
      queryKey: ["similar", params.slug[1]],
      queryFn: () => fetchData(similarlink),
    });

  const recommendationlink: string = RecommendationFn(media, id);
  const { data: RecommendationData, isLoading: recommendationLoading } =
    useQuery<SimilarType>({
      queryKey: ["recommendation", params.slug[1]],
      queryFn: () => fetchData(recommendationlink),
    });

  if (isLoading) {
    return <DetailsLoading />;
  }

  function formatRuntime(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}m`;
    } else if (remainingMinutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${remainingMinutes}m`;
    }
  }

  let formattedRuntime;

  if (data?.runtime) {
    formattedRuntime = formatRuntime(data?.runtime);
  }

  return (
    <Container>
      <div className="flex flex-col gap-10 mb-10">
        {/* Movie/Show Details Section  */}
        <section className="mt-10 flex  gap-10 min-h-[400px] pl-1 py-3">
          <div className="relative w-[32%] rounded-lg">
            {data?.poster_path ? (
              <Image
                src={
                  data?.poster_path !== null
                    ? `${image}/${data?.poster_path}`
                    : PosterFallback
                }
                alt="poster image"
                fill
                loading="lazy"
                className={`object-fill rounded-lg ${
                  img ? "bg-gray-500 animate-pulse" : ""
                }`}
                onLoadingComplete={() => setImg(false)}
              />
            ) : (
              <p>loading image...</p>
            )}
          </div>

          <div className="relative w-full flex flex-col gap-6 pr-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-xl tracking-wide">
                {data?.title || data?.original_title || data?.name}
              </h1>
              <p className="text-light italic text-sm">{data?.tagline}</p>
              <div className="flex gap-3">
                {data?.genres.map((genre) => (
                  <p
                    key={genre.id}
                    className="bg-darkprimary py-1 px-2 tracking-wide rounded-md text-xs font-semibold"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>

            <div style={{ width: 50 }}>
              {data?.vote_average ? (
                <CircularProgressbar
                  value={data?.vote_average}
                  maxValue={10}
                  text={`${data?.vote_average.toFixed(1)}`}
                  styles={buildStyles({
                    pathColor:
                      data?.vote_average < 5
                        ? "red"
                        : data?.vote_average < 7
                        ? "orange"
                        : "green",
                    textColor: "white",
                    textSize: "30px",
                  })}
                />
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              {data?.overview ? (
                <>
                  <h1 className="text-xl font-medium tracking-wide">
                    Overview
                  </h1>
                  <p className="text-[0.8rem] text-light tracking-wide">
                    {data?.overview}
                  </p>
                </>
              ) : null}
            </div>

            <div className="flex gap-10 items-center border-b-[1px] pb-2 border-light">
              {data?.status ? (
                <div className="flex gap-2 items-center">
                  <p className="tracking-wide text-sm">Status:</p>
                  <p className="text-sm text-light">{data?.status}</p>
                </div>
              ) : null}
              {data?.release_date ? (
                <div className="flex gap-2 items-center">
                  <p className="tracking-wide text-sm">Release Date:</p>
                  <p className="text-sm text-light">{data?.release_date}</p>
                </div>
              ) : null}
              {data?.runtime ? (
                <div className="flex gap-2 items-center">
                  <p className="tracking-wide text-sm">Runtime:</p>
                  <p className="text-sm text-light">{formattedRuntime}</p>
                </div>
              ) : null}
            </div>

            <Crews data={CastsCrews} loading={castsLoading} />
          </div>
        </section>
        {/* Movie/Show Casts Section */}
        {CastsCrews && CastsCrews.cast.length > 0 ? (
          <section className="flex flex-col gap-5 min-h-[250px]">
            {castsLoading ? (
              <h1 className="bg-gray-500 w-[100px] h-[26px] animate-pulse rounded-md"></h1>
            ) : (
              <h1 className="text-lg tracking-wider font-semibold">
                Top Casts :
              </h1>
            )}
            <Casts data={CastsCrews} loading={castsLoading} />
          </section>
        ) : null}
        {/* Movie/Show Related Videos Section */}
        {VideosData && VideosData.results.length > 0 ? (
          <section className="min-h-[220px]">
            <Videos vidData={VideosData} loading={videosLoading} />
          </section>
        ) : null}
        {/* Border between Movies details and similar and recommendation  */}
        <hr className="border-light"></hr>
        {/* Similar Movies/Show Section */}
        {SimilarData && SimilarData.results.length > 0 ? (
          <section className="min-h-[310px]">
            <Similar
              media={String(params.slug[0])}
              data={SimilarData}
              loading={similarLoading}
            />
          </section>
        ) : null}
        {/* Recommendation Movie/Shows  Section  */}
        {RecommendationData && RecommendationData.results.length > 0 ? (
          <section className="min-h-[310px]">
            <Recommedation
              media={String(params.slug[0])}
              data={RecommendationData}
              loading={recommendationLoading}
            />
          </section>
        ) : null}
      </div>
    </Container>
  );
}
