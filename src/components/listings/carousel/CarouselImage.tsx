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
        height={200}
        className="transition-opacity opacity-0 duration-[500ms] rounded-lg cursor-pointer bg-indigo-200"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
}
