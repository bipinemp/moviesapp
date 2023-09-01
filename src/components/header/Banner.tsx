"use client";

import { BannerType } from "@/types/types";
import { fetchData } from "@/utils/apis/queries";
import { image, upcoming } from "@/utils/resource/links";
import { useQuery } from "@tanstack/react-query";
import Container from "../Container";
import PosterFallback from "@/assets/no-poster.png";
import BannerItem from "./BannerItem";

export default function Banner() {
  const { data } = useQuery<BannerType>({
    queryKey: ["banner"],
    queryFn: () => fetchData(upcoming),
  });

  if (!data?.results || data.results.length === 0) {
    return <div>No movies available</div>;
  }

  const randomIndex = Math.floor(Math.random() * data?.results.length);
  const selectedBanner = data?.results[randomIndex];
  let url = image;
  let bannerUrl;
  if (selectedBanner.backdrop_path !== "") {
    bannerUrl = url + selectedBanner.backdrop_path;
  } else {
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
