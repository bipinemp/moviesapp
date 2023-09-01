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
    <div className="relative w-full h-[60vh] rounded-lg mb-5 bg-gradient-to-r from-black">
      <div className="z-10 absolute p-10 w-[50%] h-full flex flex-col gap-3 justify-center">
        <h1 className="font-black text-5xl tracking-wide">
          {selectedBanner.title}
        </h1>
        <p className="text-light text-sm">
          {selectedBanner.overview.substring(0, 200)} &nbsp;
          <span className="font-bold text-xl">. . .</span>
        </p>
        <button
          type="button"
          className="bg-darkprimary py-2 px-10 rounded-md w-fit font-bold"
        >
          View
        </button>
      </div>
      <BannerImage bannerUrl={bannerUrl} />
      <span className="w-[50%] h-full bg-black/30 blur-lg absolute top-0 z-0"></span>
    </div>
  );
}
