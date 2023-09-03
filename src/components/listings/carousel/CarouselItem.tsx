import { StaticImageData } from "next/image";
import CarouselImage from "./CarouselImage";
import { Suspense } from "react";
import PosterLoading from "../../loading/PosterLoading";

export default function CarouselItem({
  posterUrl,
  id,
  mediaType,
  media,
}: {
  posterUrl: StaticImageData | string;
  id: number | string;
  mediaType: string;
  media: string;
}) {
  return (
    <>
      <div className="relative flex-shrink-0 w-fit h-fit">
        <Suspense fallback={<PosterLoading />}>
          <CarouselImage
            posterUrl={posterUrl}
            id={id}
            mediaType={mediaType}
            media={media}
          />
        </Suspense>
      </div>
    </>
  );
}
