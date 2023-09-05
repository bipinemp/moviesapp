"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CarouselImage({
  posterUrl,
  id,
  mediaType,
  media,
}: {
  posterUrl: string | StaticImageData;
  id: number | string;
  mediaType?: string | undefined;
  media: string;
}) {
  const [img, setImg] = useState<boolean>(true);
  return (
    <>
      <Link href={`/${mediaType || media}/${id}`}>
        <Image
          src={posterUrl}
          alt="movie_tvshow_poster"
          width={150}
          height={200}
          className={`rounded-lg cursor-pointer min-h-[230px] transition ease-in-out duration-200 hover:opacity-70 hover:scale-95${
            img ? "bg-gray-500 animate-pulse" : ""
          }`}
          onLoadingComplete={() => setImg(false)}
        />
      </Link>
    </>
  );
}
