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
      <div className="z-10 absolute">
        <h1>{selectedBanner.title}</h1>
        <p>{selectedBanner.overview}</p>
      </div>
      <BannerImage bannerUrl={bannerUrl} />
    </div>
  );
}
