"use client";

import { BannerType } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { image, upcoming } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Container from "../containers/Container";
import PosterFallback from "@/assets/no-poster.png";
import BannerItem from "./BannerItem";
import BannerLoading from "../loading/BannerLoading";

export default function Banner() {
  const { data, isLoading } = useQuery<BannerType>({
    queryKey: ["banner"],
    queryFn: () => fetchData(upcoming),
  });

  let selectedBanner;
  let bannerUrl;

  if (isLoading) {
    return <BannerLoading />;
  }

  if (data && data.results && data.results.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    selectedBanner = data.results[randomIndex];
    const url = image;
    bannerUrl = selectedBanner.backdrop_path
      ? url + selectedBanner.backdrop_path
      : PosterFallback;
  } else {
    selectedBanner = null;
    bannerUrl = PosterFallback;
  }

  return (
    <Container>
      {data && data.results && selectedBanner && (
        <BannerItem selectedBanner={selectedBanner} bannerUrl={bannerUrl} />
      )}
    </Container>
  );
}
