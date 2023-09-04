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
  mediaType?: string | undefined;
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
        className="rounded-lg cursor-pointer bg-gray-500"
      />
    </>
  );
}
