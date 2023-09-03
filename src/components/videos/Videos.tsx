"use client";

import { VideoType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import VideosLoading from "../loading/VideosLoading";
import VideoPopup from "./VideoPopup";

export default function Videos({
  vidData,
  loading,
}: {
  vidData: VideoType | undefined;
  loading: boolean;
}) {
  const [show, setShow] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  if (loading) {
    return <VideosLoading />;
  }

  const reversedResults = [...(vidData?.results || [])].reverse();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg tracking-wider font-semibold">
        Official Videos :
      </h1>
      <div className="flex gap-5 overflow-x-auto no-scrollbar">
        {reversedResults.map((video) => (
          <div
            key={video.id}
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => {
              setVideoId(video.key);
              setShow(true);
            }}
          >
            <div className="relative w-[180px] h-[100px]">
              <Image
                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                fill
                alt="video thumbnail picture"
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="text-[0.75rem] tracking-wide text-light">
              {video.name}
            </div>
          </div>
        ))}
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    </div>
  );
}
