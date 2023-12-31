"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PosterFallback from "@/assets/no-poster.png";

export default function CarouselImage({
  posterUrl,
  id,
  mediaType,
  media,
  rating,
}: {
  posterUrl: string | StaticImageData;
  id: number | string;
  mediaType?: string | undefined;
  media: string;
  rating?: number;
}) {
  const handleClick = () => {};
  return (
    <>
      <Link href={`/${mediaType || media}/${id}`}>
        <Image
          onClick={handleClick}
          src={
            posterUrl === undefined || posterUrl === null
              ? PosterFallback
              : posterUrl
          }
          alt="movie_tvshow_poster"
          width={150}
          height={200}
          className="rounded-lg cursor-pointer min-h-[230px] opacity-90 bg-gray-600"
        />
        {rating ? (
          <div className="w-9 sm:w-12 absolute bottom-2 transition duration-200 -left-1 border-[2px] border-white rounded-full">
            <CircularProgressbar
              value={rating}
              maxValue={10}
              text={`${rating.toFixed(1)}`}
              background
              backgroundPadding={4}
              className="font-bold"
              styles={buildStyles({
                pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textColor: "black",
                textSize: "35px",
                backgroundColor: "white",
                trailColor: "transparent",
              })}
            />
          </div>
        ) : null}
      </Link>
    </>
  );
}
