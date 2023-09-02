import { Banner } from "@/types/types";
import { StaticImageData } from "next/image";
import BannerImage from "./BannerImage";

export default function BannerItem({
  selectedBanner,
  bannerUrl,
}: {
  selectedBanner: Banner;
  bannerUrl: string | StaticImageData;
}) {
  return (
    <div className="relative w-full h-[400px] rounded-lg mb-5 mt-2 bg-gradient-to-r from-black">
      <div className="z-10 absolute p-10 w-[50%] h-full flex flex-col gap-4 justify-center">
        <h1 className="font-bold text-lg tracking-wide text-light italic">
          NETFLIX ORIGINAL
        </h1>
        <h1 className="font-black text-5xl tracking-wide leading-[55px]">
          {selectedBanner.title}
        </h1>
        <p className="text-light text-sm tracking-wide">
          {selectedBanner.overview.substring(0, 200)}...
        </p>
        <button
          type="button"
          className="bg-darkprimary py-2 px-10 rounded-full shadow-sm tracking-wide hover:scale-95 hover:opacity-90 transition-all ease-in-out shadow-darkprimary w-fit font-bold"
        >
          View
        </button>
      </div>
      <BannerImage bannerUrl={bannerUrl} />
    </div>
  );
}
