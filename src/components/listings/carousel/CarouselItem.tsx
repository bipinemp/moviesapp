import { StaticImageData } from "next/image";
import CarouselImage from "./CarouselImage";

export default function CarouselItem({
  posterUrl,
  id,
  mediaType,
  media,
  rating,
}: {
  posterUrl: StaticImageData | string;
  id: number | string;
  mediaType?: string | undefined;
  media: string;
  rating?: number;
}) {
  return (
    <>
      <div className="relative flex-shrink-0 w-fit min-h-[250px] h-fit transition ease-in-out duration-200 hover:opacity-70 hover:scale-95 bg-gradient-to-t from-black">
        <CarouselImage
          posterUrl={posterUrl}
          id={id}
          mediaType={mediaType}
          media={media}
          rating={rating}
        />
      </div>
    </>
  );
}
