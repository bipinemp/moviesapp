import { StaticImageData } from "next/image";
import CarouselImage from "./CarouselImage";
import { Suspense } from "react";
import PosterLoading from "../../loading/PosterLoading";

export default function CarouselItem({
  posterUrl,
}: {
  posterUrl: StaticImageData | string;
}) {
  return (
    <>
      <div className="relative flex-shrink-0 w-fit h-fit">
        <Suspense fallback={<PosterLoading />}>
          <CarouselImage posterUrl={posterUrl} />
        </Suspense>
      </div>
    </>
  );
}
