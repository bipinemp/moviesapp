"use client";

import { VideoType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import VideosLoading from "../loading/VideosLoading";
import VideoPopup from "./VideoPopup";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Videos({
  vidData,
  loading,
}: {
  vidData: VideoType | undefined;
  loading: boolean;
}) {
  const [img, setImg] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  if (loading) {
    return <VideosLoading />;
  }

  const reversedResults = [...(vidData?.results || [])].reverse();

  return (
    <div className="flex flex-col gap-3 min-h-[200px]">
      {reversedResults && reversedResults.length > 0 ? (
        <>
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
                <div className="relative w-[180px] h-[100px] border-[1px] rounded-lg flex items-center justify-center">
                  <Image
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    fill
                    alt="video thumbnail picture"
                    className={`object-cover rounded-lg ${
                      img ? "bg-gray-500 animate-pulse" : ""
                    }`}
                    loading="lazy"
                    onLoadingComplete={() => setImg(false)}
                  />
                  <div className="absolute">
                    <AiFillPlayCircle
                      size={40}
                      className="text-white/70 hover:text-white/90 hover:scale-125 transition"
                    />
                  </div>
                </div>
                <div className="text-[0.75rem] w-[180px] tracking-wide text-light">
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
        </>
      ) : null}
    </div>
  );
}
