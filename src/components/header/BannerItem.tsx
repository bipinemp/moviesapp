import { Banner } from "@/types/types";
import { StaticImageData } from "next/image";
import BannerImage from "./BannerImage";
import Link from "next/link";

export default function BannerItem({
  selectedBanner,
  bannerUrl,
}: {
  selectedBanner: Banner;
  bannerUrl: string | StaticImageData;
}) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg mb-5 mt-2 bg-gradient-to-r from-black">
      <div className="z-10 absolute p-5 sm:p-10 w-[100%] sm:w-[70%] lg:w-[50%] h-full flex flex-col gap-4 justify-center">
        <h1 className="font-bold text-sm sm:text-lg tracking-wide text-light italic">
          NETFLIX ORIGINAL
        </h1>
        <h1 className="font-black text-2xl text-white/90 sm:text-5xl tracking-wide sm:leading-[55px]">
          {selectedBanner.title}
        </h1>
        <p className="text-light text-[0.75rem] sm:text-sm tracking-wide">
          {selectedBanner.overview.substring(0, 100)}...
        </p>
        <Link
          href={`movie/${selectedBanner.id}`}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-[0.8rem] sm:text-[0.8rem] py-2 px-7 sm:px-10 rounded-full shadow-sm tracking-wide hover:scale-95 hover:opacity-90 transition-all ease-in-out shadow-darkprimary w-fit font-bold"
        >
          View
        </Link>
      </div>
      <BannerImage bannerUrl={bannerUrl} />
    </div>
  );
}
