import Image, { StaticImageData } from "next/image";

export default async function CarouselImage({
  posterUrl,
}: {
  posterUrl: string | StaticImageData;
}) {
  return (
    <>
      <Image
        src={posterUrl}
        alt="movie_tvshow_poster"
        width={150}
        height={120}
        className="object-contain rounded-lg cursor-pointer bg-indigo-200"
      />
    </>
  );
}
