"use client";

import Container from "@/components/containers/Container";
import { CastType, DetailsResponse } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { image } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CastsFn } from "@/utils/resource/links";
import Crews from "@/components/details/Crews";
import Casts from "@/components/details/Casts";

export default function Page({
  params,
}: {
  params: { slug: string[] | number[] };
}) {
  // movie console.log(params.slug[0]);
  // id  console.log(params.slug[1]);

  const { data } = useQuery<DetailsResponse>({
    queryKey: ["details", params.slug[1]],
    queryFn: () =>
      fetchData(
        `/${params.slug[0]}/${params.slug[1]}?api_key=${process.env.NEXT_PUBLIC_IMDB_KEY}`
      ),
  });

  const media = params.slug[0];
  const id = params.slug[1];

  const link: string = CastsFn(media, id);

  const { data: CastsCrews } = useQuery<CastType>({
    queryKey: ["casts"],
    queryFn: () => fetchData(link),
  });

  if (!data || !CastsCrews) {
    return <p>No data available</p>;
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

  const formattedRuntime = formatRuntime(data?.runtime);

  return (
    <Container>
      <section className="mt-10 flex justify-center gap-10 mb-10">
        <div>
          <Image
            src={`${image}/${data?.poster_path}`}
            alt="poster image"
            width={250}
            height={100}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="relative flex flex-col gap-6 w-[60%]">
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
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium tracking-wide">Overview</h1>
            <p className="text-[0.8rem] text-light tracking-wide">
              {data?.overview}
            </p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] pb-2 border-light">
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

          <Crews data={CastsCrews} />
          <Casts data={CastsCrews} />
        </div>
      </section>
    </Container>
  );
}
