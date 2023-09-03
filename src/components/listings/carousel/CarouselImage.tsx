"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export default async function CarouselImage({
  posterUrl,
  id,
  mediaType,
  media,
}: {
  posterUrl: string | StaticImageData;
  id: number | string;
  mediaType: string;
  media: string;
}) {
  const router = useRouter();

  return (
    <>
      <Image
        src={posterUrl}
        alt="movie_tvshow_poster"
        width={150}
        height={200}
        onClick={() => router.push(`/${mediaType || media}/${id}`)}
        className="transition-opacity opacity-0 duration-[500ms] rounded-lg cursor-pointer bg-indigo-200"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
}
