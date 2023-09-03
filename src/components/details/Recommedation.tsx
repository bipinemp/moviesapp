import { Similar, SimilarType } from "@/types/types";
import React from "react";
import Carousel from "../listings/carousel/Carousel";

export default function Recommedation({
  media,
  data,
  loading,
}: {
  media: string;
  data: SimilarType | undefined;
  loading: boolean;
}) {
  if (loading) {
    return (
      <p className="bg-gray-500 animate-pulse w-[100px] h-[15px] rounded-md"></p>
    );
  }
  return (
    <div className="flex flex-col gap-3 mt-4">
      {data && data.results.length > 0 ? (
        <>
          <h1 className="font-bold text-2xl opacity-80 tracking-wide text-light">
            Recommendations
          </h1>
          <Carousel data={data} media={media} />
        </>
      ) : null}
    </div>
  );
}
