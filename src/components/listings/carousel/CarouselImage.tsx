import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  return (
    <>
      <Link href={`/${mediaType || media}/${id}`}>
        <Image
          src={posterUrl}
          alt="movie_tvshow_poster"
          width={150}
          height={200}
          className="rounded-lg cursor-pointer bg-gray-500"
        />
      </Link>
    </>
  );
}
