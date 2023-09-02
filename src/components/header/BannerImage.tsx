import Image, { StaticImageData } from "next/image";

export default function BannerImage({
  bannerUrl,
}: {
  bannerUrl: string | StaticImageData;
}) {
  return (
    <Image
      src={bannerUrl}
      alt="Banner_poster"
      fill
      className="transition-opacity opacity-0 duration-[500ms] object-fill rounded-lg"
      priority={true}
      sizes="(min-width: 2020px) 1504px, (min-width: 1540px) calc(82.61vw - 148px), (min-width: 1280px) calc(100vw - 224px), (min-width: 780px) calc(100vw - 80px), calc(100vw - 32px)"
      onLoadingComplete={(image) => {
        image.classList.remove("opacity-0");
        image.classList.add("opacity-20");
      }}
    />
  );
}
