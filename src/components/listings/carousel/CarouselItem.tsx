import { StaticImageData } from "next/image";
import CarouselImage from "./CarouselImage";

export default function CarouselItem({
  posterUrl,
  id,
  mediaType,
  media,
}: {
  posterUrl: StaticImageData | string;
  id: number | string;
  mediaType?: string | undefined;
  media: string;
}) {
  return (
    <>
      <div className="relative flex-shrink-0 w-fit h-fit">
        <CarouselImage
          posterUrl={posterUrl}
          id={id}
          mediaType={mediaType}
          media={media}
        />
      </div>
    </>
  );
}
